// irregular-verbs-test-logic.js
document.addEventListener('DOMContentLoaded', () => {
    const irregularVerbsData = {
        "iv_part1": [ // data-form-id кнопки
            { translate: "быть", v1: "be", v2: "was/were", v3: "been" },
            { translate: "становиться", v1: "become", v2: "became", v3: "become" },
            { translate: "начинать", v1: "begin", v2: "began", v3: "begun" },
            { translate: "ломать", v1: "break", v2: "broke", v3: "broken" },
            { translate: "приносить", v1: "bring", v2: "brought", v3: "brought" },
            { translate: "строить", v1: "build", v2: "built", v3: "built" },
            { translate: "покупать", v1: "buy", v2: "bought", v3: "bought" },
            { translate: "мочь", v1: "can", v2: "could", v3: "been able" }, // V3 для can специфичен
            { translate: "ловить", v1: "catch", v2: "caught", v3: "caught" },
            { translate: "выбирать", v1: "choose", v2: "chose", v3: "chosen" },
            { translate: "приходить", v1: "come", v2: "came", v3: "come" },
            { translate: "стоить", v1: "cost", v2: "cost", v3: "cost" },
            { translate: "резать", v1: "cut", v2: "cut", v3: "cut" },
            { translate: "делать", v1: "do", v2: "did", v3: "done" },
            { translate: "рисовать (карандашом)", v1: "draw", v2: "drew", v3: "drawn" }
        ],
        "iv_part2": [
            { translate: "пить", v1: "drink", v2: "drank", v3: "drunk" },
            { translate: "водить (машину)", v1: "drive", v2: "drove", v3: "driven" },
            { translate: "есть (кушать)", v1: "eat", v2: "ate", v3: "eaten" },
            { translate: "падать", v1: "fall", v2: "fell", v3: "fallen" },
            { translate: "чувствовать", v1: "feel", v2: "felt", v3: "felt" },
            // ... Добавьте еще 10 глаголов для этой части ...
        ],
        // ... Добавьте данные для iv_part3 ... iv_part10 ...
    };

    function populateVerbTable(partId) {
        const tbody = document.getElementById(`verb_table_${partId}`);
        const verbs = irregularVerbsData[partId];
        if (!tbody || !verbs) return;

        let html = "";
        verbs.forEach((verb, index) => {
            const qNum = index + 1;
            html += `
                <tr>
                    <td>${verb.translate}</td>
                    <td>${verb.v1}</td>
                    <td><input type="text" name="v2_${partId}_q${qNum}" autocomplete="off" autocorrect="off" spellcheck="false"></td>
                    <td><input type="text" name="v3_${partId}_q${qNum}" autocomplete="off" autocorrect="off" spellcheck="false"></td>
                </tr>
            `;
        });
        tbody.innerHTML = html;
    }

    // Заполнение таблиц при загрузке
    for (const partId in irregularVerbsData) {
        populateVerbTable(partId);
    }

    const checkButtons = document.querySelectorAll('.check-grammar-answers-btn');

    checkButtons.forEach(button => {
        button.addEventListener('click', function() {
            const formIdSuffix = this.dataset.formId; // e.g., "iv_part1"
            const formElement = this.closest('.grammar-exercises-form');
            if (!formElement) return;

            const tbody = formElement.querySelector(`#verb_table_${formIdSuffix}`);
            const feedbackDiv = formElement.querySelector('.grammar-feedback');
            const verbs = irregularVerbsData[formIdSuffix];
            
            if (!tbody || !verbs || !feedbackDiv) return;

            let allCorrect = true;
            let correctCount = 0;
            let feedbackHTML = `<h4>Результаты для "${this.textContent.replace('Проверить ', '')}":</h4>`;

            verbs.forEach((verb, index) => {
                const qNum = index + 1;
                const inputV2 = tbody.querySelector(`input[name="v2_${formIdSuffix}_q${qNum}"]`);
                const inputV3 = tbody.querySelector(`input[name="v3_${formIdSuffix}_q${qNum}"]`);

                const userV2 = inputV2 ? inputV2.value.trim().toLowerCase() : "";
                const userV3 = inputV3 ? inputV3.value.trim().toLowerCase() : "";

                // Проверка V2 (может быть несколько вариантов, например, was/were)
                const correctV2Options = verb.v2.toLowerCase().split('/');
                const isV2Correct = correctV2Options.includes(userV2);

                // Проверка V3
                const correctV3Options = verb.v3.toLowerCase().split('/');
                const isV3Correct = correctV3Options.includes(userV3);
                
                feedbackHTML += `<p><strong>${verb.v1} (${verb.translate}):</strong> `;
                if (inputV2) inputV2.classList.remove('correct', 'incorrect');
                if (inputV3) inputV3.classList.remove('correct', 'incorrect');

                if (isV2Correct && isV3Correct) {
                    feedbackHTML += `<span class="correct">V2: ${userV2}, V3: ${userV3} - Верно! ✅</span></p>`;
                    if (inputV2) inputV2.classList.add('correct');
                    if (inputV3) inputV3.classList.add('correct');
                    correctCount++;
                } else {
                    allCorrect = false;
                    feedbackHTML += `<span class="incorrect">Ваш ответ: V2: "${userV2}", V3: "${userV3}" - Неверно. ❌</span><br>`;
                    feedbackHTML += `<span class="explanation-text" style="margin-left: 10px;"><i>Правильно: V2: ${verb.v2}, V3: ${verb.v3}</i></span></p>`;
                    if (inputV2) inputV2.classList.add(isV2Correct ? 'correct' : 'incorrect');
                    if (inputV3) inputV3.classList.add(isV3Correct ? 'correct' : 'incorrect');
                }
                 if (index < verbs.length - 1) {
                    feedbackHTML += '<hr>';
                }
            });

            if (verbs.length > 0 && allCorrect) {
                feedbackHTML = `<h4>Результаты для "${this.textContent.replace('Проверить ', '')}":</h4><p class="correct" style="text-align:center; font-weight:bold; font-size:1.2em;">Все ${verbs.length} глаголов введены верно! Отлично! 🎉</p><hr>` + feedbackHTML;
            } else if (verbs.length > 0) {
                 feedbackHTML = `<h4>Результаты для "${this.textContent.replace('Проверить ', '')}":</h4><p style="text-align:center;">Правильных: ${correctCount} из ${verbs.length}. Смотрите детали ниже.</p><hr>` + feedbackHTML;
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
