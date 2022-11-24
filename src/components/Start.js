import React, { useRef } from 'react'

const Start = ({setUserName}) => {
  const inputRef = useRef();
  const clickHandler=()=>{
    inputRef.current.value && setUserName(inputRef.current.value)

  }
  return (
    <div className="start">
      <input type="text" placeholder='Enter Your Name' className='startInput' ref={inputRef}/>
      <button className="startButton" onClick={clickHandler}>Start</button>
    </div>
  )
}

export default Start