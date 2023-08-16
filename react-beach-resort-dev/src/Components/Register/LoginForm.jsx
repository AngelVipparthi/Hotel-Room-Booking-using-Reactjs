import React from 'react';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom/cjs/react-router-dom.min';

const LoginForm = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();

  const onSubmit = (data) => {
    console.log('Login form submitted:', data);
    // Handle login logic, e.g., send data to backend for authentication
  };

  return (
    <div>
      <h2>Login</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <label>Email:</label>
          <input
            type="email"
            {...register('email', { required: true, pattern: /\S+@\S+\.\S+/ })}
          />
          {errors.email && <p className="error">Valid email is required</p>}
        </div>
        <div>
          <label>Password:</label>
          <input
            type="password"
            {...register('password', { required: true })}
          />
          {errors.password && <p className="error">Password is required</p>}
        </div>
        <button type="submit">Login</button>
        <div className="loginbutton">
            <p>Don't have an account </p>
            <Link to="/Registration" className="btn-primary">
                    Register
                </Link>
        </div>
      </form>
    </div>
  );
};

export default LoginForm;
