// c1_2_grammar_adv-passive-logic.js
document.addEventListener('DOMContentLoaded', () => {
    const grammarCorrectAnswers = {
        // --- Упражнение 1: Review of Complex Passives ---
        "c1_ap_ex1_q1": { correct: "b", explanation: "'right now' указывает на Present Continuous. Пассивная форма: is being built." },
        "c1_ap_ex1_q2": { correct: "d", explanation: "Действие (принятие решения) произошло до другого действия в прошлом (он приехал). Past Perfect Passive: had been made." },
        "c1_ap_ex1_q3": { correct: "c", explanation: "Пассив после модального глагола 'must': must be solved." },
        "c1_ap_ex1_q4": { correct: "d", explanation: "'yet' и связь с настоящим указывают на Present Perfect. Пассивная форма: hasn't been delivered." },
        "c1_ap_ex1_q5": { correct: "a", explanation: "'at this moment' указывает на Present Continuous. Пассивная форма: is being questioned." },
        "c1_ap_ex1_q6": { correct: "c", explanation: "'next month' указывает на будущее. Future Simple Passive: will be introduced." },
        "c1_ap_ex1_q7": { correct: "d", explanation: "Действие (рассказывание истории) было в процессе, когда я вошел. Past Continuous Passive: was being told." },
        "c1_ap_ex1_q8": { correct: "a", explanation: "Результат в настоящем (билетов нет). Present Perfect Passive: have been sold out." },
        "c1_ap_ex1_q9": { correct: "c", explanation: "Пассив после модального глагола 'can': can be protected." },
        "c1_ap_ex1_q10": { correct: "d", explanation: "'By 2030' указывает на завершенность к моменту в будущем. Future Perfect Passive: will have been built." },

        // --- Упражнение 2: Impersonal Passive Structures ---
        "c1_ap_ex2_q1": { correct: "b", explanation: "Reporting verb 'say' в Present Simple. Структура: He is said to be..." },
        "c1_ap_ex2_q2": { correct: "c", explanation: "Reporting verb 'believe' в Present Simple. Структура: It is believed that..." },
        "c1_ap_ex2_q3": { correct: "d", explanation: "Reporting verb 'think' в Present Simple. Действие 'lied' в прошлом, поэтому используется perfect infinitive: is thought to have lied." },
        "c1_ap_ex2_q4": { correct: "d", explanation: "Reporting verb 'reported' в Past Simple. Структура: It was reported that..." },
        "c1_ap_ex2_q5": { correct: "c", explanation: "Reporting verb 'knows' в Present Simple. Структура: She is known to be..." },
        "c1_ap_ex2_q6": { correct: "b", explanation: "Reporting verb 'expect' в Present Simple. Структура: The team is expected to win." },
        "c1_ap_ex2_q7": { correct: "a", explanation: "Reporting verb 'consider' в Present Simple. Структура: He is considered a genius." },
        "c1_ap_ex2_q8": { correct: "a", explanation: "Reporting verb 'understand' в Present Simple. Структура: It is understood that..." },
        "c1_ap_ex2_q9": { correct: "b", explanation: "Reporting verb 'claim' в Present Simple. Структура: This medicine is claimed to cure..." },
        "c1_ap_ex2_q10": { correct: "b", explanation: "Reporting verb 'alleged' в Past Simple. Действие 'was driving' было одновременным, поэтому используется continuous infinitive: was alleged to have been driving." },

        // --- Упражнение 3: Causative 'have/get something done' (Advanced) ---
        "c1_ap_ex3_q1": { correct: "d", explanation: "Для описания негативных событий, которые с нами произошли, можно использовать и 'had', и 'got'." },
        "c1_ap_ex3_q2": { correct: "a", explanation: "'last week' указывает на Past Simple -> had." },
        "c1_ap_ex3_q3": { correct: "c", explanation: "Правильная структура: have + object (her hair) + V3 (cut)." },
        "c1_ap_ex3_q4": { correct: "a", explanation: "Вопрос в Present Simple: How often do you get...?" },
        "c1_ap_ex3_q5": { correct: "b", explanation: "Действие произошло в прошлом -> had." },
        "c1_ap_ex3_q6": { correct: "d", explanation: "После модального глагола 'must' нужен инфинитив 'get'." },
        "c1_ap_ex3_q7": { correct: "d", explanation: "Действие произошло в прошлом ('last year') -> had." },
        "c1_ap_ex3_q8": { correct: "c", explanation: "Оба варианта, 'had' и 'got', подходят для описания этого негативного события." },
        "c1_ap_ex3_q9": { correct: "c", explanation: "Действие (доставка) произошло до другого действия в прошлом (он приехал). Past Perfect Causative: had had... delivered." },
        "c1_ap_ex3_q10": { correct: "b", explanation: "После глагола 'hate' используется герундий. 'getting my photo taken'." },
        
        // --- Упражнение 4: Passive Infinitives & Gerunds ---
        "c1_ap_ex4_q1": { correct: "c", explanation: "После 'enjoy' используется герундий. Дети не читают, а им читают, поэтому пассивный герундий: being read." },
        "c1_ap_ex4_q2": { correct: "d", explanation: "После 'wants' используется инфинитив. Он не сам себя повышает, поэтому пассивный инфинитив: to be taken seriously." },
        "c1_ap_ex4_q3": { correct: "b", explanation: "После предлога 'of' (в tired of) используется герундий. Пассивный герундий: being told." },
        "c1_ap_ex4_q4": { correct: "c", explanation: "После 'would like' используется инфинитив. Пассивный инфинитив: to be informed." },
        "c1_ap_ex4_q5": { correct: "c", explanation: "После 'denied' используется герундий. Пассивный герундий: being seen." },
        "c1_ap_ex4_q6": { correct: "b", explanation: "После 'is going to' используется инфинитив. Пассивный инфинитив: to be demolished." },
        "c1_ap_ex4_q7": { correct: "d", explanation: "После 'look forward to' используется герундий. Пассивный герундий: being invited." },
        "c1_ap_ex4_q8": { correct: "d", explanation: "После 'seems' используется инфинитив. Это активная форма, так как он сам платит: to pay." },
        "c1_ap_ex4_q9": { correct: "c", explanation: "После 'appreciates' используется герундий. Пассивный герундий: being recognized." },
        "c1_ap_ex4_q10": { correct: "c", explanation: "После 'deserves' используется инфинитив. Пассивный инфинитив: to be considered." },

        // --- Упражнение 5: Mixed Practice and Rephrasing ---
        "c1_ap_ex5_q1": { correct: "c", explanation: "Active (Present Continuous: is interviewing) -> Passive (Present Continuous: is being interviewed)." },
        "c1_ap_ex5_q2": { correct: "a", explanation: "Active 'People think...' -> Passive 'The company is thought to be...'." },
        "c1_ap_ex5_q3": { correct: "c", explanation: "После 'like' используется герундий, и он должен быть в пассивной форме: being told." },
        "c1_ap_ex5_q4": { correct: "a", explanation: "Трансформация в Causative 'be going to': am going to have my car serviced." },
        "c1_ap_ex5_q5": { correct: "a", explanation: "Пассивная конструкция после модального глагола: must not be shown." },
        "c1_ap_ex5_q6": { correct: "c", explanation: "Active 'It is expected that...' -> Passive 'The president is expected to...'." },
        "c1_ap_ex5_q7": { correct: "a", explanation: "I hate + passive gerund -> I hate having my photo taken. (Каузативная форма здесь работает как пассивный герундий)." },
        "c1_ap_ex5_q8": { correct: "c", explanation: "Active (Past Perfect) -> Passive (Past Perfect)." },
        "c1_ap_ex5_q9": { correct: "d", explanation: "После 'It's important for...' используется пассивный инфинитив: for the truth to be known." },
        "c1_ap_ex5_q10": { correct: "b", explanation: "Active (Future Perfect) -> Passive (Future Perfect)." }
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
