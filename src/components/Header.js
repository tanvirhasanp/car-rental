import React, { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import Logo from '../images/logo/logo.png'
import SignIn from '../pages/SignIn'
import Register from '../pages/Register'

export default function Header() {
  const [activeMenu, setActiveMenu] = useState(false);
  const [showForm, setShowForm] = useState('');

  const handleFormClick = (formType) => {
    setShowForm(formType);
  };

  const handleCloseForm = () => {
    setShowForm('');
  };

  return (
    <header>
        <nav className='nav-bar'>
            <div className='nav-bar__logo-image'>
                <Link to='/'>
                    <img src={Logo} alt="Car Rental Logo" />
                </Link>
            </div>

            <div className='nav-bar__links'>
                <NavLink to='/'>Home</NavLink>
                <NavLink to='about'>About</NavLink>
                <NavLink to='vehicle'>Vehicle Models</NavLink>
                <NavLink to='testimonials'>Testimonials</NavLink>
                <NavLink to='team'>Our Team</NavLink>
                <NavLink to='contact'>Contact</NavLink>
            </div>

            <div className='nav-bar__buttons'>
                <Link to="/signin" className='nav-bar__buttons__signIn'>Sign In</Link>
                <Link to="/register" className='nav-bar__buttons__register'>Register</Link>
            </div>
        </nav>

        <i className="fa-solid fa-bars hamburger-btn" onClick={() => {setActiveMenu(true)}}></i>

        <nav className={activeMenu ? 'hamburger-menu active' : 'hamburger-menu'}>
            <i className="fa-solid fa-xmark close-btn" onClick={() => {
              setActiveMenu(false);
              setShowForm('');
            }}></i>
            
            {!showForm ? (
              <>
                <NavLink to='/' onClick={() => {setActiveMenu(false)}}>Home</NavLink>
                <NavLink to='about' onClick={() => {setActiveMenu(false)}}>About</NavLink>
                <NavLink to='vehicle' onClick={() => {setActiveMenu(false)}}>Vehicle Models</NavLink>
                <NavLink to='testimonials' onClick={() => {setActiveMenu(false)}}>Testimonials</NavLink>
                <NavLink to='team' onClick={() => {setActiveMenu(false)}}>Our Team</NavLink>
                <NavLink to='contact' onClick={() => {setActiveMenu(false)}}>Contact</NavLink>
                <Link 
                  className='mobile-signIn-btn signIn-btn'
                  onClick={() => handleFormClick('signin')}
                >
                  Sign In
                </Link>
                <Link 
                  className='mobile-signIn-btn register-btn'
                  onClick={() => handleFormClick('register')}
                >
                  Register
                </Link>
              </>
            ) : (
              <div className="mobile-form-container">
                <i className="fa-solid fa-arrow-left back-btn" onClick={handleCloseForm}></i>
                {showForm === 'signin' ? <SignIn /> : <Register />}
              </div>
            )}
        </nav>
    </header>
  )
}
