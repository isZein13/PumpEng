// c1-test-logic.js

document.addEventListener('DOMContentLoaded', () => {
    const questionsContainer = document.getElementById('c1-test-questions');
    const submitButton = document.getElementById('submit-c1-test');
    const resultsContainer = document.getElementById('c1-test-results');
    const scoreElement = document.getElementById('c1-score');
    const explanationsContainer = document.getElementById('c1-explanations');

    const c1TestData = [
        {
            id: 'c1_q1',
            question: '1. "Not until the very last moment ___ the full extent of the problem."',
            options: ["he realized", "did he realize", "he had realized", "had he realized"],
            correctAnswer: "did he realize",
            explanation: {
                general: "Inversion after 'Not until...'. When a sentence begins with 'Not until', the main clause that follows uses an inverted structure (auxiliary verb + subject). The tense should match the context (Past Simple).",
                options: {
                    "he realized": "Standard word order, incorrect after 'Not until...'.",
                    "did he realize": "Correct. Inversion with Past Simple auxiliary 'did'.",
                    "he had realized": "Standard word order, Past Perfect.",
                    "had he realized": "Inversion for Past Perfect, but Past Simple is more appropriate here as the realization happened at 'the very last moment'."
                }
            }
        },
        {
            id: 'c1_q2',
            question: '2. "___ the controversial nature of the topic, the debate was surprisingly civil."',
            options: ["Despite", "Although", "However", "Whereas"],
            correctAnswer: "Despite",
            explanation: {
                general: "'Despite' (or 'In spite of') is a preposition used to show contrast, followed by a noun phrase or -ing form. 'Although' is a conjunction followed by a clause.",
                options: {
                    "Despite": "Correct. 'Despite + noun phrase (the controversial nature)'.",
                    "Although": "Incorrect. Would require a clause, e.g., 'Although the topic was controversial...'.",
                    "However": "Incorrect. 'However' is an adverbial conjunction and would typically start a new clause or sentence.",
                    "Whereas": "Incorrect. 'Whereas' is used to compare two contrasting facts."
                }
            }
        },
        {
            id: 'c1_q3',
            question: '3. "It was her ___ determination that ultimately led to her success."',
            options: ["sheer", "mere", "pure", "plain"],
            correctAnswer: "sheer",
            explanation: {
                general: "Collocation. 'Sheer determination' is a common collocation meaning complete or absolute determination.",
                options: {
                    "sheer": "Correct. Often used to emphasize the size, degree, or amount of something (e.g., 'sheer luck', 'sheer volume').",
                    "mere": "Means 'only' or 'nothing more than', which doesn't fit the context of leading to success.",
                    "pure": "Means unmixed or complete, but 'sheer' is a stronger and more common collocate with 'determination'.",
                    "plain": "Means simple or ordinary, which contradicts the idea of success through determination."
                }
            }
        },
        {
            id: 'c1_q4',
            question: '4. "Had it not been for your timely intervention, the project ___ ."',
            options: ["would fail", "would have failed", "failed", "had failed"],
            correctAnswer: "would have failed",
            explanation: {
                general: "Third Conditional with inversion. 'Had it not been for...' is an inverted form of 'If it had not been for...'. The result clause uses 'would have + Past Participle'.",
                options: {
                    "would fail": "Incorrect tense for the result of a past unreal condition.",
                    "would have failed": "Correct. Expresses an unreal past result.",
                    "failed": "Past Simple, doesn't fit the conditional structure.",
                    "had failed": "Past Perfect, doesn't fit the result clause of a third conditional."
                }
            }
        },
        {
            id: 'c1_q5',
            question: '5. "The committee is ___ of several leading experts in the field."',
            options: ["comprised", "consisted", "composed", "included"],
            correctAnswer: "comprised", // or "composed"
            explanation: {
                general: "Vocabulary: 'To be comprised of' or 'to be composed of' means 'to consist of' or 'to be made up of'. 'Consist' always takes 'of'.",
                options: {
                    "comprised": "Correct. 'The committee is comprised of...' (though 'comprises' without 'is' is also common: 'The committee comprises...').",
                    "consisted": "Incorrect. Requires 'of': 'consisted of'.",
                    "composed": "Correct. 'The committee is composed of...' is a valid passive construction.",
                    "included": "Means 'contained as a part', slightly different nuance."
                }
            }
        },
        {
            id: 'c1_q6',
            question: '6. "The old manuscript, ___ pages were yellowed with age, was carefully preserved."',
            options: ["which", "whose", "that", "its"],
            correctAnswer: "whose",
            explanation: {
                general: "Relative pronoun for possession. 'Whose' is used to indicate possession for people, animals, and things (in more formal contexts).",
                options: {
                    "which": "Used for things, but not for possession in this way.",
                    "whose": "Correct. Indicates that the pages belong to the manuscript.",
                    "that": "Can be used for things, but not for possession in this structure.",
                    "its": "Possessive determiner, would require a different sentence structure (e.g., '...its pages were yellowed...')."
                }
            }
        },
        {
            id: 'c1_q7',
            question: '7. "He is ___ to exaggerate; you should take what he says with a pinch of salt."',
            options: ["prone", "keen", "bound", "due"],
            correctAnswer: "prone",
            explanation: {
                general: "Vocabulary and collocation. 'To be prone to (do) something' means to have a tendency to do something, often something negative or undesirable.",
                options: {
                    "prone": "Correct. 'prone to exaggerate' - склонен преувеличивать.",
                    "keen": "'keen on doing something' or 'keen to do something' - очень хотеть что-то делать.",
                    "bound": "'bound to happen' - обязательно произойдет.",
                    "due": "'due to' - из-за / должен (о времени)."
                }
            }
        },
        {
            id: 'c1_q8',
            question: '8. "It is imperative that the new safety regulations ___ strictly enforced."',
            options: ["are", "be", "will be", "to be"],
            correctAnswer: "be",
            explanation: {
                general: "Subjunctive mood. After expressions of importance, necessity, or recommendation (e.g., 'it is imperative', 'it is essential', 'I suggest'), the subjunctive mood (base form of the verb, e.g., 'be', 'go') is often used in formal English, especially in American English. British English might also use 'should be'.",
                options: {
                    "are": "Indicative mood, less formal in this specific context.",
                    "be": "Correct. Subjunctive form.",
                    "will be": "Future indicative.",
                    "to be": "Infinitive, incorrect structure."
                }
            }
        },
         {
            id: 'c1_q9',
            question: '9. "The politician tried to ___ the awkward question by changing the subject."',
            options: ["evade", "invade", "pervade", "elude from"],
            correctAnswer: "evade",
            explanation: {
                general: "Vocabulary: choosing the precise verb. 'Evade' means to avoid or escape from something (often a question, duty, or person).",
                options: {
                    "evade": "Correct. Уклониться от вопроса.",
                    "invade": "Вторгаться.",
                    "pervade": "Проникать, распространяться повсюду.",
                    "elude from": "'Elude' means to escape from, typically in a skillful or cunning way, but 'elude from' is not standard; 'elude' is transitive."
                }
            }
        },
        {
            id: 'c1_q10',
            question: '10. "___ the financial crisis, the company managed to stay afloat."',
            options: ["Albeit", "Notwithstanding", "Hence", "Thereby"],
            correctAnswer: "Notwithstanding",
            explanation: {
                general: "Formal conjunctions/prepositions. 'Notwithstanding' means 'in spite of' or 'despite'.",
                options: {
                    "Albeit": "Means 'although it is/was', usually followed by an adjective or adverbial phrase.",
                    "Notwithstanding": "Correct. 'Notwithstanding + noun phrase' - несмотря на.",
                    "Hence": "Therefore, for this reason.",
                    "Thereby": "By that means, as a result of that."
                }
            }
        },
        {
            id: 'c1_q11',
            question: '11. The expression "to pull someone\'s leg" means:',
            options: ["to help someone in difficulty", "to deceive someone playfully", "to criticize someone harshly", "to support someone unconditionally"],
            correctAnswer: "to deceive someone playfully",
            explanation: {
                general: "Idiomatic expressions.",
                options: {
                    "to help someone in difficulty": "Incorrect.",
                    "to deceive someone playfully": "Correct. Разыгрывать, подшучивать.",
                    "to criticize someone harshly": "Incorrect.",
                    "to support someone unconditionally": "Incorrect."
                }
            }
        },
        {
            id: 'c1_q12',
            question: '12. "What ___ if you were offered a job abroad with a significant pay rise?"',
            options: ["will you do", "would you do", "would you have done", "do you do"],
            correctAnswer: "would you do",
            explanation: {
                general: "Second Conditional (hypothetical situation in the present/future). If-clause uses Past Simple ('were offered' - passive), main clause uses 'would + infinitive'.",
                options: {
                    "will you do": "First Conditional.",
                    "would you do": "Correct.",
                    "would you have done": "Third Conditional (hypothetical past).",
                    "do you do": "Present Simple, usually for general truths or habits."
                }
            }
        },
        {
            id: 'c1_q13',
            question: '13. The new findings ___ considerable doubt on the previous theory.',
            options: ["shed", "cast", "throw", "put"],
            correctAnswer: "cast",
            explanation: {
                general: "Collocation. 'To cast doubt on something' is a fixed expression.",
                options: {
                    "shed": "'Shed light on' is a common collocation.",
                    "cast": "Correct. 'Cast doubt on' - подвергать сомнению.",
                    "throw": "'Throw doubt on' is less common/idiomatic than 'cast'.",
                    "put": "'Put doubt on' is not a standard collocation."
                }
            }
        },
        {
            id: 'c1_q14',
            question: '14. "Seldom ___ an opportunity to travel so extensively," he reflected.',
            options: ["one gets", "does one get", "one has got", "has one got"],
            correctAnswer: "does one get", // or "has one got" for Present Perfect context. "Does one get" is more general.
            explanation: {
                general: "Inversion after negative or restrictive adverbials like 'Seldom'. Auxiliary verb + subject + main verb.",
                options: {
                    "one gets": "Standard word order.",
                    "does one get": "Correct. Inversion with Present Simple auxiliary 'does'.",
                    "one has got": "Standard word order, Present Perfect.",
                    "has one got": "Possible if emphasizing a completed experience up to now, but 'does one get' is more general for a rare opportunity."
                }
            }
        },
         {
            id: 'c1_q15',
            question: '15. She has an ___ ability to understand complex mathematical concepts with ease.',
            options: ["inherent", "inherited", "internal", "ingrained"],
            correctAnswer: "inherent",
            explanation: {
                general: "Vocabulary: precise adjective choice. 'Inherent' means existing in something as a permanent, essential, or characteristic attribute.",
                options: {
                    "inherent": "Correct. Врожденная, присущая способность.",
                    "inherited": "Унаследованный (e.g., from parents).",
                    "internal": "Внутренний (e.g., internal organs).",
                    "ingrained": "Укоренившийся (e.g., a habit)."
                }
            }
        },

        // === Reading Comprehension C1 ===
        {
            type: "reading",
            passage: "The dichotomy between utilitarianism, which advocates for actions that maximize overall happiness, and deontological ethics, which emphasizes adherence to moral duties or rules irrespective of outcomes, remains a central debate in moral philosophy. While utilitarian calculus might justify a seemingly 'lesser evil' for a 'greater good', deontology would scrutinize the intrinsic morality of the act itself. This philosophical tension is not merely academic; it permeates real-world dilemmas, from public health policies during pandemics to the ethical programming of autonomous vehicles."
        },
        {
            id: 'c1_q16',
            question: '16. What is the primary focus of deontological ethics, according to the passage?',
            options: ["Achieving the greatest happiness for the most people.", "The consequences of an action.", "The inherent rightness or wrongness of an action itself.", "The practical application of philosophical theories."],
            correctAnswer: "The inherent rightness or wrongness of an action itself.",
            explanation: {
                general: "Understanding the core principle of deontology as described.",
                options: {
                    "Achieving the greatest happiness for the most people.": "This describes utilitarianism.",
                    "The consequences of an action.": "Utilitarianism focuses on outcomes; deontology less so.",
                    "The inherent rightness or wrongness of an action itself.": "Correct. '...deontological ethics... emphasizes adherence to moral duties or rules irrespective of outcomes... scrutinize the intrinsic morality of the act itself.'",
                    "The practical application of philosophical theories.": "The passage states the tension 'permeates real-world dilemmas', but this isn't the primary focus of deontology itself."
                }
            }
        },
        {
            id: 'c1_q17',
            question: '17. How might a utilitarian approach differ from a deontological one in a specific dilemma?',
            options: ["A utilitarian would always choose the action that causes no harm.", "A deontologist would prioritize the overall well-being of the community.", "A utilitarian might condone an action that is intrinsically questionable if it leads to a better overall result.", "A deontologist would focus solely on the long-term benefits of an action."],
            correctAnswer: "A utilitarian might condone an action that is intrinsically questionable if it leads to a better overall result.",
            explanation: {
                general: "Inferring the practical difference between the two ethical theories.",
                options: {
                    "A utilitarian would always choose the action that causes no harm.": "Not necessarily; they aim to *maximize happiness*, which might involve some harm if a greater good is achieved.",
                    "A deontologist would prioritize the overall well-being of the community.": "This is more aligned with utilitarianism; a deontologist focuses on duties/rules.",
                    "A utilitarian might condone an action that is intrinsically questionable if it leads to a better overall result.": "Correct. '...utilitarian calculus might justify a seemingly 'lesser evil' for a 'greater good'...'.",
                    "A deontologist would focus solely on the long-term benefits of an action.": "Deontologists focus on the morality of the act itself, not primarily its long-term benefits."
                }
            }
        },
        // === Writing C1 ===
         {
            type: "writing",
            id: 'c1_q18',
            question: '18. Writing: "Technological progress is always beneficial." To what extent do you agree or disagree with this statement? (Write around 220-260 words, providing arguments and examples.)'
        }
    ];

    // --- ФУНКЦИИ ОТОБРАЖЕНИЯ И ПРОВЕРКИ (аналогичны предыдущим) ---
    function displayC1Test() {
        let testHTML = '';
        c1TestData.forEach((item, index) => {
            if (item.type === 'reading') {
                testHTML += `<div class="reading-passage"><h4>Reading Passage:</h4><p>${item.passage}</p></div>`;
            } else if (item.type === 'writing') {
                testHTML += `
                    <div class="test-question writing-question">
                        <p><strong>${item.question}</strong></p>
                        <textarea id="${item.id}" name="${item.id}" rows="12" placeholder="Write your essay here (around 220-260 words)..."></textarea>
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
        else console.error("Element #c1-test-questions not found!");
    }

    function checkC1Answers() {
        let score = 0;
        let explanationsHTML = '';
        let totalScorableQuestions = 0;

        c1TestData.forEach((item, index) => {
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

    displayC1Test();
    if (submitButton) submitButton.addEventListener('click', checkC1Answers);
    else console.error("Submit button #submit-c1-test not found!");
});
