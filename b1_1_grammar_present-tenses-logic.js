// b1_1_grammar_present-tenses-logic.js
document.addEventListener('DOMContentLoaded', () => {
    const grammarCorrectAnswers = {
        // --- Упражнение 1: Present Simple vs. Present Continuous (Review) ---
        "b1_pt_ex1_q1": { correct: "b", explanation: "Научный факт. Используется Present Simple." },
        "b1_pt_ex1_q2": { correct: "a", explanation: "'Look!' указывает на действие, происходящее в данный момент. Используется Present Continuous." },
        "b1_pt_ex1_q3": { correct: "a", explanation: "Первая часть - рутина ('usually'), вторая - временная ситуация на этой неделе." },
        "b1_pt_ex1_q4": { correct: "b", explanation: "Действие происходит в момент речи. 'is having a shower' - это процесс." },
        "b1_pt_ex1_q5": { correct: "b", explanation: "'very often' указывает на регулярность (или ее отсутствие). Используется Present Simple." },
        "b1_pt_ex1_q6": { correct: "a", explanation: "Действие происходит прямо сейчас. Используется Present Continuous." },
        "b1_pt_ex1_q7": { correct: "b", explanation: "'How often' спрашивает о регулярности. Используется Present Simple." },
        "b1_pt_ex1_q8": { correct: "b", explanation: "Это общеизвестный факт. Используется Present Simple." },
        "b1_pt_ex1_q9": { correct: "b", explanation: "Это постоянная ситуация. Используется Present Simple." },
        "b1_pt_ex1_q10": { correct: "a", explanation: "'this year' указывает на временный тренд или изменение. Используется Present Continuous." },

        // --- Упражнение 2: Stative Verbs (Глаголы состояния) ---
        "b1_pt_ex2_q1": { correct: "b", explanation: "Глагол 'believe' (верить) - это глагол состояния и не используется в Continuous." },
        "b1_pt_ex2_q2": { correct: "b", explanation: "Глагол 'want' (хотеть) - это глагол состояния, даже со словом 'now'." },
        "b1_pt_ex2_q3": { correct: "b", explanation: "Глагол 'taste' в значении 'быть на вкус' - это глагол состояния." },
        "b1_pt_ex2_q4": { correct: "b", explanation: "Глагол 'own' (владеть) - это глагол состояния." },
        "b1_pt_ex2_q5": { correct: "b", explanation: "Глагол 'understand' (понимать) - это глагол состояния." },
        "b1_pt_ex2_q6": { correct: "b", explanation: "Глагол 'need' (нуждаться) - это глагол состояния." },
        "b1_pt_ex2_q7": { correct: "b", explanation: "Глагол 'contain' (содержать) - это глагол состояния." },
        "b1_pt_ex2_q8": { correct: "b", explanation: "Глагол 'know' (знать) - это глагол состояния, в вопросе используется 'Do you know?'." },
        "b1_pt_ex2_q9": { correct: "b", explanation: "Глагол 'seem' (казаться) - это глагол состояния." },
        "b1_pt_ex2_q10": { correct: "b", explanation: "Глагол 'prefer' (предпочитать) - это глагол состояния." },

        // --- Упражнение 3: Verbs with Dual Meanings (Смешанные глаголы) ---
        "b1_pt_ex3_q1": { correct: "b", explanation: "'think' в значении 'иметь мнение' - глагол состояния, используется Present Simple." },
        "b1_pt_ex3_q2": { correct: "a", explanation: "'think' в значении 'размышлять' - это процесс, используется Present Continuous." },
        "b1_pt_ex3_q3": { correct: "b", explanation: "'have' в значении 'владеть' - глагол состояния, используется Present Simple." },
        "b1_pt_ex3_q4": { correct: "a", explanation: "'have a party' - это действие/процесс, используется Present Continuous." },
        "b1_pt_ex3_q5": { correct: "a", explanation: "'taste' в значении 'пробовать на вкус' - это действие, используется Present Continuous." },
        "b1_pt_ex3_q6": { correct: "b", explanation: "'taste' в значении 'быть на вкус' - это качество/состояние, используется Present Simple." },
        "b1_pt_ex3_q7": { correct: "b", explanation: "'see' в значении 'понимать' - глагол состояния, используется Present Simple." },
        "b1_pt_ex3_q8": { correct: "a", explanation: "'see' в значении 'встречаться' - это запланированное действие, используется Present Continuous." },
        "b1_pt_ex3_q9": { correct: "b", explanation: "'smell' в значении 'пахнуть' - это качество/состояние, используется Present Simple." },
        "b1_pt_ex3_q10": { correct: "a", explanation: "'smell' в значении 'нюхать' - это действие, используется Present Continuous." },
        
        // --- Упражнение 4: Present Continuous for Annoying Habits ---
        "b1_pt_ex4_q1": { correct: "b", explanation: "Выражение раздражения по поводу повторяющегося действия ('always'). Используется Present Continuous." },
        "b1_pt_ex4_q2": { correct: "b", explanation: "Раздражающая привычка ('constantly'). Используется Present Continuous." },
        "b1_pt_ex4_q3": { correct: "a", explanation: "Раздражающая привычка ('forever'). Используется Present Continuous." },
        "b1_pt_ex4_q4": { correct: "b", explanation: "Раздражение из-за постоянных жалоб ('always'). Используется Present Continuous." },
        "b1_pt_ex4_q5": { correct: "a", explanation: "Раздражающая привычка ('always'). Используется Present Continuous." },
        "b1_pt_ex4_q6": { correct: "b", explanation: "Раздражающая привычка ('always'). Используется Present Continuous." },
        "b1_pt_ex4_q7": { correct: "b", explanation: "Вопрос о раздражающей привычке ('constantly'). Используется Present Continuous." },
        "b1_pt_ex4_q8": { correct: "a", explanation: "Раздражающая привычка ('always'). Используется Present Continuous." },
        "b1_pt_ex4_q9": { correct: "a", explanation: "Раздражающая привычка ('forever'). Используется Present Continuous." },
        "b1_pt_ex4_q10": { correct: "b", explanation: "Раздражение из-за повторения ошибки ('always'). Используется Present Continuous." },

        // --- Упражнение 5: Mixed Practice (Итоговая проверка) ---
        "b1_pt_ex5_q1": { correct: "b", explanation: "'now' указывает на действие в процессе. 'am driving'." },
        "b1_pt_ex5_q2": { correct: "b", explanation: "'seem' (казаться) - глагол состояния. 'seems'." },
        "b1_pt_ex5_q3": { correct: "b", explanation: "Вопрос об общем значении слова (факт). Present Simple: 'does this word mean?'." },
        "b1_pt_ex5_q4": { correct: "a", explanation: "Контекст подразумевает раздражение из-за повторяющегося действия. Present Continuous: 'is always leaving'." },
        "b1_pt_ex5_q5": { correct: "b", explanation: "'taste' в значении 'пробовать' - это действие в данный момент. 'is tasting'." },
        "b1_pt_ex5_q6": { correct: "b", explanation: "'remember' - глагол состояния. 'doesn't remember'." },
        "b1_pt_ex5_q7": { correct: "b", explanation: "Вопрос о действии, происходящем в данный момент. 'are you looking?'." },
        "b1_pt_ex5_q8": { correct: "b", explanation: "'depend' (зависеть) - глагол состояния. 'depends'." },
        "b1_pt_ex5_q9": { correct: "b", explanation: "'think' в значении 'обдумывать, размышлять' - это процесс. 'am thinking'." },
        "b1_pt_ex5_q10": { correct: "a", explanation: "Это научный факт. Present Simple: 'revolves'." }
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
});```
