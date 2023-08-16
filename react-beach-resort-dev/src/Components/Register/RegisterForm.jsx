import React from 'react';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom/cjs/react-router-dom.min';



const RegisterForm = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();

  const onSubmit = (data) => {
    console.log('Registration form submitted:', data);
    // Handle registration logic, e.g., send data to backend
  };

  return (
    <div className="registerform">
      <h2>Register</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <label>Username:</label>
          <input
            type="text"
            {...register('username', { required: true })}
          />
          {errors.username && <p className="error">Username is required</p>}
        </div>
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
            {...register('password', { required: true, minLength: 6 })}
          />
          {errors.password && <p className="error">Password must be at least 6 characters</p>}
        </div>
        <button  type="submit" className="btn-primary">Register</button>
        <div className="loginbutton">
            <p>Already have an account </p>
            <Link to="/Register/LoginForm" className="btn-primary">
                    Login
                </Link>
        </div>
      </form>
    </div>
  );
};

export default RegisterForm;
