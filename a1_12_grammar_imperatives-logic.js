// a1_12_grammar_imperatives-logic.js
document.addEventListener('DOMContentLoaded', () => {
    const grammarCorrectAnswers = {
        // --- Упражнение 1: Утвердительные формы ---
        "a1_imp_ex1_q1": { correct: "b", explanation: "Повелительное наклонение образуется начальной формой глагола: Open." },
        "a1_imp_ex1_q2": { correct: "d", explanation: "Начальная форма глагола: Sit." },
        "a1_imp_ex1_q3": { correct: "a", explanation: "Начальная форма глагола: Do." },
        "a1_imp_ex1_q4": { correct: "c", explanation: "Для глагола 'to be' в повелительном наклонении используется форма 'Be'." },
        "a1_imp_ex1_q5": { correct: "c", explanation: "Начальная форма глагола: Pass." },
        "a1_imp_ex1_q6": { correct: "a", explanation: "Начальная форма глагола: Open." },
        "a1_imp_ex1_q7": { correct: "d", explanation: "Для 'to be' используется 'Be': Be careful!" },
        "a1_imp_ex1_q8": { correct: "b", explanation: "Фразовый глагол в начальной форме: Put on." },
        "a1_imp_ex1_q9": { correct: "c", explanation: "Фразовый глагол в начальной форме: Look at." },
        "a1_imp_ex1_q10": { correct: "c", explanation: "Начальная форма глагола: Wash." },

        // --- Упражнение 2: Отрицательные формы (Don't...) ---
        "a1_imp_ex2_q1": { correct: "b", explanation: "Отрицательная форма повелительного наклонения: Don't + начальная форма (touch)." },
        "a1_imp_ex2_q2": { correct: "d", explanation: "Отрицательная форма: Don't forget." },
        "a1_imp_ex2_q3": { correct: "b", explanation: "Отрицательная форма с 'be': Don't be late." },
        "a1_imp_ex2_q4": { correct: "a", explanation: "Отрицательная форма: Don't shout." },
        "a1_imp_ex2_q5": { correct: "c", explanation: "Отрицательная форма: Don't eat." },
        "a1_imp_ex2_q6": { correct: "b", explanation: "Отрицательная форма: Don't worry." },
        "a1_imp_ex2_q7": { correct: "a", explanation: "Отрицательная форма: Don't open." },
        "a1_imp_ex2_q8": { correct: "b", explanation: "Отрицательная форма: Don't run." },
        "a1_imp_ex2_q9": { correct: "c", explanation: "Отрицательная форма: Don't talk." },
        "a1_imp_ex2_q10": { correct: "d", explanation: "Отрицательная форма с 'be': Don't be sad." },

        // --- Упражнение 3: 'Let's' для предложений ---
        "a1_imp_ex3_q1": { correct: "b", explanation: "Для предложения совместного действия используется 'Let's' (Let us) + начальная форма глагола: Let's go." },
        "a1_imp_ex3_q2": { correct: "a", explanation: "Предложение: Let's eat." },
        "a1_imp_ex3_q3": { correct: "c", explanation: "Предложение: Let's play." },
        "a1_imp_ex3_q4": { correct: "d", explanation: "Предложение: Let's hurry." },
        "a1_imp_ex3_q5": { correct: "a", explanation: "Предложение: Let's stay." },
        "a1_imp_ex3_q6": { correct: "a", explanation: "Отрицательное предложение с Let's: Let's not fight." },
        "a1_imp_ex3_q7": { correct: "b", explanation: "Предложение: Let's dance." },
        "a1_imp_ex3_q8": { correct: "a", explanation: "Предложение: Let's do." },
        "a1_imp_ex3_q9": { correct: "a", explanation: "Предложение: Let's go." },
        "a1_imp_ex3_q10": { correct: "c", explanation: "Предложение: Let's help." },

        // --- Упражнение 4: Повелительное наклонение в ситуациях ---
        "a1_imp_ex4_q1": { correct: "b", explanation: "Инструкция/команда: Close your books." },
        "a1_imp_ex4_q2": { correct: "a", explanation: "Предупреждение: Look out! (или Watch out!)." },
        "a1_imp_ex4_q3": { correct: "d", explanation: "Просьба/команда: Be quiet, please." },
        "a1_imp_ex4_q4": { correct: "b", explanation: "Инструкция: Brush your teeth." },
        "a1_imp_ex4_q5": { correct: "a", explanation: "Инструкция в рецепте: Mix the eggs..." },
        "a1_imp_ex4_q6": { correct: "b", explanation: "Запрет/предупреждение: Don't touch..." },
        "a1_imp_ex4_q7": { correct: "a", explanation: "Просьба: Give me your pen..." },
        "a1_imp_ex4_q8": { correct: "c", explanation: "Указание направления: Turn left..." },
        "a1_imp_ex4_q9": { correct: "c", explanation: "Совет/запрет: Don't drive so fast!" },
        "a1_imp_ex4_q10": { correct: "c", explanation: "Предложение помощи в форме повелительного наклонения: Let me carry..." },

        // --- Упражнение 5: Вежливые формы с 'please' ---
        "a1_imp_ex5_q1": { correct: "b", explanation: "Вежливая просьба: Please close the window. или Close the window, please." },
        "a1_imp_ex5_q2": { correct: "a", explanation: "Вежливая отрицательная просьба: Please, don't talk so loud." },
        "a1_imp_ex5_q3": { correct: "c", explanation: "Вежливая просьба: Help me with this, please." },
        "a1_imp_ex5_q4": { correct: "a", explanation: "Вежливая просьба: Wait, please." },
        "a1_imp_ex5_q5": { correct: "c", explanation: "Вежливая отрицательная просьба: Please, don't forget your homework." },
        "a1_imp_ex5_q6": { correct: "b", explanation: "Вежливая просьба: Sit down, please." },
        "a1_imp_ex5_q7": { correct: "a", explanation: "Вежливая просьба: Speak slowly, please." },
        "a1_imp_ex5_q8": { correct: "b", explanation: "Вежливый запрет: Please, don't eat in the classroom." },
        "a1_imp_ex5_q9": { correct: "a", explanation: "Вежливая просьба: Pass me that book, please." },
        "a1_imp_ex5_q10": { correct: "d", explanation: "Вежливое предложение совместного действия: Let's have some tea, please." }
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
