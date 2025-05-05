// a1-test-logic.js

document.addEventListener('DOMContentLoaded', () => {
    const questionsContainer = document.getElementById('a1-test-questions');
    const submitButton = document.getElementById('submit-a1-test');
    const resultsContainer = document.getElementById('a1-test-results');
    const scoreElement = document.getElementById('a1-score');
    const explanationsContainer = document.getElementById('a1-explanations');

    // --- ДАННЫЕ ТЕСТА ---
    const a1TestData = [
        // === Грамматика и Лексика ===
        {
            id: 'q1',
            question: '1. Complete the sentence: "They ___ to school every day."',
            options: ["go", "goes", "is going", "went", "are going"],
            correctAnswer: "go",
            explanation: {
                general: "Тест на Present Simple для множественного числа (They) и регулярного действия (every day).",
                options: {
                    go: "'go' - Правильная форма глагола для 'They' в Present Simple.",
                    goes: "'goes' - Используется для he/she/it в Present Simple.",
                    "is going": "'is going' - Present Continuous, используется для действий в данный момент, а не регулярных.",
                    went: "'went' - Past Simple (прошедшее время).",
                    "are going": "'are going' - Present Continuous."
                }
            }
        },
        {
            id: 'q2',
            question: '2. Choose the correct form of the verb: "She ___ English every evening."',
            options: ["study", "studied", "is studying", "studies", "studying"],
            correctAnswer: "studies",
            explanation: {
                general: "Тест на Present Simple для 3-го лица единственного числа (She) и регулярного действия (every evening).",
                options: {
                    study: "'study' - Базовая форма, не подходит для 'She'.",
                    studied: "'studied' - Past Simple.",
                    "is studying": "'is studying' - Present Continuous.",
                    studies: "'studies' - Правильная форма для 'She' в Present Simple (study -> studies).",
                    studying: "'studying' - Герундий или часть Present Continuous."
                }
            }
        },
        {
            id: 'q3',
            question: '3. Fill in the blank with the correct pronoun: "___ is my friend."',
            options: ["He", "She", "They", "It"],
            correctAnswer: ["He", "She"], // Может быть и He, и She
            explanation: {
                general: "Выбор подходящего личного местоимения в роли подлежащего.",
                options: {
                    He: "'He' - Правильно, если друг мужского пола.",
                    She: "'She' - Правильно, если друг женского пола.",
                    They: "'They' - Множественное число ('Они мои друзья').",
                    It: "'It' - Используется для неодушевленных предметов или животных."
                }
            }
        },
         {
            id: 'q4',
            question: '4. Which sentence is correct?',
            options: ["He have a dog.", "She will has a dog.", "They has a dog.", "I have a dog."],
            correctAnswer: "I have a dog.",
            explanation: {
                general: "Тест на правильное использование глагола 'to have' в Present Simple и Future Simple.",
                options: {
                    "He have a dog.": "Неправильно. Для 'He' нужно 'has'.",
                    "She will has a dog.": "Неправильно. После 'will' используется базовая форма 'have'.",
                    "They has a dog.": "Неправильно. Для 'They' нужно 'have'.",
                    "I have a dog.": "Правильно. 'I' используется с 'have'."
                }
            }
        },
        {
            id: 'q5',
            question: '5. Complete the sentence: "We ___ at home last night."',
            options: ["are", "were", "is", "am"],
            correctAnswer: "were",
            explanation: {
                general: "Тест на Past Simple глагола 'to be' (были) для 'We', указание на прошлое - 'last night'.",
                options: {
                    are: "'are' - Present Simple для 'We'.",
                    were: "'were' - Правильная форма Past Simple для 'We'.",
                    is: "'is' - Present/Past Simple для he/she/it.",
                    am: "'am' - Present Simple для 'I'."
                }
            }
        },
        {
            id: 'q6',
            question: '6. Choose the correct preposition: "I\'m going ___ vacation next week."',
            options: ["on", "in", "at", "by"],
            correctAnswer: "on",
            explanation: {
                general: "Выбор правильного предлога с существительным 'vacation'.",
                options: {
                    on: "'on vacation' - Устойчивое выражение 'в отпуске / на каникулах'. Правильно.",
                    in: "'in' - Обычно используется с месяцами, годами, городами (in July, in London).",
                    at: "'at' - Используется с конкретным временем, местами (at 5 o'clock, at school).",
                    by: "'by' - Обычно указывает на средство передвижения или время (by car, by Monday)."
                }
            }
        },
        {
            id: 'q7',
            question: '7. Fill in the blank with the correct article: "I have ___ apple."',
            options: ["a", "an", "the", "-"],
            correctAnswer: "an",
            explanation: {
                general: "Выбор неопределенного артикля перед исчисляемым существительным в единственном числе.",
                options: {
                    a: "'a' - Используется перед словами, начинающимися с согласного звука.",
                    an: "'an' - Правильно. Используется перед словами, начинающимися с гласного звука ('apple').",
                    the: "'the' - Определенный артикль, используется, когда речь идет о конкретном предмете.",
                    "-": "Артикль нужен перед 'apple'."
                }
            }
        },
        {
            id: 'q8',
            question: '8. What is the plural of "child"?',
            options: ["childs", "childes", "children", "childrens"],
            correctAnswer: "children",
            explanation: {
                general: "Тест на знание неправильной формы множественного числа.",
                options: {
                    childs: "Неправильно.",
                    childes: "Неправильно.",
                    children: "'children' - Правильная форма множественного числа от 'child'.",
                    childrens: "Неправильно (окончание 's' не добавляется к 'children')."
                }
            }
        },
         {
            id: 'q9',
            question: '9. What do you call the place where you buy food and groceries?',
            options: ["school", "hospital", "market", "park"],
            correctAnswer: "market",
            explanation: {
                general: "Тест на знание базовой лексики (места).",
                options: {
                    school: "'school' - школа.",
                    hospital: "'hospital' - больница.",
                    market: "'market' - рынок или магазин (часто используется для супермаркета). Правильно.",
                    park: "'park' - парк."
                }
            }
        },
        {
            id: 'q10',
            question: '10. Choose the correct word for "красный":',
            options: ["red", "green", "blue", "yellow"],
            correctAnswer: "red",
            explanation: {
                general: "Тест на знание цветов.",
                options: {
                    red: "'red' - красный. Правильно.",
                    green: "'green' - зеленый.",
                    blue: "'blue' - синий.",
                    yellow: "'yellow' - желтый."
                }
            }
        },
         {
            id: 'q11',
            question: '11. What is the synonym of "happy"?',
            options: ["sad", "angry", "joyful", "scared"],
            correctAnswer: "joyful",
            explanation: {
                general: "Тест на знание синонимов базовых прилагательных.",
                options: {
                    sad: "'sad' - грустный (антоним).",
                    angry: "'angry' - злой.",
                    joyful: "'joyful' - радостный (синоним 'happy'). Правильно.",
                    scared: "'scared' - напуганный."
                }
            }
        },
        {
            id: 'q12',
            question: '12. Choose the correct word for "машина":',
            options: ["house", "car", "tree", "table"],
            correctAnswer: "car",
            explanation: {
                general: "Тест на знание базовых существительных.",
                options: {
                    house: "'house' - дом.",
                    car: "'car' - машина. Правильно.",
                    tree: "'tree' - дерево.",
                    table: "'table' - стол."
                }
            }
        },
        // === Reading Comprehension ===
        {
            type: "reading", // Тип для обозначения текста
            passage: "My name is Mark. I live in the capital. I go to school every day. After school, I like to play soccer with my friends in the park. My favorite subject is math. I like to go to the mountains and I don't like to read historical books."
        },
        {
            id: 'q13',
            question: '13. Where does Mark live?',
            options: ["In a small town", "In a big city", "In the countryside", "In the mountains"],
            correctAnswer: "In a big city",
            explanation: {
                general: "Понимание текста: где живет Марк?",
                options: {
                    "In a small town": "В тексте сказано 'capital', что обычно означает большой город.",
                    "In a big city": "Правильно. 'capital' (столица) - это большой город.",
                    "In the countryside": "В тексте не упоминается деревня.",
                    "In the mountains": "Он любит ездить в горы, но не живет там."
                }
            }
        },
        {
            id: 'q14',
            question: '14. Which subject does Mark like the most?',
            options: ["English", "Math", "Science", "History"],
            correctAnswer: "Math",
            explanation: {
                general: "Понимание текста: какой любимый предмет Марка?",
                options: {
                    English: "В тексте не сказано, что английский - любимый.",
                    Math: "Правильно. В тексте: 'My favorite subject is math'.",
                    Science: "Наука не упоминается как любимый предмет.",
                    History: "В тексте сказано, что он *не* любит читать исторические книги."
                }
            }
        },
        // === Writing ===
         {
            type: "writing", // Тип для письма
            id: 'q15',
            question: '15. Writing: Write a short paragraph (5-7 sentences) about your last vacation.'
        }
    ];

    // --- ФУНКЦИЯ ОТОБРАЖЕНИЯ ТЕСТА ---
    function displayA1Test() {
        let testHTML = '';
        a1TestData.forEach((item, index) => {
            if (item.type === 'reading') {
                testHTML += `<div class="reading-passage"><h4>Reading Passage:</h4><p>${item.passage}</p></div>`;
            } else if (item.type === 'writing') {
                testHTML += `
                    <div class="test-question writing-question">
                        <p><strong>${item.question}</strong></p>
                        <textarea id="${item.id}" name="${item.id}" rows="6" placeholder="Write your paragraph here..."></textarea>
                    </div>`;
            } else {
                // Обычный вопрос с вариантами
                testHTML += `<div class="test-question" data-question-index="${index}">`; // Добавляем индекс для связи с данными
                testHTML += `<p><strong>${item.question}</strong></p>`;
                testHTML += `<div class="test-options">`;
                item.options.forEach(option => {
                    // Генерируем уникальный id для input
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
        questionsContainer.innerHTML = testHTML;
    }

    // --- ФУНКЦИЯ ПРОВЕРКИ ОТВЕТОВ ---
    function checkAnswers() {
        let score = 0;
        let explanationsHTML = '';
        let totalScorableQuestions = 0; // Считаем только вопросы с вариантами и чтением

        a1TestData.forEach((item, index) => {
            if (item.type === 'reading' || item.type === 'writing') {
                 // Пропускаем текст для чтения и письмо при подсчете очков и авто-проверке
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
            const questionElement = questionsContainer.querySelector(`.test-question[data-question-index="${index}"]`);
            const selectedOptionInput = questionElement ? questionElement.querySelector(`input[name="${item.id}"]:checked`) : null;
            const userAnswer = selectedOptionInput ? selectedOptionInput.value : null;
            let isCorrect = false;

             // Проверка ответа (учитываем, что правильных может быть несколько, как в q3)
             if (Array.isArray(item.correctAnswer)) {
                 isCorrect = item.correctAnswer.includes(userAnswer);
             } else {
                 isCorrect = userAnswer === item.correctAnswer;
             }

            if (isCorrect) {
                score++;
            }

            // Генерация объяснения для вопроса
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
            explanationsHTML += `</div><hr>`; // Разделитель между объяснениями
        });

        scoreElement.textContent = `Your score: ${score} out of ${totalScorableQuestions}`;
        explanationsContainer.innerHTML = explanationsHTML;
        resultsContainer.style.display = 'block';

        // Прокрутка к результатам
         resultsContainer.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }

    // --- ИНИЦИАЛИЗАЦИЯ ---
    displayA1Test(); // Отображаем тест при загрузке
    submitButton.addEventListener('click', checkAnswers); // Назначаем проверку на кнопку
});
