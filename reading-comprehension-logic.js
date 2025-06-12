// reading-comprehension-logic.js
document.addEventListener('DOMContentLoaded', () => {
    // База данных с правильными ответами и объяснениями
    // Ключ - это data-form-id кнопки + _qN (номер вопроса)
    const correctAnswersData = {
        // A1 - Текст 1: My Cat
        "a1_text1_q1": { correct: "b", explanation: "The cat's name is Tom, as stated in 'His name is Tom.'" },
        "a1_text1_q2": { correct: "c", explanation: "The text says: 'He is black and white.'" },
        "a1_text1_q3": { correct: "b", explanation: "The text mentions: 'He sleeps on my bed.'" },
        // A2 - Текст 1: My Weekend
        "a2_text1_q1": { correct: "b", explanation: "The text says: 'They live in a small house in the countryside.'" },
        // ... добавьте ответы и объяснения для остальных вопросов A2 ...

        // B2 - Текст 1: The Tetris Effect
        "b2_tetris_q1": { correct: "E", explanation: "The passage states: 'It is also prevalent in computer programmers...'" },
        "b2_tetris_q2": { correct: "B", explanation: "The passage says: '...the game of Tetris took the world by storm...'" },
        "b2_tetris_q3": { correct: "A", explanation: "The main purpose is to describe the 'Tetris effect' syndrome." },
        // ... добавьте ответы и объяснения для B1, C1, когда будут тексты ...
    };

    const checkButtons = document.querySelectorAll('.check-reading-answers-btn');

    checkButtons.forEach(button => {
        button.addEventListener('click', function() {
            const formId = this.dataset.formId; // Получаем ID формы (например, "a1_text1")
            const form = this.closest('.reading-questions-form');
            const questions = form.querySelectorAll('.reading-question');
            const feedbackDiv = form.querySelector('.reading-feedback');
            let allCorrect = true;
            let feedbackHTML = '<h4>Результаты проверки:</h4>';

            questions.forEach((questionDiv, index) => {
                const questionNumber = index + 1;
                const questionId = `${formId}_q${questionNumber}`; // Формируем ID вопроса для базы данных
                const questionText = questionDiv.querySelector('p strong').textContent;
                const selectedOption = questionDiv.querySelector(`input[name="q${questionNumber}_${formId.split('_')[0]}"]:checked`); // Например, q1_a1, q1_a2

                feedbackHTML += `<p><strong>Вопрос ${questionNumber}:</strong> ${questionText.split('. ')[1] || questionText}</p>`; // Убираем номер из вопроса

                if (selectedOption) {
                    const userAnswer = selectedOption.value;
                    const correctAnswerInfo = correctAnswersData[questionId];

                    if (correctAnswerInfo && userAnswer.toLowerCase() === correctAnswerInfo.correct.toLowerCase()) {
                        feedbackHTML += `<p class="correct">Ваш ответ: "${selectedOption.parentElement.textContent.trim()}" - Верно! ✅</p>`;
                    } else {
                        allCorrect = false;
                        feedbackHTML += `<p class="incorrect">Ваш ответ: "${selectedOption.parentElement.textContent.trim()}" - Неверно. ❌</p>`;
                        if (correctAnswerInfo) {
                            // Находим текст правильного ответа
                            const correctLabel = questionDiv.querySelector(`input[value="${correctAnswerInfo.correct.toLowerCase()}"]`)?.parentElement.textContent.trim() || correctAnswerInfo.correct;
                            feedbackHTML += `<p>Правильный ответ: "${correctLabel}"</p>`;
                        }
                    }
                    if (correctAnswerInfo && correctAnswerInfo.explanation) {
                        feedbackHTML += `<p class="explanation-text"><i>Объяснение: ${correctAnswerInfo.explanation}</i></p>`;
                    }
                } else {
                    allCorrect = false;
                    feedbackHTML += `<p class="incorrect">На этот вопрос не дан ответ. ❌</p>`;
                }
                feedbackHTML += '<hr style="border-top: 1px dashed #eee; margin: 10px 0;">';
            });
             feedbackHTML = feedbackHTML.slice(0, -1 * '<hr style="border-top: 1px dashed #eee; margin: 10px 0;">'.length); // Убираем последний hr


            if (allCorrect && questions.length > 0) {
                feedbackHTML = '<h4>Результаты проверки:</h4><p class="correct" style="text-align:center; font-weight:bold; font-size:1.2em;">Все ответы верны! Отлично! 🎉</p>' + feedbackHTML;
            }
            feedbackDiv.innerHTML = feedbackHTML;
            feedbackDiv.style.display = 'block';
            feedbackDiv.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
        });
    });
});
