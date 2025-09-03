// c1_12_grammar_phrasal-verbs-idioms-logic.js
document.addEventListener('DOMContentLoaded', () => {
    const grammarCorrectAnswers = {
        // --- Упражнение 1: Phrasal Verbs with Multiple Meanings ---
        "c1_pvi_ex1_q1": { correct: "b", explanation: "'take off' - взлетать (о самолете); резко пойти в гору, стать успешным (о карьере)." },
        "c1_pvi_ex1_q2": { correct: "d", explanation: "'bring up' - поднять тему для обсуждения; воспитывать ребенка." },
        "c1_pvi_ex1_q3": { correct: "b", explanation: "'pick up' - забрать кого-то (на машине); нахвататься (знаний, языка)." },
        "c1_pvi_ex1_q4": { correct: "b", explanation: "'put up with' - мириться с чем-то (отдельный глагол); 'put someone up' - приютить кого-то." },
        "c1_pvi_ex1_q5": { correct: "a", explanation: "'go off' - сработать (о будильнике, сигнализации); взорваться (о бомбе)." },
        "c1_pvi_ex1_q6": { correct: "d", explanation: "'to fold' - закрыться, прекратить существование (о бизнесе); объединяться, сливаться (о компаниях)." },
        "c1_pvi_ex1_q7": { correct: "d", explanation: "'fill out' (AmE) и 'fill in' (BrE) - заполнить форму; 'fill up' - наполняться (о стадионе)." },
        "c1_pvi_ex1_q8": { correct: "a", explanation: "'make up' - выдумать историю; помириться." },
        "c1_pvi_ex1_q9": { correct: "c", explanation: "'handed down' - передаваться по наследству; выносить (о решении, приговоре)." },
        "c1_pvi_ex1_q10": { correct: "b", explanation: "'lay off' - увольнять по сокращению; перестать что-то делать (беспокоить)." },

        // --- Упражнение 2: Formal & Informal Phrasal Verbs ---
        "c1_pvi_ex2_q1": { correct: "a", explanation: "'discover' - более формальный синоним для 'find out' (выяснить)." },
        "c1_pvi_ex2_q2": { correct: "c", explanation: "'dismiss' - формальный термин для увольнения, в то время как 'let go' - более мягкий и разговорный." },
        "c1_pvi_ex2_q3": { correct: "a", explanation: "'investigate' - формальный синоним для 'look into' (расследовать)." },
        "c1_pvi_ex2_q4": { correct: "c", explanation: "'create' или 'devise' - более формальные синонимы для 'come up with' (придумать)." },
        "c1_pvi_ex2_q5": { correct: "b", explanation: "'postpone' - формальный синоним для 'put off' (отложить)." },
        "c1_pvi_ex2_q6": { correct: "b", explanation: "'tolerate' - формальный синоним для 'put up with' (терпеть, мириться)." },
        "c1_pvi_ex2_q7": { correct: "b", explanation: "'reject' - формальный синоним для 'turn down' (отклонить)." },
        "c1_pvi_ex2_q8": { correct: "b", explanation: "'recover from' - формальный синоним для 'get over' (оправиться от)." },
        "c1_pvi_ex2_q9": { correct: "c", explanation: "'review' - формальный синоним для 'go over' (просмотреть, проверить)." },
        "c1_pvi_ex2_q10": { correct: "b", explanation: "'indicate' - формальный синоним для 'point out' (указать на что-либо)." },

        // --- Упражнение 3: Idioms (Body Parts) ---
        "c1_pvi_ex3_q1": { correct: "a", explanation: "'to cost an arm and a leg' - стоить очень дорого." },
        "c1_pvi_ex3_q2": { correct: "b", explanation: "'to give it a shot' - попробовать, рискнуть." },
        "c1_pvi_ex3_q3": { correct: "c", explanation: "'Break a leg!' - Ни пуха, ни пера! (пожелание удачи)." },
        "c1_pvi_ex3_q4": { correct: "b", explanation: "'to keep an eye on' - присмотреть за чем-либо." },
        "c1_pvi_ex3_q5": { correct: "c", explanation: "'to get cold feet' - струсить, испугаться в последний момент." },
        "c1_pvi_ex3_q6": { correct: "c", explanation: "'to pull someone's leg' - разыгрывать, подшучивать над кем-то." },
        "c1_pvi_ex3_q7": { correct: "b", explanation: "'to give someone a hand' - помочь кому-либо." },
        "c1_pvi_ex3_q8": { correct: "d", explanation: "'to learn by heart' - выучить наизусть." },
        "c1_pvi_ex3_q9": { correct: "a", explanation: "'right-hand man' - правая рука, главный помощник." },
        "c1_pvi_ex3_q10": { correct: "a", explanation: "'to be all ears' - внимательно слушать." },
        
        // --- Упражнение 4: Idioms (Feelings & Situations) ---
        "c1_pvi_ex4_q1": { correct: "c", explanation: "'to be over the moon' - быть на седьмом небе от счастья." },
        "c1_pvi_ex4_q2": { correct: "c", explanation: "'a piece of cake' - очень легко, проще простого." },
        "c1_pvi_ex4_q3": { correct: "b", explanation: "'once in a blue moon' - очень редко." },
        "c1_pvi_ex4_q4": { correct: "d", explanation: "'to be in hot water' - иметь неприятности." },
        "c1_pvi_ex4_q5": { correct: "a", explanation: "'a blessing in disguise' - нет худа без добра." },
        "c1_pvi_ex4_q6": { correct: "b", explanation: "'to be under the weather' - плохо себя чувствовать, нездоровиться." },
        "c1_pvi_ex4_q7": { correct: "a", explanation: "'to be on the ball' - быть расторопным, сообразительным, хорошо справляться." },
        "c1_pvi_ex4_q8": { correct: "b", explanation: "'to beat around the bush' - ходить вокруг да около." },
        "c1_pvi_ex4_q9": { correct: "d", explanation: "'to bite the bullet' - стиснуть зубы и сделать что-то неприятное, но необходимое." },
        "c1_pvi_ex4_q10": { correct: "c", explanation: "'to spill the beans' - проболтаться, выдать секрет." },

        // --- Упражнение 5: Mixed Contextual Practice ---
        "c1_pvi_ex5_q1": { correct: "b", explanation: "'to put off' - отложить." },
        "c1_pvi_ex5_q2": { correct: "c", explanation: "'spilled the beans' - проболтался." },
        "c1_pvi_ex5_q3": { correct: "a", explanation: "'to take on' - взяться за (вызов, ответственность)." },
        "c1_pvi_ex5_q4": { correct: "b", explanation: "'a pain in the neck' - зануда, невыносимый человек." },
        "c1_pvi_ex5_q5": { correct: "b", explanation: "'to take on' - нанимать на работу." },
        "c1_pvi_ex5_q6": { correct: "a", explanation: "'to be down in the dumps' - быть в унынии, хандрить." },
        "c1_pvi_ex5_q7": { correct: "c", explanation: "'to brush up on' - освежить знания." },
        "c1_pvi_ex5_q8": { correct: "a", explanation: "'to make up' a story - выдумать историю." },
        "c1_pvi_ex5_q9": { correct: "c", explanation: "'to hit the sack' - отправиться спать." },
        "c1_pvi_ex5_q10": { correct: "a", explanation: "'to come in for criticism' - подвергнуться критике." }
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
