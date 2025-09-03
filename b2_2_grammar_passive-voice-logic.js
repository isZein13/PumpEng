// b2_2_grammar_passive-voice-logic.js
document.addEventListener('DOMContentLoaded', () => {
    const grammarCorrectAnswers = {
        // --- Упражнение 1: Passive with Modals ---
        "b2_pv_ex1_q1": { correct: "b", explanation: "После модального глагола 'can' используется 'be + V3' (solved)." },
        "b2_pv_ex1_q2": { correct: "a", explanation: "После 'must' используется 'be + V3' (submitted)." },
        "b2_pv_ex1_q3": { correct: "a", explanation: "После 'should' используется 'be + V3' (followed)." },
        "b2_pv_ex1_q4": { correct: "b", explanation: "В отрицании после 'must not' используется 'be + V3' (taken)." },
        "b2_pv_ex1_q5": { correct: "a", explanation: "После 'might' используется 'be + V3' (found)." },
        "b2_pv_ex1_q6": { correct: "b", explanation: "После 'has to' используется 'be + V3' (found)." },
        "b2_pv_ex1_q7": { correct: "b", explanation: "После 'may' используется 'be + V3' (postponed)." },
        "b2_pv_ex1_q8": { correct: "a", explanation: "После 'cannot' используется 'be + V3' (copied)." },
        "b2_pv_ex1_q9": { correct: "b", explanation: "После 'ought to' используется 'be + V3' (spent)." },
        "b2_pv_ex1_q10": { correct: "a", explanation: "После 'will' в пассиве используется 'be + V3' (revealed)." },

        // --- Упражнение 2: Passive with Infinitives and Gerunds ---
        "b2_pv_ex2_q1": { correct: "c", explanation: "После глагола 'want' используется пассивный инфинитив 'to be promoted'." },
        "b2_pv_ex2_q2": { correct: "c", explanation: "После глагола 'hate' используется пассивный герундий 'being told'." },
        "b2_pv_ex2_q3": { correct: "c", explanation: "После 'needs' можно использовать как пассивный инфинитив ('to be cleaned'), так и герундий ('cleaning') в пассивном значении. Оба варианта верны." },
        "b2_pv_ex2_q4": { correct: "a", explanation: "После глагола 'hope' используется пассивный инфинитив 'to be invited'." },
        "b2_pv_ex2_q5": { correct: "c", explanation: "После глагола 'enjoy' используется пассивный герундий 'being admired'." },
        "b2_pv_ex2_q6": { correct: "a", explanation: "После глагола 'expect' используется пассивный инфинитив 'to be given'." },
        "b2_pv_ex2_q7": { correct: "b", explanation: "После 'remember' для воспоминаний о прошлом действии используется пассивный герундий 'being taken'." },
        "b2_pv_ex2_q8": { correct: "b", explanation: "После глагола 'seem' используется пассивный инфинитив 'to be written'." },
        "b2_pv_ex2_q9": { correct: "b", explanation: "После глагола 'avoid' используется пассивный герундий 'being photographed'." },
        "b2_pv_ex2_q10": { correct: "b", explanation: "После глагола 'demand' используется пассивный инфинитив 'to be paid'." },

        // --- Упражнение 3: Causative Form (have/get something done) ---
        "b2_pv_ex3_q1": { correct: "b", explanation: "Правильная структура: had + object (the roof) + V3 (repaired)." },
        "b2_pv_ex3_q2": { correct: "c", explanation: "Правильная структура: have + object (her hair) + V3 (cut)." },
        "b2_pv_ex3_q3": { correct: "b", explanation: "Правильная структура: get + object (our car) + V3 (serviced)." },
        "b2_pv_ex3_q4": { correct: "c", explanation: "Для негативных событий, которые произошли с кем-то, также используется эта структура: had + object + V3." },
        "b2_pv_ex3_q5": { correct: "a", explanation: "После 'must' нужен инфинитив 'get'. Полная структура: must get this document translated." },
        "b2_pv_ex3_q6": { correct: "b", explanation: "'get someone to do it' (заставить кого-то сделать) противопоставляется 'have the room painted' (сделать так, чтобы комнату покрасили)." },
        "b2_pv_ex3_q7": { correct: "a", explanation: "Каузативная конструкция для регулярного действия: get + object + V3." },
        "b2_pv_ex3_q8": { correct: "a", explanation: "Структура в Past Perfect: had + object + V3 (had their packages delivered)." },
        "b2_pv_ex3_q9": { correct: "b", explanation: "После модального глагола 'should': have + object + V3." },
        "b2_pv_ex3_q10": { correct: "a", explanation: "Регулярное действие в Present Simple: has + object + V3." },
        
        // --- Упражнение 4: Passive with Reporting Verbs ---
        "b2_pv_ex4_q1": { correct: "b", explanation: "Конструкция 'It is said that...' используется для передачи общего мнения." },
        "b2_pv_ex4_q2": { correct: "b", explanation: "Конструкция 'Subject + is said + to + infinitive': This restaurant is said to be..." },
        "b2_pv_ex4_q3": { correct: "a", explanation: "Конструкция 'He is believed to be...'." },
        "b2_pv_ex4_q4": { correct: "b", explanation: "Конструкция 'It is known that...'." },
        "b2_pv_ex4_q5": { correct: "b", explanation: "Reporting verb 'thought' (Past Simple), поэтому пассив тоже в Past Simple: was thought." },
        "b2_pv_ex4_q6": { correct: "b", explanation: "Конструкция 'The government is expected to...'" },
        "b2_pv_ex4_q7": { correct: "b", explanation: "Reporting verb 'reported' (Past Simple), поэтому пассив тоже в Past Simple: were reported." },
        "b2_pv_ex4_q8": { correct: "b", explanation: "Reporting verb 'alleged' (Past Simple), поэтому пассив тоже в Past Simple: was alleged." },
        "b2_pv_ex4_q9": { correct: "b", explanation: "Конструкция 'He is considered to be...'." },
        "b2_pv_ex4_q10": { correct: "a", explanation: "Конструкция 'The new drug is claimed to...'" },

        // --- Упражнение 5: Mixed Tense Passive Transformation ---
        "b2_pv_ex5_q1": { correct: "b", explanation: "Active Present Continuous (are building) -> Passive Present Continuous (is being built)." },
        "b2_pv_ex5_q2": { correct: "b", explanation: "Active Past Perfect (had stolen) -> Passive Past Perfect (had been stolen)." },
        "b2_pv_ex5_q3": { correct: "b", explanation: "Active Future Perfect (will have launched) -> Passive Future Perfect (will have been launched)." },
        "b2_pv_ex5_q4": { correct: "a", explanation: "Active Present Perfect (has approved) -> Passive Present Perfect (have been approved)." },
        "b2_pv_ex5_q5": { correct: "a", explanation: "Active Modal (should check) -> Passive Modal (should be checked)." },
        "b2_pv_ex5_q6": { correct: "b", explanation: "Active Past Continuous (were discussing) -> Passive Past Continuous (was being discussed)." },
        "b2_pv_ex5_q7": { correct: "b", explanation: "Active Present Perfect Negative (has not solved) -> Passive Present Perfect Negative (hasn't been solved)." },
        "b2_pv_ex5_q8": { correct: "a", explanation: "Active 'be going to' -> Passive 'be going to be written'." },
        "b2_pv_ex5_q9": { correct: "a", explanation: "Active Past Perfect Continuous не имеет стандартной пассивной формы. Наиболее близкий по смыслу - Past Perfect Simple Passive." },
        "b2_pv_ex5_q10": { correct: "b", explanation: "Active Modal Perfect (might have left) -> Passive Modal Perfect (might have been left)." }
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
