// a2_11_grammar_indirect-speech-logic.js
document.addEventListener('DOMContentLoaded', () => {
    const grammarCorrectAnswers = {
        // --- Упражнение 1: Положительные команды (tell/ask ... TO do) ---
        "a2_is_ex1_q1": { correct: "b", explanation: "Команда 'Open' превращается в инфинитив 'to open'." },
        "a2_is_ex1_q2": { correct: "a", explanation: "Просьба 'help me' превращается в 'to help him' (местоимение меняется)." },
        "a2_is_ex1_q3": { correct: "c", explanation: "Команда 'Sit down' превращается в инфинитив 'to sit down'." },
        "a2_is_ex1_q4": { correct: "a", explanation: "Команда 'Call me' превращается в 'to call him'." },
        "a2_is_ex1_q5": { correct: "b", explanation: "Команда 'Be quiet' превращается в инфинитив 'to be quiet'." },
        "a2_is_ex1_q6": { correct: "a", explanation: "Команда 'Do your homework' превращается в 'to do my homework'." },
        "a2_is_ex1_q7": { correct: "c", explanation: "Команда 'Turn off' превращается в инфинитив 'to turn off'." },
        "a2_is_ex1_q8": { correct: "b", explanation: "Вежливая просьба 'Could you pass...' превращается в 'asked him to pass'." },
        "a2_is_ex1_q9": { correct: "a", explanation: "Команда 'Clean your room' превращается в 'to clean my room'." },
        "a2_is_ex1_q10": { correct: "b", explanation: "Команда 'Wait here' превращается в 'to wait there'." },

        // --- Упражнение 2: Отрицательные команды (tell/ask ... NOT TO do) ---
        "a2_is_ex2_q1": { correct: "b", explanation: "Отрицательная команда 'Don't shout' превращается в 'not to shout'." },
        "a2_is_ex2_q2": { correct: "a", explanation: "Отрицательная команда 'Don't be late' превращается в 'not to be late'." },
        "a2_is_ex2_q3": { correct: "b", explanation: "Отрицательная просьба 'don't touch' превращается в 'not to touch'." },
        "a2_is_ex2_q4": { correct: "b", explanation: "Отрицательная команда 'Don't forget' превращается в 'not to forget'." },
        "a2_is_ex2_q5": { correct: "a", explanation: "Запрет 'Don't eat' превращается в 'not to eat'." },
        "a2_is_ex2_q6": { correct: "a", explanation: "Совет 'Don't worry' превращается в 'not to worry'." },
        "a2_is_ex2_q7": { correct: "b", explanation: "Отрицательная просьба 'don't be noisy' превращается в 'not to be noisy'." },
        "a2_is_ex2_q8": { correct: "a", explanation: "Отрицательная команда 'Don't open' превращается в 'not to open'." },
        "a2_is_ex2_q9": { correct: "b", explanation: "Запрет 'Don't run' превращается в 'not to run'." },
        "a2_is_ex2_q10": { correct: "a", explanation: "Мотивирующая фраза 'Don't give up' превращается в 'not to give up'." },

        // --- Упражнение 3: Смешанная практика команд ---
        "a2_is_ex3_q1": { correct: "b", explanation: "Отрицательная команда 'Don't talk' -> 'not to talk'." },
        "a2_is_ex3_q2": { correct: "a", explanation: "Положительная команда 'Finish' -> 'to finish'." },
        "a2_is_ex3_q3": { correct: "b", explanation: "Отрицательная команда 'Don't be afraid' -> 'not to be afraid'." },
        "a2_is_ex3_q4": { correct: "a", explanation: "Положительная просьба 'Please wait' -> 'to wait'." },
        "a2_is_ex3_q5": { correct: "a", explanation: "Положительная команда 'Try again' -> 'to try'." },
        "a2_is_ex3_q6": { correct: "b", explanation: "Отрицательная команда 'Don't make a mess' -> 'not to make'." },
        "a2_is_ex3_q7": { correct: "a", explanation: "Положительная команда 'Pay attention' -> 'to pay attention'." },
        "a2_is_ex3_q8": { correct: "b", explanation: "Запрет 'Don't feed' -> 'not to feed'." },
        "a2_is_ex3_q9": { correct: "a", explanation: "Положительная команда 'Write your name' -> 'to write my name'." },
        "a2_is_ex3_q10": { correct: "b", explanation: "Отрицательная просьба 'Don't drive so fast' -> 'not to drive so fast'." },
        
        // --- Упражнение 4: Команды или Утверждения? ---
        "a2_is_ex4_q1": { correct: "a", explanation: "Это утверждение (statement), поэтому происходит сдвиг времени: am -> was." },
        "a2_is_ex4_q2": { correct: "b", explanation: "Это команда (command), поэтому используется инфинитив: to be." },
        "a2_is_ex4_q3": { correct: "a", explanation: "Это утверждение, поэтому происходит сдвиг времени: works -> worked." },
        "a2_is_ex4_q4": { correct: "b", explanation: "Это отрицательная команда, поэтому используется инфинитив: not to work." },
        "a2_is_ex4_q5": { correct: "a", explanation: "Это утверждение, поэтому происходит сдвиг времени: went -> had gone." },
        "a2_is_ex4_q6": { correct: "b", explanation: "Это команда, поэтому используется инфинитив: to go." },
        "a2_is_ex4_q7": { correct: "a", explanation: "Это утверждение, поэтому происходит сдвиг времени: didn't see -> hadn't seen." },
        "a2_is_ex4_q8": { correct: "b", explanation: "Это отрицательная команда, поэтому используется инфинитив: not to forget." },
        "a2_is_ex4_q9": { correct: "a", explanation: "Это утверждение, поэтому происходит сдвиг времени: am not -> wasn't." },
        "a2_is_ex4_q10": { correct: "b", explanation: "Это отрицательная команда, поэтому используется инфинитив: not to be." },

        // --- Упражнение 5: Выбор полного предложения ---
        "a2_is_ex5_q1": { correct: "b", explanation: "Правильная структура для просьбы: asked me + to + infinitive. 'this' меняется на 'that'." },
        "a2_is_ex5_q2": { correct: "a", explanation: "Правильная структура для отрицательной команды: told us + not + to + infinitive." },
        "a2_is_ex5_q3": { correct: "c", explanation: "Правильная структура для команды: told us + to + infinitive." },
        "a2_is_ex5_q4": { correct: "a", explanation: "Правильная структура для отрицательного напоминания: reminded me + not to forget." },
        "a2_is_ex5_q5": { correct: "b", explanation: "Правильная структура для вежливой просьбы: asked me + to + infinitive." },
        "a2_is_ex5_q6": { correct: "a", explanation: "Правильная структура для отрицательной команды: told me + not to be." },
        "a2_is_ex5_q7": { correct: "a", explanation: "Правильная структура для ободрения: encouraged us + to try. 'your' меняется на 'our'." },
        "a2_is_ex5_q8": { correct: "c", explanation: "Правильная структура для предупреждения: warned us + not to touch." },
        "a2_is_ex5_q9": { correct: "a", explanation: "Правильная структура для приглашения: invited me + to come. 'my' меняется на 'her'." },
        "a2_is_ex5_q10": { correct: "b", explanation: "Правильная структура для совета: advised me + not to believe." }
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
                const questionShortText = questionFullText.includes('. ') ? questionFullText.substring(questionFullText.indexOf('. ') + 2) : questionFullText;

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
