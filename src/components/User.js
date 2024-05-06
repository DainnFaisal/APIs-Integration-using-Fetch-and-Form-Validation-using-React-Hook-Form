import React from 'react';
import { useForm } from 'react-hook-form';

function User() {
    
    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = (data) => {
        console.log(data);
    };

    return (
        <div className="container">
            <div className='registeration-form'>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <h3 className="register-heading">Sign up Form:</h3>

                    <label>Username</label>
                    <br />
                    <input
                        type='text'
                        name='username'
                        {...register('username', { required: 'Username is required' })}
                    />
                    <br />
                    {errors.username && <p className='error-text'>{errors.username.message}</p>}

                    <br />
                    <label>Email</label>
                    <br />
                    <input
                        type='email'
                        name='email'
                        {...register('email', {
                            required: 'Email is required',
                            pattern: {
                                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                                message: 'Invalid email address',
                            },
                        })}
                    />
                    <br />
                    {errors.email && <p className='error-text'>{errors.email.message}</p>}

                    <br />
                    <label>Password</label>
                    <br />
                    <input
                        type='password'
                        name='password'
                        {...register('password', {
                            required: 'Password is required',
                            pattern: {
                                value: /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$/,
                                message: 'Password must contain at least 8 characters, including uppercase, lowercase, and numbers',
                            },
                        })}
                    />
                    <br />
                    {errors.password && <p className='error-text'>{errors.password.message}</p>}

                    <br />
                    <label>Website</label>
                    <br />
                    <input
                        type="url"
                        name="website"
                        {...register('website')}
                    />
                    <br />
                    <br/>
                    <button className="sign-up-btn" type='submit'>Submit</button>
                    <br />
                </form>
            </div>
        </div>
    );
}

export default User;
