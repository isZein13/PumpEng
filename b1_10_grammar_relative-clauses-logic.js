// b1_10_grammar_relative-clauses-logic.js
document.addEventListener('DOMContentLoaded', () => {
    const grammarCorrectAnswers = {
        // --- Упражнение 1: Defining Clauses (Review) ---
        "b1_rc_ex1_q1": { correct: "b", explanation: "The phone - предмет, используем which или that." },
        "b1_rc_ex1_q2": { correct: "b", explanation: "The woman - человек, используем who или that." },
        "b1_rc_ex1_q3": { correct: "a", explanation: "Stories - предметы, используем which или that." },
        "b1_rc_ex1_q4": { correct: "c", explanation: "Речь о машине мужчины (man's car), поэтому 'whose'." },
        "b1_rc_ex1_q5": { correct: "c", explanation: "The restaurant - место, где происходило действие, поэтому 'where'." },
        "b1_rc_ex1_q6": { correct: "a", explanation: "The man - человек, поэтому 'who' или 'that'." },
        "b1_rc_ex1_q7": { correct: "c", explanation: "The CD - предмет, поэтому 'which' или 'that'." },
        "b1_rc_ex1_q8": { correct: "b", explanation: "The town - место, где прошло детство, поэтому 'where'." },
        "b1_rc_ex1_q9": { correct: "a", explanation: "The girl - человек, поэтому 'who' или 'that'." },
        "b1_rc_ex1_q10": { correct: "b", explanation: "Речь о картинах художника (artist's paintings), поэтому 'whose'." },

        // --- Упражнение 2: Non-defining Clauses ---
        "b1_rc_ex2_q1": { correct: "b", explanation: "My brother - человек. Информация 'lives in Australia' - дополнительная, поэтому who и запятые." },
        "b1_rc_ex2_q2": { correct: "a", explanation: "The Eiffel Tower - предмет. 'is in Paris' - дополнительная информация, поэтому which." },
        "b1_rc_ex2_q3": { correct: "c", explanation: "Sarah - человек. Информация о знакомстве - дополнительная, поэтому who." },
        "b1_rc_ex2_q4": { correct: "a", explanation: "My car - предмет. Информация о покупке - дополнительная, поэтому which." },
        "b1_rc_ex2_q5": { correct: "a", explanation: "Mr. Smith - человек. Информация о соседстве - дополнительная, поэтому who." },
        "b1_rc_ex2_q6": { correct: "b", explanation: "Jane Austen - человек. Информация о том, что она любимый автор - дополнительная, поэтому who." },
        "b1_rc_ex2_q7": { correct: "a", explanation: "Дополнительная информация о всем предыдущем предложении ('we went to the new Italian restaurant'), поэтому which." },
        "b1_rc_ex2_q8": { correct: "b", explanation: "My phone - предмет. Информация о возрасте - дополнительная, поэтому which." },
        "b1_rc_ex2_q9": { correct: "a", explanation: "The Amazon River - предмет. Информация о местоположении - дополнительная, поэтому which." },
        "b1_rc_ex2_q10": { correct: "b", explanation: "John - человек. Информация о том, что он сказал - дополнительная, поэтому who." },

        // --- Упражнение 3: 'whose' и 'where' ---
        "b1_rc_ex3_q1": { correct: "b", explanation: "Village - это место, где родились. 'where'." },
        "b1_rc_ex3_q2": { correct: "c", explanation: "Речь о мнениях политика (politician's opinions). 'whose'." },
        "b1_rc_ex3_q3": { correct: "b", explanation: "Office - это место, где я работаю. 'where'." },
        "b1_rc_ex3_q4": { correct: "b", explanation: "Речь о собаке соседа (neighbour's dog). 'whose'." },
        "b1_rc_ex3_q5": { correct: "b", explanation: "Rome - это место, где мы видели Колизей. 'where'." },
        "b1_rc_ex3_q6": { correct: "b", explanation: "Речь о кошельке мужчины (man's wallet). 'whose'." },
        "b1_rc_ex3_q7": { correct: "a", explanation: "A place - это место, где останавливаются. 'where'." },
        "b1_rc_ex3_q8": { correct: "c", explanation: "Речь об амбиции девочки (girl's ambition). 'whose'." },
        "b1_rc_ex3_q9": { correct: "b", explanation: "The cafe - это место, где мы встречались. 'where'." },
        "b1_rc_ex3_q10": { correct: "c", explanation: "Речь об имени учителя (teacher's name). 'whose'." },
        
        // --- Упражнение 4: Defining или Non-defining? (Пунктуация) ---
        "b1_rc_ex4_q1": { correct: "b", explanation: "Информация 'who lives in Canada' важна, чтобы понять, о каком из моих братьев идет речь. Запятые не нужны (Defining)." },
        "b1_rc_ex4_q2": { correct: "a", explanation: "Если у меня только один брат, то информация 'who lives in Canada' - дополнительная. Нужны запятые (Non-defining)." },
        "b1_rc_ex4_q3": { correct: "b", explanation: "Информация 'that I'm reading' важна, чтобы понять, о какой книге речь. Запятые не нужны (Defining)." },
        "b1_rc_ex4_q4": { correct: "a", explanation: "Мы и так знаем, о каком фильме речь ('Dune'). Информация 'which was fantastic' - дополнительная. Нужны запятые (Non-defining)." },
        "b1_rc_ex4_q5": { correct: "b", explanation: "Информация 'who I work with' важна, чтобы определить, о каких людях идет речь. Запятые не нужны (Defining)." },
        "b1_rc_ex4_q6": { correct: "a", explanation: "Название ресторана уже конкретизирует его. Информация о том, что он новый - дополнительная. Нужны запятые (Non-defining)." },
        "b1_rc_ex4_q7": { correct: "b", explanation: "Информация 'where we stayed' важна, чтобы понять, о каком отеле речь. Запятые не нужны (Defining)." },
        "b1_rc_ex4_q8": { correct: "a", explanation: "Мы уже знаем, о ком речь (Mrs. Smith). Информация о ее сыне - дополнительная. Нужны запятые (Non-defining)." },
        "b1_rc_ex4_q9": { correct: "b", explanation: "Информация 'which was in a blue envelope' важна, чтобы отличить это письмо от других. Запятые не нужны (Defining)." },
        "b1_rc_ex4_q10": { correct: "b", explanation: "Лондон - уникальный объект. Информация о том, что это столица - дополнительная. Нужны запятые (Non-defining)." },

        // --- Упражнение 5: Объединение предложений ---
        "b1_rc_ex5_q1": { correct: "a", explanation: "Информация 'who is now in hospital' важна, чтобы определить, о какой девочке речь. Запятые не нужны (Defining)." },
        "b1_rc_ex5_q2": { correct: "a", explanation: "Информация 'where I went' важна, чтобы понять, о каком ресторане речь. Запятые не нужны (Defining)." },
        "b1_rc_ex5_q3": { correct: "a", explanation: "Мы и так знаем, о ком речь (моя сестра). 'whose name is Anna' - это доп. информация. Нужны запятые (Non-defining)." },
        "b1_rc_ex5_q4": { correct: "b", explanation: "Мы знаем, о каком городе речь (my hometown). 'where I was born' - доп. информация. Нужны запятые (Non-defining)." },
        "b1_rc_ex5_q5": { correct: "b", explanation: "Информация 'who answered the phone' важна, чтобы определить, о каком мужчине речь. Запятые не нужны (Defining)." },
        "b1_rc_ex5_q6": { correct: "a", explanation: "Информация 'whose parents are very rich' важна, чтобы описать девочку. Запятые не нужны (Defining)." },
        "b1_rc_ex5_q7": { correct: "a", explanation: "Информация 'which has a very fast processor' важна, чтобы описать компьютер. Запятые не нужны (Defining)." },
        "b1_rc_ex5_q8": { correct: "b", explanation: "Мы знаем отель ('The Park Hotel'). Информация о рекомендации - дополнительная. Нужны запятые (Non-defining)." },
        "b1_rc_ex5_q9": { correct: "b", explanation: "Информация 'which I was looking for' важна, чтобы определить, о какой книге речь. Запятые не нужны (Defining)." },
        "b1_rc_ex5_q10": { correct: "b", explanation: "Мы знаем, о ком речь (мой друг). 'whose name is Peter' - доп. информация. Нужны запятые (Non-defining)." }
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
