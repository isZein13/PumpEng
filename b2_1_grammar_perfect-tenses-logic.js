// b2_1_grammar_perfect-tenses-logic.js
document.addEventListener('DOMContentLoaded', () => {
    const grammarCorrectAnswers = {
        // --- Упражнение 1: Present Perfect Simple vs. Continuous ---
        "b2_pt_ex1_q1": { correct: "b", explanation: "Акцент на длительности ('all day'), которая привела к результату (усталость). Используем Continuous." },
        "b2_pt_ex1_q2": { correct: "b", explanation: "Акцент на результате, количестве (три книги). Используем Simple." },
        "b2_pt_ex1_q3": { correct: "a", explanation: "Вопрос 'How long' спрашивает о длительности процесса. Используем Continuous." },
        "b2_pt_ex1_q4": { correct: "a", explanation: "'Know' - это глагол состояния (stative verb), который не используется в Continuous." },
        "b2_pt_ex1_q5": { correct: "b", explanation: "Акцент на длительности просмотра ('for hours'). Используем Continuous." },
        "b2_pt_ex1_q6": { correct: "b", explanation: "Действие не завершено ('only halfway through'), акцент на процессе. Используем Continuous." },
        "b2_pt_ex1_q7": { correct: "a", explanation: "Акцент на завершенном действии и его результате (новое платье). Используем Simple." },
        "b2_pt_ex1_q8": { correct: "b", explanation: "'feel' может быть и статичным, и динамичным. 'Recently' часто используется с Continuous для описания продолжающегося состояния." },
        "b2_pt_ex1_q9": { correct: "b", explanation: "Вопрос 'How many times' спрашивает о количестве, результате. Используем Simple." },
        "b2_pt_ex1_q10": { correct: "a", explanation: "'Believe' - это глагол состояния, который не используется в Continuous." },

        // --- Упражнение 2: Past Perfect Simple vs. Continuous ---
        "b2_pt_ex2_q1": { correct: "b", explanation: "Злость - результат длительного процесса ('all morning'). Используем Continuous." },
        "b2_pt_ex2_q2": { correct: "a", explanation: "Действие (начало встречи) завершилось до другого действия (моего прибытия). 'already' подчеркивает завершенность. Используем Simple." },
        "b2_pt_ex2_q3": { correct: "c", explanation: "Акцент на длительности процесса ('for about an hour'), который происходил до того, как машина сломалась. Используем Continuous." },
        "b2_pt_ex2_q4": { correct: "a", explanation: "Акцент на факте опыта (или его отсутствия) до полета. Используем Simple." },
        "b2_pt_ex2_q5": { correct: "b", explanation: "Мокрая земля - результат длительного процесса (дождь шел часами). Используем Continuous." },
        "b2_pt_ex2_q6": { correct: "a", explanation: "'By the time' указывает на завершенность действия к моменту в прошлом. Используем Simple." },
        "b2_pt_ex2_q7": { correct: "b", explanation: "Руки в муке - результат длительного процесса выпечки. Используем Continuous." },
        "b2_pt_ex2_q8": { correct: "a", explanation: "Акцент на результате (она изменилась) до момента, как я ее не узнал. Используем Simple." },
        "b2_pt_ex2_q9": { correct: "b", explanation: "Одышка - результат длительного процесса (бежали). Используем Continuous." },
        "b2_pt_ex2_q10": { correct: "a", explanation: "Вопрос 'How long' о длительности процесса до другого момента в прошлом. Используем Continuous." },

        // --- Упражнение 3: Future Perfect Simple vs. Continuous ---
        "b1_pt_ex3_q1": { correct: "a", explanation: "Акцент на завершении проекта к конкретному сроку. Используем Simple." },
        "b1_pt_ex3_q2": { correct: "b", explanation: "Акцент на том, как долго будет длиться процесс проживания к моменту в будущем. Используем Continuous." },
        "b1_pt_ex3_q3": { correct: "a", explanation: "Акцент на результате к моменту в будущем (еда будет съедена). Используем Simple." },
        "b1_pt_ex3_q4": { correct: "b", explanation: "Акцент на длительности работы к моменту в будущем. Используем Continuous." },
        "b1_pt_ex3_q5": { correct: "a", explanation: "Акцент на результате (деньги будут накоплены). Используем Simple." },
        "b1_pt_ex3_q6": { correct: "b", explanation: "Акцент на том, как долго будет длиться полет к моменту приземления. Используем Continuous." },
        "b1_pt_ex3_q7": { correct: "a", explanation: "Речь идет о том, что действие не будет завершено к сроку. Используем Simple." },
        "b1_pt_ex3_q8": { correct: "b", explanation: "Акцент на том, как долго будет длиться процесс изучения к моменту в будущем. Используем Continuous." },
        "b1_pt_ex3_q9": { correct: "a", explanation: "Акцент на завершении действия (начало фильма) к моменту. Используем Simple." },
        "b1_pt_ex3_q10": { correct: "b", explanation: "Вопрос 'How long' о длительности процесса к моменту в будущем. Используем Continuous." },
        
        // --- Упражнение 4: Choosing the Right Perfect Tense (Mixed) ---
        "b2_pt_ex4_q1": { correct: "a", explanation: "'yet' и связь с настоящим (не могу пойти гулять). Present Perfect Simple." },
        "b2_pt_ex4_q2": { correct: "c", explanation: "'by next month' указывает на завершение к моменту в будущем. Future Perfect Simple." },
        "b2_pt_ex4_q3": { correct: "b", explanation: "Действие (работал) произошло до другого действия в прошлом (уволился). Past Perfect Simple." },
        "b2_pt_ex4_q4": { correct: "c", explanation: "'This is the first time' - классический маркер Present Perfect Simple." },
        "b2_pt_ex4_q5": { correct: "b", explanation: "Осознание (в прошлом) того, что он видел фильм до этого момента. Past Perfect Simple." },
        "b2_pt_ex4_q6": { correct: "c", explanation: "'by then' указывает на завершение действия к моменту в будущем. Future Perfect Simple." },
        "b2_pt_ex4_q7": { correct: "a", explanation: "'for weeks' указывает на период, который продолжается до настоящего момента. Present Perfect Simple." },
        "b2_pt_ex4_q8": { correct: "b", explanation: "Они ушли до того, как я позвонил. Past Perfect Simple." },
        "b2_pt_ex4_q9": { correct: "c", explanation: "'By the end of our trip' (к концу поездки) указывает на результат в будущем. Future Perfect Simple." },
        "b2_pt_ex4_q10": { correct: "a", explanation: "'just' и результат в настоящем ('He looks tired'). Present Perfect Simple." },

        // --- Упражнение 5: Sentence Transformation ---
        "b1_pt_ex5_q1": { correct: "b", explanation: "Ситуация описывает процесс, который начался в прошлом и продолжается сейчас. Present Perfect Continuous." },
        "b1_pt_ex5_q2": { correct: "a", explanation: "Действие 'finished' произошло до действия 'went home'. Past Perfect Simple." },
        "b1_pt_ex5_q3": { correct: "b", explanation: "Действие 'checked in' завершится к моменту в будущем (7:30 PM). Future Perfect Simple." },
        "b1_pt_ex5_q4": { correct: "b", explanation: "Усталость - результат длительного процесса. Present Perfect Continuous." },
        "b1_pt_ex5_q5": { correct: "b", explanation: "Процесс ожидания длился до другого момента в прошлом. Past Perfect Continuous." },
        "b1_pt_ex5_q6": { correct: "a", explanation: "Акцент на количестве, на результате до настоящего момента. Present Perfect Simple." },
        "b1_pt_ex5_q7": { correct: "a", explanation: "Акцент на том, как долго будет длиться процесс к моменту в будущем. Future Perfect Continuous." },
        "b1_pt_ex5_q8": { correct: "a", explanation: "Он не смог войти, потому что до этого потерял ключи. Past Perfect Simple." },
        "b1_pt_ex5_q9": { correct: "b", explanation: "Действие 'finished' завершится к моменту в будущем (4:15 PM). Future Perfect Simple." },
        "b1_pt_ex5_q10": { correct: "b", explanation: "Акцент на длительности процесса, который начался в прошлом и все еще продолжается. Present Perfect Continuous." }
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
