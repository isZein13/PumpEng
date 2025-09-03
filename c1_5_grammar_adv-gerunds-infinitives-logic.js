// c1_5_grammar_adv-gerunds-infinitives-logic.js
document.addEventListener('DOMContentLoaded', () => {
    const grammarCorrectAnswers = {
        // --- Упражнение 1: Perfect Forms ---
        "c1_gi_ex1_q1": { correct: "b", explanation: "Он горд сейчас за то, что сдал экзамен в прошлом. Действие герундия раньше -> Perfect Gerund." },
        "c1_gi_ex1_q2": { correct: "c", explanation: "Считается (сейчас), что она видела (в прошлом). Действие инфинитива раньше -> Perfect Infinitive." },
        "c1_gi_ex1_q3": { correct: "d", explanation: "Он признал (в прошлом) то, что сделал еще раньше. Perfect Gerund." },
        "c1_gi_ex1_q4": { correct: "c", explanation: "Я сожалею (сейчас) о том, что забыл (в прошлом). Perfect Infinitive." },
        "c1_gi_ex1_q5": { correct: "c", explanation: "Действие 'закончив' произошло до действия 'пошли гулять'. Perfect Participle Clause." },
        "c1_gi_ex1_q6": { correct: "c", explanation: "Говорят (сейчас), что он жил (в прошлом году). Perfect Continuous Infinitive." },
        "c1_gi_ex1_q7": { correct: "d", explanation: "Она сожалеет (сейчас) о том, что потратила деньги (в прошлом). Perfect Gerund." },
        "c1_gi_ex1_q8": { correct: "c", explanation: "Кажется (сейчас), что он потерял телефон (в прошлом). Perfect Infinitive." },
        "c1_gi_ex1_q9": { correct: "d", explanation: "Тот факт, что она никогда не была за границей (до поездки), был причиной ее волнения. Perfect Participle Clause." },
        "c1_gi_ex1_q10": { correct: "c", explanation: "Он утверждает (сейчас) о том, кем он был (в прошлом). Perfect Infinitive." },

        // --- Упражнение 2: Passive Forms ---
        "c1_gi_ex2_q1": { correct: "c", explanation: "После 'likes' - герундий. Пассив, так как 'мне говорят'. Passive Gerund: being told." },
        "c1_gi_ex2_q2": { correct: "b", explanation: "После 'is expected' - инфинитив. Пассив, так как стадион 'будет построен'. Passive Infinitive: to be completed." },
        "c1_gi_ex2_q3": { correct: "b", explanation: "После 'mind' - герундий. Пассив, так как 'меня выбирают'. Passive Gerund: being chosen." },
        "c1_gi_ex2_q4": { correct: "c", explanation: "После 'needs' может быть как Passive Infinitive, так и активный герундий с пассивным значением." },
        "c1_gi_ex2_q5": { correct: "a", explanation: "После 'avoids' - герундий. Пассив, так как 'его видят'. Passive Gerund: being seen." },
        "c1_gi_ex2_q6": { correct: "b", explanation: "После 'is going to' - инфинитив. Пассив, так как здание 'будут сносить'. Passive Infinitive: to be demolished." },
        "c1_gi_ex2_q7": { correct: "d", explanation: "После 'look forward to' - герундий. Пассив, так как 'меня пригласят'. Passive Gerund: being invited." },
        "c1_gi_ex2_q8": { correct: "a", explanation: "После 'seems' - инфинитив. Ему платят. Passive Infinitive: to be paid." },
        "c1_gi_ex2_q9": { correct: "c", explanation: "После 'appreciates' - герундий. Ее узнают/хвалят. Passive Gerund: being recognized." },
        "c1_gi_ex2_q10": { correct: "c", explanation: "После 'deserves' - инфинитив. Проблему следует рассмотреть. Passive Infinitive: to be considered." },

        // --- Упражнение 3: Bare Infinitive ---
        "c1_gi_ex3_q1": { correct: "c", explanation: "После модальных глаголов ('must') используется инфинитив без 'to'." },
        "c1_gi_ex3_q2": { correct: "a", explanation: "После 'make someone do something' используется инфинитив без 'to'." },
        "c1_gi_ex3_q3": { correct: "b", explanation: "После 'Let's' используется инфинитив без 'to'." },
        "c1_gi_ex3_q4": { correct: "d", explanation: "После глаголов восприятия ('see', 'hear', 'feel') + object используется инфинитив без 'to' (для завершенного действия) или герундий (для процесса)." },
        "c1_gi_ex3_q5": { correct: "c", explanation: "После модальных глаголов ('can') используется инфинитив без 'to'." },
        "c1_gi_ex3_q6": { correct: "c", explanation: "После 'let someone do something' используется инфинитив без 'to'." },
        "c1_gi_ex3_q7": { correct: "a", explanation: "После глаголов восприятия ('hear') + object используется инфинитив без 'to' (услышал весь разговор)." },
        "c1_gi_ex3_q8": { correct: "c", explanation: "После конструкции 'had better' используется инфинитив без 'to'." },
        "c1_gi_ex3_q9": { correct: "a", explanation: "В пассивной форме 'was made' используется инфинитив с 'to'. Это исключение." },
        "c1_gi_ex3_q10": { correct: "c", explanation: "После конструкции 'would rather' используется инфинитив без 'to'." },
        
        // --- Упражнение 4: Mixed Advanced Forms ---
        "c1_gi_ex4_q1": { correct: "a", explanation: "Воспоминание о прошлом действии. Обычный герундий 'locking' подходит лучше всего." },
        "c1_gi_ex4_q2": { correct: "b", explanation: "После 'claims' используется инфинитив. Речь о текущем состоянии, поэтому простой инфинитив 'to be'." },
        "c1_gi_ex4_q3": { correct: "d", explanation: "Исключение: после 'make' в пассиве ('was made') используется инфинитив с 'to'." },
        "c1_gi_ex4_q4": { correct: "b", explanation: "После предлога 'about' - герундий. Пассивная форма, так как он застрял. 'being stuck'." },
        "c1_gi_ex4_q5": { correct: "a", explanation: "После 'seem' используется инфинитив. Для описания процесса в данный момент - Continuous Infinitive: 'to be having'." },
        "c1_gi_ex4_q6": { correct: "c", explanation: "Сожаление о прошлом действии (would love... but didn't). Действие инфинитива раньше -> Perfect Infinitive 'to have seen'." },
        "c1_gi_ex4_q7": { correct: "c", explanation: "После 'let me' используется инфинитив без 'to'." },
        "c1_gi_ex4_q8": { correct: "b", explanation: "Обвинение в действии, которое произошло до обвинения. Perfect Gerund 'having forged'." },
        "c1_gi_ex4_q9": { correct: "a", explanation: "После 'see someone do something' (увидеть, как кто-то сделал что-то) - инфинитив без 'to'." },
        "c1_gi_ex4_q10": { correct: "d", explanation: "Сожаление о прошлом пассивном действии. 'for' + Perfect Passive Gerund: for having been misunderstood." },

        // --- Упражнение 5: Rephrasing Sentences ---
        "c1_gi_ex5_q1": { correct: "d", explanation: "Сожаление о прошлом действии - Perfect Gerund. 'not having seen'." },
        "c1_gi_ex5_q2": { correct: "a", explanation: "'force someone to do' -> 'make someone do' (без to)." },
        "c1_gi_ex5_q3": { correct: "c", explanation: "Он не кажется (сейчас) сделавшим что-то (в прошлом). 'seem to have meant'." },
        "c1_gi_ex5_q4": { correct: "d", explanation: "Отрицание прошлого действия -> Perfect Gerund. 'denied having cheated'." },
        "c1_gi_ex5_q5": { correct: "b", explanation: "После предлога 'against' используется герундий. 'advise against investing'." },
        "c1_gi_ex5_q6": { correct: "b", explanation: "Воспоминание о процессе в прошлом. 'remember seeing him leaving'." },
        "c1_gi_ex5_q7": { correct: "b", explanation: "После 'dislikes' - герундий. Пассивная форма -> 'being criticized'." },
        "c1_gi_ex5_q8": { correct: "c", explanation: "Говорят (сейчас), что он был (в прошлом). 'is said to have been'." },
        "c1_gi_ex5_q9": { correct: "c", explanation: "После 'let us' используется инфинитив без 'to'." },
        "c1_gi_ex5_q10": { correct: "d", explanation: "Сожаление о прошлом -> 'for' + Perfect Gerund. 'sorry for not having helped'." }
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
