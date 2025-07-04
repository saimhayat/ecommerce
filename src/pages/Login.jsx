// src/pages/Login.jsx
import React, { useState } from 'react'; // Import useState
import './Login.css';

function Login() {
  const [isLogin, setIsLogin] = useState(true); // State to toggle between login and register forms

  const toggleForm = (e) => {
    e.preventDefault(); // Prevent default link behavior
    setIsLogin(prev => !prev); // Toggle the state
  };

  return (
    <div>
      <div className="wrapper">
        {isLogin ? (
          // LOGIN FORM
          <form action="">
            <h1>Login</h1>
            <div className="input-box">
              <input type="text" placeholder="Username" required />
              <i className='bx bxs-user'></i>
            </div>
            <div className="input-box">
              <input type="password" placeholder="Password" required />
              <i className='bx bxs-lock-alt'></i>
            </div>
            <div className="remember-forgot">
              <label><input type="checkbox" />Remember Me</label>
              <a href="#">Forgot Password</a>
            </div>
            <button type="submit" className="btn">Login</button>
            <div className="register-link">
              <p>Don't Have An Account? <a href="#" onClick={toggleForm}>Register</a></p> {/* Call toggleForm */}
            </div>
          </form>
        ) : (
          // REGISTRATION FORM
          <form action="">
            <h1>Register</h1>
            <div className="input-box">
              <input type="text" placeholder="Username" required />
              <i className='bx bxs-user'></i>
            </div>
            <div className="input-box">
              <input type="email" placeholder="Email" required /> {/* Added Email for registration */}
              <i className='bx bxs-envelope'></i> {/* Example icon for email */}
            </div>
            <div className="input-box">
              <input type="password" placeholder="Password" required />
              <i className='bx bxs-lock-alt'></i>
            </div>
            <div className="input-box">
              <input type="password" placeholder="Confirm Password" required /> {/* Added Confirm Password */}
              <i className='bx bxs-lock-alt'></i>
            </div>
            <button type="submit" className="btn">Register</button>
            <div className="register-link">
              <p>Already Have An Account? <a href="#" onClick={toggleForm}>Login</a></p> {/* Call toggleForm */}
            </div>
          </form>
        )}
      </div>
    </div>
  );
}

export default Login;