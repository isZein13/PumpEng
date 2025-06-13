// a1_7_grammar_adjectives-logic.js
document.addEventListener('DOMContentLoaded', () => {
    const grammarCorrectAnswers = {
        // --- Упражнение 1: Описательные прилагательные ---
        "a1_adj_ex1_q1": { correct: "b", explanation: "Прилагательное 'солнечный' - sunny." },
        "a1_adj_ex1_q2": { correct: "b", explanation: "Прилагательное 'красивый' - beautiful." },
        "a1_adj_ex1_q3": { correct: "c", explanation: "Прилагательное 'интересный' (описывающее предмет) - interesting. 'Interested' описывает чувства человека." },
        "a1_adj_ex1_q4": { correct: "a", explanation: "Прилагательное 'высокий' - tall." },
        "a1_adj_ex1_q5": { correct: "c", explanation: "Прилагательное 'ленивый' - lazy." },
        "a1_adj_ex1_q6": { correct: "a", explanation: "Прилагательное 'горячий' - hot." },
        "a1_adj_ex1_q7": { correct: "a", explanation: "Прилагательное 'новый' - new." },
        "a1_adj_ex1_q8": { correct: "a", explanation: "Прилагательное 'желтый' - yellow." },
        "a1_adj_ex1_q9": { correct: "b", explanation: "Прилагательное 'дружелюбный' - friendly. (Не путать с friend - друг)." },
        "a1_adj_ex1_q10": { correct: "d", explanation: "Прилагательное 'трудный' - difficult." },

        // --- Упражнение 2: Притяжательные прилагательные ---
        "a1_adj_ex2_q1": { correct: "c", explanation: "Притяжательное прилагательное для 'I' (я) - 'my' (мой)." },
        "a1_adj_ex2_q2": { correct: "b", explanation: "Притяжательное прилагательное для 'you' (ты/вы) - 'your' (твой/ваш)." },
        "a1_adj_ex2_q3": { correct: "c", explanation: "Притяжательное прилагательное для 'he' (он) - 'his' (его)." },
        "a1_adj_ex2_q4": { correct: "b", explanation: "Притяжательное прилагательное для 'she' (она) - 'her' (ее)." },
        "a1_adj_ex2_q5": { correct: "c", explanation: "Притяжательное прилагательное для 'it' (оно) - 'its' (его/ее, для неодуш.). Не путать с 'it's' (it is)." },
        "a1_adj_ex2_q6": { correct: "c", explanation: "Притяжательное прилагательное для 'we' (мы) - 'our' (наш)." },
        "a1_adj_ex2_q7": { correct: "b", explanation: "Притяжательное прилагательное для 'you' (ты/вы) - 'your' (твой/ваш)." },
        "a1_adj_ex2_q8": { correct: "c", explanation: "Притяжательное прилагательное для 'they' (они) - 'their' (их)." },
        "a1_adj_ex2_q9": { correct: "b", explanation: "Притяжательное прилагательное для 'John' (he) - 'his'." },
        "a1_adj_ex2_q10": { correct: "b", explanation: "Притяжательное прилагательное для 'Maria' (she) - 'her'." },

        // --- Упражнение 3: Сравнительная степень (-er, more) ---
        "a1_adj_ex3_q1": { correct: "b", explanation: "Для коротких прилагательных (fast) добавляем -er: faster." },
        "a1_adj_ex3_q2": { correct: "c", explanation: "Для длинных прилагательных (interesting) используем 'more': more interesting." },
        "a1_adj_ex3_q3": { correct: "c", explanation: "Для коротких прилагательных (tall) добавляем -er: taller." },
        "a1_adj_ex3_q4": { correct: "c", explanation: "Для длинных прилагательных (difficult) используем 'more': more difficult." },
        "a1_adj_ex3_q5": { correct: "d", explanation: "Если короткое прилагательное оканчивается на согласную + -y, -y меняется на -ier: heavy -> heavier." },
        "a1_adj_ex3_q6": { correct: "b", explanation: "Для коротких прилагательных (warm) добавляем -er: warmer." },
        "a1_adj_ex3_q7": { correct: "b", explanation: "Для коротких прилагательных (old) добавляем -er: older." },
        "a1_adj_ex3_q8": { correct: "c", explanation: "'good' - неправильное прилагательное, сравнительная степень - 'better'." },
        "a1_adj_ex3_q9": { correct: "b", explanation: "Для длинных прилагательных (expensive) используем 'more': more expensive." },
        "a1_adj_ex3_q10": { correct: "c", explanation: "Для некоторых двусложных прилагательных (narrow) можно использовать -er: narrower (more narrow тоже иногда встречается, но -er предпочтительнее)." },

        // --- Упражнение 4: Превосходная степень (the -est, the most) ---
        "a1_adj_ex4_q1": { correct: "c", explanation: "Короткое прилагательное (high) + 'the' + -est: the highest." },
        "a1_adj_ex4_q2": { correct: "d", explanation: "Длинное прилагательное (interesting) + 'the most': the most interesting." },
        "a1_adj_ex4_q3": { correct: "c", explanation: "Короткое прилагательное (tall) + 'the' + -est: the tallest." },
        "a1_adj_ex4_q4": { correct: "c", explanation: "Длинное прилагательное (difficult) + 'the most': the most difficult." },
        "a1_adj_ex4_q5": { correct: "c", explanation: "Короткое прилагательное (old) + 'the' + -est: the oldest." },
        "a1_adj_ex4_q6": { correct: "c", explanation: "'good' - неправильное, превосходная степень - 'the best'." },
        "a1_adj_ex4_q7": { correct: "c", explanation: "'bad' - неправильное, превосходная степень - 'the worst'." },
        "a1_adj_ex4_q8": { correct: "c", explanation: "Короткое прилагательное (short) + 'the' + -est: the shortest." },
        "a1_adj_ex4_q9": { correct: "c", explanation: "Прилагательное на -y (happy) -> 'the' + -iest: the happiest." },
        "a1_adj_ex4_q10": { correct: "d", explanation: "Длинное прилагательное (expensive) + 'the most': the most expensive." },

        // --- Упражнение 5: Порядок прилагательных (базовый) ---
        "a1_adj_ex5_q1": { correct: "b", explanation: "Обычный порядок: размер (small) -> цвет (white) + существительное." },
        "a1_adj_ex5_q2": { correct: "b", explanation: "Обычный порядок: возраст (old) -> материал (wooden) + существительное." },
        "a1_adj_ex5_q3": { correct: "a", explanation: "Мнение (beautiful) обычно идет перед другими описательными прилагательными (red)." },
        "a1_adj_ex5_q4": { correct: "b", explanation: "Качество/мнение (fast) -> происхождение (German) + существительное." },
        "a1_adj_ex5_q5": { correct: "b", explanation: "Общее правило: размер (big) идет перед возрастом (new), но здесь 'new' скорее как общее качество. Для A1 'new big' может восприниматься нормально, но 'big new' предпочтительнее (размер -> возраст/состояние)." },
        "a1_adj_ex5_q6": { correct: "b", explanation: "Мнение (interesting) -> возраст (old) + существительное." },
        "a1_adj_ex5_q7": { correct: "b", explanation: "Размер/форма (tall) -> возраст (young) + существительное. (Хотя иногда 'young tall lady' тоже возможно)." },
        "a1_adj_ex5_q8": { correct: "a", explanation: "Размер (small) -> происхождение (Chinese) -> назначение (tea) + существительное (cup)." },
        "a1_adj_ex5_q9": { correct: "b", explanation: "Мнение (delicious) -> цвет (green) + существительное." },
        "a1_adj_ex5_q10": { correct: "a", explanation: "Размер (big) -> цвет (brown) -> материал (cardboard) + существительное." }
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
