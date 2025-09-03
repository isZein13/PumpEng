// b2_8_grammar_reported-speech-logic.js
document.addEventListener('DOMContentLoaded', () => {
    const grammarCorrectAnswers = {
        // --- Упражнение 1: Review of Tense Shifts (Complex Tenses) ---
        "b2_rs_ex1_q1": { correct: "b", explanation: "Present Continuous (am waiting) -> Past Continuous (was waiting)." },
        "b2_rs_ex1_q2": { correct: "d", explanation: "Present Perfect (have finished) -> Past Perfect (had finished)." },
        "b2_rs_ex1_q3": { correct: "c", explanation: "Past Continuous (was sleeping) -> Past Perfect Continuous (had been sleeping)." },
        "b2_rs_ex1_q4": { correct: "c", explanation: "Future Continuous (will be working) -> Future Continuous in the Past (would be working)." },
        "b2_rs_ex1_q5": { correct: "c", explanation: "Past Perfect (had already left) не меняется, так как 'дальше в прошлое' уже некуда." },
        "b2_rs_ex1_q6": { correct: "c", explanation: "Modal verb 'must' (obligation) -> 'had to'." },
        "b2_rs_ex1_q7": { correct: "b", explanation: "Modal verb 'might' (possibility) обычно не меняется." },
        "b2_rs_ex1_q8": { correct: "c", explanation: "Present Perfect Continuous (have been waiting) -> Past Perfect Continuous (had been waiting)." },
        "b2_rs_ex1_q9": { correct: "c", explanation: "'be going to' (are going to) -> was/were going to." },
        "b2_rs_ex1_q10": { correct: "b", explanation: "Modal verb 'should' (advice) обычно не меняется." },

        // --- Упражнение 2: Reporting Verbs + Gerund/Infinitive ---
        "b2_rs_ex2_q1": { correct: "b", explanation: "После глагола 'promise' используется инфинитив: promised to help." },
        "b2_rs_ex2_q2": { correct: "c", explanation: "После глагола 'suggest' используется герундий: suggested going." },
        "b2_rs_ex2_q3": { correct: "d", explanation: "После глагола 'refuse' используется инфинитив: refused to do." },
        "b2_rs_ex2_q4": { correct: "b", explanation: "После глагола 'admit' используется герундий: admitted breaking." },
        "b2_rs_ex2_q5": { correct: "b", explanation: "После глагола 'offer' используется инфинитив: offered to carry." },
        "b2_rs_ex2_q6": { correct: "c", explanation: "Структура: advised + object + infinitive: advised me to take." },
        "b2_rs_ex2_q7": { correct: "b", explanation: "После глагола 'deny' используется герундий: denied stealing." },
        "b2_rs_ex2_q8": { correct: "c", explanation: "Структура для отрицательной команды: warned + object + not + to + infinitive: warned us not to touch." },
        "b2_rs_ex2_q9": { correct: "b", explanation: "После глагола 'agree' используется инфинитив: agreed to wait." },
        "b2_rs_ex2_q10": { correct: "c", explanation: "Структура: reminded + object + infinitive: reminded me to post." },

        // --- Упражнение 3: Reporting Questions (Advanced) ---
        "b2_rs_ex3_q1": { correct: "b", explanation: "Сдвиг времени: haven't finished -> hadn't finished." },
        "b2_rs_ex3_q2": { correct: "a", explanation: "Общий вопрос вводится через 'if/whether', сдвиг времени: will be -> would be." },
        "b2_rs_ex3_q3": { correct: "b", explanation: "Сдвиг времени: did cost -> had cost. This -> that." },
        "b2_rs_ex3_q4": { correct: "b", explanation: "Сдвиг модального глагола: can -> could." },
        "b2_rs_ex3_q5": { correct: "c", explanation: "Сдвиг времени: Have you ever been -> had ever been." },
        "b2_rs_ex3_q6": { correct: "a", explanation: "Сдвиг времени: are doing -> was doing, tomorrow -> the next day." },
        "b2_rs_ex3_q7": { correct: "c", explanation: "Сдвиг времени: did see -> had seen." },
        "b2_rs_ex3_q8": { correct: "a", explanation: "Общий вопрос: if + S + V. Сдвиг времени: is -> was, this -> that." },
        "b2_rs_ex3_q9": { correct: "c", explanation: "Сдвиг времени: have you been waiting -> I had been waiting." },
        "b2_rs_ex3_q10": { correct: "b", explanation: "Сдвиг времени: were -> had been. last night -> the night before." },
        
        // --- Упражнение 4: Reporting Modal Verbs ---
        "b2_rs_ex4_q1": { correct: "b", explanation: "'must' в значении обязательства (obligation) меняется на 'had to'." },
        "b2_rs_ex4_q2": { correct: "b", explanation: "'must' в значении предположения (deduction) не меняется." },
        "b2_rs_ex4_q3": { correct: "a", explanation: "'should' в значении совета (advice) обычно не меняется." },
        "b2_rs_ex4_q4": { correct: "b", explanation: "'might' в значении возможности (possibility) не меняется." },
        "b2_rs_ex4_q5": { correct: "a", explanation: "'must not' в значении запрета (prohibition) не меняется." },
        "b2_rs_ex4_q6": { correct: "c", explanation: "'can't' в значении невозможности (inability) меняется на 'couldn't'." },
        "b2_rs_ex4_q7": { correct: "c", explanation: "'ought to' в значении совета (advice) обычно не меняется." },
        "b2_rs_ex4_q8": { correct: "c", explanation: "'must not' в значении предположения ('не может быть') лучше передается через 'couldn't'." },
        "b2_rs_ex4_q9": { correct: "a", explanation: "'may not' (возможно, нет) меняется на 'might not'." },
        "b2_rs_ex4_q10": { correct: "c", explanation: "'must' (obligation) меняется на 'had to'." },

        // --- Упражнение 5: Full Sentence Transformation ---
        "b2_rs_ex5_q1": { correct: "a", explanation: "Правильный порядок слов, сдвиг времени (didn't call -> hadn't called) и слова-маркера (yesterday -> the day before)." },
        "b2_rs_ex5_q2": { correct: "c", explanation: "Правильный сдвиг времени (have been working -> had been working) и указательного местоимения (this -> that)." },
        "b2_rs_ex5_q3": { correct: "a", explanation: "Используется reporting verb 'reminded' + object + infinitive." },
        "b2_rs_ex5_q4": { correct: "b", explanation: "Правильный ввод через 'if', прямой порядок слов и сдвиг времени (are going to -> was going to)." },
        "b2_rs_ex5_q5": { correct: "c", explanation: "'must' (obligation) -> 'had to', и 'tonight' -> 'that night'." },
        "b2_rs_ex5_q6": { correct: "b", explanation: "Вежливый вопрос 'Would you like...?' лучше всего передается через reporting verb 'offered'." },
        "b2_rs_ex5_q7": { correct: "d", explanation: "Можно использовать 'said' со сдвигом 'will' на 'would', а можно 'promised' с инфинитивом. Оба варианта верны." },
        "b2_rs_ex5_q8": { correct: "c", explanation: "Правильный порядок слов и сдвиг времени (have you been doing -> I had been doing)." },
        "b2_rs_ex5_q9": { correct: "a", explanation: "'You should...' передается через 'advised her to...'." },
        "b2_rs_ex5_q10": { correct: "c", explanation: "'Let's...' передается через 'suggested' + герундий." }
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
