import React, { useState } from 'react'

import './Beveragescreate.css';

function Beveragescreate() {

    const[name,setName]=useState('')
    const[price,setPrice]=useState('')
    const[quantity,setQuantity]=useState('')
  
    const handleClick=(e)=>{
        e.preventDefault()
        const Beverages={name,price,quantity}
        console.log(Beverages)
        fetch("http://localhost:8080/Beverages/postbeverages",{
        method:"POST",
        headers:{"Content-Type":"application/json"},
        body:JSON.stringify(Beverages)
    }
        ).then(()=>{
            console.log("New Detail Added")
        })
    }
  return (
    <>
      <div className='full5'>
      <center className='signup'>BEVERAGE DETAILS</center>
      <div className='fname'>
      <label for='firstname'>Name:</label><br/>
      <input type='text' className='fnamebox' value={name} 
      onChange={(e)=>setName(e.target.value)}></input>
      </div>
      <div className='lname'>
      <label for='lastname'>Price:</label><br/>
      <input type='text' className='lnamebox' value={price} 
      onChange={(e)=>setPrice(e.target.value)}></input>
      </div>
      <div className='uname'>
      <label for='username'>Quantity:</label><br/>
      <input type='text' className='unamebox' value={quantity} 
      onChange={(e)=>setQuantity(e.target.value)}></input>
      </div>

      <div className='signupbutton'>
      <button type='submit' className='signupbuttonbox' onClick={handleClick}>Create</button><br/><br/>
      </div>
      </div>
      </>
  )
}

export default Beveragescreate