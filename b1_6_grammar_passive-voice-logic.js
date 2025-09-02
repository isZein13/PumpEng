// b1_6_grammar_passive-voice-logic.js
document.addEventListener('DOMContentLoaded', () => {
    const grammarCorrectAnswers = {
        // --- Упражнение 1: Simple Tenses Passive (Review) ---
        "b1_pv_ex1_q1": { correct: "b", explanation: "Действие в прошлом (Шекспир умер). Past Simple Passive: was written." },
        "b1_pv_ex1_q2": { correct: "c", explanation: "Действие в будущем ('next week'). Future Simple Passive: will be announced." },
        "b1_pv_ex1_q3": { correct: "a", explanation: "Общий факт, верный сейчас. Present Simple Passive: is spoken." },
        "b1_pv_ex1_q4": { correct: "c", explanation: "Действие в прошлом ('yesterday'). Past Simple Passive: was repaired." },
        "b1_pv_ex1_q5": { correct: "b", explanation: "Действие в будущем ('tomorrow'). Future Simple Passive: will be opened." },
        "b1_pv_ex1_q6": { correct: "a", explanation: "Регулярное действие ('every year'). Present Simple Passive: is visited." },
        "b1_pv_ex1_q7": { correct: "c", explanation: "Действие в прошлом ('when I was a child'). Past Simple Passive: was taken." },
        "b1_pv_ex1_q8": { correct: "b", explanation: "Действие до настоящего момента, с 'yet'. Present Perfect Passive: haven't been delivered." },
        "b1_pv_ex1_q9": { correct: "b", explanation: "Действие в прошлом ('in 1492'). Past Simple Passive: was discovered." },
        "b1_pv_ex1_q10": { correct: "c", explanation: "Условие в будущем (First Conditional). Future Simple Passive: will be cancelled." },

        // --- Упражнение 2: Continuous Tenses Passive ---
        "b1_pv_ex2_q1": { correct: "b", explanation: "Действие происходит в процессе прямо сейчас. Present Continuous Passive: is being taken." },
        "b1_pv_ex2_q2": { correct: "c", explanation: "Действие было в процессе в момент в прошлом ('when I arrived'). Past Continuous Passive: was being served." },
        "b1_pv_ex2_q3": { correct: "c", explanation: "Действие в процессе сейчас ('right now'). Present Continuous Passive: is being cleaned." },
        "b1_pv_ex2_q4": { correct: "a", explanation: "Действие было в процессе в конкретный момент прошлого ('At 5 PM yesterday'). Past Continuous Passive: were being put." },
        "b1_pv_ex2_q5": { correct: "b", explanation: "Процесс происходит в настоящий период времени ('at the moment'). Present Continuous Passive: is being redecorated." },
        "b1_pv_ex2_q6": { correct: "b", explanation: "Длительное действие в прошлом (строительство моста), которое было причиной закрытия дороги. Past Continuous Passive: was being built." },
        "b1_pv_ex2_q7": { correct: "c", explanation: "Действие в процессе сейчас ('at the moment'). Present Continuous Passive: is being filmed." },
        "b1_pv_ex2_q8": { correct: "b", explanation: "Процесс подготовки происходит сейчас. Present Continuous Passive: is being prepared." },
        "b1_pv_ex2_q9": { correct: "c", explanation: "'While' указывает на длительный процесс в прошлом. Past Continuous Passive: were being developed." },
        "b1_pv_ex2_q10": { correct: "b", explanation: "Действие в процессе сейчас ('now'). Present Continuous Passive: is being conducted." },

        // --- Упражнение 3: Future Simple & Modal Passive ---
        "b1_pv_ex3_q1": { correct: "a", explanation: "После модального глагола 'must' в пассиве используется 'be + V3'." },
        "b1_pv_ex3_q2": { correct: "c", explanation: "Future Simple Passive: will be + V3." },
        "b1_pv_ex3_q3": { correct: "a", explanation: "Future Simple Passive: will be + V3." },
        "b1_pv_ex3_q4": { correct: "a", explanation: "После модального глагола 'can' в пассиве используется 'be + V3'." },
        "b1_pv_ex3_q5": { correct: "b", explanation: "Future Simple Passive: will be + V3." },
        "b1_pv_ex3_q6": { correct: "b", explanation: "После модального глагола 'might' в пассиве используется 'be + V3'." },
        "b1_pv_ex3_q7": { correct: "a", explanation: "После модального глагола 'should' в пассиве используется 'be + V3'." },
        "b1_pv_ex3_q8": { correct: "c", explanation: "После модального глагола 'cannot' в пассиве используется 'be + V3'." },
        "b1_pv_ex3_q9": { correct: "b", explanation: "Future Simple Passive: will be + V3." },
        "b1_pv_ex3_q10": { correct: "a", explanation: "После модального глагола 'should' в пассиве используется 'be + V3'." },
        
        // --- Упражнение 4: Active or Passive? (Mixed Tenses) ---
        "b1_pv_ex4_q1": { correct: "b", explanation: "Презентацию 'проводили' (действие над ней), а не она сама себя проводила. Past Continuous Passive." },
        "b1_pv_ex4_q2": { correct: "b", explanation: "Кто-то (somebody) совершил действие. Активный залог 'stole'." },
        "b1_pv_ex4_q3": { correct: "b", explanation: "Стадион 'строят' (действие над ним). Present Continuous Passive." },
        "b1_pv_ex4_q4": { correct: "b", explanation: "Проблему 'решат' (действие над ней). Future Simple Passive." },
        "b1_pv_ex4_q5": { correct: "a", explanation: "Полиция сама совершила действие (арестовала). Активный залог 'have arrested'." },
        "b1_pv_ex4_q6": { correct: "b", explanation: "Комнату 'используют' (действие над ней). Present Continuous Passive." },
        "b1_pv_ex4_q7": { correct: "b", explanation: "Машину 'изобрели'. Вопрос о пассивном действии в прошлом. 'was invented'." },
        "b1_pv_ex4_q8": { correct: "a", explanation: "Компания сама совершает действие (нанимает). Активный залог 'employs'." },
        "b1_pv_ex4_q9": { correct: "b", explanation: "Компьютеры 'делают' (действие над ними). Present Simple Passive." },
        "b1_pv_ex4_q10": { correct: "b", explanation: "Машину 'ремонтировали' (действие над ней), пока я ждал. Past Continuous Passive." },

        // --- Упражнение 5: Sentence Transformation (Active to Passive) ---
        "b1_pv_ex5_q1": { correct: "b", explanation: "Active (Present Continuous: are building) -> Passive (Present Continuous: is being built)." },
        "b1_pv_ex5_q2": { correct: "a", explanation: "Active (Future Simple: will clean) -> Passive (Future Simple: will be cleaned)." },
        "b1_pv_ex5_q3": { correct: "b", explanation: "Active (Past Continuous: were questioning) -> Passive (Past Continuous: was being questioned)." },
        "b1_pv_ex5_q4": { correct: "a", explanation: "Active (Present Perfect: has stolen) -> Passive (Present Perfect: has been stolen)." },
        "b1_pv_ex5_q5": { correct: "b", explanation: "Active (Modal: must not leave) -> Passive (Modal: mustn't be left)." },
        "b1_pv_ex5_q6": { correct: "a", explanation: "Active (Present Simple: make) -> Passive (Present Simple: are made)." },
        "b1_pv_ex5_q7": { correct: "a", explanation: "Active (Future Simple: will launch) -> Passive (Future Simple: will be launched)." },
        "b1_pv_ex5_q8": { correct: "b", explanation: "Active (Past Continuous: was serving) -> Passive (Past Continuous: was being served)." },
        "b1_pv_ex5_q9": { correct: "a", explanation: "Active (Modal: can't use) -> Passive (Modal: can't be used)." },
        "b1_pv_ex5_q10": { correct: "b", explanation: "Active (Present Continuous: is checking) -> Passive (Present Continuous: are being checked)." }
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
