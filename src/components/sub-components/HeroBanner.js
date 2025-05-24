import React from 'react'
import { NavLink } from 'react-router-dom'
import BannerBackgroundImg from '../../images/hero/hero-bg.png'
import BannerCar from '../../images/hero/main-car.png'

export default function Hero_Banner() {
  return (
    <section className='home-banner'>
        <img className='background' src={BannerBackgroundImg} alt="Hero Banner Background" />
        <div className='container'>
            <div className='container__detail'>
                <h2>Plan your trip now</h2>
                <h1>Save <span>big</span> with our car rental</h1>
                <p>Rent the car of your dreams. Unbeatable prices, unlimited miles, flexible pick-up options and much more.</p>
                <div className='container__detail__buttons'>
                    <a href='#booking-section'>
                        Book Ride 
                        <i className='fa-solid fa-circle-check'></i>
                    </a>
                    <NavLink to='about'>
                        Learn More 
                        <i className='fa-solid fa-angle-right'></i>
                    </NavLink>
                </div>
            </div>
            <img className='container__img' src={BannerCar} alt="Banner Car" />
        </div>
    </section>
  )
}
