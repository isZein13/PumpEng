// c1_6_grammar_emphasis-ellipsis-logic.js
document.addEventListener('DOMContentLoaded', () => {
    const grammarCorrectAnswers = {
        // --- Упражнение 1: Emphasis with 'do/does/did' ---
        "c1_ee_ex1_q1": { correct: "c", explanation: "Противопоставление прошлому действию ('forgot'). Используется 'did' для усиления." },
        "c1_ee_ex1_q2": { correct: "d", explanation: "Противопоставление ('may seem quiet, but...'). 'She' требует 'does'." },
        "c1_ee_ex1_q3": { correct: "b", explanation: "Ответ на вопрос в Past Simple. Усиление с 'did'." },
        "c1_ee_ex1_q4": { correct: "b", explanation: "Усиление утверждения в Present Simple для 'he'. 'does try'." },
        "c1_ee_ex1_q5": { correct: "a", explanation: "Усиление просьбы/желания в Present Simple. 'We do want'." },
        "c1_ee_ex1_q6": { correct: "b", explanation: "Противопоставление ожиданиям в прошлом. 'he did show up'." },
        "c1_ee_ex1_q7": { correct: "d", explanation: "Противопоставление. 'It' требует 'does'." },
        "c1_ee_ex1_q8": { correct: "b", explanation: "Ответ-опровержение на реплику в прошлом. 'I did say something'." },
        "c1_ee_ex1_q9": { correct: "b", explanation: "Усиление утверждения в Present Simple. 'I do understand'." },
        "c1_ee_ex1_q10": { correct: "a", explanation: "Усиление утверждения о прошлом действии. 'She did sit'." },

        // --- Упражнение 2: Other Emphatic Structures ---
        "c1_ee_ex2_q1": { correct: "a", explanation: "'whatsoever' используется с отрицаниями для сильного усиления ('совершенно никакого')." },
        "c1_ee_ex2_q2": { correct: "c", explanation: "Рефлексивное местоимение 'myself' используется для усиления, подчеркивая, что действие выполнено самостоятельно." },
        "c1_ee_ex2_q3": { correct: "a", explanation: "'indeed' используется для подтверждения или усиления предыдущего утверждения." },
        "c1_ee_ex2_q4": { correct: "b", explanation: "Конструкция 'such a + adj + noun + that'." },
        "c1_ee_ex2_q5": { correct: "b", explanation: "'itself' используется для усиления существительного, к которому оно относится ('сам фильм')." },
        "c1_ee_ex2_q6": { correct: "b", explanation: "Конструкция 'so + adj + that'." },
        "c1_ee_ex2_q7": { correct: "c", explanation: "Рефлексивное местоимение 'himself' подчеркивает, что звонил сам директор." },
        "c1_ee_ex2_q8": { correct: "c", explanation: "'no doubt whatsoever' - усиленная форма ('никакого сомнения вообще')." },
        "c1_ee_ex2_q9": { correct: "a", explanation: "'the very' используется для усиления, в значении 'тот самый'." },
        "c1_ee_ex2_q10": { correct: "d", explanation: "Конструкция 'such a + adj + noun'." },

        // --- Упражнение 3: Ellipsis in Responses and Replies ---
        "c1_ee_ex3_q1": { correct: "b", explanation: "Краткий ответ на вопрос в Past Simple. Опускается 'enjoy the concert'." },
        "c1_ee_ex3_q2": { correct: "b", explanation: "Краткий ответ с 'to be'. Опускается 'coming'." },
        "c1_ee_ex3_q3": { correct: "c", explanation: "Для отрицательного согласия используется 'Neither + auxiliary verb + subject'." },
        "c1_ee_ex3_q4": { correct: "d", explanation: "Для положительного согласия используется 'So + auxiliary verb + subject'." },
        "c1_ee_ex3_q5": { correct: "b", explanation: "Краткий ответ на вопрос в Present Simple. Опускается 'want another slice'." },
        "c1_ee_ex3_q6": { correct: "c", explanation: "Согласие с 'would'. Опускается 'love to travel more'." },
        "c1_ee_ex3_q7": { correct: "c", explanation: "Подтверждение с модальным глаголом. Опускается 'apologize'." },
        "c1_ee_ex3_q8": { correct: "a", explanation: "Отрицательное согласие с 'wasn't'. 'Neither was I'." },
        "c1_ee_ex3_q9": { correct: "d", explanation: "Сравнение с Present Simple. 'than he does' вместо 'than he works'." },
        "c1_ee_ex3_q10": { correct: "d", explanation: "Ответ о будущем действии. 'but I will' вместо 'but I will finish it soon'." },
        
        // --- Упражнение 4: Ellipsis with Conjunctions and Infinitives ---
        "c1_ee_ex4_q1": { correct: "a", explanation: "После 'chose not' используется инфинитив с 'to', а глагол 'help' опускается." },
        "c1_ee_ex4_q2": { correct: "b", explanation: "После 'didn't want' можно оставить только 'to', опустив 'go'." },
        "c1_ee_ex4_q3": { correct: "c", explanation: "Глагол 'play' можно опустить после модального глагола 'can'." },
        "c1_ee_ex4_q4": { correct: "c", explanation: "После 'I'd like' можно оставить только 'to', опустив 'apply'." },
        "c1_ee_ex4_q5": { correct: "b", explanation: "После 'used' можно оставить только 'to', опустив 'work'." },
        "c1_ee_ex4_q6": { correct: "c", explanation: "Повторяем вспомогательный глагол 'has' (от have been)." },
        "c1_ee_ex4_q7": { correct: "c", explanation: "Повторяем вспомогательный глагол 'did' (от thought) в отрицании." },
        "c1_ee_ex4_q8": { correct: "b", explanation: "После 'if you want' можно оставить только 'to', опустив 'leave'." },
        "c1_ee_ex4_q9": { correct: "c", explanation: "Повторяем глагол 'to be' в нужной форме ('is')." },
        "c1_ee_ex4_q10": { correct: "b", explanation: "Повторяем вспомогательный глагол 'do' (от achieve)." },

        // --- Упражнение 5: Mixed Practice ---
        "c1_ee_ex5_q1": { correct: "a", explanation: "Усиление утверждения в Present Simple с 'I'. Используется 'do'." },
        "c1_ee_ex5_q2": { correct: "a", explanation: "Усиление утверждения в Past Simple. Используется 'did'." },
        "c1_ee_ex5_q3": { correct: "c", explanation: "Эллипсис: повторяется только модальный глагол с отрицанием." },
        "c1_ee_ex5_q4": { correct: "c", explanation: "Усиление отрицания с 'no ... whatsoever'." },
        "c1_ee_ex5_q5": { correct: "a", explanation: "Эллипсис: повторяется вспомогательный глагол 'did' (от 'wanted')." },
        "c1_ee_ex5_q6": { correct: "b", explanation: "Эмфатическая конструкция 'such a + adj + noun + that'." },
        "c1_ee_ex5_q7": { correct: "b", explanation: "Эллипсис: повторяется только модальный глагол 'will' и 'be' (т.к. полное 'will be able to')." },
        "c1_ee_ex5_q8": { correct: "c", explanation: "Эллипсис: повторяется вспомогательный глагол 'did' (от 'knew')." },
        "c1_ee_ex5_q9": { correct: "a", explanation: "Усилительное наречие 'the very' (тот самый)." },
        "c1_ee_ex5_q10": { correct: "b", explanation: "Эллипсис для согласия: 'so + auxiliary + subject'." }
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
