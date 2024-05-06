import React, { useState } from 'react'
import '../stylesheets/Login.css'

function Login() {

  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [emailError, setEmailError] = useState("")
  const [passwordError, setPasswordError] = useState("")

  async function Login() {
    let object = {
      email,
      password
    }

    if (email.indexOf('@') === -1) {
      setEmailError('Please enter a valid email address!');
      return;
    } else {
      setEmailError('');
    }

    if (password.length < 8) {
      setPasswordError('Password must be at least 8 characters long!');
      return;
    } else {
      setPasswordError('');
    }

    console.log(object);

    let result = await fetch('https://api.storerestapi.com/auth/login', {
      method: 'POST',
      body: JSON.stringify(object),
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json"
      }
    });

    let data = await result.json();
    localStorage.setItem("user-info", JSON.stringify(data))
    console.log("User data stored in localStorage:", data);

  }

  return (
    <>
      <div className='container'>
        <div className='login-form'>
          <h3 className='login-heading'>Login Form:</h3>

          <input type='email' value={email} onChange={(e) => setEmail(e.target.value)} placeholder='Email' className='input-fields' />
          <br />
          {emailError && <p className="error-text">{emailError}</p>}
          <input type='password' value={password} onChange={(e) => setPassword(e.target.value)} placeholder='Password' className='input-fields' />
          <br />
          {passwordError && <p className="error-text">{passwordError}</p>}
          <button className="login-btn" onClick={Login}>Login</button>

        </div>
      </div>
    </>
  )
}

export default Login
