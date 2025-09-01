// a2_4_grammar_present-perfect-logic.js
document.addEventListener('DOMContentLoaded', () => {
    const grammarCorrectAnswers = {
        // --- Упражнение 1: Образование Present Perfect ---
        "a2_pp_ex1_q1": { correct: "b", explanation: "Для 'I' используется 'have' + V3 (finished)." },
        "a2_pp_ex1_q2": { correct: "a", explanation: "Для 'She' используется 'has' + V3 (seen)." },
        "a2_pp_ex1_q3": { correct: "c", explanation: "Для 'They' используется 'have' + V3 (bought)." },
        "a2_pp_ex1_q4": { correct: "b", explanation: "Отрицание для 'He': has not + V3 (eaten)." },
        "a2_pp_ex1_q5": { correct: "b", explanation: "Для 'We' используется 'have' + V3 (visited)." },
        "a2_pp_ex1_q6": { correct: "c", explanation: "Вопрос для 'you': Have you + V3 (been)?" },
        "a2_pp_ex1_q7": { correct: "b", explanation: "Для 'My sister' (she) используется 'has' + V3 (started)." },
        "a2_pp_ex1_q8": { correct: "b", explanation: "Для 'I' используется 'have' + V3 (read). Форма V3 глагола read пишется так же, но читается [red]." },
        "a2_pp_ex1_q9": { correct: "a", explanation: "Вопрос для 'he': Has he + V3 (called)?" },
        "a2_pp_ex1_q10": { correct: "b", explanation: "Отрицание для 'They': have not + V3 (decided)." },

        // --- Упражнение 2: Опыт и Результат ---
        "a2_pp_ex2_q1": { correct: "b", explanation: "Есть результат в настоящем ('I can't open the door'), поэтому используется Present Perfect 'have lost'." },
        "a2_pp_ex2_q2": { correct: "c", explanation: "Вопрос о жизненном опыте ('ever' - когда-либо) задается в Present Perfect: Have you ever eaten?" },
        "a2_pp_ex2_q3": { correct: "a", explanation: "Речь идет о ее опыте, который влияет на ее знание Парижа сейчас. 'has been' - она бывала там." },
        "a2_pp_ex2_q4": { correct: "b", explanation: "Результат в настоящем ('Your hands are dirty'). Вопрос о действии, которое к этому привело: 'What have you done?'." },
        "a2_pp_ex2_q5": { correct: "b", explanation: "Говорящий ссылается на свой прошлый опыт просмотра фильма, поэтому 'have seen'." },
        "a2_pp_ex2_q6": { correct: "b", explanation: "Результат его работы виден сейчас (три книги существуют), поэтому 'has written'." },
        "a2_pp_ex2_q7": { correct: "a", explanation: "Результат в настоящем ('I'm not hungry'). Действие, которое к этому привело - 'have had' a big lunch." },
        "a2_pp_ex2_q8": { correct: "c", explanation: "Речь об опыте ('never' - никогда). They have + never + V3 (ridden)." },
        "a2_pp_ex2_q9": { correct: "a", explanation: "Есть результат сейчас ('It's cold'). Действие, вызвавшее его - 'has opened'." },
        "a2_pp_ex2_q10": { correct: "a", explanation: "Конструкция 'This is the best...' часто используется с Present Perfect для описания опыта." },

        // --- Упражнение 3: for или since? ---
        "a2_pp_ex3_q1": { correct: "a", explanation: "'for' используется с периодом времени (ten years)." },
        "a2_pp_ex3_q2": { correct: "b", explanation: "'since' используется с точкой отсчета в прошлом (last Monday)." },
        "a2_pp_ex3_q3": { correct: "a", explanation: "'for' используется с периодом времени (a long time)." },
        "a2_pp_ex3_q4": { correct: "b", explanation: "'since' используется с точкой отсчета (2010)." },
        "a2_pp_ex3_q5": { correct: "a", explanation: "'for' используется с периодом времени (three years)." },
        "a2_pp_ex3_q6": { correct: "b", explanation: "'since' используется с точкой отсчета (this morning)." },
        "a2_pp_ex3_q7": { correct: "a", explanation: "'for' используется с периодом времени (two hours)." },
        "a2_pp_ex3_q8": { correct: "b", explanation: "'since' используется с точкой отсчета (last week)." },
        "a2_pp_ex3_q9": { correct: "b", explanation: "'since' используется с целым придаточным предложением в прошлом (since he graduated)." },
        "a2_pp_ex3_q10": { correct: "a", explanation: "'for' используется с периодом времени (more than an hour)." },
        
        // --- Упражнение 4: Наречия just, already, yet ---
        "a2_pp_ex4_q1": { correct: "b", explanation: "'already' используется в утверждениях, когда что-то произошло раньше, чем ожидалось." },
        "a2_pp_ex4_q2": { correct: "c", explanation: "'yet' используется в вопросах и отрицаниях и обычно ставится в конце." },
        "a2_pp_ex4_q3": { correct: "a", explanation: "'just' используется для действий, которые произошли совсем недавно." },
        "a2_pp_ex4_q4": { correct: "c", explanation: "'yet' используется в отрицаниях, чтобы сказать, что что-то еще не произошло." },
        "a2_pp_ex4_q5": { correct: "b", explanation: "'just' (только что) подходит по смыслу, так как сумки еще в холле." },
        "a2_pp_ex4_q6": { correct: "b", explanation: "'already' (уже) показывает, что действие выполнено, возможно, раньше, чем ожидал собеседник." },
        "a2_pp_ex4_q7": { correct: "a", explanation: "'yet' используется в вопросах, чтобы узнать, произошло ли что-то к данному моменту." },
        "a2_pp_ex4_q8": { correct: "c", explanation: "'just' (только что) подчеркивает, что действие произошло совсем недавно." },
        "a2_pp_ex4_q9": { correct: "a", explanation: "'yet' используется в отрицаниях и ставится в конце предложения." },
        "a2_pp_ex4_q10": { correct: "b", explanation: "'already' используется в вопросах для выражения удивления, что что-то произошло так быстро." },

        // --- Упражнение 5: Present Perfect или Past Simple? ---
        "a2_pp_ex5_q1": { correct: "c", explanation: "Указано точное время в прошлом ('in 2018'), поэтому используется Past Simple 'went'." },
        "a2_pp_ex5_q2": { correct: "b", explanation: "Вопрос о жизненном опыте ('ever' - когда-либо), поэтому используется Present Perfect 'Have you ever eaten?'." },
        "a2_pp_ex5_q3": { correct: "b", explanation: "Шекспир - человек из прошлого, его действия завершены. Используем Past Simple 'wrote'." },
        "a2_pp_ex5_q4": { correct: "b", explanation: "Есть результат в настоящем ('I can't find it'), поэтому используется Present Perfect 'have lost'." },
        "a2_pp_ex5_q5": { correct: "b", explanation: "Указано точное время в прошлом ('in 1960'), поэтому используется Past Simple 'graduated'." },
        "a2_pp_ex5_q6": { correct: "a", explanation: "'since' указывает на действие, которое началось в прошлом и продолжается до сих пор. Используем Present Perfect 'have known'." },
        "a2_pp_ex5_q7": { correct: "b", explanation: "Указано точное время в прошлом ('last night'), поэтому используется Past Simple 'went'." },
        "a2_pp_ex5_q8": { correct: "c", explanation: "В отрицаниях с Present Perfect используется 'yet'." },
        "a2_pp_ex5_q9": { correct: "b", explanation: "Действие завершилось в прошлом ('he moved out last month'). Несмотря на 'for ten years', связь с настоящим прервана. Используем Past Simple 'lived'." },
        "a2_pp_ex5_q10": { correct: "b", explanation: "Период времени ('today') еще не закончился, поэтому используется Present Perfect 'have drunk'." }
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
