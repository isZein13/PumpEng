// a2_7_grammar_future-perfect-logic.js
document.addEventListener('DOMContentLoaded', () => {
    const grammarCorrectAnswers = {
        // --- Упражнение 1: Образование (will have + V3) ---
        "a2_fp_ex1_q1": { correct: "b", explanation: "Правильная форма Future Perfect: will have + V3 (graduated)." },
        "a2_fp_ex1_q2": { correct: "a", explanation: "Правильная форма Future Perfect: will have + V3 (visited)." },
        "a2_fp_ex1_q3": { correct: "c", explanation: "Правильная форма Future Perfect: will have + V3 (built)." },
        "a2_fp_ex1_q4": { correct: "a", explanation: "Правильная форма Future Perfect: will have + V3 (read)." },
        "a2_fp_ex1_q5": { correct: "b", explanation: "Правильная форма Future Perfect: will have + V3 (eaten)." },
        "a2_fp_ex1_q6": { correct: "a", explanation: "Правильная форма Future Perfect: will have + V3 (bought)." },
        "a2_fp_ex1_q7": { correct: "b", explanation: "Правильная форма Future Perfect: will have + V3 (saved)." },
        "a2_fp_ex1_q8": { correct: "a", explanation: "Правильная форма Future Perfect: will have + V3 (written)." },
        "a2_fp_ex1_q9": { correct: "b", explanation: "Правильная форма Future Perfect: will have + V3 (left)." },
        "a2_fp_ex1_q10": { correct: "b", explanation: "Правильная форма Future Perfect: will have + V3 (found)." },

        // --- Упражнение 2: Использование с 'by' и 'by the time' ---
        "a2_fp_ex2_q1": { correct: "b", explanation: "'by' используется для указания крайнего срока (к 6 вечера)." },
        "a2_fp_ex2_q2": { correct: "c", explanation: "'By the time' используется, когда действие завершится к моменту начала другого действия." },
        "a2_fp_ex2_q3": { correct: "c", explanation: "'by' используется для указания крайнего срока (к концу недели)." },
        "a2_fp_ex2_q4": { correct: "a", explanation: "'By the time' + придаточное предложение (she moves to Spain)." },
        "a2_fp_ex2_q5": { correct: "b", explanation: "'by' используется для указания крайнего срока (к 2040 году)." },
        "a2_fp_ex2_q6": { correct: "b", explanation: "'By the time' + придаточное предложение (you get home)." },
        "a2_fp_ex2_q7": { correct: "a", explanation: "'by' используется для указания крайнего срока (к следующему Рождеству)." },
        "a2_fp_ex2_q8": { correct: "c", explanation: "'By the time' + придаточное предложение (we reach the top)." },
        "a2_fp_ex2_q9": { correct: "a", explanation: "'by' используется для указания крайнего срока (к следующему июню)." },
        "a2_fp_ex2_q10": { correct: "c", explanation: "'By the time' + придаточное предложение (we get to the cinema)." },
        
        // --- Упражнение 3: Вопросы и отрицания ---
        "a2_fp_ex3_q1": { correct: "b", explanation: "Вопросительная форма: Will + subject + have + V3?" },
        "a2_fp_ex3_q2": { correct: "c", explanation: "Отрицательная форма: won't + have + V3." },
        "a2_fp_ex3_q3": { correct: "a", explanation: "Вопросительная форма: Will + subject + have + V3?" },
        "a2_fp_ex3_q4": { correct: "b", explanation: "Отрицательная форма: won't + have + V3." },
        "a2_fp_ex3_q5": { correct: "c", explanation: "Специальный вопрос: Wh-word + will + subject + have + V3?" },
        "a2_fp_ex3_q6": { correct: "a", explanation: "Отрицательная форма: won't + have + V3." },
        "a2_fp_ex3_q7": { correct: "b", explanation: "Вопросительная форма: Will + subject + have + V3?" },
        "a2_fp_ex3_q8": { correct: "a", explanation: "Отрицательная форма: won't + have + V3." },
        "a2_fp_ex3_q9": { correct: "b", explanation: "Специальный вопрос: Wh-word + will + subject + have + V3?" },
        "a2_fp_ex3_q10": { correct: "b", explanation: "Отрицательная форма: won't + have + V3." },

        // --- Упражнение 4: Future Perfect или Future Simple? ---
        "a2_fp_ex4_q1": { correct: "a", explanation: "Это обещание, простое действие в будущем. Используется Future Simple 'will call'." },
        "a2_fp_ex4_q2": { correct: "b", explanation: "'By the time you read this' указывает на завершенное действие к моменту в будущем. Используется Future Perfect 'will have left'." },
        "a2_fp_ex4_q3": { correct: "a", explanation: "Это факт из расписания, простое действие в будущем. Используется Future Simple 'will start'." },
        "a2_fp_ex4_q4": { correct: "b", explanation: "'By next year' указывает на состояние, которое завершится к моменту. Используется Future Perfect 'will have been'." },
        "a2_fp_ex4_q5": { correct: "a", explanation: "Это предсказание о будущем. Используется Future Simple 'will be'." },
        "a2_fp_ex4_q6": { correct: "b", explanation: "'by then' (к тому времени) указывает на завершенное действие. Используется Future Perfect 'will have finished'." },
        "a2_fp_ex4_q7": { correct: "a", explanation: "Это простой вопрос о будущем действии, а не о его завершении к моменту. 'When will you finish?'." },
        "a2_fp_ex4_q8": { correct: "a", explanation: "Простой факт о будущем. Используется Future Simple 'will be'." },
        "a2_fp_ex4_q9": { correct: "b", explanation: "'By the end of this course' указывает на результат, который будет достигнут к моменту. 'will have learned'." },
        "a2_fp_ex4_q10": { correct: "b", explanation: "Конструкция '... by the time you get there' требует Future Perfect в главной части." },

        // --- Упражнение 5: Применение в контексте ---
        "a2_fp_ex5_q1": { correct: "b", explanation: "К 7 часам вечера я уже пройду регистрацию. Действие завершится к моменту в будущем." },
        "a2_fp_ex5_q2": { correct: "b", explanation: "К 9:30 фильм уже закончится. Действие завершится к моменту в будущем." },
        "a2_fp_ex5_q3": { correct: "a", explanation: "К следующему понедельнику они уже покрасят дом. Действие завершится к моменту в будущем." },
        "a2_fp_ex5_q4": { correct: "b", explanation: "К концу третьего дня я уже прочту 60 страниц. Результат к моменту в будущем." },
        "a2_fp_ex5_q5": { correct: "b", explanation: "К 8 часам я уже уйду спать. Действие завершится к моменту в будущем." },
        "a2_fp_ex5_q6": { correct: "a", explanation: "Она думает, что завершит книгу к концу года." },
        "a2_fp_ex5_q7": { correct: "b", explanation: "К концу года он уже накопит достаточно денег." },
        "a2_fp_ex5_q8": { correct: "a", explanation: "Действие (ремонт) будет завершено к вечеру." },
        "a2_fp_ex5_q9": { correct: "b", explanation: "Дождь уже прекратится к тому времени." },
        "a2_fp_ex5_q10": { correct: "b", explanation: "К 10 вечера мы уже уснем. Действие 'go to sleep' завершится. 'will be sleeping' описывало бы процесс." }
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
