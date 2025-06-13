// grammar-exercise-logic.js
document.addEventListener('DOMContentLoaded', () => {
    // --- БАЗА ДАННЫХ С ПРАВИЛЬНЫМИ ОТВЕТАМИ Иa1_ps_ex2_q1": { correct: "b", explanation: "Для 'My father' (he) в Present Simple к глаголу добавляется окончание -s: works." },
        "a1_ps_ex2_q2": { correct: "c", explanation: "Для 'She' с глаголом 'teach' добавляется -es: teaches." },
        "a1_ps_ex2_q3": { correct: "b", explanation: "Для 'The cat' (it) в Present Simple к глаголу добавляется - ОБЪЯСНЕНИЯМИ ДЛЯ A1 - Present Simple ---
    // Ключ: data-form-id_qN (например, a1_ps_ex1_q1)
    const grammarCorrectAnswers = {
        // Упражнение 1: Утверждения (I, You, We, They)
        "a1_ps_ex1_q1": { correct: "a", explanation: "С местоимениемs: sleeps." },
        "a1_ps_ex2_q4": { correct: "b", explanation: "Для 'He' с глаголом 'go' используется форма 'goes'." },
        "a1_ps_ex2_q5": { correct: "b", explanation: "Для 'My mother' (she) в Present Simple к глаголу добавляется -s: cooks." },
        "a1_ps 'I' глагол используется в начальной форме: I read." },
        "a1_ps_ex1_q2": { correct: "a", explanation: "С местоимением 'We' глагол используется в начальной форме: We play." },
        "a1_ps_ex1_q3": {_ex2_q6": { correct: "b", explanation: "Для 'It' в Present Simple к глаголу добавляется -s: rains." },
        "a1_ps_ex2_q7": { correct: "b", explanation: "Для 'My friend' (he/she) в Present Simple к глаголу correct: "a", explanation: "С местоимением 'You' глагол используется в начальной форме: You speak." },
        "a1_ps_ex1_q4": { correct: "a", explanation: "С местоимением 'They' глагол используется в начальной форме: They live." },
        "a1 добавляется -s: speaks." },
        "a1_ps_ex2_q8": { correct: "b", explanation: "Для 'The bus' (it) в Present Simple к глаголу добавляется_ps_ex1_q5": { correct: "a", explanation: "'My friends' - это 'they', -s: arrives." },
        "a1_ps_ex2_q9": { correct: "b", explanation: "Для 'She' с глаголом 'have' используется форма 'has'." },
         глагол в начальной форме: My friends like." },
        "a1_ps_ex1_q6": { correct: "a", explanation: "С 'I' и регулярным действием 'every morning': I"a1_ps_ex2_q10": { correct: "b", explanation: "Для 'The Earth' (it) с глаголом 'go' используется форма 'goes'. Это общеизвестный факт." }, get up." },
        "a1_ps_ex1_q7": { correct: "a", explanation: "С 'You': You drink." },
        "a1_ps_ex1_q8

        // A1 - Present Simple - Упражнение 3 (data-form-id кнопки: a1_ps_ex3)
        "a1_ps_ex3_q1": { correct: "a": { correct: "a", explanation: "С 'We': We go." },
        "a1_ps_ex1_q9": { correct: "a", explanation: "С 'They': They study."", explanation: "Для 'I' в отрицании используется 'don't like'." },
        "a1_ps },
        "a1_ps_ex1_q10": { correct: "a", explanation:_ex3_q2": { correct: "b", explanation: "Для 'He' в отрицании используется "С 'I' глагол 'to have' имеет форму 'have'." },

        // Упражнение 'doesn't play'." },
        "a1_ps_ex3_q3": { correct: 2: Утверждения (He, She, It)
        "a1_ps_ex2_ "a", explanation: "Для 'We' в отрицании используется 'don't go'." },
        "a1q1": { correct: "b", explanation: "'My father' - это 'he', к глаголу добавляется_ps_ex3_q4": { correct: "c", explanation: "Для 'She' в отрицании используется 'doesn't work'." },
        "a1_ps_ex3_q5": { -s: works." },
        "a1_ps_ex2_q2": { correct: " correct: "b", explanation: "Для 'You' в отрицании используется 'don't study'." },
c", explanation: "'She', глагол оканчивается на -ch, добавляется -es: teaches." },
        "a1_ps_ex2_q3": { correct: "b", explanation: "'The        "a1_ps_ex3_q6": { correct: "b", explanation: "Для 'The dog' (it) в отрицании используется 'doesn't eat'." },
        "a1_ps cat' - это 'it', к глаголу добавляется -s: sleeps." },
        "a1_ps__ex3_q7": { correct: "b", explanation: "Для 'My parents' (they) в отрицании используется 'don't live'." },
        "a1_ps_ex3_q8ex2_q4": { correct: "b", explanation: "'He', глагол 'go' становится 'goes'." },
        "a1_ps_ex2_q5": { correct: "b", explanation: "'": { correct: "b", explanation: "Для 'It' в отрицании используется 'doesn't snow'." },
        "a1_ps_ex3_q9": { correct: "b", explanation: "My mother' - это 'she', к глаголу добавляется -s: cooks." },
        "a1_ps_ex2_q6": { correct: "b", explanation: "'It', к глаголу добавляДля 'I' в отрицании с 'have' используется 'don't have'." },
        "a1_ps_ex3_q10": { correct: "b", explanation: "Для 'He' в отрицании используетсяется -s: rains." },
        "a1_ps_ex2_q7": { correct: "b", explanation: "'My friend' (he/she), к глаголу добавляется -s: speaks." }, 'doesn't watch'." },

        // A1 - Present Simple - Упражнение 4 (data
        "a1_ps_ex2_q8": { correct: "b", explanation: "'The bus' (it), к глаголу добавляется -s: arrives." },
        "a1_ps-form-id кнопки: a1_ps_ex4)
        "a1_ps_ex4_ex2_q9": { correct: "b", explanation: "С 'She' глагол 'to have' имеет_q1": { correct: "a", explanation: "Для вопроса с 'you' используется 'Do'." },
        " форму 'has'." },
        "a1_ps_ex2_q10": { correct: "a1_ps_ex4_q2": { correct: "b", explanation: "Для вопроса с 'your friendb", explanation: "'The Earth' (it), глагол 'go' становится 'goes'. Это факт." },

        ' (he/she) используется 'Does'." },
        "a1_ps_ex4_q3": { correct: "a", explanation: "Для вопроса с 'they' используется 'Do'." },
        "a1_// Упражнение 3: Отрицания (don't / doesn't)
        "ps_ex4_q4": { correct: "b", explanation: "Для вопроса с 'it' используется 'Doesa1_ps_ex3_q1": { correct: "a", explanation: "Для 'I' в отрицании используется 'don't': I don't like." },
        "a1_ps_ex'." },
        "a1_ps_ex4_q5": { correct: "a", explanation: "Для вопроса с 'we' используется 'Do'." },
        "a1_ps_ex4_q6": {3_q2": { correct: "b", explanation: "Для 'He' в отрицании используется 'doesn't': He doesn't play." },
        "a1_ps_ex3_q3": correct: "b", explanation: "Для вопроса с 'your cat' (it) используется 'Does'." },
         { correct: "a", explanation: "Для 'We' в отрицании используется 'don't': We don"a1_ps_ex4_q7": { correct: "a", explanation: "Для вопроса с 'I' используется 'Do'." },
        "a1_ps_ex4_q8": { correct: "b't go." },
        "a1_ps_ex3_q4": { correct: "c", explanation: "Для 'She' в отрицании используется 'doesn't': She doesn't work." },
        "", explanation: "Для вопроса с 'he' используется 'Does'." },
        "a1_ps_ex4a1_ps_ex3_q5": { correct: "b", explanation: "Для 'You' в отрицании используется 'don't': You don't study." },
        "a1_ps__q9": { correct: "a", explanation: "Для вопроса с 'your parents' (they) используется 'Do'." },
        "a1_ps_ex4_q10": { correct: "b", explanationex3_q6": { correct: "b", explanation: "'The dog' (it), в отрицании ': "Для вопроса с 'she' используется 'Does'." },

        // A1 - Present Simple - Упражнениеdoesn't': The dog doesn't eat." },
        "a1_ps_ex3_q7": { correct: "b", explanation: "'My parents' (they), в отрицании 'don't 5 (data-form-id кнопки: a1_ps_ex5)
        "a1_ps': My parents don't live." },
        "a1_ps_ex3_q8": { correct:_ex5_q1": { correct: "b", explanation: "Факт, 'Water' (it) "b", explanation: "'It', в отрицании 'doesn't': It doesn't snow." },
 + boils." },
        "a1_ps_ex5_q2": { correct: "a", explanation: "        "a1_ps_ex3_q9": { correct: "b", explanation: "Для 'Рутина, 'I' + have." },
        "a1_ps_ex5_q3":I' в отрицании с 'have' используется 'don't have'." },
        "a1_ps_ { correct: "b", explanation: "Факт, 'The Earth' (it) + revolves." },
        "ex3_q10": { correct: "b", explanation: "Для 'He' в отрицании используетсяa1_ps_ex5_q4": { correct: "a", explanation: "Общее утверждение, 'Cats 'doesn't': He doesn't watch." },

        // Упражнение 4: Вопросы (Do /' (they) + like." },
        "a1_ps_ex5_q5": { correct: " Does)
        "a1_ps_ex4_q1": { correct: "a", explanation:b", explanation: "Расписание, 'My school' (it) + starts." },
        "a1 "Для вопроса с 'you' используется 'Do': Do you like?" },
        "a1_ps_ex4__ps_ex5_q6": { correct: "b", explanation: "Рутина, 'He' + visits." },
        "a1_ps_ex5_q7": { correct: "a", explanation:q2": { correct: "b", explanation: "'Your friend' (he/she), для вопроса используется 'Does "Рутина, 'We' + clean." },
        "a1_ps_ex5_q8":': Does your friend play?" },
        "a1_ps_ex4_q3": { correct: "a", explanation: "Для вопроса с 'they' используется 'Do': Do they live?" },
        "a1 { correct: "b", explanation: "Факт, 'The moon' (it) + shines." },
        "a1_ps_ex5_q9": { correct: "b", explanation: "Рутина, '_ps_ex4_q4": { correct: "b", explanation: "Для вопроса с 'it' используется 'Does': Does it often snow?" },
        "a1_ps_ex4_q5": {My dad' (he) + drives." },
        "a1_ps_ex5_q10 correct: "a", explanation: "Для вопроса с 'we' используется 'Do': Do we have?" },
        "": { correct: "a", explanation: "Факт, 'Birds' (they) + fly." }
    };

    const checkButtons = document.querySelectorAll('.check-grammar-answers-btn');

    checkButtons.forEach(button =>a1_ps_ex4_q6": { correct: "b", explanation: "'Your cat' ( {
        button.addEventListener('click', function() {
            const formIdSuffix = this.dataset.formit), для вопроса используется 'Does': Does your cat drink?" },
        "a1_ps_ex4_q7": { correct: "a", explanation: "Для вопроса с 'I' используется 'Do': Do I know youId; // e.g., "a1_ps_ex1"
            const formElement = this.?" },
        "a1_ps_ex4_q8": { correct: "b", explanation:closest('.grammar-exercises-form');
            if (!formElement) {
                console.error("Could not find parent form for button with data-form-id:", formIdSuffix);
                return;
            }
             "Для вопроса с 'he' используется 'Does': Does he speak English?" },
        "a1_ps_ex4const exercisesInForm = formElement.querySelectorAll('.grammar-exercise');
            const feedbackDiv = formElement.querySelector('.grammar-_q9": { correct: "a", explanation: "'Your parents' (they), для вопроса используется 'Dofeedback');
            let allCorrect = true;
            let feedbackHTML = `<h4>Результаты для "${this.textContent': Do your parents like?" },
        "a1_ps_ex4_q10": { correct: "b.replace('Проверить ', '')}":</h4>`;
            let exercisesAttempted = 0;

            ", explanation: "Для вопроса с 'she' используется 'Does': Does she go to bed early?" },

        // УexercisesInForm.forEach((exerciseDiv, index) => {
                const questionNumber = index + 1;пражнение 5: Факты и рутина
        "a1_ps_ex5_q1": {
                const firstRadioInQuestion = exerciseDiv.querySelector('.exercise-options input[type="radio"]');
                 correct: "b", explanation: "'Water' (it) - факт, к глаголу добавляется -s:if (!firstRadioInQuestion) {
                    console.warn(`No radio buttons found for question ${questionNumber} in form ${formIdSuffix}`);
                    return; 
                }
                const radioGroupName = firstRadioIn boils." },
        "a1_ps_ex5_q2": { correct: "a", explanationQuestion.name; // Получаем имя группы из HTML

                const questionTextP = exerciseDiv.querySelector('p strong');: "'I usually' - рутина, глагол 'have'." },
        "a1_ps_ex5_
                if (!questionTextP) return;
                const questionFullText = questionTextP.textContent;
q3": { correct: "b", explanation: "'The Earth' (it) - факт, глагол 'revol                const questionShortText = questionFullText.includes('. ') ? questionFullText.substring(questionFullText.ves'." },
        "a1_ps_ex5_q4": { correct: "a", explanation: "'indexOf('. ') + 2) : questionFullText;

                const selectedOption = exerciseDiv.querySelector(`inputCats' (they) - общий факт, глагол 'like'." },
        "a1_ps_ex5_q5": { correct: "b", explanation: "'My school' (it) - расписание, глагол[name="${radioGroupName}"]:checked`);
                
                feedbackHTML += `<p><strong>Вопрос ${questionNumber}:</strong> ${questionShortText}</p>`;

                if (selectedOption) {
                    exercisesAttempted++; 'starts'." },
        "a1_ps_ex5_q6": { correct: "b",
                    const userAnswer = selectedOption.value;
                    const answerKey = `${formIdSuffix}_q${question explanation: "'He often' - рутина, глагол 'visits'." },
        "a1_ps_ex5_q7": { correct: "a", explanation: "'We always' - рутина, глагол 'clean'."Number}`; // Ключ для базы ответов
                    const correctAnswerInfo = grammarCorrectAnswers[answerKey];

                    if (correctAnswerInfo && userAnswer.toLowerCase() === correctAnswerInfo.correct.toLowerCase()) {
                        feedbackHTML += `<p class },
        "a1_ps_ex5_q8": { correct: "b", explanation: "'The moon' (it) - факт, глагол 'shines'." },
        "a1_ps_="correct">Ваш ответ: "${selectedOption.parentElement.textContent.trim()}" - Верно! ✅</p>`;
                    } else {
                        allCorrect = false;
                        feedbackHTML += `<p class="incorrectex5_q9": { correct: "b", explanation: "'My dad' (he) - рутина, глагол">Ваш ответ: "${selectedOption.parentElement.textContent.trim()}" - Неверно. ❌</ 'drives'." },
        "a1_ps_ex5_q10": { correct: "p>`;
                        if (correctAnswerInfo) {
                            const correctLabelElement = exerciseDiv.querySelector(`.exercise-options inputa", explanation: "'Birds' (they) - факт, глагол 'fly'." }
    };

    const checkButtons = document.querySelectorAll('.check-grammar-answers-btn');

    checkButtons.forEach(button[value="${correctAnswerInfo.correct.toLowerCase()}"]`);
                            const correctLabelText = correctLabelElement ? correctLabelElement.parentElement.textContent.trim() : `(Правильный вариант: ${correctAnswerInfo.correct})`; => {
        button.addEventListener('click', function() {
            const formId = this.dataset.formId; // e.g., "a1_ps_ex1"
            const formElement = this.closest('.grammar
                            feedbackHTML += `<p>Правильный ответ: "${correctLabelText}"</p>`;
                        } else {
                            feedbackHTML += `<p><em>(Информация о правильном ответе для этого вопроса отсутствует: ${answerKey})-exercises-form');
            if (!formElement) {
                console.error("Could not find parent form</em></p>`;
                        }
                    }
                    if (correctAnswerInfo && correctAnswerInfo.explanation) { for button with data-form-id:", formId);
                return;
            }
            const exercisesInForm = formElement.querySelectorAll('.grammar-exercise');
            const feedbackDiv = formElement.querySelector('.grammar-
                        feedbackHTML += `<p class="explanation-text"><i>Объяснение: ${correctAnswerInfo.explanation}</i></p>`;
                    }
                } else {
                    allCorrect = false;
                    feedbackfeedback');
            let allCorrect = true;
            let feedbackHTML = `<h4>Результаты для "${this.textContent.replace('Проверить ', '')}":</h4>`;
            let exercisesAttempted = 0;

            HTML += `<p class="incorrect">На этот вопрос не дан ответ. ❌</p>`;
                }
                if (index < exercisesInForm.length - 1) {
                    feedbackHTML += '<hr>';
                }exercisesInForm.forEach((exerciseDiv, index) => {
                const questionNumber = index + 1;
                const radioGroupName = `q${questionNumber}_${formId}`;

                const questionTextP = exercise
            });

            if (exercisesAttempted === 0 && exercisesInForm.length > 0) {
                 feedbackHTML = `<h4>Результаты для "${this.textContent.replace('Проверить ', '')}":Div.querySelector('p strong');
                if (!questionTextP) return;
                const questionFullText =</h4><p>Пожалуйста, выполните упражнения.</p>`;
            } else if (exercisesAttempted > 0 questionTextP.textContent;
                const questionShortText = questionFullText.includes('. ') ? questionFullText && allCorrect) {
                feedbackHTML = `<h4>Результаты для "${this.textContent.replace('Прове.substring(questionFullText.indexOf('. ') + 2) : questionFullText;

                const selectedOptionрить ', '')}":</h4><p class="correct" style="text-align:center; font-weight: = exerciseDiv.querySelector(`input[name="${radioGroupName}"]:checked`);
                
                feedbackHTML += `<p><strong>Вопрос ${questionNumber}:</strong> ${questionShortText}</p>`;

                if (selectedOption) {
                    exercisesbold; font-size:1.2em;">Все ответы верны! Отлично! 🎉</p><hr>` + feedbackHTML;
            }

            if (feedbackDiv) {
                feedbackDiv.innerHTML = feedbackHTML;
                feedbackAttempted++;
                    const userAnswer = selectedOption.value;
                    const answerKey = `${formId}_qDiv.style.display = 'block';
                const headerOffset = document.querySelector('header')?.offsetHeight || ${questionNumber}`;
                    const correctAnswerInfo = grammarCorrectAnswers[answerKey];

                    if (correctAnswerInfo && userAnswer70;
                const elementPosition = feedbackDiv.getBoundingClientRect().top;
                const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
                
                window.scrollTo({
                     top: offsetPosition,
                     .toLowerCase() === correctAnswerInfo.correct.toLowerCase()) {
                        feedbackHTML += `<p class="correct">Ваш ответ: "${selectedOption.parentElement.textContent.trim()}" - Верно! ✅</p>`;
                    behavior: "smooth"
                });
            } else {
                console.error("Feedback div not found in} else {
                        allCorrect = false;
                        feedbackHTML += `<p class="incorrect">Ваш ответ: "${selectedOption.parentElement.textContent.trim()}" - Неверно. ❌</p>`;
                         form associated with button:", formIdSuffix);
            }
        });
    });
});
