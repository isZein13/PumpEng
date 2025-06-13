// grammar-exercise-logic.js
document.addEventListener('DOMContentLoaded', () => {
    // --- БАЗА ДАННЫХ С ПРАВИЛЬНЫМИ ОТВЕТАМИ И ОБЪЯСНЕНИЯМИ ДЛЯ A1 ---
    // Ключ: data-form-id_qN (например, a1_ps_ex1_q1, a1_ps_ex2_q1)
    const grammarCorrectAnswers = {
        // A1 - Present Simple - Упражнение 1 (ID формы: a1_ps_ex1)
        "a1_ps_ex1_q1": { correct: "b", explanation: "Для 'My brother' (he) в Present Simple к глаголу добавляется -s: plays." },
        "a1_ps_ex1_q2": { correct: "a", explanation: "Для 'We' в Present Simple используется базовая форма глагола: go." },
        // A1 - Present Simple - Упражнение 2 (ID формы: a1_ps_ex2)
        "a1_ps_ex2_q1": { correct: "b", explanation: "Для 'she' в вопросе Present Simple используется вспомогательный глагол 'Does'." },
        "a1_ps_ex2_q2": { correct: "b", explanation: "Для 'They' в отрицании Present Simple используется 'do not' (don't)." },
        // Добавьте сюда ключи и ответы для остальных 3 упражнений по Present Simple, когда создадите их в HTML

        // A1 - Present Continuous - Упражнение 1 (ID формы: a1_pc_ex1)
        "a1_pc_ex1_q1": { correct: "b", explanation: "'Look!' указывает на действие, происходящее сейчас. 'The children' (they) + are + V-ing: are playing." },
        "a1_pc_ex1_q2": { correct: "b", explanation: "'right now' указывает на действие в момент речи. I + am + V-ing: am reading." },
        // Добавьте сюда ключи и ответы для остальных 4 упражнений по Present Continuous

        // A1 - Past Simple - Упражнение 1 (ID формы: a1_past_s_ex1)
        "a1_past_s_ex1_q1": { correct: "c", explanation: "'last Sunday' указывает на прошлое. 'go' - неправильный глагол, его форма в Past Simple - 'went'." },
        "a1_past_s_ex1_q2": { correct: "b", explanation: "Отрицание в Past Simple: did not (didn't) + инфинитив глагола (visit)." },
        // Добавьте сюда ключи и ответы для остальных 4 упражнений по Past Simple

        // A1 - Articles - Упражнение 1 (ID формы: a1_art_ex1)
        "a1_art_ex1_q1": { correct: "b", explanation: "'interesting' начинается с гласного звука, поэтому используется 'an'." },
        "a1_art_ex1_q2": { correct: "c", explanation: "Говорящий просит конкретную соль (ту, что на столе), поэтому 'the'." },
        "a1_art_ex1_q3": { correct: "a", explanation: "Говорим о профессии в общем, 'doctor' начинается с согласного звука, поэтому 'a'." },
        // Добавьте сюда ключи и ответы для остальных 4 упражнений по Articles


        // =============================================================
        // ЗАПОЛНИТЕ ОТВЕТЫ ДЛЯ ВСЕХ ОСТАЛЬНЫХ ТЕМ И УПРАЖНЕНИЙ A1
        // Future Simple, Nouns, Adjectives, Adverbs, Prepositions, Conjunctions, Question Forms, Imperatives
        // =============================================================
        // Пример для будущей темы, например, Nouns, упражнение 1:
        // "a1_nouns_ex1_q1": { correct: "a", explanation: "Объяснение для первого вопроса первого упражнения по теме Nouns." },
        // "a1_nouns_ex1_q2": { correct: "c", explanation: "Объяснение для второго вопроса первого упражнения по теме Nouns." },
    };

    const checkButtons = document.querySelectorAll('.check-grammar-answers-btn');

    checkButtons.forEach(button => {
        button.addEventListener('click', function() {
            const formIdSuffix = this.dataset.formId; // e.g., "a1_ps_ex1", "a1_pc_ex1"
            const formElement = this.closest('.grammar-exercises-form');
            if (!formElement) {
                console.error("Could not find parent form for button with data-form-id:", formIdSuffix);
                return;
            }
            const exercisesInForm = formElement.querySelectorAll('.grammar-exercise'); // Это теперь отдельные вопросы/задания
            const feedbackDiv = formElement.querySelector('.grammar-feedback');
            let allCorrect = true;
            let feedbackHTML = `<h4>Результаты для "${this.textContent.replace('Проверить ', '')}":</h4>`; // Используем текст кнопки для заголовка
            let exercisesAttempted = 0;

            exercisesInForm.forEach((exerciseDiv, index) => {
                const questionNumber = index + 1; // Номер вопроса внутри текущего упражнения (формы)
                // Имя радио-группы должно быть уникальным для каждого вопроса в форме, например "q1_a1_ps_ex1"
                // Оно берется из HTML
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
                    // Ключ для correctAnswersData: data-form-id кнопки + _qN
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
