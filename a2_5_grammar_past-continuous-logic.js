// a2_5_grammar_past-continuous-logic.js
document.addEventListener('DOMContentLoaded', () => {
    const grammarCorrectAnswers = {
        // --- Упражнение 1: Образование (was/were + V-ing) ---
        "a2_pc_ex1_q1": { correct: "b", explanation: "Для 'I' используется 'was'." },
        "a2_pc_ex1_q2": { correct: "a", explanation: "Для 'She' используется 'was'." },
        "a2_pc_ex1_q3": { correct: "b", explanation: "Для 'They' используется 'were'." },
        "a2_pc_ex1_q4": { correct: "a", explanation: "Для 'He' используется 'was'. Удваиваем 'm' в 'swimming'." },
        "a2_pc_ex1_q5": { correct: "b", explanation: "Для 'We' используется 'were'." },
        "a2_pc_ex1_q6": { correct: "a", explanation: "Для 'The sun' (it) используется 'was'." },
        "a2_pc_ex1_q7": { correct: "b", explanation: "Для 'You' используется 'were'." },
        "a2_pc_ex1_q8": { correct: "a", explanation: "Для 'My cat' (it) используется 'was'." },
        "a2_pc_ex1_q9": { correct: "b", explanation: "Для 'The children' (they) используется 'were'." },
        "a2_pc_ex1_q10": { correct: "b", explanation: "Для 'It' используется 'was'." },

        // --- Упражнение 2: Действие в конкретный момент в прошлом ---
        "a2_pc_ex2_q1": { correct: "b", explanation: "Указан конкретный момент в прошлом ('At 8 PM last night'), действие было в процессе." },
        "a2_pc_ex2_q2": { correct: "b", explanation: "Вопрос о действии в процессе в конкретный момент прошлого ('at this time yesterday')." },
        "a2_pc_ex2_q3": { correct: "a", explanation: "Действие было в процессе в точное время ('at 9 o'clock')." },
        "a2_pc_ex2_q4": { correct: "b", explanation: "Действие длилось в конкретный момент ('at midday')." },
        "a2_pc_ex2_q5": { correct: "a", explanation: "'lived' тоже возможно, но 'were living' лучше подчеркивает длительность проживания в тот период." },
        "a2_pc_ex2_q6": { correct: "b", explanation: "Он был в процессе принятия душа, поэтому не мог ответить." },
        "a2_pc_ex2_q7": { correct: "b", explanation: "В полночь я был в процессе сна." },
        "a2_pc_ex2_q8": { correct: "c", explanation: "Фоновое действие (птицы пели), которое происходило в момент, когда я проснулся." },
        "a2_pc_ex2_q9": { correct: "b", explanation: "'all evening' подчеркивает длительность процесса." },
        "a2_pc_ex2_q10": { correct: "a", explanation: "Описание фонового действия: шел снег." },

        // --- Упражнение 3: Прерванные действия (с Past Simple) ---
        "a2_pc_ex3_q1": { correct: "b", explanation: "Длительное действие 'was cooking' было прервано коротким 'rang'." },
        "a2_pc_ex3_q2": { correct: "b", explanation: "Короткое действие 'fell' прервало длительное 'was running'." },
        "a2_pc_ex3_q3": { correct: "c", explanation: "Когда я пришел (короткое 'arrived'), они были в процессе ужина ('were having')." },
        "a2_pc_ex3_q4": { correct: "a", explanation: "Она была в процессе просмотра ТВ ('was watching'), когда я позвонил ('called')." },
        "a2_pc_ex3_q5": { correct: "a", explanation: "Длительное действие 'were studying' было прервано коротким 'went out'." },
        "a2_pc_ex3_q6": { correct: "b", explanation: "Короткое действие 'met' произошло во время длительного 'was walking'." },
        "a2_pc_ex3_q7": { correct: "b", explanation: "Короткое действие 'started' прервало длительное 'were playing'." },
        "a2_pc_ex3_q8": { correct: "b", explanation: "Когда учитель вошел ('came'), студенты были в процессе разговора ('were talking')." },
        "a2_pc_ex3_q9": { correct: "b", explanation: "Короткое действие 'broke' произошло во время длительного 'was skiing'." },
        "a2_pc_ex3_q10": { correct: "a", explanation: "Он увидел ('saw') аварию, пока был в процессе вождения ('was driving')." },
        
        // --- Упражнение 4: Вопросы и отрицания ---
        "a2_pc_ex4_q1": { correct: "b", explanation: "Отрицание длительного действия в прошлом для 'she': wasn't listening." },
        "a2_pc_ex4_q2": { correct: "c", explanation: "Вопрос о длительном действии в прошлом для 'you': Were you sleeping?" },
        "a2_pc_ex4_q3": { correct: "a", explanation: "Отрицание для 'they': weren't playing." },
        "a2_pc_ex4_q4": { correct: "c", explanation: "Специальный вопрос для 'he': Why was he crying?" },
        "a2_pc_ex4_q5": { correct: "a", explanation: "Отрицание для 'it': wasn't raining." },
        "a2_pc_ex4_q6": { correct: "a", explanation: "Отрицание для 'I': wasn't working." },
        "a2_pc_ex4_q7": { correct: "c", explanation: "Вопрос для 'the children' (they): Were the children making?" },
        "a2_pc_ex4_q8": { correct: "b", explanation: "Отрицание для 'he': wasn't wearing." },
        "a2_pc_ex4_q9": { correct: "c", explanation: "Специальный вопрос для 'she': What was she talking about?" },
        "a2_pc_ex4_q10": { correct: "a", explanation: "Отрицание для 'you': weren't paying." },

        // --- Упражнение 5: Past Continuous или Past Simple? ---
        "a2_pc_ex5_q1": { correct: "b", explanation: "Действие 'saw' (увидел) - короткое, оно прервало длительное действие 'was waiting'." },
        "a2_pc_ex5_q2": { correct: "a", explanation: "Действие 'was raining' было в процессе, когда мы ушли. Это фоновое описание." },
        "a2_pc_ex5_q3": { correct: "b", explanation: "Длительное действие 'were watching' было прервано коротким 'heard'." },
        "a2_pc_ex5_q4": { correct: "b", explanation: "Повторяющееся действие в прошлом, а не процесс в конкретный момент, поэтому Past Simple 'went'." },
        "a2_pc_ex5_q5": { correct: "a", explanation: "Речь о действии (или его отсутствии) в процессе в конкретный момент 'at 6 PM', поэтому 'wasn't working'." },
        "a2_pc_ex5_q6": { correct: "b", explanation: "Вопрос о том, что было в процессе ('were you doing'), когда случилось короткое действие ('happened')." },
        "a2_pc_ex5_q7": { correct: "a", explanation: "Два последовательных завершенных действия в прошлом, поэтому Past Simple 'finished' и 'went'." },
        "a2_pc_ex5_q8": { correct: "b", explanation: "Длительное фоновое действие ('were living'), во время которого произошло короткое ('was born')." },
        "a2_pc_ex5_q9": { correct: "b", explanation: "Он был в процессе сна ('was sleeping'), и это причина, почему он не ответил." },
        "a2_pc_ex5_q10": { correct: "b", explanation: "Описание фоновой обстановки (солнце светило, птицы пели), поэтому 'were singing'." }
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
