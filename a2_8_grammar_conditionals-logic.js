// a2_8_grammar_conditionals-logic.js
document.addEventListener('DOMContentLoaded', () => {
    const grammarCorrectAnswers = {
        // --- Упражнение 1: Zero Conditional (Тип 0) ---
        "a2_c_ex1_q1": { correct: "a", explanation: "Научный факт. Zero Conditional: If + Present Simple, Present Simple." },
        "a2_c_ex1_q2": { correct: "a", explanation: "Общеизвестная истина. Zero Conditional: If + Present Simple, Present Simple." },
        "a2_c_ex1_q3": { correct: "b", explanation: "Закон природы. Zero Conditional: Present Simple, if + Present Simple." },
        "a2_c_ex1_q4": { correct: "a", explanation: "Личная привычка, которая всегда верна. Zero Conditional: If + Present Simple, Present Simple." },
        "a2_c_ex1_q5": { correct: "c", explanation: "Закономерность. Zero Conditional: Present Simple, if + Present Simple." },
        "a2_c_ex1_q6": { correct: "a", explanation: "Факт (результат смешивания цветов). Zero Conditional: If + Present Simple, Present Simple." },
        "a2_c_ex1_q7": { correct: "a", explanation: "Закон природы. Zero Conditional: When + Present Simple, Present Simple." },
        "a2_c_ex1_q8": { correct: "c", explanation: "Общая истина о здоровье. Zero Conditional: If + Present Simple, Present Simple." },
        "a2_c_ex1_q9": { correct: "a", explanation: "Регулярная реакция на событие. Zero Conditional. Главная часть в Present Simple, придаточная - тоже." },
        "a2_c_ex1_q10": { correct: "b", explanation: "Физический закон. Zero Conditional: If + Present Simple, Present Simple." },

        // --- Упражнение 2: First Conditional (Тип 1) ---
        "a2_c_ex2_q1": { correct: "a", explanation: "Реальное условие в будущем. First Conditional: If + Present Simple (study), will + V1 (will pass)." },
        "a2_c_ex2_q2": { correct: "b", explanation: "Реальное условие. First Conditional: If + Present Simple (rains), will + not + V1 (won't go)." },
        "a2_c_ex2_q3": { correct: "c", explanation: "Реальное условие. First Conditional: will + V1 (will call), if + Present Simple (have)." },
        "a2_c_ex2_q4": { correct: "a", explanation: "Реальное условие. First Conditional: If + Present Simple (is), will + V1 (will start)." },
        "a2_c_ex2_q5": { correct: "c", explanation: "Реальное условие. First Conditional: will + V1 (will get), if + Present Simple Negative (don't wear)." },
        "a2_c_ex2_q6": { correct: "a", explanation: "Вопрос о реальном будущем. First Conditional: What + will + S + V1 (will you do), if + S + Present Simple (you miss)?" },
        "a2_c_ex2_q7": { correct: "b", explanation: "Реальное условие. First Conditional: If + Present Simple (passes), will + V1 (will be)." },
        "a2_c_ex2_q8": { correct: "b", explanation: "Реальное условие. First Conditional: will + V1 (will go), if + Present Simple (save)." },
        "a2_c_ex2_q9": { correct: "a", explanation: "Реальное условие. First Conditional: If + Present Simple Negative (doesn't hurry), will + V1 (will be)." },
        "a2_c_ex2_q10": { correct: "b", explanation: "Реальное условие. First Conditional: will + V1 (will be), if + Present Simple (forget)." },

        // --- Упражнение 3: Second Conditional (Тип 2) ---
        "a2_c_ex3_q1": { correct: "b", explanation: "Нереальная ситуация (мечта). Second Conditional: If + Past Simple (had), would + V1 (would buy)." },
        "a2_c_ex3_q2": { correct: "c", explanation: "Совет (нереальная ситуация). Second Conditional: If + I + were you, would + not + V1 (wouldn't do)." },
        "a2_c_ex3_q3": { correct: "b", explanation: "Вопрос о нереальной ситуации. Second Conditional: What + would + S + V1 (would you do), if + S + Past Simple (won)?" },
        "a2_c_ex3_q4": { correct: "a", explanation: "Нереальная ситуация. Second Conditional: If + Past Simple (lived), would + V1 (would have)." },
        "a2_c_ex3_q5": { correct: "a", explanation: "Нереальная ситуация. Second Conditional: would + V1 (would travel), if + Past Simple (had)." },
        "a2_c_ex3_q6": { correct: "b", explanation: "Нереальная ситуация. 'were' используется для всех лиц в Type 2. 'could' - это вариант 'would be able to'." },
        "a2_c_ex3_q7": { correct: "c", explanation: "Нереальная ситуация. Second Conditional: would + V1 (would be), if + Past Simple Negative (didn't live)." },
        "a2_c_ex3_q8": { correct: "a", explanation: "Нереальная ситуация. Past Simple от 'can' - 'could'. Second Conditional: If + could, would + V1." },
        "a2_c_ex3_q9": { correct: "a", explanation: "Нереальная ситуация. Second Conditional: would + V1 (would visit), if + Past Simple Negative (weren't)." },
        "a2_c_ex3_q10": { correct: "c", explanation: "Нереальная ситуация (я не знаю его номер). Second Conditional: If + Past Simple (knew), would + V1 (would call)." },

        // --- Упражнение 4: First или Second Conditional? ---
        "a2_c_ex4_q1": { correct: "a", explanation: "Это реальная возможность в будущем (я могу его увидеть). Используем Type 1." },
        "a2_c_ex4_q2": { correct: "b", explanation: "Это гипотетическая, нереальная ситуация (я не супергерой). Используем Type 2." },
        "a2_c_ex4_q3": { correct: "b", explanation: "Это воображаемая ситуация (у меня нет крыльев). Используем Type 2." },
        "a2_c_ex4_q4": { correct: "b", explanation: "Это реальный план на будущее, зависящий от погоды. Используем Type 1." },
        "a2_c_ex4_q5": { correct: "b", explanation: "Это стандартная формула для совета ('на твоем месте я бы...'), нереальная ситуация. Используем Type 2." },
        "a2_c_ex4_q6": { correct: "a", explanation: "Это мечта, воображаемая ситуация. Используем Type 2." },
        "a2_c_ex4_q7": { correct: "b", explanation: "Это реальное предупреждение о возможном событии в будущем. Используем Type 1." },
        "a2_c_ex4_q8": { correct: "b", explanation: "Вопрос о гипотетической ситуации. Используем Type 2." },
        "a2_c_ex4_q9": { correct: "b", explanation: "Это реальное условие для будущего (игра еще не закончилась). Используем Type 1." },
        "a2_c_ex4_q10": { correct: "a", explanation: "Мы представляем себе нереальный мир без машин. Используем Type 2." },

        // --- Упражнение 5: Смешанная практика (Типы 0, 1, 2) ---
        "a2_c_ex5_q1": { correct: "b", explanation: "Факт, закон природы. Используется Zero Conditional (Present Simple + Present Simple)." },
        "a2_c_ex5_q2": { correct: "b", explanation: "Гипотетическая ситуация. Используется Second Conditional (If + Past Simple, would + V1)." },
        "a2_c_ex5_q3": { correct: "a", explanation: "Реальная возможность в будущем. Используется First Conditional (will + V1, if + Present Simple)." },
        "a2_c_ex5_q4": { correct: "c", explanation: "Совет ('If I were you...'). Используется Second Conditional (If + were, would + V1)." },
        "a2_c_ex5_q5": { correct: "a", explanation: "Факт, закон физики. Используется Zero Conditional (Present Simple + Present Simple)." },
        "a2_c_ex5_q6": { correct: "c", explanation: "Реальная возможность в будущем. Используется First Conditional (if + Present Simple, will + V1)." },
        "a2_c_ex5_q7": { correct: "a", explanation: "Гипотетическая ситуация. Используется Second Conditional (would + V1, if + Past Simple)." },
        "a2_c_ex5_q8": { correct: "c", explanation: "Привычка, регулярное действие. Используется Zero Conditional (Present Simple + Present Simple)." },
        "a2_c_ex5_q9": { correct: "b", explanation: "Речь идет о гипотетическом приглашении. Используется Second Conditional (If + Past Simple, would + V1)." },
        "a2_c_ex5_q10": { correct: "c", explanation: "Реальное условие в будущем (предложение сделки). Используется First Conditional (if + Present Simple, will + V1)." }
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
