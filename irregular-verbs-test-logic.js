// irregular-verbs-test-logic.js
document.addEventListener('DOMContentLoaded', () => {
    const irregularVerbsData = {
        "iv_part1": [ // Глаголы 1-15
            { translate: "быть", v1: "be", v2: "was/were", v3: "been" },
            { translate: "становиться", v1: "become", v2: "became", v3: "become" },
            { translate: "начинать", v1: "begin", v2: "began", v3: "begun" },
            { translate: "ломать", v1: "break", v2: "broke", v3: "broken" },
            { translate: "приносить", v1: "bring", v2: "brought", v3: "brought" },
            { translate: "строить", v1: "build", v2: "built", v3: "built" },
            { translate: "покупать", v1: "buy", v2: "bought", v3: "bought" },
            { translate: "мочь", v1: "can", v2: "could", v3: "been able" },
            { translate: "ловить", v1: "catch", v2: "caught", v3: "caught" },
            { translate: "выбирать", v1: "choose", v2: "chose", v3: "chosen" },
            { translate: "приходить", v1: "come", v2: "came", v3: "come" },
            { translate: "стоить", v1: "cost", v2: "cost", v3: "cost" },
            { translate: "резать", v1: "cut", v2: "cut", v3: "cut" },
            { translate: "делать", v1: "do", v2: "did", v3: "done" },
            { translate: "рисовать (карандашом)", v1: "draw", v2: "drew", v3: "drawn" }
        ],
        "iv_part2": [ // Глаголы 16-30
            { translate: "пить", v1: "drink", v2: "drank", v3: "drunk" },
            { translate: "водить (машину)", v1: "drive", v2: "drove", v3: "driven" },
            { translate: "есть (кушать)", v1: "eat", v2: "ate", v3: "eaten" },
            { translate: "падать", v1: "fall", v2: "fell", v3: "fallen" },
            { translate: "чувствовать", v1: "feel", v2: "felt", v3: "felt" },
            { translate: "находить", v1: "find", v2: "found", v3: "found" },
            { translate: "летать", v1: "fly", v2: "flew", v3: "flown" },
            { translate: "забывать", v1: "forget", v2: "forgot", v3: "forgotten/forgot" },
            { translate: "получать", v1: "get", v2: "got", v3: "got/gotten" },
            { translate: "давать", v1: "give", v2: "gave", v3: "given" },
            { translate: "идти", v1: "go", v2: "went", v3: "gone" },
            { translate: "расти", v1: "grow", v2: "grew", v3: "grown" },
            { translate: "иметь", v1: "have", v2: "had", v3: "had" },
            { translate: "слышать", v1: "hear", v2: "heard", v3: "heard" },
            { translate: "прятать", v1: "hide", v2: "hid", v3: "hidden" }
        ],
        // --- ДОБАВЬТЕ ДАННЫЕ ДЛЯ ОСТАЛЬНЫХ ЧАСТЕЙ ЗДЕСЬ ---
        // "iv_part3": [ { translate: "...", v1: "...", v2: "...", v3: "..." }, ... ],
        // ...
        // "iv_part10": [ { translate: "...", v1: "...", v2: "...", v3: "..." }, ... ],
    };

    function populateVerbTable(partId) {
        const tbody = document.getElementById(`verb_table_${partId}`);
        const verbs = irregularVerbsData[partId];
        if (!tbody || !verbs) {
            // console.warn(`Table body or data not found for ${partId}`);
            return; // Если нет данных для этой части, просто выходим
        }
        if (tbody.innerHTML.trim() !== "") return; // Не перезаполнять, если уже заполнено

        let html = "";
        verbs.forEach((verb, index) => {
            const qNum = index + 1;
            html += `
                <tr data-verb-v1="${verb.v1.toLowerCase()}">
                    <td>${verb.translate}</td>
                    <td>${verb.v1}</td>
                    <td><input type="text" name="v2_${partId}_q${qNum}" autocomplete="off" autocorrect="off" autocapitalize="none" spellcheck="false"></td>
                    <td><input type="text" name="v3_${partId}_q${qNum}" autocomplete="off" autocorrect="off" autocapitalize="none" spellcheck="false"></td>
                </tr>
            `;
        });
        tbody.innerHTML = html;
    }

    // Заполнение таблиц при загрузке для всех существующих частей
    for (const partId in irregularVerbsData) {
        if (irregularVerbsData.hasOwnProperty(partId)) {
            populateVerbTable(partId);
        }
    }
    
    // Если есть блоки <details>, заполняем таблицу только когда блок открывается
    const allDetailsBlocks = document.querySelectorAll('details.exercise-details');
    allDetailsBlocks.forEach(detailsBlock => {
        const form = detailsBlock.querySelector('form.grammar-exercises-form');
        if (form) {
            const partId = form.id.replace('form_', ''); // e.g., "iv_part1"
             if (detailsBlock.hasAttribute('open')) { // Если открыт по умолчанию
                populateVerbTable(partId);
            }
            detailsBlock.addEventListener('toggle', function() {
                if (this.open) {
                    populateVerbTable(partId);
                }
            });
        }
    });


    const checkButtons = document.querySelectorAll('.check-grammar-answers-btn');

    checkButtons.forEach(button => {
        button.addEventListener('click', function() {
            const formIdSuffix = this.dataset.formId; // e.g., "iv_part1"
            const formElement = this.closest('.grammar-exercises-form');
            if (!formElement) {
                 console.error("Parent form not found for button:", this);
                 return;
            }

            const tbody = formElement.querySelector(`#verb_table_${formIdSuffix}`);
            const feedbackDiv = formElement.querySelector('.grammar-feedback');
            const verbsForThisPart = irregularVerbsData[formIdSuffix];
            
            if (!tbody || !verbsForThisPart || !feedbackDiv) {
                console.error("Required elements not found for form:", formIdSuffix);
                return;
            }

            let allVerbsCorrect = true;
            let correctVerbCount = 0;
            let feedbackHTML = `<h4>Результаты для "${this.textContent.replace('Проверить ', '')}":</h4>`;

            verbsForThisPart.forEach((verb, index) => {
                const qNum = index + 1;
                const inputV2 = tbody.querySelector(`input[name="v2_${formIdSuffix}_q${qNum}"]`);
                const inputV3 = tbody.querySelector(`input[name="v3_${formIdSuffix}_q${qNum}"]`);

                const userV2 = inputV2 ? inputV2.value.trim().toLowerCase() : "";
                const userV3 = inputV3 ? inputV3.value.trim().toLowerCase() : "";

                const correctV2Options = verb.v2.toLowerCase().split('/');
                const isV2Correct = correctV2Options.includes(userV2);

                const correctV3Options = verb.v3.toLowerCase().split('/');
                const isV3Correct = correctV3Options.includes(userV3);
                
                feedbackHTML += `<p><strong>${verb.v1}</strong> (<span class="verb-translate">${verb.translate}</span>): `;
                if (inputV2) inputV2.classList.remove('correct', 'incorrect');
                if (inputV3) inputV3.classList.remove('correct', 'incorrect');

                let rowCorrect = true;

                if (userV2 === "" && userV3 === "") {
                    feedbackHTML += `<span class="incorrect">Ответ не дан. ❌</span>`;
                    rowCorrect = false;
                    allVerbsCorrect = false;
                } else {
                    // V2 check
                    if (isV2Correct) {
                        if (inputV2) inputV2.classList.add('correct');
                    } else {
                        if (inputV2) inputV2.classList.add('incorrect');
                        rowCorrect = false;
                        allVerbsCorrect = false;
                    }
                    // V3 check
                    if (isV3Correct) {
                        if (inputV3) inputV3.classList.add('correct');
                    } else {
                        if (inputV3) inputV3.classList.add('incorrect');
                        rowCorrect = false;
                        allVerbsCorrect = false;
                    }

                    if (rowCorrect) {
                        feedbackHTML += `<span class="correct">V2: ${userV2}, V3: ${userV3} - Верно! ✅</span>`;
                        correctVerbCount++;
                    } else {
                        feedbackHTML += `<span class="incorrect">Ваш ответ: V2: "${userV2}", V3: "${userV3}" - Неверно. ❌</span><br>`;
                        feedbackHTML += `<span class="explanation-text" style="margin-left: 10px;"><i>Правильно: V2: ${verb.v2}, V3: ${verb.v3}</i></span>`;
                    }
                }
                feedbackHTML += `</p>`;
                if (index < verbsForThisPart.length - 1) {
                    feedbackHTML += '<hr>';
                }
            });

            if (verbsForThisPart.length > 0) {
                if (allVerbsCorrect) {
                    feedbackHTML = `<h4>Результаты для "${this.textContent.replace('Проверить ', '')}":</h4><p class="correct" style="text-align:center; font-weight:bold; font-size:1.2em;">Все ${verbsForThisPart.length} глаголов введены верно! Отлично! 🎉</p><hr>` + feedbackHTML;
                } else {
                     feedbackHTML = `<h4>Результаты для "${this.textContent.replace('Проверить ', '')}":</h4><p style="text-align:center;">Правильно введенных глаголов (обе формы): ${correctVerbCount} из ${verbsForThisPart.length}. Смотрите детали ниже.</p><hr>` + feedbackHTML;
                }
            } else {
                feedbackHTML = `<h4>Результаты для "${this.textContent.replace('Проверить ', '')}":</h4><p>Нет глаголов для проверки в этой части.</p>`;
            }


            feedbackDiv.innerHTML = feedbackHTML;
            feedbackDiv.style.display = 'block';
            const headerOffset = document.querySelector('header')?.offsetHeight || 70;
            const elementPosition = feedbackDiv.getBoundingClientRect().top;
            const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
            
            window.scrollTo({
                 top: offsetPosition,
                 behavior: "smooth"
            });
        });
    });
});
