import React,{useEffect, useState} from 'react'
import './App.css';
import Quiz from './components/Quiz';
import { data } from './components/Data';
import Timer from './components/Timer';
import Start from './components/Start';


function App() {
  const [questionNumber,setQuestionNumber]= useState(1);
  const[stop,setStop]=useState(false)
  const[earned,setEarned]=useState("RS 0")
const[userName,setUserName]=useState(null)
  

    
    
  
  const moneyPyramid =[
    {id:1 ,amount:"Rs 1000"},
    {id:2 ,amount:"Rs 2000"},
    {id:3 ,amount:"Rs 3000"},
    {id:4 ,amount:"Rs 4000"},
    {id:5 ,amount:"Rs 5000"},
    {id:6 ,amount:"Rs 10,000"},
    {id:7 ,amount:"Rs 20,000"},
    {id:8 ,amount:"Rs 40,000"},
    {id:9 ,amount:"Rs 80,000"},
    {id:10 ,amount:"Rs 1,60,000"},
    {id:11 ,amount:"Rs 3,20,000"},
    {id:12 ,amount:"Rs 6,40,000"},
    {id:13 ,amount:"Rs 12,50,000"},
    {id:14 ,amount:"Rs 20,50,000"},
    {id:15 ,amount:"Rs 1,00,00,000"}
    
  ].reverse()
  useEffect(()=>{
    questionNumber>1 && setEarned(moneyPyramid.find((m)=>m.id===questionNumber-1).amount) 
  },[moneyPyramid,questionNumber])
  return (
    <>
      <div className="app">
      
      {userName?
      <>
        <div className="main">

        {stop ?<h1 className='earnText'>Congratulations {userName} <br/>You Earned {earned}</h1>:(
          <>
          <div className="top">
            <div className="timer"><Timer setStop={setStop} questionNumber={questionNumber}/></div>
          </div>
          <div className="bottom">
            <Quiz data={data} setStop={setStop} setQuestionNumber={setQuestionNumber} questionNumber={questionNumber}/>
          </div>
          </>
        )}
         
         
        </div>
        <div className="pyramid">
        
          <ul className="moneyList">
          <div className="feild">
          <h2 className='username'>{userName}</h2>
          <h2 className='score'>Score : {earned}</h2>
          </div>
          
          {moneyPyramid.map((items)=>
            <li className={questionNumber===items.id? "moneyListItem active":"moneyListItem"}>
            <span className="moneyListItemNumber">{items.id}</span>
            <span className="moneyListItemAmount">{items.amount}</span>
           </li>
           
          )}
         

          </ul>
        </div>
        </>:<Start setUserName={setUserName}/>}
      </div>
    </>
  );
}

export default App;
