// b2_6_grammar_gerunds-infinitives-logic.js
document.addEventListener('DOMContentLoaded', () => {
    const grammarCorrectAnswers = {
        // --- Упражнение 1: remember & forget ---
        "b2_gi_ex1_q1": { correct: "a", explanation: "Помнить о действии, которое нужно совершить в будущем -> remember to buy." },
        "b2_gi_ex1_q2": { correct: "b", explanation: "Воспоминание о прошлом событии -> forget seeing." },
        "b2_gi_ex1_q3": { correct: "a", explanation: "Напоминание о будущем действии -> forget to turn off." },
        "b2_gi_ex1_q4": { correct: "b", explanation: "Воспоминание о прошлом (как слышал песню) -> remember hearing." },
        "b2_gi_ex1_q5": { correct: "a", explanation: "Забыл совершить действие -> forgot to get." },
        "b2_gi_ex1_q6": { correct: "b", explanation: "Воспоминание о получении награды в прошлом -> remember winning." },
        "b2_gi_ex1_q7": { correct: "b", explanation: "Смутное воспоминание о встрече в прошлом -> remember meeting." },
        "b2_gi_ex1_q8": { correct: "a", explanation: "Забыл совершить необходимое действие -> forgot to sign." },
        "b2_gi_ex1_q9": { correct: "a", explanation: "Вопрос о том, не забыл ли ты выполнить действие -> remember to take." },
        "b2_gi_ex1_q10": { correct: "b", explanation: "Воспоминание о событии в прошлом (катании) -> forget riding." },

        // --- Упражнение 2: stop ---
        "b2_gi_ex2_q1": { correct: "a", explanation: "Остановиться с целью что-то сделать -> stop to get." },
        "b2_gi_ex2_q2": { correct: "b", explanation: "Прекратить какое-либо действие -> stop smoking." },
        "b2_gi_ex2_q3": { correct: "a", explanation: "Остановиться с целью посмотреть на вид -> stop to look." },
        "b2_gi_ex2_q4": { correct: "b", explanation: "Прекратить создавать шум -> stop making." },
        "b2_gi_ex2_q5": { correct: "a", explanation: "Остановиться, чтобы отдохнуть -> stop to have a break." },
        "b2_gi_ex2_q6": { correct: "b", explanation: "Прекратить пить сладкие напитки -> stop drinking." },
        "b2_gi_ex2_q7": { correct: "a", explanation: "Остановиться с целью сделать фото -> stop to take." },
        "b2_gi_ex2_q8": { correct: "b", explanation: "Прекратить есть фастфуд -> stop eating." },
        "b2_gi_ex2_q9": { correct: "a", explanation: "Остановиться, чтобы послушать музыканта -> stop to listen." },
        "b2_gi_ex2_q10": { correct: "b", explanation: "Прекратить смотреть в телефон -> stop looking." },

        // --- Упражнение 3: try ---
        "b2_gi_ex3_q1": { correct: "a", explanation: "Приложить усилие, чтобы решить сложную задачу -> try to solve." },
        "b2_gi_ex3_q2": { correct: "b", explanation: "Попробовать что-то в качестве эксперимента, чтобы решить проблему -> try drinking." },
        "b2_gi_ex3_q3": { correct: "a", explanation: "Приложить физическое усилие (и, возможно, потерпеть неудачу) -> try to lift." },
        "b2_gi_ex3_q4": { correct: "b", explanation: "Попробовать простое действие как возможное решение -> try turning." },
        "b2_gi_ex3_q5": { correct: "a", explanation: "Приложить усилие, чтобы вести себя определенным образом -> try to be." },
        "b2_gi_ex3_q6": { correct: "b", explanation: "Попробовать новый метод в качестве эксперимента -> try learning." },
        "b2_gi_ex3_q7": { correct: "a", explanation: "Постараться, приложить усилие, чтобы завершить задачу -> try to answer." },
        "b2_gi_ex3_q8": { correct: "b", explanation: "Предложение попробовать йогу как эксперимент для расслабления -> try doing." },
        "b2_gi_ex3_q9": { correct: "a", explanation: "Предпринять попытку позвонить -> try to call." },
        "b2_gi_ex3_q10": { correct: "b", explanation: "Предложение эксперимента для улучшения вкуса -> try adding." },
        
        // --- Упражнение 4: regret ---
        "b2_gi_ex4_q1": { correct: "a", explanation: "С сожалением сообщать плохие новости -> regret to inform." },
        "b2_gi_ex4_q2": { correct: "b", explanation: "Сожалеть о том, что не делал чего-то в прошлом -> regret not studying." },
        "b2_gi_ex4_q3": { correct: "a", explanation: "С сожалением сообщать что-либо -> regret to tell." },
        "b2_gi_ex4_q4": { correct: "b", explanation: "Сожалеть о сказанном в прошлом -> regretted saying." },
        "b2_gi_ex4_q5": { correct: "b", explanation: "Не сожалеть о прошлом решении -> don't regret leaving." },
        "b2_gi_ex4_q6": { correct: "a", explanation: "Официальное объявление с сожалением -> regrets to announce." },
        "b2_gi_ex4_q7": { correct: "b", explanation: "Сожалеть о прошлом действии (трате денег) -> regretted spending." },
        "b2_gi_ex4_q8": { correct: "b", explanation: "Сожалеть о том, что не переехал -> regret not moving." },
        "b2_gi_ex4_q9": { correct: "a", explanation: "Формальная фраза для сообщения плохих новостей -> regret to say." },
        "b2_gi_ex4_q10": { correct: "b", explanation: "Не сожалел о своем выборе в прошлом -> never regretted following." },

        // --- Упражнение 5: Mixed Practice ---
        "b2_gi_ex5_q1": { correct: "b", explanation: "Воспоминание о прошлом действии -> remember locking." },
        "b2_gi_ex5_q2": { correct: "a", explanation: "Остановиться с целью посмотреть -> stopped to see." },
        "b2_gi_ex5_q3": { correct: "b", explanation: "Попробовать что-то как эксперимент -> try changing." },
        "b2_gi_ex5_q4": { correct: "a", explanation: "С сожалением сообщать новости -> regret to tell." },
        "b2_gi_ex5_q5": { correct: "a", explanation: "Помнить о будущем действии -> remember to write." },
        "b2_gi_ex5_q6": { correct: "b", explanation: "Прекратить есть сахар -> stopped eating." },
        "b2_gi_ex5_q7": { correct: "a", explanation: "Приложить усилие, чтобы предупредить -> tried to warn." },
        "b2_gi_ex5_q8": { correct: "b", explanation: "Сожалеть об упущенной возможности в прошлом -> regret missing." },
        "b2_gi_ex5_q9": { correct: "b", explanation: "Прекратить пить кофе -> stop drinking." },
        "b2_gi_ex5_q10": { correct: "b", explanation: "Воспоминание о встрече в прошлом -> forget meeting." }
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
