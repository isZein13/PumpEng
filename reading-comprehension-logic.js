// reading-comprehension-logic.js
document.addEventListener('DOMContentLoaded', () => {
    const correctAnswersData = {
        // A1 - Текст 1: My School Day
        "a1_school_day_q1": { correct: "c", explanation: "The text states: 'My favorite subject is English.'" },
        "a1_school_day_q2": { correct: "c", explanation: "Anna says: 'I go to school every day from Monday to Friday.'" },
        "a1_school_day_q3": { correct: "b", explanation: "The text mentions: 'After school, I do my homework. Then I play...'" },
        // A1 - Текст 2: My Favorite Food
        "a1_food_q1": { correct: "b", explanation: "The text says: 'My favorite food is pizza.'" },
        "a1_food_q2": { correct: "d", explanation: "It is mentioned: 'My mother makes pizza on Saturdays.'" },
        "a1_food_q3": { correct: "c", explanation: "The narrator states: 'Chocolate ice cream is my favorite.'" },

        // A2 - Текст 1: A Surprise Birthday Party
        "a2_party_q1": { correct: "c", explanation: "The text says: 'His sister, Mia, helped us.'" },
        "a2_party_q2": { correct: "b", explanation: "They bought 'a big chocolate cake and some colorful balloons.'" },
        "a2_party_q3": { correct: "d", explanation: "Leo 'was very surprised and happy.'" },
        // A2 - Текст 2: My Hobby - Collecting Stamps
        "a2_stamps_q1": { correct: "b", explanation: "'I started collecting stamps when I was ten years old.'" },
        "a2_stamps_q2": { correct: "d", explanation: "'My grandfather gave me my first stamp album.'" },
        "a2_stamps_q3": { correct: "c", explanation: "'We exchange stamps and talk about our collections.'" },

        // B1 - Текст 1: Choosing a Career Path
        "b1_career_q1": { correct: "b", explanation: "Advice from celebrities is not mentioned as a factor." },
        "b1_career_q2": { correct: "c", explanation: "'Talking to professionals in fields of interest can also provide valuable insights.'" },
        "b1_career_q3": { correct: "c", explanation: "A common goal is 'finding a career that is both fulfilling and provides a stable income.'" },
        // B1 - Текст 2: The Benefits of Regular Exercise
        "b1_exercise_q1": { correct: "d", explanation: "The text recommends 'at least 150 minutes per week'." },
        "b1_exercise_q2": { correct: "c", explanation: "Exercise 'is known to reduce stress, anxiety, and symptoms of depression, partly due to the release of endorphins'." },
        "b1_exercise_q3": { correct: "d", explanation: "While exercise contributes to weight management, 'guaranteed weight loss' is not explicitly stated as a direct benefit in the list of benefits." },

        // B2 - Текст 1: The Rise of Artificial Intelligence
        "b2_ai_q1": { correct: "c", explanation: "AI's ability includes 'processing vast amounts of data and perform complex tasks'." },
        "b2_ai_q2": { correct: "c", explanation: "One of the issues mentioned is 'job displacement due to automation'." },
        "b2_ai_q3": { correct: "b", explanation: "A 'multidisciplinary approach... will be crucial to harnessing its benefits while mitigating its risks.'" },
        // B2 - Текст 2: The Gig Economy
        "b2_gig_q1": { correct: "c", explanation: "The gig economy is 'Driven by digital platforms that connect service providers with customers'." },
        "b2_gig_q2": { correct: "d", explanation: "Critics point to 'the absence of benefits like health insurance or paid leave'." },
        "b2_gig_q3": { correct: "d", explanation: "The debate is on 'how to regulate this evolving labor market to ensure fair conditions for gig workers while preserving the innovation and convenience it brings'." },

        // C1 - Текст 1: The Subjectivity of Historical Narratives
        "c1_history_q1": { correct: "c", explanation: "Historical narratives 'are continuously re-evaluated and reinterpreted as new evidence emerges or as societal values shift.'" },
        "c1_history_q2": { correct: "d", explanation: "Historians 'are inevitably influenced by their own cultural, social, and temporal contexts.'" },
        "c1_history_q3": { correct: "c", explanation: "Subjectivity 'underscores the importance of engaging with multiple historical accounts and critically analyzing them.'" },
        // C1 - Текст 2: Cognitive Biases in Decision Making
        "c1_biases_q1": { correct: "c", explanation: "'Confirmation bias leads individuals to favor information that confirms their preexisting beliefs'." },
        "c1_biases_q2": { correct: "b", explanation: "'The availability heuristic makes us overestimate the likelihood of events that are easily recalled in memory, often because they are recent or vivid.'" },
        "c1_biases_q3": { correct: "c", explanation: "'Recognizing these and other biases is the first step towards mitigating their influence'." }
    };

    const checkButtons = document.querySelectorAll('.check-reading-answers-btn');

    checkButtons.forEach(button => {
        button.addEventListener('click', function() {
            const formId = this.dataset.formId; // e.g., "a1_school_day", "b2_ai"
            const formElement = this.closest('.reading-questions-form');
            if (!formElement) {
                console.error("Could not find parent form for button with data-form-id:", formId);
                return;
            }
            const questions = formElement.querySelectorAll('.reading-question');
            const feedbackDiv = formElement.querySelector('.reading-feedback');
            let allCorrect = true; // Renamed from allCorrectTracker to avoid confusion
            let feedbackHTML = '<h4>Результаты проверки:</h4>';
            let questionsAttempted = 0; // To check if at least one question was answered

            questions.forEach((questionDiv, index) => {
                const questionNumber = index + 1;
                // ** ИСПРАВЛЕНИЕ ЗДЕСЬ: Имя радио-кнопки формируется из атрибута name в HTML **
                // Мы предполагаем, что имя в HTML УЖЕ установлено правильно, например, name="q1_a1_school_day"
                // Поэтому мы найдем первую радио-кнопку в текущем вопросе, чтобы получить ее 'name' атрибут.
                const firstRadioInQuestion = questionDiv.querySelector('.reading-options input[type="radio"]');
                if (!firstRadioInQuestion) {
                    console.warn(`No radio buttons found for question ${questionNumber} in form ${formId}`);
                    return; // Пропускаем этот вопрос, если нет радиокнопок
                }
                const radioGroupName = firstRadioInQuestion.name; // Получаем имя группы радиокнопок

                const questionTextP = questionDiv.querySelector('p strong');
                if (!questionTextP) return;
                const questionFullText = questionTextP.textContent;
                const questionShortText = questionFullText.includes('. ') ? questionFullText.substring(questionFullText.indexOf('. ') + 2) : questionFullText;

                const selectedOption = questionDiv.querySelector(`input[name="${radioGroupName}"]:checked`);

                feedbackHTML += `<p><strong>Вопрос ${questionNumber}:</strong> ${questionShortText}</p>`;

                if (selectedOption) {
                    questionsAttempted++;
                    const userAnswer = selectedOption.value;
                    const answerKey = `${formId}_q${questionNumber}`; // Ключ для базы ответов остается прежним
                    const correctAnswerInfo = correctAnswersData[answerKey];

                    if (correctAnswerInfo && userAnswer.toLowerCase() === correctAnswerInfo.correct.toLowerCase()) {
                        feedbackHTML += `<p class="correct">Ваш ответ: "${selectedOption.parentElement.textContent.trim()}" - Верно! ✅</p>`;
                    } else {
                        allCorrect = false;
                        feedbackHTML += `<p class="incorrect">Ваш ответ: "${selectedOption.parentElement.textContent.trim()}" - Неверно. ❌</p>`;
                        if (correctAnswerInfo) {
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
                    allCorrect = false; // Если хоть один вопрос не отвечен, то не все правильно
                    feedbackHTML += `<p class="incorrect">На этот вопрос не дан ответ. ❌</p>`;
                }
                if (index < questions.length - 1) {
                    feedbackHTML += '<hr>';
                }
            });

            if (questionsAttempted === 0 && questions.length > 0) {
                 feedbackHTML = '<h4>Результаты проверки:</h4><p>Пожалуйста, ответьте хотя бы на один вопрос.</p>';
            } else if (questionsAttempted > 0 && allCorrect) {
                feedbackHTML = '<h4>Результаты проверки:</h4><p class="correct" style="text-align:center; font-weight:bold; font-size:1.2em;">Все ответы верны! Отлично! 🎉</p><hr>' + feedbackHTML;
            }


            if (feedbackDiv) {
                feedbackDiv.innerHTML = feedbackHTML;
                feedbackDiv.style.display = 'block';
                // Плавная прокрутка к блоку с результатами
                const feedbackTop = feedbackDiv.getBoundingClientRect().top + window.pageYOffset - (document.querySelector('header')?.offsetHeight || 70); // Учитываем высоту хедера
                window.scrollTo({ top: feedbackTop, behavior: 'smooth' });
            } else {
                console.error("Feedback div not found in form with id associated with button:", formId);
            }
        });
    });
});
