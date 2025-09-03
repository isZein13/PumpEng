// c1_3_grammar_nominalization-logic.js
document.addEventListener('DOMContentLoaded', () => {
    const grammarCorrectAnswers = {
        // --- Упражнение 1: Verb to Noun Transformation ---
        "c1_nom_ex1_q1": { correct: "a", explanation: "Существительное от 'investigate' - investigation (расследование)." },
        "c1_nom_ex1_q2": { correct: "c", explanation: "Существительное от 'assess' - assessment (оценка)." },
        "c1_nom_ex1_q3": { correct: "c", explanation: "Существительное от 'arrive' - arrival (прибытие)." },
        "c1_nom_ex1_q4": { correct: "b", explanation: "Существительное от 'refuse' - refusal (отказ)." },
        "c1_nom_ex1_q5": { correct: "a", explanation: "Существительное от 'define' - definition (определение)." },
        "c1_nom_ex1_q6": { correct: "d", explanation: "Существительное от 'grow' - growth (рост)." },
        "c1_nom_ex1_q7": { correct: "b", explanation: "Существительное от 'depart' - departure (уход, отъезд)." },
        "c1_nom_ex1_q8": { correct: "c", explanation: "Существительное от 'reduce' - reduction (сокращение)." },
        "c1_nom_ex1_q9": { correct: "d", explanation: "Существительное от 'reject' - rejection (отклонение, отказ)." },
        "c1_nom_ex1_q10": { correct: "b", explanation: "Существительное от 'develop' - development (разработка, развитие)." },

        // --- Упражнение 2: Adjective to Noun Transformation ---
        "c1_nom_ex2_q1": { correct: "b", explanation: "Существительное от 'sudden' - suddenness (внезапность)." },
        "c1_nom_ex2_q2": { correct: "c", explanation: "Существительное от 'accurate' - accuracy (точность)." },
        "c1_nom_ex2_q3": { correct: "b", explanation: "Существительное от 'able' - ability (способность)." },
        "c1_nom_ex2_q4": { correct: "c", explanation: "Существительное от 'important' - importance (важность)." },
        "c1_nom_ex2_q5": { correct: "d", explanation: "Существительное от 'complex' - complexity (сложность)." },
        "c1_nom_ex2_q6": { correct: "a", explanation: "Существительное от 'honest' - honesty (честность)." },
        "c1_nom_ex2_q7": { correct: "b", explanation: "Существительное от 'reliable' - reliability (надежность)." },
        "c1_nom_ex2_q8": { correct: "c", explanation: "Существительное от 'similar' - similarity (сходство)." },
        "c1_nom_ex2_q9": { correct: "d", explanation: "Существительное от 'strong' - strength (сила)." },
        "c1_nom_ex2_q10": { correct: "a", explanation: "Существительное от 'kind' - kindness (доброта)." },

        // --- Упражнение 3: Using Nouns in Context ---
        "c1_nom_ex3_q1": { correct: "a", explanation: "Требуется существительное 'introduction' (введение)." },
        "c1_nom_ex3_q2": { correct: "c", explanation: "Требуется существительное 'departure' (уход)." },
        "c1_nom_ex3_q3": { correct: "a", explanation: "Требуется существительное 'commitment' (приверженность)." },
        "c1_nom_ex3_q4": { correct: "c", explanation: "Требуется существительное 'extinction' (вымирание)." },
        "c1_nom_ex3_q5": { correct: "c", explanation: "Требуется существительное 'examination' (изучение, осмотр)." },
        "c1_nom_ex3_q6": { correct: "c", explanation: "Требуется существительное 'probability' (вероятность)." },
        "c1_nom_ex3_q7": { correct: "c", explanation: "Требуется существительное 'invention' (изобретение)." },
        "c1_nom_ex3_q8": { correct: "c", explanation: "Требуется существительное 'invitation' (приглашение)." },
        "c1_nom_ex3_q9": { correct: "b", explanation: "Требуется существительное 'complexity' (сложность)." },
        "c1_nom_ex3_q10": { correct: "b", explanation: "Требуется существительное 'refusal' (отказ)." },
        
        // --- Упражнение 4: Rephrasing Sentences for Formality ---
        "c1_nom_ex4_q1": { correct: "c", explanation: "Наречие 'quickly' превращается в прилагательное 'rapid', которое описывает существительное 'growth'." },
        "c1_nom_ex4_q2": { correct: "b", explanation: "Используется пассивная конструкция 'A decision was made...' для объективности." },
        "c1_nom_ex4_q3": { correct: "b", explanation: "'confident' -> 'confidence' (сущ.). 'did well' -> 'good performance' (сущ.)." },
        "c1_nom_ex4_q4": { correct: "a", explanation: "Глагол 'is increasing' превращается в существительное 'an increase'." },
        "c1_nom_ex4_q5": { correct: "c", explanation: "'explained clearly' (глагол+наречие) -> 'clear explanation' (прилагательное+существительное)." },
        "c1_nom_ex4_q6": { correct: "d", explanation: "Это наиболее полная и стилистически верная трансформация в формальном стиле." },
        "c1_nom_ex4_q7": { correct: "b", explanation: "'of great importance' - это формальный способ выразить 'is very important'." },
        "c1_nom_ex4_q8": { correct: "c", explanation: "Глагол 'was destroyed' -> существительное 'destruction'. Наречие 'completely' -> прилагательное 'complete'." },
        "c1_nom_ex4_q9": { correct: "b", explanation: "'analyze carefully' (глагол+наречие) -> 'careful analysis' (прилагательное+существительное)." },
        "c1_nom_ex4_q10": { correct: "c", explanation: "Прилагательное 'long' -> существительное 'length'. 'Considerable' - хорошее академическое слово." },

        // --- Упражнение 5: Mixed Practice (Error Correction) ---
        "c1_nom_ex5_q1": { correct: "a", explanation: "Требуется существительное 'decision', а не глагол 'decide'." },
        "c1_nom_ex5_q2": { correct: "d", explanation: "Предложение грамматически и стилистически верное." },
        "c1_nom_ex5_q3": { correct: "a", explanation: "Требуется существительное 'importance', а не прилагательное 'important'." },
        "c1_nom_ex5_q4": { correct: "a", explanation: "Требуется существительное 'belief' (вера, мнение), а не глагол 'believe'." },
        "c1_nom_ex5_q5": { correct: "d", explanation: "Предложение грамматически и стилистически верное." },
        "c1_nom_ex5_q6": { correct: "a", explanation: "Требуется существительное 'destruction' (разрушение), а не глагол 'destroy'." },
        "c1_nom_ex5_q7": { correct: "b", explanation: "Требуется существительное 'knowledge' (знание), а не прилагательное 'knowledgeable' (знающий)." },
        "c1_nom_ex5_q8": { correct: "d", explanation: "Предложение грамматически и стилистически верное." },
        "c1_nom_ex5_q9": { correct: "d", explanation: "Предложение грамматически и стилистически верное." },
        "c1_nom_ex5_q10": { correct: "d", explanation: "Предложение грамматически и стилистически верное." }
    };
    
    // ... (остальной JS код для проверки остается без изменений) ...
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
                const questionShortText = questionFullText.includes('. ') ? questionFullText.substring(questionFullText.indexOf('. ') + 2) : questionShortText;

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
