// b2_4_grammar_modal-perfects-logic.js
document.addEventListener('DOMContentLoaded', () => {
    const grammarCorrectAnswers = {
        // --- Упражнение 1: Deduction (must have / can't have) ---
        "b2_mp_ex1_q1": { correct: "b", explanation: "Логический вывод на основе доказательств (свет выключен). 'must have gone' - должно быть, ушли." },
        "b2_mp_ex1_q2": { correct: "b", explanation: "Логически невозможно быть голодным после плотного обеда. 'can't be hungry'." },
        "b2_mp_ex1_q3": { correct: "a", explanation: "Идеальная оценка - сильное доказательство усердной учебы. 'must have studied'." },
        "b2_mp_ex1_q4": { correct: "a", explanation: "Есть прямое доказательство ее лжи. 'must have been lying'." },
        "b2_mp_ex1_q5": { correct: "b", explanation: "Снег на улицах - сильное доказательство. 'must have snowed'." },
        "b2_mp_ex1_q6": { correct: "a", explanation: "Разбитая ваза - логичный результат, если кошка была рядом. 'must have knocked'." },
        "b2_mp_ex1_q7": { correct: "c", explanation: "Алиби (был на работе) делает совершение преступления невозможным. 'couldn't have committed'." },
        "b2_mp_ex1_q8": { correct: "a", explanation: "Счастливый вид - сильное доказательство хороших новостей. 'must have received'." },
        "b2_mp_ex1_q9": { correct: "c", explanation: "Отличное качество проекта - доказательство потраченного времени. 'must have spent'." },
        "b2_mp_ex1_q10": { correct: "b", explanation: "Тот факт, что Том ненавидит шоколад, делает невозможным, чтобы он съел торт. 'can't have eaten'." },

        // --- Упражнение 2: Regret & Criticism (should have / shouldn't have) ---
        "b2_mp_ex2_q1": { correct: "a", explanation: "Сожаление о прошлом действии (вернее, его отсутствии). 'should have studied' - следовало учиться." },
        "b2_mp_ex2_q2": { correct: "c", explanation: "Критика прошлого действия. 'shouldn't have said' - не следовало говорить." },
        "b2_mp_ex2_q3": { correct: "b", explanation: "Сожаление о прошлом. 'should have left' - следовало выйти раньше." },
        "b2_mp_ex2_q4": { correct: "b", explanation: "Критика прошлого действия. 'shouldn't have eaten' - не следовало есть." },
        "b2_mp_ex2_q5": { correct: "c", explanation: "Сожаление о том, что не сделал чего-то. 'should have called'." },
        "b2_mp_ex2_q6": { correct: "a", explanation: "Выражение сожаления, что человек пропустил хорошее событие. 'You should have come' - тебе следовало прийти." },
        "b2_mp_ex2_q7": { correct: "b", explanation: "Критика: ты нарушил обещание. 'shouldn't have told'." },
        "b2_mp_ex2_q8": { correct: "a", explanation: "Критика неразумного поступка. 'shouldn't have bought'." },
        "b2_mp_ex2_q9": { correct: "c", explanation: "Сожаление о прошлом беспокойстве. 'shouldn't have worried'." },
        "b2_mp_ex2_q10": { correct: "a", explanation: "Критика: ты не последовал совету. 'should have listened'." },

        // --- Упражнение 3: Possibility (may / might / could have) ---
        "b2_mp_ex3_q1": { correct: "b", explanation: "Неуверенное предположение о прошлом. 'might have left'." },
        "b2_mp_ex3_q2": { correct: "a", explanation: "Возможное объяснение опоздания. 'may have missed'." },
        "b2_mp_ex3_q3": { correct: "c", explanation: "Предположение о возможной причине в прошлом. 'could have flown'." },
        "b2_mp_ex3_q4": { correct: "b", explanation: "Предположение об отрицательном действии в прошлом. 'might not have heard'." },
        "b2_mp_ex3_q5": { correct: "b", explanation: "Возможное объяснение, почему посылка не пришла. 'may have sent'." },
        "b2_mp_ex3_q6": { correct: "b", explanation: "Говорим о возможности в прошлом, которая, к счастью, не реализовалась. 'could have been injured'." },
        "b2_mp_ex3_q7": { correct: "b", explanation: "Неуверенное предположение о причине. 'might have forgotten'." },
        "b2_mp_ex3_q8": { correct: "b", explanation: "'I'm not sure' прямо указывает на неуверенность. 'may have'." },
        "b2_mp_ex3_q9": { correct: "a", explanation: "Возможное объяснение его отсутствия. 'could have been sick'." },
        "b2_mp_ex3_q10": { correct: "b", explanation: "Это возможное, но не единственное объяснение. 'might have been'." },
        
        // --- Упражнение 4: Mixed Practice ---
        "b2_mp_ex4_q1": { correct: "b", explanation: "Уверенность в невозможности действия. 'can't have eaten'." },
        "b2_mp_ex4_q2": { correct: "c", explanation: "Неуверенное предположение из-за беспокойства. 'may have failed'." },
        "b2_mp_ex4_q3": { correct: "a", explanation: "Сожаление о прошлом действии. 'shouldn't have eaten'." },
        "b2_mp_ex4_q4": { correct: "c", explanation: "Логический вывод на основе наблюдения. 'must have injured'." },
        "b2_mp_ex4_q5": { correct: "c", explanation: "Критика прошлого бездействия. 'should have told'." },
        "b2_mp_ex4_q6": { correct: "a", explanation: "Логический вывод о времени отправки. 'must have posted'." },
        "b2_mp_ex4_q7": { correct: "b", explanation: "Сожаление о недостаточной подготовке. 'should have prepared'." },
        "b2_mp_ex4_q8": { correct: "b", explanation: "Уверенность в невозможности действия. 'couldn't have understood'." },
        "b2_mp_ex4_q9": { correct: "b", explanation: "Неуверенное предположение, основанное на смутном воспоминании. 'might have met'." },
        "b2_mp_ex4_q10": { correct: "a", explanation: "Критика финансового решения. 'shouldn't have bought'." },

        // --- Упражнение 5: Rephrasing Situations ---
        "b2_mp_ex5_q1": { correct: "c", explanation: "'Almost sure' означает сильную уверенность -> 'must have taken'." },
        "b2_mp_ex5_q2": { correct: "b", explanation: "'It was a mistake' выражает сожаление -> 'shouldn't have told'." },
        "b2_mp_ex5_q3": { correct: "b", explanation: "'I'm not sure, but it's possible' выражает предположение -> 'might have left'." },
        "b2_mp_ex5_q4": { correct: "c", explanation: "'I'm sure she didn't' выражает уверенность в невозможности -> 'can't have seen'." },
        "b2_mp_ex5_q5": { correct: "a", explanation: "'It was a bad idea' выражает критику -> 'shouldn't have driven'." },
        "b2_mp_ex5_q6": { correct: "b", explanation: "'It's possible' выражает предположение -> 'could have been delayed'." },
        "b2_mp_ex5_q7": { correct: "a", explanation: "'I'm sure they didn't hear' выражает уверенность в невозможности -> 'can't have heard'." },
        "b2_mp_ex5_q8": { correct: "b", explanation: "'I regret not buying' выражает сожаление -> 'should have bought'." },
        "b2_mp_ex5_q9": { correct: "b", explanation: "'It's the only logical conclusion' выражает сильную уверенность -> 'must have forgotten'." },
        "b2_mp_ex5_q10": { correct: "b", explanation: "'It was a mistake' выражает критику -> 'shouldn't have shouted'." }
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
