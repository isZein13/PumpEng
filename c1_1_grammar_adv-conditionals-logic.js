// c1_1_grammar_adv-conditionals-logic.js
document.addEventListener('DOMContentLoaded', () => {
    const grammarCorrectAnswers = {
        // --- Упражнение 1: Review of Mixed Conditionals ---
        "c1_ac_ex1_q1": { correct: "b", explanation: "Условие в прошлом (If I had taken), результат в настоящем (I would be... now). Mixed Type 3->2." },
        "c1_ac_ex1_q2": { correct: "c", explanation: "Условие в настоящем (If I weren't...), результат в прошлом (last month). Mixed Type 2->3." },
        "c1_ac_ex1_q3": { correct: "a", explanation: "Результат в настоящем (wouldn't be... now), условие в прошлом (if you had listened). Mixed Type 3->2." },
        "c1_ac_ex1_q4": { correct: "c", explanation: "Условие в настоящем (If she were...), результат в прошлом (last year). Mixed Type 2->3." },
        "c1_ac_ex1_q5": { correct: "b", explanation: "Условие в прошлом (this morning), результат в настоящем (now). Mixed Type 3->2." },
        "c1_ac_ex1_q6": { correct: "b", explanation: "Результат в прошлом ('the exam' - уже был), условие в настоящем (он ленивый вообще). Mixed Type 2->3." },
        "c1_ac_ex1_q7": { correct: "c", explanation: "Результат в прошлом (last night), условие в настоящем/будущем (to work tomorrow). Mixed Type 2->3." },
        "c1_ac_ex1_q8": { correct: "b", explanation: "Результат в настоящем (would be happier now), условие в прошлом (all those years ago). Mixed Type 3->2." },
        "c1_ac_ex1_q9": { correct: "b", explanation: "Результат в настоящем (wouldn't be lost now), условие в прошлом (had checked). Mixed Type 3->2." },
        "c1_ac_ex1_q10": { correct: "c", explanation: "Результат в прошлом (yesterday), условие - общая ситуация в настоящем (у меня нет номера). Mixed Type 2->3." },

        // --- Упражнение 2: Inversion in Conditionals ---
        "c1_ac_ex2_q1": { correct: "c", explanation: "'Had I known...' - это инверсия для 'If I had known...' (Type 3)." },
        "c1_ac_ex2_q2": { correct: "c", explanation: "'Should you change...' - это формальная инверсия для 'If you change...' (Type 1)." },
        "c1_ac_ex2_q3": { correct: "d", explanation: "'Were I you...' - это инверсия для 'If I were you...' (Type 2)." },
        "c1_ac_ex2_q4": { correct: "a", explanation: "'Had they seen...' - это инверсия для 'If they had seen...' (Type 3)." },
        "c1_ac_ex2_q5": { correct: "d", explanation: "'Were he...' - это инверсия для 'If he were...' (Type 2)." },
        "c1_ac_ex2_q6": { correct: "b", explanation: "'Should you need...' - формальная инверсия для 'If you need...' (Type 1)." },
        "c1_ac_ex2_q7": { correct: "d", explanation: "'Were it not for...' - инверсия для 'If it weren't for...' (Type 2)." },
        "c1_ac_ex2_q8": { correct: "d", explanation: "'Were he to win...' - это еще один способ инверсии для Type 2, более формальный чем 'If he won'." },
        "c1_ac_ex2_q9": { correct: "c", explanation: "'Had we listened...' - инверсия для 'If we had listened...' (Type 3)." },
        "c1_ac_ex2_q10": { correct: "a", explanation: "'Had he been...' - инверсия для 'If he had been...' (Type 3)." },

        // --- Упражнение 3: Alternatives to 'if' ---
        "c1_ac_ex3_q1": { correct: "a", explanation: "'unless' = 'if not'. Я не помогу, если ты не пообещаешь." },
        "c1_ac_ex3_q2": { correct: "b", explanation: "'providing that' (при условии, что) устанавливает четкое условие." },
        "c1_ac_ex3_q3": { correct: "c", explanation: "'in case' (на случай, если) - действие-предосторожность. Я буду на месте на тот случай, если понадоблюсь." },
        "c1_ac_ex3_q4": { correct: "d", explanation: "'unless' = 'if not'. Ты провалишься, если не начнешь учиться." },
        "c1_ac_ex3_q5": { correct: "b", explanation: "'as long as' (при условии, что; пока) устанавливает условие, которое должно выполняться." },
        "c1_ac_ex3_q6": { correct: "c", explanation: "'provided that' - это сильное условие, которое требует банк." },
        "c1_ac_ex3_q7": { correct: "c", explanation: "'unless' = 'if not'. Если ты не извинишься, она не будет говорить." },
        "c1_ac_ex3_q8": { correct: "c", explanation: "'in case' - предосторожность. Возьми телефон на случай, если нужно будет позвонить." },
        "c1_ac_ex3_q9": { correct: "c", explanation: "'as long as' (пока; при условии, что) - это условие-ограничение." },
        "c1_ac_ex3_q10": { correct: "a", explanation: "'unless' = 'if not'. Мы опоздаем, если не выйдем сейчас." },
        
        // --- Упражнение 4: 'in case' vs. 'if' ---
        "b1_ac_ex4_q1": { correct: "b", explanation: "Я куплю еду как предосторожность, заранее, независимо от того, придут ли гости. -> in case." },
        "b1_ac_ex4_q2": { correct: "a", explanation: "У нас не будет стульев только при условии, что гости придут. Действие-результат. -> If." },
        "b1_ac_ex4_q3": { correct: "b", explanation: "Запиши номер как предосторожность, чтобы не забыть. -> in case." },
        "b1_ac_ex4_q4": { correct: "a", explanation: "Я одолжу тебе зонт только при выполнении условия. -> if." },
        "b1_ac_ex4_q5": { correct: "b", explanation: "Я беру книгу как предосторожность на случай ожидания. -> in case." },
        "b1_ac_ex4_q6": { correct: "b", explanation: "Проверим время как предосторожность. -> in case." },
        "b1_ac_ex4_q7": { correct: "a", explanation: "Мое действие (пойти на вечеринку) зависит от твоего. Условие. -> if." },
        "b1_ac_ex4_q8": { correct: "b", explanation: "Он зарядил телефон как предосторожность. -> in case." },
        "b1_ac_ex4_q9": { correct: "a", explanation: "Я передам сообщение только при условии, что увижу его. -> If." },
        "b1_ac_ex4_q10": { correct: "b", explanation: "Я сделаю сэндвич как предосторожность на случай, если ты проголодаешься. -> in case." },

        // --- Упражнение 5: Mixed Practice ---
        "c1_ac_ex5_q1": { correct: "a", explanation: "Формальная инверсия для Type 1: 'Should you need...'." },
        "c1_ac_ex5_q2": { correct: "c", explanation: "Смешанный тип (3->2): 'If I had listened (past), I wouldn't be in this mess (now)'." },
        "c1_ac_ex5_q3": { correct: "b", explanation: "Смешанный тип (2->3) с инверсией: 'Were I you (present), I would have accepted (past)'." },
        "c1_ac_ex5_q4": { correct: "a", explanation: "'Unless' = 'if you don't have a ticket'." },
        "c1_ac_ex5_q5": { correct: "c", explanation: "Смешанный тип (2->3) с инверсией: 'Had the company been (present state), it could have avoided (past result)'." },
        "c1_ac_ex5_q6": { correct: "b", explanation: "'Provided that' (при условии, что) - четкое условие." },
        "c1_ac_ex5_q7": { correct: "a", explanation: "Инверсия для Type 3 в отрицании: 'Had you not been...'." },
        "c1_ac_ex5_q8": { correct: "b", explanation: "Смешанный тип (2->3): 'If he were (present state), he wouldn't have had (past result)'." },
        "c1_ac_ex5_q9": { correct: "c", explanation: "Предосторожность -> 'in case'." },
        "c1_ac_ex5_q10": { correct: "c", explanation: "Конструкция 'Were it not for...' - это инверсия для Type 2: 'If it weren't for your support'." }
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
