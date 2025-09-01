// a2_10_grammar_relative-clauses-logic.js
document.addEventListener('DOMContentLoaded', () => {
const grammarCorrectAnswers = {
// --- Упражнение 1: 'who' для людей ---
"a2_rc_ex1_q1": { correct: "a", explanation: "The woman - это человек, поэтому используем 'who'." },
"a2_rc_ex1_q2": { correct: "c", explanation: "A man - это человек, поэтому используем 'who'." },
"a2_rc_ex1_q3": { correct: "a", explanation: "The person - это человек, поэтому используем 'who'." },
"a2_rc_ex1_q4": { correct: "b", explanation: "The student - это человек, поэтому используем 'who'." },
"a2_rc_ex1_q5": { correct: "c", explanation: "People - это люди, поэтому используем 'who'." },
"a2_rc_ex1_q6": { correct: "a", explanation: "The girl - это человек, поэтому используем 'who' (или that)." },
"a2_rc_ex1_q7": { correct: "b", explanation: "Someone - это кто-то (человек), поэтому используем 'who'." },
"a2_rc_ex1_q8": { correct: "c", explanation: "The actor - это человек, поэтому используем 'who'." },
"a2_rc_ex1_q9": { correct: "a", explanation: "The children - это люди, поэтому используем 'who'." },
"a2_rc_ex1_q10": { correct: "b", explanation: "The manager - это человек, поэтому используем 'who'." },
// --- Упражнение 2: 'which' и 'that' для предметов ---
    "a2_rc_ex2_q1": { correct: "b", explanation: "The book - это предмет, поэтому используем 'which' или 'that'." },
    "a2_rc_ex2_q2": { correct: "c", explanation: "The car - это предмет, поэтому используем 'which' или 'that'." },
    "a2_rc_ex2_q3": { correct: "a", explanation: "Films - это предметы, поэтому используем 'which' или 'that'." },
    "a2_rc_ex2_q4": { correct: "b", explanation: "The cheese - это предмет, поэтому используем 'which' или 'that'." },
    "a2_rc_ex2_q5": { correct: "c", explanation: "The keys - это предметы, поэтому используем 'which' или 'that'." },
    "a2_rc_ex2_q6": { correct: "b", explanation: "The dog - это животное, поэтому используем 'which' или 'that'." },
    "a2_rc_ex2_q7": { correct: "c", explanation: "The watch - это предмет, поэтому используем 'which' или 'that'." },
    "a2_rc_ex2_q8": { correct: "a", explanation: "The phone - это предмет, поэтому используем 'which' или 'that'." },
    "a2_rc_ex2_q9": { correct: "b", explanation: "The bus - это предмет, поэтому используем 'which' или 'that'." },
    "a2_rc_ex2_q10": { correct: "c", explanation: "The company - это организация (предмет), поэтому используем 'which' или 'that'." },

    // --- Упражнение 3: 'whose' для принадлежности ---
    "a2_rc_ex3_q1": { correct: "b", explanation: "Речь идет о машине мужчины (man's car), поэтому используем 'whose' для принадлежности." },
    "a2_rc_ex3_q2": { correct: "a", explanation: "Речь идет о брате друга (friend's brother), поэтому 'whose'." },
    "a2_rc_ex3_q3": { correct: "c", explanation: "Речь идет о телефоне девочки (girl's phone), поэтому 'whose'." },
    "a2_rc_ex3_q4": { correct: "a", explanation: "Речь идет о крыше дома (house's roof), поэтому 'whose'." },
    "a2_rc_ex3_q5": { correct: "c", explanation: "Речь идет о домашней работе студента (student's homework), поэтому 'whose'." },
    "a2_rc_ex3_q6": { correct: "a", explanation: "Речь идет о хозяине собаки (dog's owner), поэтому 'whose'." },
    "a2_rc_ex3_q7": { correct: "b", explanation: "Речь идет об отце мужчины (man's father), поэтому 'whose'." },
    "a2_rc_ex3_q8": { correct: "c", explanation: "Речь идет о велосипеде мальчика (boy's bicycle), поэтому 'whose'." },
    "a2_rc_ex3_q9": { correct: "a", explanation: "Речь идет о лапе кота (cat's leg), поэтому 'whose'." },
    "a2_rc_ex3_q10": { correct: "b", explanation: "Речь идет о книгах автора (author's books), поэтому 'whose'." },
    
    // --- Упражнение 4: 'where' для мест ---
    "a2_rc_ex4_q1": { correct: "c", explanation: "The house - это место, где происходило действие (я рос). Используем 'where'." },
    "a2_rc_ex4_q2": { correct: "b", explanation: "A place - это место, где происходит действие (можно пить кофе). Используем 'where'." },
    "a2_rc_ex4_q3": { correct: "b", explanation: "The park - это место, где произошло событие (мы встретились). Используем 'where'." },
    "a2_rc_ex4_q4": { correct: "b", explanation: "The shop - это место, где произошло действие (ты купил туфли). Используем 'where'." },
    "a2_rc_ex4_q5": { correct: "b", explanation: "The hotel - это место, где мы останавливались. Используем 'where'." },
    "a2_rc_ex4_q6": { correct: "b", explanation: "The city - это место, где родились родители. Используем 'where'." },
    "a2_rc_ex4_q7": { correct: "c", explanation: "A library - это место, где можно читать книги. Используем 'where'." },
    "a2_rc_ex4_q8": { correct: "b", explanation: "The restaurant - это место, где мы ужинали. Используем 'where'." },
    "a2_rc_ex4_q9": { correct: "b", explanation: "A small village - это место, где никто не жил. Используем 'where'." },
    "a2_rc_ex4_q10": { correct: "a", explanation: "The room - это место, где проходят встречи. Используем 'where'." },

    // --- Упражнение 5: Смешанная практика ---
    "a2_rc_ex5_q1": { correct: "b", explanation: "The girl - человек, поэтому 'who' или 'that'." },
    "a2_rc_ex5_q2": { correct: "c", explanation: "A book - предмет, поэтому 'which' или 'that'." },
    "a2_rc_ex5_q3": { correct: "a", explanation: "The hospital - место, где произошло событие (я родился), поэтому 'where'." },
    "a2_rc_ex5_q4": { correct: "b", explanation: "Речь о муже женщины (woman's husband), поэтому используется притяжательное 'whose'." },
    "a2_rc_ex5_q5": { correct: "c", explanation: "The restaurant - место, где мы ели, поэтому 'where'." },
    "a2_rc_ex5_q6": { correct: "b", explanation: "The food - предмет, поэтому 'which' или 'that'." },
    "a2_rc_ex5_q7": { correct: "b", explanation: "A person - человек, поэтому 'who' или 'that'." },
    "a2_rc_ex5_q8": { correct: "a", explanation: "Речь о саде дома (house's garden), поэтому 'whose'." },
    "a2_rc_ex5_q9": { correct: "c", explanation: "The town - место, где вырос дедушка, поэтому 'where'." },
    "a2_rc_ex5_q10": { correct: "b", explanation: "Речь о рейсе людей (people's flight), поэтому 'whose'." }
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
