// a2_3_grammar_passive-voice-logic.js
document.addEventListener('DOMContentLoaded', () => {
    const grammarCorrectAnswers = {
        // --- Упражнение 1: Present Simple Passive ---
        "a2_pv_ex1_q1": { correct: "b", explanation: "English (it) - مفرد, поэтому is + V3 (spoken)." },
        "a2_pv_ex1_q2": { correct: "a", explanation: "This room (it) - مفرد, поэтому is + V3 (cleaned)." },
        "a2_pv_ex1_q3": { correct: "c", explanation: "These cars (they) - جمع, поэтому are + V3 (made)." },
        "a2_pv_ex1_q4": { correct: "a", explanation: "I - مفرد, используется с 'am' + V3 (paid)." },
        "a2_pv_ex1_q5": { correct: "a", explanation: "The windows (they) - جمع, поэтому are + V3 (washed)." },
        "a2_pv_ex1_q6": { correct: "b", explanation: "Oranges (they) - جمع, поэтому are + V3 (imported)." },
        "a2_pv_ex1_q7": { correct: "b", explanation: "Вопрос о 'this word' (it), поэтому 'Is this word pronounced?'." },
        "a2_pv_ex1_q8": { correct: "c", explanation: "Cheese (it) - مفرد, поэтому is + V3 (made)." },
        "a2_pv_ex1_q9": { correct: "a", explanation: "Many accidents (they) - جمع, поэтому are + V3 (caused)." },
        "a2_pv_ex1_q10": { correct: "c", explanation: "The office (it) - مفرد, поэтому is + V3 (locked)." },

        // --- Упражнение 2: Past Simple Passive ---
        "a2_pv_ex2_q1": { correct: "b", explanation: "My car (it) - مفرد, Past Simple: was + V3 (stolen)." },
        "a2_pv_ex2_q2": { correct: "c", explanation: "This bridge (it) - مفرد, Past Simple: was + V3 (built)." },
        "a2_pv_ex2_q3": { correct: "c", explanation: "These houses (they) - جمع, Past Simple: were + V3 (damaged)." },
        "a2_pv_ex2_q4": { correct: "a", explanation: "The suspect (he/she) - مفرد, Past Simple: was + V3 (arrested)." },
        "a2_pv_ex2_q5": { correct: "c", explanation: "We - جمع, отрицание в Past Simple Passive: weren't + V3 (invited)." },
        "a2_pv_ex2_q6": { correct: "a", explanation: "The first pyramids (they) - جمع, Past Simple: were + V3 (constructed)." },
        "a2_pv_ex2_q7": { correct: "b", explanation: "Вопрос о 'the telephone' (it) в прошлом: 'When was it invented?'." },
        "a2_pv_ex2_q8": { correct: "c", explanation: "I - مفرد, Past Simple Passive: was + V3 (given)." },
        "a2_pv_ex2_q9": { correct: "c", explanation: "The letters (they) - جمع, Past Simple: were + V3 (sent)." },
        "a2_pv_ex2_q10": { correct: "a", explanation: "The problem (it) - مفرد, Past Simple: was + V3 (solved)." },

        // --- Упражнение 3: Трансформация (Актив → Пассив) ---
        "a2_pv_ex3_q1": { correct: "b", explanation: "Active (Present Simple): cleans -> Passive (Present Simple): is cleaned." },
        "a2_pv_ex3_q2": { correct: "a", explanation: "Active (Past Simple): built -> Passive (Past Simple): were built (т.к. 'houses' - мн.ч.)." },
        "a2_pv_ex3_q3": { correct: "c", explanation: "Active (Past Simple): painted -> Passive (Past Simple): was painted." },
        "a2_pv_ex3_q4": { correct: "b", explanation: "Active (Present Simple): speak -> Passive (Present Simple): is spoken." },
        "a2_pv_ex3_q5": { correct: "c", explanation: "Active (Past Simple): made -> Passive (Past Simple): was made." },
        "a2_pv_ex3_q6": { correct: "c", explanation: "Active (Past Simple): stole -> Passive (Past Simple): was stolen." },
        "a2_pv_ex3_q7": { correct: "b", explanation: "Active (Present Simple Negative): don't deliver -> Passive (Present Simple Negative): isn't delivered." },
        "a2_pv_ex3_q8": { correct: "a", explanation: "Active (Past Simple): wrote -> Passive (Past Simple): was written." },
        "a2_pv_ex3_q9": { correct: "b", explanation: "Active (Present Simple): employs -> Passive (Present Simple): are employed (т.к. 'people' - мн.ч.)." },
        "a2_pv_ex3_q10": { correct: "b", explanation: "Active (Past Simple Negative): didn't catch -> Passive (Past Simple Negative): wasn't caught." },

        // --- Упражнение 4: Актив или Пассив? ---
        "a2_pv_ex4_q1": { correct: "a", explanation: "Мой друг сам совершил действие (подарил), поэтому активный залог 'gave'." },
        "a2_pv_ex4_q2": { correct: "b", explanation: "Картину 'написали', действие было совершено над ней, поэтому пассивный залог 'was painted'." },
        "a2_pv_ex4_q3": { correct: "b", explanation: "Рейс 'задержали', действие было совершено над ним, поэтому пассив 'was delayed'." },
        "a2_pv_ex4_q4": { correct: "a", explanation: "Она сама совершает действие (читает), поэтому актив 'reads'." },
        "a2_pv_ex4_q5": { correct: "b", explanation: "Кофе 'выращивают', действие совершается над ним, поэтому пассив 'is grown'." },
        "a2_pv_ex4_q6": { correct: "a", explanation: "Дети сами совершили действие (съели), поэтому актив 'ate'." },
        "a2_pv_ex4_q7": { correct: "b", explanation: "Меня 'пригласили', действие было совершено надо мной, поэтому пассив 'was invited'." },
        "a2_pv_ex4_q8": { correct: "a", explanation: "Солнце само совершает действие (встает), поэтому актив 'rises'." },
        "a2_pv_ex4_q9": { correct: "a", explanation: "Мост сам упал (глагол 'fall' непереходный и не используется в пассиве), поэтому актив 'fell'." },
        "a2_pv_ex4_q10": { correct: "b", explanation: "Америку 'открыли', действие было совершено над ней, поэтому пассив 'was discovered'." },

        // --- Упражнение 5: Завершите текст ---
        "a2_pv_ex5_q1": { correct: "b", explanation: "Речь о прошлом (15 век), поэтому Past Simple Passive: was built." },
        "a2_pv_ex5_q2": { correct: "a", explanation: "Речь о настоящем ('Today', 'every year'), поэтому Present Simple Passive: is visited." },
        "a2_pv_ex5_q3": { correct: "a", explanation: "Картины 'хранятся' сейчас (постоянный факт), поэтому Present Simple Passive: are kept." },
        "a2_pv_ex5_q4": { correct: "b", explanation: "Речь о прошлом ('Last year'), поэтому Past Simple Passive: was opened." },
        "a2_pv_ex5_q5": { correct: "a", explanation: "Речь о настоящем ('every day'), поэтому Present Simple Passive: is told." },
        "a2_pv_ex5_q6": { correct: "b", explanation: "Речь о прошлом ('in the 1990s'), поэтому Past Simple Passive: was shot." },
        "a2_pv_ex5_q7": { correct: "a", explanation: "Двери 'не запирают' в течение дня (обычное состояние), поэтому Present Simple Passive: aren't locked." },
        "a2_pv_ex5_q8": { correct: "b", explanation: "Речь о прошлом ('many years ago'), поэтому Past Simple Passive: were replaced." },
        "a2_pv_ex5_q9": { correct: "b", explanation: "Речь о прошлом ('a few years ago'), поэтому Past Simple Passive: were found." },
        "a2_pv_ex5_q10": { correct: "a", explanation: "Речь о настоящем ('Usually'), поэтому Present Simple Passive: are held." }
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
