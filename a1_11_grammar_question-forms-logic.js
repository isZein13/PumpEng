// a1_11_grammar_question-forms-logic.js
document.addEventListener('DOMContentLoaded', () => {
    const grammarCorrectAnswers = {
        // --- Упражнение 1: Общие вопросы с 'to be' (am, is, are) ---
        "a1_qf_ex1_q1": { correct: "b", explanation: "С 'she' используется 'Is': Is she your sister?" },
        "a1_qf_ex1_q2": { correct: "a", explanation: "С 'I' используется 'Am': Am I late?" },
        "a1_qf_ex1_q3": { correct: "c", explanation: "С 'they' используется 'Are': Are they from Canada?" },
        "a1_qf_ex1_q4": { correct: "b", explanation: "'This bag' (it) используется с 'Is': Is this your bag?" },
        "a1_qf_ex1_q5": { correct: "c", explanation: "С 'we' используется 'Are': Are we friends?" },
        "a1_qf_ex1_q6": { correct: "b", explanation: "'Your father' (he) используется с 'Is': Is your father a doctor?" },
        "a1_qf_ex1_q7": { correct: "c", explanation: "'The children' (they) используется с 'Are': Are the children in the park?" },
        "a1_qf_ex1_q8": { correct: "b", explanation: "С 'he' используется 'Is': Is he tired?" },
        "a1_qf_ex1_q9": { correct: "c", explanation: "'These books' (they) используется с 'Are': Are these your books?" },
        "a1_qf_ex1_q10": { correct: "b", explanation: "'Your name' (it) используется с 'Is': Is your name Maria?" },

        // --- Упражнение 2: Общие вопросы с 'do/does' (Present Simple) ---
        "a1_qf_ex2_q1": { correct: "a", explanation: "С 'you' в Present Simple используется 'Do': Do you like pizza?" },
        "a1_qf_ex2_q2": { correct: "b", explanation: "С 'she' в Present Simple используется 'Does': Does she play tennis?" },
        "a1_qf_ex2_q3": { correct: "a", explanation: "С 'they' в Present Simple используется 'Do': Do they speak English?" },
        "a1_qf_ex2_q4": { correct: "b", explanation: "С 'he' в Present Simple используется 'Does': Does he live in London?" },
        "a1_qf_ex2_q5": { correct: "a", explanation: "С 'we' в Present Simple используется 'Do': Do we have homework today?" },
        "a1_qf_ex2_q6": { correct: "b", explanation: "'Your cat' (it) в Present Simple используется с 'Does': Does your cat like milk?" },
        "a1_qf_ex2_q7": { correct: "a", explanation: "С 'I' в Present Simple используется 'Do': Do I need a pen?" },
        "a1_qf_ex2_q8": { correct: "a", explanation: "'Your parents' (they) в Present Simple используется с 'Do': Do your parents work here?" },
        "a1_qf_ex2_q9": { correct: "b", explanation: "С 'it' в Present Simple используется 'Does': Does it rain a lot...?" },
        "a1_qf_ex2_q10": { correct: "b", explanation: "С 'she' в Present Simple используется 'Does': Does she have a brother?" },

        // --- Упражнение 3: Специальные вопросы (Wh-) с 'to be' ---
        "a1_qf_ex3_q1": { correct: "c", explanation: "Для вопроса об имени используется 'What': What is your name?" },
        "a1_qf_ex3_q2": { correct: "c", explanation: "С 'you' используется 'are': How old are you?" },
        "a1_qf_ex3_q3": { correct: "b", explanation: "Для вопроса о предпочтении (цвет) используется 'What': What is your favorite color?" },
        "a1_qf_ex3_q4": { correct: "d", explanation: "С 'she' используется 'is': Where is she from?" },
        "a1_qf_ex3_q5": { correct: "c", explanation: "Для вопроса о местоположении используется 'Where': Where are my keys?" },
        "a1_qf_ex3_q6": { correct: "a", explanation: "'Your birthday' (it) используется с 'is': When is your birthday?" },
        "a1_qf_ex3_q7": { correct: "b", explanation: "'That man' (he) используется с 'is': Who is that man?" },
        "a1_qf_ex3_q8": { correct: "d", explanation: "Для вопроса о причине используется 'Why': Why are you sad?" },
        "a1_qf_ex3_q9": { correct: "c", explanation: "'Your parents' (they) используется с 'are': How are your parents?" },
        "a1_qf_ex3_q10": { correct: "c", explanation: "Для вопроса о погоде часто используется 'What': What is the weather like today?" },

        // --- Упражнение 4: Специальные вопросы (Wh-) с 'do/does' (Present Simple) ---
        "a1_qf_ex4_q1": { correct: "a", explanation: "С 'you' используется 'do': Where do you live?" },
        "a1_qf_ex4_q2": { correct: "b", explanation: "С 'she' используется 'does': What time does she get up?" },
        "a1_qf_ex4_q3": { correct: "a", explanation: "С 'they' используется 'do': How do they go to school?" },
        "a1_qf_ex4_q4": { correct: "b", explanation: "С 'he' используется 'does': What does he like to eat?" },
        "a1_qf_ex4_q5": { correct: "a", explanation: "С 'you' используется 'do': When do you do your homework?" },
        "a1_qf_ex4_q6": { correct: "b", explanation: "С 'she' используется 'does': Why does she learn English?" },
        "a1_qf_ex4_q7": { correct: "a", explanation: "С 'you' используется 'do': How often do you visit...?" },
        "a1_qf_ex4_q8": { correct: "b", explanation: "С 'he' используется 'does': What kind of music does he listen to?" },
        "a1_qf_ex4_q9": { correct: "a", explanation: "'Your parents' (they) используется с 'do': Where do your parents work?" },
        "a1_qf_ex4_q10": { correct: "b", explanation: "'This word' (it) используется с 'does': What does this word mean?" },

        // --- Упражнение 5: Question Tags (с 'to be') ---
        "a1_qf_ex5_q1": { correct: "b", explanation: "Утверждение с 'is', хвостик отрицательный 'isn't she?'" },
        "a1_qf_ex5_q2": { correct: "b", explanation: "Утверждение с 'are', хвостик отрицательный 'aren't they?'" },
        "a1_qf_ex5_q3": { correct: "a", explanation: "Отрицание с 'isn't', хвостик утвердительный 'is he?'" },
        "a1_qf_ex5_q4": { correct: "b", explanation: "Утверждение с 'are', хвостик отрицательный 'aren't you?'" },
        "a1_qf_ex5_q5": { correct: "b", explanation: "Утверждение с 'is', хвостик отрицательный 'isn't it?'" },
        "a1_qf_ex5_q6": { correct: "b", explanation: "Утверждение с 'are', хвостик отрицательный 'aren't we?'" },
        "a1_qf_ex5_q7": { correct: "c", explanation: "Особый случай для 'I am': I am right, aren't I?" },
        "a1_qf_ex5_q8": { correct: "c", explanation: "Отрицание 'This isn't', хвостик утвердительный 'is it?' (this меняется на it в хвостике)." },
        "a1_qf_ex5_q9": { correct: "d", explanation: "Утверждение 'Those are', хвостик отрицательный 'aren't they?' (those меняется на they)." },
        "a1_qf_ex5_q10": { correct: "b", explanation: "Утверждение 'Your brother is', хвостик отрицательный 'isn't he?'." },

        // --- Упражнение 6: Question Tags (с 'do/does') ---
        "a1_qf_ex6_q1": { correct: "b", explanation: "Утверждение с Present Simple (like), хвостик с 'don't you?'" },
        "a1_qf_ex6_q2": { correct: "b", explanation: "Утверждение с Present Simple (plays), хвостик с 'doesn't he?'" },
        "a1_qf_ex6_q3": { correct: "a", explanation: "Отрицание с 'don't', хвостик утвердительный 'do they?'" },
        "a1_qf_ex6_q4": { correct: "c", explanation: "Отрицание с 'doesn't', хвостик утвердительный 'does she?'" },
        "a1_qf_ex6_q5": { correct: "b", explanation: "Утверждение с Present Simple (know), хвостик с 'don't we?'" },
        "a1_qf_ex6_q6": { correct: "d", explanation: "Утверждение 'Your brother works' (he works), хвостик 'doesn't he?'" },
        "a1_qf_ex6_q7": { correct: "a", explanation: "Отрицание 'You don't want', хвостик 'do you?'" },
        "a1_qf_ex6_q8": { correct: "d", explanation: "Утверждение 'This car goes' (it goes), хвостик 'doesn't it?'" },
        "a1_qf_ex6_q9": { correct: "b", explanation: "Утверждение 'They like', хвостик 'don't they?'" },
        "a1_qf_ex6_q10": { correct: "c", explanation: "Отрицание 'It doesn't rain', хвостик 'does it?'" }
    };

    // Код для проверки ответов (остается таким же)
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
