import React, { useEffect, useState } from "react";
import useSound from "use-sound";
import correct from "./Sounds/correct.mp3"
import play from "./Sounds/play.mp3"
import wrong from "./Sounds/wrong.mp3"
// import Timer from "./Timer";

const Quiz = ({ data, setStop, setQuestionNumber, questionNumber }) => {
  const [question, setQuestion] = useState(null);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [className, setClassName] = useState("answer");
  const[letsPlay]=useSound(play);
  const[correctAnswer]=useSound(correct);
  const[wrongAnswer]=useSound(wrong);

  useEffect(()=>{
    letsPlay();
  },[letsPlay])

  useEffect(() => {
    setQuestion(data[questionNumber - 1]); //if not sub 1 then it display 2 ques
    // console.log(question)
  }, [data, questionNumber]);

  const delay = (duration, callback) => {
    setTimeout(() => {
      callback();
    }, duration);
  };

  const clickHandler = (ans) => {
    setSelectedAnswer(ans);
    setClassName("answer active");
    delay(2000, () => {
      setClassName(ans.correct ? "answer correct" : "answer wrong");
    });
    delay(5000, () => {
      if(ans.correct){
        // setStop(true)
        
        // <Timer a={a}/>
        correctAnswer()
        delay(8000,()=>{
          setQuestionNumber((prev)=>prev+1)
          setSelectedAnswer(null)
        })
      
      }
      else{
        wrongAnswer()
        delay(1000,()=>{
          setStop(true)
        })
        
      }
    });

    // console.log(ans.correct)
  };

  return (
    <div className="trivia">
      <div className="question">{question?.question}</div>
      <div className="answers">
        {question?.answers.map((ans) => (
          <div
            className={selectedAnswer === ans ? className : "answer"}
            onClick={() =>!selectedAnswer &&  clickHandler(ans)}
          >
            {ans.text}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Quiz;
