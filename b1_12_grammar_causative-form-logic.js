// b1_12_grammar_causative-form-logic.js
document.addEventListener('DOMContentLoaded', () => {
    const grammarCorrectAnswers = {
        // --- Упражнение 1: Образование с 'have' ---
        "b1_cf_ex1_q1": { correct: "c", explanation: "Структура: have + object (my photo) + V3 (taken)." },
        "b1_cf_ex1_q2": { correct: "a", explanation: "Структура: had + object (her watch) + V3 (repaired)." },
        "b1_cf_ex1_q3": { correct: "c", explanation: "Структура: are having + object (our house) + V3 (painted)." },
        "b1_cf_ex1_q4": { correct: "b", explanation: "Структура: has + object (his suits) + V3 (made)." },
        "b1_cf_ex1_q5": { correct: "a", explanation: "Структура: have + object (my computer) + V3 (fixed)." },
        "b1_cf_ex1_q6": { correct: "c", explanation: "Структура: will have + object (their new kitchen) + V3 (installed)." },
        "b1_cf_ex1_q7": { correct: "a", explanation: "Структура: has + object (her food) + V3 (delivered)." },
        "b1_cf_ex1_q8": { correct: "c", explanation: "Структура: have had + object (my eyes) + V3 (tested)." },
        "b1_cf_ex1_q9": { correct: "b", explanation: "Структура: had + object (the carpets) + V3 (cleaned)." },
        "b1_cf_ex1_q10": { correct: "a", explanation: "Структура: have + object (your hair) + V3 (cut). V3 от cut - это cut." },

        // --- Упражнение 2: Образование с 'get' ---
        "b1_cf_ex2_q1": { correct: "b", explanation: "Структура: get + object (my car) + V3 (washed)." },
        "b1_cf_ex2_q2": { correct: "c", explanation: "Структура: got + object (her passport photo) + V3 (taken)." },
        "b1_cf_ex2_q3": { correct: "a", explanation: "Структура: get + object (that broken window) + V3 (replaced)." },
        "b1_cf_ex2_q4": { correct: "b", explanation: "Структура: get + object (our newspaper) + V3 (delivered)." },
        "b1_cf_ex2_q5": { correct: "c", explanation: "Структура: got + object (his name) + V3 (tattooed)." },
        "b1_cf_ex2_q6": { correct: "a", explanation: "Структура: got + object (her first book) + V3 (published)." },
        "b1_cf_ex2_q7": { correct: "b", explanation: "Структура: get + object (this document) + V3 (translated)." },
        "b1_cf_ex2_q8": { correct: "a", explanation: "Это негативное событие, которое с ним случилось. Структура: got + object + V3 (burgled - ограблен)." },
        "b1_cf_ex2_q9": { correct: "b", explanation: "Структура: get + object (my suit) + V3 (cleaned)." },
        "b1_cf_ex2_q10": { correct: "c", explanation: "Структура: got + object (a new security system) + V3 (installed)." },

        // --- Упражнение 3: Трансформация предложений ---
        "b1_cf_ex3_q1": { correct: "a", explanation: "I am having my picture taken - Мне делают фотографию (сейчас)." },
        "b1_cf_ex3_q2": { correct: "b", explanation: "She had her car repaired - Ей починили машину (в прошлом)." },
        "b1_cf_ex3_q3": { correct: "b", explanation: "I will have my hair cut - Я подстригусь (в будущем, у парикмахера)." },
        "b1_cf_ex3_q4": { correct: "b", explanation: "They are having their house painted - Им красят дом (сейчас)." },
        "b1_cf_ex3_q5": { correct: "a", explanation: "I have my teeth checked - Мне проверяют зубы (регулярно)." },
        "b1_cf_ex3_q6": { correct: "a", explanation: "He had his phone stolen - У него украли телефон (негативное событие, которое с ним случилось)." },
        "b1_cf_ex3_q7": { correct: "a", explanation: "We will get our new sofa delivered - Нам доставят диван." },
        "b1_cf_ex3_q8": { correct: "b", explanation: "She has had her eyes tested - Ей проверили зрение (недавно, есть результат)." },
        "b1_cf_ex3_q9": { correct: "b", explanation: "We are getting our carpets cleaned - Нам чистят ковры (сейчас)." },
        "b1_cf_ex3_q10": { correct: "b", explanation: "I had my suit cleaned - Мне почистили костюм (в прошлом)." },
        
        // --- Упражнение 4: Смешанная практика времен ---
        "b1_cf_ex4_q1": { correct: "a", explanation: "Регулярное действие ('usually'). Present Simple Causative: have + object + V3." },
        "b1_cf_ex4_q2": { correct: "b", explanation: "Действие в прошлом ('last week'). Past Simple Causative: had + object + V3." },
        "b1_cf_ex4_q3": { correct: "c", explanation: "Запланированное будущее ('tomorrow'). Present Continuous for Future Causative: are having + object + V3." },
        "b1_cf_ex4_q4": { correct: "c", explanation: "Действие в прошлом ('yesterday'). Past Simple Causative: got + object + V3." },
        "b1_cf_ex4_q5": { correct: "a", explanation: "Действие в прошлом с результатом в настоящем. Present Perfect Causative: have had + object + V3." },
        "b1_cf_ex4_q6": { correct: "b", explanation: "Действие в процессе сейчас ('at the moment'). Present Continuous Causative: are having + object + V3." },
        "b1_cf_ex4_q7": { correct: "b", explanation: "После глагола 'need' используется инфинитив. 'to have + object + V3'." },
        "b1_cf_ex4_q8": { correct: "b", explanation: "Действие было в процессе в прошлом. Past Continuous Causative: was having + object + V3." },
        "b1_cf_ex4_q9": { correct: "a", explanation: "План на будущее. Future with 'be going to' Causative: are going to have + object + V3." },
        "b1_cf_ex4_q10": { correct: "b", explanation: "После модального глагола 'should' используется инфинитив. 'have + object + V3'." },

        // --- Упражнение 5: Causative или Active? ---
        "b1_cf_ex5_q1": { correct: "b", explanation: "Я сам мою волосы. Активный залог." },
        "b1_cf_ex5_q2": { correct: "a", explanation: "Уборщик убирает дом для меня. Каузативная форма." },
        "b1_cf_ex5_q3": { correct: "a", explanation: "Он сам починил велосипед. Активный залог." },
        "b1_cf_ex5_q4": { correct: "b", explanation: "Профессионал сделал ей ремонт. Каузативная форма." },
        "b1_cf_ex5_q5": { correct: "b", explanation: "Служба доставки привозит пиццу для нас. Каузативная форма." },
        "b1_cf_ex5_q6": { correct: "a", explanation: "Я сам только что покрасил стену. Активный залог." },
        "b1_cf_ex5_q7": { correct: "b", explanation: "Я отнес часы специалисту, чтобы он их починил. Каузативная форма." },
        "b1_cf_ex5_q8": { correct: "a", explanation: "Они построили забор сами, а не наняли кого-то. Отрицание каузативной формы." },
        "b1_cf_ex5_q9": { correct: "a", explanation: "Вопрос о том, будешь ли ты сажать деревья сам. Активный залог." },
        "b1_cf_ex5_q10": { correct: "b", explanation: "Парикмахер покрасил ей волосы (действие в прошлом, до того, как я ее не узнал). Каузативная форма в Past Perfect." }
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
