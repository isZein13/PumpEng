// a1_grammar_present-simple-logic.js
document.addEventListener('DOMContentLoaded', () => {
    // --- БАЗА ДАННЫХ С ПРАВИЛЬНЫМИ ОТВЕТАМИ И ОБЪЯСНЕНИЯМИ ДЛЯ A1 - Present Simple ---
    // Ключ: data-form-id_qN (например, a1_ps_ex1_q1)
    const grammarCorrectAnswers = {
        // --- Упражнение 1: Утверждения (I, You, We, They) ---
        "a1_ps_ex1_q1": { correct: "a", explanation: "С местоимением 'I' глагол используется в начальной форме: I read." },
        "a1_ps_ex1_q2": { correct: "a", explanation: "С местоимением 'We' глагол используется в начальной форме: We play." },
        "a1_ps_ex1_q3": { correct: "a", explanation: "С местоимением 'You' глагол используется в начальной форме: You speak." },
        "a1_ps_ex1_q4": { correct: "a", explanation: "С местоимением 'They' глагол используется в начальной форме: They live." },
        "a1_ps_ex1_q5": { correct: "a", explanation: "'My friends' - это 'they', глагол в начальной форме: My friends like." },
        "a1_ps_ex1_q6": { correct: "a", explanation: "С 'I' и регулярным действием 'every morning': I get up." },
        "a1_ps_ex1_q7": { correct: "a", explanation: "С 'You': You drink." },
        "a1_ps_ex1_q8": { correct: "a", explanation: "С 'We': We go." },
        "a1_ps_ex1_q9": { correct: "a", explanation: "С 'They': They study." },
        "a1_ps_ex1_q10": { correct: "a", explanation: "С 'I' глагол 'to have' имеет форму 'have'." },

        // --- Упражнение 2: Утверждения (He, She, It) ---
        "a1_ps_ex2_q1": { correct: "b", explanation: "'My father' - это 'he', к глаголу добавляется -s: works." },
        "a1_ps_ex2_q2": { correct: "c", explanation: "'She', глагол оканчивается на -ch, добавляется -es: teaches." },
        "a1_ps_ex2_q3": { correct: "b", explanation: "'The cat' - это 'it', к глаголу добавляется -s: sleeps." },
        "a1_ps_ex2_q4": { correct: "b", explanation: "'He', глагол 'go' становится 'goes'." },
        "a1_ps_ex2_q5": { correct: "b", explanation: "'My mother' - это 'she', к глаголу добавляется -s: cooks." },
        "a1_ps_ex2_q6": { correct: "b", explanation: "'It', к глаголу добавляется -s: rains." },
        "a1_ps_ex2_q7": { correct: "b", explanation: "'My friend' (he/she), к глаголу добавляется -s: speaks." },
        "a1_ps_ex2_q8": { correct: "b", explanation: "'The bus' (it), к глаголу добавляется -s: arrives." },
        "a1_ps_ex2_q9": { correct: "b", explanation: "С 'She' глагол 'to have' имеет форму 'has'." },
        "a1_ps_ex2_q10": { correct: "b", explanation: "'The Earth' (it), глагол 'go' становится 'goes'. Это факт." },

        // --- Упражнение 3: Отрицания (don't / doesn't) ---
        "a1_ps_ex3_q1": { correct: "a", explanation: "Для 'I' в отрицании используется 'don't': I don't like." },
        "a1_ps_ex3_q2": { correct: "b", explanation: "Для 'He' в отрицании используется 'doesn't': He doesn't play." },
        "a1_ps_ex3_q3": { correct: "a", explanation: "Для 'We' в отрицании используется 'don't': We don't go." },
        "a1_ps_ex3_q4": { correct: "c", explanation: "Для 'She' в отрицании используется 'doesn't': She doesn't work." },
        "a1_ps_ex3_q5": { correct: "b", explanation: "Для 'You' в отрицании используется 'don't': You don't study." },
        "a1_ps_ex3_q6": { correct: "b", explanation: "'The dog' (it), в отрицании 'doesn't': The dog doesn't eat." },
        "a1_ps_ex3_q7": { correct: "b", explanation: "'My parents' (they), в отрицании 'don't': My parents don't live." },
        "a1_ps_ex3_q8": { correct: "b", explanation: "'It', в отрицании 'doesn't': It doesn't snow." },
        "a1_ps_ex3_q9": { correct: "b", explanation: "Для 'I' в отрицании с 'have' используется 'don't have'." },
        "a1_ps_ex3_q10": { correct: "b", explanation: "Для 'He' в отрицании используется 'doesn't': He doesn't watch." },

        // --- Упражнение 4: Вопросы (Do / Does) ---
        "a1_ps_ex4_q1": { correct: "a", explanation: "Для вопроса с 'you' используется 'Do': Do you like?" },
        "a1_ps_ex4_q2": { correct: "b", explanation: "'Your friend' (he/she), для вопроса используется 'Does': Does your friend play?" },
        "a1_ps_ex4_q3": { correct: "a", explanation: "Для вопроса с 'they' используется 'Do': Do they live?" },
        "a1_ps_ex4_q4": { correct: "b", explanation: "Для вопроса с 'it' используется 'Does': Does it often snow?" },
        "a1_ps_ex4_q5": { correct: "a", explanation: "Для вопроса с 'we' используется 'Do': Do we have?" },
        "a1_ps_ex4_q6": { correct: "b", explanation: "'Your cat' (it), для вопроса используется 'Does': Does your cat drink?" },
        "a1_ps_ex4_q7": { correct: "a", explanation: "Для вопроса с 'I' используется 'Do': Do I know you?" },
        "a1_ps_ex4_q8": { correct: "b", explanation: "Для вопроса с 'he' используется 'Does': Does he speak English?" },
        "a1_ps_ex4_q9": { correct: "a", explanation: "'Your parents' (they), для вопроса используется 'Do': Do your parents like?" },
        "a1_ps_ex4_q10": { correct: "b", explanation: "Для вопроса с 'she' используется 'Does': Does she go to bed early?" },

        // --- Упражнение 5: Факты и рутина ---
        "a1_ps_ex5_q1": { correct: "b", explanation: "'Water' (it) - факт, к глаголу добавляется -s: boils." },
        "a1_ps_ex5_q2": { correct: "a", explanation: "'I usually' - рутина, глагол 'have'." },
        "a1_ps_ex5_q3": { correct: "b", explanation: "'The Earth' (it) - факт, глагол 'revolves'." },
        "a1_ps_ex5_q4": { correct: "a", explanation: "'Cats' (they) - общий факт, глагол 'like'." },
        "a1_ps_ex5_q5": { correct: "b", explanation: "'My school' (it) - расписание, глагол 'starts'." },
        "a1_ps_ex5_q6": { correct: "b", explanation: "'He often' - рутина, глагол 'visits'." },
        "a1_ps_ex5_q7": { correct: "a", explanation: "'We always' - рутина, глагол 'clean'." },
        "a1_ps_ex5_q8": { correct: "b", explanation: "'The moon' (it) - факт, глагол 'shines'." },
        "a1_ps_ex5_q9": { correct: "b", explanation: "'My dad' (he) - рутина, глагол 'drives'." },
        "a1_ps_ex5_q10": { correct: "a", explanation: "'Birds' (they) - факт, глагол 'fly'." }
    };

    const checkButtons = document.querySelectorAll('.check-grammar-answers-btn');

    checkButtons.forEach(button => {
        button.addEventListener('click', function() {
            const formIdSuffix = this.dataset.formId; // e.g., "a1_ps_ex1"
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
