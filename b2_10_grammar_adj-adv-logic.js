// b2_10_grammar_adj-adv-logic.js
document.addEventListener('DOMContentLoaded', () => {
    const grammarCorrectAnswers = {
        // --- Упражнение 1: '-ed' vs. '-ing' Adjectives ---
        "b2_aa_ex1_q1": { correct: "b", explanation: "Прилагательное на '-ed' описывает чувство человека (мне было скучно)." },
        "b2_aa_ex1_q2": { correct: "a", explanation: "Прилагательное на '-ing' описывает характеристику предмета (книга была захватывающей)." },
        "b2_aa_ex1_q3": { correct: "b", explanation: "Описываем чувство, интерес человека к чему-либо -> interested." },
        "b2_aa_ex1_q4": { correct: "a", explanation: "Описываем характеристику инструкций (они были запутанными) -> confusing." },
        "b2_aa_ex1_q5": { correct: "b", explanation: "Описываем ее чувство (она была поражена) -> amazed." },
        "b2_aa_ex1_q6": { correct: "a", explanation: "Описываем характеристику ситуации (ситуация неловкая) -> embarrassing." },
        "b2_aa_ex1_q7": { correct: "b", explanation: "Описываем чувство (я был разочарован) -> disappointed." },
        "b2_aa_ex1_q8": { correct: "a", explanation: "Описываем характеристику поездки (она была утомительной) -> tiring." },
        "b2_aa_ex1_q9": { correct: "b", explanation: "Вопрос о чувстве человека (ты взволнован?) -> excited." },
        "b2_aa_ex1_q10": { correct: "a", explanation: "Описываем характеристику новостей (они были шокирующими) -> shocking." },

        // --- Упражнение 2: Adverbs of Degree ---
        "b2_aa_ex2_q1": { correct: "a", explanation: "'Fairly' (довольно) - умеренная, нейтральная оценка. 'Rather' обычно имеет негативный или неожиданный оттенок." },
        "b2_aa_ex2_q2": { correct: "b", explanation: "'Rather' часто используется для выражения удивления или когда что-то превосходит ожидания (в положительную или отрицательную сторону)." },
        "b2_aa_ex2_q3": { correct: "b", explanation: "'Absolutely' используется с 'ungradable' (не имеющими степеней сравнения) прилагательными, как 'amazing'." },
        "b2_aa_ex2_q4": { correct: "d", explanation: "'Rather' хорошо подходит для описания неожиданно сложной задачи." },
        "b2_aa_ex2_q5": { correct: "a", explanation: "'Fairly cheap' - довольно дешевый, нейтрально-положительная оценка." },
        "b2_aa_ex2_q6": { correct: "b", explanation: "'Pretty sure' - неформальный и очень распространенный аналог 'quite sure' (вполне уверен)." },
        "b2_aa_ex2_q7": { correct: "b", explanation: "'Rather unusual' - довольно необычная, подчеркивает неожиданность." },
        "b2_aa_ex2_q8": { correct: "c", explanation: "'Utterly' (совершенно) - это сильное наречие, которое хорошо сочетается с 'delicious'." },
        "b2_aa_ex2_q9": { correct: "b", explanation: "'Rather cold' - довольно холодно, часто с оттенком недовольства или удивления." },
        "b2_aa_ex2_q10": { correct: "a", explanation: "'Fairly simple' - довольно простой, нейтральная оценка без сильных эмоций." },

        // --- Упражнение 3: Stance Adverbs ---
        "b2_aa_ex3_q1": { correct: "b", explanation: "'Obviously' (очевидно) - используется, когда говорящий считает что-то само собой разумеющимся." },
        "b2_aa_ex3_q2": { correct: "c", explanation: "'Frankly' (честно говоря) - вводит прямое, честное мнение." },
        "b2_aa_ex3_q3": { correct: "a", explanation: "'Apparently' (по-видимому, как говорят) - используется, когда информация получена из вторых рук." },
        "b2_aa_ex3_q4": { correct: "c", explanation: "'Fortunately' (к счастью) - выражает удачу." },
        "b2_aa_ex3_q5": { correct: "c", explanation: "'Personally' (лично я) - подчеркивает, что это личное мнение говорящего." },
        "b2_aa_ex3_q6": { correct: "c", explanation: "'Unfortunately' (к несчастью) - выражает сожаление о событии." },
        "b2_aa_ex3_q7": { correct: "a", explanation: "'Hopefully' (надеюсь) - выражает надежду на будущее." },
        "b2_aa_ex3_q8": { correct: "c", explanation: "'Clearly' (ясно, очевидно) - используется, когда вывод очевиден из фактов." },
        "b2_aa_ex3_q9": { correct: "d", explanation: "'Obviously' (очевидно) - синоним 'clearly', подчеркивает очевидность." },
        "b2_aa_ex3_q10": { correct: "a", explanation: "'Apparently' (по-видимому) - передает причину, которая не является 100% фактом, а скорее предположением." },
        
        // --- Упражнение 4: Position of Adverbs ---
        "b2_aa_ex4_q1": { correct: "b", explanation: "Наречие образа действия (fluently) обычно ставится после глагола и его прямого дополнения." },
        "b2_aa_ex4_q2": { correct: "a", explanation: "Наречие частоты (never) ставится между вспомогательным (have) и основным глаголом (seen)." },
        "b2_aa_ex4_q3": { correct: "d", explanation: "Наречие образа действия (carefully) может стоять в конце предложения. Вариант 'c' тоже возможен, но 'd' более распространен." },
        "b2_aa_ex4_q4": { correct: "a", explanation: "Наречие частоты (often) ставится после глагола 'to be'." },
        "b2_aa_ex4_q5": { correct: "a", explanation: "Наречие степени (extremely) ставится перед прилагательным (tired), которое оно определяет." },
        "b2_aa_ex4_q6": { correct: "b", explanation: "Наречие вероятности (probably) ставится после вспомогательного глагола 'will' и перед 'be'." },
        "b2_aa_ex4_q7": { correct: "c", explanation: "'Only' может стоять перед глаголом (I only have) или перед объектом, к которому относится (I have only five dollars). Оба варианта корректны." },
        "b2_aa_ex4_q8": { correct: "b", explanation: "Наречие 'almost' обычно ставится между вспомогательным (has) и основным глаголом (finished)." },
        "b2_aa_ex4_q9": { correct: "b", explanation: "Наречие образа действия (easily) ставится после модального глагола (can) и перед основным." },
        "b2_aa_ex4_q10": { correct: "d", explanation: "Наречие частоты (usually) может стоять перед вспомогательным глаголом в отрицании или в начале предложения для выделения. Оба варианта верны." },

        // --- Упражнение 5: Adjective or Adverb? (Advanced Cases) ---
        "b2_aa_ex5_q1": { correct: "b", explanation: "'well' - это наречие от прилагательного 'good'. Описывает, как он играет." },
        "b2_aa_ex5_q2": { correct: "a", explanation: "'hard' - это и прилагательное, и наречие. 'hardly' означает 'едва'." },
        "b2_aa_ex5_q3": { correct: "b", explanation: "'hardly' означает 'едва, почти не'. 'Я его почти не видел на этой неделе'." },
        "b2_aa_ex5_q4": { correct: "a", explanation: "'fast' - это и прилагательное, и наречие. Слова 'fastly' не существует." },
        "b2_aa_ex5_q5": { correct: "a", explanation: "'late' - это и прилагательное, и наречие. 'lately' означает 'в последнее время'." },
        "b2_aa_ex5_q6": { correct: "b", explanation: "'lately' означает 'в последнее время, недавно'." },
        "b2_aa_ex5_q7": { correct: "a", explanation: "После глаголов чувств (smell, taste, feel, look, sound) используется прилагательное. 'lovely' - это прилагательное (милый, прекрасный)." },
        "b2_aa_ex5_q8": { correct: "c", explanation: "Нужно наречие, чтобы описать, как он посмотрел (looked). Наречие от 'angry' - 'angrily'." },
        "b2_aa_ex5_q9": { correct: "b", explanation: "Наречие 'highly' означает 'очень, чрезвычайно' и используется с некоторыми прилагательными. 'high' как наречие означает 'высоко' (физически)." },
        "b2_aa_ex5_q10": { correct: "a", explanation: "Наречие 'high' означает 'высоко' (о физическом положении). 'highly' сюда не подходит по смыслу." }
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
