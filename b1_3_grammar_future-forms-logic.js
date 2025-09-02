// b1_3_grammar_future-forms-logic.js
document.addEventListener('DOMContentLoaded', () => {
    const grammarCorrectAnswers = {
        // --- Упражнение 1: will vs. be going to ---
        "b1_ff_ex1_q1": { correct: "b", explanation: "'I've already decided' - это заранее принятое решение, поэтому 'am going to buy'." },
        "b1_ff_ex1_q2": { correct: "a", explanation: "Это спонтанное решение, принятое в момент речи, поэтому 'will answer'." },
        "b1_ff_ex1_q3": { correct: "b", explanation: "Предсказание, основанное на очевидном факте (темные тучи), поэтому 'is going to rain'." },
        "b1_ff_ex1_q4": { correct: "a", explanation: "'I promise' - это обещание, используется 'will help'." },
        "b1_ff_ex1_q5": { correct: "a", explanation: "Спонтанное решение/предложение, сделанное в ответ на ситуацию, поэтому 'will get'." },
        "b1_ff_ex1_q6": { correct: "b", explanation: "Речь идет о заранее обдуманном плане на лето, поэтому 'am going to visit'." },
        "b1_ff_ex1_q7": { correct: "a", explanation: "'Perhaps' (возможно) указывает на неуверенное предсказание/мнение, используется 'will see'." },
        "b1_ff_ex1_q8": { correct: "b", explanation: "Предупреждение об очевидной опасности, которая вот-вот произойдет, поэтому 'is going to fall'." },
        "b1_ff_ex1_q9": { correct: "b", explanation: "Это намерение, о котором говорящий сообщает. 'am going to tell'." },
        "b1_ff_ex1_q10": { correct: "a", explanation: "'I think' выражает личное мнение/предсказание о далеком будущем, используется 'will colonize'." },

        // --- Упражнение 2: Present Continuous for Future Arrangements ---
        "b1_ff_ex2_q1": { correct: "b", explanation: "Это четкая договоренность с указанием времени (как в ежедневнике). 'am seeing' - лучший выбор." },
        "b1_ff_ex2_q2": { correct: "a", explanation: "Вопрос о личных договоренностях на вечер. 'are you doing?'." },
        "b1_ff_ex2_q3": { correct: "a", explanation: "Это запланированный визит, договоренность. 'are coming'." },
        "b1_ff_ex2_q4": { correct: "b", explanation: "Фиксированная договоренность о встрече. 'am eating'." },
        "b1_ff_ex2_q5": { correct: "a", explanation: "Вечеринка - это организованное мероприятие, о котором все знают. 'are having'." },
        "b1_ff_ex2_q6": { correct: "b", explanation: "Полет на самолете - это четкая договоренность с билетами. 'is flying'." },
        "b1_ff_ex2_q7": { correct: "a", explanation: "Вопрос о личных планах и договоренностях. 'Are you doing?'." },
        "b1_ff_ex2_q8": { correct: "a", explanation: "Запланированное событие, о котором известно ('meeting is scheduled'). 'are starting'." },
        "b1_ff_ex2_q9": { correct: "b", explanation: "Это договоренность ('arranged it last week'). 'am seeing'." },
        "b1_ff_ex2_q10": { correct: "a", explanation: "Поездка, на которую куплены билеты, - это четкая договоренность. 'is travelling'." },

        // --- Упражнение 3: Present Simple for Timetables ---
        "b1_ff_ex3_q1": { correct: "b", explanation: "Расписание поездов. Используется Present Simple 'leaves'." },
        "b1_ff_ex3_q2": { correct: "b", explanation: "Вопрос о расписании сеансов в кино. 'does the film start?'." },
        "b1_ff_ex3_q3": { correct: "a", explanation: "Расписание занятий. Используется Present Simple 'begins'." },
        "b1_ff_ex3_q4": { correct: "b", explanation: "Часы работы музея (расписание). 'closes'." },
        "b1_ff_ex3_q5": { correct: "a", explanation: "Расписание полетов. 'departs'." },
        "b1_ff_ex3_q6": { correct: "b", explanation: "Расписание мероприятия. 'starts'." },
        "b1_ff_ex3_q7": { correct: "b", explanation: "Расписание движения автобусов. 'arrives'." },
        "b1_ff_ex3_q8": { correct: "a", explanation: "Вопрос о расписании курса. 'does your course finish?'." },
        "b1_ff_ex3_q9": { correct: "a", explanation: "Часы работы магазина (расписание). 'opens'." },
        "b1_ff_ex3_q10": { correct: "b", explanation: "Расписание (официальная дата открытия). 'opens'." },
        
        // --- Упражнение 4: All Forms Mixed ---
        "b1_ff_ex4_q1": { correct: "b", explanation: "Спонтанное предложение помощи, принятое в момент речи. 'will close'." },
        "b1_ff_ex4_q2": { correct: "c", explanation: "Событие по расписанию. 'arrives'." },
        "b1_ff_ex4_q3": { correct: "a", explanation: "Фиксированная личная договоренность. 'are celebrating'." },
        "b1_ff_ex4_q4": { correct: "b", explanation: "План, подкрепленный предварительной подготовкой (покупка краски). 'am going to paint'." },
        "b1_ff_ex4_q5": { correct: "b", explanation: "Общее предсказание, основанное на мнении ('I think'). 'will continue'." },
        "b1_ff_ex4_q6": { correct: "c", explanation: "Вопрос о времени по расписанию. 'does your flight leave?'." },
        "b1_ff_ex4_q7": { correct: "c", explanation: "Предсказание, основанное на очевидном факте (он не учился). 'is going to fail'." },
        "b1_ff_ex4_q8": { correct: "b", explanation: "Приглашение на запланированное мероприятие (личная договоренность). 'are having'." },
        "b1_ff_ex4_q9": { correct: "c", explanation: "Спонтанное предложение помощи. 'will help'." },
        "b1_ff_ex4_q10": { correct: "a", explanation: "Событие по расписанию (начало семестра). 'starts'." },

        // --- Упражнение 5: Dialogue Practice ---
        "b1_ff_ex5_q1": { correct: "b", explanation: "'I'm not sure' и 'Maybe' указывают на неуверенное, спонтанное решение. 'will visit'." },
        "b1_ff_ex5_q2": { correct: "c", explanation: "Покупка овощей - это доказательство намерения приготовить салат. 'am going to make'." },
        "b1_ff_ex5_q3": { correct: "a", explanation: "Это спонтанное предложение помощи, сделанное в ответ на реплику. 'will drive'." },
        "b1_ff_ex5_q4": { correct: "b", explanation: "Ужин с родителями - это личная договоренность. 'am having'." },
        "b1_ff_ex5_q5": { correct: "b", explanation: "Вопрос и ответ о расписании транспорта. 'leaves'." },
        "b1_ff_ex5_q6": { correct: "a", explanation: "Предсказание, основанное на мнении ('I think'). 'will win'." },
        "b1_ff_ex5_q7": { correct: "c", explanation: "Предсказание, основанное на том, что происходит сейчас (очевидный факт). 'is going to score'." },
        "b1_ff_ex5_q8": { correct: "b", explanation: "Спонтанное решение, принятое в момент речи. 'will put'." },
        "b1_ff_ex5_q9": { correct: "b", explanation: "Ответ на вопрос 'Have you decided?' подразумевает заранее принятое решение/намерение. 'am going to wear'." },
        "b1_ff_ex5_q10": { correct: "a", explanation: "Речь идет о дате начала семестра, это расписание. 'starts'." }
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
