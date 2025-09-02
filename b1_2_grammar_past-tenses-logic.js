// b1_2_grammar_past-tenses-logic.js
document.addEventListener('DOMContentLoaded', () => {
    const grammarCorrectAnswers = {
        // --- Упражнение 1: Past Simple (Review) ---
        "b1_ptc_ex1_q1": { correct: "b", explanation: "Действие завершено в прошлом, указано время ('last weekend'). 'visit' - правильный глагол, добавляем -ed." },
        "b1_ptc_ex1_q2": { correct: "a", explanation: "Действие завершено ('yesterday'). 'buy' - неправильный глагол, вторая форма - 'bought'." },
        "b1_ptc_ex1_q3": { correct: "c", explanation: "Отрицание в Past Simple: didn't + V1 (go)." },
        "b1_ptc_ex1_q4": { correct: "a", explanation: "Вопрос в Past Simple: Did + subject + V1 (see)?" },
        "b1_ptc_ex1_q5": { correct: "b", explanation: "Действие завершено ('two hours ago'). 'write' - неправильный глагол, вторая форма - 'wrote'." },
        "b1_ptc_ex1_q6": { correct: "a", explanation: "Период времени полностью в прошлом (2005-2015), поэтому Past Simple." },
        "b1_ptc_ex1_q7": { correct: "b", explanation: "Отрицание с глаголом 'to be' в прошлом для مفردго числа ('The film') - 'wasn't'." },
        "b1_ptc_ex1_q8": { correct: "c", explanation: "Вопрос в Past Simple: Wh-word + did + subject + V1 (go)?" },
        "b1_ptc_ex1_q9": { correct: "a", explanation: "'find' - неправильный глагол, вторая форма - 'found'." },
        "b1_ptc_ex1_q10": { correct: "b", explanation: "Событие произошло давно в прошлом, поэтому Past Simple 'fell'." },

        // --- Упражнение 2: Past Continuous (Review) ---
        "b1_ptc_ex2_q1": { correct: "b", explanation: "Указан конкретный момент в прошлом ('At 7 PM yesterday'), действие было в процессе." },
        "b1_ptc_ex2_q2": { correct: "b", explanation: "Короткое действие (called) прервало длительное (were you doing?)." },
        "b1_ptc_ex2_q3": { correct: "a", explanation: "Фоновое действие (шел дождь), которое было в процессе, когда я ушел." },
        "b1_ptc_ex2_q4": { correct: "b", explanation: "'While' указывает на два одновременных длительных действия в прошлом." },
        "b1_ptc_ex2_q5": { correct: "a", explanation: "Отрицание процесса в конкретный момент прошлого: wasn't sleeping." },
        "b1_ptc_ex2_q6": { correct: "b", explanation: "Описание фоновой атмосферы в прошлом." },
        "b1_ptc_ex2_q7": { correct: "b", explanation: "Вопрос о процессе в конкретный момент прошлого." },
        "b1_ptc_ex2_q8": { correct: "b", explanation: "'As' (в то время как) вводит длительное фоновое действие." },
        "b1_ptc_ex2_q9": { correct: "b", explanation: "Короткое действие (hurt) произошло во время длительного (was lifting)." },
        "b1_ptc_ex2_q10": { correct: "b", explanation: "Они не были в процессе уделения внимания, поэтому не увидели знак." },

        // --- Упражнение 3: Present Perfect (Review) ---
        "b1_ptc_ex3_q1": { correct: "b", explanation: "Есть результат в настоящем ('I can't find my wallet'), поэтому Present Perfect." },
        "b1_ptc_ex3_q2": { correct: "b", explanation: "'ever' указывает на вопрос о жизненном опыте." },
        "b1_ptc_ex3_q3": { correct: "c", explanation: "'since 2015' указывает на действие, которое началось в прошлом и продолжается до сих пор." },
        "b1_ptc_ex3_q4": { correct: "a", explanation: "'yet' используется в отрицаниях в Present Perfect." },
        "b1_ptc_ex3_q5": { correct: "b", explanation: "'just' используется для недавно завершенных действий." },
        "b1_ptc_ex3_q6": { correct: "a", explanation: "'already' используется для действий, которые произошли раньше, чем ожидалось." },
        "b1_ptc_ex3_q7": { correct: "b", explanation: "'for ten years' указывает на длительность до настоящего момента." },
        "b1_ptc_ex3_q8": { correct: "b", explanation: "'never' указывает на отсутствие опыта в жизни." },
        "b1_ptc_ex3_q9": { correct: "b", explanation: "Вопрос о действии в еще не законченный период времени ('today')." },
        "b1_ptc_ex3_q10": { correct: "c", explanation: "Есть результат в настоящем ('It's much colder now'), поэтому Present Perfect." },
        
        // --- Упражнение 4: Past Simple vs. Present Perfect ---
        "b1_ptc_ex4_q1": { correct: "b", explanation: "'since last month' указывает на период до настоящего момента, используем Present Perfect." },
        "b1_ptc_ex4_q2": { correct: "a", explanation: "'ten years ago' - точное время в прошлом, используем Past Simple." },
        "b1_ptc_ex4_q3": { correct: "b", explanation: "Эйнштейн - человек из прошлого, его действия завершены. Используем Past Simple." },
        "b1_ptc_ex4_q4": { correct: "b", explanation: "Есть результат в настоящем ('They are celebrating now'). Используем Present Perfect." },
        "b1_ptc_ex4_q5": { correct: "a", explanation: "Вопрос с 'yet' требует Present Perfect. Ответ с 'an hour ago' (точное время в прошлом) требует Past Simple." },
        "b1_ptc_ex4_q6": { correct: "b", explanation: "Дедушка жив и может написать еще, его писательская карьера не закончена. Используем Present Perfect." },
        "b1_ptc_ex4_q7": { correct: "a", explanation: "Речь идет о жизненном опыте до настоящего момента. Используем Present Perfect." },
        "b1_ptc_ex4_q8": { correct: "b", explanation: "'last night' - точное время в прошлом, используем Past Simple." },
        "b1_ptc_ex4_q9": { correct: "b", explanation: "'this week' - незаконченный период времени, есть результат ('The ground is still wet'). Используем Present Perfect." },
        "b1_ptc_ex4_q10": { correct: "b", explanation: "Период жизни в Москве полностью завершен в прошлом (2018-2020). Используем Past Simple." },

        // --- Упражнение 5: Past Simple vs. Past Continuous ---
        "b1_ptc_ex5_q1": { correct: "a", explanation: "Длительное действие 'was explaining' было прервано коротким 'rang'." },
        "b1_ptc_ex5_q2": { correct: "a", explanation: "Я был в процессе учебы ('was studying'), когда ты позвонил (короткое действие 'called')." },
        "b1_ptc_ex5_q3": { correct: "b", explanation: "Длительное действие 'were watching' было прервано коротким 'went off' (выключился)." },
        "b1_ptc_ex5_q4": { correct: "b", explanation: "Короткое действие 'met' произошло во время длительного 'was walking'." },
        "b1_ptc_ex5_q5": { correct: "b", explanation: "Короткое действие 'lost' произошло во время длительного 'was jogging'." },
        "b1_ptc_ex5_q6": { correct: "a", explanation: "Когда я пришел (короткое действие 'arrived'), все были в процессе танца ('was dancing')." },
        "a1_ptc_ex5_q7": { correct: "a", explanation: "Длительное действие 'was reading' было прервано коротким 'heard'." },
        "b1_ptc_ex5_q8": { correct: "a", explanation: "Два действия происходили одновременно и длились некоторое время, поэтому оба в Past Continuous." },
        "b1_ptc_ex5_q9": { correct: "b", explanation: "Короткое действие 'twisted' (подвернул) произошло во время длительного 'was playing'." },
        "b1_ptc_ex5_q10": { correct: "b", explanation: "Короткое действие 'stopped' прервало длительное 'was driving'." }
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
