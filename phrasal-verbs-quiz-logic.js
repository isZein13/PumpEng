// phrasal-verbs-quiz-logic.js
document.addEventListener('DOMContentLoaded', () => {
    const grammarCorrectAnswers = {
        // --- Упражнение 1: Phrasal Verbs 1-5 (ask out, back up, blow up, break down, break up) ---
        "pv_ex1_q1": { correct: "b", explanation: "'Ask out' means to invite someone on a date." },
        "pv_ex1_q2": { correct: "c", explanation: "'Break down' means to stop functioning (for a machine, car)." },
        "pv_ex1_q3": { correct: "c", explanation: "'Back up' an argument means to support it with evidence." },
        "pv_ex1_q4": { correct: "d", explanation: "'Break up' means to end a relationship." },
        "pv_ex1_q5": { correct: "c", explanation: "'Blow up' means to explode or be demolished with explosives." },
        "pv_ex1_q6": { correct: "c", explanation: "'Back up' can also mean to move backwards." },
        "a1_pv_ex1_q7": { correct: "c", explanation: "'Break down' can also mean to lose emotional control and cry." }, // Исправлен ключ на pv_ex1_q7
        "pv_ex1_q8": { correct: "b", explanation: "Meaning of 'ask out': To invite on a date." },
        "pv_ex1_q9": { correct: "b", explanation: "'Broke down' means stopped functioning." },
        "pv_ex1_q10": { correct: "c", explanation: "If a couple 'breaks up', they end their relationship." },

        // --- Упражнение 2: Phrasal Verbs 6-10 (bring up, call back, calm down, carry on, catch up) ---
        "pv_ex2_q1": { correct: "c", explanation: "'Bring up' a topic means to mention or introduce it for discussion." },
        "pv_ex2_q2": { correct: "d", explanation: "'Calm down' means to relax after being angry or agitated." },
        "pv_ex2_q3": { correct: "b", explanation: "'Catch up' means to reach the same level as others who are ahead." },
        "pv_ex2_q4": { correct: "b", explanation: "'Call back' means to return a phone call." },
        "pv_ex2_q5": { correct: "c", explanation: "'Carry on' means to continue doing something." },
        "pv_ex2_q6": { correct: "c", explanation: "Meaning of 'calm down': To relax after being angry." },
        "pv_ex2_q7": { correct: "a", explanation: "'Carry on' means to continue." },
        "pv_ex2_q8": { correct: "b", explanation: "'Bring up' an issue means to mention it." },
        "pv_ex2_q9": { correct: "b", explanation: "To 'catch up' on work means to do work that you missed or should have done earlier." },
        "pv_ex2_q10": { correct: "d", explanation: "Ask someone to 'call back' means to return a phone call." },

        // --- Упражнение 3: Phrasal Verbs 11-15 (check in, check out, clean up, come back, come in) ---
        "pv_ex3_q1": { correct: "c", explanation: "'Check in' means to register upon arrival at a hotel or airport." },
        "pv_ex3_q2": { correct: "c", explanation: "'Clean up' means to make a place tidy and clean." },
        "pv_ex3_q3": { correct: "d", explanation: "'Come in' means to enter a place." },
        "pv_ex3_q4": { correct: "a", explanation: "'Check out' means to leave and pay for accommodations at a hotel." },
        "pv_ex3_q5": { correct: "d", explanation: "'Come back' means to return." },
        "pv_ex3_q6": { correct: "c", explanation: "Meaning of 'check in' (hotel): To register upon arrival." },
        "pv_ex3_q7": { correct: "c", explanation: "'Clean up' the kitchen means to make it tidy." },
        "pv_ex3_q8": { correct: "b", explanation: "If you 'come back', you return to a place." },
        "pv_ex3_q9": { correct: "c", explanation: "'Come in' means to enter." },
        "pv_ex3_q10": { correct: "d", explanation: "'Check out' of a room means to leave and settle the bill." },

        // --- Упражнение 4: Phrasal Verbs 16-20 (come up with, count on, cut down on, do over, dress up) ---
        "pv_ex4_q1": { correct: "c", explanation: "'Come up with' an idea means to think of or create it." },
        "pv_ex4_q2": { correct: "d", explanation: "'Cut down on' something means to reduce the amount or frequency of it." },
        "pv_ex4_q3": { correct: "b", explanation: "'Count on' someone means to rely or depend on them." },
        "pv_ex4_q4": { correct: "b", explanation: "'Do over' means to do something again from the beginning." },
        "pv_ex4_q5": { correct: "c", explanation: "'Dress up' means to wear more formal or special clothes than usual." },
        "pv_ex4_q6": { correct: "b", explanation: "To 'come up with' new solutions means to think of them." },
        "pv_ex4_q7": { correct: "c", explanation: "To 'cut down on' smoking means to reduce it." },
        "pv_ex4_q8": { correct: "a", explanation: "If you 'do something over', you do it again." },
        "pv_ex4_q9": { correct: "d", explanation: "Children 'dress up' in costumes." },
        "pv_ex4_q10": { correct: "c", explanation: "You can 'count on' reliable friends (rely on them)." },

        // --- Упражнение 5: Phrasal Verbs 21-25 (drop by, drop off, eat out, fall apart, fall down) ---
        "pv_ex5_q1": { correct: "b", explanation: "'Eat out' means to have a meal in a restaurant instead of at home." },
        "pv_ex5_q2": { correct: "c", explanation: "'Drop off' someone means to take them somewhere and leave them there." },
        "pv_ex5_q3": { correct: "d", explanation: "'Fall apart' means to break into pieces, often due to being old or in poor condition." },
        "pv_ex5_q4": { correct: "c", explanation: "'Fall down' means to drop to the ground, usually accidentally." },
        "pv_ex5_q5": { correct: "c", explanation: "'Drop by' means to make a short, informal visit without much prior planning." },
        "pv_ex5_q6": { correct: "c", explanation: "To 'eat out' means to dine at a restaurant." },
        "pv_ex5_q7": { correct: "c", explanation: "If something old 'falls apart', it breaks into pieces." },
        "pv_ex5_q8": { correct: "c", explanation: "To 'drop off' a package means to leave it at a location." },
        "pv_ex5_q9": { correct: "b", explanation: "If someone slips, they 'fall down'." },
        "pv_ex5_q10": { correct: "d", explanation: "To 'drop by' means to visit informally or unexpectedly." }

        // --- ПЛЕЙСХОЛДЕРЫ ДЛЯ ОСТАЛЬНЫХ УПРАЖНЕНИЙ (6-10) ---
        // Вам нужно будет добавить сюда ответы для вопросов из упражнений 6-10,
        // когда вы создадите HTML для них.
        // Например:
        // "pv_ex6_q1": { correct: "a", explanation: "Объяснение для 1-го вопроса 6-го упражнения." },
        // ... и так далее ...
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
