// b1_9_grammar_gerunds-infinitives-logic.js
document.addEventListener('DOMContentLoaded', () => {
    const grammarCorrectAnswers = {
        // --- Упражнение 1: Глаголы + Герундий (-ing) ---
        "b1_gi_ex1_q1": { correct: "b", explanation: "После глагола 'enjoy' всегда используется герундий." },
        "b1_gi_ex1_q2": { correct: "a", explanation: "После глагола 'finish' всегда используется герундий." },
        "b1_gi_ex1_q3": { correct: "b", explanation: "После глагола 'avoid' всегда используется герундий." },
        "b1_gi_ex1_q4": { correct: "b", explanation: "После выражения 'Would you mind' всегда используется герундий." },
        "b1_gi_ex1_q5": { correct: "b", explanation: "После глагола 'suggest' используется герундий." },
        "b1_gi_ex1_q6": { correct: "a", explanation: "После глагола 'imagine' используется герундий." },
        "b1_gi_ex1_q7": { correct: "b", explanation: "После глагола 'keep' (в значении 'продолжать') используется герундий." },
        "b1_gi_ex1_q8": { correct: "b", explanation: "После глагола 'miss' (скучать по чему-либо) используется герундий." },
        "b1_gi_ex1_q9": { correct: "a", explanation: "После глагола 'deny' (отрицать) используется герундий." },
        "b1_gi_ex1_q10": { correct: "b", explanation: "После глагола 'practise' используется герундий." },

        // --- Упражнение 2: Глаголы + Инфинитив (to + V) ---
        "b1_gi_ex2_q1": { correct: "b", explanation: "После глагола 'want' используется инфинитив." },
        "b1_gi_ex2_q2": { correct: "a", explanation: "После глагола 'promise' используется инфинитив." },
        "b1_gi_ex2_q3": { correct: "b", explanation: "После глагола 'decide' используется инфинитив." },
        "b1_gi_ex2_q4": { correct: "c", explanation: "После глагола 'offer' используется инфинитив." },
        "b1_gi_ex2_q5": { correct: "a", explanation: "После глагола 'hope' используется инфинитив." },
        "b1_gi_ex2_q6": { correct: "b", explanation: "После глагола 'plan' используется инфинитив." },
        "b1_gi_ex2_q7": { correct: "a", explanation: "После глагола 'need' используется инфинитив." },
        "b1_gi_ex2_q8": { correct: "b", explanation: "После глагола 'agree' используется инфинитив." },
        "b1_gi_ex2_q9": { correct: "b", explanation: "После глагола 'refuse' используется инфинитив." },
        "b1_gi_ex2_q10": { correct: "b", explanation: "После глагола 'manage' используется инфинитив." },

        // --- Упражнение 3: Глагол + Предлог + Герундий ---
        "b1_gi_ex3_q1": { correct: "c", explanation: "После фразового глагола 'look forward to' всегда используется герундий. 'To' здесь - предлог." },
        "b1_gi_ex3_q2": { correct: "a", explanation: "После предлога 'on' используется герундий." },
        "b1_gi_ex3_q3": { correct: "b", explanation: "После предлога 'in' используется герундий." },
        "b1_gi_ex3_q4": { correct: "b", explanation: "После предлога 'for' используется герундий." },
        "b1_gi_ex3_q5": { correct: "a", explanation: "После предлога 'about' используется герундий." },
        "b1_gi_ex3_q6": { correct: "b", explanation: "После предлога 'in' (в конструкции succeed in) используется герундий." },
        "b1_gi_ex3_q7": { correct: "a", explanation: "После предлога 'of' (в конструкции tired of) используется герундий." },
        "b1_gi_ex3_q8": { correct: "b", explanation: "После предлога 'of' (в конструкции dream of) используется герундий." },
        "b1_gi_ex3_q9": { correct: "a", explanation: "После предлога 'without' используется герундий." },
        "b1_gi_ex3_q10": { correct: "b", explanation: "После предлога 'on' (в конструкции congratulate on) используется герундий." },
        
        // --- Упражнение 4: Прилагательное + Инфинитив ---
        "b1_gi_ex4_q1": { correct: "b", explanation: "После прилагательного 'nice' используется инфинитив." },
        "b1_gi_ex4_q2": { correct: "a", explanation: "После прилагательного 'happy' используется инфинитив." },
        "b1_gi_ex4_q3": { correct: "a", explanation: "В конструкции 'It's important...' используется инфинитив." },
        "b1_gi_ex4_q4": { correct: "b", explanation: "После прилагательного 'surprised' используется инфинитив." },
        "b1_gi_ex4_q5": { correct: "b", explanation: "В конструкции 'Is it difficult...?' используется инфинитив." },
        "b1_gi_ex4_q6": { correct: "a", explanation: "После прилагательного 'sorry' используется инфинитив." },
        "b1_gi_ex4_q7": { correct: "b", explanation: "В конструкции 'It is impossible...' используется инфинитив." },
        "b1_gi_ex4_q8": { correct: "a", explanation: "После прилагательного 'delighted' используется инфинитив." },
        "b1_gi_ex4_q9": { correct: "b", explanation: "После порядкового числительного ('the first') часто используется инфинитив." },
        "b1_gi_ex4_q10": { correct: "a", explanation: "В конструкции 'It is not easy...' используется инфинитив." },

        // --- Упражнение 5: Mixed Practice ---
        "b1_gi_ex5_q1": { correct: "b", explanation: "После глагола 'plan' используется инфинитив." },
        "b1_gi_ex5_q2": { correct: "b", explanation: "После предлога 'of' (в конструкции think of) используется герундий." },
        "b1_gi_ex5_q3": { correct: "b", explanation: "После прилагательного 'hard' используется инфинитив." },
        "b1_gi_ex5_q4": { correct: "a", explanation: "После предлога 'without' используется герундий." },
        "b1_gi_ex5_q5": { correct: "a", explanation: "После фразового глагола 'look forward to' используется герундий." },
        "b1_gi_ex5_q6": { correct: "b", explanation: "После глагола 'promise' используется инфинитив." },
        "b1_gi_ex5_q7": { correct: "a", explanation: "После глагола 'suggest' используется герундий." },
        "b1_gi_ex5_q8": { correct: "b", explanation: "После конструкции 'It is never too late...' используется инфинитив." },
        "b1_gi_ex5_q9": { correct: "a", explanation: "После предлога 'at' (в конструкции good at) используется герундий." },
        "b1_gi_ex5_q10": { correct: "b", explanation: "После глагола 'agree' используется инфинитив." }
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
