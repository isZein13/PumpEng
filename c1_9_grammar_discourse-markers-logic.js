// c1_9_grammar_discourse-markers-logic.js
document.addEventListener('DOMContentLoaded', () => {
    const grammarCorrectAnswers = {
        // --- Упражнение 1: Contrast & Concession ---
        "c1_dm_ex1_q1": { correct: "c", explanation: "'However' (однако) вводит контрастирующую идею." },
        "c1_dm_ex1_q2": { correct: "b", explanation: "'Despite' используется перед существительным или герундием для выражения уступки. 'Although' требует подлежащего и сказуемого." },
        "c1_dm_ex1_q3": { correct: "b", explanation: "'On the other hand' (с другой стороны) идеально подходит для сравнения двух противоположных фактов." },
        "c1_dm_ex1_q4": { correct: "a", explanation: "'In spite of' (несмотря на) - синоним 'despite' и используется перед существительным." },
        "c1_dm_ex1_q5": { correct: "a", explanation: "'Nevertheless' (тем не менее) показывает контраст, несмотря на предыдущее утверждение." },
        "c1_dm_ex1_q6": { correct: "d", explanation: "'Although' (хотя) используется перед придаточным предложением с подлежащим и сказуемым." },
        "c1_dm_ex1_q7": { correct: "a", explanation: "'On the other hand' сравнивает два разных аспекта городской жизни." },
        "c1_dm_ex1_q8": { correct: "c", explanation: "'Nevertheless' (тем не менее) показывает, что он сделал что-то вопреки знанию о риске." },
        "c1_dm_ex1_q9": { correct: "a", explanation: "'Despite' используется перед существительным (his lack of experience)." },
        "c1_dm_ex1_q10": { correct: "b", explanation: "'However' вводит контраст: рейс задержали, но компенсации не предложили." },

        // --- Упражнение 2: Addition & Emphasis ---
        "c1_dm_ex2_q1": { correct: "b", explanation: "'Furthermore' (более того) добавляет еще один сильный аргумент." },
        "c1_dm_ex2_q2": { correct: "d", explanation: "'In addition' (вдобавок) добавляет еще одну характеристику отеля." },
        "c1_dm_ex2_q3": { correct: "a", explanation: "'Moreover' (кроме того) добавляет еще одну похожую по важности информацию." },
        "c1_dm_ex2_q4": { correct: "b", explanation: "'What's more' (более того) - неформальный способ добавить усиливающий аргумент." },
        "c1_dm_ex2_q5": { correct: "c", explanation: "'Indeed' (в самом деле) используется для усиления и подтверждения предыдущего утверждения." },
        "c1_dm_ex2_q6": { correct: "a", explanation: "'Moreover' добавляет еще один важный аспект." },
        "c1_dm_ex2_q7": { correct: "b", explanation: "'in fact' (на самом деле) используется для усиления или уточнения, часто превосходя ожидания." },
        "c1_dm_ex2_q8": { correct: "b", explanation: "'In addition' добавляет еще одну положительную характеристику." },
        "c1_dm_ex2_q9": { correct: "b", explanation: "'Furthermore' добавляет еще один аргумент в пользу хорошей презентации." },
        "c1_dm_ex2_q10": { correct: "c", explanation: "'What's more' - неформальный и выразительный способ добавить еще один плюс." },

        // --- Упражнение 3: Result & Consequence ---
        "c1_dm_ex3_q1": { correct: "b", explanation: "'consequently' (следовательно, в результате) показывает логический результат." },
        "c1_dm_ex3_q2": { correct: "c", explanation: "'As a result' (в результате) прямо указывает на следствие инвестиций." },
        "c1_dm_ex3_q3": { correct: "a", explanation: "'Therefore' (поэтому) показывает логическое следствие задержки рейса." },
        "c1_dm_ex3_q4": { correct: "a", explanation: "'Thus' (таким образом) - формальный способ показать результат." },
        "c1_dm_ex3_q5": { correct: "b", explanation: "'as a result' (в результате) показывает следствие плохого управления." },
        "c1_dm_ex3_q6": { correct: "c", explanation: "'Therefore' (поэтому, следовательно) показывает логический вывод жюри." },
        "c1_dm_ex3_q7": { correct: "a", explanation: "'Consequently' показывает прямое следствие того, что он забыл завести будильник." },
        "c1_dm_ex3_q8": { correct: "c", explanation: "'As a result' показывает следствие отключения электричества." },
        "c1_dm_ex3_q9": { correct: "a", explanation: "'Therefore' показывает логическое следствие его образа жизни." },
        "c1_dm_ex3_q10": { correct: "a", explanation: "'Thus' (таким образом) - формальный способ показать результат потери клиента." },
        
        // --- Упражнение 4: Structuring & Sequencing ---
        "c1_dm_ex4_q1": { correct: "b", explanation: "'To begin with' (для начала) используется для введения первого пункта." },
        "c1_dm_ex4_q2": { correct: "c", explanation: "'Subsequently' (впоследствии, затем) показывает последующее действие." },
        "c1_dm_ex4_q3": { correct: "d", explanation: "'Overall' (в общем и целом) используется для подведения общего итога." },
        "c1_dm_ex4_q4": { correct: "c", explanation: "'Finally' (в конце концов) используется для обозначения последнего шага в процессе." },
        "c1_dm_ex4_q5": { correct: "a", explanation: "'In the first place' (во-первых) вводит первый и основной аргумент." },
        "c1_dm_ex4_q6": { correct: "b", explanation: "'After that' (после этого) указывает на следующий шаг в последовательности." },
        "c1_dm_ex4_q7": { correct: "a", explanation: "'Subsequently' (впоследствии) показывает, что произошло позже." },
        "c1_dm_ex4_q8": { correct: "c", explanation: "'To conclude' (в заключение) вводит заключительную часть речи или текста." },
        "c1_dm_ex4_q9": { correct: "a", explanation: "'In summary' (итак, подводя итог) используется для обобщения сказанного." },
        "c1_dm_ex4_q10": { correct: "c", explanation: "'First of all' (прежде всего) - стандартный способ начать презентацию или перечисление." },

        // --- Упражнение 5: Mixed Practice in Context ---
        "c1_dm_ex5_q1": { correct: "b", explanation: "Хорошая погода - причина, решение пойти гулять - следствие. 'therefore'." },
        "c1_dm_ex5_q2": { correct: "a", explanation: "Высокая стоимость жизни - причина переезда. 'As a result of'." },
        "c1_dm_ex5_q3": { correct: "c", explanation: "Добавление еще одного положительного аспекта отчета. 'Furthermore'." },
        "c1_dm_ex5_q4": { correct: "b", explanation: "Алиби - причина, вывод - следствие. 'thus'." },
        "c1_dm_ex5_q5": { correct: "c", explanation: "Противопоставление: учил долго, но все равно трудно. 'Nevertheless'." },
        "c1_dm_ex5_q6": { correct: "a", explanation: "Противопоставление: пробки были ужасные, однако он приехал вовремя. 'However'." },
        "c1_dm_ex5_q7": { correct: "b", explanation: "'Despite' используется перед noun phrase 'the fact that...'." },
        "c1_dm_ex5_q8": { correct: "b", explanation: "Фраза для подведения итогов в конце встречи. 'In conclusion'." },
        "c1_dm_ex5_q9": { correct: "c", explanation: "Опоздание - это результат того, что она пропустила поезд. 'as a result'." },
        "c1_dm_ex5_q10": { correct: "c", explanation: "Добавление еще одного важного требования. 'What's more'." }
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
