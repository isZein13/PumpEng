// a1_4_grammar_future-simple-logic.js
document.addEventListener('DOMContentLoaded', () => {
    const grammarCorrectAnswers = {
        // --- Упражнение 1: 'will' для предсказаний и спонтанных решений ---
        "a1_fs_ex1_q1": { correct: "b", explanation: "'I think' часто используется с 'will' для выражения мнения о будущем: it will rain." },
        "a1_fs_ex1_q2": { correct: "c", explanation: "Спонтанное решение в момент речи: I will answer it." },
        "a1_fs_ex1_q3": { correct: "d", explanation: "'Maybe' (возможно) указывает на предположение, используется 'will': we will see." },
        "a1_fs_ex1_q4": { correct: "c", explanation: "Предложение помощи, сделанное в момент речи: I will get you some water." },
        "a1_fs_ex1_q5": { correct: "c", explanation: "'I promise' (я обещаю) используется с 'will': I will help." },
        "a1_fs_ex1_q6": { correct: "c", explanation: "'He thinks' (он думает) - мнение о будущем, используется 'will': he will pass." },
        "a1_fs_ex1_q7": { correct: "c", explanation: "Спонтанное решение/предложение в ответ на ситуацию: I will close the window." },
        "a1_fs_ex1_q8": { correct: "b", explanation: "'Perhaps' (возможно) указывает на предположение, используется 'will': she will call." },
        "a1_fs_ex1_q9": { correct: "c", explanation: "Спонтанное решение/обещание: I will buy some." },
        "a1_fs_ex1_q10": { correct: "b", explanation: "'I'm sure' (я уверен) - предсказание, используется 'will': you will like." },

        // --- Упражнение 2: 'be going to' для планов и намерений ---
        "a1_fs_ex2_q1": { correct: "c", explanation: "Заранее спланированное действие ('next weekend'): I am going to visit." },
        "a1_fs_ex2_q2": { correct: "b", explanation: "Запланированная вечеринка ('We've already invited'): We are going to have." },
        "a1_fs_ex2_q3": { correct: "c", explanation: "Решение, принятое ранее, намерение ('next year'): She is going to study." },
        "a1_fs_ex2_q4": { correct: "c", explanation: "Предсказание на основе видимых признаков ('dark clouds'): It is going to rain." },
        "a1_fs_ex2_q5": { correct: "b", explanation: "План, основанный на предыдущих действиях ('saved enough money'): They are going to buy." },
        "a1_fs_ex2_q6": { correct: "c", explanation: "Намерение/план на будущее ('next month'): He is going to start." },
        "a1_fs_ex2_q7": { correct: "b", explanation: "Запланированное путешествие ('booked the tickets'): My friends and I are going to travel." },
        "a1_fs_ex2_q8": { correct: "c", explanation: "Предупреждение о том, что вот-вот произойдет (на основе видимого): You are going to drop." },
        "a1_fs_ex2_q9": { correct: "b", explanation: "План на вечер ('I've already chosen it'): I am going to watch." },
        "a1_fs_ex2_q10": { correct: "c", explanation: "Запланированное действие ('bought all the ingredients'): She is going to cook." },

        // --- Упражнение 3: Отрицания в Future Simple ---
        "a1_fs_ex3_q1": { correct: "b", explanation: "Обещание не делать чего-то в будущем (отрицание с 'will'): I won't be late." },
        "a1_fs_ex3_q2": { correct: "c", explanation: "Изменение плана (отрицание с 'be going to'): We aren't going to go." },
        "a1_fs_ex3_q3": { correct: "c", explanation: "Предположение об отсутствии действия в будущем (отрицание с 'will'): He won't help." },
        "a1_fs_ex3_q4": { correct: "c", explanation: "'I don't think' + 'will' для выражения сомнения в позитивном событии. 'I don't think they will come' (Я не думаю, что они придут). Если бы было 'I don't think they won't come', это значило бы 'Я думаю, они придут'." },
        "a1_fs_ex3_q5": { correct: "b", explanation: "Решение не делать чего-то (отрицание с 'be going to'): She isn't going to buy." },
        "a1_fs_ex3_q6": { correct: "c", explanation: "Предсказание на основе текущей ситуации (отрицание с 'be going to'): We aren't going to catch." },
        "a1_fs_ex3_q7": { correct: "c", explanation: "Уверенное предсказание об отсутствии действия (отрицание с 'will'): He won't forget." },
        "a1_fs_ex3_q8": { correct: "b", explanation: "Отрицание плана: They aren't going to stay." },
        "a1_fs_ex3_q9": { correct: "b", explanation: "Спонтанный отказ/решение, основанное на обстоятельствах: No, I won't." },
        "a1_fs_ex3_q10": { correct: "b", explanation: "Предсказание на основе текущих признаков ('It's very cloudy' + 'I think' + 'will'): I think it won't be sunny. 'Isn't going to be' тоже возможно." },

        // --- Упражнение 4: Вопросы в Future Simple ---
        "a1_fs_ex4_q1": { correct: "b", explanation: "Вежливая просьба или предложение с 'will': Will you help...?" },
        "a1_fs_ex4_q2": { correct: "c", explanation: "Вопрос о планах с 'be going to': What is she going to wear...?" },
        "a1_fs_ex4_q3": { correct: "c", explanation: "Вопрос-предсказание с 'will': Will it be cold...?" },
        "a1_fs_ex4_q4": { correct: "b", explanation: "Вопрос о планах с 'be going to': When are they going to arrive?" },
        "a1_fs_ex4_q5": { correct: "d", explanation: "Предложение помощи, часто используется 'Shall I...?'. 'Will I get you a drink?' также возможно." },
        "a1_fs_ex4_q6": { correct: "c", explanation: "Вопрос о планах с 'be going to': How is he going to travel...?" },
        "a1_fs_ex4_q7": { correct: "d", explanation: "Предложение/вопрос о совместном действии, часто используется 'Shall we...?'. 'Will we meet' или 'Are we going to meet' тоже возможны." },
        "a1_fs_ex4_q8": { correct: "c", explanation: "Вопрос о планах с 'be going to' (кто собирается готовить): Who is going to cook...?" },
        "a1_fs_ex4_q9": { correct: "b", explanation: "Общий вопрос о будущем с 'will': Will you be at home...?" },
        "a1_fs_ex4_q10": { correct: "d", explanation: "Вопрос о расписании часто задается в Present Simple: What time does the film start? 'Will...start' или 'is...going to start' тоже возможны, но Present Simple самый типичный для расписаний." },

        // --- Упражнение 5: 'will' или 'be going to'? ---
        "a1_fs_ex5_q1": { correct: "b", explanation: "Спонтанное решение, принятое в момент речи, используется 'will'." },
        "a1_fs_ex5_q2": { correct: "a", explanation: "'We have decided' указывает на заранее принятый план, используется 'are going to'." },
        "a1_fs_ex5_q3": { correct: "a", explanation: "Предсказание на основе видимых признаков ('Look at the sky!'), используется 'is going to'." },
        "a1_fs_ex5_q4": { correct: "b", explanation: "Предложение помощи или обещание, сделанное в момент речи, используется 'will'." },
        "a1_fs_ex5_q5": { correct: "a", explanation: "Заранее принятое решение или намерение, используется 'are going to'." },
        "a1_fs_ex5_q6": { correct: "b", explanation: "'I think' выражает мнение/предсказание, часто используется 'will'." },
        "a1_fs_ex5_q7": { correct: "b", explanation: "Для расписаний часто используется Present Simple ('leaves'), но Future Simple ('will leave') также возможен для указания будущего факта. 'Is going to leave' менее типично для фиксированного расписания транспорта." },
        "a1_fs_ex5_q8": { correct: "b", explanation: "Спонтанное решение в ответ на ситуацию, используется 'will'." },
        "a1_fs_ex5_q9": { correct: "a", explanation: "Действие запланировано ('We've bought the paint'), используется 'are going to'." },
        "a1_fs_ex5_q10": { correct: "a", explanation: "Предупреждение или предсказание на основе очевидной опасности, используется 'are going to'." }
    };

    // Код для проверки ответов (остается таким же, как в grammar-exercise-logic.js)
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
