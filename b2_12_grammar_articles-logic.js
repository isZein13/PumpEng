// b2_12_grammar_articles-logic.js
document.addEventListener('DOMContentLoaded', () => {
    const grammarCorrectAnswers = {
        // --- Упражнение 1: Артикли с географическими названиями ---
        "b2_art_ex1_q1": { correct: "c", explanation: "С названиями горных цепей (the Rocky Mountains) используется 'the'." },
        "b2_art_ex1_q2": { correct: "c", explanation: "С названиями стран, включающими 'Kingdom', 'States', 'Republic', используется 'the'." },
        "b2_art_ex1_q3": { correct: "c", explanation: "С названиями пустынь (the Sahara Desert) используется 'the'." },
        "b2_art_ex1_q4": { correct: "d", explanation: "С названиями большинства стран в единственном числе артикль не используется." },
        "b2_art_ex1_q5": { correct: "d", explanation: "С названиями отдельных озер (Lake Superior) артикль не используется." },
        "b2_art_ex1_q6": { correct: "c", explanation: "С названиями океанов (the Pacific Ocean) используется 'the'." },
        "b2_art_ex1_q7": { correct: "d", explanation: "С названиями отдельных гор (Mount Fuji) артикль не используется." },
        "b2_art_ex1_q8": { correct: "c", explanation: "С названиями рек (the River Nile) используется 'the'." },
        "b2_art_ex1_q9": { correct: "c", explanation: "С названиями стран во множественном числе (the Netherlands) используется 'the'." },
        "b2_art_ex1_q10": { correct: "d", explanation: "С названиями городов (Rome, Vatican City) артикль не используется." },

        // --- Упражнение 2: Абстрактные и неисчисляемые существительные ---
        "b2_art_ex2_q1": { correct: "c", explanation: "Education в общем, абстрактном значении используется без артикля." },
        "b2_art_ex2_q2": { correct: "b", explanation: "Речь идет о конкретном образовании, полученном в конкретном университете. Используется 'the'." },
        "b2_art_ex2_q3": { correct: "c", explanation: "Happiness в общем, философском значении используется без артикля." },
        "b2_art_ex2_q4": { correct: "b", explanation: "Речь идет о конкретном счастье, которое она чувствовала в конкретный день. Используется 'the'." },
        "b2_art_ex2_q5": { correct: "c", explanation: "'Advice' - неисчисляемое. Неопределенный артикль 'a/an' не используется. Можно сказать 'some advice'." },
        "b2_art_ex2_q6": { correct: "b", explanation: "Речь идет о конкретном совете, который ты мне дал. Используется 'the'." },
        "b2_art_ex2_q7": { correct: "c", explanation: "Knowledge в общем, абстрактном значении используется без артикля." },
        "b2_art_ex2_q8": { correct: "a", explanation: "Когда неисчисляемое существительное описывается прилагательным ('deep'), оно может использоваться с 'a/an' для обозначения 'a type of'." },
        "b2_art_ex2_q9": { correct: "b", explanation: "Говорим о конкретной погоде, которая была вчера. Используется 'the'." },
        "b2_art_ex2_q10": { correct: "c", explanation: "'Weather' используется в общем значении после 'in'. 'In such bad weather' - устойчивая фраза." },

        // --- Упражнение 3: Zero Article в устойчивых выражениях ---
        "b2_art_ex3_q1": { correct: "c", explanation: "Устойчивые выражения: 'go to work' и 'by bus'. В обоих случаях артикль не нужен." },
        "b2_art_ex3_q2": { correct: "b", explanation: "Устойчивые выражения: 'at school' (как в процессе учебы) и 'have dinner' (прием пищи). В обоих случаях артикль не нужен." },
        "b2_art_ex3_q3": { correct: "c", explanation: "Устойчивые выражения: 'in hospital' (как пациент) и 'since last Monday' (перед 'last' артикль не ставится)." },
        "b2_art_ex3_q4": { correct: "d", explanation: "Устойчивое выражение 'go to bed'." },
        "b2_art_ex3_q5": { correct: "c", explanation: "Устойчивое выражение 'be sent to prison' (как заключенный)." },
        "b2_art_ex3_q6": { correct: "d", explanation: "Устойчивое выражение 'go to university' (как студент)." },
        "b2_art_ex3_q7": { correct: "a", explanation: "Когда речь идет о здании тюрьмы, а не о процессе отбывания наказания, используется 'the'." },
        "b2_art_ex3_q8": { correct: "c", explanation: "С приемами пищи (breakfast, lunch, dinner) в общем значении артикль не используется." },
        "b2_art_ex3_q9": { correct: "c", explanation: "Устойчивое выражение 'go to work'." },
        "b2_art_ex3_q10": { correct: "a", explanation: "Речь идет о конкретном, определенном саде (например, саде нашего дома). Используется 'the'." },
        
        // --- Упражнение 4: 'a/an' vs. 'the' (Специфические случаи) ---
        "b2_art_ex4_q1": { correct: "a", explanation: "С названиями профессий используется 'a/an'." },
        "b2_art_ex4_q2": { correct: "b", explanation: "С уникальными объектами (Луна, Земля) используется 'the'." },
        "b2_art_ex4_q3": { correct: "a", explanation: "С музыкальными инструментами (play the piano) используется 'the', а с видами спорта (play football) - нет." },
        "b2_art_ex4_q4": { correct: "c", explanation: "С превосходной степенью прилагательных (the most intelligent) используется 'the'." },
        "b2_art_ex4_q5": { correct: "a", explanation: "В выражениях частоты ('twice a month') используется 'a/an'." },
        "b2_art_ex4_q6": { correct: "b", explanation: "С уникальными титулами и должностями (The President) используется 'the'." },
        "b2_art_ex4_q7": { correct: "a", explanation: "Используется 'a' перед исчисляемым существительным в ед.ч. 'pair'." },
        "b2_art_ex4_q8": { correct: "c", explanation: "'the' + прилагательное используется для обозначения группы людей (the rich - богатые, the poor - бедные)." },
        "b2_art_ex4_q9": { correct: "d", explanation: "Слово 'honour' начинается с гласного звука [ɒ], поэтому используется 'an'." },
        "b2_art_ex4_q10": { correct: "d", explanation: "Слово 'astronaut' начинается с гласного звука [æ], поэтому 'an'." },

        // --- Упражнение 5: Mixed Practice ---
        "b2_art_ex5_q1": { correct: "c", explanation: "Оба существительных ('life', 'technology') используются в общем, абстрактном значении, поэтому артикли не нужны." },
        "b2_art_ex5_q2": { correct: "b", explanation: "С горной цепью 'the Alps' используется 'the', со страной 'Italy' - нет." },
        "b2_art_ex5_q3": { correct: "c", explanation: "Речь идет о конкретном ужине, который ты приготовил. Используется 'the'." },
        "b2_art_ex5_q4": { correct: "a", explanation: "'A good understanding' - это исчисляемое понятие. 'Physics' как наука используется без артикля." },
        "b2_art_ex5_q5": { correct: "b", explanation: "Первое упоминание: 'an accident'. Второе упоминание: 'The car'. Первое упоминание дерева: 'a tree'." },
        "b2_art_ex5_q6": { correct: "b", explanation: "Мы конкретизируем 'history', говоря 'of ancient Greece', поэтому 'the history'. Название страны 'Greece' без артикля." },
        "b2_art_ex5_q7": { correct: "b", explanation: "С уникальным титулом 'The Queen' используется 'the'. С первым упоминанием 'a new hospital' - 'a'." },
        "b2_art_ex5_q8": { correct: "b", explanation: "С фамилией во мн.ч. для обозначения семьи используется 'the'. Сын уже упоминался (у них есть сын), поэтому 'The son'." },
        "b2_art_ex5_q9": { correct: "b", explanation: "Первая часть - 'beauty' в общем значении (без артикля). Вторая часть - конкретная красота картины ('the beauty')." },
        "b2_art_ex5_q10": { correct: "b", explanation: "Устойчивое выражение 'in prison' (как заключенный) - без артикля. 'the same' - всегда с 'the'." }
    };
    
    // ... (остальной JS код для проверки остается без изменений) ...
    const checkButtons = document.querySelectorAll('.check-grammar-answers-btn');

    checkButtons.forEach(button => {
        button.addEventListener('click', function() {
            const formIdSuffix = this.dataset.formId;
            const formElement = this.closest('.grammar-exercises-form');
            if (!formElement) {
                console.error("Could not find parent form for button with data-form-id:", formIdSuffix);
                return;
            }
            const exercisesInForm = formElement.querySelectorAll('.grammar-exercise');
            const feedbackDiv = formElement.querySelector('.grammar-feedback');
            let allCorrect = true;
            let feedbackHTML = `<h4>Результаты для "${this.textContent.replace('Проверить ', '')}":</h4>`;
            let exercisesAttempted = 0;

            exercisesInForm.forEach((exerciseDiv, index) => {
                const questionNumber = index + 1;
                const firstRadioInQuestion = exerciseDiv.querySelector('.exercise-options input[type="radio"]');
                if (!firstRadioInQuestion) {
                    console.warn(`No radio buttons found for question ${questionNumber} in form ${formIdSuffix}`);
                    return; 
                }
                const radioGroupName = firstRadioInQuestion.name;

                const questionTextP = exerciseDiv.querySelector('p strong');
                if (!questionTextP) return;
                const questionFullText = questionTextP.textContent;
                const questionShortText = questionFullText.includes('. ') ? questionFullText.substring(questionFullText.indexOf('. ') + 2) : questionShortText;

                const selectedOption = exerciseDiv.querySelector(`input[name="${radioGroupName}"]:checked`);
                
                feedbackHTML += `<p><strong>Вопрос ${questionNumber}:</strong> ${questionShortText}</p>`;

                if (selectedOption) {
                    exercisesAttempted++;
                    const userAnswer = selectedOption.value;
                    const answerKey = `${formIdSuffix}_q${questionNumber}`;
                    const correctAnswerInfo = grammarCorrectAnswers[answerKey];

                    if (correctAnswerInfo && userAnswer.toLowerCase() === correctAnswerInfo.correct.toLowerCase()) {
                        feedbackHTML += `<p class="correct">Ваш ответ: "${selectedOption.parentElement.textContent.trim()}" - Верно! ✅</p>`;
                    } else {
                        allCorrect = false;
                        feedbackHTML += `<p class="incorrect">Ваш ответ: "${selectedOption.parentElement.textContent.trim()}" - Неверно. ❌</p>`;
                        if (correctAnswerInfo) {
                            const correctLabelElement = exerciseDiv.querySelector(`.exercise-options input[value="${correctAnswerInfo.correct.toLowerCase()}"]`);
                            const correctLabelText = correctLabelElement ? correctLabelElement.parentElement.textContent.trim() : `(Правильный вариант: ${correctAnswerInfo.correct})`;
                            feedbackHTML += `<p>Правильный ответ: "${correctLabelText}"</p>`;
                        } else {
                            feedbackHTML += `<p><em>(Информация о правильном ответе для этого вопроса отсутствует: ${answerKey})</em></p>`;
                        }
                    }
                    if (correctAnswerInfo && correctAnswerInfo.explanation) {
                        feedbackHTML += `<p class="explanation-text"><i>Объяснение: ${correctAnswerInfo.explanation}</i></p>`;
                    }
                } else {
                    allCorrect = false;
                    feedbackHTML += `<p class="incorrect">На этот вопрос не дан ответ. ❌</p>`;
                }
                if (index < exercisesInForm.length - 1) {
                    feedbackHTML += '<hr>';
                }
            });

            if (exercisesAttempted === 0 && exercisesInForm.length > 0) {
                 feedbackHTML = `<h4>Результаты для "${this.textContent.replace('Проверить ', '')}":</h4><p>Пожалуйста, выполните упражнения.</p>`;
            } else if (exercisesAttempted > 0 && allCorrect) {
                feedbackHTML = `<h4>Результаты для "${this.textContent.replace('Проверить ', '')}":</h4><p class="correct" style="text-align:center; font-weight:bold; font-size:1.2em;">Все ответы верны! Отлично! 🎉</p><hr>` + feedbackHTML;
            }

            if (feedbackDiv) {
                feedbackDiv.innerHTML = feedbackHTML;
                feedbackDiv.style.display = 'block';
                const headerOffset = document.querySelector('header')?.offsetHeight || 70;
                const elementPosition = feedbackDiv.getBoundingClientRect().top;
                const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
                
                window.scrollTo({
                     top: offsetPosition,
                     behavior: "smooth"
                });
            } else {
                console.error("Feedback div not found in form associated with button:", formIdSuffix);
            }
        });
    });
});
