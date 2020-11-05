import firebase from 'firebase/app';
import React, { useState } from 'react';


const Signup = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setErrors] = useState('');


const handleSubmit = (e) =>{
  e.preventDefault()
  console.log('Submitted');
}

  return (
    <div>
      <h1 className="text-blue-200">Signup</h1>

<form onSubmit={handleSubmit}>
  <input type="email" />

  <input type="password" />
  <input type="password" />

  <input type="submit" value="Signup"/>
</form>
    </div>
  );
};

export default Signup;
