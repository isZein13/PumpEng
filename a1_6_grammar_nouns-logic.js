// a1_6_grammar_nouns-logic.js
document.addEventListener('DOMContentLoaded', () => {
    const grammarCorrectAnswers = {
        // --- Упражнение 1: Множественное число (регулярное -s, -es, -ies) ---
        "a1_n_ex1_q1": { correct: "b", explanation: "Обычно добавляется -s: book -> books." },
        "a1_n_ex1_q2": { correct: "c", explanation: "Если слово оканчивается на -s, -sh, -ch, -x, -z, добавляется -es: bus -> buses." },
        "a1_n_ex1_q3": { correct: "d", explanation: "Если слово оканчивается на согласную + -y, то -y меняется на -ies: city -> cities." },
        "a1_n_ex1_q4": { correct: "c", explanation: "Если слово оканчивается на -ch, добавляется -es: watch -> watches." },
        "a1_n_ex1_q5": { correct: "b", explanation: "Если слово оканчивается на гласную + -y, просто добавляется -s: boy -> boys." },
        "a1_n_ex1_q6": { correct: "c", explanation: "Некоторые слова на -o образуют мн.ч. с -es: potato -> potatoes." },
        "a1_n_ex1_q7": { correct: "d", explanation: "Если слово оканчивается на гласную + -y, просто добавляется -s: key -> keys." },
        "a1_n_ex1_q8": { correct: "b", explanation: "Если слово оканчивается на согласную + -y, то -y меняется на -ies: family -> families." },
        "a1_n_ex1_q9": { correct: "c", explanation: "Некоторые слова на -o образуют мн.ч. с -es: tomato -> tomatoes." },
        "a1_n_ex1_q10": { correct: "d", explanation: "Если слово оканчивается на -x, добавляется -es: box -> boxes." },

        // --- Упражнение 2: Множественное число (неправильные формы) ---
        "a1_n_ex2_q1": { correct: "b", explanation: "Неправильная форма: man -> men." },
        "a1_n_ex2_q2": { correct: "c", explanation: "Неправильная форма: child -> children." },
        "a1_n_ex2_q3": { correct: "c", explanation: "Неправильная форма: woman -> women." },
        "a1_n_ex2_q4": { correct: "b", explanation: "Неправильная форма: foot -> feet." },
        "a1_n_ex2_q5": { correct: "d", explanation: "Неправильная форма: tooth -> teeth." },
        "a1_n_ex2_q6": { correct: "b", explanation: "Неправильная форма: mouse -> mice." },
        "a1_n_ex2_q7": { correct: "c", explanation: "Неправильная форма: person -> people. ('Persons' используется редко, в формальном/юридическом контексте)." },
        "a1_n_ex2_q8": { correct: "b", explanation: "Форма ед. и мн.ч. совпадает: sheep -> sheep." },
        "a1_n_ex2_q9": { correct: "c", explanation: "Форма ед. и мн.ч. чаще всего совпадает: fish -> fish. 'Fishes' используется для разных видов рыб." },
        "a1_n_ex2_q10": { correct: "c", explanation: "Неправильная форма: goose -> geese." },

        // --- Упражнение 3: Притяжательный падеж ('s, s') ---
        "a1_n_ex3_q1": { correct: "c", explanation: "Для единственного числа добавляем 's: Anna's book." },
        "a1_n_ex3_q2": { correct: "c", explanation: "Для единственного числа добавляем 's: the dog's tail." },
        "a1_n_ex3_q3": { correct: "c", explanation: "Для неправильного мн.ч. (children) добавляем 's: the children's toys." },
        "a1_n_ex3_q4": { correct: "c", explanation: "Для мн.ч., оканчивающегося на -s (parents), добавляем только апостроф: my parents' car." },
        "a1_n_ex3_q5": { correct: "c", explanation: "Для имен, оканчивающихся на -s (James), можно добавить 's или только апостроф. 'James's' более распространено." },
        "a1_n_ex3_q6": { correct: "a", explanation: "Единственное число 'cat', добавляем 's: the cat's food." },
        "a1_n_ex3_q7": { correct: "d", explanation: "Единственное число 'Tom', добавляем 's: Tom's phone." },
        "a1_n_ex3_q8": { correct: "b", explanation: "Множественное число 'girls', добавляем только апостроф: the girls' dresses." },
        "a1_n_ex3_q9": { correct: "b", explanation: "Единственное число 'friend', добавляем 's: my friend's bike." },
        "a1_n_ex3_q10": { correct: "a", explanation: "Единственное число 'teacher', добавляем 's: the teacher's desk." },

        // --- Упражнение 4: Исчисляемые и неисчисляемые (+ a/an, some, much/many) ---
        "a1_n_ex4_q1": { correct: "c", explanation: "'Water' - неисчисляемое. В утверждении часто используется 'some' (некоторое количество)." },
        "a1_n_ex4_q2": { correct: "c", explanation: "'Apples' - исчисляемое, мн.ч. В утверждении часто используется 'some'." },
        "a1_n_ex4_q3": { correct: "b", explanation: "'Information' - неисчисляемое. В утвердительной просьбе часто 'some'." },
        "a1_n_ex4_q4": { correct: "d", explanation: "'Milk' - неисчисляемое. В отрицании используется 'any' или 'much'. Здесь 'any' подходит." },
        "a1_n_ex4_q5": { correct: "b", explanation: "'Dress' - исчисляемое, ед.ч. Начинается с согласного звука, поэтому 'a'." },
        "a1_n_ex4_q6": { correct: "b", explanation: "'Sugar' - неисчисляемое. В вопросе о количестве используется 'How much'." },
        "a1_n_ex4_q7": { correct: "c", explanation: "'Chairs' - исчисляемое, мн.ч. В отрицании используется 'any' или 'many'. Здесь 'any' подходит." },
        "a1_n_ex4_q8": { correct: "c", explanation: "'Advice' - неисчисляемое. В утверждении часто используется 'some'." },
        "a1_n_ex4_q9": { correct: "c", explanation: "'Books' - исчисляемое, мн.ч. В вопросе о количестве используется 'How many'." },
        "a1_n_ex4_q10": { correct: "c", explanation: "'Tea' - неисчисляемое, но в просьбе о порции часто 'some tea' или 'a cup of tea'. 'Some' подходит." },

        // --- Упражнение 5: This/That/These/Those ---
        "a1_n_ex5_q1": { correct: "a", explanation: "'This' используется для единственного числа, когда предмет близко." },
        "a1_n_ex5_q2": { correct: "d", explanation: "'Those' используется для множественного числа, когда предметы далеко." },
        "a1_n_ex5_q3": { correct: "c", explanation: "'These' используется для множественного числа, когда предметы близко." },
        "a1_n_ex5_q4": { correct: "b", explanation: "'That' используется для единственного числа, когда предмет далеко." },
        "a1_n_ex5_q5": { correct: "b", explanation: "'That picture on the wall' (картина далеко)." },
        "a1_n_ex5_q6": { correct: "c", explanation: "'these keys here' (ключи близко)." },
        "a1_n_ex5_q7": { correct: "b", explanation: "'That house over there' (дом там, далеко)." },
        "a1_n_ex5_q8": { correct: "a", explanation: "'this pen' (ручка близко, вероятно, у говорящего)." },
        "a1_n_ex5_q9": { correct: "d", explanation: "'Those flowers in your garden' (цветы в твоем саду, вероятно, не рядом с говорящим)." },
        "a1_n_ex5_q10": { correct: "a", explanation: "'this red apple' (яблоко близко, вероятно, говорящий его держит или указывает)." }
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
