import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import '../styles/Register.css';

export default function Register() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: ''
  });
  const [message, setMessage] = useState({ text: '', type: '' });
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
    setMessage({ text: '', type: '' });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Basic validation
    if (!formData.name || !formData.email || !formData.password || !formData.confirmPassword) {
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

    // Password validation
    if (formData.password.length < 6) {
      setMessage({
        text: 'Password must be at least 6 characters long',
        type: 'error'
      });
      return;
    }

    // Confirm password validation
    if (formData.password !== formData.confirmPassword) {
      setMessage({
        text: 'Passwords do not match',
        type: 'error'
      });
      return;
    }

    // Simulate API call
    setTimeout(() => {
      setMessage({
        text: 'Successfully registered! Redirecting to login...',
        type: 'success'
      });
      
      // Reset form after 2 seconds
      setTimeout(() => {
        setFormData({ name: '', email: '', password: '', confirmPassword: '' });
        setMessage({ text: '', type: '' });
      }, 2000);
    }, 1000);
  };

  const handleSignInClick = () => {
    navigate('/signin');
  };

  return (
    <div className="register-container">
      <div className="register-form-container">
        <h2>Register</h2>
        {message.text && (
          <div className={`message ${message.type}`}>
            {message.text}
          </div>
        )}
        <form onSubmit={handleSubmit} className="register-form">
          <div className="form-group">
            <label htmlFor="name">Full Name</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              placeholder="Enter your full name"
            />
          </div>
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
          <div className="form-group">
            <label htmlFor="confirmPassword">Confirm Password</label>
            <input
              type="password"
              id="confirmPassword"
              name="confirmPassword"
              value={formData.confirmPassword}
              onChange={handleChange}
              required
              placeholder="Confirm your password"
            />
          </div>
          <button type="submit" className="register-button">Register</button>
        </form>
        <p className="register-footer">
          Already have an account? <span className="link" onClick={handleSignInClick}>Sign in here</span>
        </p>
      </div>
    </div>
  );
} 