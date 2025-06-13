// a1_9_grammar_prepositions-logic.js
document.addEventListener('DOMContentLoaded', () => {
    const grammarCorrectAnswers = {
        // --- Упражнение 1: Предлоги места (in, on, under) ---
        "a1_prep_ex1_q1": { correct: "c", explanation: "'in' используется, когда что-то находится внутри чего-то: in the box (в коробке)." },
        "a1_prep_ex1_q2": { correct: "b", explanation: "'on' используется, когда что-то находится на поверхности: on the table (на столе)." },
        "a1_prep_ex1_q3": { correct: "d", explanation: "'under' означает 'под': under the bed (под кроватью)." },
        "a1_prep_ex1_q4": { correct: "b", explanation: "'in' используется для нахождения внутри замкнутого пространства: in the fridge (в холодильнике)." },
        "a1_prep_ex1_q5": { correct: "c", explanation: "'on' используется для нахождения на поверхности: on the mat (на коврике)." },
        "a1_prep_ex1_q6": { correct: "c", explanation: "'under' означает 'под': under the chair (под стулом)." },
        "a1_prep_ex1_q7": { correct: "b", explanation: "'in' используется для нахождения внутри: in my pencil case (в моем пенале)." },
        "a1_prep_ex1_q8": { correct: "c", explanation: "'on' используется для нахождения на вертикальной поверхности: on the wall (на стене)." },
        "a1_prep_ex1_q9": { correct: "c", explanation: "Если что-то скрыто под подушками, то 'under'. 'Between' если между двумя." },
        "a1_prep_ex1_q10": { correct: "c", explanation: "'in' используется, когда что-то находится внутри емкости: in a vase (в вазе)." },

        // --- Упражнение 2: Предлоги места (next to, behind, in front of, between) ---
        "a1_prep_ex2_q1": { correct: "c", explanation: "'next to' означает 'рядом с, возле'." },
        "a1_prep_ex2_q2": { correct: "b", explanation: "'in front of' означает 'перед'." },
        "a1_prep_ex2_q3": { correct: "c", explanation: "'behind' означает 'за, позади'." },
        "a1_prep_ex2_q4": { correct: "d", explanation: "'between' означает 'между' (двумя объектами)." },
        "a1_prep_ex2_q5": { correct: "b", explanation: "'next to' означает 'рядом с'." },
        "a1_prep_ex2_q6": { correct: "c", explanation: "'in front of' означает 'перед' (лицом к чему-то/кому-то)." },
        "a1_prep_ex2_q7": { correct: "c", explanation: "'behind' означает 'за, позади' (дерево за окном)." },
        "a1_prep_ex2_q8": { correct: "c", explanation: "'between' используется для обозначения положения между двумя объектами." },
        "a1_prep_ex2_q9": { correct: "c", explanation: "'next to' означает 'рядом с'." },
        "a1_prep_ex2_q10": { correct: "b", explanation: "Если учитель пишет на доске, доска перед ним: 'in front of'. Если он стоит лицом к классу, доска за ним: 'behind'." },

        // --- Упражнение 3: Предлоги времени (at, on, in) ---
        "a1_prep_ex3_q1": { correct: "b", explanation: "С днями недели используется предлог 'on': on Saturday." },
        "a1_prep_ex3_q2": { correct: "a", explanation: "С точным временем используется предлог 'at': at 7 o'clock." },
        "a1_prep_ex3_q3": { correct: "c", explanation: "С месяцами используется предлог 'in': in July." },
        "a1_prep_ex3_q4": { correct: "c", explanation: "С временами года используется предлог 'in': in summer." },
        "a1_prep_ex3_q5": { correct: "a", explanation: "С точным временем (половина девятого) используется 'at': at half past eight." },
        "a1_prep_ex3_q6": { correct: "b", explanation: "Когда указывается день недели + часть дня, используется 'on': on Monday morning." },
        "a1_prep_ex3_q7": { correct: "c", explanation: "С годами используется предлог 'in': in 2005." },
        "a1_prep_ex3_q8": { correct: "c", explanation: "С частями дня (the evening, the morning, the afternoon) используется 'in'. Но: at night." },
        "a1_prep_ex3_q9": { correct: "b", explanation: "С конкретными датами (месяц + число) используется 'on': on March 15th." },
        "a1_prep_ex3_q10": { correct: "a", explanation: "Со словом 'midnight' (полночь) используется предлог 'at'." },

        // --- Упражнение 4: Предлоги движения (to, from, into, out of...) ---
        "a1_prep_ex4_q1": { correct: "b", explanation: "'to' указывает направление движения к месту: go to the cinema." },
        "a1_prep_ex4_q2": { correct: "c", explanation: "'into' означает движение внутрь чего-либо: into the box." },
        "a1_prep_ex4_q3": { correct: "c", explanation: "'out of' означает движение изнутри наружу: out of the room." },
        "a1_prep_ex4_q4": { correct: "b", explanation: "'up' означает движение вверх: up the hill." },
        "a1_prep_ex4_q5": { correct: "b", explanation: "Направление 'из' (from Paris) 'в' (to London)." },
        "a1_prep_ex4_q6": { correct: "b", explanation: "'into' или 'through' (если окно было средством пролета) подходят для движения внутрь." },
        "a1_prep_ex4_q7": { correct: "b", explanation: "'into' означает движение внутрь: into his bag." },
        "a1_prep_ex4_q8": { correct: "c", explanation: "'down' означает движение вниз: down the stairs." },
        "a1_prep_ex4_q9": { correct: "c", explanation: "'to' указывает направление движения к месту: going to the supermarket." },
        "a1_prep_ex4_q10": { correct: "c", explanation: "'out of' означает движение изнутри наружу: out of her pocket." },

        // --- Упражнение 5: Смешанные предлоги (место и время) ---
        "a1_prep_ex5_q1": { correct: "b", explanation: "Предлог места 'on' для поверхности: on the sofa." },
        "a1_prep_ex5_q2": { correct: "c", explanation: "Предлог времени 'in' с месяцами: in October." },
        "a1_prep_ex5_q3": { correct: "c", explanation: "Предлог места 'next to' (рядом с)." },
        "a1_prep_ex5_q4": { correct: "c", explanation: "Предлог времени 'at' с точным временем: at 6 PM." },
        "a1_prep_ex5_q5": { correct: "c", explanation: "Предлог места 'in' (внутри): in the basket." },
        "a1_prep_ex5_q6": { correct: "c", explanation: "Предлог времени 'on' с днями недели: on Sundays." },
        "a1_prep_ex5_q7": { correct: "b", explanation: "Предлог места 'between' (между двумя предметами)." },
        "a1_prep_ex5_q8": { correct: "c", explanation: "Предлог времени 'in' с частью дня: in the evening." },
        "a1_prep_ex5_q9": { correct: "c", explanation: "Предлог места 'by' (у, возле) или 'next to' (рядом с) окна." },
        "a1_prep_ex5_q10": { correct: "c", explanation: "Предлог времени 'on' с полной датой: on May 1st." }
    };

    // Код для проверки ответов (остается таким же, как в grammar-exercise-logic.js)
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
