// c1_4_grammar_participle-clauses-logic.js
document.addEventListener('DOMContentLoaded', () => {
    const grammarCorrectAnswers = {
        // --- Упражнение 1: Present Participle Clauses (-ing) ---
        "c1_pc_ex1_q1": { correct: "a", explanation: "Потому что он чувствовал усталость (одновременное действие). Feeling..." },
        "c1_pc_ex1_q2": { correct: "d", explanation: "Два последовательных быстрых действия, выполненных одним человеком. Opening..." },
        "c1_pc_ex1_q3": { correct: "a", explanation: "Поняв, что он опаздывает (причина). Realising..." },
        "c1_pc_ex1_q4": { correct: "c", explanation: "Причина, почему не мог купить. Having no money = Because I had no money." },
        "c1_pc_ex1_q5": { correct: "b", explanation: "Сокращение от 'The man who is standing...'. Standing..." },
        "c1_pc_ex1_q6": { correct: "d", explanation: "Два последовательных действия. Hearing his name, he looked up." },
        "c1_pc_ex1_q7": { correct: "a", explanation: "Причина ее решения. Knowing the risks = Because she knew the risks." },
        "c1_pc_ex1_q8": { correct: "b", explanation: "Сокращение от 'The train which is arriving...'. Arriving..." },
        "c1_pc_ex1_q9": { correct: "d", explanation: "Два последовательных действия. Hearing a loud crash..." },
        "c1_pc_ex1_q10": { correct: "a", explanation: "Причина, почему она пришла. Being ill = Although she was ill." },

        // --- Упражнение 2: Past Participle (-ed/V3) Clauses ---
        "c1_pc_ex2_q1": { correct: "b", explanation: "Сокращение от 'Because it was designed...'. Пассивное действие. Designed..." },
        "c1_pc_ex2_q2": { correct: "b", explanation: "Сокращение от 'The man who was injured...'. Пассивное действие. injured..." },
        "c1_pc_ex2_q3": { correct: "c", explanation: "Сокращение от 'Because it was written...'. Пассивное действие. Written..." },
        "c1_pc_ex2_q4": { correct: "b", explanation: "Сокращение от 'The paintings which were stolen...'. Пассивное действие. stolen..." },
        "c1_pc_ex2_q5": { correct: "b", explanation: "Описывает состояние подлежащего (ребенка), вызванное внешним действием. Frightened..." },
        "c1_pc_ex2_q6": { correct: "b", explanation: "Сокращение от 'The wallet that was found...'. Пассивное действие. found..." },
        "c1_pc_ex2_q7": { correct: "b", explanation: "Сокращение от 'Because it was made...'. Пассивное действие. Made..." },
        "c1_pc_ex2_q8": { correct: "b", explanation: "Сокращение от 'the guests who were invited...'. Пассивное действие. invited..." },
        "c1_pc_ex2_q9": { correct: "b", explanation: "Состояние, вызванное внешним действием. Impressed..." },
        "c1_pc_ex2_q10": { correct: "b", explanation: "Сокращение от 'The ideas which were presented...'. Пассивное действие. presented..." },

        // --- Упражнение 3: Perfect Participle Clauses (Having + V3) ---
        "c1_pc_ex3_q1": { correct: "c", explanation: "Действие 'finished' произошло до действия 'went out'. Используем Perfect Participle." },
        "c1_pc_ex3_q2": { correct: "b", explanation: "Сначала прочитал книгу, потом могу смотреть фильм. Используем Perfect Participle." },
        "c1_pc_ex3_q3": { correct: "c", explanation: "Сначала потратил деньги, потом пришлось искать работу. Используем Perfect Participle." },
        "c1_pc_ex3_q4": { correct: "c", explanation: "Работа в компании длилась долгое время до принятия решения уйти. Используем Perfect Participle." },
        "c1_pc_ex3_q5": { correct: "c", explanation: "Сначала он провалился три раза, а потом не захотел сдавать снова. Используем Perfect Participle." },
        "c1_pc_ex3_q6": { correct: "c", explanation: "Сначала она потеряла ключи, а потом не смогла войти. Используем Perfect Participle." },
        "c1_pc_ex3_q7": { correct: "a", explanation: "Действия 'открыл' и 'понял' произошли почти одновременно, поэтому Present Participle предпочтительнее." },
        "c1_pc_ex3_q8": { correct: "b", explanation: "Отрицательное перфектное причастие: Never having been... = Because she had never been..." },
        "c1_pc_ex3_q9": { correct: "b", explanation: "Сначала поел, потом вернулся к работе. Используем Perfect Participle." },
        "c1_pc_ex3_q10": { correct: "c", explanation: "Сначала сделали приготовления, потом были готовы начать. Используем Perfect Participle." },
        
        // --- Упражнение 4: Choosing the Correct Participle ---
        "c1_pc_ex4_q1": { correct: "c", explanation: "Действие 'потеряла' произошло до 'пришлось звонить'. Используем Perfect Participle (Having lost)." },
        "c1_pc_ex4_q2": { correct: "b", explanation: "Замок 'был построен' (пассив). Используем Past Participle (Built)." },
        "c1_pc_ex4_q3": { correct: "c", explanation: "Действие 'вели машину' длилось до того, как они решили остановиться. Perfect Participle (Having driven)." },
        "c1_pc_ex4_q4": { correct: "a", explanation: "Девушка сама носит платье (актив). Используем Present Participle (wearing)." },
        "c1_pc_ex4_q5": { correct: "b", explanation: "Пассажиров проинформировали (пассив). Используем Past Participle (Informed)." },
        "c1_pc_ex4_q6": { correct: "b", explanation: "Город был увиден (пассив). Используем Past Participle (Seen)." },
        "c1_pc_ex4_q7": { correct: "d", explanation: "Сначала они провели день в пути, потом отчаялись. Используем Perfect Participle (Having spent)." },
        "c1_pc_ex4_q8": { correct: "b", explanation: "Актера похвалили (пассив). Используем Past Participle (Praised)." },
        "c1_pc_ex4_q9": { correct: "b", explanation: "Ее включили в короткий список (пассив). Используем Past Participle (Shortlisted)." },
        "c1_pc_ex4_q10": { correct: "c", explanation: "Сначала они рассмотрели все варианты, потом приняли решение. Используем Perfect Participle (Having considered)." },

        // --- Упражнение 5: Sentence Combination ---
        "c1_pc_ex5_q1": { correct: "d", explanation: "Для двух быстрых последовательных действий можно использовать и Present Participle (Opening), и Perfect Participle (Having opened)." },
        "c1_pc_ex5_q2": { correct: "b", explanation: "Пассивное действие -> Past Participle. 'Damaged...'" },
        "c1_pc_ex5_q3": { correct: "b", explanation: "Длительное действие в прошлом, которое привело к знанию всех в компании. Perfect Participle." },
        "c1_pc_ex5_q4": { correct: "d", explanation: "Все варианты правильно описывают ситуацию. 'sitting' может быть Reduced Relative Clause или Participle Clause, описывающим второе действие." },
        "c1_pc_ex5_q5": { correct: "a", explanation: "Пассивное действие 'The city was founded...' -> Past Participle 'Founded...'" },
        "c1_pc_ex5_q6": { correct: "a", explanation: "Причина действия выражается через Present Participle. 'Not wanting...'" },
        "c1_pc_ex5_q7": { correct: "d", explanation: "Здесь нужен Perfect Passive Participle, чтобы показать, что его покинули до того, как начали ремонтировать. 'Having been abandoned...'" },
        "c1_pc_ex5_q8": { correct: "b", explanation: "Два быстрых последовательных действия. 'Putting on...'" },
        "c1_pc_ex5_q9": { correct: "c", explanation: "Пассивное чувство ('He was amazed') -> Past Participle 'Amazed...'" },
        "c1_pc_ex5_q10": { correct: "c", explanation: "Действие 'completed' произошло до 'gave'. Используем Perfect Participle." }
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
