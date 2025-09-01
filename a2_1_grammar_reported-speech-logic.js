// a2_1_grammar_reported-speech-logic.js
document.addEventListener('DOMContentLoaded', () => {
    const grammarCorrectAnswers = {
        // --- Упражнение 1: Основы (Present Simple → Past Simple) ---
        "a2_rs_ex1_q1": { correct: "c", explanation: "Present Simple 'work' меняется на Past Simple 'worked'." },
        "a2_rs_ex1_q2": { correct: "b", explanation: "Present Simple 'like' меняется на Past Simple 'liked'." },
        "a2_rs_ex1_q3": { correct: "c", explanation: "Present Simple 'plays' меняется на Past Simple 'played'." },
        "a2_rs_ex1_q4": { correct: "c", explanation: "Present Simple 'live' меняется на Past Simple 'lived'." },
        "a2_rs_ex1_q5": { correct: "d", explanation: "Отрицание 'don't like' меняется на 'didn't like'. После 'didn't' используется начальная форма глагола." },
        "a2_rs_ex1_q6": { correct: "c", explanation: "Present Simple 'has' меняется на Past Simple 'had'." },
        "a2_rs_ex1_q7": { correct: "b", explanation: "Present Simple 'want' меняется на Past Simple 'wanted'." },
        "a2_rs_ex1_q8": { correct: "d", explanation: "Present Simple 'speak' меняется на Past Simple 'spoke'." },
        "a2_rs_ex1_q9": { correct: "c", explanation: "Отрицание 'doesn't eat' меняется на 'didn't eat'." },
        "a2_rs_ex1_q10": { correct: "c", explanation: "Present Simple 'feel' меняется на Past Simple 'felt'." },

        // --- Упражнение 2: Следующий шаг (Past Simple → Past Perfect) ---
        "a2_rs_ex2_q1": { correct: "b", explanation: "Past Simple 'visited' меняется на Past Perfect 'had visited'." },
        "a2_rs_ex2_q2": { correct: "c", explanation: "Past Simple 'bought' меняется на Past Perfect 'had bought'." },
        "a2_rs_ex2_q3": { correct: "d", explanation: "Past Simple 'saw' меняется на Past Perfect 'had seen'." },
        "a2_rs_ex2_q4": { correct: "c", explanation: "Отрицание 'didn't come' меняется на Past Perfect 'hadn't come'. 'came' - это V2, а нужна V3 - 'come'." },
        "a2_rs_ex2_q5": { correct: "b", explanation: "Past Simple 'made' меняется на Past Perfect 'had made'." },
        "a2_rs_ex2_q6": { correct: "c", explanation: "Past Simple 'went' меняется на Past Perfect 'had gone'." },
        "a2_rs_ex2_q7": { correct: "d", explanation: "Отрицание 'didn't finish' меняется на Past Perfect 'hadn't finished'. После 'hadn't' нужна V3 форма." },
        "a2_rs_ex2_q8": { correct: "b", explanation: "Past Simple 'took' меняется на Past Perfect 'had taken'." },
        "a2_rs_ex2_q9": { correct: "b", explanation: "Past Simple 'found' меняется на Past Perfect 'had found'." },
        "a2_rs_ex2_q10": { correct: "c", explanation: "Past Simple 'forgot' меняется на Past Perfect 'had forgotten'." },

        // --- Упражнение 3: Смешанная практика (Выбор сдвига) ---
        "a2_rs_ex3_q1": { correct: "a", explanation: "В прямой речи Present Simple ('play'), поэтому в косвенной нужен Past Simple ('played')." },
        "a2_rs_ex3_q2": { correct: "b", explanation: "В прямой речи Past Simple ('finished'), поэтому в косвенной нужен Past Perfect ('had finished')." },
        "a2_rs_ex3_q3": { correct: "b", explanation: "В прямой речи Present Simple ('don't go'), поэтому в косвенной нужен Past Simple ('didn't go')." },
        "a2_rs_ex3_q4": { correct: "b", explanation: "В прямой речи Past Simple ('called'), поэтому в косвенной нужен Past Perfect ('had called')." },
        "a2_rs_ex3_q5": { correct: "b", explanation: "В прямой речи Present Simple ('drink'), поэтому в косвенной нужен Past Simple ('drank')." },
        "a2_rs_ex3_q6": { correct: "c", explanation: "В прямой речи Past Simple ('didn't see'), поэтому в косвенной нужен Past Perfect ('hadn't seen')." },
        "a2_rs_ex3_q7": { correct: "c", explanation: "В прямой речи Present Simple ('live'), поэтому в косвенной нужен Past Simple ('lived')." },
        "a2_rs_ex3_q8": { correct: "b", explanation: "В прямой речи Past Simple ('lost'), поэтому в косвенной нужен Past Perfect ('had lost')." },
        "a2_rs_ex3_q9": { correct: "b", explanation: "В прямой речи Present Simple ('arrives'), поэтому в косвенной нужен Past Simple ('arrived')." },
        "a2_rs_ex3_q10": { correct: "b", explanation: "В прямой речи Past Simple ('didn't do'), поэтому в косвенной нужен Past Perfect ('hadn't done')." },

        // --- Упражнение 4: Фокус на деталях (Местоимения и слова времени) ---
        "a2_rs_ex4_q1": { correct: "c", explanation: "Местоимения 'I' и 'my' меняются на 'she' и 'her', так как говорит она." },
        "a2_rs_ex4_q2": { correct: "b", explanation: "'Tomorrow' меняется на 'the next day' в косвенной речи." },
        "a2_rs_ex4_q3": { correct: "b", explanation: "Все слова меняются: 'my' -> 'his', 'me' -> 'him', 'now' -> 'then'." },
        "a2_rs_ex4_q4": { correct: "c", explanation: "'Yesterday' меняется на 'the day before'." },
        "a2_rs_ex4_q5": { correct: "b", explanation: "'You' (ты) становится 'I' (я), а 'my' (мой) становится 'her' (ее)." },
        "a2_rs_ex4_q6": { correct: "c", explanation: "Слово места 'here' меняется на 'there'." },
        "a2_rs_ex4_q7": { correct: "b", explanation: "'Our' (наш) меняется на 'their' (их), а 'today' на 'that day'." },
        "a2_rs_ex4_q8": { correct: "b", explanation: "Если он сказал 'I will call you' (тебя), то в косвенной речи он сказал, что позвонит 'me' (мне)." },
        "a2_rs_ex4_q9": { correct: "c", explanation: "'This' меняется на 'that', а 'my' на 'her'." },
        "a2_rs_ex4_q10": { correct: "c", explanation: "'My' меняется на 'his', а 'tomorrow' на 'the next day'." },

        // --- Упражнение 5: Итоговая проверка (Выбор полного предложения) ---
        "a2_rs_ex5_q1": { correct: "c", explanation: "Правильный сдвиг времени (am -> was) и слова времени (today -> that day)." },
        "a2_rs_ex5_q2": { correct: "a", explanation: "Правильный сдвиг времени (visited -> had visited), местоимения (our -> their) и слова времени (yesterday -> the day before)." },
        "a2_rs_ex5_q3": { correct: "c", explanation: "Правильный сдвиг времени (works -> worked), местоимения (my -> his) и места (here -> there)." },
        "a2_rs_ex5_q4": { correct: "b", explanation: "Правильный сдвиг времени (didn't see -> hadn't seen) и местоимения (you -> me)." },
        "a2_rs_ex5_q5": { correct: "a", explanation: "Правильный сдвиг модального глагола (will -> would), местоимения (my -> his) и времени (tomorrow -> the next day)." },
        "a2_rs_ex5_q6": { correct: "b", explanation: "Правильный сдвиг времени (want -> wanted) и указательного местоимения (this -> that)." },
        "a2_rs_ex5_q7": { correct: "a", explanation: "Правильный сдвиг времени (didn't go -> hadn't gone) и слова времени (last year -> the year before)." },
        "a2_rs_ex5_q8": { correct: "c", explanation: "Правильный сдвиг времени (am waiting -> was waiting) и местоимения (my -> his)." },
        "a2_rs_ex5_q9": { correct: "a", explanation: "Правильный сдвиг модального глагола (can't -> couldn't) и местоимения (my -> her)." },
        "a2_rs_ex5_q10": { correct: "a", explanation: "Правильный сдвиг времени (gave -> had given) и местоимения (me -> her)." }
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
