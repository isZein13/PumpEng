// a1_5_grammar_articles-logic.js
document.addEventListener('DOMContentLoaded', () => {
    const grammarCorrectAnswers = {
        // --- Упражнение 1: 'a' vs 'an' ---
        "a1_art_ex1_q1": { correct: "a", explanation: "'bird' начинается с согласного звука [b], поэтому 'a bird'." },
        "a1_art_ex1_q2": { correct: "b", explanation: "'orange' начинается с гласного звука [ɒ], поэтому 'an orange'." },
        "a1_art_ex1_q3": { correct: "b", explanation: "'interesting' начинается с гласного звука [ɪ], поэтому 'an interesting book'." },
        "a1_art_ex1_q4": { correct: "a", explanation: "'doctor' начинается с согласного звука [d], поэтому 'a doctor'." },
        "a1_art_ex1_q5": { correct: "b", explanation: "В слове 'honest' первая буква 'h' не произносится, слово начинается с гласного звука [ɒ], поэтому 'an honest man'." },
        "a1_art_ex1_q6": { correct: "a", explanation: "'new' начинается с согласного звука [n], поэтому 'a new car'." },
        "a1_art_ex1_q7": { correct: "a", explanation: "'beautiful' начинается с согласного звука [b], поэтому 'a beautiful day'." },
        "a1_art_ex1_q8": { correct: "a", explanation: "'cup' начинается с согласного звука [k], поэтому 'a cup of tea'." },
        "a1_art_ex1_q9": { correct: "b", explanation: "'artist' начинается с гласного звука [ɑː], поэтому 'an artist'." },
        "a1_art_ex1_q10": { correct: "b", explanation: "'umbrella' начинается с гласного звука [ʌ], поэтому 'an umbrella'." },

        // --- Упражнение 2: 'the' (определенный артикль) ---
        "a1_art_ex2_q1": { correct: "c", explanation: "Солнце (the Sun) - уникальный объект, всегда используется с 'the'." },
        "a1_art_ex2_q2": { correct: "c", explanation: "Говорящий имеет в виду конкретную дверь в комнате, поэтому 'the door'." },
        "a1_art_ex2_q3": { correct: "c", explanation: "Речь идет о конкретной синей футболке, которую ты носишь, поэтому 'the blue T-shirt'." },
        "a1_art_ex2_q4": { correct: "c", explanation: "Земля (the Earth) - уникальный объект, используется с 'the'." },
        "a1_art_ex2_q5": { correct: "c", explanation: "У страны обычно одна столица, поэтому она конкретная: 'the capital of France'." },
        "a1_art_ex2_q6": { correct: "c", explanation: "Указывается на конкретную книгу, которая лежит на столе: 'the book on the table'." },
        "a1_art_ex2_q7": { correct: "c", explanation: "Выражение 'go to the cinema' является устойчивым." },
        "a1_art_ex2_q8": { correct: "c", explanation: "Королева Англии - конкретная, известная личность: 'The Queen of England'." },
        "a1_art_ex2_q9": { correct: "c", explanation: "Перед прилагательными в превосходной степени (best, biggest) всегда ставится 'the'." },
        "a1_art_ex2_q10": { correct: "c", explanation: "Луна (the Moon) - уникальный объект, используется с 'the'." },

        // --- Упражнение 3: Нулевой артикль (Zero article) ---
        "a1_art_ex3_q1": { correct: "d", explanation: "С неисчисляемыми существительными (milk) в общем значении артикль не используется." },
        "a1_art_ex3_q2": { correct: "d", explanation: "С существительными во множественном числе (cats) в общем значении артикль не используется." },
        "a1_art_ex3_q3": { correct: "d", explanation: "С названиями языков (English) артикль обычно не используется." },
        "a1_art_ex3_q4": { correct: "d", explanation: "С названиями видов спорта (football) артикль обычно не используется." },
        "a1_art_ex3_q5": { correct: "d", explanation: "Перед именами (Anna) артикль не ставится." },
        "a1_art_ex3_q6": { correct: "d", explanation: "В выражениях типа 'go to school/bed/work', когда речь идет о цели, а не о здании, артикль не нужен." },
        "a1_art_ex3_q7": { correct: "d", explanation: "С названиями большинства городов (London) артикль не используется." },
        "a1_art_ex3_q8": { correct: "d", explanation: "С названиями приемов пищи (breakfast, lunch, dinner) в общем значении артикль не используется." },
        "a1_art_ex3_q9": { correct: "d", explanation: "С абстрактными неисчисляемыми существительными (music) в общем значении артикль не используется." },
        "a1_art_ex3_q10": { correct: "d", explanation: "С названиями школьных предметов (history) артикль обычно не используется." },

        // --- Упражнение 4: Смешанные случаи (a/an/the/zero) ---
        "a1_art_ex4_q1": { correct: "c", explanation: "'a cat' (один кот, первое упоминание), 'the table' (конкретный стол, на котором он)." },
        "a1_art_ex4_q2": { correct: "c", explanation: "'an idea' (одна идея, первое упоминание), 'The idea' (эта конкретная идея, повторное упоминание)." },
        "a1_art_ex4_q3": { correct: "a", explanation: "'an engineer' (один из инженеров, профессия), 'a big company' (одна из больших компаний)." },
        "a1_art_ex4_q4": { correct: "d", explanation: "С приемами пищи в общем значении (dinner) артикль не нужен." },
        "a1_art_ex4_q5": { correct: "c", explanation: "С музыкальными инструментами в выражении 'play the + инструмент' используется 'the'." },
        "a1_art_ex4_q6": { correct: "a", explanation: "'a new pair' (одна пара), 'shoes' (мн.ч., здесь без артикля как часть 'pair of shoes')." },
        "a1_art_ex4_q7": { correct: "b", explanation: "'The Pacific Ocean' (название океана), 'the largest ocean' (превосходная степень)." },
        "a1_art_ex4_q8": { correct: "a", explanation: "'go to work' (устойчивое выражение), 'by bus' (устойчивое выражение для транспорта)." },
        "a1_art_ex4_q9": { correct: "b", explanation: "В восклицаниях 'What + (прил.) + неисчисл.сущ.!' артикль не нужен: What beautiful weather! 'go for a walk' (устойчивое выражение)." },
        "a1_art_ex4_q10": { correct: "b", explanation: "'the best student' (превосходная степень), 'in the class' (в конкретном классе)." },

        // --- Упражнение 5: Артикли с исчисляемыми и неисчисляемыми существительными ---
        "a1_art_ex5_q1": { correct: "d", explanation: "'water' - неисчисляемое, в общем значении без артикля. Если бы имелась в виду порция, сказали бы 'a glass of water'." },
        "a1_art_ex5_q2": { correct: "b", explanation: "'apple' - исчисляемое в ед.ч., начинается с гласного звука, поэтому 'an apple'." },
        "a1_art_ex5_q3": { correct: "d", explanation: "'furniture' - неисчисляемое, в общем значении без артикля. Говорим 'a piece of furniture'." },
        "a1_art_ex5_q4": { correct: "d", explanation: "'sugar' - неисчисляемое. Если бы хотели сказать 'немного сахара', использовали бы 'some sugar'. Если просто констатация наличия, то без артикля." },
        "a1_art_ex5_q5": { correct: "d", explanation: "'advice' - неисчисляемое. Говорим 'a piece of advice' для одной порции." },
        "a1_art_ex5_q6": { correct: "d", explanation: "'birds' - исчисляемое во мн.ч., в общем значении (какие-то красивые птицы) без артикля. 'Some beautiful birds' было бы тоже правильно." },
        "a1_art_ex5_q7": { correct: "c", explanation: "'information' - неисчисляемое, но здесь речь о конкретной информации, которую ты мне дал, поэтому 'The information'." },
        "a1_art_ex5_q8": { correct: "d", explanation: "'bread' - неисчисляемое, в общем значении без артикля. Говорим 'a loaf of bread' или 'a piece of bread'." },
        "a1_art_ex5_q9": { correct: "b", explanation: "'job' - исчисляемое в ед.ч., 'interesting' начинается с гласного звука, поэтому 'an interesting job'." },
        "a1_art_ex5_q10": { correct: "b", explanation: "Говорим о конкретных детях и конкретном саде, которые мы видим или о которых знаем: 'The children are playing in the garden'." }
    };

    // Код для проверки ответов (остается таким же, как в предыдущем JS файле для грамматики)
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
