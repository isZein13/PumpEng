// a1_grammar_present-continuous-logic.js
document.addEventListener('DOMContentLoaded', () => {
    // --- БАЗА ДАННЫХ С ПРАВИЛЬНЫМИ ОТВЕТАМИ И ОБЪЯСНЕНИЯМИ ДЛЯ A1 - Present Continuous ---
    // Ключ: data-form-id_qN (например, a1_pc_ex1_q1)
    const grammarCorrectAnswers = {
        // --- Упражнение 1: Действия в момент речи ---
        "a1_pc_ex1_q1": { correct: "c", explanation: "'Look!' указывает на действие в момент речи. 'The dog' (it) + is + playing." },
        "a1_pc_ex1_q2": { correct: "c", explanation: "'Listen!' указывает на действие в момент речи. 'My sister' (she) + is + singing." },
        "a1_pc_ex1_q3": { correct: "c", explanation: "'Right now' указывает на действие в момент речи. 'I' + am + doing." },
        "a1_pc_ex1_q4": { correct: "d", explanation: "'At the moment' указывает на действие в момент речи. 'They' + are + watching." },
        "a1_pc_ex1_q5": { correct: "c", explanation: "'Please be quiet!' подразумевает действие сейчас. 'The baby' (it/he/she) + is + sleeping." },
        "a1_pc_ex1_q6": { correct: "d", explanation: "'Now' указывает на действие в момент речи. 'We' + are + having." },
        "a1_pc_ex1_q7": { correct: "d", explanation: "'At the moment' указывает на действие в момент речи. 'You' + are + learning." },
        "a1_pc_ex1_q8": { correct: "c", explanation: "Действие происходит сейчас (подразумевается). 'He' + is + reading." },
        "a1_pc_ex1_q9": { correct: "d", explanation: "Действие происходит сейчас (подразумевается). 'The birds' (they) + are + flying." },
        "a1_pc_ex1_q10": { correct: "c", explanation: "'Today' (в контексте описания внешнего вида сейчас). 'She' + is + wearing." },

        // --- Упражнение 2: Запланированные будущие действия ---
        "a1_pc_ex2_q1": { correct: "c", explanation: "'Next Sunday' указывает на запланированное будущее действие. 'We' + are + visiting." },
        "a1_pc_ex2_q2": { correct: "b", explanation: "'After school today' указывает на запланированное будущее действие. 'I' + am + meeting." },
        "a1_pc_ex2_q3": { correct: "b", explanation: "'Tomorrow morning' указывает на запланированное будущее действие. 'He' + is + flying." },
        "a1_pc_ex2_q4": { correct: "c", explanation: "'Next weekend' указывает на запланированное будущее действие. 'They' + are + having." },
        "a1_pc_ex2_q5": { correct: "c", explanation: "'On Monday' указывает на запланированное будущее действие. 'She' + is + starting." },
        "a1_pc_ex2_q6": { correct: "b", explanation: "Вопрос о запланированном будущем действии: What time + are + you + leaving?" },
        "a1_pc_ex2_q7": { correct: "b", explanation: "'This evening' указывает на запланированное будущее действие. 'My parents' (they) + are + coming." },
        "a1_pc_ex2_q8": { correct: "b", explanation: "'Next week' (он в отпуске) указывает на запланированное будущее (или его отсутствие). 'He' + isn't + working." },
        "a1_pc_ex2_q9": { correct: "c", explanation: "Указание времени 'on Wednesday at 3 PM' говорит о договоренности. 'I' + am + going." },
        "a1_pc_ex2_q10": { correct: "c", explanation: "Вопрос о запланированном будущем действии: Are + they + travelling?" },

        // --- Упражнение 3: Отрицания в Present Continuous ---
        "a1_pc_ex3_q1": { correct: "b", explanation: "Отрицание действия в момент речи для 'I': am not sleeping." },
        "a1_pc_ex3_q2": { correct: "c", explanation: "Отрицание действия в момент речи для 'She': isn't watching." },
        "a1_pc_ex3_q3": { correct: "b", explanation: "Отрицание запланированного будущего действия для 'We': aren't going." },
        "a1_pc_ex3_q4": { correct: "c", explanation: "Отрицание действия в момент речи для 'He': isn't playing." },
        "a1_pc_ex3_q5": { correct: "b", explanation: "Отрицание действия в момент речи для 'They': aren't eating." },
        "a1_pc_ex3_q6": { correct: "b", explanation: "Отрицание действия в момент речи для 'You': aren't listening." },
        "a1_pc_ex3_q7": { correct: "c", explanation: "Отрицание действия в момент речи для 'The computer' (it): isn't working." },
        "a1_pc_ex3_q8": { correct: "c", explanation: "Отрицание запланированного будущего действия для 'My mom' (she): isn't cooking." },
        "a1_pc_ex3_q9": { correct: "b", explanation: "Отрицание действия в момент речи для 'I': am not wearing." },
        "a1_pc_ex3_q10": { correct: "b", explanation: "Отрицание действия в момент речи для 'The students' (they): aren't writing." },

        // --- Упражнение 4: Вопросы в Present Continuous ---
        "a1_pc_ex4_q1": { correct: "b", explanation: "Общий вопрос о действии сейчас для 'you': Are you watching...?" },
        "a1_pc_ex4_q2": { correct: "b", explanation: "Специальный вопрос о действии сейчас для 'he': What is he doing...?" },
        "a1_pc_ex4_q3": { correct: "b", explanation: "Общий вопрос о действии сейчас для 'it': Is it raining...?" },
        "a1_pc_ex4_q4": { correct: "b", explanation: "Специальный вопрос о действии сейчас для 'they': Why are they laughing?" },
        "a1_pc_ex4_q5": { correct: "b", explanation: "Общий вопрос о действии сейчас для 'I': Am I speaking...?" },
        "a1_pc_ex4_q6": { correct: "b", explanation: "Специальный вопрос о действии сейчас для 'she': Where is she going...?" },
        "a1_pc_ex4_q7": { correct: "b", explanation: "Вопрос о запланированном будущем действии для 'we': Are we studying...?" },
        "a1_pc_ex4_q8": { correct: "b", explanation: "Специальный вопрос (подлежащее - who) о действии сейчас: Who is talking...?" },
        "a1_pc_ex4_q9": { correct: "b", explanation: "Общий вопрос о действии сейчас (или временной ситуации) для 'your parents' (they): Are your parents working...?" },
        "a1_pc_ex4_q10": { correct: "b", explanation: "Специальный вопрос о временной ситуации для 'you': What book are you reading...?" },

        // --- Упражнение 5: Present Simple vs Present Continuous ---
        "a1_pc_ex5_q1": { correct: "c", explanation: "'usually walks' (рутина - PS), 'but today she is taking' (отклонение от рутины сейчас - PC)." },
        "a1_pc_ex5_q2": { correct: "a", explanation: "'usually' указывает на рутину (PS): What do you usually do?" },
        "a1_pc_ex5_q3": { correct: "c", explanation: "'Listen!' указывает на действие в момент речи (PC): Someone is knocking." },
        "a1_pc_ex5_q4": { correct: "b", explanation: "Общеизвестный факт (PS): Water boils." },
        "a1_pc_ex5_q5": { correct: "a", explanation: "Глаголы состояния (understand, like, want, know etc.) обычно не используются в Continuous. 'Right now' здесь указывает на текущее состояние непонимания (PS): I don't understand." },
        "a1_pc_ex5_q6": { correct: "c", explanation: "'live' (постоянное проживание - PS), 'are visiting' (запланированное будущее действие - PC)." },
        "a1_pc_ex5_q7": { correct: "c", explanation: "Действие происходит сейчас: He is having a shower." },
        "a1_pc_ex5_q8": { correct: "c", explanation: "'don't usually drink' (рутина - PS), 'am drinking' (действие сейчас, отклонение от рутины - PC)." },
        "a1_pc_ex5_q9": { correct: "c", explanation: "Вопрос о расписании (PS): What time does the train leave?" },
        "a1_pc_ex5_q10": { correct: "c", explanation: "'always complains' (раздражающая привычка, часто с always - PS, хотя и PC возможен для выражения раздражения, но PS здесь стандартнее для A1). 'It is raining' (действие сейчас - PC)." },

        // --- Упражнение 6: Present Simple vs Present Continuous (Часть 2) ---
        "a1_ps_pc_ex6_q1": { correct: "c", explanation: "'usually sleeps' (PS - рутина), 'now he is sleeping' (PC - сейчас)." },
        "a1_ps_pc_ex6_q2": { correct: "a", explanation: "'Do you understand?' (PS - глагол состояния), 'I am still thinking' (PC - процесс сейчас)." },
        "a1_ps_pc_ex6_q3": { correct: "c", explanation: "'works as a doctor' (PS - постоянная работа), 'is helping a patient right now' (PC - сейчас)." },
        "a1_ps_pc_ex6_q4": { correct: "c", explanation: "'often go' (PS - рутина), 'this year they are travelling' (PC - временная ситуация в этом году)." },
        "a1_ps_pc_ex6_q5": { correct: "c", explanation: "Вопрос о профессии (постоянная информация - PS): What does your father do?" },
        "a1_ps_pc_ex6_q6": { correct: "a", explanation: "'don't usually watch' (PS - рутина), 'looks interesting' (PS - глагол состояния 'look' в значении 'выглядит')." },
        "a1_ps_pc_ex6_q7": { correct: "b", explanation: "'are very quiet' (PS - to be для состояния), 'What are they doing?' (PC - вопрос о действии сейчас)." },
        "a1_ps_pc_ex6_q8": { correct: "c", explanation: "'is studying for her exams these days' (PC - временная ситуация), 'wants to get' (PS - глагол состояния 'want')." },
        "a1_ps_pc_ex6_q9": { correct: "a", explanation: "'How often' указывает на регулярность (PS): How often do you visit?" },
        "a1_ps_pc_ex6_q10": { correct: "b", explanation: "'It is getting dark' (PC - изменение ситуации сейчас), 'I will go' (PS Future Simple - спонтанное решение)." },

        // --- Упражнение 7: Present Simple vs Present Continuous (Часть 3) ---
        "a1_ps_pc_ex7_q1": { correct: "c", explanation: "Ответ на 'What are you doing?' (PC): I am looking." },
        "a1_ps_pc_ex7_q2": { correct: "b", explanation: "'Every morning' указывает на рутину (PS): She drinks." },
        "a1_ps_pc_ex7_q3": { correct: "c", explanation: "'Be quiet!' подразумевает действие сейчас (PC): The teacher is talking." },
        "a1_ps_pc_ex7_q4": { correct: "a", explanation: "'How often' указывает на регулярность (PS): How often do you visit?" },
        "a1_ps_pc_ex7_q5": { correct: "c", explanation: "'This semester' указывает на временную ситуацию (PC): I am learning." },
        "a1_ps_pc_ex7_q6": { correct: "b", explanation: "Будущее по расписанию часто выражается через Present Simple: My train leaves." },
        "a1_ps_pc_ex7_q7": { correct: "a", explanation: "'What is that noise?' (PC - вопрос о текущем). 'Something sounds strange' (PS - глагол состояния 'sound')." },
        "a1_ps_pc_ex7_q8": { correct: "c", explanation: "'Next Friday' и 'We have tickets!' указывают на запланированное будущее (PC): We are going." },
        "a1_ps_pc_ex7_q9": { correct: "b", explanation: "'Never' указывает на рутину/привычку (PS): He never loses." },
        "a1_ps_pc_ex7_q10": { correct: "b", explanation: "Вопрос о действии сейчас (почему ты одет в пальто, когда не холодно): Why are you wearing...?" }
    };

    // Остальной код JS (функция проверки) остается таким же, как в grammar-exercise-logic.js,
    // так как он универсален и работает с разными data-form-id и именами радио-кнопок.
    // Просто убедитесь, что этот файл подключен к a1_grammar_present-continuous.html

    const checkButtons = document.querySelectorAll('.check-grammar-answers-btn');

    checkButtons.forEach(button => {
        button.addEventListener('click', function() {
            const formIdSuffix = this.dataset.formId; // e.g., "a1_pc_ex1"
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
