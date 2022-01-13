import React, {useState} from 'react'


export default function Home() {
  const [email,setEmail] = useState('')
  const [password,setPassword] = useState('')
  
  
  const handleEmail=(e)=>{
      console.log(email)
      setEmail(e.target.value)
  }
  
  const handlePassword=(e)=>{
      console.log(password)
      setPassword(e.target.value)
  }
  
  const displayState=()=>{
      console.log(email)
      console.log(password)
  }
  
  
  
  
  
    return (
      <div className="component">
          <div className='star-title'>
              <div className='star-image'>
              </div>
              <h1>App Name</h1>
          </div>

        <div className='login-input'>
          <input className='password-email-input' onChange={(e)=>handleEmail(e)} placeholder='Email'></input>
          <input className='password-email-input' onChange={(e)=>handlePassword(e)} placeholder='Password' type='password'></input>
          <button className='login-reg-button' onClick={displayState}>Login</button>
        </div>


          <hr></hr>
  
          <button className='login-reg-button' onClick={displayState}> Register</button>
  
  
  
      </div>
    );
}