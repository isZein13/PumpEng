// b1_7_grammar_conditionals-logic.js
document.addEventListener('DOMContentLoaded', () => {
    const grammarCorrectAnswers = {
        // --- Упражнение 1: Second Conditional (Review) ---
        "b1_c_ex1_q1": { correct: "b", explanation: "Нереальное условие в настоящем (я не знаю секрета). Type 2: If + Past Simple (knew)." },
        "b1_c_ex1_q2": { correct: "b", explanation: "Вопрос о гипотетической ситуации. Type 2: if + Past Simple (saw)." },
        "b1_c_ex1_q3": { correct: "c", explanation: "Для советов и нереальных ситуаций в Type 2 используется 'were' для всех лиц." },
        "b1_c_ex1_q4": { correct: "b", explanation: "Результат в нереальной ситуации. Type 2: would + V1 (wouldn't say)." },
        "b1_c_ex1_q5": { correct: "c", explanation: "Нереальное условие в настоящем (у нас нет времени). Type 2: If + Past Simple (had)." },
        "b1_c_ex1_q6": { correct: "b", explanation: "Вопрос о гипотетической ситуации. Type 2: Wh-word + would + S + V1?" },
        "b1_c_ex1_q7": { correct: "b", explanation: "Гипотетическая ситуация. Type 2: If + Past Simple (found)." },
        "b1_c_ex1_q8": { correct: "a", explanation: "Результат гипотетического условия. Type 2: If + Past Simple (helped)." },
        "b1_c_ex1_q9": { correct: "b", explanation: "Нереальное условие в настоящем (машина старая). 'wasn't' - Past Simple negative." },
        "b1_c_ex1_q10": { correct: "a", explanation: "Нереальная ситуация. Main clause: would be, if-clause: didn't complain (Past Simple)." },

        // --- Упражнение 2: Third Conditional ---
        "b1_c_ex2_q1": { correct: "b", explanation: "Нереальное условие в прошлом. Type 3: If + Past Perfect (had studied)." },
        "b1_c_ex2_q2": { correct: "b", explanation: "Результат нереального прошлого. Type 3: if + Past Perfect (had left)." },
        "b1_c_ex2_q3": { correct: "b", explanation: "Нереальное условие в прошлом (отрицание). Type 3: If + Past Perfect Negative (hadn't forgotten)." },
        "b1_c_ex2_q4": { correct: "b", explanation: "Результат нереального прошлого. Type 3: would have + V3 (called)." },
        "b1_c_ex2_q5": { correct: "c", explanation: "Нереальное условие в прошлом. Type 3: If + Past Perfect (had told)." },
        "b1_c_ex2_q6": { correct: "b", explanation: "Результат нереального прошлого (отрицание). Type 3: wouldn't have + V3 (happened)." },
        "b1_c_ex2_q7": { correct: "b", explanation: "Нереальное условие в прошлом. Type 3: If + Past Perfect (had known)." },
        "b1_c_ex2_q8": { correct: "c", explanation: "Результат нереального прошлого. Type 3: would have + V3 (won)." },
        "b1_c_ex2_q9": { correct: "b", explanation: "Нереальное условие в прошлом (отрицание). Type 3: If + Past Perfect Negative (hadn't spent)." },
        "b1_c_ex2_q10": { correct: "b", explanation: "Вопрос о результате нереального прошлого. Type 3: What + would + S + have + V3?" },

        // --- Упражнение 3: Выбери правильную часть предложения ---
        "b1_c_ex3_q1": { correct: "b", explanation: "Условие в Past Simple (were) -> результат с 'would + V1' (would buy). Type 2." },
        "b1_c_ex3_q2": { correct: "c", explanation: "Условие в Past Perfect (had told) -> результат с 'would have + V3' (would have understood). Type 3." },
        "b1_c_ex3_q3": { correct: "b", explanation: "Результат с 'would + V1' (would travel) -> условие в Past Simple (won). Type 2." },
        "b1_c_ex3_q4": { correct: "a", explanation: "Результат с 'would have + V3' (would have called) -> условие в Past Perfect (had had). Type 3." },
        "b1_c_ex3_q5": { correct: "a", explanation: "Условие в Past Simple (knew) -> результат с 'would + V1' (would help). Type 2." },
        "b1_c_ex3_q6": { correct: "b", explanation: "Условие в Past Perfect (hadn't been) -> результат с 'would have + V3' (would have gone). Type 3." },
        "b1_c_ex3_q7": { correct: "c", explanation: "Результат с 'would + V1' (would learn) -> условие в Past Simple (had). Type 2." },
        "b1_c_ex3_q8": { correct: "b", explanation: "Результат с 'would have + V3' (wouldn't have been) -> условие в Past Perfect (hadn't missed). Type 3." },
        "b1_c_ex3_q9": { correct: "a", explanation: "Условие в Past Simple (were) -> результат с 'would + V1' (who would you be?). Type 2." },
        "b1_c_ex3_q10": { correct: "b", explanation: "Условие в Past Perfect (had listened) -> результат в прошлом с 'would have + V3' (wouldn't have been). Вариант 'a' - это Mixed Conditional, который изучается на B2." },
        
        // --- Упражнение 4: Second или Third Conditional? ---
        "b1_c_ex4_q1": { correct: "a", explanation: "Ситуация в настоящем ('I don't have a car'). Используем Type 2 для гипотезы о настоящем." },
        "b1_c_ex4_q2": { correct: "b", explanation: "Ситуация в прошлом ('We missed the flight yesterday'). Используем Type 3 для сожаления о прошлом." },
        "b1_c_ex4_q3": { correct: "a", explanation: "Ситуация в настоящем ('I'm not a doctor'). Используем Type 2 для воображаемой ситуации." },
        "b1_c_ex4_q4": { correct: "b", explanation: "Ситуация в прошлом ('I didn't see you... last night'). Используем Type 3." },
        "b1_c_ex4_q5": { correct: "a", explanation: "Гипотетический вопрос о настоящем/будущем. Используем Type 2." },
        "b1_c_ex4_q6": { correct: "b", explanation: "Ситуация в прошлом ('The team lost... on Saturday'). Используем Type 3." },
        "b1_c_ex4_q7": { correct: "a", explanation: "Ситуация в настоящем/будущем ('I'm busy tomorrow'). Используем Type 2." },
        "b1_c_ex4_q8": { correct: "b", explanation: "Ситуация в прошлом ('He didn't know'). Используем Type 3." },
        "b1_c_ex4_q9": { correct: "a", explanation: "Гипотеза о настоящем (я не говорю по-французски). Используем Type 2." },
        "b1_c_ex4_q10": { correct: "b", explanation: "Ситуация в прошлом ('The weather was terrible'). Используем Type 3." },

        // --- Упражнение 5: Трансформация из реальной ситуации ---
        "b1_c_ex5_q1": { correct: "b", explanation: "Реальность в настоящем -> нереальная ситуация в настоящем (Type 2)." },
        "b1_c_ex5_q2": { correct: "c", explanation: "Реальность в прошлом -> нереальная ситуация в прошлом (Type 3)." },
        "b1_c_ex5_q3": { correct: "a", explanation: "Реальность в настоящем -> нереальная ситуация в настоящем (Type 2)." },
        "b1_c_ex5_q4": { correct: "b", explanation: "Реальность в прошлом -> нереальная ситуация в прошлом (Type 3)." },
        "b1_c_ex5_q5": { correct: "c", explanation: "Реальность в настоящем (can't speak) -> нереальная ситуация в настоящем (could speak, would work). Type 2." },
        "b1_c_ex5_q6": { correct: "a", explanation: "Реальность в прошлом (was busy) -> нереальная ситуация в прошлом (hadn't been busy). Type 3." },
        "b1_c_ex5_q7": { correct: "a", explanation: "Реальность в настоящем (don't know) -> нереальная ситуация в настоящем (knew, would tell). Type 2." },
        "b1_c_ex5_q8": { correct: "c", explanation: "Реальность в прошлом (missed the bus) -> нереальная ситуация в прошлом (hadn't missed). Type 3." },
        "b1_c_ex5_q9": { correct: "a", explanation: "Реальность в настоящем (isn't working) -> нереальная ситуация в настоящем (worked, would check). Type 2." },
        "b1_c_ex5_q10": { correct: "c", explanation: "Реальность в прошлом (didn't have) -> нереальная ситуация в прошлом (had had). Type 3." }
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
