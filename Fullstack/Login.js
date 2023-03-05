import React, { useState } from 'react'
import './Login.css';
import './Signup.js';
function Login() {
    const[username,setUsername]=useState('')
    const[password,setPassword]=useState('')
  
    const handleClick=(e)=>{
        e.preventDefault()
        const Login={username,password}
        console.log(Login)
        fetch("http://localhost:8080/Login/postlogin",{
        method:"POST",
        headers:{"Content-Type":"application/json"},
        body:JSON.stringify(Login)
        
    }
        ).then(()=>{
            console.log("New Login Added")
            
        })
    }

  return (
    <>
    <div className='full'>
    <center className='user'>USER LOGIN</center>
    <div className='username'>
    <label for='username'>User Id:</label><br/>
    <input type='text' className='usernamebox' placeholder='' required value={username} 
    onChange={(e)=>setUsername(e.target.value)}></input>
    </div>
    <div className='password'>
    <label for='password'>Password:</label><br/>
    <input type='password' className='passwordbox' placeholder='' required value={password}
    onChange={(e)=>setPassword(e.target.value)}></input>
    </div>
    <div className='login'>
    <button type='submit' className='loginbutton' 
    onClick={handleClick}>Login</button><br/><br/>
 
    <p className='signup2'>No Account?<button type='submit' className='signupbutton2' >Signup</button></p>
   

    </div>
    </div>

          </>
  )
}

export default Login