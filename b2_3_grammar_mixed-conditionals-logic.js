// b2_3_grammar_mixed-conditionals-logic.js
document.addEventListener('DOMContentLoaded', () => {
    const grammarCorrectAnswers = {
        // --- Упражнение 1: Review (Type 2 & 3) ---
        "b2_mc_ex1_q1": { correct: "b", explanation: "Нереальное условие в настоящем (я не знаю). Type 2: If + Past Simple (knew)." },
        "b2_mc_ex1_q2": { correct: "c", explanation: "Нереальное условие в прошлом (я не знал). Type 3: If + Past Perfect (had known)." },
        "b2_mc_ex1_q3": { correct: "b", explanation: "Нереальная ситуация в настоящем. Type 2: would + V1, if + Past Simple (were)." },
        "b2_mc_ex1_q4": { correct: "c", explanation: "Нереальный результат в прошлом. Type 3: would have + V3 (passed)." },
        "b2_mc_ex1_q5": { correct: "c", explanation: "Нереальное условие в настоящем. Type 2: if + Past Simple (won)." },
        "b2_mc_ex1_q6": { correct: "a", explanation: "Нереальное условие в прошлом. Type 3: If + Past Perfect (had received)." },
        "b2_mc_ex1_q7": { correct: "b", explanation: "Нереальная ситуация в настоящем. Type 2: would + V1, if + Past Simple (had)." },
        "b2_mc_ex1_q8": { correct: "b", explanation: "Нереальный результат в прошлом. Type 3: if + Past Perfect (had gone)." },
        "b2_mc_ex1_q9": { correct: "a", explanation: "Нереальная ситуация в настоящем. Type 2: If + Past Simple (were)." },
        "b2_mc_ex1_q10": { correct: "b", explanation: "Нереальный результат в прошлом. Type 3: wouldn't have + V3 (made)." },

        // --- Упражнение 2: Mixed Conditional (Past -> Present) ---
        "b2_mc_ex2_q1": { correct: "b", explanation: "Условие в прошлом (last year) -> результат в настоящем (now). If + Past Perfect, would + V1." },
        "b2_mc_ex2_q2": { correct: "a", explanation: "Условие в прошлом (не потратил деньги) -> результат в настоящем (мог бы купить кофе). If + Past Perfect, would + V1." },
        "b2_mc_ex2_q3": { correct: "b", explanation: "Результат в настоящем (уставший сегодня) -> условие в прошлом (не спал прошлой ночью). would + V1, if + Past Perfect." },
        "b2_mc_ex2_q4": { correct: "a", explanation: "Условие в прошлом (вышла замуж) -> результат в настоящем (была бы королевой сейчас). If + Past Perfect, would + V1." },
        "b2_mc_ex2_q5": { correct: "a", explanation: "Результат в настоящем (не был бы в стрессе) -> условие в прошлом (закончил вчера). would + V1, if + Past Perfect." },
        "b2_mc_ex2_q6": { correct: "a", explanation: "Условие в прошлом (купили тот дом) -> результат в настоящем (имели бы ипотеку сейчас). If + Past Perfect, would + V1." },
        "b2_mc_ex2_q7": { correct: "a", explanation: "Условие в прошлом (не сломал ногу) -> результат в настоящем (поехал бы сейчас). If + Past Perfect, would + V1." },
        "b2_mc_ex2_q8": { correct: "b", explanation: "Результат в настоящем (мы бы заблудились) -> условие в прошлом (не спросили дорогу). would + V1, if + Past Perfect." },
        "b2_mc_ex2_q9": { correct: "a", explanation: "Условие в прошлом (инвестировал) -> результат в настоящем (был бы миллионером). If + Past Perfect, would + V1." },
        "b2_mc_ex2_q10": { correct: "a", explanation: "Результат в настоящем (я бы знал ответ) -> условие в прошлом (прочитал книгу). would + V1, if + Past Perfect." },

        // --- Упражнение 3: Mixed Conditional (Present -> Past) ---
        "b2_mc_ex3_q1": { correct: "c", explanation: "Условие в настоящем (если бы я был поваром) -> результат в прошлом (вчера). If + Past Simple, would have + V3." },
        "b2_mc_ex3_q2": { correct: "a", explanation: "Условие в настоящем (если бы он не был ленивым) -> результат в прошлом (на прошлой неделе). If + Past Simple, would have + V3." },
        "b2_mc_ex3_q3": { correct: "b", explanation: "Результат в прошлом (пошел бы на вечеринку вчера) -> условие в настоящем (если бы не должен был работать сегодня). would have + V3, if + Past Simple." },
        "b2_mc_ex3_q4": { correct: "a", explanation: "Условие в настоящем (если бы она говорила по-русски) -> результат в прошлом (в прошлый понедельник). If + Past Simple, would have + V3." },
        "b2_mc_ex3_q5": { correct: "a", explanation: "Условие в настоящем (не боюсь пауков) -> результат в прошлом (помог бы тебе). If + Past Simple, would have + V3." },
        "b2_mc_ex3_q6": { correct: "b", explanation: "Результат в прошлом (купили бы) -> условие в настоящем (если бы знали). would have + V3, if + Past Simple." },
        "b2_mc_ex3_q7": { correct: "c", explanation: "Условие в настоящем (если бы он был ответственным) -> результат в прошлом (вчера). If + Past Simple, would have + V3." },
        "b2_mc_ex3_q8": { correct: "a", explanation: "Условие в настоящем (если бы у меня была машина) -> результат в прошлом (прошлой ночью). If + Past Simple, would have + V3." },
        "b2_mc_ex3_q9": { correct: "a", explanation: "Результат в прошлом (не заблудились бы) -> условие в настоящем (если бы умели читать карту). would have + V3, if + Past Simple (could)." },
        "b2_mc_ex3_q10": { correct: "b", explanation: "Условие в настоящем (если бы он был другом) -> результат в прошлом (когда тебе это было нужно). If + Past Simple, would have + V3." },
        
        // --- Упражнение 4: All Types Mixed ---
        "b2_mc_ex4_q1": { correct: "b", explanation: "Ситуация в прошлом: я не знал о пробке, поэтому поехал этим путем. Сожаление о прошлом - Type 3." },
        "b2_mc_ex4_q2": { correct: "a", explanation: "Совет, гипотеза о настоящем. 'I'm not you'. Используется Type 2." },
        "b2_mc_ex4_q3": { correct: "c", explanation: "Условие в прошлом (не пошел в медшколу) -> результат в настоящем (я не врач). Mixed Conditional." },
        "b2_mc_ex4_q4": { correct: "b", explanation: "Условие в настоящем (она не говорит лучше) -> результат в прошлом (не получила работу). Mixed Conditional." },
        "b2_mc_ex4_q5": { correct: "b", explanation: "Вопрос о гипотетической ситуации в прошлом. Type 3." },
        "b2_mc_ex4_q6": { correct: "b", explanation: "Условие - его черта характера (настоящее), результат - действие в прошлом ('ages ago'). Mixed Conditional." },
        "b2_mc_ex4_q7": { correct: "c", explanation: "Условие в прошлом (если бы НЕ забыл) -> результат в настоящем (был бы там СЕЙЧАС). Mixed Conditional." },
        "b2_mc_ex4_q8": { correct: "a", explanation: "Гипотеза о настоящем (ты тратишь деньги, поэтому не можешь позволить отпуск). Type 2." },
        "b2_mc_ex4_q9": { correct: "b", explanation: "Ситуация полностью в прошлом ('yesterday'). Type 3." },
        "b2_mc_ex4_q10": { correct: "a", explanation: "Ситуация полностью в прошлом (я не знал, поэтому не приготовил). Type 3." },

        // --- Упражнение 5: What's the Real Meaning? ---
        "b2_mc_ex5_q1": { correct: "b", explanation: "Type 2 описывает нереальную ситуацию в настоящем." },
        "b2_mc_ex5_q2": { correct: "b", explanation: "Type 3 описывает нереальную ситуацию в прошлом." },
        "b2_mc_ex5_q3": { correct: "a", explanation: "Mixed conditional (past -> present) описывает, как прошлое действие влияет на настоящее." },
        "b2_mc_ex5_q4": { correct: "c", explanation: "Mixed conditional (present -> past) описывает, как постоянная черта характера повлияла на прошлое событие." },
        "b2_mc_ex5_q5": { correct: "a", explanation: "Type 2 описывает нереальную ситуацию в настоящем." },
        "b2_mc_ex5_q6": { correct: "a", explanation: "Type 3 описывает нереальную ситуацию в прошлом." },
        "b2_mc_ex5_q7": { correct: "b", explanation: "Mixed conditional (present -> past) описывает, как текущая ситуация (работа на выходных) повлияла на прошлое." },
        "b2_mc_ex5_q8": { correct: "b", explanation: "Mixed conditional (past -> present) описывает, как прошлое действие (не вспомнил) влияет на настоящее состояние (она расстроена)." },
        "b2_mc_ex5_q9": { correct: "a", explanation: "Type 2 описывает нереальную ситуацию в настоящем." },
        "b2_mc_ex5_q10": { correct: "b", explanation: "Type 3 описывает нереальную ситуацию в прошлом." }
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
