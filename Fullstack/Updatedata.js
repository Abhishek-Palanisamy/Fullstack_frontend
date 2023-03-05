import React, { useState } from 'react';

function Updatedata() {
  const [id, setId] = useState('');
  const [firstname, setFirstname] = useState('')
  const [emailid, setEmailid] = useState('');

  function handleUpdate() {
    fetch(`http://localhost:8080/Signup/put/${id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ firstname, emailid }),
    })
      .then(response => response.json())
      .then(data => {
        console.log(data.message);
      })
      .catch(error => console.error(error));
  }

  return (
    <div>
      <input type="text" value={id} onChange={e => setId(e.target.value)} />
      <input type="text" value={firstname} onChange={e => setFirstname(e.target.value)} />
      <input type="text" value={emailid} onChange={e => setEmailid(e.target.value)} />
      <button onClick={handleUpdate}>Update</button>
    </div>
  );
}

export default Updatedata;
