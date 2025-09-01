// a2_12_grammar_reported-questions-logic.js
document.addEventListener('DOMContentLoaded', () => {
    const grammarCorrectAnswers = {
        // --- Упражнение 1: Общие вопросы (Yes/No Questions) ---
        "a2_rq_ex1_q1": { correct: "b", explanation: "Общий вопрос вводится с помощью 'if' или 'whether'." },
        "a2_rq_ex1_q2": { correct: "b", explanation: "Происходит сдвиг времени: Present Simple (are) -> Past Simple (was). 'I' используется с 'was'." },
        "a2_rq_ex1_q3": { correct: "a", explanation: "Общий вопрос 'Did she...?' вводится с помощью 'if'." },
        "a2_rq_ex1_q4": { correct: "c", explanation: "Происходит сдвиг времени: Present Perfect (have seen) -> Past Perfect (had seen)." },
        "a2_rq_ex1_q5": { correct: "b", explanation: "Происходит сдвиг времени: Present Continuous (is coming) -> Past Continuous (was coming)." },
        "a2_rq_ex1_q6": { correct: "b", explanation: "Происходит сдвиг времени: модальный глагол 'can' -> 'could'." },
        "a2_rq_ex1_q7": { correct: "c", explanation: "Происходит сдвиг времени (will -> would) и слова-маркера (tomorrow -> the next day)." },
        "a2_rq_ex1_q8": { correct: "c", explanation: "Сдвиг времени: Present Simple (live) -> Past Simple (lived). Вспомогательный глагол 'does' исчезает." },
        "a2_rq_ex1_q9": { correct: "c", explanation: "Общий вопрос 'Were they...?' вводится с помощью 'if'." },
        "a2_rq_ex1_q10": { correct: "b", explanation: "Сдвиг времени: Present Simple (have) -> Past Simple (had). Вспомогательный глагол 'do' исчезает." },

        // --- Упражнение 2: Специальные вопросы (Wh- Questions) ---
        "a2_rq_ex2_q1": { correct: "b", explanation: "Вопросительное слово 'what' сохраняется, а время глагола 'to be' сдвигается: is -> was." },
        "a2_rq_ex2_q2": { correct: "c", explanation: "Слово 'where' сохраняется, Present Simple (live) -> Past Simple (lived), 'do' исчезает." },
        "a2_rq_ex2_q3": { correct: "b", explanation: "Слово 'when' сохраняется, Past Simple (did arrive) -> Past Perfect (had arrived)." },
        "a2_rq_ex2_q4": { correct: "b", explanation: "Слово 'why' сохраняется, Present Continuous (are laughing) -> Past Continuous (was laughing)." },
        "a2_rq_ex2_q5": { correct: "b", explanation: "Слово 'how' сохраняется, Present Simple (does know) -> Past Simple (knew)." },
        "a2_rq_ex2_q6": { correct: "b", explanation: "Слово 'who' сохраняется, глагол 'is' -> 'was'." },
        "a2_rq_ex2_q7": { correct: "b", explanation: "Слово 'what time' сохраняется, 'will leave' -> 'would leave'." },
        "a2_rq_ex2_q8": { correct: "b", explanation: "Слово 'where' сохраняется, Present Perfect (have been) -> Past Perfect (had been)." },
        "a2_rq_ex2_q9": { correct: "b", explanation: "Словосочетание 'how many books' сохраняется, Past Simple (did buy) -> Past Perfect (had bought)." },
        "a2_rq_ex2_q10": { correct: "b", explanation: "Слово 'why' сохраняется, Past Simple Negative (didn't call) -> Past Perfect Negative (hadn't called)." },

        // --- Упражнение 3: Смешанная практика (Yes/No и Wh-) ---
        "a2_rq_ex3_q1": { correct: "b", explanation: "Это специальный вопрос, поэтому сохраняем вопросительное слово 'where'." },
        "a2_rq_ex3_q2": { correct: "a", explanation: "Это общий (Yes/No) вопрос, поэтому используем 'if' или 'whether'." },
        "a2_rq_ex3_q3": { correct: "c", explanation: "Это специальный вопрос, поэтому сохраняем 'what'." },
        "a2_rq_ex3_q4": { correct: "b", explanation: "Это общий (Yes/No) вопрос, поэтому используем 'whether' или 'if'." },
        "a2_rq_ex3_q5": { correct: "a", explanation: "Это специальный вопрос, поэтому сохраняем 'who'." },
        "a2_rq_ex3_q6": { correct: "c", explanation: "Это общий (Yes/No) вопрос, поэтому используем 'if'." },
        "a2_rq_ex3_q7": { correct: "b", explanation: "Это специальный вопрос, поэтому сохраняем 'how'." },
        "a2_rq_ex3_q8": { correct: "b", explanation: "Это общий (Yes/No) вопрос, поэтому используем 'whether'." },
        "a2_rq_ex3_q9": { correct: "b", explanation: "Это специальный вопрос, поэтому сохраняем 'when'." },
        "a2_rq_ex3_q10": { correct: "b", explanation: "Это общий (Yes/No) вопрос, поэтому используем 'if'." },
        
        // --- Упражнение 4: Фокус на сдвиге времени ---
        "a2_rq_ex4_q1": { correct: "c", explanation: "Present Simple (are) -> Past Simple (were), потому что 'keys' - множественное число." },
        "a2_rq_ex4_q2": { correct: "b", explanation: "Present Simple (Do speak) -> Past Simple (spoke)." },
        "a2_rq_ex4_q3": { correct: "c", explanation: "Past Simple (did see) -> Past Perfect (had seen)." },
        "a2_rq_ex4_q4": { correct: "b", explanation: "Present Simple (is) -> Past Simple (was)." },
        "a2_rq_ex4_q5": { correct: "c", explanation: "Present Perfect (Have arrived) -> Past Perfect (had arrived)." },
        "a2_rq_ex4_q6": { correct: "b", explanation: "Present Simple (does complain) -> Past Simple (complained)." },
        "a2_rq_ex4_q7": { correct: "b", explanation: "Модальный глагол 'can' -> 'could'." },
        "a2_rq_ex4_q8": { correct: "b", explanation: "Present Continuous (are doing) -> Past Continuous (was doing)." },
        "a2_rq_ex4_q9": { correct: "b", explanation: "Past Simple (Did enjoy) -> Past Perfect (had enjoyed)." },
        "a2_rq_ex4_q10": { correct: "b", explanation: "Модальный глагол 'will' -> 'would'." },

        // --- Упражнение 5: Выбор полного предложения ---
        "a2_rq_ex5_q1": { correct: "b", explanation: "Правильный порядок слов (where I worked) и сдвиг времени (do work -> worked)." },
        "a2_rq_ex5_q2": { correct: "a", explanation: "Правильный ввод через 'if', сдвиг времени (are coming -> was coming) и местоимений (us -> them)." },
        "a2_rq_ex5_q3": { correct: "a", explanation: "Правильный порядок слов, сдвиг времени (did buy -> had bought) и слова-маркера (yesterday -> the day before)." },
        "a2_rq_ex5_q4": { correct: "c", explanation: "Правильный ввод через 'if', сдвиг времени (have seen -> had seen) и местоимения (my -> her)." },
        "a2_rq_ex5_q5": { correct: "a", explanation: "Правильный порядок слов и сдвиг модального глагола (will -> would)." },
        "a2_rq_ex5_q6": { correct: "c", explanation: "Правильный ввод через 'if' и сдвиг модального глагола (can -> could)." },
        "a2_rq_ex5_q7": { correct: "b", explanation: "Правильный порядок слов (who that girl was) и сдвиг времени (is -> was)." },
        "a2_rq_ex5_q8": { correct: "b", explanation: "Правильный ввод через 'if' и сдвиг времени (Did lock -> had locked)." },
        "a2_rq_ex5_q9": { correct: "a", explanation: "Правильный порядок слов (why they were crying) и сдвиг времени (are crying -> were crying)." },
        "a2_rq_ex5_q10": { correct: "b", explanation: "Правильный порядок слов (where she lived) и сдвиг времени (does live -> lived)." }
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

