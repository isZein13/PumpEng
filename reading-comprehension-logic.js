// reading-comprehension-logic.js
document.addEventListener('DOMContentLoaded', () => {
    // База данных с правильными ответами и объяснениями
    // Ключ - это data-form-id кнопки + _qN (номер вопроса)
    const correctAnswersData = {
        // A1 - Текст 1: My Pet Rabbit
        "a1_rabbit_q1": { correct: "c", explanation: "The text says: 'It is a rabbit.'" },
        "a1_rabbit_q2": { correct: "b", explanation: "The text mentions: 'Fluffy is white.'" },
        "a1_rabbit_q3": { correct: "c", explanation: "The text states: 'Fluffy likes carrots and green leaves.'" },

        // A2 - Текст 1: A Day at the Beach
        "a2_beach_q1": { correct: "b", explanation: "The text says: 'The weather was sunny and warm.'" },
        "a2_beach_q2": { correct: "b", explanation: "The text mentions: 'My brother, Sam, and I built a large sandcastle...'" },
        "a2_beach_q3": { correct: "c", explanation: "The text states: 'For lunch, we had sandwiches and fruit.'" },

        // B1 - Текст 1: My First Job Interview (Примерные ответы и объяснения)
        "b1_interview_q1": { correct: "b", explanation: "The narrator applied for a position as a 'junior marketing assistant'." },
        "b1_interview_q2": { correct: "c", explanation: "The text says: 'On the day, I was incredibly nervous...'" },
        "b1_interview_q3": { correct: "b", explanation: "The result was positive: 'A week later, they called to offer me the job!'" },

        // B2 - Текст 1: The Importance of Urban Green Spaces (Примерные ответы)
        "b2_green_q1": { correct: "b", explanation: "Increasing property values is not mentioned as a direct benefit in this text." },
        "b2_green_q2": { correct: "b", explanation: "The urban heat island effect is when cities are warmer than surrounding rural areas, and green spaces help mitigate this." },
        "b2_green_q3": { correct: "c", explanation: "The passage concludes that 'planning and preservation of these green oases are becoming increasingly vital' for sustainable futures." },

        // C1 - Текст 1: The Nuances of Cross-Cultural Communication (Примерные ответы)
        "c1_culture_q1": { correct: "b", explanation: "The text emphasizes 'a profound understanding of implicit cultural norms, varying communication styles, and non-verbal cues'." },
        "c1_culture_q2": { correct: "b", explanation: "High-context cultures 'rely heavily on shared experiences and unspoken understandings, where meaning is often embedded in the context'." },
        "c1_culture_q3": { correct: "c", explanation: "The passage states that 'potential misunderstandings that can hinder international collaborations' arise from not navigating cultural subtleties." }
    };

    const checkButtons = document.querySelectorAll('.check-reading-answers-btn');

    checkButtons.forEach(button => {
        button.addEventListener('click', function() {
            const formId = this.dataset.formId; // e.g., "a1_rabbit", "b2_green"
            const form = this.closest('.reading-questions-form');
            const questions = form.querySelectorAll('.reading-question');
            const feedbackDiv = form.querySelector('.reading-feedback');
            let allCorrectTracker = true; // Используем другое имя переменной
            let feedbackHTML = '<h4>Результаты проверки:</h4>';
            let questionsAnswered = 0;

            questions.forEach((questionDiv, index) => {
                const questionNumber = index + 1;
                // Формируем имя для радио-кнопок на основе formId (первая часть до подчеркивания)
                // и номера вопроса. Например, для formId="a1_rabbit", questionNumber=1 -> name="q1_a1"
                const namePrefix = formId.substring(0, formId.indexOf('_')); // "a1" from "a1_rabbit"
                const radioName = `q${questionNumber}_${namePrefix}`; // "q1_a1"

                const questionTextP = questionDiv.querySelector('p strong');
                if (!questionTextP) return; // Пропускаем, если нет элемента с текстом вопроса
                const questionFullText = questionTextP.textContent;
                const questionShortText = questionFullText.includes('. ') ? questionFullText.substring(questionFullText.indexOf('. ') + 2) : questionFullText;


                const selectedOption = questionDiv.querySelector(`input[name="${radioName}"]:checked`);
                questionsAnswered++;

                feedbackHTML += `<p><strong>Вопрос ${questionNumber}:</strong> ${questionShortText}</p>`;

                if (selectedOption) {
                    const userAnswer = selectedOption.value;
                    // Формируем ключ для correctAnswersData: formId + _q + questionNumber
                    const answerKey = `${formId}_q${questionNumber}`;
                    const correctAnswerInfo = correctAnswersData[answerKey];

                    if (correctAnswerInfo && userAnswer.toLowerCase() === correctAnswerInfo.correct.toLowerCase()) {
                        feedbackHTML += `<p class="correct">Ваш ответ: "${selectedOption.parentElement.textContent.trim()}" - Верно! ✅</p>`;
                    } else {
                        allCorrectTracker = false;
                        feedbackHTML += `<p class="incorrect">Ваш ответ: "${selectedOption.parentElement.textContent.trim()}" - Неверно. ❌</p>`;
                        if (correctAnswerInfo) {
                            const correctLabelElement = questionDiv.querySelector(`input[value="${correctAnswerInfo.correct.toLowerCase()}"]`);
                            const correctLabelText = correctLabelElement ? correctLabelElement.parentElement.textContent.trim() : `(Правильный вариант: ${correctAnswerInfo.correct})`;
                            feedbackHTML += `<p>Правильный ответ: "${correctLabelText}"</p>`;
                        } else {
                            feedbackHTML += `<p><em>(Информация о правильном ответе для этого вопроса отсутствует)</em></p>`;
                        }
                    }
                    if (correctAnswerInfo && correctAnswerInfo.explanation) {
                        feedbackHTML += `<p class="explanation-text"><i>Объяснение: ${correctAnswerInfo.explanation}</i></p>`;
                    }
                } else {
                    allCorrectTracker = false;
                    feedbackHTML += `<p class="incorrect">На этот вопрос не дан ответ. ❌</p>`;
                }
                if (index < questions.length - 1) {
                    feedbackHTML += '<hr>';
                }
            });

            if (questionsAnswered > 0 && allCorrectTracker) {
                feedbackHTML = '<h4>Результаты проверки:</h4><p class="correct" style="text-align:center; font-weight:bold; font-size:1.2em;">Все ответы верны! Отлично! 🎉</p><hr>' + feedbackHTML;
            } else if (questionsAnswered === 0) {
                 feedbackHTML = '<h4>Результаты проверки:</h4><p>Пожалуйста, ответьте на вопросы.</p>';
            }

            feedbackDiv.innerHTML = feedbackHTML;
            feedbackDiv.style.display = 'block';
            feedbackDiv.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
        });
    });
});
