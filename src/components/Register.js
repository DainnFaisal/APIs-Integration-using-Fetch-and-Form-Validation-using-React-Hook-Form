import React, { useState } from 'react';
import '../stylesheets/Register.css';

function Register() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [number, setNumber] = useState('');
    const [password, setPassword] = useState('');
    const [emailError, setEmailError] = useState('');
    const [passwordError, setPasswordError] = useState('');


    // REGEX EMAIL
    // REGEX PASSWORD
    // focus blur
    // react-hook-form // 

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/;

    const validateEmail = (value) => {
        if (!emailRegex.test(value)) {
            setEmailError('Invalid email');
        } else {
            setEmailError('');
        }
    };

    const validatePassword = (value) => {
        if (!passwordRegex.test(value)) {
            setPasswordError('Invalid password');
        } else {
            setPasswordError('');
        }
    };

    const handleEmailBlur = () => {
        validateEmail(email);
    };

    const handleEmailFocus = () => {
        setEmailError('');
    };

    const handlePasswordBlur = () => {
        validatePassword(password);
    };

    const handlePasswordFocus = () => {
        setPasswordError('');
    };

    async function SignUp() {
        if (!emailError && !passwordError) {
            let object = {
                name,
                email,
                number,
                password,
            };

            let result = await fetch('https://api.storerestapi.com/auth/register', {
                method: 'POST',
                body: JSON.stringify(object),
                headers: {
                    'Content-Type': 'application/json',
                    Accept: 'application/json',
                },
            });
            let data = await result.json();
            localStorage.setItem('user-info', JSON.stringify(data));
            console.log('User data stored in localStorage:', data);
        }
    }

    return (
        <>
            <div className="container">
                <div className="registeration-form">
                    <h3 className="register-heading">Sign up Form:</h3>
                    <input
                        type="text"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        placeholder="Name:"
                        className="input-fields"
                    />
                    <br />
                    <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        onBlur={handleEmailBlur}
                        onFocus={handleEmailFocus}
                        placeholder="Email"
                        className="input-fields"
                    />
                    {emailError && <p className="error error-text">{emailError}</p>}
                    <br />
                    <input
                        type="number"
                        value={number}
                        onChange={(e) => setNumber(e.target.value)}
                        placeholder="Number"
                        className="input-fields"
                    />
                    <br />
                    <input
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        onBlur={handlePasswordBlur}
                        onFocus={handlePasswordFocus}
                        placeholder="Password"
                        className="input-fields"
                    />
                    {passwordError && <p className="error error-text">{passwordError}</p>}
                    <br />
                    <button className="sign-up-btn" onClick={SignUp}>
                        Sign Up
                    </button>
                </div>
            </div>
        </>
    );
}

export default Register;
