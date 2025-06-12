// reading-comprehension-logic.js
document.addEventListener('DOMContentLoaded', () => {
    const correctAnswersData = {
        // A1 - Текст 1: My School Day
        "a1_school_day_q1": { correct: "c", explanation: "The text states: 'My favorite subject is English.'" },
        "a1_school_day_q2": { correct: "c", explanation: "Anna says: 'I go to school every day from Monday to Friday.'" },
        "a1_school_day_q3": { correct: "b", explanation: "The text mentions: 'After school, I do my homework. Then I play...'" },

        // A2 - Текст 1: A Surprise Birthday Party
        "a2_party_q1": { correct: "c", explanation: "The text says: 'His sister, Mia, helped us.'" },
        "a2_party_q2": { correct: "b", explanation: "They bought 'a big chocolate cake and some colorful balloons.'" },
        "a2_party_q3": { correct: "d", explanation: "Leo 'was very surprised and happy.'" },

        // B1 - Текст 1: Choosing a Career Path
        "b1_career_q1": { correct: "b", explanation: "Advice from celebrities is not mentioned as a factor." },
        "b1_career_q2": { correct: "c", explanation: "'Talking to professionals in fields of interest can also provide valuable insights.'" },
        "b1_career_q3": { correct: "c", explanation: "A common goal is 'finding a career that is both fulfilling and provides a stable income.'" },

        // B2 - Текст 1: The Rise of Artificial Intelligence
        "b2_ai_q1": { correct: "c", explanation: "AI's ability includes 'processing vast amounts of data and perform complex tasks'." },
        "b2_ai_q2": { correct: "c", explanation: "One of the issues mentioned is 'job displacement due to automation'." },
        "b2_ai_q3": { correct: "b", explanation: "A 'multidisciplinary approach... will be crucial to harnessing its benefits while mitigating its risks.'" },

        // C1 - Текст 1: The Subjectivity of Historical Narratives
        "c1_history_q1": { correct: "c", explanation: "Historical narratives 'are continuously re-evaluated and reinterpreted as new evidence emerges or as societal values shift.'" },
        "c1_history_q2": { correct: "d", explanation: "Historians 'are inevitably influenced by their own cultural, social, and temporal contexts.'" },
        "c1_history_q3": { correct: "c", explanation: "Subjectivity 'underscores the importance of engaging with multiple historical accounts and critically analyzing...'" }
    };

    const checkButtons = document.querySelectorAll('.check-reading-answers-btn');

    checkButtons.forEach(button => {
        button.addEventListener('click', function() {
            const formId = this.dataset.formId; // e.g., "a1_school_day", "b2_ai"
            const formElement = this.closest('.reading-questions-form'); // Получаем родительскую форму
            if (!formElement) {
                console.error("Could not find parent form for button with data-form-id:", formId);
                return;
            }
            const questions = formElement.querySelectorAll('.reading-question');
            const feedbackDiv = formElement.querySelector('.reading-feedback');
            let allCorrect = true;
            let feedbackHTML = '<h4>Результаты проверки:</h4>';
            let questionsAnsweredCount = 0;

            questions.forEach((questionDiv, index) => {
                const questionNumber = index + 1;
                // Формируем имя для радио-кнопок на основе formId и номера вопроса
                // Это имя должно быть установлено в HTML атрибуте 'name' для радио кнопок этого вопроса
                const radioGroupName = `q${questionNumber}_${formId}`;

                const questionTextP = questionDiv.querySelector('p strong');
                if (!questionTextP) return;
                const questionFullText = questionTextP.textContent;
                // Убираем порядковый номер типа "1. " из текста вопроса для отображения в фидбеке
                const questionShortText = questionFullText.includes('. ') ? questionFullText.substring(questionFullText.indexOf('. ') + 2) : questionFullText;

                const selectedOption = questionDiv.querySelector(`input[name="${radioGroupName}"]:checked`);
                questionsAnsweredCount++;

                feedbackHTML += `<p><strong>Вопрос ${questionNumber}:</strong> ${questionShortText}</p>`;

                if (selectedOption) {
                    const userAnswer = selectedOption.value;
                    // Ключ для correctAnswersData формируется из formId + _q + questionNumber
                    const answerKey = `${formId}_q${questionNumber}`;
                    const correctAnswerInfo = correctAnswersData[answerKey];

                    if (correctAnswerInfo && userAnswer.toLowerCase() === correctAnswerInfo.correct.toLowerCase()) {
                        feedbackHTML += `<p class="correct">Ваш ответ: "${selectedOption.parentElement.textContent.trim()}" - Верно! ✅</p>`;
                    } else {
                        allCorrect = false;
                        feedbackHTML += `<p class="incorrect">Ваш ответ: "${selectedOption.parentElement.textContent.trim()}" - Неверно. ❌</p>`;
                        if (correctAnswerInfo) {
                            // Пытаемся найти текст правильного ответа по его value
                            const correctLabelElement = questionDiv.querySelector(`input[value="${correctAnswerInfo.correct.toLowerCase()}"]`);
                            const correctLabelText = correctLabelElement ? correctLabelElement.parentElement.textContent.trim() : `(Правильный вариант: ${correctAnswerInfo.correct})`;
                            feedbackHTML += `<p>Правильный ответ: "${correctLabelText}"</p>`;
                        } else {
                            feedbackHTML += `<p><em>(Информация о правильном ответе для этого вопроса отсутствует в базе данных: ${answerKey})</em></p>`;
                        }
                    }
                    if (correctAnswerInfo && correctAnswerInfo.explanation) {
                        feedbackHTML += `<p class="explanation-text"><i>Объяснение: ${correctAnswerInfo.explanation}</i></p>`;
                    }
                } else {
                    allCorrect = false;
                    feedbackHTML += `<p class="incorrect">На этот вопрос не дан ответ. ❌</p>`;
                }
                if (index < questions.length - 1) { // Добавляем hr только если это не последний вопрос
                    feedbackHTML += '<hr>';
                }
            });

            if (questionsAnsweredCount > 0 && allCorrect) {
                feedbackHTML = '<h4>Результаты проверки:</h4><p class="correct" style="text-align:center; font-weight:bold; font-size:1.2em;">Все ответы верны! Отлично! 🎉</p><hr>' + feedbackHTML;
            } else if (questionsAnsweredCount === 0) {
                 feedbackHTML = '<h4>Результаты проверки:</h4><p>Пожалуйста, ответьте на вопросы.</p>';
            }

            if (feedbackDiv) {
                feedbackDiv.innerHTML = feedbackHTML;
                feedbackDiv.style.display = 'block';
                feedbackDiv.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
            } else {
                console.error("Feedback div not found in form with id:", formId);
            }
        });
    });
});
