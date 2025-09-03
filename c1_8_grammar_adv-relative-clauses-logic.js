// c1_8_grammar_adv-relative-clauses-logic.js
document.addEventListener('DOMContentLoaded', () => {
    const grammarCorrectAnswers = {
        // --- Упражнение 1: 'who' vs. 'whom' vs. 'whose' ---
        "c1_rc_ex1_q1": { correct: "b", explanation: "I (subject) met the manager (object). Местоимение заменяет дополнение -> 'whom'. В неформальной речи 'who' также возможно." },
        "c1_rc_ex1_q2": { correct: "c", explanation: "Речь о принадлежности (его работы). 'whose'." },
        "c1_rc_ex1_q3": { correct: "b", explanation: "После предлога 'to' используется 'whom' в формальной речи." },
        "c1_rc_ex1_q4": { correct: "a", explanation: "Местоимение заменяет подлежащее (friends live abroad). 'who'." },
        "c1_rc_ex1_q5": { correct: "b", explanation: "После конструкции 'most of' используется объектное 'whom'." },
        "c1_rc_ex1_q6": { correct: "d", explanation: "Местоимение - дополнение (you were telling me about him). В неформальной речи можно 'who' или 'that', в формальной - 'whom'." },
        "c1_rc_ex1_q7": { correct: "c", explanation: "Речь о принадлежности (ее последний роман). 'whose'." },
        "c1_rc_ex1_q8": { correct: "d", explanation: "Местоимение - дополнение (I respect him). В неформальной речи можно 'who' или 'that', в формальной - 'whom'." },
        "c1_rc_ex1_q9": { correct: "c", explanation: "Речь о принадлежности (ее машина). 'whose'." },
        "c1_rc_ex1_q10": { correct: "a", explanation: "Местоимение - подлежащее для 'is best for the job'. 'who'." },

        // --- Упражнение 2: 'which' referring to a whole clause ---
        "c1_rc_ex2_q1": { correct: "c", explanation: "'which' относится ко всему факту, что он забыл день рождения." },
        "c1_rc_ex2_q2": { correct: "d", explanation: "'which' комментирует весь факт, что команда хорошо играла." },
        "c1_rc_ex2_q3": { correct: "b", explanation: "'which' относится ко всему предложению 'She offered to help me'." },
        "c1_rc_ex2_q4": { correct: "b", explanation: "'which' комментирует тот факт, что он сам починил машину." },
        "c1_rc_ex2_q5": { correct: "d", explanation: "'which' относится ко всему факту отмены концерта." },
        "c1_rc_ex2_q6": { correct: "b", explanation: "'which' комментирует новость о переезде подруги." },
        "c1_rc_ex2_q7": { correct: "b", explanation: "'which' относится ко всему факту (шел дождь), который стал причиной." },
        "c1_rc_ex2_q8": { correct: "c", explanation: "'which' комментирует тот факт, что он сдал все экзамены на высший балл." },
        "c1_rc_ex2_q9": { correct: "b", explanation: "'which' комментирует тот факт, что рейс задержали." },
        "c1_rc_ex2_q10": { correct: "b", explanation: "'which' относится ко всему факту ее владения пятью языками." },

        // --- Упражнение 3: Prepositions in Relative Clauses ---
        "c1_rc_ex3_q1": { correct: "d", explanation: "Формальная конструкция: preposition + whom (with whom)." },
        "c1_rc_ex3_q2": { correct: "b", explanation: "Устойчивое выражение: work on a project. Предлог 'on' перемещается вперед." },
        "c1_rc_ex3_q3": { correct: "a", explanation: "Неформальная конструкция: talk to someone. Предлог 'to' остается в конце." },
        "c1_rc_ex3_q4": { correct: "d", explanation: "Формальная конструкция: preposition + which (at which)." },
        "c1_rc_ex3_q5": { correct: "b", explanation: "Неформальная конструкция: be interested in something. 'that' здесь опускаемое дополнение." },
        "c1_rc_ex3_q6": { correct: "a", explanation: "Формальная конструкция: preposition + whom (with whom)." },
        "c1_rc_ex3_q7": { correct: "b", explanation: "Неформальная конструкция: sit on a chair. Предлог 'on' остается в конце." },
        "c1_rc_ex3_q8": { correct: "c", explanation: "Формальная конструкция: preposition + whom (to whom)." },
        "c1_rc_ex3_q9": { correct: "c", explanation: "Формальная конструкция: preposition + which (with which)." },
        "c1_rc_ex3_q10": { correct: "a", explanation: "Неформальная конструкция: discuss a topic. 'that' - опускаемое дополнение." },
        
        // --- Упражнение 4: Omitting the Relative Pronoun ---
        "c1_rc_ex4_q1": { correct: "b", explanation: "Можно опустить, так как 'that' является дополнением (I'm reading the book)." },
        "c1_rc_ex4_q2": { correct: "a", explanation: "Нельзя опустить, так как 'who' является подлежащим (The man lives...)." },
        "c1_rc_ex4_q3": { correct: "b", explanation: "Можно опустить, так как 'which' является дополнением (you were looking for the keys)." },
        "c1_rc_ex4_q4": { correct: "a", explanation: "Нельзя опустить местоимение в non-defining clause." },
        "c1_rc_ex4_q5": { correct: "a", explanation: "Нельзя опустить 'where'." },
        "c1_rc_ex4_q6": { correct: "b", explanation: "Можно опустить, так как 'that' является дополнением (we saw the film)." },
        "c1_rc_ex4_q7": { correct: "a", explanation: "Нельзя опустить 'whose'." },
        "c1_rc_ex4_q8": { correct: "b", explanation: "Можно опустить, так как 'who' является дополнением (I work with the people)." },
        "c1_rc_ex4_q9": { correct: "a", explanation: "Нельзя опустить, так как 'who' является подлежащим (The politician gave...)." },
        "c1_rc_ex4_q10": { correct: "a", explanation: "Нельзя опустить местоимение в non-defining clause." },

        // --- Упражнение 5: Mixed Advanced Practice ---
        "c1_rc_ex5_q1": { correct: "c", explanation: "'which' относится ко всему предыдущему факту." },
        "c1_rc_ex5_q2": { correct: "b", explanation: "Формальная конструкция: 'in which'. 'where' тоже возможно, но 'in which' более точно." },
        "c1_rc_ex5_q3": { correct: "d", explanation: "Принадлежность (его книги) -> 'whose'." },
        "c1_rc_ex5_q4": { correct: "b", explanation: "Используется 'the reason why' для указания причины." },
        "c1_rc_ex5_q5": { correct: "d", explanation: "Местоимение ('whom'/'that') является дополнением и может быть опущено." },
        "c1_rc_ex5_q6": { correct: "d", explanation: "В формальной речи для дополнения используется 'whom'." },
        "c1_rc_ex5_q7": { correct: "b", explanation: "'which' комментирует весь предыдущий факт как причину." },
        "c1_rc_ex5_q8": { correct: "c", explanation: "Формальная конструкция с предлогом перед 'which'." },
        "c1_rc_ex5_q9": { correct: "d", explanation: "Местоимение 'when' можно опустить после слова 'moment'." },
        "c1_rc_ex5_q10": { correct: "c", explanation: "После 'all of' используется объектная форма 'whom'." }
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
