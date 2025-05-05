// a2-test-logic.js

document.addEventListener('DOMContentLoaded', () => {
    // <<< ИЗМЕНЕНО: ID элементов для A2 теста >>>
    const questionsContainer = document.getElementById('a2-test-questions');
    const submitButton = document.getElementById('submit-a2-test');
    const resultsContainer = document.getElementById('a2-test-results');
    const scoreElement = document.getElementById('a2-score');
    const explanationsContainer = document.getElementById('a2-explanations');

    // --- ДАННЫЕ ТЕСТА A2 ---
    const a2TestData = [
        // === Грамматика и Лексика A2 ===
        {
            id: 'a2_q1',
            question: '1. "What ___ doing at 8 PM last night?"',
            options: ["you were", "were you", "did you", "are you"],
            correctAnswer: "were you",
            explanation: {
                general: "Тест на Past Continuous (вопрос). Порядок слов в вопросе: Wh-word + was/were + подлежащее + V-ing?",
                options: {
                    "you were": "Неправильный порядок слов для вопроса.",
                    "were you": "Правильный порядок слов в вопросительном предложении Past Continuous.",
                    "did you": "Используется для Past Simple, а не Continuous ('What did you do?').",
                    "are you": "Present Continuous (настоящее время)."
                }
            }
        },
        {
            id: 'a2_q2',
            question: '2. "This book is ___ than that one."',
            options: ["interesting", "more interesting", "most interesting", "interestinger"],
            correctAnswer: "more interesting",
            explanation: {
                general: "Тест на сравнительную степень прилагательных (Comparative). Для длинных прилагательных (3+ слога) используется 'more'.",
                options: {
                    "interesting": "Начальная форма прилагательного.",
                    "more interesting": "Правильная сравнительная форма для 'interesting'.",
                    "most interesting": "Превосходная степень (Superlative).",
                    "interestinger": "Неправильное образование сравнительной степени."
                }
            }
        },
         {
            id: 'a2_q3',
            question: '3. "We haven\'t got ___ milk left."',
            options: ["some", "any", "many", "a lot"],
            correctAnswer: "any",
            explanation: {
                general: "Тест на использование 'some' и 'any'. 'Any' используется в отрицательных предложениях и вопросах с неисчисляемыми существительными.",
                options: {
                    "some": "'some' используется в утвердительных предложениях.",
                    "any": "Правильно. Используется в отрицаниях ('haven\'t got').",
                    "many": "'many' используется с исчисляемыми существительными ('many apples').",
                    "a lot": "'a lot of' используется и с теми, и с другими, но здесь не подходит по смыслу отрицания."
                }
            }
        },
        {
            id: 'a2_q4',
            question: '4. "She ___ visit her grandma next weekend."',
            options: ["will to", "is going", "goes to", "is going to"],
            correctAnswer: "is going to",
            explanation: {
                general: "Тест на выражение будущих планов/намерений. Конструкция 'be going to + инфинитив'.",
                options: {
                    "will to": "Неправильная конструкция.",
                    "is going": "Не хватает 'to' перед инфинитивом 'visit'.",
                    "goes to": "Present Simple, используется для расписаний, а не планов на выходные.",
                    "is going to": "Правильная конструкция 'to be going to' для выражения намерения."
                }
            }
        },
        {
            id: 'a2_q5',
            question: '5. "He ___ swim when he was five."',
            options: ["can", "must", "could", "have to"],
            correctAnswer: "could",
            explanation: {
                general: "Тест на модальный глагол 'could' для выражения способности в прошлом.",
                options: {
                    "can": "'can' - способность в настоящем.",
                    "must": "'must' - долженствование (сильное).",
                    "could": "Правильно. 'could' - мог, умел (способность в прошлом).",
                    "have to": "'have to' - долженствование (внешние обстоятельства)."
                }
            }
        },
        {
            id: 'a2_q6',
            question: '6. "My sister is the ___ person in our family."',
            options: ["tall", "taller", "tallest", "most tall"],
            correctAnswer: "tallest",
            explanation: {
                general: "Тест на превосходную степень прилагательных (Superlative). Для коротких прилагательных добавляется '-est'.",
                options: {
                    "tall": "Начальная форма.",
                    "taller": "Сравнительная степень (Comparative).",
                    "tallest": "Правильная превосходная форма для 'tall'.",
                    "most tall": "'most' используется с длинными прилагательными."
                }
            }
        },
        {
            id: 'a2_q7',
            question: '7. "___ you ever ___ to London?"',
            options: ["Did / go", "Have / been", "Were / -", "Do / be"],
            correctAnswer: "Have / been",
            explanation: {
                general: "Тест на Present Perfect для выражения жизненного опыта ('когда-либо был'). Используется 'Have/Has + Past Participle (V3)'.",
                options: {
                    "Did / go": "Past Simple, спрашивает о конкретном событии в прошлом.",
                    "Have / been": "Правильно. 'been' - Past Participle от 'be'. Используется в значении 'побывал'.",
                    "Were / -": "Past Simple от 'be'.",
                    "Do / be": "Неправильная конструкция."
                }
            }
        },
        {
            id: 'a2_q8',
            question: '8. "I usually ___ TV in the evening, but yesterday I ___ a book."',
            options: ["watch / read", "am watching / read", "watch / was reading", "watched / read"],
            correctAnswer: "watch / read",
            explanation: {
                general: "Сочетание Present Simple (обычное действие - 'usually') и Past Simple (действие в прошлом - 'yesterday').",
                options: {
                    "watch / read": "Правильно. 'watch' (Present Simple), 'read' (Past Simple - форма совпадает с инфинитивом).",
                    "am watching / read": "Неверно для 'usually'.",
                    "watch / was reading": "Неверно для завершенного действия 'yesterday'.",
                    "watched / read": "Неверно для 'usually'."
                }
            }
        },
        {
            id: 'a2_q9',
            question: '9. "There isn\'t ___ sugar in my coffee."',
            options: ["many", "a lot", "much", "some"],
            correctAnswer: "much",
            explanation: {
                general: "Тест на 'much' и 'many'. 'Much' используется с неисчисляемыми существительными (sugar) в отрицаниях и вопросах.",
                options: {
                    "many": "Для исчисляемых.",
                    "a lot": "'a lot of' обычно в утверждениях. В отрицании лучше 'much'.",
                    "much": "Правильно. Используется с неисчисляемым 'sugar' в отрицательном предложении.",
                    "some": "Для утверждений."
                }
            }
        },
         {
            id: 'a2_q10',
            question: '10. "You ___ be quiet in the library."',
            options: ["can", "must", "could", "don't have to"],
            correctAnswer: "must",
            explanation: {
                general: "Тест на модальный глагол 'must' для выражения правила или сильного долженствования.",
                options: {
                    "can": "'can' - мочь, иметь возможность.",
                    "must": "Правильно. Выражает правило, необходимость ('нужно / должен').",
                    "could": "'could' - мог бы (вежливость) или мог (прошлое).",
                    "don't have to": "'don't have to' - не обязан, нет необходимости."
                }
            }
        },
        // === Reading Comprehension A2 ===
        {
            type: "reading",
            passage: "Sarah had a busy day yesterday. In the morning, she went shopping for groceries. Then, she visited her friend, Jane, for lunch. They talked for about two hours. In the afternoon, Sarah cleaned her apartment. In the evening, she was tired, so she watched a film and went to bed early."
        },
        {
            id: 'a2_q11',
            question: '11. What did Sarah do in the morning?',
            options: ["Visited a friend", "Cleaned her apartment", "Went shopping", "Watched a film"],
            correctAnswer: "Went shopping",
            explanation: {
                general: "Понимание текста: действие утром.",
                options: {
                    "Visited a friend": "Она сделала это после шоппинга ('Then, she visited...').",
                    "Cleaned her apartment": "Она сделала это днем ('In the afternoon...').",
                    "Went shopping": "Правильно. 'In the morning, she went shopping...'.",
                    "Watched a film": "Она сделала это вечером ('In the evening...')."
                }
            }
        },
        {
            id: 'a2_q12',
            question: '12. Why did Sarah go to bed early?',
            options: ["She had to work", "She was bored", "She finished her cleaning", "She was tired"],
            correctAnswer: "She was tired",
            explanation: {
                general: "Понимание текста: причина раннего отхода ко сну.",
                options: {
                    "She had to work": "В тексте не упоминается работа.",
                    "She was bored": "Не сказано, что ей было скучно.",
                    "She finished her cleaning": "Уборка была днем, это не причина.",
                    "She was tired": "Правильно. '...she was tired, so she watched a film and went to bed early.'"
                }
            }
        },
        // === Writing A2 ===
         {
            type: "writing",
            id: 'a2_q13',
            question: '13. Writing: Write 5-7 sentences about your plans for next weekend using "be going to".'
        }
    ];

    // --- ФУНКЦИЯ ОТОБРАЖЕНИЯ ТЕСТА A2 ---
    function displayA2Test() {
        let testHTML = '';
        a2TestData.forEach((item, index) => {
            if (item.type === 'reading') {
                testHTML += `<div class="reading-passage"><h4>Reading Passage:</h4><p>${item.passage}</p></div>`;
            } else if (item.type === 'writing') {
                testHTML += `
                    <div class="test-question writing-question">
                        <p><strong>${item.question}</strong></p>
                        <textarea id="${item.id}" name="${item.id}" rows="6" placeholder="Write your sentences here..."></textarea>
                    </div>`;
            } else {
                // Обычный вопрос с вариантами
                testHTML += `<div class="test-question" data-question-index="${index}">`;
                testHTML += `<p><strong>${item.question}</strong></p>`;
                testHTML += `<div class="test-options">`;
                item.options.forEach(option => {
                    const optionId = `${item.id}-${option.replace(/\s+/g, '-').toLowerCase()}`; // Генерируем ID
                    testHTML += `
                        <label for="${optionId}">
                            <input type="radio" id="${optionId}" name="${item.id}" value="${option}">
                            ${option}
                        </label>`;
                });
                testHTML += `</div></div>`;
            }
        });
        // <<< ИЗМЕНЕНО: контейнер для A2 >>>
        if (questionsContainer) {
             questionsContainer.innerHTML = testHTML;
        } else {
            console.error("Element #a2-test-questions not found!");
        }
    }

    // --- ФУНКЦИЯ ПРОВЕРКИ ОТВЕТОВ A2 ---
    function checkA2Answers() {
        let score = 0;
        let explanationsHTML = '';
        let totalScorableQuestions = 0;

        a2TestData.forEach((item, index) => {
            if (item.type === 'reading' || item.type === 'writing') {
                 if (item.type === 'writing') {
                     const writingAnswer = document.getElementById(item.id)?.value || "No answer provided.";
                     explanationsHTML += `
                        <div class="result-item">
                            <p><strong>${item.question}</strong></p>
                            <p><strong>Your Answer:</strong></p>
                            <pre class="writing-answer">${writingAnswer}</pre>
                            <p class="explanation-note"><i>(Writing tasks require manual checking by a teacher.)</i></p>
                        </div>
                        <hr>`;
                 }
                 return;
            }

            totalScorableQuestions++;
            // <<< ИЗМЕНЕНО: контейнер для A2 >>>
            const questionElement = questionsContainer ? questionsContainer.querySelector(`.test-question[data-question-index="${index}"]`) : null;
            const selectedOptionInput = questionElement ? questionElement.querySelector(`input[name="${item.id}"]:checked`) : null;
            const userAnswer = selectedOptionInput ? selectedOptionInput.value : null;
            let isCorrect = false;

            // Проверка (может быть массив правильных ответов)
            if (Array.isArray(item.correctAnswer)) {
                 isCorrect = item.correctAnswer.includes(userAnswer);
            } else {
                 isCorrect = userAnswer === item.correctAnswer;
            }

            if (isCorrect) {
                score++;
            }

            // Генерация объяснения
            explanationsHTML += `<div class="result-item ${isCorrect ? 'correct-answer' : 'incorrect-answer'}">`;
            explanationsHTML += `<p><strong>${item.question}</strong></p>`;
            explanationsHTML += `<p>Your answer: ${userAnswer ? `"${userAnswer}"` : "<i>No answer</i>"}</p>`;
            explanationsHTML += `<p>Correct answer: ${Array.isArray(item.correctAnswer) ? item.correctAnswer.join(' or ') : `"${item.correctAnswer}"`}</p>`;

            if (item.explanation) {
                 explanationsHTML += `<div class="explanation-details">`;
                 explanationsHTML += `<p><strong>Explanation:</strong> ${item.explanation.general || ''}</p>`;
                 explanationsHTML += `<ul>`;
                 item.options.forEach(opt => {
                    let explanationText = item.explanation.options[opt] || '';
                    let isCorrectOption = false;
                     if (Array.isArray(item.correctAnswer)) {
                         isCorrectOption = item.correctAnswer.includes(opt);
                     } else {
                         isCorrectOption = opt === item.correctAnswer;
                     }
                    explanationsHTML += `<li class="${isCorrectOption ? 'correct-option-explanation' : ''}"><strong>${opt}:</strong> ${explanationText}</li>`;
                 });
                 explanationsHTML += `</ul></div>`;
            }
            explanationsHTML += `</div><hr>`;
        });

        // <<< ИЗМЕНЕНО: элементы для A2 >>>
        if (scoreElement) scoreElement.textContent = `Your score: ${score} out of ${totalScorableQuestions}`;
        if (explanationsContainer) explanationsContainer.innerHTML = explanationsHTML;
        if (resultsContainer) resultsContainer.style.display = 'block';

        // Прокрутка к результатам
        if (resultsContainer) resultsContainer.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }

    // --- ИНИЦИАЛИЗАЦИЯ ---
    displayA2Test(); // Отображаем тест
    // <<< ИЗМЕНЕНО: кнопка для A2 >>>
    if (submitButton) {
        submitButton.addEventListener('click', checkA2Answers);
    } else {
         console.error("Submit button #submit-a2-test not found!");
    }
});
