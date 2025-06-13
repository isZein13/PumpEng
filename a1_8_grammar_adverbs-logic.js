// a1_8_grammar_adverbs-logic.js
document.addEventListener('DOMContentLoaded', () => {
    const grammarCorrectAnswers = {
        // --- Упражнение 1: Наречия частоты ---
        "a1_adv_ex1_q1": { correct: "c", explanation: "'Always' (всегда) подходит для 100% частоты." },
        "a1_adv_ex1_q2": { correct: "d", explanation: "'Never' (никогда) подходит для 0% частоты. Наречие частоты ставится после глагола 'to be'." },
        "a1_adv_ex1_q3": { correct: "c", explanation: "'Usually' (обычно) или 'often' (часто) подходят для 70-80%." },
        "a1_adv_ex1_q4": { correct: "b", explanation: "'Sometimes' (иногда) подходит для примерно 50%." },
        "a1_adv_ex1_q5": { correct: "c", explanation: "'Seldom' или 'rarely' (редко) означает почти никогда." },
        "a1_adv_ex1_q6": { correct: "d", explanation: "'Usually' (обычно) или 'always' (всегда) подходят, если он любит готовить и делает это часто." },
        "a1_adv_ex1_q7": { correct: "c", explanation: "'Often' (часто) хорошо описывает частую усталость после работы." },
        "a1_adv_ex1_q8": { correct: "b", explanation: "Вопрос 'How often do you...?' спрашивает о частоте." },
        "a1_adv_ex1_q9": { correct: "c", explanation: "'Never' (никогда) означает, что он не забывает ключи." },
        "a1_adv_ex1_q10": { correct: "b", explanation: "'Usually once or twice a year' (обычно один или два раза в год) указывает на типичную частоту." },

        // --- Упражнение 2: Наречия образа действия (-ly, well, fast, hard) ---
        "a1_adv_ex2_q1": { correct: "c", explanation: "От прилагательного 'quick' наречие образуется добавлением -ly: quickly." },
        "a1_adv_ex2_q2": { correct: "c", explanation: "Наречие от прилагательного 'good' - это 'well'." },
        "a1_adv_ex2_q3": { correct: "b", explanation: "От прилагательного 'slow' наречие образуется добавлением -ly: slowly." },
        "a1_adv_ex2_q4": { correct: "c", explanation: "От прилагательного 'happy' (-y меняется на -i) наречие образуется добавлением -ly: happily." },
        "a1_adv_ex2_q5": { correct: "a", explanation: "Прилагательное 'hard' и наречие 'hard' имеют одинаковую форму. 'Hardly' означает 'едва'." },
        "a1_adv_ex2_q6": { correct: "b", explanation: "От прилагательного 'beautiful' наречие образуется добавлением -ly: beautifully." },
        "a1_adv_ex2_q7": { correct: "a", explanation: "Прилагательное 'fast' и наречие 'fast' имеют одинаковую форму. 'Fastly' не существует." },
        "a1_adv_ex2_q8": { correct: "c", explanation: "От прилагательного 'easy' (-y меняется на -i) наречие образуется добавлением -ly: easily." },
        "a1_adv_ex2_q9": { correct: "c", explanation: "От прилагательного 'clear' наречие образуется добавлением -ly: clearly." },
        "a1_adv_ex2_q10": { correct: "c", explanation: "От прилагательного 'sad' наречие образуется добавлением -ly: sadly." },

        // --- Упражнение 3: Наречия места (here, there, everywhere) ---
        "a1_adv_ex3_q1": { correct: "b", explanation: "'Here' означает 'здесь, сюда'." },
        "a1_adv_ex3_q2": { correct: "d", explanation: "'There' (или 'over there') означает 'там'." },
        "a1_adv_ex3_q3": { correct: "b", explanation: "В отрицательных предложениях 'anywhere' означает 'нигде'. 'Nowhere' используется в утвердительных предложениях с отрицательным значением." },
        "a1_adv_ex3_q4": { correct: "c", explanation: "'Everywhere' означает 'везде, повсюду'." },
        "a1_adv_ex3_q5": { correct: "b", explanation: "'Near' означает 'близко, поблизости'." },
        "a1_adv_ex3_q6": { correct: "d", explanation: "'Somewhere' означает 'где-то, куда-то' в утвердительных предложениях." },
        "a1_adv_ex3_q7": { correct: "c", explanation: "'Far' означает 'далеко'." },
        "a1_adv_ex3_q8": { correct: "b", explanation: "'Outside' означает 'снаружи, на улице'." },
        "a1_adv_ex3_q9": { correct: "b", explanation: "'Here' означает 'здесь'." },
        "a1_adv_ex3_q10": { correct: "c", explanation: "'Everywhere' означает 'везде'." },

        // --- Упражнение 4: Место наречий частоты ---
        "a1_adv_ex4_q1": { correct: "c", explanation: "Наречия частоты обычно ставятся ПОСЛЕ глагола 'to be': He is always happy." },
        "a1_adv_ex4_q2": { correct: "c", explanation: "Наречия частоты обычно ставятся ПЕРЕД основным смысловым глаголом: I usually go." },
        "a1_adv_ex4_q3": { correct: "b", explanation: "Наречия частоты обычно ставятся ПЕРЕД основным смысловым глаголом: She often visits." },
        "a1_adv_ex4_q4": { correct: "d", explanation: "Наречия частоты обычно ставятся ПОСЛЕ глагола 'to be': They are never late." },
        "a1_adv_ex4_q5": { correct: "d", explanation: "'Sometimes' может стоять в начале предложения или перед основным глаголом. Оба варианта (b и c) грамматически верны." },
        "a1_adv_ex4_q6": { correct: "a", explanation: "Наречия частоты обычно ставятся ПЕРЕД основным смысловым глаголом: He always gets up." },
        "a1_adv_ex4_q7": { correct: "c", explanation: "В вопросах с 'to be' наречие частоты ставится ПОСЛЕ подлежащего: Are you often tired?" },
        "a1_adv_ex4_q8": { correct: "a", explanation: "Наречия частоты ставятся ПОСЛЕ модальных глаголов (can, must, should): I can never remember." },
        "a1_adv_ex4_q9": { correct: "c", explanation: "В вопросах с do/does наречие частоты ставится ПОСЛЕ подлежащего и ПЕРЕД основным глаголом: Does she usually walk?" },
        "a1_adv_ex4_q10": { correct: "d", explanation: "'Sometimes' может стоять в начале предложения или перед основным глаголом. Оба варианта (b и c) грамматически верны." },

        // --- Упражнение 5: Прилагательное или Наречие? ---
        "a1_adv_ex5_q1": { correct: "c", explanation: "Прилагательное 'careful' описывает существительное 'driver'. Наречие 'carefully' описывает глагол 'drives'." },
        "a1_adv_ex5_q2": { correct: "b", explanation: "Наречие 'well' описывает глагол 'speaks'. Прилагательное 'good' описывает существительное 'English'." },
        "a1_adv_ex5_q3": { correct: "a", explanation: "Прилагательное 'loud' описывает существительное 'music'. Наречие 'quietly' описывает глагол 'play'." },
        "a1_adv_ex5_q4": { correct: "a", explanation: "Прилагательное 'fast' и наречие 'fast' имеют одинаковую форму. 'Fast' описывает 'runner' и 'runs'." },
        "a1_adv_ex5_q5": { correct: "c", explanation: "Прилагательное 'sad' описывает 'story'. Наречие 'sadly' описывает 'told'." },
        "a1_adv_ex5_q6": { correct: "a", explanation: "Прилагательное 'easy' описывает 'book'. Наречие 'easily' описывает 'read'." },
        "a1_adv_ex5_q7": { correct: "a", explanation: "Прилагательное 'correct' описывает 'answer' (существительное). Наречие 'correctly' описывает 'answered'." },
        "a1_adv_ex5_q8": { correct: "c", explanation: "Прилагательное 'beautiful' описывает 'singer'. Наречие 'beautifully' описывает 'sings'." },
        "a1_adv_ex5_q9": { correct: "a", explanation: "Прилагательное 'quiet' после 'Be'. Наречие 'quietly' описывает 'walk'." },
        "a1_adv_ex5_q10": { correct: "c", explanation: "Прилагательное 'hard' описывает 'worker'. Наречие 'hard' (усердно) описывает 'works'. 'Hardly' означает 'едва'." }
    };

    // Код для проверки ответов (остается таким же, как в grammar-exercise-logic.js)
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
