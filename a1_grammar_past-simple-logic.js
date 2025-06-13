// a1_grammar_past-simple-logic.js
document.addEventListener('DOMContentLoaded', () => {
    const grammarCorrectAnswers = {
        // --- Упражнение 1: Правильные глаголы (+ed) ---
        "a1_past_s_ex1_q1": { correct: "c", explanation: "Для Past Simple к правильному глаголу 'watch' добавляется -ed: watched." },
        "a1_past_s_ex1_q2": { correct: "c", explanation: "Для Past Simple к правильному глаголу 'visit' добавляется -ed: visited." },
        "a1_past_s_ex1_q3": { correct: "c", explanation: "Для Past Simple к правильному глаголу 'play' добавляется -ed: played." },
        "a1_past_s_ex1_q4": { correct: "c", explanation: "Для Past Simple к правильному глаголу 'clean' добавляется -ed: cleaned." },
        "a1_past_s_ex1_q5": { correct: "c", explanation: "Для Past Simple к правильному глаголу 'talk' добавляется -ed: talked." },
        "a1_past_s_ex1_q6": { correct: "c", explanation: "Для Past Simple к правильному глаголу 'help' добавляется -ed: helped." },
        "a1_past_s_ex1_q7": { correct: "c", explanation: "Для Past Simple к правильному глаголу 'cook' добавляется -ed: cooked." },
        "a1_past_s_ex1_q8": { correct: "c", explanation: "Для Past Simple к правильному глаголу 'listen' добавляется -ed: listened." },
        "a1_past_s_ex1_q9": { correct: "c", explanation: "Для Past Simple к правильному глаголу 'rain' добавляется -ed: rained." },
        "a1_past_s_ex1_q10": { correct: "c", explanation: "Для Past Simple к правильному глаголу 'walk' добавляется -ed: walked." },

        // --- Упражнение 2: Неправильные глаголы (V2) ---
        "a1_past_s_ex2_q1": { correct: "c", explanation: "'go' - неправильный глагол. Его форма Past Simple (V2) - 'went'." },
        "a1_past_s_ex2_q2": { correct: "c", explanation: "'see' - неправильный глагол. Его форма Past Simple (V2) - 'saw'." },
        "a1_past_s_ex2_q3": { correct: "c", explanation: "'have' - неправильный глагол. Его форма Past Simple (V2) - 'had'." },
        "a1_past_s_ex2_q4": { correct: "c", explanation: "'make' - неправильный глагол. Его форма Past Simple (V2) - 'made'." },
        "a1_past_s_ex2_q5": { correct: "c", explanation: "'come' - неправильный глагол. Его форма Past Simple (V2) - 'came'." },
        "a1_past_s_ex2_q6": { correct: "c", explanation: "'eat' - неправильный глагол. Его форма Past Simple (V2) - 'ate'." },
        "a1_past_s_ex2_q7": { correct: "c", explanation: "'give' - неправильный глагол. Его форма Past Simple (V2) - 'gave'." },
        "a1_past_s_ex2_q8": { correct: "c", explanation: "'take' - неправильный глагол. Его форма Past Simple (V2) - 'took'." },
        "a1_past_s_ex2_q9": { correct: "c", explanation: "'find' - неправильный глагол. Его форма Past Simple (V2) - 'found'." },
        "a1_past_s_ex2_q10": { correct: "c", explanation: "'buy' - неправильный глагол. Его форма Past Simple (V2) - 'bought'." },

        // --- Упражнение 3: Отрицания (didn't + V1) ---
        "a1_past_s_ex3_q1": { correct: "c", explanation: "Отрицание в Past Simple: didn't + начальная форма (watch)." },
        "a1_past_s_ex3_q2": { correct: "b", explanation: "Отрицание в Past Simple: didn't + начальная форма (go)." },
        "a1_past_s_ex3_q3": { correct: "c", explanation: "Отрицание в Past Simple: didn't + начальная форма (play)." },
        "a1_past_s_ex3_q4": { correct: "a", explanation: "Отрицание в Past Simple: didn't + начальная форма (finish)." },
        "a1_past_s_ex3_q5": { correct: "c", explanation: "Отрицание в Past Simple: didn't + начальная форма (see)." },
        "a1_past_s_ex3_q6": { correct: "a", explanation: "Отрицание в Past Simple: didn't + начальная форма (call)." },
        "a1_past_s_ex3_q7": { correct: "b", explanation: "Отрицание в Past Simple: didn't + начальная форма (eat)." },
        "a1_past_s_ex3_q8": { correct: "b", explanation: "Отрицание в Past Simple: didn't + начальная форма (understand)." },
        "a1_past_s_ex3_q9": { correct: "b", explanation: "Отрицание в Past Simple: didn't + начальная форма (buy)." },
        "a1_past_s_ex3_q10": { correct: "b", explanation: "Отрицание в Past Simple: didn't + начальная форма (have)." },

        // --- Упражнение 4: Вопросы (Did + S + V1?) ---
        "a1_past_s_ex4_q1": { correct: "a", explanation: "Вопрос в Past Simple: Did + you + начальная форма (see)?" },
        "a1_past_s_ex4_q2": { correct: "a", explanation: "Специальный вопрос в Past Simple: What + did + he + начальная форма (do)?" },
        "a1_past_s_ex4_q3": { correct: "a", explanation: "Специальный вопрос в Past Simple: Where + did + they + начальная форма (go)?" },
        "a1_past_s_ex4_q4": { correct: "a", explanation: "Вопрос в Past Simple: Did + she + начальная форма (like)?" },
        "a1_past_s_ex4_q5": { correct: "a", explanation: "Специальный вопрос в Past Simple: When + did + you + начальная форма (finish)?" },
        "a1_past_s_ex4_q6": { correct: "a", explanation: "Вопрос в Past Simple: Did + it + начальная форма (rain)?" },
        "a1_past_s_ex4_q7": { correct: "a", explanation: "Специальный вопрос в Past Simple: Why + did + he + начальная форма (leave)?" },
        "a1_past_s_ex4_q8": { correct: "a", explanation: "Вопрос в Past Simple: Did + we + начальная форма (meet)?" },
        "a1_past_s_ex4_q9": { correct: "a", explanation: "Специальный вопрос в Past Simple: How + did + she + начальная форма (find)?" },
        "a1_past_s_ex4_q10": { correct: "a", explanation: "Вопрос в Past Simple: Did + they + начальная форма (enjoy)?" },

        // --- Упражнение 5: Глагол 'to be' в Past Simple (was/were) ---
        "a1_past_s_ex5_q1": { correct: "c", explanation: "Глагол 'to be' в Past Simple для 'I' - 'was'." },
        "a1_past_s_ex5_q2": { correct: "b", explanation: "Глагол 'to be' в Past Simple для 'She' - 'was'." },
        "a1_past_s_ex5_q3": { correct: "d", explanation: "Глагол 'to be' в Past Simple для 'We' - 'were'." },
        "a1_past_s_ex5_q4": { correct: "b", explanation: "Глагол 'to be' в Past Simple для 'It' - 'was'." },
        "a1_past_s_ex5_q5": { correct: "c", explanation: "Отрицание с 'to be' в Past Simple для 'They': weren't (were not)." },
        "a1_past_s_ex5_q6": { correct: "c", explanation: "Вопрос с 'to be' в Past Simple для 'You': Were you...?" },
        "a1_past_s_ex5_q7": { correct: "c", explanation: "Глагол 'to be' в Past Simple для 'The shops' (they) - 'were'." },
        "a1_past_s_ex5_q8": { correct: "c", explanation: "Глагол 'to be' в Past Simple для 'My keys' (they) - 'were'." },
        "a1_past_s_ex5_q9": { correct: "a", explanation: "Отрицание с 'to be' в Past Simple для 'He': wasn't (was not)." },
        "a1_past_s_ex5_q10": { correct: "a", explanation: "Вопрос с 'to be' в Past Simple для 'She': Was she...?" },

        // --- Упражнение 6: Past Simple vs Present Simple ---
        "a1_ps_vs_past_s_ex6_q1": { correct: "c", explanation: "'usually walk' (PS - рутина), 'yesterday I took' (Past Simple - вчера)." },
        "a1_ps_vs_past_s_ex6_q2": { correct: "a", explanation: "'visits every Sunday' (PS - рутина), 'Last Sunday she didn't visit' (Past Simple - прошл. воскресенье)." },
        "a1_ps_vs_past_s_ex6_q3": { correct: "b", explanation: "'are playing now' (Present Continuous - сейчас, но для A1 сравнения с Past Simple, 'played' - правильный ответ на вторую часть). Если бы первая часть была PS, то 'play'." },
        "a1_ps_vs_past_s_ex6_q4": { correct: "a", explanation: "'What do you do every morning?' (PS - рутина). 'What did you do yesterday morning?' (Past Simple - вчера утром)." },
        "a1_ps_vs_past_s_ex6_q5": { correct: "b", explanation: "'He doesn't like' (PS - общее предпочтение). 'he tried it last week' (Past Simple - на прошлой неделе)." },
        "a1_ps_vs_past_s_ex6_q6": { correct: "a", explanation: "'always have' (PS - рутина). 'Yesterday we had' (Past Simple - вчера)." },
        "a1_ps_vs_past_s_ex6_q7": { correct: "b", explanation: "'Does she go often?' (PS - рутина). 'Yes, she went last night' (Past Simple - прошлым вечером)." },
        "a1_ps_vs_past_s_ex6_q8": { correct: "a", explanation: "'don't understand now' (PS - состояние). 'didn't understand yesterday' (Past Simple - вчера)." },
        "a1_ps_vs_past_s_ex6_q9": { correct: "a", explanation: "'sleeps a lot every day' (PS - рутина). 'Yesterday it slept' (Past Simple - вчера)." },
        "a1_ps_vs_past_s_ex6_q10": { correct: "a", explanation: "'Do they usually eat?' (PS - рутина). 'Yes, they ate last Friday' (Past Simple - в прошлую пятницу)." },

        // --- Упражнение 7: Past Simple vs Present Simple vs Present Continuous ---
        "a1_ps_pc_past_s_ex7_q1": { correct: "b", explanation: "'Look! The children are playing' (PC - сейчас). 'They love winter' (PS - общее предпочтение/факт)." },
        "a1_ps_pc_past_s_ex7_q2": { correct: "a", explanation: "'didn't watch TV last night' (Past Simple - прошлым вечером). 'I was very tired' (Past Simple 'to be'). 'I usually watch TV' (PS - рутина)." },
        "a1_ps_pc_past_s_ex7_q3": { correct: "b", explanation: "'What are you doing now?' (PC - сейчас). 'I am making a cup of tea' (PC - сейчас)." },
        "a1_ps_pc_past_s_ex7_q4": { correct: "b", explanation: "'She goes to Italy every summer' (PS - рутина). 'Last summer, she visited Rome' (Past Simple). 'Now, she is planning her next trip' (PC - сейчас/временное действие)." },
        "a1_ps_pc_past_s_ex7_q5": { correct: "a", explanation: "'We don't usually eat' (PS - рутина). 'yesterday we had burgers' (Past Simple)." },
        "a1_ps_pc_past_s_ex7_q6": { correct: "b", explanation: "'Is it raining now?' (PC - сейчас). 'No, but it rained heavily this morning' (Past Simple)." },
        "a1_ps_pc_past_s_ex7_q7": { correct: "b", explanation: "'My brother is studying for his exams at the moment' (PC - сейчас/в этот период). 'He studies very hard every day' (PS - рутина)." },
        "a1_ps_pc_past_s_ex7_q8": { correct: "a", explanation: "'I saw a good film last night' (Past Simple). 'Do you often go to the cinema?' (PS - вопрос о рутине)." },
        "a1_ps_pc_past_s_ex7_q9": { correct: "a", explanation: "'What do your parents do?' (PS - вопрос о профессии/постоянной деятельности). 'They work at the local hospital' (PS - постоянная работа)." },
        "a1_ps_pc_past_s_ex7_q10": { correct: "c", explanation: "'He called me an hour ago' (Past Simple). 'He is waiting for me at the station now' (PC - сейчас)." }
    };

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
