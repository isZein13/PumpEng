// b2_5_grammar_future-in-the-past-logic.js
document.addEventListener('DOMContentLoaded', () => {
const grammarCorrectAnswers = {
// --- Упражнение 1: 'would' for Future in the Past ---
"b2_fitp_ex1_q1": { correct: "b", explanation: "После глагола 'promised' в прошлом, 'will' меняется на 'would'." },
"b2_fitp_ex1_q2": { correct: "b", explanation: "После глагола 'knew' в прошлом, 'will not' меняется на 'would not'." },
"b2_fitp_ex1_q3": { correct: "c", explanation: "В косвенной речи после 'said', 'will' становится 'would'." },
"b2_fitp_ex1_q4": { correct: "c", explanation: "После глагола 'thought' в прошлом, 'will' меняется на 'would'." },
"b2_fitp_ex1_q5": { correct: "c", explanation: "После глагола 'hoped' в прошлом, 'will' меняется на 'would'." },
"b2_fitp_ex1_q6": { correct: "b", explanation: "В косвенной речи 'will' всегда меняется на 'would'." },
"b2_fitp_ex1_q7": { correct: "a", explanation: "Описание будущего события с точки зрения прошлого ('imagined')." },
"b2_fitp_ex1_q8": { correct: "b", explanation: "После глагола 'told' в прошлом, 'will' меняется на 'would'." },
"b2_fitp_ex1_q9": { correct: "a", explanation: "После 'were sure' в прошлом, 'will' меняется на 'would'." },
"b2_fitp_ex1_q10": { correct: "c", explanation: "В косвенной речи после 'said', 'will' становится 'would'." },
// --- Упражнение 2: 'was/were going to' ---
    "b2_fitp_ex2_q1": { correct: "a", explanation: "Описывается намерение в прошлом, которое не было выполнено." },
    "b2_fitp_ex2_q2": { correct: "c", explanation: "Описывается план в прошлом ('We'), который был отменен." },
    "b2_fitp_ex2_q3": { correct: "a", explanation: "Описывается намерение в прошлом, которое не удалось осуществить." },
    "b2_fitp_ex2_q4": { correct: "b", explanation: "Предположение о чьих-то планах в прошлом." },
    "b2_fitp_ex2_q5": { correct: "c", explanation: "Описывается план в прошлом, который сорвался." },
    "b2_fitp_ex2_q6": { correct: "b", explanation: "Описывается знание о чьем-то намерении. 'were going to' подчеркивает план/намерение." },
    "b2_fitp_ex2_q7": { correct: "b", explanation: "Описывается план в прошлом, который не был реализован." },
    "b2_fitp_ex2_q8": { correct: "b", explanation: "Описывается ощущение, что что-то вот-вот произойдет в прошлом. 'was going to' подходит для этого." },
    "b2_fitp_ex2_q9": { correct: "c", explanation: "Слово 'plan' прямо указывает на использование 'was going to'." },
    "b2_fitp_ex2_q10": { correct: "c", explanation: "Описывается намерение, которое изменилось из-за новой информации." },

    // --- Упражнение 3: 'would' vs. 'was/were going to' ---
    "b2_fitp_ex3_q1": { correct: "b", explanation: "Передаем в косвенную речь конструкцию 'are going to', которая становится 'were going to'." },
    "b2_fitp_ex3_q2": { correct: "b", explanation: "Речь идет о судьбе, о будущем, которое было неизвестно в прошлом. 'would' подходит лучше для такого нарратива." },
    "b2_fitp_ex3_q3": { correct: "c", explanation: "'was going to happen' лучше передает ощущение неминуемого события, основанного на предчувствии." },
    "b2_fitp_ex3_q4": { correct: "c", explanation: "Упаковка сумок - это прямое доказательство плана. 'was going to go' - лучший выбор." },
    "b2_fitp_ex3_q5": { correct: "c", explanation: "'probably' указывает на предсказание, а не на твердый план. 'would' подходит лучше." },
    "b2_fitp_ex3_q6": { correct: "a", explanation: "Речь идет о вере или знании о будущем событии, а не о плане. 'would' подходит лучше." },
    "b2_fitp_ex3_q7": { correct: "b", explanation: "Описывается намерение, которое изменилось. 'was going to'." },
    "b2_fitp_ex3_q8": { correct: "b", explanation: "Речь идет о вере в будущее событие, а не о чьем-то плане. 'would'." },
    "b2_fitp_ex3_q9": { correct: "c", explanation: "Покупка билета - доказательство плана. 'was going to go'." },
    "b2_fitp_ex3_q10": { correct: "b", explanation: "После 'I didn't think' для выражения будущего в прошлом используется 'would'." },
    
    // --- Упражнение 4: Formal Structures ---
    "b2_fitp_ex4_q1": { correct: "a", explanation: "'was/were to' используется для официальных планов и расписаний в прошлом." },
    "b2_fitp_ex4_q2": { correct: "c", explanation: "'was/were about to' используется для действия, которое должно было произойти немедленно." },
    "b2_fitp_ex4_q3": { correct: "c", explanation: "Речь идет об официальном расписании вступления закона в силу. 'was to'." },
    "b2_fitp_ex4_q4": { correct: "b", explanation: "Она была на грани того, чтобы сказать что-то. 'was about to'." },
    "b2_fitp_ex4_q5": { correct: "a", explanation: "Речь идет о формальной договоренности, плане. 'were to'." },
    "b2_fitp_ex4_q6": { correct: "c", explanation: "Мы были готовы сесть в самолет в тот самый момент. 'were about to'." },
    "b2_fitp_ex4_q7": { correct: "a", explanation: "Официальный план, о котором было известно заранее. 'was to'." },
    "b2_fitp_ex4_q8": { correct: "b", explanation: "Он был на грани того, чтобы спросить. 'was about to'." },
    "b2_fitp_ex4_q9": { correct: "a", explanation: "Описывается официальный план, который был частью другого, нереального условия. 'were to'." },
    "b2_fitp_ex4_q10": { correct: "b", explanation: "Корабль был готов отплыть в тот самый момент. 'was about to'." },

    // --- Упражнение 5: Mixed Practice in Context ---
    "b2_fitp_ex5_q1": { correct: "c", explanation: "Лучше всего передает несбывшееся намерение. 'was going to call'." },
    "b2_fitp_ex5_q2": { correct: "b", explanation: "Официальное условие в договоре. 'were to'." },
    "b2_fitp_ex5_q3": { correct: "d", explanation: "Предчувствие или вера в будущее из прошлого. 'would'." },
    "b2_fitp_ex5_q4": { correct: "c", explanation: "Действие, которое было на грани совершения. 'was about to'." },
    "b2_fitp_ex5_q5": { correct: "a", explanation: "Описывается официальный план. 'were to meet'." },
    "b2_fitp_ex5_q6": { correct: "a", explanation: "Знание о будущем состоянии из прошлого. 'would be cold'." },
    "b2_fitp_ex5_q7": { correct: "c", explanation: "Официальный маршрут или расписание в прошлом. 'was to visit'." },
    "b2_fitp_ex5_q8": { correct: "b", explanation: "Он был на грани того, чтобы сдаться. 'was about to give up'." },
    "b2_fitp_ex5_q9": { correct: "a", explanation: "Убежденность в будущем событии из прошлого. 'would never understand'." },
    "b2_fitp_ex5_q10": { correct: "b", explanation: "Описание намерения, которое было прервано. 'was going to buy'." }
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
