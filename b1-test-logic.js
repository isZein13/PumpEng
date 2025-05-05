// b1-test-logic.js

document.addEventListener('DOMContentLoaded', () => {
    // <<< ID элементов для B1 теста >>>
    const questionsContainer = document.getElementById('b1-test-questions');
    const submitButton = document.getElementById('submit-b1-test');
    const resultsContainer = document.getElementById('b1-test-results');
    const scoreElement = document.getElementById('b1-score');
    const explanationsContainer = document.getElementById('b1-explanations');

    // --- ДАННЫЕ ТЕСТА B1 ---
    const b1TestData = [
        {
            id: 'b1_q1',
            question: '1. "How long ___ you ___ English?" "For about five years now."',
            options: ["do / learn", "are / learning", "have / been learning", "did / learn"],
            correctAnswer: "have / been learning",
            explanation: {
                general: "Тест на Present Perfect Continuous для действия, которое началось в прошлом и продолжается до сих пор, с акцентом на длительность ('How long?', 'For...').",
                options: {
                    "do / learn": "Present Simple, не подходит для длительности до настоящего момента.",
                    "are / learning": "Present Continuous, обычно для действий прямо сейчас, а не для длительности 'for five years'.",
                    "have / been learning": "Правильно. Present Perfect Continuous используется для длительных действий до настоящего момента.",
                    "did / learn": "Past Simple, для завершенных действий в прошлом."
                }
            }
        },
        {
            id: 'b1_q2',
            question: '2. "By the time the police arrived, the thief ___ ."',
            options: ["escaped", "has escaped", "had escaped", "was escaping"],
            correctAnswer: "had escaped",
            explanation: {
                general: "Тест на Past Perfect Simple для действия, которое завершилось *до* другого действия в прошлом ('arrived').",
                options: {
                    "escaped": "Past Simple, означает, что он сбежал примерно в то же время, когда приехала полиция.",
                    "has escaped": "Present Perfect, действие связано с настоящим, а не с моментом в прошлом.",
                    "had escaped": "Правильно. Past Perfect показывает, что побег произошел раньше прибытия полиции.",
                    "was escaping": "Past Continuous, означает, что он был в процессе побега, когда они приехали."
                }
            }
        },
        {
            id: 'b1_q3',
            question: '3. "If I ___ more time, I ___ join a gym."',
            options: ["have / will", "had / would", "have / would", "had / will"],
            correctAnswer: "had / would",
            explanation: {
                general: "Тест на Conditional Type 2 (нереальное условие в настоящем/будущем). Структура: If + Past Simple, ... would + инфинитив.",
                options: {
                    "have / will": "Conditional Type 1 (реальное условие).",
                    "had / would": "Правильно. 'If I had' (Past Simple), 'I would join' (would + инфинитив).",
                    "have / would": "Неправильное сочетание времен.",
                    "had / will": "Неправильное сочетание времен."
                }
            }
        },
         {
            id: 'b1_q4',
            question: '4. "You ___ have told me you were coming! I would have prepared something."',
            options: ["must", "might", "should", "can't"],
            correctAnswer: "should",
            explanation: {
                general: "Тест на Modal Perfect 'should have + V3' для выражения сожаления или критики о действии в прошлом (следовало бы сделать).",
                options: {
                    "must": "'must have told' - должно быть, сказал (уверенное предположение).",
                    "might": "'might have told' - возможно, сказал (неуверенное предположение).",
                    "should": "Правильно. 'should have told' - следовало сказать (но ты не сказал).",
                    "can't": "'can't have told' - не мог сказать (уверенность в невозможности)."
                }
            }
        },
        {
            id: 'b1_q5',
            question: '5. "My car ___ last week."',
            options: ["stole", "was stolen", "has stolen", "had stolen"],
            correctAnswer: "was stolen",
            explanation: {
                general: "Тест на Passive Voice (Past Simple Passive). Действие совершено над подлежащим (машиной). Структура: was/were + Past Participle (V3).",
                options: {
                    "stole": "Active Voice (Past Simple).",
                    "was stolen": "Правильно. Past Simple Passive.",
                    "has stolen": "Active Voice (Present Perfect).",
                    "had stolen": "Active Voice (Past Perfect)."
                }
            }
        },
        {
            id: 'b1_q6',
            question: '6. "She asked me ___ I liked her new dress."',
            options: ["that", "if", "what", "did"],
            correctAnswer: "if",
            explanation: {
                general: "Тест на Reported Speech (косвенная речь) для общего вопроса (yes/no question). Используется 'if' или 'whether'.",
                options: {
                    "that": "'that' используется для косвенных утверждений.",
                    "if": "Правильно. Используется для передачи общих вопросов в косвенной речи.",
                    "what": "'what' используется для специальных вопросов.",
                    "did": "Вспомогательный глагол 'did' не используется в косвенных вопросах."
                }
            }
        },
        {
            id: 'b1_q7',
            question: '7. "I avoid ___ fast food because it\'s unhealthy."',
            options: ["eat", "to eat", "eating", "ate"],
            correctAnswer: "eating",
            explanation: {
                general: "Тест на Gerund vs Infinitive. После глагола 'avoid' используется герундий (V-ing).",
                options: {
                    "eat": "Инфинитив без 'to'.",
                    "to eat": "Инфинитив с 'to'.",
                    "eating": "Правильно. Герундий после 'avoid'.",
                    "ate": "Past Simple."
                }
            }
        },
         {
            id: 'b1_q8',
            question: '8. "He ___ for the company for ten years before he decided to leave."',
            options: ["worked", "has worked", "had been working", "was working"],
            correctAnswer: "had been working",
            explanation: {
                general: "Тест на Past Perfect Continuous для длительного действия, которое происходило *до* определенного момента в прошлом ('before he decided').",
                options: {
                    "worked": "Past Simple.",
                    "has worked": "Present Perfect.",
                    "had been working": "Правильно. Past Perfect Continuous показывает длительность действия до другого события в прошлом.",
                    "was working": "Past Continuous, описывает процесс в определенный момент прошлого."
                }
            }
        },
        {
            id: 'b1_q9',
            question: '9. "It ___ John who called you, not Peter."',
            options: ["is", "that was", "was", "whom was"],
            correctAnswer: "was",
            explanation: {
                general: "Тест на Cleft Sentence (It-cleft) для выделения подлежащего в прошлом. Структура: It + be + выделяемая часть + who/that...",
                options: {
                    "is": "Неверное время (нужно прошлое).",
                    "that was": "Лишнее 'that'.",
                    "was": "Правильно. 'It was John who/that called...'",
                    "whom was": "Неправильное местоимение и порядок."
                }
            }
        },
        {
            id: 'b1_q10',
            question: '10. "If they had invited me, I ___ ."',
            options: ["would go", "will go", "would have gone", "went"],
            correctAnswer: "would have gone",
            explanation: {
                general: "Тест на Conditional Type 3 (нереальное условие в прошлом). Структура: If + Past Perfect, ... would have + Past Participle (V3).",
                options: {
                    "would go": "Используется в Conditional Type 2.",
                    "will go": "Используется в Conditional Type 1.",
                    "would have gone": "Правильно. 'would have + V3' для результата нереального условия в прошлом.",
                    "went": "Past Simple."
                }
            }
        },
        {
            id: 'b1_q11',
            question: '11. "This project ___ by the end of next month."',
            options: ["will finish", "is finishing", "will have finished", "will be finished"],
            correctAnswer: "will be finished",
            explanation: {
                general: "Тест на Future Simple Passive Voice. Действие будет совершено над проектом к определенному моменту в будущем. Структура: will be + Past Participle (V3).",
                options: {
                    "will finish": "Active Voice.",
                    "is finishing": "Present Continuous (Active).",
                    "will have finished": "Future Perfect Active (указывает на завершение к моменту).",
                    "will be finished": "Правильно. Future Simple Passive."
                }
            }
        },
        {
            id: 'b1_q12',
            question: '12. "She suggested ___ to the cinema instead of staying home."',
            options: ["go", "to go", "going", "went"],
            correctAnswer: "going",
            explanation: {
                general: "Тест на Gerund vs Infinitive. После глагола 'suggest' используется герундий (V-ing).",
                options: {
                    "go": "Неправильно.",
                    "to go": "Неправильно.",
                    "going": "Правильно. Герундий после 'suggest'.",
                    "went": "Past Simple."
                }
            }
        },
         {
            id: 'b1_q13',
            question: '13. "He can\'t find his keys. He ___ them at the office."',
            options: ["must leave", "should leave", "might have left", "can't leave"],
            correctAnswer: "might have left",
            explanation: {
                general: "Тест на Modal Perfect для выражения предположения о действии в прошлом. 'might have + V3' - возможно, оставил.",
                options: {
                    "must leave": "Должен оставить (настоящее).",
                    "should leave": "Следовало бы оставить (прошлое).",
                    "might have left": "Правильно. Выражает неуверенное предположение о прошлом действии.",
                    "can't leave": "Не может оставить (настоящее)."
                }
            }
        },
         {
            id: 'b1_q14',
            question: '14. "I had my hair ___ yesterday."',
            options: ["cut", "to cut", "cutting", "was cut"],
            correctAnswer: "cut",
            explanation: {
                general: "Тест на Causative Form (have something done). Структура: have + object + Past Participle (V3). Используется, когда кто-то другой выполняет действие для нас.",
                options: {
                    "cut": "Правильно. 'cut' является Past Participle (V3) от глагола 'cut'.",
                    "to cut": "Инфинитив.",
                    "cutting": "Герундий/Причастие I.",
                    "was cut": "Пассивный залог."
                }
            }
        },
         {
            id: 'b1_q15',
            question: '15. "___ is the reason why he was late.",',
            options: ["That", "What", "It", "Which"],
            correctAnswer: "What",
            explanation: {
                general: "Тест на Cleft Sentence (Wh-cleft). Структура: What-clause + be + выделяемая часть. 'What' здесь означает 'то, что'.",
                options: {
                    "That": "Используется в других конструкциях.",
                    "What": "Правильно. 'What he said was...' или 'What happened was...'. Здесь 'What ... is the reason'.",
                    "It": "Используется в It-clefts ('It was the reason that...').",
                    "Which": "Обычно используется для выбора из вариантов."
                }
            }
        },
        {
            id: 'b1_q16',
            question: '16. The word "ubiquitous" means:',
            options: ["rare", "expensive", "found everywhere", "complicated"],
            correctAnswer: "found everywhere",
            explanation: {
                general: "Тест на словарный запас уровня B1/B2.",
                options: {
                    "rare": "редкий (антоним).",
                    "expensive": "дорогой.",
                    "found everywhere": "Правильно. Вездесущий, повсеместный.",
                    "complicated": "сложный."
                }
            }
        },
         {
            id: 'b1_q17',
            question: '17. Choose the correct phrasal verb: "We need to ___ the meeting until next week because the manager is ill."',
            options: ["put off", "call off", "look up", "get over"],
            correctAnswer: "put off",
            explanation: {
                general: "Тест на знание фразовых глаголов.",
                options: {
                    "put off": "Правильно. Откладывать.",
                    "call off": "Отменять.",
                    "look up": "Искать (информацию).",
                    "get over": "Преодолевать, выздоравливать."
                }
            }
        },

        // === Reading Comprehension B1 ===
        {
            type: "reading",
            passage: "The rise of remote work has significantly changed the employment landscape. While it offers flexibility and eliminates commuting time, some argue it blurs the lines between professional and personal life. Companies are now exploring hybrid models, trying to balance the benefits of remote work with the advantages of in-office collaboration. Effective communication and clear expectations are crucial for managing remote teams successfully."
        },
        {
            id: 'b1_q18',
            question: '18. What is one benefit of remote work mentioned in the passage?',
            options: ["Better collaboration", "Clearer work-life balance", "Flexibility", "More office space"],
            correctAnswer: "Flexibility",
            explanation: {
                general: "Понимание текста: преимущество удаленной работы.",
                options: {
                    "Better collaboration": "Текст упоминает преимущества 'in-office collaboration'.",
                    "Clearer work-life balance": "Текст говорит, что удаленка может *размывать* границы ('blurs the lines').",
                    "Flexibility": "Правильно. '...it offers flexibility...'.",
                    "More office space": "Не упоминается как преимущество удаленки."
                }
            }
        },
        {
            id: 'b1_q19',
            question: '19. What challenge of remote work is mentioned?',
            options: ["Lack of flexibility", "Increased commuting time", "Difficulty in communication", "Mixing professional and personal life"],
            correctAnswer: "Mixing professional and personal life",
            explanation: {
                general: "Понимание текста: недостаток удаленной работы.",
                options: {
                    "Lack of flexibility": "Наоборот, это преимущество.",
                    "Increased commuting time": "Удаленка *устраняет* время на дорогу.",
                    "Difficulty in communication": "Упоминается важность коммуникации для *управления*, но не как главная *проблема* самой удаленки в этом абзаце.",
                    "Mixing professional and personal life": "Правильно. '...it blurs the lines between professional and personal life.'"
                }
            }
        },
        // === Writing B1 ===
         {
            type: "writing",
            id: 'b1_q20',
            question: '20. Writing: Write a paragraph (about 100 words) giving your opinion on the advantages and disadvantages of online learning.'
        }
    ];

    // --- ФУНКЦИЯ ОТОБРАЖЕНИЯ ТЕСТА B1 ---
    function displayB1Test() {
        let testHTML = '';
        b1TestData.forEach((item, index) => {
            if (item.type === 'reading') {
                testHTML += `<div class="reading-passage"><h4>Reading Passage:</h4><p>${item.passage}</p></div>`;
            } else if (item.type === 'writing') {
                testHTML += `
                    <div class="test-question writing-question">
                        <p><strong>${item.question}</strong></p>
                        <textarea id="${item.id}" name="${item.id}" rows="8" placeholder="Write your paragraph here (around 100 words)..."></textarea>
                    </div>`;
            } else {
                // Обычный вопрос
                testHTML += `<div class="test-question" data-question-index="${index}">`;
                testHTML += `<p><strong>${item.question}</strong></p>`;
                testHTML += `<div class="test-options">`;
                item.options.forEach(option => {
                    const optionId = `${item.id}-${option.replace(/\s+/g, '-').toLowerCase()}`;
                    testHTML += `
                        <label for="${optionId}">
                            <input type="radio" id="${optionId}" name="${item.id}" value="${option}">
                            ${option}
                        </label>`;
                });
                testHTML += `</div></div>`;
            }
        });
        if (questionsContainer) {
             questionsContainer.innerHTML = testHTML;
        } else {
             console.error("Element #b1-test-questions not found!");
        }
    }

    // --- ФУНКЦИЯ ПРОВЕРКИ ОТВЕТОВ B1 ---
    function checkB1Answers() {
        let score = 0;
        let explanationsHTML = '';
        let totalScorableQuestions = 0;

        b1TestData.forEach((item, index) => {
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
            const questionElement = questionsContainer ? questionsContainer.querySelector(`.test-question[data-question-index="${index}"]`) : null;
            const selectedOptionInput = questionElement ? questionElement.querySelector(`input[name="${item.id}"]:checked`) : null;
            const userAnswer = selectedOptionInput ? selectedOptionInput.value : null;
            let isCorrect = false;

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

        // <<< Обновление элементов B1 >>>
        if (scoreElement) scoreElement.textContent = `Your score: ${score} out of ${totalScorableQuestions}`;
        if (explanationsContainer) explanationsContainer.innerHTML = explanationsHTML;
        if (resultsContainer) resultsContainer.style.display = 'block';

        if (resultsContainer) resultsContainer.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }

    // --- ИНИЦИАЛИЗАЦИЯ ---
    displayB1Test();
    if (submitButton) {
        submitButton.addEventListener('click', checkB1Answers);
    } else {
         console.error("Submit button #submit-b1-test not found!");
    }
});
