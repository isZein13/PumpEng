// b1_4_grammar_past-perfects-logic.js
document.addEventListener('DOMContentLoaded', () => {
    const grammarCorrectAnswers = {
        // --- Упражнение 1: Past Perfect Simple (had + V3) ---
        "b1_ppc_ex1_q1": { correct: "c", explanation: "Действие (завершил работу) произошло до другого действия в прошлом (мы приехали). Используется Past Perfect." },
        "b1_ppc_ex1_q2": { correct: "a", explanation: "Она говорит о своем опыте до того момента в прошлом. Используется Past Perfect 'had never seen'." },
        "b1_ppc_ex1_q3": { correct: "b", explanation: "Поезд ушел до того, как мы добрались до станции. Используется Past Perfect." },
        "b1_ppc_ex1_q4": { correct: "b", explanation: "Я не смог купить билеты, потому что до этого забыл кошелек. Используется Past Perfect." },
        "b1_ppc_ex1_q5": { correct: "a", explanation: "Сначала они поужинали (предшествующее действие), потом пошли гулять. Используется Past Perfect." },
        "b1_ppc_ex1_q6": { correct: "b", explanation: "Действие (не учил) происходило до другого момента в прошлом (переехал в Париж). 'hadn't studied'." },
        "b1_ppc_ex1_q7": { correct: "b", explanation: "Я осознал (в прошлом), что уже встречал ее до этого момента. 'had met'." },
        "b1_ppc_ex1_q8": { correct: "a", explanation: "Фильм был лучше, чем я ожидал до момента просмотра. 'had expected'." },
        "b1_ppc_ex1_q9": { correct: "c", explanation: "Вопрос о действии, которое должно было завершиться до другого действия в прошлом. 'Had you booked...?'." },
        "b1_ppc_ex1_q10": { correct: "b", explanation: "'By the age of 25' (к 25 годам) указывает на завершенность действия к определенному моменту в прошлом." },

        // --- Упражнение 2: Past Perfect Continuous (had been + V-ing) ---
        "b1_ppc_ex2_q1": { correct: "b", explanation: "Усталость - это результат длительного процесса (работал весь день). 'had been working'." },
        "b1_ppc_ex2_q2": { correct: "c", explanation: "Подчеркивается длительность поездки до того, как они увидели город. 'had been driving'." },
        "b1_ppc_ex2_q3": { correct: "c", explanation: "Красные глаза - результат длительного плача. 'had been crying'." },
        "b1_ppc_ex2_q4": { correct: "a", explanation: "Вопрос о длительности процесса ожидания до прибытия автобуса. 'How long had you been waiting?'." },
        "b1_ppc_ex2_q5": { correct: "b", explanation: "Плохое самочувствие длилось неделями до похода к врачу. 'hadn't been feeling'." },
        "b1_ppc_ex2_q6": { correct: "a", explanation: "Она стала экспертом, потому что изучала предмет в течение долгого времени. 'had been studying'." },
        "b1_ppc_ex2_q7": { correct: "c", explanation: "Мокрая земля - результат длительного дождя. 'had been raining'." },
        "b1_ppc_ex2_q8": { correct: "b", explanation: "Подчеркивается длительность процесса поисков ('for six months'). 'had been looking'." },
        "b1_ppc_ex2_q9": { correct: "a", explanation: "Он брал уроки в течение года (процесс) до того, как сдал экзамен. 'had been taking'." },
        "b1_ppc_ex2_q10": { correct: "b", explanation: "Злость - результат длительного ожидания ('for over an hour'). 'had been waiting'." },

        // --- Упражнение 3: Simple vs. Continuous ---
        "b1_ppc_ex3_q1": { correct: "a", explanation: "Важен результат (я знал концовку), а не процесс чтения. Используется Past Perfect Simple." },
        "b1_ppc_ex3_q2": { correct: "b", explanation: "Важен сам процесс проживания в течение 10 лет, который привел к отличному знанию языка. Используется Past Perfect Continuous." },
        "b1_ppc_ex3_q3": { correct: "b", explanation: "'all morning' подчеркивает длительность процесса, который привел к усталости. Используется Past Perfect Continuous." },
        "b1_ppc_ex3_q4": { correct: "a", explanation: "'already' и акцент на результате (пиццы нет) указывают на Past Perfect Simple." },
        "b1_ppc_ex3_q5": { correct: "b", explanation: "Хорошее самочувствие было результатом процесса (они много гуляли). Используется Past Perfect Continuous." },
        "b1_ppc_ex3_q6": { correct: "a", explanation: "Акцент на количестве завершенных проектов (результат). Используется Past Perfect Simple." },
        "b1_ppc_ex3_q7": { correct: "b", explanation: "Опоздание - результат длительного процесса поиска парковки. Используется Past Perfect Continuous." },
        "b1_ppc_ex3_q8": { correct: "b", explanation: "Знание плана - результат процесса подслушивания. Используется Past Perfect Continuous." },
        "b1_ppc_ex3_q9": { correct: "a", explanation: "Невозможность играть - результат завершенного действия (сломал ногу). Используется Past Perfect Simple." },
        "b1_ppc_ex3_q10": { correct: "b", explanation: "Руки в краске - результат длительного процесса покраски. Используется Past Perfect Continuous." },
        
        // --- Упражнение 4: Past Perfect vs. Past Simple ---
        "b1_ppc_ex4_q1": { correct: "a", explanation: "Сначала семья закончила ужинать (had finished), а потом я приехал (arrived)." },
        "b1_ppc_ex4_q2": { correct: "b", explanation: "Она не хотела смотреть фильм (didn't want), потому что до этого уже прочитала книгу (had read)." },
        "b1_ppc_ex4_q3": { correct: "a", explanation: "Сначала я принял лекарство (had taken), а потом почувствовал себя лучше (felt)." },
        "b1_ppc_ex4_q4": { correct: "a", explanation: "Он сказал (told) мне, что до этого не видел ее (hadn't seen)." },
        "b1_ppc_ex4_q5": { correct: "a", explanation: "Сначала грабители исчезли (had disappeared), а потом приехала полиция (got)." },
        "b1_ppc_ex4_q6": { correct: "a", explanation: "Сначала гости ушли (had left), а потом мы начали убирать (started)." },
        "b1_ppc_ex4_q7": { correct: "b", explanation: "Сначала я сделал ошибку (had made), а потом осознал это (realized)." },
        "b1_ppc_ex4_q8": { correct: "b", explanation: "Они не знали, куда идти (didn't know), потому что до этого не взяли карту (hadn't brought)." },
        "b1_ppc_ex4_q9": { correct: "b", explanation: "Сначала она много прочитала о Лондоне (had read), а потом посетила его (visited)." },
        "b1_ppc_ex4_q10": { correct: "a", explanation: "Дом был грязным (was), потому что до этого его никто не убирал (had cleaned)." },

        // --- Упражнение 5: All Past Tenses Mixed ---
        "b1_ppc_ex5_q1": { correct: "a", explanation: "Два последовательных действия в прошлом: сначала решил, потом приехал. Оба Past Simple." },
        "b1_ptc_ex5_q2": { correct: "b", explanation: "Длительное действие 'was waiting' было прервано коротким 'saw'." },
        "b1_ppc_ex5_q3": { correct: "b", explanation: "Марк ушел до того, как я приехал. Предшествующее действие, поэтому Past Perfect." },
        "b1_ppc_ex5_q4": { correct: "b", explanation: "Я позвонил до того, как вышел из дома. Предшествующее действие, поэтому Past Perfect." },
        "b1_ppc_ex5_q5": { correct: "b", explanation: "Длительное действие 'was standing' было прервано коротким 'started'." },
        "b1_ppc_ex5_q6": { correct: "b", explanation: "Я не проверил прогноз до того, как вышел, поэтому у меня не было зонта. Past Perfect." },
        "b1_ppc_ex5_q7": { correct: "a", explanation: "Короткое, завершенное действие в прошлом. Past Simple." },
        "b1_ppc_ex5_q8": { correct: "b", explanation: "В косвенной речи 'I forgot' (Past Simple) превращается в Past Perfect 'had forgotten'." },
        "b1_ppc_ex5_q9": { correct: "b", explanation: "Он был в процессе покупок (длительное действие) до того, как позвонил. Past Perfect Continuous." },
        "b1_ppc_ex5_q10": { correct: "a", explanation: "Два последовательных завершенных действия в прошлом. Оба Past Simple." }
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
