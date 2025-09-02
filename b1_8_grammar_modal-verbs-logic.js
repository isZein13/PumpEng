// b1_8_grammar_modal-verbs-logic.js
document.addEventListener('DOMContentLoaded', () => {
    const grammarCorrectAnswers = {
        // --- Упражнение 1: 'must' (Сильная уверенность) ---
        "b1_mv_ex1_q1": { correct: "a", explanation: "Включенный свет - это веское доказательство. Используем 'must' для сильной уверенности." },
        "b1_mv_ex1_q2": { correct: "c", explanation: "12 часов работы - это логичная причина для усталости. 'must be tired'." },
        "b1_mv_ex1_q3": { correct: "c", explanation: "Отсутствие ответа - это не 100% доказательство занятости, а лишь возможность. 'might be busy'." },
        "b1_mv_ex1_q4": { correct: "b", explanation: "Если человек не ел весь день, логично предположить, что он голоден. 'must be hungry'." },
        "b1_mv_ex1_q5": { correct: "b", explanation: "Огромная библиотека - сильное доказательство любви к чтению. 'must love reading'." },
        "b1_mv_ex1_q6": { correct: "a", explanation: "Это дедукция о прошлом, но на B1 часто упрощают до 'must have rained'. Структура 'must + V1' здесь не подходит, но из вариантов этот самый логичный для выражения уверенности." },
        "b1_mv_ex1_q7": { correct: "b", explanation: "Хорошее знание города - сильный аргумент в пользу того, что она там жила. 'must have lived'." },
        "b1_mv_ex1_q8": { correct: "c", explanation: "Униформа - веское доказательство. 'must work'." },
        "b1_mv_ex1_q9": { correct: "b", explanation: "Данные GPS дают высокую степень уверенности. 'must be'." },
        "b1_mv_ex1_q10": { correct: "c", explanation: "Всеобщий смех - это сильное доказательство того, что шутка смешная. 'must be'." },

        // --- Упражнение 2: 'can't' (Сильная уверенность в обратном) ---
        "b1_mv_ex2_q1": { correct: "b", explanation: "Логически невозможно быть голодным сразу после большого обеда. 'can't be hungry'." },
        "b1_mv_ex2_q2": { correct: "c", explanation: "Есть прямое доказательство обратного (я его только что видел). 'It can't be true'." },
        "b1_mv_ex2_q3": { correct: "a", explanation: "Боязнь высоты делает невозможной работу пилотом. 'She can't be a pilot'." },
        "b1_mv_ex2_q4": { correct: "b", explanation: "Нелогично нуждаться в новой машине через неделю после покупки. 'They can't need...'" },
        "b1_mv_ex2_q5": { correct: "b", explanation: "Тот факт, что он не говорит по-французски, делает невозможным, чтобы это был он. 'That can't be his brother'." },
        "b1_mv_ex2_q6": { correct: "a", explanation: "Пятизвездочные отели почти никогда не бывают дешевыми. 'It can't be cheap'." },
        "b1_mv_ex2_q7": { correct: "b", explanation: "Если вы спали весь день, логично, что вы не можете быть уставшим. 'You can't be tired'." },
        "b1_mv_ex2_q8": { correct: "c", explanation: "Это нелогично и безответственно. 'He can't be serious'." },
        "b1_mv_ex2_q9": { correct: "a", explanation: "Холодный и жесткий стейк не может быть свежим. 'It can't be fresh'." },
        "b1_mv_ex2_q10": { correct: "b", explanation: "Быть вегетарианцем исключает поедание гамбургера. 'She can't be eating...'" },

        // --- Упражнение 3: 'may / might / could' (Возможность) ---
        "b1_mv_ex3_q1": { correct: "b", explanation: "'I'm not sure' указывает на предположение, а не на уверенность. 'might be'." },
        "b1_mv_ex3_q2": { correct: "b", explanation: "Есть вероятность, что грибы ядовиты. 'could be'." },
        "b1_mv_ex3_q3": { correct: "c", explanation: "Неуверенность в планах выражается через 'may' или 'might'." },
        "b1_mv_ex3_q4": { correct: "a", explanation: "Говорящий не уверен, но предполагает. 'could be'." },
        "b1_mv_ex3_q5": { correct: "b", explanation: "Есть вероятность, что билет понадобится. 'might be'." },
        "b1_mv_ex3_q6": { correct: "a", explanation: "Предположение о том, кто за дверью. 'could be'." },
        "b1_mv_ex3_q7": { correct: "c", explanation: "Выражение неуверенности и рассмотрение двух возможных вариантов. 'might / might'." },
        "b1_mv_ex3_q8": { correct: "b", explanation: "'I'm not certain' указывает на предположение. 'may be'." },
        "b1_mv_ex3_q9": { correct: "a", explanation: "'may look calm' - возможно, он выглядит спокойным (но это не так)." },
        "b1_mv_ex3_q10": { correct: "c", explanation: "'she said she would call' делает это возможным, но не 100% фактом. 'might be'." },
        
        // --- Упражнение 4: Смешанная практика ---
        "b1_mv_ex4_q1": { correct: "b", explanation: "Я не уверен, где ключи, это лишь одна из возможностей. 'might have left'." },
        "b1_mv_ex4_q2": { correct: "c", explanation: "Ее действия (помощь раненому) - сильное доказательство. 'must be a doctor'." },
        "b1_mv_ex4_q3": { correct: "a", explanation: "Большой дом и дорогая машина - веские причины для вывода о богатстве. 'must have'." },
        "b1_mv_ex4_q4": { correct: "a", explanation: "Теплая страна - логическая причина быть уверенным, что там не будет холодно. 'can't be cold'." },
        "b1_mv_ex4_q5": { correct: "b", explanation: "'maybe something else' прямо указывает на неуверенность. 'could be'." },
        "b1_mv_ex4_q6": { correct: "a", explanation: "Лучшая оценка - сильная причина для гордости. 'must be proud'." },
        "b1_mv_ex4_q7": { correct: "c", explanation: "Если они не похожи, логично предположить, что они не могут быть близнецами. 'can't be twins'." },
        "b1_mv_ex4_q8": { correct: "b", explanation: "Логический вывод, основанный на ценности картины. 'can't be a real Picasso'." },
        "b1_mv_ex4_q9": { correct: "c", explanation: "Это возможно, но не гарантировано. Предупреждение о вероятности. 'might fall'." },
        "b1_mv_ex4_q10": { correct: "a", explanation: "Кашель - сильный симптом, позволяющий сделать уверенный вывод. 'must be getting sick'." },

        // --- Упражнение 5: Выбери логичный ответ ---
        "b1_mv_ex5_q1": { correct: "b", explanation: "'sometimes goes there' указывает на возможность, а не на 100% уверенность. 'might be'." },
        "b1_mv_ex5_q2": { correct: "c", explanation: "Низкая цена делает подлинность невозможной. 'can't be real'." },
        "b1_mv_ex5_q3": { correct: "a", explanation: "Тот факт, что она обещала прийти, делает предположение очень вероятным. 'must be Jane'." },
        "b1_mv_ex5_q4": { correct: "c", explanation: "'I'm not sure' прямо указывает на предположение. 'could mean'." },
        "b1_mv_ex5_q5": { correct: "b", explanation: "Хорошие новости - наиболее логичная причина для счастья. 'must have heard'." },
        "b1_mv_ex5_q6": { correct: "b", explanation: "То, что она была без очков, делает предположение 'может быть, не видела' вероятным. 'might not have seen'." },
        "b1_mv_ex5_q7": { correct: "c", explanation: "Пустой ресторан - сильный аргумент в пользу того, что он не может быть хорошим. 'can't be very good'." },
        "b1_mv_ex5_q8": { correct: "b", explanation: "Звонок с неизвестного номера может быть важным, а может и нет. 'may be important'." },
        "b1_mv_ex5_q9": { correct: "b", explanation: "Это одна из возможных причин, но не единственная. 'might be feeling unwell'." },
        "b1_mv_ex5_q10": { correct: "c", explanation: "Это вероятное предположение, но не 100% факт. 'may have put'." }
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
