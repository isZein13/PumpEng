// b2-test-logic.js

document.addEventListener('DOMContentLoaded', () => {
    const questionsContainer = document.getElementById('b2-test-questions');
    const submitButton = document.getElementById('submit-b2-test');
    const resultsContainer = document.getElementById('b2-test-results');
    const scoreElement = document.getElementById('b2-score');
    const explanationsContainer = document.getElementById('b2-explanations');

    const b2TestData = [
        {
            id: 'b2_q1',
            question: '1. If she ___ about his allergies, she ___ him that cake.',
            options: ["knew / wouldn't offer", "had known / wouldn't have offered", "knows / won't offer", "would know / didn't offer"],
            correctAnswer: "had known / wouldn't have offered",
            explanation: {
                general: "Mixed Conditional. Условие относится к прошлому (если бы знала тогда), результат тоже к прошлому (не предложила бы тогда). Структура: If + Past Perfect, ... would have + V3.",
                options: {
                    "knew / wouldn't offer": "Conditional Type 2 (нереальное настоящее/будущее).",
                    "had known / wouldn't have offered": "Правильно. Смешанный тип, относящийся к прошлым нереальным событиям.",
                    "knows / won't offer": "Conditional Type 1 (реальное будущее).",
                    "would know / didn't offer": "Некорректная структура."
                }
            }
        },
        {
            id: 'b2_q2',
            question: '2. The lights are off in his apartment. He ___ out.',
            options: ["must go", "should have gone", "must have gone", "can go"],
            correctAnswer: "must have gone",
            explanation: {
                general: "Modal perfect for deduction about the past. 'Must have + V3' выражает высокую степень уверенности в том, что действие произошло в прошлом.",
                options: {
                    "must go": "Сильное долженствование в настоящем/будущем.",
                    "should have gone": "Сожаление или критика о прошлом (следовало уйти, но не ушел).",
                    "must have gone": "Правильно. Должно быть, ушел (уверенное предположение о прошлом).",
                    "can go": "Возможность в настоящем/будущем."
                }
            }
        },
        {
            id: 'b2_q3',
            question: '3. It ___ that the new policy will be implemented next month.',
            options: ["is expecting", "expects", "is expected", "has expected"],
            correctAnswer: "is expected",
            explanation: {
                general: "Impersonal Passive Voice. Используется, когда говорящий неизвестен или не важен. Структура: It + passive form of reporting verb + that-clause.",
                options: {
                    "is expecting": "Active voice (Present Continuous).",
                    "expects": "Active voice (Present Simple).",
                    "is expected": "Правильно. Present Simple Passive ('Ожидается, что...').",
                    "has expected": "Active voice (Present Perfect)."
                }
            }
        },
        {
            id: 'b2_q4',
            question: '4. The manager inquired ___ interested in the overseas project.',
            options: ["if I am", "that I was", "whether I was", "am I"],
            correctAnswer: "whether I was",
            explanation: {
                general: "Reported Speech (косвенный вопрос). 'Inquire' (осведомляться) требует 'if' или 'whether'. Также происходит сдвиг времен (am -> was).",
                options: {
                    "if I am": "Неправильный сдвиг времени.",
                    "that I was": "'that' используется для утверждений, не вопросов.",
                    "whether I was": "Правильно. 'whether' (или 'if') + правильный сдвиг времени.",
                    "am I": "Прямой порядок слов вопроса."
                }
            }
        },
        {
            id: 'b2_q5',
            question: '5. I really regret ___ to her that way. I wish I could take it back.',
            options: ["speaking", "to speak", "to have spoken", "spoke"],
            correctAnswer: "speaking", // or "to have spoken" to emphasize the past nature of the regretted action. For B2, "speaking" is more common.
            explanation: {
                general: "Gerund vs. Infinitive. После 'regret' используется герундий (V-ing) для обозначения сожаления о *прошлом* действии. 'Regret to say/inform' - сожалеть о том, что *сейчас* говоришь.",
                options: {
                    "speaking": "Правильно. Сожалеть о том, что говорил.",
                    "to speak": "Неправильно в этом контексте.",
                    "to have spoken": "Также возможно (Perfect Gerund), чтобы подчеркнуть, что действие произошло раньше сожаления, но 'speaking' более распространено и достаточно для B2.",
                    "spoke": "Past Simple."
                }
            }
        },
        {
            id: 'b2_q6',
            question: '6. The woman ___ next to me on the bus was reading a very interesting book.',
            options: ["sat", "sitting", "who sitting", "was sat"],
            correctAnswer: "sitting",
            explanation: {
                general: "Reduced Relative Clause (Participle Clause). 'The woman (who was) sitting...' можно сократить до 'The woman sitting...'.",
                options: {
                    "sat": "Past Simple, предложение стало бы грамматически неверным без связки.",
                    "sitting": "Правильно. Participle I (-ing форма) в роли определения.",
                    "who sitting": "Пропущено 'was'.",
                    "was sat": "Пассивная конструкция, неверная по смыслу ('ее посадили')."
                }
            }
        },
        {
            id: 'b2_q7',
            question: '7. He mentioned that he ___ us the following day, but he never showed up.',
            options: ["would visit", "will visit", "is visiting", "visited"],
            correctAnswer: "would visit",
            explanation: {
                general: "Future in the Past. Когда мы говорим о будущем с точки зрения прошлого, 'will' меняется на 'would'.",
                options: {
                    "would visit": "Правильно. Будущее в прошлом.",
                    "will visit": "Future Simple (для настоящего момента речи).",
                    "is visiting": "Present Continuous (для ближайшего будущего с точки зрения настоящего).",
                    "visited": "Past Simple."
                }
            }
        },
        {
            id: 'b2_q8',
            question: '8. "Never ___ such a breathtaking view before," she exclaimed.',
            options: ["I had seen", "had I seen", "I saw", "did I see"],
            correctAnswer: "had I seen",
            explanation: {
                general: "Inversion after negative adverbials. Когда предложение начинается с отрицательного наречия или фразы (Never, Hardly, Seldom, Not only), используется инверсия (вспомогательный глагол перед подлежащим).",
                options: {
                    "I had seen": "Стандартный порядок слов.",
                    "had I seen": "Правильно. Инверсия после 'Never'.",
                    "I saw": "Past Simple, не отражает 'before' и не использует инверсию.",
                    "did I see": "Инверсия для Past Simple, но здесь контекст Past Perfect ('before')."
                }
            }
        },
        {
            id: 'b2_q9',
            question: '9. This company is known for its ___ to quality and customer satisfaction.',
            options: ["dedicate", "dedication", "dedicated", "dedicating"],
            correctAnswer: "dedication",
            explanation: {
                general: "Word formation (словообразование). Требуется существительное после предлога 'its' и перед предлогом 'to'.",
                options: {
                    "dedicate": "Глагол (посвящать).",
                    "dedication": "Правильно. Существительное (преданность, приверженность).",
                    "dedicated": "Прилагательное/Причастие II (преданный).",
                    "dedicating": "Герундий/Причастие I."
                }
            }
        },
        {
            id: 'b2_q10',
            question: '10. He had to ___ his appointment because something urgent came up.',
            options: ["call up", "call for", "call off", "call in"],
            correctAnswer: "call off",
            explanation: {
                general: "Phrasal verbs. 'Call off' означает 'отменить'.",
                options: {
                    "call up": "Позвонить по телефону / призвать в армию.",
                    "call for": "Требовать / заезжать за кем-то.",
                    "call off": "Правильно. Отменить (встречу, мероприятие).",
                    "call in": "Вызвать (специалиста) / зайти ненадолго."
                }
            }
        },
        {
            id: 'b2_q11',
            question: '11. Despite ___ hard, he didn\'t pass the exam.',
            options: ["he studied", "studying", "to study", "of studying"],
            correctAnswer: "studying",
            explanation: {
                general: "После предлогов 'despite' или 'in spite of' используется герундий (V-ing) или существительное.",
                options: {
                    "he studied": "Нельзя использовать подлежащее + сказуемое после 'despite' без 'the fact that'.",
                    "studying": "Правильно. Герундий после 'despite'.",
                    "to study": "Инфинитив не используется.",
                    "of studying": "Лишний предлог 'of'."
                }
            }
        },
        {
            id: 'b2_q12',
            question: '12. The more you practice, ___ you will become.',
            options: ["the fluent", "more fluent", "the more fluently", "the more fluent"],
            correctAnswer: "the more fluent",
            explanation: {
                general: "Parallel comparison structure 'The... the...'. 'The + comparative adjective/adverb..., the + comparative adjective/adverb...'.",
                options: {
                    "the fluent": "Нужна сравнительная степень.",
                    "more fluent": "Пропущено 'the'.",
                    "the more fluently": "'Fluently' - наречие, а здесь описывается 'you' (местоимение), поэтому нужно прилагательное 'fluent'.",
                    "the more fluent": "Правильно. 'the more fluent' (чем более беглым)."
                }
            }
        },
         {
            id: 'b2_q13',
            question: '13. It was ___ a difficult decision that I had to think about it for days.',
            options: ["so", "such", "very", "too"],
            correctAnswer: "such",
            explanation: {
                general: "Конструкция 'such a/an + прилагательное + существительное + that...' для выражения следствия.",
                options: {
                    "so": "'so difficult a decision' или 'so difficult that...'.",
                    "such": "Правильно. 'such a difficult decision that...'.",
                    "very": "Не используется в данной конструкции для выражения следствия с 'that'.",
                    "too": "Обычно 'too difficult to... (слишком сложно, чтобы...)'. "
                }
            }
        },
        {
            id: 'b2_q14',
            question: '14. She is widely ___ as one of the most influential artists of her generation.',
            options: ["regarded", "told", "meant", "considered to"],
            correctAnswer: "regarded",
            explanation: {
                general: "Устойчивое выражение 'to be regarded as' - считаться кем-либо/чем-либо.",
                options: {
                    "regarded": "Правильно. 'She is regarded as...'",
                    "told": "Не подходит по смыслу.",
                    "meant": "Не подходит по смыслу.",
                    "considered to": "Обычно 'considered to be' или просто 'considered'."
                }
            }
        },
         {
            id: 'b2_q15',
            question: '15. ___ you to change your mind, please let us know immediately.',
            options: ["If", "Unless", "Should", "Provided"],
            correctAnswer: "Should",
            explanation: {
                general: "Inversion in conditional sentences (Type 1). 'Should you change...' является более формальным вариантом 'If you change...' или 'If you should change...'.",
                options: {
                    "If": "Стандартный условный союз.",
                    "Unless": "Если не...",
                    "Should": "Правильно. Используется для инверсии в условных предложениях, выражая менее вероятное условие или вежливую форму.",
                    "Provided": "При условии, что..."
                }
            }
        },

        // === Reading Comprehension B2 ===
        {
            type: "reading",
            passage: "The advent of artificial intelligence (AI) is poised to revolutionize numerous industries, from healthcare to transportation. AI algorithms can analyze vast datasets to identify patterns humains might miss, leading to more accurate diagnoses or optimized traffic flow. However, this technological leap is not without its ethical dilemmas. Concerns about job displacement, algorithmic bias, and the potential for misuse in surveillance or autonomous weaponry are increasingly prominent. Striking a balance between fostering innovation and establishing robust regulatory frameworks is proving to be a complex challenge for policymakers worldwide."
        },
        {
            id: 'b2_q16',
            question: '16. According to the passage, what is a significant benefit of AI?',
            options: ["Creation of new job opportunities.", "Its ability to analyze large amounts of data for pattern recognition.", "Simplification of ethical decision-making.", "Reduction in the need for regulatory frameworks."],
            correctAnswer: "Its ability to analyze large amounts of data for pattern recognition.",
            explanation: {
                general: "Понимание текста: преимущество ИИ.",
                options: {
                    "Creation of new job opportunities.": "Текст упоминает 'job displacement' (сокращение рабочих мест) как проблему.",
                    "Its ability to analyze large amounts of data for pattern recognition.": "Правильно. 'AI algorithms can analyze vast datasets to identify patterns...'.",
                    "Simplification of ethical decision-making.": "Наоборот, текст говорит об 'ethical dilemmas'.",
                    "Reduction in the need for regulatory frameworks.": "Текст говорит о необходимости 'robust regulatory frameworks'."
                }
            }
        },
        {
            id: 'b2_q17',
            question: '17. What is presented as a major challenge related to AI development?',
            options: ["The slow pace of technological advancement.", "Lack of interest from various industries.", "The difficulty in finding a balance between innovation and regulation.", "The high cost of implementing AI systems."],
            correctAnswer: "The difficulty in finding a balance between innovation and regulation.",
            explanation: {
                general: "Понимание текста: основная проблема, связанная с развитием ИИ.",
                options: {
                    "The slow pace of technological advancement.": "Текст говорит о 'technological leap'.",
                    "Lack of interest from various industries.": "Текст говорит, что ИИ 'is poised to revolutionize numerous industries'.",
                    "The difficulty in finding a balance between innovation and regulation.": "Правильно. 'Striking a balance between fostering innovation and establishing robust regulatory frameworks is proving to be a complex challenge...'.",
                    "The high cost of implementing AI systems.": "Стоимость не упоминается как главный вызов в этом отрывке."
                }
            }
        },
        // === Writing B2 ===
         {
            type: "writing",
            id: 'b2_q18',
            question: '18. Writing: "Many people believe that social media has a predominantly negative impact on society, while others argue it brings more benefits. Discuss both views and give your own opinion." (Write around 150-180 words).'
        }
    ];

    // --- ФУНКЦИИ ОТОБРАЖЕНИЯ И ПРОВЕРКИ (идентичны предыдущим тестам, только меняются ID) ---
    function displayB2Test() {
        let testHTML = '';
        b2TestData.forEach((item, index) => {
            if (item.type === 'reading') {
                testHTML += `<div class="reading-passage"><h4>Reading Passage:</h4><p>${item.passage}</p></div>`;
            } else if (item.type === 'writing') {
                testHTML += `
                    <div class="test-question writing-question">
                        <p><strong>${item.question}</strong></p>
                        <textarea id="${item.id}" name="${item.id}" rows="10" placeholder="Write your essay here (around 150-180 words)..."></textarea>
                    </div>`;
            } else {
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
        if (questionsContainer) questionsContainer.innerHTML = testHTML;
        else console.error("Element #b2-test-questions not found!");
    }

    function checkB2Answers() {
        let score = 0;
        let explanationsHTML = '';
        let totalScorableQuestions = 0;

        b2TestData.forEach((item, index) => {
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
            let isCorrect = Array.isArray(item.correctAnswer) ? item.correctAnswer.includes(userAnswer) : userAnswer === item.correctAnswer;

            if (isCorrect) score++;

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
                    let isCorrectOpt = Array.isArray(item.correctAnswer) ? item.correctAnswer.includes(opt) : opt === item.correctAnswer;
                    explanationsHTML += `<li class="${isCorrectOpt ? 'correct-option-explanation' : ''}"><strong>${opt}:</strong> ${explanationText}</li>`;
                 });
                 explanationsHTML += `</ul></div>`;
            }
            explanationsHTML += `</div><hr>`;
        });

        if (scoreElement) scoreElement.textContent = `Your score: ${score} out of ${totalScorableQuestions}`;
        if (explanationsContainer) explanationsContainer.innerHTML = explanationsHTML;
        if (resultsContainer) resultsContainer.style.display = 'block';
        if (resultsContainer) resultsContainer.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }

    displayB2Test();
    if (submitButton) submitButton.addEventListener('click', checkB2Answers);
    else console.error("Submit button #submit-b2-test not found!");
});
