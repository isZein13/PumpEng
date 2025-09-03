// b2_9_grammar_cleft-sentences-logic.js
document.addEventListener('DOMContentLoaded', () => {
    const grammarCorrectAnswers = {
        // --- Упражнение 1: 'It'-clefts ---
        "b2_cs_ex1_q1": { correct: "b", explanation: "Действие 'called' в прошлом, поэтому используем 'It was'." },
        "b2_cs_ex1_q2": { correct: "c", explanation: "Для предметов (the film) используется 'that'." },
        "b2_cs_ex1_q3": { correct: "a", explanation: "Действие 'realized' в прошлом, поэтому 'It was'." },
        "b2_cs_ex1_q4": { correct: "c", explanation: "Для людей (Sarah) используется 'who' (или 'that')." },
        "b2_cs_ex1_q5": { correct: "a", explanation: "После глагола 'to be' в этой конструкции используется объектное местоимение (him). 'that' используется для дополнений." },
        "b2_cs_ex1_q6": { correct: "c", explanation: "'that' - это универсальное слово для соединения в 'it'-clefts, когда выделяется обстоятельство." },
        "b2_cs_ex1_q7": { correct: "a", explanation: "Действие 'was parked' в прошлом, поэтому 'It was'." },
        "b2_cs_ex1_q8": { correct: "d", explanation: "Для подлежащего-человека (the manager) используется 'who'." },
        "b2_cs_ex1_q9": { correct: "c", explanation: "Для выделения причины используется 'that'." },
        "b2_cs_ex1_q10": { correct: "d", explanation: "Для выделения обстоятельства времени ('last year') используется 'that'." },

        // --- Упражнение 2: 'Wh'-clefts (with 'What') ---
        "b2_cs_ex2_q1": { correct: "c", explanation: "Конструкция 'What + clause + is +...' используется для выделения дополнения." },
        "b2_cs_ex2_q2": { correct: "a", explanation: "Конструкция 'What + clause + was +...' выделяет то, что было сказано." },
        "b2_cs_ex2_q3": { correct: "b", explanation: "Конструкция 'What I like about...' выделяет конкретный аспект." },
        "b2_cs_ex2_q4": { correct: "d", explanation: "'What happened was...' - стандартная конструкция для выделения события." },
        "b2_cs_ex2_q5": { correct: "b", explanation: "'What we need to do is...' выделяет необходимое действие." },
        "b2_cs_ex2_q6": { correct: "c", explanation: "'What surprised me was...' выделяет причину удивления." },
        "b2_cs_ex2_q7": { correct: "b", explanation: "'What you're saying...' функционирует как подлежащее." },
        "b2_cs_ex2_q8": { correct: "d", explanation: "'What I find most difficult...' выделяет конкретную трудность." },
        "b2_cs_ex2_q9": { correct: "c", explanation: "'What I want to know is...' выделяет объект интереса." },
        "b2_cs_ex2_q10": { correct: "c", explanation: "'What matters most is...' выделяет самое важное." },

        // --- Упражнение 3: Other 'Wh'-clefts ---
        "b2_cs_ex3_q1": { correct: "c", explanation: "Для выделения места используется 'Where'." },
        "b2_cs_ex3_q2": { correct: "a", explanation: "Для выделения причины используется 'The reason why'." },
        "b2_cs_ex3_q3": { correct: "d", explanation: "Для выделения места используется 'Where'." },
        "b2_cs_ex3_q4": { correct: "c", explanation: "Для выделения предмета или абстрактного понятия используется 'The thing that' (или 'What')." },
        "b2_cs_ex3_q5": { correct: "c", explanation: "Для выделения причины используется 'The reason why'." },
        "b2_cs_ex3_q6": { correct: "a", explanation: "Для выделения места используется 'Where'." },
        "b2_cs_ex3_q7": { correct: "d", explanation: "Для выделения места используется 'Where'." },
        "b2_cs_ex3_q8": { correct: "a", explanation: "Для выделения причины используется 'The reason why'." },
        "b2_cs_ex3_q9": { correct: "b", explanation: "'Something that' (или 'What') используется для выделения вещи/понятия." },
        "b2_cs_ex3_q10": { correct: "b", explanation: "Для выделения места используется 'Where'." },
        
        // --- Упражнение 4: 'It'-clefts vs. 'Wh'-clefts ---
        "b2_cs_ex4_q1": { correct: "c", explanation: "Обе конструкции грамматически верны для выделения подлежащего." },
        "b2_cs_ex4_q2": { correct: "c", explanation: "Обе конструкции грамматически верны для выделения дополнения." },
        "b2_cs_ex4_q3": { correct: "a", explanation: "Для выделения обстоятельства времени ('yesterday') конструкция 'It'-cleft звучит наиболее естественно." },
        "b2_cs_ex4_q4": { correct: "c", explanation: "Обе конструкции грамматически верны для выделения подлежащего." },
        "b2_cs_ex4_q5": { correct: "b", explanation: "'It'-cleft с 'who' - это классический способ выделить человека-исполнителя действия." },
        "b2_cs_ex4_q6": { correct: "c", explanation: "Обе конструкции грамматически верны для выделения дополнения." },
        "b2_cs_ex4_q7": { correct: "a", explanation: "Хотя обе формы возможны, 'It'-cleft ('It's the blue one that I want') звучит немного естественнее для простого выбора." },
        "b2_cs_ex4_q8": { correct: "c", explanation: "Обе конструкции возможны и грамматически верны." },
        "b2_cs_ex4_q9": { correct: "c", explanation: "Обе конструкции грамматически верны для выделения подлежащего." },
        "b2_cs_ex4_q10": { correct: "b", explanation: "Для выделения причины ('that I was ill') наиболее подходит конструкция 'The reason why...'." },

        // --- Упражнение 5: Rephrasing Sentences ---
        "b2_cs_ex5_q1": { correct: "c", explanation: "Обе конструкции ('What...' и 'It was...') правильно выделяют 'the window'." },
        "b2_cs_ex5_q2": { correct: "d", explanation: "Все три варианта грамматически верны и выделяют 'her smile'." },
        "b2_cs_ex5_q3": { correct: "a", explanation: "'It was from Tom...' - самый прямой и естественный способ выделить 'from Tom'." },
        "b2_cs_ex5_q4": { correct: "c", explanation: "Обе конструкции ('It's...' и 'What...') правильно выделяют 'more time'." },
        "b2_cs_ex5_q5": { correct: "c", explanation: "Обе конструкции правильно выделяют причину." },
        "b2_cs_ex5_q6": { correct: "b", explanation: "'The place where...' - это Wh-cleft, который идеально подходит для выделения места." },
        "b2_cs_ex5_q7": { correct: "a", explanation: "Это правильная трансформация из Wh-cleft в It-cleft." },
        "b2_cs_ex5_q8": { correct: "c", explanation: "Обе конструкции ('When...' и 'It was...') правильно выделяют 'in June'." },
        "b2_cs_ex5_q9": { correct: "c", explanation: "Обе конструкции правильно выделяют объект беспокойства." },
        "b2_cs_ex5_q10": { correct: "c", explanation: "Обе конструкции правильно выделяют причину проблемы." }
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
