import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import '../styles/SignIn.css';

export default function SignIn() {
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });
  const [message, setMessage] = useState({ text: '', type: '' });
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
    setMessage({ text: '', type: '' }); // Clear message when user types
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Basic validation
    if (!formData.email || !formData.password) {
      setMessage({
        text: 'Please fill in all fields',
        type: 'error'
      });
      return;
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      setMessage({
        text: 'Please enter a valid email address',
        type: 'error'
      });
      return;
    }

    // Simulate API call
    setTimeout(() => {
      // For demo purposes, let's say login is successful
      setMessage({
        text: 'Successfully signed in! Redirecting...',
        type: 'success'
      });
      
      // Reset form after 2 seconds
      setTimeout(() => {
        setFormData({ email: '', password: '' });
        setMessage({ text: '', type: '' });
      }, 2000);
    }, 1000);
  };

  const handleRegisterClick = () => {
    navigate('/register');
  };

  return (
    <div className="signin-container">
      <div className="signin-form-container">
        <h2>Sign In</h2>
        {message.text && (
          <div className={`message ${message.type}`}>
            {message.text}
          </div>
        )}
        <form onSubmit={handleSubmit} className="signin-form">
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              placeholder="Enter your email"
            />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              required
              placeholder="Enter your password"
            />
          </div>
          <button type="submit" className="signin-button">Sign In</button>
        </form>
        <p className="signin-footer">
          Don't have an account? <span className="link" onClick={handleRegisterClick}>Register here</span>
        </p>
      </div>
    </div>
  );
} 