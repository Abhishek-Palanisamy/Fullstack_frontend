import React, { useState } from 'react'

import './Signup.css';

function Signup() {

    const[firstname,setFirstname]=useState('')
    const[lastname,setLastname]=useState('')
    const[username,setUsername]=useState('')
    const[emailid,setEmailid]=useState('')

    const[password,setPassword]=useState('')
  
    const handleClick=(e)=>{
        e.preventDefault()
        const Signup={firstname,lastname,username,emailid,password}
        console.log(Signup)
        fetch("http://localhost:8080/Signup/post",{
        method:"POST",
        headers:{"Content-Type":"application/json"},
        body:JSON.stringify(Signup)
    }
        ).then(()=>{
            console.log("New Signup Added")
        })
    }
  return (
    <>
      <div className='full1'>
      <center className='signup'>SIGNUP DETAILS</center>
      <div className='fname'>
      <label for='firstname'>FirstName:</label><br/>
      <input type='text' className='fnamebox' value={firstname} 
      onChange={(e)=>setFirstname(e.target.value)}></input>
      </div>
      <div className='lname'>
      <label for='lastname'>LastName:</label><br/>
      <input type='text' className='lnamebox' value={lastname} 
      onChange={(e)=>setLastname(e.target.value)}></input>
      </div>
      <div className='uname'>
      <label for='username'>UserName:</label><br/>
      <input type='text' className='unamebox' value={username} 
      onChange={(e)=>setUsername(e.target.value)}></input>
      </div>
      <div className='emailid'>
      <label for='emailid'>Email ID:</label><br/>
      <input type='email' className='emailidbox' value={emailid} 
      onChange={(e)=>setEmailid(e.target.value)}></input>
      </div>

      <div className='password1'>
      <label for='firstname'>Password:</label><br/>
      <input type='password' className='passwordbox1' value={password} 
      onChange={(e)=>setPassword(e.target.value)}></input>
      </div>
      <div className='signupbutton'>
      <button type='submit' className='signupbuttonbox' onClick={handleClick}>Signup</button><br/><br/>
      <p className='login1'>Already Have Account?<button type='submit' className='loginbutton1'>Login</button></p>
      </div>
      </div>
      </>
  )
}

export default Signup