// a1_10_grammar_conjunctions-logic.js
document.addEventListener('DOMContentLoaded', () => {
    const grammarCorrectAnswers = {
        // --- Упражнение 1: Союз 'and' ---
        "a1_conj_ex1_q1": { correct: "c", explanation: "'And' используется для соединения двух похожих идей или перечисления: яблоки И бананы." },
        "a1_conj_ex1_q2": { correct: "a", explanation: "Она умеет делать два действия: читать И писать." },
        "a1_conj_ex1_q3": { correct: "d", explanation: "Два положительных качества соединяются союзом 'and': высокий И сильный." },
        "a1_conj_ex1_q4": { correct: "a", explanation: "У нас есть два животных: кошка И собака." },
        "a1_conj_ex1_q5": { correct: "c", explanation: "Он любит два вида спорта: футбол И баскетбол." },
        "a1_conj_ex1_q6": { correct: "a", explanation: "Перечисление любимых цветов: синий И зеленый." },
        "a1_conj_ex1_q7": { correct: "b", explanation: "Нужны два предмета: ручка И бумага." },
        "a1_conj_ex1_q8": { correct: "c", explanation: "Два положительных качества: добрая И отзывчивая." },
        "a1_conj_ex1_q9": { correct: "d", explanation: "Два последовательных действия: пошли в парк И играли на качелях." },
        "a1_conj_ex1_q10": { correct: "a", explanation: "У него есть два транспортных средства: велосипед И самокат." },

        // --- Упражнение 2: Союз 'but' ---
        "a1_conj_ex2_q1": { correct: "d", explanation: "'But' используется для противопоставления двух идей: люблю чай, НО не люблю кофе." },
        "a1_conj_ex2_q2": { correct: "b", explanation: "Противопоставление: машина старая, НО работает хорошо." },
        "a1_conj_ex2_q3": { correct: "c", explanation: "Противопоставление: он устал, НО хочет закончить работу." },
        "a1_conj_ex2_q4": { correct: "a", explanation: "Противопоставление: умеет плавать, НО не умеет нырять." },
        "a1_conj_ex2_q5": { correct: "c", explanation: "Противопоставление: день солнечный, НО немного холодный." },
        "a1_conj_ex2_q6": { correct: "a", explanation: "Противопоставление: хочу пойти, НО должен учиться." },
        "a1_conj_ex2_q7": { correct: "b", explanation: "Противопоставление: фильм был длинный, НО интересный." },
        "a1_conj_ex2_q8": { correct: "d", explanation: "Противопоставление предпочтений: он любит кошек, НО его сестра предпочитает собак." },
        "a1_conj_ex2_q9": { correct: "a", explanation: "Противопоставление: еда вкусная, НО слишком дорогая." },
        "a1_conj_ex2_q10": { correct: "b", explanation: "Противопоставление усилия и результата: усердно учился, НО не получил хорошую оценку." },

        // --- Упражнение 3: Союз 'or' ---
        "a1_conj_ex3_q1": { correct: "c", explanation: "'Or' используется для предоставления выбора: чай ИЛИ кофе?" },
        "a1_conj_ex3_q2": { correct: "d", explanation: "Выбор между двумя местами: в кино ИЛИ в парк." },
        "a1_conj_ex3_q3": { correct: "a", explanation: "Вопрос о выборе профессии: он врач ИЛИ учитель?" },
        "a1_conj_ex3_q4": { correct: "b", explanation: "Предложение выбора: яблоко ИЛИ банан." },
        "a1_conj_ex3_q5": { correct: "d", explanation: "Вопрос о выборе одежды: футболку ИЛИ свитер?" },
        "a1_conj_ex3_q6": { correct: "a", explanation: "Выбор дня для встречи: в понедельник ИЛИ во вторник." },
        "a1_conj_ex3_q7": { correct: "b", explanation: "Предложение выбора действия: посмотреть фильм ИЛИ послушать музыку?" },
        "a1_conj_ex3_q8": { correct: "c", explanation: "Выбор способа оплаты: наличными ИЛИ картой." },
        "a1_conj_ex3_q9": { correct: "b", explanation: "Условие с альтернативой (иначе): торопись, ИЛИ мы опоздаем!" },
        "a1_conj_ex3_q10": { correct: "a", explanation: "Вопрос о принадлежности с выбором: это твоя сумка ИЛИ ее сумка?" },

        // --- Упражнение 4: Союзы 'because' и 'so' ---
        "a1_conj_ex4_q1": { correct: "c", explanation: "'because' указывает причину: Я устал, ПОТОМУ ЧТО много работал." },
        "a1_conj_ex4_q2": { correct: "c", explanation: "'so' указывает следствие: Шел дождь, ПОЭТОМУ мы остались дома." },
        "a1_conj_ex4_q3": { correct: "b", explanation: "'because' указывает причину: Она счастлива, ПОТОМУ ЧТО сдала экзамен." },
        "a1_conj_ex4_q4": { correct: "b", explanation: "'so' указывает следствие: Он усердно учился, ПОЭТОМУ получил хорошую оценку." },
        "a1_conj_ex4_q5": { correct: "c", explanation: "'because' указывает причину: Я не пошел в школу, ПОТОМУ ЧТО был болен." },
        "a1_conj_ex4_q6": { correct: "b", explanation: "'so' указывает следствие: Погода была плохая, ПОЭТОМУ матч отменили." },
        "a1_conj_ex4_q7": { correct: "d", explanation: "'so' указывает следствие: Он был голоден, ПОЭТОМУ съел большой сэндвич." },
        "a1_conj_ex4_q8": { correct: "b", explanation: "'because' указывает причину: Мы опоздали на автобус, ПОТОМУ ЧТО опоздали (сами)." },
        "a1_conj_ex4_q9": { correct: "b", explanation: "'so' указывает следствие (или цель): Она любит животных, ПОЭТОМУ хочет быть ветеринаром." },
        "a1_conj_ex4_q10": { correct: "c", explanation: "'because' указывает причину: Я учу английский, ПОТОМУ ЧТО хочу путешествовать." },

        // --- Упражнение 5: Смешанные союзы ---
        "a1_conj_ex5_q1": { correct: "b", explanation: "Противопоставление предпочтений: яблоки, НО брат - груши." },
        "a1_conj_ex5_q2": { correct: "c", explanation: "Выбор: чай ИЛИ кофе?" },
        "a1_conj_ex5_q3": { correct: "a", explanation: "Перечисление качеств: высокий И красивый." },
        "a1_conj_ex5_q4": { correct: "d", explanation: "Следствие: было холодно, ПОЭТОМУ я надел пальто." },
        "a1_conj_ex5_q5": { correct: "c", explanation: "Причина: не пришла, ПОТОМУ ЧТО была больна." },
        "a1_conj_ex5_q6": { correct: "c", explanation: "Противопоставление умений: умею играть на пианино, НО не на гитаре." },
        "a1_conj_ex5_q7": { correct: "c", explanation: "Выбор действия: пойти в кино ИЛИ остаться дома." },
        "a1_conj_ex5_q8": { correct: "c", explanation: "Противопоставление: очень богат, НО не счастлив." },
        "a1_conj_ex5_q9": { correct: "c", explanation: "Перечисление увлечений: чтение книг И просмотр фильмов." },
        "a1_conj_ex5_q10": { correct: "c", explanation: "Противопоставление: экзамен был сложный, НО я его сдал. 'Although' было бы еще лучше, но 'but' тоже подходит." }
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
