// b2_7_grammar_reduced-clauses-logic.js
document.addEventListener('DOMContentLoaded', () => {
    const grammarCorrectAnswers = {
        // --- Упражнение 1: Present Participle (-ing) Clauses ---
        "b2_rrc_ex1_q1": { correct: "a", explanation: "Active: 'The woman who is sitting...' -> 'The woman sitting...'." },
        "b2_rrc_ex1_q2": { correct: "d", explanation: "Active: 'the boy who is playing...' -> 'the boy playing...'." },
        "b2_rrc_ex1_q3": { correct: "c", explanation: "Active: 'The road that joins...' -> 'The road joining...'." },
        "b2_rrc_ex1_q4": { correct: "a", explanation: "Active: 'The people who are waiting...' -> 'The people waiting...'." },
        "b2_rrc_ex1_q5": { correct: "c", explanation: "Active: 'A train that is carrying...' -> 'A train carrying...'." },
        "b2_rrc_ex1_q6": { correct: "a", explanation: "Active: 'Students who get...' -> 'Students getting...'." },
        "b2_rrc_ex1_q7": { correct: "c", explanation: "Active: 'The family who lives...' -> 'The family living...'." },
        "b2_rrc_ex1_q8": { correct: "b", explanation: "Active: 'The company that produces...' -> 'The company producing...'." },
        "b2_rrc_ex1_q9": { correct: "a", explanation: "Active: 'a man who was trying...' -> 'a man trying...'." },
        "b2_rrc_ex1_q10": { correct: "b", explanation: "Active: 'anyone who witnessed...' -> 'anyone witnessing...'." },

        // --- Упражнение 2: Past Participle (-ed/V3) Clauses ---
        "b2_rrc_ex2_q1": { correct: "c", explanation: "Passive: 'The book that was published...' -> 'The book published...'." },
        "b2_rrc_ex2_q2": { correct: "a", explanation: "Passive: 'The letters which were sent...' -> 'The letters sent...'." },
        "b2_rrc_ex2_q3": { correct: "c", explanation: "Passive: 'goods that are made...' -> 'goods made...'." },
        "b2_rrc_ex2_q4": { correct: "a", explanation: "Passive: 'The car that was stolen...' -> 'The car stolen...'." },
        "b2_rrc_ex2_q5": { correct: "c", explanation: "Passive: 'The information which is given...' -> 'The information given...'." },
        "b2_rrc_ex2_q6": { correct: "c", explanation: "Passive: 'The photos which were taken...' -> 'The photos taken...'." },
        "b2_rrc_ex2_q7": { correct: "c", explanation: "Passive: 'candidates who were invited...' -> 'candidates invited...'." },
        "b2_rrc_ex2_q8": { correct: "c", explanation: "Passive: 'The meal that was served...' -> 'The meal served...'." },
        "b2_rrc_ex2_q9": { correct: "c", explanation: "Passive: 'The man who was arrested...' -> 'The man arrested...'." },
        "b2_rrc_ex2_q10": { correct: "c", explanation: "Passive: 'The vegetables that are sold...' -> 'The vegetables sold...'." },

        // --- Упражнение 3: Choosing the Correct Participle (-ing vs. -ed) ---
        "b2_rrc_ex3_q1": { correct: "a", explanation: "Мальчик сам сидел (active action) -> sitting." },
        "b2_rrc_ex3_q2": { correct: "b", explanation: "Информацию представили (passive action) -> presented." },
        "b2_rrc_ex3_q3": { correct: "a", explanation: "Мужчина сам стоит (active action) -> standing." },
        "b2_rrc_ex3_q4": { correct: "c", explanation: "Картины были украдены (passive action) -> stolen." },
        "b2_rrc_ex3_q5": { correct: "a", explanation: "Компания сама производит (active action) -> producing." },
        "b2_rrc_ex3_q6": { correct: "b", explanation: "Закон был введен (passive action) -> introduced." },
        "b2_rrc_ex3_q7": { correct: "a", explanation: "Женщина сама управляет (active action) -> managing." },
        "b2_rrc_ex3_q8": { correct: "b", explanation: "Мост был поврежден (passive action) -> damaged." },
        "b2_rrc_ex3_q9": { correct: "b", explanation: "Людей пригласили (passive action) -> invited." },
        "b2_rrc_ex3_q10": { correct: "a", explanation: "Поезд сам прибывает (active action) -> arriving." },
        
        // --- Упражнение 4: Sentence Transformation ---
        "b2_rrc_ex4_q1": { correct: "a", explanation: "Пассивное 'which was directed' сокращается до 'directed'." },
        "b2_rrc_ex4_q2": { correct: "b", explanation: "Активное 'who are researching' сокращается до 'researching'." },
        "b2_rrc_ex4_q3": { correct: "c", explanation: "Активное 'who wants' сокращается до 'wanting'." },
        "b2_rrc_ex4_q4": { correct: "c", explanation: "Пассивное 'which was made' сокращается до 'made'." },
        "b2_rrc_ex4_q5": { correct: "a", explanation: "Активное 'that leads' сокращается до 'leading'." },
        "b2_rrc_ex4_q6": { correct: "c", explanation: "Пассивное 'who was questioned' сокращается до 'questioned'." },
        "b2_rrc_ex4_q7": { correct: "b", explanation: "Пассивное 'which are presented' сокращается до 'presented'." },
        "b2_rrc_ex4_q8": { correct: "b", explanation: "Активное 'who was waving' сокращается до 'waving'." },
        "b2_rrc_ex4_q9": { correct: "c", explanation: "Пассивное 'who were elected' сокращается до 'elected'." },
        "b2_rrc_ex4_q10": { correct: "b", explanation: "Активное 'who live' сокращается до 'living'." },

        // --- Упражнение 5: Mixed Practice in Context ---
        "b2_rrc_ex5_q1": { correct: "b", explanation: "Машины были украдены (passive) -> stolen." },
        "b2_rrc_ex5_q2": { correct: "b", explanation: "Девочка сама разговаривала (active) -> talking." },
        "b2_rrc_ex5_q3": { correct: "b", explanation: "Людей пригласили (passive) -> invited." },
        "b2_rrc_ex5_q4": { correct: "c", explanation: "Дом был построен (passive) -> built." },
        "b2_rrc_ex5_q5": { correct: "c", explanation: "Дорога сама ведет (active) -> leading." },
        "b2_rrc_ex5_q6": { correct: "a", explanation: "Люди были названы в списке (passive) -> named." },
        "b2_rrc_ex5_q7": { correct: "c", explanation: "Идеи были представлены (passive) -> presented." },
        "b2_rrc_ex5_q8": { correct: "a", explanation: "Тропинка сама ведет (active) -> leading." },
        "b2_rrc_ex5_q9": { correct: "d", explanation: "Предложения были сделаны (passive) -> made." },
        "b2_rrc_ex5_q10": { correct: "d", explanation: "Мужчина был ужален (passive) -> stung." }
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
