// b1_5_grammar_present-perfect-continuous-logic.js
document.addEventListener('DOMContentLoaded', () => {
    const grammarCorrectAnswers = {
        // --- Упражнение 1: Образование (have/has been + V-ing) ---
        "b1_ppc_ex1_q1": { correct: "a", explanation: "Для 'I' используется 'have'." },
        "b1_ppc_ex1_q2": { correct: "b", explanation: "Для 'She' используется 'has'." },
        "b1_ppc_ex1_q3": { correct: "b", explanation: "Для 'They' используется 'have'." },
        "b1_ppc_ex1_q4": { correct: "a", explanation: "Отрицание для 'He': has not been feeling." },
        "b1_ppc_ex1_q5": { correct: "b", explanation: "Для 'We' используется 'have'." },
        "b1_ppc_ex1_q6": { correct: "a", explanation: "Вопрос для 'it': Has it been raining?" },
        "b1_ppc_ex1_q7": { correct: "b", explanation: "Вопрос для 'you': How long have you been learning?" },
        "b1_ppc_ex1_q8": { correct: "b", explanation: "Для 'My friends' (they) используется 'have'." },
        "b1_ppc_ex1_q9": { correct: "a", explanation: "Отрицание для 'He': hasn't been watching." },
        "b1_ppc_ex1_q10": { correct: "b", explanation: "Для 'I' используется 'have'." },

        // --- Упражнение 2: Действия, продолжающиеся до настоящего момента ---
        "b1_ppc_ex2_q1": { correct: "b", explanation: "Акцент на длительном процессе, который начался в прошлом и продолжается. 'has been playing'." },
        "b1_ppc_ex2_q2": { correct: "b", explanation: "Вопрос 'How long' спрашивает о длительности процесса до настоящего момента. 'have you been waiting'." },
        "b1_ppc_ex2_q3": { correct: "a", explanation: "'for months' подчеркивает длительность процесса, который все еще идет. 'have been working'." },
        "b1_ppc_ex2_q4": { correct: "a", explanation: "'all morning' указывает на длительный процесс, который, возможно, только что закончился или все еще идет. 'have been trying'." },
        "b1_ppc_ex2_q5": { correct: "b", explanation: "Действие (преподавание) началось в прошлом и продолжается до сих пор. Акцент на длительности. 'has been teaching'." },
        "b1_ppc_ex2_q6": { correct: "b", explanation: "'since yesterday' указывает на процесс, который начался в прошлом и продолжается, с видимым результатом. 'has been snowing'." },
        "b1_ppc_ex2_q7": { correct: "b", explanation: "Хотя 'have lived' тоже грамматически возможно, 'have been living' лучше подчеркивает, что процесс все еще продолжается." },
        "b1_ppc_ex2_q8": { correct: "b", explanation: "'for hours' подчеркивает длительность процесса. 'have been watching'." },
        "b1_ppc_ex2_q9": { correct: "b", explanation: "Вопрос 'How long' фокусируется на длительности процесса обучения. 'has she been learning'." },
        "b1_ppc_ex2_q10": { correct: "b", explanation: "'since I started exercising' указывает на процесс улучшения самочувствия, который продолжается. 'have been feeling'." },

        // --- Упражнение 3: Недавно завершенные действия с результатом ---
        "b1_ppc_ex3_q1": { correct: "b", explanation: "Грязная одежда - результат длительного процесса работы в саду. 'have been working'." },
        "b1_ppc_ex3_q2": { correct: "b", explanation: "Усталость - результат длительного бега. 'have been running'." },
        "b1_ppc_ex3_q3": { correct: "b", explanation: "Беспорядок на кухне - результат какого-то длительного процесса. 'have you been doing'." },
        "b1_ppc_ex3_q4": { correct: "b", explanation: "Усталость глаз - результат длительного чтения. 'have been reading'." },
        "b1_ppc_ex3_q5": { correct: "b", explanation: "Запах краски - результат длительного процесса покраски. 'has been painting'." },
        "b1_ppc_ex3_q6": { correct: "b", explanation: "Боль в пальцах - результат длительной игры на гитаре. 'has been playing'." },
        "b1_ppc_ex3_q7": { correct: "b", explanation: "Вопрос о длительности ожидания до момента разговора. 'Have you been waiting long?'." },
        "b1_ppc_ex3_q8": { correct: "a", explanation: "Мокрая земля - результат того, что недавно шел дождь (процесс). 'has been raining'." },
        "b1_ppc_ex3_q9": { correct: "a", explanation: "Необходимость отдохнуть вызвана длительной ходьбой. 'have been walking'." },
        "b1_ppc_ex3_q10": { correct: "b", explanation: "Мука на носу - результат процесса выпечки. 'Have you been baking?'." },
        
        // --- Упражнение 4: Использование for и since ---
        "b1_ppc_ex4_q1": { correct: "a", explanation: "'two hours' - это период времени, поэтому используется 'for'." },
        "b1_ppc_ex4_q2": { correct: "b", explanation: "'I was a child' - это точка отсчета в прошлом, поэтому 'since'." },
        "b1_ppc_ex4_q3": { correct: "b", explanation: "'9 o'clock' - это точка отсчета, поэтому 'since'." },
        "b1_ppc_ex4_q4": { correct: "a", explanation: "'a long time' - это период времени, поэтому 'for'." },
        "b1_ppc_ex4_q5": { correct: "b", explanation: "'last Tuesday' - это точка отсчета, поэтому 'since'." },
        "b1_ppc_ex4_q6": { correct: "a", explanation: "'more than a day' - это период времени, поэтому 'for'." },
        "b1_ppc_ex4_q7": { correct: "a", explanation: "Ответ на вопрос 'How long' с указанием периода 'three years' требует 'For'." },
        "b1_ppc_ex4_q8": { correct: "b", explanation: "'the beginning of summer' - это точка отсчета, поэтому 'since'." },
        "b1_ppc_ex4_q9": { correct: "b", explanation: "'we graduated' - это точка отсчета в прошлом, поэтому 'since'." },
        "b1_ppc_ex4_q10": { correct: "a", explanation: "'ages' (вечность) - это идиоматическое выражение для периода времени, используется 'for'." },

        // --- Упражнение 5: Present Perfect Simple vs. Continuous ---
        "b1_ppc_ex5_q1": { correct: "b", explanation: "Акцент на длительности чтения ('for three hours'), а не на результате. Используем Continuous." },
        "b1_ppc_ex5_q2": { correct: "a", explanation: "Акцент на результате (три книги прочитаны), на количестве. Используем Simple." },
        "b1_ppc_ex5_q3": { correct: "b", explanation: "Акцент на длительности ('all morning'), которая привела к необходимости перерыва. Используем Continuous." },
        "b1_ppc_ex5_q4": { correct: "a", explanation: "Акцент на результате (количество написанных писем). Используем Simple." },
        "b1_ppc_ex5_q5": { correct: "b", explanation: "Акцент на длительности процесса, который еще не завершен. Используем Continuous." },
        "b1_ppc_ex5_q6": { correct: "a", explanation: "Это короткое, только что завершенное действие с результатом (боль). Используем Simple." },
        "b1_ppc_ex5_q7": { correct: "b", explanation: "Вопрос 'How long' фокусируется на длительности. Используем Continuous." },
        "b1_ppc_ex5_q8": { correct: "a", explanation: "Акцент на результате (ключей нет). 'has been losing' означало бы повторяющийся процесс, что менее логично. Используем Simple." },
        "b1_ppc_ex5_q9": { correct: "b", explanation: "Акцент на длительности процесса обучения. Используем Continuous." },
        "b1_ppc_ex5_q10": { correct: "a", explanation: "Акцент на количестве просмотров (результат). Используем Simple." }
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
