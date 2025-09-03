// c1_7_grammar_hypothetical-meaning-logic.js
document.addEventListener('DOMContentLoaded', () => {
    const grammarCorrectAnswers = {
        // --- Упражнение 1: 'I wish / If only' for Present/Future ---
        "c1_hm_ex1_q1": { correct: "b", explanation: "Сожаление о настоящем (I am busy). I wish + Past Simple (had)." },
        "c1_hm_ex1_q2": { correct: "d", explanation: "Желание, чтобы погода изменилась в будущем. If only + would + V1 (would shine)." },
        "c1_hm_ex1_q3": { correct: "c", explanation: "Жалоба на раздражающее действие другого человека. I wish + you + would + V1 (would stop)." },
        "c1_hm_ex1_q4": { correct: "b", explanation: "Сожаление о настоящем (I don't know). If only + Past Simple (knew)." },
        "c1_hm_ex1_q5": { correct: "c", explanation: "Сожаление о настоящем. Для глагола 'to be' предпочтительно использовать 'were' для всех лиц." },
        "c1_hm_ex1_q6": { correct: "c", explanation: "Желание о настоящем. Для 'to be' используется 'were'." },
        "c1_hm_ex1_q7": { correct: "c", explanation: "Вежливая жалоба на повторяющееся действие. I wish + they + would turn." },
        "c1_hm_ex1_q8": { correct: "b", explanation: "Сожаление о текущей неспособности. 'can' -> 'could'." },
        "c1_hm_ex1_q9": { correct: "b", explanation: "Сожаление о настоящем обязательстве. 'I have to...' -> 'I wish I didn't have to...'." },
        "c1_hm_ex1_q10": { correct: "c", explanation: "Жалоба на раздражающую привычку животного. I wish + it + would bark." },

        // --- Упражнение 2: 'I wish / If only' for Past ---
        "c1_hm_ex2_q1": { correct: "b", explanation: "Сожаление о прошлом (I missed the bus). I wish + Past Perfect (had left)." },
        "c1_hm_ex2_q2": { correct: "c", explanation: "Сожаление о сказанном в прошлом. If only + Past Perfect (hadn't said)." },
        "c1_hm_ex2_q3": { correct: "d", explanation: "Сожаление о прошлом (она не пошла в университет). She wishes + Past Perfect (had gone)." },
        "c1_hm_ex2_q4": { correct: "c", explanation: "Сожаление о прошлом (я не сделал больше фото). I wish + Past Perfect (had taken)." },
        "c1_hm_ex2_q5": { correct: "a", explanation: "Сожаление о прошлом действии. If only + Past Perfect (had told)." },
        "c1_hm_ex2_q6": { correct: "b", explanation: "Сожаление о потраченных в прошлом деньгах. He wishes + Past Perfect (hadn't spent)." },
        "c1_hm_ex2_q7": { correct: "a", explanation: "Сожаление о том, что не последовал совету в прошлом. I wish + Past Perfect (had listened)." },
        "c1_hm_ex2_q8": { correct: "c", explanation: "Сожаление о прошлом бездействии. If only + Past Perfect (had asked)." },
        "c1_hm_ex2_q9": { correct: "b", explanation: "Сожаление о том, что не купили дом в прошлом. They wish + Past Perfect (had bought)." },
        "c1_hm_ex2_q10": { correct: "d", explanation: "Сожаление о прошлом состоянии. I wish + Past Perfect (had been)." },

        // --- Упражнение 3: 'It's time / It's high time' ---
        "c1_hm_ex3_q1": { correct: "b", explanation: "После 'It's time' используется Past Simple (went)." },
        "c1_hm_ex3_q2": { correct: "c", explanation: "После 'It's high time' используется Past Simple (left)." },
        "c1_hm_ex3_q3": { correct: "c", explanation: "После 'It's time' используется Past Simple (cleaned)." },
        "c1_hm_ex3_q4": { correct: "b", explanation: "После 'It's time' используется Past Simple (started)." },
        "c1_hm_ex3_q5": { correct: "c", explanation: "После 'It's time' используется Past Simple от 'to be' (were)." },
        "c1_hm_ex3_q6": { correct: "c", explanation: "После 'It's high time' используется Past Simple (did)." },
        "c1_hm_ex3_q7": { correct: "b", explanation: "После 'It's time' используется Past Simple (bought)." },
        "c1_hm_ex3_q8": { correct: "b", explanation: "После 'It's time you' используется Past Simple (started)." },
        "c1_hm_ex3_q9": { correct: "b", explanation: "После 'It's time' используется Past Simple (changed)." },
        "c1_hm_ex3_q10": { correct: "c", explanation: "В вопросе структура сохраняется: It's time + Past Simple (left)." },
        
        // --- Упражнение 4: 'would rather' ---
        "c1_hm_ex4_q1": { correct: "a", explanation: "Предпочтение о своем действии: would rather + V1 (stay)." },
        "c1_hm_ex4_q2": { correct: "b", explanation: "Предпочтение о действии другого человека (you): would rather + S + Past Simple (didn't smoke)." },
        "c1_hm_ex4_q3": { correct: "d", explanation: "Вопрос о своем предпочтении: Would you rather + V1 (have)?" },
        "c1_hm_ex4_q4": { correct: "c", explanation: "Предпочтение о действии другого человека (I): would rather + S + Past Simple (didn't tell)." },
        "c1_hm_ex4_q5": { correct: "a", explanation: "Сравнение предпочтений: would rather + V1 + than + V1 (quit than work)." },
        "c1_hm_ex4_q6": { correct: "d", explanation: "Предпочтение о своем действии: would rather + V1 (see)." },
        "c1_hm_ex4_q7": { correct: "b", explanation: "Предпочтение о действии других (my children): would rather + S + Past Simple (didn't watch)." },
        "c1_hm_ex4_q8": { correct: "a", explanation: "Предпочтение о своем действии: would rather + V1 (take)." },
        "c1_hm_ex4_q9": { correct: "c", explanation: "Предпочтение о действии другого человека в прошлом: would rather + S + Past Perfect (had told)." },
        "c1_hm_ex4_q10": { correct: "d", explanation: "Предпочтение о действии над собой (пассив): would rather + be + V3 (be left)." },

        // --- Упражнение 5: Mixed Practice ---
        "c1_hm_ex5_q1": { correct: "b", explanation: "Конструкция 'It's time' требует Past Simple." },
        "c1_hm_ex5_q2": { correct: "d", explanation: "Сожаление о прошлом ('yesterday') требует Past Perfect." },
        "c1_hm_ex5_q3": { correct: "c", explanation: "Предпочтение о действии другого человека в настоящем ('I'd rather you...') требует Past Simple." },
        "c1_hm_ex5_q4": { correct: "c", explanation: "Сожаление о настоящем ('I don't know') требует Past Simple." },
        "c1_hm_ex5_q5": { correct: "a", explanation: "Конструкция 'It's high time' требует Past Simple." },
        "c1_hm_ex5_q6": { correct: "b", explanation: "После 'as if' используется Past Simple для нереальной ситуации в настоящем." },
        "c1_hm_ex5_q7": { correct: "c", explanation: "Предпочтение о своем действии ('I'd rather...') требует инфинитива без 'to'." },
        "c1_hm_ex5_q8": { correct: "c", explanation: "Жалоба на раздражающую привычку ('all the time') требует 'would + V1'." },
        "c1_hm_ex5_q9": { correct: "d", explanation: "Конструкция 'It's time we...' требует Past Simple." },
        "c1_hm_ex5_q10": { correct: "c", explanation: "Это Mixed Conditional (прошлое -> настоящее). 'If only I had taken...' (условие в прошлом)." }
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
