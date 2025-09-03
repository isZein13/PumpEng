// c1_10_grammar_adv-adj-adv-logic.js
document.addEventListener('DOMContentLoaded', () => {
    const grammarCorrectAnswers = {
        // --- Упражнение 1: Gradable and Ungradable Adjectives ---
        "c1_aa_ex1_q1": { correct: "b", explanation: "'Boiling' (кипящий) - это ungradable (экстремальное) прилагательное. Оно усиливается с помощью 'absolutely', а не 'very'." },
        "c1_aa_ex1_q2": { correct: "b", explanation: "'Tired' (уставший) - это gradable (имеющее степени) прилагательное. Оно усиливается с 'extremely' или 'very'." },
        "c1_aa_ex1_q3": { correct: "c", explanation: "'Fantastic' - это ungradable прилагательное. Используем 'absolutely'." },
        "c1_aa_ex1_q4": { correct: "b", explanation: "'Expensive' - это gradable прилагательное. Используем 'very'." },
        "c1_aa_ex1_q5": { correct: "c", explanation: "'Ridiculous' (нелепый) - это ungradable прилагательное. Используем 'utterly' или 'absolutely'." },
        "c1_aa_ex1_q6": { correct: "c", explanation: "'Huge' (огромный) - это ungradable прилагательное. Используем 'absolutely'." },
        "c1_aa_ex1_q7": { correct: "c", explanation: "'Certain' (уверенный) - gradable. 'Pretty' - это неформальный синоним 'quite' или 'rather'." },
        "c1_aa_ex1_q8": { correct: "b", explanation: "'Difficult' - это gradable прилагательное. 'Quite' (весьма) подходит для умеренного усиления." },
        "c1_aa_ex1_q9": { correct: "c", explanation: "'Total' (полный) - это ungradable прилагательное. Используем 'completely'." },
        "c1_aa_ex1_q10": { correct: "b", explanation: "'Impossible' - это ungradable прилагательное. Используем 'absolutely' или 'completely'." },

        // --- Упражнение 2: Position of Adverbs (Advanced) ---
        "c1_aa_ex2_q1": { correct: "b", explanation: "Чтобы подчеркнуть, что я видел только Тома (и никого больше), 'only' ставится непосредственно перед 'Tom'." },
        "c1_aa_ex2_q2": { correct: "c", explanation: "Наречие частоты (never) ставится между вспомогательным (has) и основным глаголом (been)." },
        "c1_aa_ex2_q3": { correct: "c", explanation: "Чтобы подчеркнуть, что она не ожидала даже своих друзей, 'even' ставится перед объектом, к которому относится." },
        "c1_aa_ex2_q4": { correct: "d", explanation: "Наречие образа действия может стоять как перед глаголом (менее распространено), так и после глагола+дополнения." },
        "c1_aa_ex2_q5": { correct: "a", explanation: "Наречия степени, как 'almost', обычно ставятся между вспомогательным и основным глаголом." },
        "c1_aa_ex2_q6": { correct: "b", explanation: "Наречие 'well' всегда ставится после глагола и дополнения. 'Good' - это прилагательное." },
        "c1_aa_ex2_q7": { correct: "c", explanation: "'Just I...' означает 'Только я хочу...', в то время как 'I just want...' и 'I want just...' означают 'Я хочу всего лишь...'." },
        "c1_aa_ex2_q8": { correct: "d", explanation: "Наречие образа действия, как 'slowly', может занимать несколько позиций, и все три варианта звучат естественно." },
        "c1_aa_ex2_q9": { correct: "d", explanation: "Наречие не может стоять между прилагательным и существительным." },
        "c1_aa_ex2_q10": { correct: "d", explanation: "Наречие 'completely' может стоять перед глаголом или в конце предложения." },

        // --- Упражнение 3: Adjective + Preposition Collocations ---
        "c1_aa_ex3_q1": { correct: "c", explanation: "Устойчивое выражение: proud of someone/something." },
        "c1_aa_ex3_q2": { correct: "a", explanation: "Устойчивое выражение: keen on something/doing something." },
        "c1_aa_ex3_q3": { correct: "c", explanation: "Устойчивое выражение: aware of something." },
        "c1_aa_ex3_q4": { correct: "d", explanation: "Устойчивое выражение: responsible for something/doing something." },
        "c1_aa_ex3_q5": { correct: "d", explanation: "Устойчивое выражение: good at something/doing something." },
        "c1_aa_ex3_q6": { correct: "b", explanation: "Устойчивое выражение: famous for something." },
        "c1_aa_ex3_q7": { correct: "a", explanation: "Устойчивое выражение: tired of something/doing something." },
        "c1_aa_ex3_q8": { correct: "c", explanation: "Устойчивое выражение: similar to someone/something." },
        "c1_aa_ex3_q9": { correct: "a", explanation: "Устойчивое выражение: capable of doing something." },
        "c1_aa_ex3_q10": { correct: "d", explanation: "Устойчивое выражение: disappointed with someone (или 'in'/'about' something)." },
        
        // --- Упражнение 4: Adverb + Adjective Collocations ---
        "c1_aa_ex4_q1": { correct: "a", explanation: "'bitterly disappointed' (горько разочарован) - сильная и распространенная коллокация." },
        "c1_aa_ex4_q2": { correct: "c", explanation: "'highly unlikely' (крайне маловероятно) - очень распространенная коллокация." },
        "c1_aa_ex4_q3": { correct: "d", explanation: "'fully aware' (полностью осознавать) - устойчивое выражение." },
        "c1_aa_ex4_q4": { correct: "b", explanation: "'ridiculously expensive' (нелепо дорогой) - распространенная разговорная коллокация." },
        "c1_aa_ex4_q5": { correct: "a", explanation: "'deeply ashamed' (глубоко стыдно) - сильная коллокация для выражения сильных чувств." },
        "c1_aa_ex4_q6": { correct: "c", explanation: "'fundamentally flawed' (в корне ошибочный) - формальная и точная коллокация." },
        "c1_aa_ex4_q7": { correct: "c", explanation: "'perfectly clear' (совершенно ясно) - устойчивое выражение." },
        "c1_aa_ex4_q8": { correct: "c", explanation: "'highly successful' (очень успешный) - распространенная коллокация." },
        "c1_aa_ex4_q9": { correct: "d", explanation: "'deeply offended' (глубоко оскорблен) - сильная коллокация для сильных чувств." },
        "c1_aa_ex4_q10": { correct: "a", explanation: "'perfectly logical' (совершенно логичный) - устойчивое выражение." },

        // --- Упражнение 5: Mixed Practice ---
        "c1_aa_ex5_q1": { correct: "d", explanation: "'fascinating' (увлекательный) - это ungradable прилагательное, описывающее характеристику, и оно усиливается с 'absolutely'." },
        "c1_aa_ex5_q2": { correct: "c", explanation: "'brilliant' - ungradable прилагательное, поэтому используем 'absolutely'." },
        "c1_aa_ex5_q3": { correct: "b", explanation: "Нужно прилагательное на '-ed' для описания чувств человека." },
        "c1_aa_ex5_q4": { correct: "c", explanation: "'fully committed' - устойчивое выражение, означающее 'полностью предан'." },
        "c1_aa_ex5_q5": { correct: "c", explanation: "Наречие частоты 'always' ставится после глагола 'to be'." },
        "c1_aa_ex5_q6": { correct: "d", explanation: "'serious' - это gradable прилагательное, которое усиливается с 'very'." },
        "c1_aa_ex5_q7": { correct: "a", explanation: "Устойчивое словосочетание: 'keen on'." },
        "c1_aa_ex5_q8": { correct: "b", explanation: "'awfully sorry' - очень распространенная и сильная коллокация для извинений." },
        "c1_aa_ex5_q9": { correct: "d", explanation: "'Only she...' означает, что никто другой не понял. 'She only understood...' означает, что она только поняла, но ничего не сделала. 'She understood only the problem' означает, что она поняла только проблему, а не что-то еще." },
        "c1_aa_ex5_q10": { correct: "a", explanation: "Нужно прилагательное на '-ed' для описания чувств детей." }
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
