import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import LoginForm from './LoginForm';

const RegisterForm = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const [showLoginForm, setShowLoginForm] = useState(false); // State to control form rendering

  const onSubmit = async (data) => {
    try {
      // ... your registration logic ...

      // Once registration is successful, update state to show the login form
      setShowLoginForm(true);
    } catch (error) {
      console.error('Error during registration:', error);
      // Handle registration error, display error message, etc.
    }
  };

  return (
    <div className="register-form-container">
      <h2 className="form-title">Register</h2>
      {showLoginForm ? (
        <LoginForm /> // Render the LoginForm component if showLoginForm is true
      ) : (
        <form className="form" onSubmit={handleSubmit(onSubmit)}>
          <div className="form-group">
            <label htmlFor="username">Username:</label>
            <input
              type="text"
              {...register('username', { required: true })}
              id="username"
              className="form-input"
            />
            {errors.username && <p className="error">Username is required</p>}
          </div>
          <div className="form-group">
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              {...register('email', { required: true, pattern: /\S+@\S+\.\S+/ })}
              id="email"
              className="form-input"
            />
            {errors.email && <p className="error">Valid email is required</p>}
          </div>
          <div className="form-group">
            <label htmlFor="password">Password:</label>
            <input
              type="password"
              {...register('password', { required: true, minLength: 6 })}
              id="password"
              className="form-input"
            />
            {errors.password && <p className="error">Password must be at least 6 characters</p>}
          </div>
          <button type="submit" className="btn-primary">Register</button>
          <div className="login-button">
            <p className='a'>Already have an account</p>
            <Link to="/LoginForm" className="btn-primary">
              Login
            </Link>
          </div>
        </form>
      )}
    </div>
  );
};

export default RegisterForm;
