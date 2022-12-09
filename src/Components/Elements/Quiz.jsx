import React, { useState } from "react";

function Quiz() {
  const [showFinalResults, setFinalResults] = useState(false);
  const [score, setScore] = useState(0);
  const [currentQuestion, setCurrentQuestion] = useState(0);

  const questions = [
    {
      text: "According to the population, Pakistan is largest country in the world.",
      options: [
        { id: 0, text: "fourth", isCorrect: false },
        { id: 1, text: "fifth", isCorrect: true },
        { id: 2, text: "sixth", isCorrect: false },
        { id: 3, text: "seventh", isCorrect: false },
      ],
    },
    {
      text: "Pakistan has a 1046 kilometer coastline in Sindh and Baluchistan. The coastline is located along the",
      options: [
        { id: 0, text: "Arabian Sea", isCorrect: true },
        { id: 1, text: "Gwadar Coast", isCorrect: false },
        { id: 2, text: " Iranian Sea", isCorrect: false },
        { id: 3, text: "Gulf Sea", isCorrect: false },
      ],
    },
    {
      text: " K2 the second highest mountain in the world is located along the border of Pakistan and",
      options: [
        { id: 0, text: "India", isCorrect: false },
        { id: 1, text: "Afghanistan", isCorrect: false },
        { id: 2, text: "China", isCorrect: true },
        { id: 3, text: "Iran", isCorrect: false },
      ],
    },
    {
      text: "Which animal is the national animal of Pakistan?",
      options: [
        { id: 0, text: " Tiger", isCorrect: false },
        { id: 1, text: "Lion", isCorrect: false },
        { id: 2, text: "Arabian horse", isCorrect: false },
        { id: 3, text: "Markhor", isCorrect: true },
      ],
    },
    {
      text: " According to the constitution of Pakistan, the chief executive and the most powerful person in Pakistan is",
      options: [
        { id: 0, text: "President", isCorrect: false },
        { id: 1, text: "Prime Minister", isCorrect: true },
        { id: 2, text: "Army Chief", isCorrect: true },
        { id: 3, text: "Chief Justice", isCorrect: false },
      ],
    },
  ];

  const optionClicked = (isCorrect) => {
    if (isCorrect) {
      setScore(score + 1);
    }
    if (currentQuestion + 1 < questions.length) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      setFinalResults(true);
    }
  };

  const RestartGame = () => {
    setScore(0);
    setCurrentQuestion(0);
    setFinalResults(false);
  };
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6 mt-4">
            <img className="img-fluid" src="Assests/quiz.jpg" alt="" wid />
        </div>
        <div className="col-md-6 mt-5">
          <h1>Quiz</h1>
          <h2>Current Score : {score}</h2>

          {showFinalResults ? (
            <div className="final-result mt-5">
              <h1>
                {score} out of {questions.length} correct - (
                {(score / questions.length) * 100}%)
              </h1>
              <button
                onClick={() => RestartGame()}
                type="button"
                class="btn btn-dark"
              >
                Restart quiz
              </button>
            </div>
          ) : (
            <div className="question-card">
              <h2>
                {" "}
                Question {currentQuestion + 1} out of {questions.length}
              </h2>
              <h3 className="question-text">
                {questions[currentQuestion].text}
              </h3>
              <ul>
                {questions[currentQuestion].options.map((option) => {
                  return (
                    <li
                      onClick={() => optionClicked(option.isCorrect)}
                      key={option.id}
                    >
                      {" "}
                      {option.text}
                    </li>
                  );
                })}
              </ul>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Quiz;
