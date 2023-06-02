import React, { useState, useEffect } from "react";

function Question({ question, onAnswered }) {
  const [timeRemaining, setTimeRemaining] = useState(10);

  // add useEffect code
  useEffect(()=> {
    let newtime = timeRemaining
    const timerId = setTimeout(()=> setTimeRemaining(newtime-=1), 1000)
    if (newtime > 0){
    }
    else {
      onAnswered(false)
      setTimeRemaining(newtime+= 10)
    }

    return function cleanup() {
      clearTimeout(timerId)
    }


  }, [timeRemaining, onAnswered])
    

  function handleAnswer(isCorrect) {
    setTimeRemaining(10);
    onAnswered(isCorrect);
  }

  const { id, prompt, answers, correctIndex } = question;

  return (
    <>
      <h1>Question {id}</h1>
      <h3>{prompt}</h3>
      {answers.map((answer, index) => {
        const isCorrect = index === correctIndex;
        return (
          <button key={answer} onClick={() => handleAnswer(isCorrect)}>
            {answer}
          </button>
        );
      })}
      <h5>{timeRemaining} seconds remaining</h5>
    </>
  );
}

export default Question;
