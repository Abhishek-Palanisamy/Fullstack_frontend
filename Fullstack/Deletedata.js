import React, { useState } from 'react';

function Deletedata() {
  const [id, setId] = useState('');

  function handleDelete() {
    fetch(`http://localhost:8080/Signup/delete/${id}`, {
      method: 'DELETE',
    })
      .then(response => response.json())
      .then(data => {
        console.log(data.message);
      })
      .catch(error => console.error(error));
  }

  return (
    <div>
    <p ><center><h1>Delete Signup Details</h1></center></p><br/><br/>
    <p><center>Enter ID to delete:</center></p>
      <center><input type="text" value={id} onChange={e => setId(e.target.value)} />
      <button onClick={handleDelete}>Delete</button></center>
    </div>
  );
}

export default Deletedata;
