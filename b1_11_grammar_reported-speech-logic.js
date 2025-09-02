// b1_11_grammar_reported-speech-logic.js
document.addEventListener('DOMContentLoaded', () => {
    const grammarCorrectAnswers = {
        // --- Упражнение 1: Statements (Review) ---
        "b1_rs_ex1_q1": { correct: "b", explanation: "Present Continuous (am reading) -> Past Continuous (was reading)." },
        "b1_rs_ex1_q2": { correct: "c", explanation: "Present Perfect (have finished) -> Past Perfect (had finished)." },
        "b1_rs_ex1_q3": { correct: "b", explanation: "Future Simple (will call) -> Future in the Past (would call)." },
        "b1_rs_ex1_q4": { correct: "b", explanation: "Modal verb 'can't' -> 'couldn't'." },
        "b1_rs_ex1_q5": { correct: "b", explanation: "Present Simple (is) -> Past Simple (was)." },
        "b1_rs_ex1_q6": { correct: "b", explanation: "Be going to (am going) -> was going." },
        "b1_rs_ex1_q7": { correct: "b", explanation: "Past Continuous (were playing) -> Past Perfect Continuous (had been playing)." },
        "b1_rs_ex1_q8": { correct: "b", explanation: "Modal verb 'may' -> 'might'." },
        "b1_rs_ex1_q9": { correct: "c", explanation: "Present Perfect (haven't seen) -> Past Perfect (hadn't seen)." },
        "b1_rs_ex1_q10": { correct: "c", explanation: "Past Simple (lived) -> Past Perfect (had lived)." },

        // --- Упражнение 2: Questions ---
        "b1_rs_ex2_q1": { correct: "a", explanation: "Общий вопрос (Yes/No) вводится с помощью 'if'. Сдвиг времени: are -> was." },
        "b1_rs_ex2_q2": { correct: "b", explanation: "Специальный вопрос сохраняет 'where', порядок слов прямой (the station was), сдвиг времени: is -> was." },
        "b1_rs_ex2_q3": { correct: "b", explanation: "'do' исчезает, глагол 'speak' (Present Simple) -> 'spoke' (Past Simple)." },
        "b1_rs_ex2_q4": { correct: "b", explanation: "'did' исчезает, глагол 'do' (Past Simple) -> 'had done' (Past Perfect)." },
        "b1_rs_ex2_q5": { correct: "c", explanation: "Общий вопрос вводится с 'if', время сдвигается: have finished -> had finished." },
        "b1_rs_ex2_q6": { correct: "b", explanation: "Порядок слов прямой (we could meet), сдвиг модального глагола: can -> could." },
        "b1_rs_ex2_q7": { correct: "b", explanation: "Общий вопрос с 'if', сдвиг модального глагола: will -> would." },
        "b1_rs_ex2_q8": { correct: "b", explanation: "Порядок слов прямой (I was late), сдвиг времени: are -> was." },
        "b1_rs_ex2_q9": { correct: "b", explanation: "'does' исчезает, глагол 'know' (Present Simple) -> 'knew' (Past Simple)." },
        "b1_rs_ex2_q10": { correct: "b", explanation: "Порядок слов прямой (I was going to do), сдвиг времени: are going to -> was going to." },

        // --- Упражнение 3: Commands & Requests (Review) ---
        "b1_rs_ex3_q1": { correct: "b", explanation: "Положительная команда превращается в инфинитив: 'to close'." },
        "b1_rs_ex3_q2": { correct: "a", explanation: "Отрицательная команда 'Don't be' превращается в 'not to be'." },
        "b1_rs_ex3_q3": { correct: "c", explanation: "Просьба 'Please help' превращается в 'to help'." },
        "b1_rs_ex3_q4": { correct: "a", explanation: "Запрет 'Don't touch' превращается в 'not to touch'." },
        "b1_rs_ex3_q5": { correct: "c", explanation: "Напоминание 'Remember to buy' превращается в инфинитивную конструкцию 'to remember to buy'." },
        "b1_rs_ex3_q6": { correct: "a", explanation: "Команда 'Stop talking' -> 'to stop talking'." },
        "b1_rs_ex3_q7": { correct: "b", explanation: "Отрицательный совет 'Don't drive' -> 'not to drive'." },
        "b1_rs_ex3_q8": { correct: "a", explanation: "Вежливая просьба 'Could you wait...' превращается в 'asked me to wait'." },
        "b1_rs_ex3_q9": { correct: "a", explanation: "Ободрение 'Try to be...' -> 'to try to be'." },
        "b1_rs_ex3_q10": { correct: "a", explanation: "Ободрение 'Don't worry' -> 'not to worry'." },
        
        // --- Упражнение 4: 'say' vs. 'tell' ---
        "b1_rs_ex4_q1": { correct: "b", explanation: "Используем 'tell' + object (me): told me." },
        "b1_rs_ex4_q2": { correct: "a", explanation: "После 'say' нет прямого дополнения-лица: said that..." },
        "b1_rs_ex4_q3": { correct: "b", explanation: "Используем 'tell' + object (me): tell me the story." },
        "b1_rs_ex4_q4": { correct: "a", explanation: "После 'say' идет то, что говорят: say something." },
        "b1_rs_ex4_q5": { correct: "a", explanation: "После 'say' нет прямого дополнения-лица: say to you." },
        "b1_rs_ex4_q6": { correct: "b", explanation: "Используем 'tell' + object (him): told him." },
        "b1_rs_ex4_q7": { correct: "a", explanation: "Устойчивое выражение 'say goodbye'." },
        "b1_rs_ex4_q8": { correct: "b", explanation: "Используем 'tell' + object (me): tell me the difference." },
        "b1_rs_ex4_q9": { correct: "a", explanation: "После 'say' нет прямого дополнения-лица: said he..." },
        "b1_rs_ex4_q10": { correct: "b", explanation: "Используем 'tell' + object (my parents): told my parents." },

        // --- Упражнение 5: Mixed Transformations ---
        "b1_rs_ex5_q1": { correct: "a", explanation: "Утверждение: will -> would, tomorrow -> the next day. Глагол 'say' использован верно." },
        "b1_rs_ex5_q2": { correct: "c", explanation: "Специальный вопрос: have been -> had been, порядок слов прямой (where I had been)." },
        "b1_rs_ex5_q3": { correct: "b", explanation: "Отрицательная команда: told us + not to + V1." },
        "b1_rs_ex5_q4": { correct: "a", explanation: "Общий вопрос: if + прямой порядок слов + сдвиг времени (are listening -> was listening)." },
        "b1_rs_ex5_q5": { correct: "b", explanation: "Утверждение: went -> had gone, yesterday -> the day before." },
        "b1_rs_ex5_q6": { correct: "a", explanation: "Команда: told me + to + V1. 'say' не используется с дополнением-лицом в такой структуре." },
        "b1_rs_ex5_q7": { correct: "b", explanation: "Специальный вопрос: does leave -> left (прямой порядок слов, сдвиг времени)." },
        "b1_rs_ex5_q8": { correct: "a", explanation: "Утверждение: are planning -> were planning. 'told' требует дополнения (told us)." },
        "b1_rs_ex5_q9": { correct: "c", explanation: "Отрицательная команда: told the child + not to be." },
        "b1_rs_ex5_q10": { correct: "a", explanation: "Утверждение: have never been -> had never been, here -> there." }
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
