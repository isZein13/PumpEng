// phrasal-verbs-quiz-logic.js
document.addEventListener('DOMContentLoaded', () => {
    const grammarCorrectAnswers = {
        // --- Упражнение 1: Phrasal Verbs 1-5 (ask out, back up, blow up, break down, break up) ---
        "pv_ex1_q1": { correct: "b", explanation: "'Ask out' (пригласить на свидание): Он хотел пригласить ее на ужин." },
        "pv_ex1_q2": { correct: "c", explanation: "'Break down' (сломаться - о механизме): Моя старая машина часто ломается." },
        "pv_ex1_q3": { correct: "c", explanation: "'Back up' (подкрепить, поддержать): Вы должны подкрепить свое утверждение фактами." },
        "pv_ex1_q4": { correct: "d", explanation: "'Break up' (расстаться, разорвать отношения): Они решили расстаться." },
        "pv_ex1_q5": { correct: "c", explanation: "'Blow up' (взорвать(ся)): Старое здание должны были взорвать." },
        "pv_ex1_q6": { correct: "c", explanation: "'Back up' (подвинуться назад): Не могли бы вы немного подвинуться назад?" },
        "pv_ex1_q7": { correct: "c", explanation: "'Break down' (потерять самообладание, расплакаться): Она так расстроилась, что расплакалась." },
        "pv_ex1_q8": { correct: "b", explanation: "Значение 'ask out': To invite on a date (пригласить на свидание)." },
        "pv_ex1_q9": { correct: "b", explanation: "'Broke down' (сломался): Принтер снова сломался." },
        "pv_ex1_q10": { correct: "c", explanation: "Если пара 'breaks up', они прекращают свои отношения." },

        // --- Упражнение 2: Phrasal Verbs 6-10 (bring up, call back, calm down, carry on, catch up) ---
        "pv_ex2_q1": { correct: "c", explanation: "'Bring up' (поднять тему, упомянуть): Не поднимайте эту чувствительную тему." },
        "pv_ex2_q2": { correct: "d", explanation: "'Calm down' (успокоиться): Его друг помог ему успокоиться." },
        "pv_ex2_q3": { correct: "b", explanation: "'Catch up' (наверстать, догнать): Мне нужно наверстать упущенное." },
        "pv_ex2_q4": { correct: "b", explanation: "'Call back' (перезвонить): Она может вам перезвонить позже?" },
        "pv_ex2_q5": { correct: "c", explanation: "'Carry on' (продолжать): Они решили продолжать работать над проектом." },
        "pv_ex2_q6": { correct: "c", explanation: "Значение 'calm down': To relax after being angry (расслабиться после злости)." },
        "pv_ex2_q7": { correct: "a", explanation: "'Carry on' (продолжайте): Пожалуйста, продолжайте без меня." },
        "pv_ex2_q8": { correct: "b", explanation: "'Bring up' (поднять вопрос): Он попытался поднять вопрос о зарплате." },
        "pv_ex2_q9": { correct: "b", explanation: "Если вы 'catch up' on work, вы делаете работу, которую пропустили." },
        "pv_ex2_q10": { correct: "d", explanation: "Попросить кого-то 'call back' (перезвонить)." },

        // --- Упражнение 3: Phrasal Verbs 11-15 (check in, check out, clean up, come back, come in) ---
        "pv_ex3_q1": { correct: "c", explanation: "'Check in' (зарегистрироваться): Нам нужно зарегистрироваться в отеле." },
        "pv_ex3_q2": { correct: "c", explanation: "'Clean up' (убрать(ся)): Нам пришлось убрать весь дом." },
        "pv_ex3_q3": { correct: "d", explanation: "'Come in' (войти): Пожалуйста, войдите!" },
        "pv_ex3_q4": { correct: "a", explanation: "'Check out' (выехать из отеля, рассчитаться): Во сколько нам нужно выехать из отеля?" },
        "pv_ex3_q5": { correct: "d", explanation: "'Come back' (вернуться): Он обещал скоро вернуться." },
        "pv_ex3_q6": { correct: "c", explanation: "Значение 'check in' (в отеле): To register upon arrival (зарегистрироваться по прибытии)." },
        "pv_ex3_q7": { correct: "c", explanation: "'Clean up' (убрать): Не могли бы вы убрать на кухне?" },
        "pv_ex3_q8": { correct: "b", explanation: "Если вы 'come back', вы возвращаетесь на место." },
        "pv_ex3_q9": { correct: "c", explanation: "'Come in' (войди): На улице холодно. Войди и закрой дверь." },
        "pv_ex3_q10": { correct: "d", explanation: "'Check out' (выехать): Мы должны выехать из номера до 11 утра." },

        // --- Упражнение 4: Phrasal Verbs 16-20 (come up with, count on, cut down on, do over, dress up) ---
        "pv_ex4_q1": { correct: "c", explanation: "'Come up with' (придумать): Она всегда придумывает блестящие идеи." },
        "pv_ex4_q2": { correct: "d", explanation: "'Cut down on' (сократить потребление): Я пытаюсь сократить потребление кофе." },
        "pv_ex4_q3": { correct: "b", explanation: "'Count on' (рассчитывать на): Ты всегда можешь на меня рассчитывать." },
        "pv_ex4_q4": { correct: "b", explanation: "'Do over' (переделать): Мне придется переделать это эссе." },
        "pv_ex4_q5": { correct: "c", explanation: "'Dress up' (нарядиться): Мы решили нарядиться на вечеринку." },
        "pv_ex4_q6": { correct: "b", explanation: "Трудно 'come up with' (придумывать) новые решения." },
        "pv_ex4_q7": { correct: "c", explanation: "Доктор сказал ему 'cut down on' (сократить) курение." },
        "pv_ex4_q8": { correct: "a", explanation: "Если вы делаете ошибку, вы всегда можете 'do it over' (переделать это)." },
        "pv_ex4_q9": { correct: "d", explanation: "Дети любят 'dress up' (наряжаться) в костюмы." },
        "pv_ex4_q10": { correct: "c", explanation: "Я могу 'count on' (рассчитывать на) моих надежных друзей." },

        // --- Упражнение 5: Phrasal Verbs 21-25 (drop by, drop off, eat out, fall apart, fall down) ---
        "pv_ex5_q1": { correct: "b", explanation: "'Eat out' (есть вне дома): Давай сегодня поедим вне дома." },
        "pv_ex5_q2": { correct: "c", explanation: "'Drop off' (высадить, завезти): Можешь высадить детей в школе?" },
        "pv_ex5_q3": { correct: "d", explanation: "'Fall apart' (развалиться на части): Старый стул начал разваливаться." },
        "pv_ex5_q4": { correct: "c", explanation: "'Fall down' (упасть): Будь осторожен, не упади." },
        "pv_ex5_q5": { correct: "c", explanation: "'Drop by' (заглянуть, зайти ненадолго): Моя подруга сказала, что может заглянуть позже." },
        "pv_ex5_q6": { correct: "c", explanation: "Мы часто 'eat out' (едим вне дома) по пятницам." },
        "pv_ex5_q7": { correct: "c", explanation: "Старая игрушка начала 'fall apart' (разваливаться)." },
        "pv_ex5_q8": { correct: "c", explanation: "Я 'drop off' (завезу) посылку в твой офис." },
        "pv_ex5_q9": { correct: "b", explanation: "Он поскользнулся и 'fell down' (упал)." },
        "pv_ex5_q10": { correct: "d", explanation: "Не стесняйся 'drop by' (заглядывать) в любое время." },

        // --- Упражнение 6: Phrasal Verbs 26-30 (fill out, find out, get along, get back, get in) ---
        "pv_ex6_q1": { correct: "b", explanation: "'Fill out' a form (заполнить форму)." },
        "pv_ex6_q2": { correct: "c", explanation: "'Find out' information (выяснить, узнать информацию)." },
        "pv_ex6_q3": { correct: "d", explanation: "'Get along' with someone (ладить с кем-то)." },
        "pv_ex6_q4": { correct: "b", explanation: "'Get back' from a trip (вернуться из поездки)." },
        "pv_ex6_q5": { correct: "d", explanation: "'Get in' the car (сесть в машину)." },
        "pv_ex6_q6": { correct: "a", explanation: "Чтобы получить работу, нужно 'fill out' (заполнить) анкету." },
        "pv_ex6_q7": { correct: "d", explanation: "Она пыталась 'find out' (выяснить), почему он расстроен." },
        "pv_ex6_q8": { correct: "c", explanation: "Мои братья не всегда 'get along' (ладят) друг с другом." },
        "pv_ex6_q9": { correct: "d", explanation: "Когда ты 'get back' (вернешься) в родной город?" },
        "pv_ex6_q10": { correct: "b", explanation: "Пожалуйста, 'get in' (садитесь в) такси." },

        // --- Упражнение 7: Phrasal Verbs 31-35 (get out, get over, give up, go away, go back) ---
        "pv_ex7_q1": { correct: "c", explanation: "'Get out' of the building (выйти, выбраться из здания)." },
        "pv_ex7_q2": { correct: "d", explanation: "'Get over' disappointment (пережить, оправиться от разочарования)." },
        "pv_ex7_q3": { correct: "b", explanation: "Never 'give up' on your dreams (никогда не сдавайся/не отказывайся от мечты)." },
        "pv_ex7_q4": { correct: "c", explanation: "'Go away' (уйди)." },
        "pv_ex7_q5": { correct: "d", explanation: "'Go back' to a place (вернуться на место)." },
        "pv_ex7_q6": { correct: "b", explanation: "'Get over an illness' означает выздороветь от болезни." },
        "pv_ex7_q7": { correct: "c", explanation: "Если вы 'give up' smoking, вы бросаете курить." },
        "pv_ex7_q8": { correct: "d", explanation: "'Go away!' (Уходи!)." },
        "pv_ex7_q9": { correct: "c", explanation: "Он решил 'go back' (вернуться) на свою старую работу." },
        "pv_ex7_q10": { correct: "b", explanation: "Нужно 'get out' (убираться) отсюда!" },

        // --- Упражнение 8: Phrasal Verbs 36-40 (go out, grow up, hang out, hang up, hold on) ---
        "pv_ex8_q1": { correct: "c", explanation: "'Go out' for dinner (пойти куда-нибудь поужинать)." },
        "pv_ex8_q2": { correct: "d", explanation: "I 'grew up' (вырос) в маленьком городе." },
        "pv_ex8_q3": { correct: "c", explanation: "Young people often 'hang out' (проводят время, тусуются) в торговом центре." },
        "pv_ex8_q4": { correct: "d", explanation: "Don't 'hang up' on me (не вешай трубку)." },
        "pv_ex8_q5": { correct: "c", explanation: "I'll 'hold on' (подожду)." },
        "pv_ex8_q6": { correct: "b", explanation: "'Grow up' означает стать взрослым." },
        "pv_ex8_q7": { correct: "c", explanation: "Я люблю 'hang out' (проводить время) с друзьями." },
        "pv_ex8_q8": { correct: "c", explanation: "Оператор попросил меня 'hold on' (подождать)." },
        "pv_ex8_q9": { correct: "d", explanation: "Когда дети 'grow up' (вырастают), они часто уезжают из дома." },
        "pv_ex8_q10": { correct: "b", explanation: "Я просто 'hung up' (повесил трубку)." },

        // --- Упражнение 9: Phrasal Verbs 41-45 (hurry up, keep on, keep up, let down, log in) ---
        "pv_ex9_q1": { correct: "b", explanation: "'Hurry up' (поторопись), иначе опоздаешь." },
        "pv_ex9_q2": { correct: "c", explanation: "'Keep on' trying (продолжай пытаться)." },
        "pv_ex9_q3": { correct: "d", explanation: "Трудно 'keep up' with her (успевать за ней, поддерживать темп)." },
        "pv_ex9_q4": { correct: "d", explanation: "Не хочу 'let him down' (подвести его)." },
        "pv_ex9_q5": { correct: "c", explanation: "Нужен пароль, чтобы 'log in' (войти в систему)." },
        "pv_ex9_q6": { correct: "b", explanation: "'Let someone down' означает разочаровать кого-то." },
        "pv_ex9_q7": { correct: "b", explanation: "'Keep up the good work!' (Продолжай в том же духе!)." },
        "pv_ex9_q8": { correct: "a", explanation: "Если вы 'keep on' doing something, вы продолжаете это делать." },
        "pv_ex9_q9": { correct: "c", explanation: "Hold on / Slow down - подходящие ответы, но из списка 'keep up' неверно. Задание могло быть сформулировано иначе для этих вариантов." }, // Уточнено, т.к. идеального варианта из списка нет.
        "pv_ex9_q10": { correct: "b", explanation: "Чтобы получить доступ к онлайн-банку, нужно 'log in' (войти)." },

        // --- Упражнение 10: Phrasal Verbs 46-50 (log out, look after, look for, look forward to, look out) ---
        "pv_ex10_q1": { correct: "c", explanation: "Не забудь 'log out' (выйти из системы)." },
        "pv_ex10_q2": { correct: "d", explanation: "Кто будет 'look after' (присматривать за) твоей собакой?" },
        "pv_ex10_q3": { correct: "c", explanation: "Я 'looking for' (ищу) свои ключи." },
        "pv_ex10_q4": { correct: "c", explanation: "Мы 'look forward to' (с нетерпением ждем) нашего отпуска." },
        "pv_ex10_q5": { correct: "d", explanation: "'Look out!' (Осторожно!) - предупреждение об опасности." },
        "pv_ex10_q6": { correct: "d", explanation: "'Look forward to something' означает с нетерпением ждать чего-то." },
        "pv_ex10_q7": { correct: "a", explanation: "Если вы 'looking for' что-то, вы пытаетесь это найти." },
        "pv_ex10_q8": { correct: "c", explanation: "Я 'look forward to' (с нетерпением жду) ответа от вас." },
        "pv_ex10_q9": { correct: "c", explanation: "Важно 'look after' (заботиться о) своем здоровье." },
        "pv_ex10_q10": { correct: "d", explanation: "Когда переходишь улицу, нужно 'look out' (быть осторожным)." }
    };

    // Код для проверки ответов (остается таким же, как в grammar-exercise-logic.js)
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
                const questionShortText = questionFullText.includes('. ') ? questionFullText.substring(questionFullText.indexOf('. ') + 2) : questionFullText;

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
