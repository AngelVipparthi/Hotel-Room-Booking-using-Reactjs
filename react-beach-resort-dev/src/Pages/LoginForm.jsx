// LoginForm.jsx
import React from 'react';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom'; // Import Link from 'react-router-dom'


const LoginForm = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();

  const onSubmit = (data) => {
    console.log('Login form submitted:', data);
    // Handle login logic, e.g., send data to backend for authentication
  };

  return (
    <div className="form-container">
      <h2 className="form-title">Login</h2>
      <form className="form" onSubmit={handleSubmit(onSubmit)}>
        <div className="form-group">
          <label htmlFor="email" className="form-label">Email:</label>
          <input
            type="email"
            {...register('email', { required: true, pattern: /\S+@\S+\.\S+/ })}
            id="email"
            className="form-input"
          />
          {errors.email && <p className="error">Valid email is required</p>}
        </div>
        <div className="form-group">
          <label htmlFor="password" className="form-label">Password:</label>
          <input
            type="password"
            {...register('password', { required: true })}
            id="password"
            className="form-input"
          />
          {errors.password && <p className="error">Password is required</p>}
        </div>
        <button type="submit" className="btn-primary">Login</button>
        <div className="login-link">
          <p>Don't have an account  </p>
          <br/>
          <Link to="/Registration" className="btn-primary">
            Register
          </Link>
        </div>
      </form>
    </div>
  );
};

export default LoginForm;
