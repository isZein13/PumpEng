// a2_2_grammar_modal-verbs-logic.js
document.addEventListener('DOMContentLoaded', () => {
    const grammarCorrectAnswers = {
        // --- Упражнение 1: Способность и возможность (can / can't) ---
        "a2_mv_ex1_q1": { correct: "c", explanation: "Птицы 'могут' летать (can), а собаки 'не могут' (can't)." },
        "a2_mv_ex1_q2": { correct: "b", explanation: "Рыба 'не может' (can't) жить без воды. Это невозможно." },
        "a2_mv_ex1_q3": { correct: "a", explanation: "Вопрос о способности ('умеешь ли ты?') задается с помощью 'Can'." },
        "a2_mv_ex1_q4": { correct: "c", explanation: "Я 'не могу' (can't) помочь, потому что занят. Отсутствие возможности." },
        "a2_mv_ex1_q5": { correct: "a", explanation: "Он 'может' (can) считать. Наличие способности." },
        "a2_mv_ex1_q6": { correct: "b", explanation: "Вопрос о разрешении и ответ на него: 'Can I use...?', 'Yes, you can'." },
        "a2_mv_ex1_q7": { correct: "b", explanation: "Я 'не могу' (can't) ничего видеть из-за темноты." },
        "a2_mv_ex1_q8": { correct: "c", explanation: "Для выражения способности в прошлом ('когда он был моложе') используется 'could'." },
        "a2_mv_ex1_q9": { correct: "c", explanation: "Мы 'сможем' (can) пойти. Условие дает возможность." },
        "a2_mv_ex1_q10": { correct: "a", explanation: "Сломанный компьютер означает, что я 'не могу' (can't) проверить почту." },

        // --- Упражнение 2: Обязательство и запрет (must / mustn't) ---
        "a2_mv_ex2_q1": { correct: "c", explanation: "'must' используется для выражения правила или сильного обязательства." },
        "a2_mv_ex2_q2": { correct: "b", explanation: "'mustn't' используется для выражения строгого запрета (нельзя рассказывать)." },
        "a2_mv_ex2_q3": { correct: "c", explanation: "'mustn't be late' - строгий запрет, нельзя опаздывать." },
        "a2_mv_ex2_q4": { correct: "b", explanation: "'must' используется для выражения сильной необходимости, личного обязательства." },
        "a2_mv_ex2_q5": { correct: "b", explanation: "'must be quiet' - это правило поведения в библиотеке." },
        "a2_mv_ex2_q6": { correct: "c", explanation: "Знак 'No parking' означает, что вы 'не должны' (mustn't) парковаться здесь." },
        "a2_mv_ex2_q7": { correct: "a", explanation: "'must go' - сильная необходимость, чтобы не пропустить поезд." },
        "a2_mv_ex2_q8": { correct: "b", explanation: "'mustn't forget' - строгий совет, который равносилен запрету на то, чтобы забыть." },
        "a2_mv_ex2_q9": { correct: "b", explanation: "'must finish' - обязательство, вызванное дедлайном." },
        "a2_mv_ex2_q10": { correct: "b", explanation: "'Forbidden' (запрещено) прямо указывает на использование 'mustn't'." },

        // --- Упражнение 3: Вероятность и разрешение (may / might) ---
        "a2_mv_ex3_q1": { correct: "b", explanation: "'I'm not sure' указывает на вероятность, поэтому подходит 'might'." },
        "a2_mv_ex3_q2": { correct: "a", explanation: "Предположение о погоде (может пойти дождь) выражается через 'may' или 'might'." },
        "a2_mv_ex3_q3": { correct: "c", explanation: "'I don't know' говорит о неуверенности, поэтому используется 'might' для предположения." },
        "a2_mv_ex3_q4": { correct: "a", explanation: "'may not' используется для выражения вероятности того, что что-то не произойдет." },
        "a2_mv_ex3_q5": { correct: "c", explanation: "Выражение вероятности: 'might be difficult' - возможно, будет сложно." },
        "a2_mv_ex3_q6": { correct: "a", explanation: "'may be busy' - предположение, почему не стоит звонить сейчас." },
        "a2_mv_ex3_q7": { correct: "c", explanation: "'we haven't decided yet' (еще не решили) указывает на вероятность, а не на точное намерение. Используем 'might'." },
        "a2_mv_ex3_q8": { correct: "b", explanation: "Для вежливого вопроса о разрешении используется 'May I...?'." },
        "a2_mv_ex3_q9": { correct: "b", explanation: "'I'm not sure' указывает на предположение, поэтому используем 'might'." },
        "a2_mv_ex3_q10": { correct: "a", explanation: "Предположение 'может быть, это правда' выражается через 'may'." },
        
        // --- Упражнение 4: Смешанная практика (Выбор по контексту) ---
        "a2_mv_ex4_q1": { correct: "c", explanation: "Сильный совет, близкий к обязательству, выражается через 'must'." },
        "a2_mv_ex4_q2": { correct: "a", explanation: "Речь идет о его способности читать, поэтому 'can'." },
        "a2_mv_ex4_q3": { correct: "b", explanation: "Неуверенность ('I don't know') указывает на вероятность ('may be wrong')." },
        "a2_mv_ex4_q4": { correct: "b", explanation: "Для запрета ('нельзя') используется 'mustn't'. 'Can't' означает физическую невозможность." },
        "a2_mv_ex4_q5": { correct: "c", explanation: "Вежливая просьба о помощи обычно выражается через 'Can you...?' или 'Could you...?'." },
        "a2_mv_ex4_q6": { correct: "c", explanation: "Сильная необходимость, вызванная обстоятельствами, выражается через 'must'." },
        "a2_mv_ex4_q7": { correct: "b", explanation: "Предупреждение о возможной опасности ('можешь поскользнуться') выражается через 'might' или 'may'." },
        "a2_mv_ex4_q8": { correct: "a", explanation: "Речь идет о его способности говорить на языках, поэтому 'can'." },
        "a2_mv_ex4_q9": { correct: "b", explanation: "'It's bad manners' (это плохие манеры) указывает на запрет, поэтому 'mustn't'." },
        "a2_mv_ex4_q10": { correct: "c", explanation: "Неуверенность ('We are not sure') указывает на вероятность ('might be late')." },

        // --- Упражнение 5: Найди ошибку / Выбери верное предложение ---
        "a2_mv_ex5_q1": { correct: "c", explanation: "После модальных глаголов не ставится частица 'to', и они не меняются по лицам (не 'musts')." },
        "a2_mv_ex5_q2": { correct: "b", explanation: "После 'can' глагол идет в начальной форме без '-s' и без 'to'." },
        "a2_mv_ex5_q3": { correct: "c", explanation: "Ошибка в варианте 'c': после 'might' не используется 'to'." },
        "a2_mv_ex5_q4": { correct: "b", explanation: "Ошибка в варианте 'b': отрицание для 'must' - это 'must not' (mustn't), а не 'don't must'." },
        "a2_mv_ex5_q5": { correct: "c", explanation: "Вопрос с 'can' строится вынесением 'can' на первое место. Частица 'to' не нужна." },
        "a2_mv_ex5_q6": { correct: "b", explanation: "Модальные глаголы не имеют окончания '-s' в 3-м лице ед.ч." },
        "a2_mv_ex5_q7": { correct: "c", explanation: "'May' и 'might' выражают вероятность, а 'must' выражает сильную уверенность или обязательство." },
        "a2_mv_ex5_q8": { correct: "c", explanation: "Ошибка в варианте 'c': после модальных глаголов используется инфинитив без '-ing'." },
        "a2_mv_ex5_q9": { correct: "a", explanation: "В специальном вопросе порядок слов: Wh-word + modal verb + subject + main verb." },
        "a2_mv_ex5_q10": { correct: "c", explanation: "Самый строгий запрет (prohibition) выражается через 'mustn't'. 'Can't' - это скорее невозможность, а 'may not' - отсутствие разрешения." }
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


