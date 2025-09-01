// a2_9_grammar_gerunds-infinitives-logic.js
document.addEventListener('DOMContentLoaded', () => {
    const grammarCorrectAnswers = {
        // --- Упражнение 1: Герундий (V-ing) ---
        "a2_gi_ex1_q1": { correct: "b", explanation: "Герундий 'Swimming' используется как подлежащее в предложении." },
        "a2_gi_ex1_q2": { correct: "a", explanation: "После глагола 'enjoy' всегда используется герундий 'listening'." },
        "a2_gi_ex1_q3": { correct: "c", explanation: "После предлога 'at' (в конструкции good at) используется герундий 'painting'." },
        "a2_gi_ex1_q4": { correct: "b", explanation: "После глагола 'finish' всегда используется герундий 'doing'." },
        "a2_gi_ex1_q5": { correct: "b", explanation: "После предлога 'for' используется герундий 'helping'." },
        "a2_gi_ex1_q6": { correct: "b", explanation: "Герундий 'Getting up' используется как подлежащее." },
        "a2_gi_ex1_q7": { correct: "a", explanation: "После выражения 'Would you mind' используется герундий 'closing'." },
        "a2_gi_ex1_q8": { correct: "b", explanation: "После предлога 'about' используется герундий 'moving'." },
        "a2_gi_ex1_q9": { correct: "c", explanation: "Герундий 'Smoking' используется как подлежащее, обозначая действие в целом." },
        "a2_gi_ex1_q10": { correct: "b", explanation: "После предлога 'of' (в конструкции tired of) используется герундий 'doing'." },

        // --- Упражнение 2: Инфинитив (to + V) ---
        "a2_gi_ex2_q1": { correct: "b", explanation: "После глагола 'want' используется инфинитив 'to buy'." },
        "a2_gi_ex2_q2": { correct: "a", explanation: "После глагола 'decide' используется инфинитив 'to become'." },
        "a2_gi_ex2_q3": { correct: "c", explanation: "После прилагательного 'important' используется инфинитив 'to follow'." },
        "a2_gi_ex2_q4": { correct: "b", explanation: "Инфинитив 'to buy' используется для выражения цели (чтобы купить)." },
        "a2_gi_ex2_q5": { correct: "a", explanation: "После глагола 'promise' используется инфинитив 'to help'." },
        "a2_gi_ex2_q6": { correct: "b", explanation: "После глагола 'need' используется инфинитив 'to get'." },
        "a2_gi_ex2_q7": { correct: "c", explanation: "После прилагательного 'nice' используется инфинитив 'to see'." },
        "a2_gi_ex2_q8": { correct: "a", explanation: "После глагола 'learn' (учиться что-то делать) используется инфинитив 'to play'." },
        "a2_gi_ex2_q9": { correct: "c", explanation: "После глагола 'hope' используется инфинитив 'to see'." },
        "a2_gi_ex2_q10": { correct: "a", explanation: "Инфинитив 'to ask' используется для выражения цели (чтобы спросить)." },

        // --- Упражнение 3: Глаголы + Gerund / Infinitive ---
        "a2_gi_ex3_q1": { correct: "a", explanation: "После глагола 'like' можно использовать как герундий (dancing), так и инфинитив (to dance)." },
        "a2_gi_ex3_q2": { correct: "b", explanation: "После глагола 'start' можно использовать как герундий (learning), так и инфинитив (to learn)." },
        "a2_gi_ex3_q3": { correct: "a", explanation: "После глагола 'love' можно использовать как герундий (walking), так и инфинитив (to walk)." },
        "a2_gi_ex3_q4": { correct: "c", explanation: "После глагола 'hate' можно использовать как герундий (waking up), так и инфинитив (to wake up)." },
        "a2_gi_ex3_q5": { correct: "a", explanation: "После глагола 'continue' можно использовать как герундий (playing), так и инфинитив (to play)." },
        "a2_gi_ex3_q6": { correct: "b", explanation: "После глагола 'prefer' можно использовать как герундий (travelling), так и инфинитив (to travel)." },
        "a2_gi_ex3_q7": { correct: "a", explanation: "После глагола 'begin' можно использовать как герундий (raining), так и инфинитив (to rain)." },
        "a2_gi_ex3_q8": { correct: "b", explanation: "После глагола 'like' можно использовать как герундий (sitting), так и инфинитив (to sit)." },
        "a2_gi_ex3_q9": { correct: "c", explanation: "После глагола 'prefer' можно использовать как герундий (drinking), так и инфинитив (to drink)." },
        "a2_gi_ex3_q10": { correct: "a", explanation: "После глагола 'continue' можно использовать как герундий (working), так и инфинитив (to work)." },
        
        // --- Упражнение 4: Герундий или Инфинитив? (Смешанная практика) ---
        "a2_gi_ex4_q1": { correct: "a", explanation: "После глагола 'decide' используется инфинитив." },
        "a2_gi_ex4_q2": { correct: "b", explanation: "После предлога 'in' используется герундий." },
        "a2_gi_ex4_q3": { correct: "a", explanation: "После прилагательного 'difficult' используется инфинитив." },
        "a2_gi_ex4_q4": { correct: "b", explanation: "После глагола 'enjoy' используется герундий." },
        "a2_gi_ex4_q5": { correct: "a", explanation: "Инфинитив используется для выражения цели." },
        "a2_gi_ex4_q6": { correct: "a", explanation: "После глагола 'promise' используется инфинитив." },
        "a2_gi_ex4_q7": { correct: "b", explanation: "Герундий 'Eating' используется как подлежащее." },
        "a2_gi_ex4_q8": { correct: "b", explanation: "После предлога 'about' используется герундий." },
        "a2_gi_ex4_q9": { correct: "a", explanation: "После глагола 'offer' используется инфинитив." },
        "a2_gi_ex4_q10": { correct: "b", explanation: "После глагола 'mind' используется герундий." },

        // --- Упражнение 5: Найди ошибку ---
        "a2_gi_ex5_q1": { correct: "a", explanation: "Правильно: 'I want TO CALL you'. После 'want' используется инфинитив." },
        "a2_gi_ex5_q2": { correct: "c", explanation: "Правильно: 'I relax by READING'. После предлога 'by' используется герундий." },
        "a2_gi_ex5_q3": { correct: "b", explanation: "Правильно: 'It's easy TO LEARN English'. После конструкции 'It's + adjective' используется инфинитив." },
        "a2_gi_ex5_q4": { correct: "c", explanation: "Правильно: 'We finished TRAVELLING'. После 'finish' используется герундий." },
        "a2_gi_ex5_q5": { correct: "b", explanation: "Правильно: 'Thank you for HELPING me'. После предлога 'for' используется герундий." },
        "a2_gi_ex5_q6": { correct: "b", explanation: "Правильно: 'I went out TO BUY milk'. Для выражения цели используется инфинитив." },
        "a2_gi_ex5_q7": { correct: "b", explanation: "Правильно: 'He is good at PLAYING chess'. После предлога 'at' используется герундий." },
        "a2_gi_ex5_q8": { correct: "c", explanation: "Правильно: 'I'd like TO GO home'. После 'would like' всегда используется инфинитив." },
        "a2_gi_ex5_q9": { correct: "a", explanation: "Правильно: 'They promised TO HELP us'. После 'promise' используется инфинитив." },
        "a2_gi_ex5_q10": { correct: "c", explanation: "Правильно: 'She avoids EATING junk food'. После 'avoid' используется герундий." }
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
