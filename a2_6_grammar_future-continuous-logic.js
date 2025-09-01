// a2_6_grammar_future-continuous-logic.js
document.addEventListener('DOMContentLoaded', () => {
    const grammarCorrectAnswers = {
        // --- Упражнение 1: Образование (will be + V-ing) ---
        "a2_fc_ex1_q1": { correct: "b", explanation: "Правильная форма Future Continuous: will be + working." },
        "a2_fc_ex1_q2": { correct: "a", explanation: "Правильная форма Future Continuous: will be + sleeping." },
        "a2_fc_ex1_q3": { correct: "c", explanation: "Правильная форма Future Continuous: will be + travelling." },
        "a2_fc_ex1_q4": { correct: "c", explanation: "Правильная форма Future Continuous: will be + playing." },
        "a2_fc_ex1_q5": { correct: "b", explanation: "Правильная форма Future Continuous: will be + having." },
        "a2_fc_ex1_q6": { correct: "a", explanation: "Правильная форма Future Continuous: will be + sitting." },
        "a2_fc_ex1_q7": { correct: "b", explanation: "Правильная форма Future Continuous: will be + waiting." },
        "a2_fc_ex1_q8": { correct: "a", explanation: "Правильная форма Future Continuous: will be + preparing." },
        "a2_fc_ex1_q9": { correct: "b", explanation: "Правильная форма Future Continuous: will be + driving." },
        "a2_fc_ex1_q10": { correct: "c", explanation: "Правильная форма Future Continuous: will be + studying." },

        // --- Упражнение 2: Действия в конкретный момент в будущем ---
        "a2_fc_ex2_q1": { correct: "b", explanation: "'At 8 PM tomorrow' - конкретный момент в будущем, указывающий на процесс. 'will be watching'." },
        "a2_fc_ex2_q2": { correct: "a", explanation: "'This time next week' - точное указание на процесс в будущем. 'will be relaxing'." },
        "a2_fc_ex2_q3": { correct: "b", explanation: "Причина, почему не стоит звонить - человек будет в процессе встречи. 'will be having'." },
        "a2_fc_ex2_q4": { correct: "b", explanation: "'Between 2 PM and 4 PM' - указание на длительность процесса в будущем. 'will be studying'." },
        "a2_fc_ex2_q5": { correct: "a", explanation: "'In an hour' (через час) - в этот момент я буду в процессе поездки домой. 'will be driving'." },
        "a2_fc_ex2_q6": { correct: "b", explanation: "Когда ты приедешь, я буду в процессе готовки ужина. 'will be cooking'." },
        "a2_fc_ex2_q7": { correct: "a", explanation: "'At this time tomorrow' - классический маркер Future Continuous. 'will be flying'." },
        "a2_fc_ex2_q8": { correct: "b", explanation: "'next Monday' (в контексте 'только подумай') - имеется в виду, что ты будешь в процессе начала новой работы. 'will be starting'." },
        "a2_fc_ex2_q9": { correct: "a", explanation: "'At 11 AM tomorrow' - в это точное время она будет в процессе сдачи экзамена. 'will be taking'." },
        "a2_fc_ex2_q10": { correct: "b", explanation: "Они не могут играть, потому что в это время они будут в процессе работы. 'will be working'." },
        
        // --- Упражнение 3: Вопросы и отрицания ---
        "a2_fc_ex3_q1": { correct: "b", explanation: "Отрицательная форма Future Continuous: won't be + V-ing." },
        "a2_fc_ex3_q2": { correct: "b", explanation: "Вежливый вопрос о планах на ближайшее будущее: Will you be using...?" },
        "a2_fc_ex3_q3": { correct: "b", explanation: "Отрицание планов, которые будут (или не будут) в процессе этим летом: won't be travelling." },
        "a2_fc_ex3_q4": { correct: "a", explanation: "Специальный вопрос о процессе в будущем: What + will you be doing?" },
        "a2_fc_ex3_q5": { correct: "b", explanation: "Отрицание: она не будет в процессе просмотра матча. 'won't be watching'." },
        "a2_fc_ex3_q6": { correct: "c", explanation: "Вопрос о процессе в будущем: Will he be waiting?" },
        "a2_fc_ex3_q7": { correct: "c", explanation: "Отрицание длительного действия в будущем: 'won't be thinking'." },
        "a2_fc_ex3_q8": { correct: "b", explanation: "Специальный вопрос о планах: Where + will they be staying?" },
        "a2_fc_ex3_q9": { correct: "b", explanation: "Отрицание запланированного процесса: won't be having." },
        "a2_fc_ex3_q10": { correct: "b", explanation: "Вежливый вопрос о планах: Will she be joining us?" },

        // --- Упражнение 4: Future Continuous или Future Simple? ---
        "a2_fc_ex4_q1": { correct: "a", explanation: "Спонтанное решение или намерение, выраженное в данный момент. Используется Future Simple 'will wear'." },
        "a2_fc_ex4_q2": { correct: "b", explanation: "'At this time tomorrow' указывает на процесс в конкретный момент. Используется Future Continuous 'will be lying'." },
        "a2_fc_ex4_q3": { correct: "a", explanation: "Это обещание, выраженное в данный момент. Используется Future Simple 'will help'." },
        "a2_fc_ex4_q4": { correct: "b", explanation: "В 7 вечера он будет в процессе встречи с родителями. Используется Future Continuous 'will be meeting'." },
        "a2_fc_ex4_q5": { correct: "a", explanation: "Это факт из расписания. Используется Future Simple 'will arrive'." },
        "a2_fc_ex4_q6": { correct: "b", explanation: "Действие будет в процессе этим вечером. Используется Future Continuous 'will be watching'." },
        "a2_fc_ex4_q7": { correct: "a", explanation: "Это предсказание, основанное на мнении. Используется Future Simple 'will pass'." },
        "a2_fc_ex4_q8": { correct: "b", explanation: "Предположение о длительном действии или тренде в далеком будущем. Future Continuous 'will be driving'." },
        "a2_fc_ex4_q9": { correct: "a", explanation: "Спонтанное решение, принятое в момент речи. Используется Future Simple 'will get'." },
        "a2_fc_ex4_q10": { correct: "b", explanation: "Вопрос о том, чем человек будет заниматься (в процессе) через 5 лет. Используется Future Continuous 'will be doing'." },

        // --- Упражнение 5: Применение в диалогах ---
        "a2_fc_ex5_q1": { correct: "b", explanation: "В 10 утра я буду в процессе сна. 'will be sleeping'." },
        "a2_fc_ex5_q2": { correct: "a", explanation: "Ответ на вопрос о планах на вечер - описание процесса. 'will be studying'." },
        "a2_fc_ex5_q3": { correct: "b", explanation: "'This time tomorrow' указывает на процесс. 'will be listening'." },
        "a2_fc_ex5_q4": { correct: "a", explanation: "Я буду в процессе работы допоздна. 'will be working'." },
        "a2_fc_ex5_q5": { correct: "b", explanation: "Это простое обещание встретиться, а не описание процесса. 'will meet'." },
        "a2_fc_ex5_q6": { correct: "b", explanation: "В 8 часов я буду в процессе посещения бабушки и дедушки. 'will be visiting'." },
        "a2_fc_ex5_q7": { correct: "a", explanation: "Отвечая на вопрос 'what will you be doing', логично использовать ту же структуру. 'will be travelling'." },
        "a2_fc_ex5_q8": { correct: "b", explanation: "'all day' указывает на длительный процесс. 'will be preparing'." },
        "a2_fc_ex5_q9": { correct: "b", explanation: "Предсказание, основанное на том, что видно сейчас, часто выражается через Future Simple. 'will rain'." },
        "a2_fc_ex5_q10": { correct: "b", explanation: "Вопрос был о длительности, а ответ - о моменте завершения. Future Simple 'will finish'." }
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
