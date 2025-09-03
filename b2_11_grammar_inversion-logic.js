// b2_11_grammar_inversion-logic.js
document.addEventListener('DOMContentLoaded', () => {
    const grammarCorrectAnswers = {
        // --- Упражнение 1: Инверсия с 'Never', 'Rarely', 'Seldom' ---
        "b2_inv_ex1_q1": { correct: "b", explanation: "После 'Never' идет инверсия: вспомогательный глагол (have) + подлежащее (I) + основной глагол (tasted)." },
        "b2_inv_ex1_q2": { correct: "b", explanation: "После 'Seldom' идет инверсия: has + she + felt." },
        "b2_inv_ex1_q3": { correct: "d", explanation: "Для Present Simple инверсия образуется с 'do/does': do + we + meet." },
        "b2_inv_ex1_q4": { correct: "a", explanation: "Для Past Perfect инверсия: had + I + had." },
        "b2_inv_ex1_q5": { correct: "c", explanation: "Для Present Simple с 'they' инверсия: do + they + go." },
        "b2_inv_ex1_q6": { correct: "d", explanation: "Для Past Simple инверсия образуется с 'did': did + I + dream." },
        "b2_inv_ex1_q7": { correct: "c", explanation: "Для Present Simple с подлежащим в 3-м лице ед.ч.: does + an opportunity + come." },
        "b2_inv_ex1_q8": { correct: "c", explanation: "Для Present Perfect инверсия: have + I + felt." },
        "b2_inv_ex1_q9": { correct: "d", explanation: "Для Present Simple с 'she' инверсия: does + she + get." },
        "b2_inv_ex1_q10": { correct: "b", explanation: "Для Present Perfect с глаголом 'to be' инверсия: have + I + been." },

        // --- Упражнение 2: Инверсия с 'Hardly / Scarcely / Barely ... when' ---
        "b2_inv_ex2_q1": { correct: "b", explanation: "После 'Hardly' используется Past Perfect с инверсией: had + I + opened." },
        "b2_inv_ex2_q2": { correct: "a", explanation: "Слова 'Hardly', 'Scarcely', 'Barely' образуют пару с 'when'." },
        "b2_inv_ex2_q3": { correct: "c", explanation: "Инверсия с Past Perfect: had + the sun + risen." },
        "b2_inv_ex2_q4": { correct: "b", explanation: "Слово 'Hardly' образует пару с 'when'." },
        "b2_inv_ex2_q5": { correct: "b", explanation: "После 'Scarcely' используется Past Perfect с инверсией: had + he + closed." },
        "b2_inv_ex2_q6": { correct: "a", explanation: "Слово 'Barely' образует пару с 'when'." },
        "b2_inv_ex2_q7": { correct: "c", explanation: "После 'Hardly' используется Past Perfect с инверсией: had + she + stepped." },
        "b2_inv_ex2_q8": { correct: "b", explanation: "Слово 'Scarcely' образует пару с 'when'." },
        "b2_inv_ex2_q9": { correct: "c", explanation: "После 'Barely' используется Past Perfect с инверсией: had + we + finished." },
        "b2_inv_ex2_q10": { correct: "a", explanation: "После 'Hardly' используется Past Perfect с инверсией: had + he + begun." },

        // --- Упражнение 3: Инверсия с 'No sooner ... than' ---
        "b2_inv_ex3_q1": { correct: "b", explanation: "После 'No sooner' используется Past Perfect с инверсией: had + I + got." },
        "b2_inv_ex3_q2": { correct: "d", explanation: "Слово 'No sooner' образует пару с 'than'." },
        "b2_inv_ex3_q3": { correct: "c", explanation: "После 'No sooner' используется Past Perfect с инверсией: had + she + heard." },
        "b2_inv_ex3_q4": { correct: "a", explanation: "Слово 'No sooner' образует пару с 'than'." },
        "b2_inv_ex3_q5": { correct: "b", explanation: "После 'No sooner' используется Past Perfect с инверсией: had + he + put." },
        "b2_inv_ex3_q6": { correct: "a", explanation: "Слово 'No sooner' образует пару с 'than'." },
        "b2_inv_ex3_q7": { correct: "b", explanation: "После 'No sooner' используется Past Perfect с инверсией: had + the company + announced." },
        "b2_inv_ex3_q8": { correct: "c", explanation: "Слово 'No sooner' образует пару с 'than'." },
        "b2_inv_ex3_q9": { correct: "a", explanation: "После 'No sooner' используется Past Perfect с инверсией: had + he + submitted." },
        "b2_inv_ex3_q10": { correct: "a", explanation: "После 'No sooner' используется Past Perfect с инверсией: had + they + completed." },
        
        // --- Упражнение 4: Инверсия с 'Not only ... but also' ---
        "b2_inv_ex4_q1": { correct: "b", explanation: "После 'Not only' глагол 'to be' (was) ставится перед подлежащим (he)." },
        "b2_inv_ex4_q2": { correct: "d", explanation: "Для Past Simple инверсия образуется с 'did': did + he + borrow." },
        "b2_inv_ex4_q3": { correct: "a", explanation: "Глагол 'to be' (is) ставится перед подлежащим (she)." },
        "b2_inv_ex4_q4": { correct: "d", explanation: "Для Past Simple инверсия образуется с 'did': did + they + break." },
        "b2_inv_ex4_q5": { correct: "b", explanation: "Глагол 'to be' (is) ставится перед подлежащим (she)." },
        "b2_inv_ex4_q6": { correct: "c", explanation: "Для Past Simple инверсия образуется с 'did': did + he + miss." },
        "b2_inv_ex4_q7": { correct: "c", explanation: "Глагол 'to be' (are) ставится перед подлежащим (they)." },
        "b2_inv_ex4_q8": { correct: "b", explanation: "Для Past Simple инверсия образуется с 'did': did + they + win." },
        "b2_inv_ex4_q9": { correct: "b", explanation: "Для Past Simple инверсия образуется с 'did': did + she + break." },
        "b2_inv_ex4_q10": { correct: "b", explanation: "Глагол 'to be' (is) ставится перед подлежащим (he)." },

        // --- Упражнение 5: Mixed Practice ---
        "b2_inv_ex5_q1": { correct: "b", explanation: "Инверсия с 'Never' для Present Perfect: have I seen." },
        "b2_inv_ex5_q2": { correct: "a", explanation: "Инверсия с 'Hardly' для Past Perfect: had the meal begun." },
        "b2_inv_ex5_q3": { correct: "b", explanation: "Инверсия с 'Not only' для Present Simple с 'to be': is she." },
        "b2_inv_ex5_q4": { correct: "b", explanation: "Конструкция 'No sooner... than...'" },
        "b2_inv_ex5_q5": { correct: "b", explanation: "Инверсия с 'Seldom' для Present Perfect: have I witnessed." },
        "b2_inv_ex5_q6": { correct: "d", explanation: "Конструкция 'Barely... when...'" },
        "b2_inv_ex5_q7": { correct: "b", explanation: "Инверсия с 'Not only' для Past Simple: did he go." },
        "b2_inv_ex5_q8": { correct: "a", explanation: "Инверсия с 'No sooner' для Past Perfect: had the door closed." },
        "b2_inv_ex5_q9": { correct: "d", explanation: "Инверсия с 'Rarely' для Present Perfect с 'to be': have I been." },
        "b2_inv_ex5_q10": { correct: "a", explanation: "Инверсия с 'Scarcely' для Past Perfect: had she fallen asleep." }
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
