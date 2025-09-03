// c1_11_grammar_adv-reported-speech-logic.js
document.addEventListener('DOMContentLoaded', () => {
    const grammarCorrectAnswers = {
        // --- Упражнение 1: Review of Tense Shifts (Complex Tenses) ---
        "c1_rs_ex1_q1": { correct: "b", explanation: "Present Continuous -> Past Continuous." },
        "c1_rs_ex1_q2": { correct: "d", explanation: "Present Perfect -> Past Perfect." },
        "c1_rs_ex1_q3": { correct: "c", explanation: "Past Continuous -> Past Perfect Continuous." },
        "c1_rs_ex1_q4": { correct: "c", explanation: "Future Continuous -> Future Continuous in the Past." },
        "c1_rs_ex1_q5": { correct: "c", explanation: "Past Perfect не меняется, так как это самое 'дальнее' прошедшее время." },
        "c1_rs_ex1_q6": { correct: "c", explanation: "'Must' в значении обязательства (obligation) меняется на 'had to'." },
        "c1_rs_ex1_q7": { correct: "b", explanation: "'Might' в значении возможности (possibility) не меняется." },
        "c1_rs_ex1_q8": { correct: "c", explanation: "Present Perfect Continuous -> Past Perfect Continuous." },
        "c1_rs_ex1_q9": { correct: "c", explanation: "'be going to' в настоящем времени меняется на 'was/were going to' в прошлом." },
        "c1_rs_ex1_q10": { correct: "b", explanation: "'Should' в значении совета (advice) не меняется." },

        // --- Упражнение 2: Reporting Verbs + Gerund/Infinitive ---
        "c1_rs_ex2_q1": { correct: "b", explanation: "После глагола 'promise' используется инфинитив 'to do'." },
        "c1_rs_ex2_q2": { correct: "c", explanation: "После глагола 'suggest' используется герундий 'doing'." },
        "c1_rs_ex2_q3": { correct: "d", explanation: "После глагола 'refuse' используется инфинитив 'to do'." },
        "c1_rs_ex2_q4": { correct: "b", explanation: "После глагола 'admit' используется герундий 'doing'." },
        "c1_rs_ex2_q5": { correct: "b", explanation: "После глагола 'offer' используется инфинитив 'to do'." },
        "c1_rs_ex2_q6": { correct: "c", explanation: "Структура: advised + object + infinitive." },
        "c1_rs_ex2_q7": { correct: "b", explanation: "После глагола 'deny' используется герундий 'doing'." },
        "c1_rs_ex2_q8": { correct: "c", explanation: "Структура для отрицательной команды: warned + object + not + to + infinitive." },
        "c1_rs_ex2_q9": { correct: "b", explanation: "После глагола 'agree' используется инфинитив 'to do'." },
        "c1_rs_ex2_q10": { correct: "a", explanation: "После 'congratulate someone on' используется герундий 'doing'." },

        // --- Упражнение 3: Reporting Questions (Advanced) ---
        "c1_rs_ex3_q1": { correct: "b", explanation: "Сдвиг времени: haven't finished -> hadn't finished." },
        "c1_rs_ex3_q2": { correct: "a", explanation: "Общий вопрос вводится через 'if/whether', сдвиг времени: will be -> would be." },
        "c1_rs_ex3_q3": { correct: "b", explanation: "Сдвиг времени: did cost -> had cost. This -> that." },
        "c1_rs_ex3_q4": { correct: "b", explanation: "Сдвиг модального глагола: can -> could." },
        "c1_rs_ex3_q5": { correct: "c", explanation: "Сдвиг времени: Have you ever been -> had ever been." },
        "c1_rs_ex3_q6": { correct: "a", explanation: "Сдвиг времени: are doing -> was doing, tomorrow -> the next day." },
        "c1_rs_ex3_q7": { correct: "c", explanation: "Сдвиг времени: did see -> had seen." },
        "c1_rs_ex3_q8": { correct: "a", explanation: "Общий вопрос: if + S + V. Сдвиг времени: is -> was, this -> that." },
        "c1_rs_ex3_q9": { correct: "c", explanation: "Сдвиг времени: have you been waiting -> I had been waiting." },
        "c1_rs_ex3_q10": { correct: "b", explanation: "Сдвиг времени: were -> had been. last night -> the night before." },
        
        // --- Упражнение 4: Reporting Modal Verbs ---
        "c1_rs_ex4_q1": { correct: "b", explanation: "'must' в значении обязательства (obligation) меняется на 'had to'." },
        "c1_rs_ex4_q2": { correct: "b", explanation: "'must' в значении предположения (deduction) не меняется." },
        "c1_rs_ex4_q3": { correct: "a", explanation: "'should' в значении совета (advice) обычно не меняется." },
        "c1_rs_ex4_q4": { correct: "b", explanation: "'might' в значении возможности (possibility) не меняется." },
        "c1_rs_ex4_q5": { correct: "a", explanation: "'must not' в значении запрета (prohibition) не меняется." },
        "c1_rs_ex4_q6": { correct: "c", explanation: "'can't' в значении невозможности (inability) меняется на 'couldn't'." },
        "c1_rs_ex4_q7": { correct: "c", explanation: "'ought to' в значении совета (advice) обычно не меняется." },
        "c1_rs_ex4_q8": { correct: "c", explanation: "'must not be' (не может быть) лучше передается через 'couldn't be'." },
        "c1_rs_ex4_q9": { correct: "a", explanation: "'may not' (возможно, нет) меняется на 'might not'." },
        "c1_rs_ex4_q10": { correct: "c", explanation: "'must' (obligation) меняется на 'had to'." },

        // --- Упражнение 5: Rephrasing & Nuance ---
        "c1_rs_ex5_q1": { correct: "b", explanation: "Фраза 'absolutely sure' лучше всего передается глаголом 'accused', который требует герундий." },
        "c1_rs_ex5_q2": { correct: "c", explanation: "'Don't forget' - это напоминание, поэтому 'reminded me to...'" },
        "c1_rs_ex5_q3": { correct: "a", explanation: "'I wish I hadn't...' выражает сожаление, которое передается глаголом 'regretted' + герундий." },
        "c1_rs_ex5_q4": { correct: "b", explanation: "'What if we...?' - это предложение, которое передается через 'suggested' + герундий." },
        "c1_rs_ex5_q5": { correct: "c", explanation: "Это прямая угроза, которая передается через 'threatened to do'." },
        "c1_rs_ex5_q6": { correct: "c", explanation: "'I didn't do it!' - это отрицание, которое передается через 'denied' + герундий." },
        "c1_rs_ex5_q7": { correct: "a", explanation: "'You should definitely try...' - это сильная рекомендация, 'recommended' + герундий." },
        "c1_rs_ex5_q8": { correct: "b", explanation: "'I'm sorry' передается через 'apologized for' + герундий (перфектный герундий 'having forgotten' подчеркивает предшествующее действие)." },
        "c1_rs_ex5_q9": { correct: "b", explanation: "'You must...' - это настойчивое требование, 'insisted on' + (me) + герундий." },
        "c1_rs_ex5_q10": { correct: "a", explanation: "'If I were you...' - это совет, который передается через 'advised me to...'." }
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
