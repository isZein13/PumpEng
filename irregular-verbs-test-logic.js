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
        "iv_part3": [ // Глаголы 31-45
            { translate: "ударять, попадать", v1: "hit", v2: "hit", v3: "hit" },
            { translate: "держать", v1: "hold", v2: "held", v3: "held" },
            { translate: "ранить, причинять боль", v1: "hurt", v2: "hurt", v3: "hurt" },
            { translate: "хранить, продолжать", v1: "keep", v2: "kept", v3: "kept" },
            { translate: "знать", v1: "know", v2: "knew", v3: "known" },
            { translate: "класть", v1: "lay", v2: "laid", v3: "laid" },
            { translate: "вести, руководить", v1: "lead", v2: "led", v3: "led" },
            { translate: "покидать, оставлять", v1: "leave", v2: "left", v3: "left" },
            { translate: "давать взаймы", v1: "lend", v2: "lent", v3: "lent" },
            { translate: "позволять", v1: "let", v2: "let", v3: "let" },
            { translate: "лежать", v1: "lie", v2: "lay", v3: "lain" }, // (лежать самому)
            { translate: "терять", v1: "lose", v2: "lost", v3: "lost" },
            { translate: "делать, производить", v1: "make", v2: "made", v3: "made" },
            { translate: "означать, иметь в виду", v1: "mean", v2: "meant", v3: "meant" },
            { translate: "встречать", v1: "meet", v2: "met", v3: "met" }
        ],
        "iv_part4": [ // Глаголы 46-60
            { translate: "платить", v1: "pay", v2: "paid", v3: "paid" },
            { translate: "класть, ставить", v1: "put", v2: "put", v3: "put" },
            { translate: "читать", v1: "read", v2: "read", v3: "read" }, // Произношение меняется
            { translate: "ездить верхом", v1: "ride", v2: "rode", v3: "ridden" },
            { translate: "звонить", v1: "ring", v2: "rang", v3: "rung" },
            { translate: "подниматься", v1: "rise", v2: "rose", v3: "risen" },
            { translate: "бежать", v1: "run", v2: "ran", v3: "run" },
            { translate: "говорить, сказать", v1: "say", v2: "said", v3: "said" },
            { translate: "видеть", v1: "see", v2: "saw", v3: "seen" },
            { translate: "продавать", v1: "sell", v2: "sold", v3: "sold" },
            { translate: "посылать", v1: "send", v2: "sent", v3: "sent" },
            { translate: "устанавливать, ставить", v1: "set", v2: "set", v3: "set" },
            { translate: "трясти", v1: "shake", v2: "shook", v3: "shaken" },
            { translate: "светить, сиять", v1: "shine", v2: "shone/shined", v3: "shone/shined" },
            { translate: "стрелять", v1: "shoot", v2: "shot", v3: "shot" }
        ],
        "iv_part5": [ // Глаголы 61-75
            { translate: "показывать", v1: "show", v2: "showed", v3: "shown/showed" },
            { translate: "закрывать", v1: "shut", v2: "shut", v3: "shut" },
            { translate: "петь", v1: "sing", v2: "sang", v3: "sung" },
            { translate: "сидеть", v1: "sit", v2: "sat", v3: "sat" },
            { translate: "спать", v1: "sleep", v2: "slept", v3: "slept" },
            { translate: "говорить (на языке)", v1: "speak", v2: "spoke", v3: "spoken" },
            { translate: "тратить, проводить (время)", v1: "spend", v2: "spent", v3: "spent" },
            { translate: "стоять", v1: "stand", v2: "stood", v3: "stood" },
            { translate: "красть", v1: "steal", v2: "stole", v3: "stolen" },
            { translate: "плавать", v1: "swim", v2: "swam", v3: "swum" },
            { translate: "брать", v1: "take", v2: "took", v3: "taken" },
            { translate: "учить, преподавать", v1: "teach", v2: "taught", v3: "taught" },
            { translate: "рвать", v1: "tear", v2: "tore", v3: "torn" },
            { translate: "рассказывать", v1: "tell", v2: "told", v3: "told" },
            { translate: "думать", v1: "think", v2: "thought", v3: "thought" }
        ],
        "iv_part6": [ // Глаголы 76-90
            { translate: "бросать", v1: "throw", v2: "threw", v3: "thrown" },
            { translate: "понимать", v1: "understand", v2: "understood", v3: "understood" },
            { translate: "просыпаться", v1: "wake", v2: "woke/waked", v3: "woken/waked" },
            { translate: "носить (одежду)", v1: "wear", v2: "wore", v3: "worn" },
            { translate: "выигрывать", v1: "win", v2: "won", v3: "won" },
            { translate: "писать", v1: "write", v2: "wrote", v3: "written" },
            { translate: "дуть", v1: "blow", v2: "blew", v3: "blown" },
            { translate: "кусать", v1: "bite", v2: "bit", v3: "bitten" },
            { translate: "кровоточить", v1: "bleed", v2: "bled", v3: "bled" },
            { translate: "транслировать", v1: "broadcast", v2: "broadcast", v3: "broadcast" },
            { translate: "гореть, жечь", v1: "burn", v2: "burnt/burned", v3: "burnt/burned" },
            { translate: "копать", v1: "dig", v2: "dug", v3: "dug" },
            { translate: "мечтать, видеть сны", v1: "dream", v2: "dreamt/dreamed", v3: "dreamt/dreamed" },
            { translate: "кормить", v1: "feed", v2: "fed", v3: "fed" },
            { translate: "бороться", v1: "fight", v2: "fought", v3: "fought" }
        ],
        "iv_part7": [ // Глаголы 91-105
            { translate: "прощать", v1: "forgive", v2: "forgave", v3: "forgiven" },
            { translate: "замерзать", v1: "freeze", v2: "froze", v3: "frozen" },
            { translate: "вешать (картину)", v1: "hang", v2: "hung", v3: "hung" },
            { translate: "вешать (казнить)", v1: "hang", v2: "hanged", v3: "hanged" }, // Отдельный случай
            { translate: "ударять", v1: "hit", v2: "hit", v3: "hit" }, // Повтор, был в части 3
            { translate: "вредить", v1: "hurt", v2: "hurt", v3: "hurt" }, // Повтор
            { translate: "учить (самостоятельно)", v1: "learn", v2: "learnt/learned", v3: "learnt/learned" },
            { translate: "лежать (лгать)", v1: "lie", v2: "lied", v3: "lied" }, // Отличается от lie (лежать)
            { translate: "зажигать", v1: "light", v2: "lit/lighted", v3: "lit/lighted" },
            { translate: "ошибаться", v1: "mistake", v2: "mistook", v3: "mistaken" },
            { translate: "преодолевать", v1: "overcome", v2: "overcame", v3: "overcome" },
            { translate: "доказывать", v1: "prove", v2: "proved", v3: "proven/proved" },
            { translate: "искать", v1: "seek", v2: "sought", v3: "sought" },
            { translate: "шить", v1: "sew", v2: "sewed", v3: "sewn/sewed" },
            { translate: "брить(ся)", v1: "shave", v2: "shaved", v3: "shaved/shaven" }
        ],
        "iv_part8": [ // Глаголы 106-120
            { translate: "сокращаться", v1: "shrink", v2: "shrank/shrunk", v3: "shrunk/shrunken" },
            { translate: "тонуть", v1: "sink", v2: "sank", v3: "sunk" },
            { translate: "пахнуть", v1: "smell", v2: "smelt/smelled", v3: "smelt/smelled" },
            { translate: "сеять", v1: "sow", v2: "sowed", v3: "sown/sowed" },
            { translate: "произносить по буквам", v1: "spell", v2: "spelt/spelled", v3: "spelt/spelled" },
            { translate: "проливать", v1: "spill", v2: "spilt/spilled", v3: "spilt/spilled" },
            { translate: "портить", v1: "spoil", v2: "spoilt/spoiled", v3: "spoilt/spoiled" },
            { translate: "распространять(ся)", v1: "spread", v2: "spread", v3: "spread" },
            { translate: "прыгать, возникать", v1: "spring", v2: "sprang/sprung", v3: "sprung" },
            { translate: "жалить", v1: "sting", v2: "stung", v3: "stung" },
            { translate: "вонять", v1: "stink", v2: "stank/stunk", v3: "stunk" },
            { translate: "клясться", v1: "swear", v2: "swore", v3: "sworn" },
            { translate: "потеть", v1: "sweat", v2: "sweat/sweated", v3: "sweat/sweated" },
            { translate: "подметать", v1: "sweep", v2: "swept", v3: "swept" },
            { translate: "плакать", v1: "weep", v2: "wept", v3: "wept" }
        ],
         "iv_part9": [ // Глаголы 121-135
            { translate: "ударять (палкой)", v1: "strike", v2: "struck", v3: "struck/stricken" },
            { translate: "приклеивать", v1: "stick", v2: "stuck", v3: "stuck" },
            { translate: "клясться, ругаться", v1: "swear", v2: "swore", v3: "sworn" }, // Повтор
            { translate: "метать, бросать", v1: "throw", v2: "threw", v3: "thrown" }, // Повтор
            { translate: "будить", v1: "wake", v2: "woke", v3: "woken" }, // Повтор
            { translate: "ткать", v1: "weave", v2: "wove/weaved", v3: "woven/weaved" },
            { translate: "мочить", v1: "wet", v2: "wet/wetted", v3: "wet/wetted" },
            { translate: "шептать", v1: "whisper", v2: "whispered", v3: "whispered" }, // Правильный глагол
            { translate: "свистеть", v1: "whistle", v2: "whistled", v3: "whistled" }, // Правильный глагол
            { translate: "гадать, удивляться", v1: "wonder", v2: "wondered", v3: "wondered" }, // Правильный глагол
            { translate: "работать", v1: "work", v2: "worked", v3: "worked" }, // Правильный глагол
            { translate: "поклоняться", v1: "worship", v2: "worshipped/worshiped", v3: "worshipped/worshiped" },
            { translate: "обертывать", v1: "wrap", v2: "wrapped", v3: "wrapped" }, // Правильный глагол
            { translate: "бороться (физически)", v1: "wrestle", v2: "wrestled", v3: "wrestled" }, // Правильный глагол
            { translate: "зевать", v1: "yawn", v2: "yawned", v3: "yawned" } // Правильный глагол
        ],
        "iv_part10": [ // Глаголы 136-150 (завершающие и несколько правильных для разнообразия)
            { translate: "кричать (от радости/боли)", v1: "yell", v2: "yelled", v3: "yelled" }, // Правильный глагол
            { translate: "уступать (дорогу)", v1: "yield", v2: "yielded", v3: "yielded" }, // Повтор
            { translate: "застегивать молнию", v1: "zip", v2: "zipped", v3: "zipped" }, // Повтор
            { translate: "приближать (зум)", v1: "zoom", v2: "zoomed", v3: "zoomed" }, // Повтор
            // Добавим еще уникальных неправильных
            { translate: "привязывать", v1: "bind", v2: "bound", v3: "bound" },
            { translate: "разводить (животных)", v1: "breed", v2: "bred", v3: "bred" },
            { translate: "цепляться", v1: "cling", v2: "clung", v3: "clung" },
            { translate: "ползти", v1: "creep", v2: "crept", v3: "crept" },
            { translate: "иметь дело", v1: "deal", v2: "dealt", v3: "dealt" },
            { translate: "бежать (спасаться)", v1: "flee", v2: "fled", v3: "fled" },
            { translate: "запрещать", v1: "forbid", v2: "forbade/forbad", v3: "forbidden" },
            { translate: "предвидеть", v1: "foresee", v2: "foresaw", v3: "foreseen" },
            { translate: "молоть", v1: "grind", v2: "ground", v3: "ground" },
            { translate: "становиться на колени", v1: "kneel", v2: "knelt/kneeled", v3: "knelt/kneeled" },
            { translate: "вязать", v1: "knit", v2: "knit/knitted", v3: "knit/knitted" }
        ]
    };

    function populateVerbTable(partId) {
        const tbody = document.getElementById(`verb_table_${partId}`);
        const verbs = irregularVerbsData[partId];
        if (!tbody) {
            return; 
        }
        if(!verbs) {
            tbody.innerHTML = `<tr><td colspan="4" style="text-align:center; font-style:italic;">Упражнения для этой части скоро появятся.</td></tr>`;
            return;
        }
        if (tbody.dataset.populated === 'true') {
            return;
        }
        let html = "";
        verbs.forEach((verb, index) => {
            const qNum = index + 1;
            html += `
                <tr data-verb-v1="${verb.v1.toLowerCase()}">
                    <td>${verb.translate}</td>
                    <td>${verb.v1}</td>
                    <td><input type="text" name="v2_${partId}_q${qNum}" id="v2_${partId}_q${qNum}" autocomplete="off" autocorrect="off" autocapitalize="none" spellcheck="false"></td>
                    <td><input type="text" name="v3_${partId}_q${qNum}" id="v3_${partId}_q${qNum}" autocomplete="off" autocorrect="off" autocapitalize="none" spellcheck="false"></td>
                </tr>
            `;
        });
        tbody.innerHTML = html;
        tbody.dataset.populated = 'true';
    }

    const allDetailsBlocks = document.querySelectorAll('details.exercise-details');

    if (allDetailsBlocks.length > 0) {
        allDetailsBlocks.forEach(detailsBlock => {
            const form = detailsBlock.querySelector('form.grammar-exercises-form');
            if (form) {
                const partId = form.id.replace('form_', ''); 
                if (irregularVerbsData[partId]) {
                    if (detailsBlock.hasAttribute('open')) {
                        populateVerbTable(partId);
                    }
                    detailsBlock.addEventListener('toggle', function() {
                        if (this.open) {
                            populateVerbTable(partId);
                        }
                    });
                }
            }
        });
    } else {
        for (const partId in irregularVerbsData) {
            if (irregularVerbsData.hasOwnProperty(partId)) {
                if (document.getElementById(`verb_table_${partId}`)) {
                    populateVerbTable(partId);
                }
            }
        }
    }

    const checkButtons = document.querySelectorAll('.check-grammar-answers-btn');
    checkButtons.forEach(button => {
        button.addEventListener('click', function() {
            const formIdSuffix = this.dataset.formId; 
            const formElement = this.closest('.grammar-exercises-form');
            if (!formElement) {
                 console.error("Parent form not found for button:", this);
                 return;
            }
            const tbody = formElement.querySelector(`#verb_table_${formIdSuffix}`);
            const feedbackDiv = formElement.querySelector('.grammar-feedback');
            const verbsForThisPart = irregularVerbsData[formIdSuffix];
            
            if (!tbody || !verbsForThisPart || !feedbackDiv) {
                console.error("Required elements not found for form:", formIdSuffix, {tbody, verbsForThisPart, feedbackDiv});
                if(tbody && !verbsForThisPart && feedbackDiv) feedbackDiv.innerHTML = `<p>Нет данных для проверки для части: ${formIdSuffix}</p>`;
                if(feedbackDiv) feedbackDiv.style.display = 'block';
                return;
            }

            let allVerbsCorrectOverall = true; 
            let correctPairsCount = 0; 
            let feedbackHTML = `<h4>Результаты для "${this.textContent.replace('Проверить ', '')}":</h4>`;

            verbsForThisPart.forEach((verb, index) => {
                const qNum = index + 1;
                const inputV2 = tbody.querySelector(`input[name="v2_${formIdSuffix}_q${qNum}"]`);
                const inputV3 = tbody.querySelector(`input[name="v3_${formIdSuffix}_q${qNum}"]`);

                if (!inputV2 || !inputV3) {
                    console.warn(`Inputs for verb ${verb.v1} (q${qNum}) in ${formIdSuffix} not found.`);
                    allVerbsCorrectOverall = false; 
                    return; 
                }

                const userV2 = inputV2.value.trim().toLowerCase();
                const userV3 = inputV3.value.trim().toLowerCase();

                const correctV2Options = verb.v2.toLowerCase().split('/');
                const isV2Correct = correctV2Options.includes(userV2);

                const correctV3Options = verb.v3.toLowerCase().split('/');
                const isV3Correct = correctV3Options.includes(userV3);
                
                inputV2.classList.remove('correct', 'incorrect');
                inputV3.classList.remove('correct', 'incorrect');
                
                feedbackHTML += `<p><strong>${verb.v1}</strong> (<span class="verb-translate">${verb.translate}</span>): `;

                if (userV2 === "" && userV3 === "") {
                    feedbackHTML += `<span class="incorrect">Ответ не дан. ❌</span>`;
                    allVerbsCorrectOverall = false;
                } else {
                    let currentVerbPairCorrect = true;
                    if (isV2Correct) {
                        inputV2.classList.add('correct');
                    } else {
                        inputV2.classList.add('incorrect');
                        currentVerbPairCorrect = false;
                        allVerbsCorrectOverall = false;
                    }
                    if (isV3Correct) {
                        inputV3.classList.add('correct');
                    } else {
                        inputV3.classList.add('incorrect');
                        currentVerbPairCorrect = false;
                        allVerbsCorrectOverall = false;
                    }

                    if (currentVerbPairCorrect) {
                        feedbackHTML += `<span class="correct">V2: ${inputV2.value.trim()}, V3: ${inputV3.value.trim()} - Верно! ✅</span>`; // Отображаем введенное пользователем значение
                        correctPairsCount++;
                    } else {
                        feedbackHTML += `<span class="incorrect">Ваш ответ: V2: "${inputV2.value.trim()}", V3: "${inputV3.value.trim()}" - Неверно. ❌</span><br>`;
                        feedbackHTML += `<span class="explanation-text" style="margin-left: 10px;"><i>Правильно: V2: ${verb.v2}, V3: ${verb.v3}</i></span>`;
                    }
                }
                feedbackHTML += `</p>`;
                if (index < verbsForThisPart.length - 1) {
                    feedbackHTML += '<hr>';
                }
            });

            if (verbsForThisPart.length > 0) {
                if (allVerbsCorrectOverall && correctPairsCount === verbsForThisPart.length) { 
                    feedbackHTML = `<h4>Результаты для "${this.textContent.replace('Проверить ', '')}":</h4><p class="correct" style="text-align:center; font-weight:bold; font-size:1.2em;">Все ${verbsForThisPart.length} глаголов введены верно! Отлично! 🎉</p><hr>` + feedbackHTML;
                } else {
                     feedbackHTML = `<h4>Результаты для "${this.textContent.replace('Проверить ', '')}":</h4><p style="text-align:center;">Правильно введенных пар глаголов (V2 и V3): ${correctPairsCount} из ${verbsForThisPart.length}. Смотрите детали ниже.</p><hr>` + feedbackHTML;
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
