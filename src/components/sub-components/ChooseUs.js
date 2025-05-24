import React from 'react'
import LandCruiser from "../../images/chooseUs/main.png"
import icon1 from "../../images/chooseUs/icon1.png"
import icon2 from "../../images/chooseUs/icon2.png"
import icon3 from "../../images/chooseUs/icon3.png"

export default function ChooseUs() {
  return (
    <section className='chooseUs-section'>
      <div className='chooseUs-section__container'>
        <img className='hero-image' src={LandCruiser} alt="land cruiser and other fleet" />
        
        <div className='chooseUs-details-container'>

          <div className='chooseUs-details-container__left'>
            <h3>Why Choose Us</h3>
            <h2>Best valued deals you will ever find</h2>
            <p>Discover the best deals you'll ever find with our unbeatable offers. We're dedicated to providing you with the best value for your money, so you can enjoy top-quality services and products without breaking the bank. Our deals are designed to give you the ultimate renting experience, so don't miss out on your chance to save big.</p>
            <a href="#">Find Details <i className='fa-solid fa-angle-right'></i></a>
          </div>

          <div className='chooseUs-details-container__right'>
            <div>
              <img src={icon1} alt="car icon" />
              <div className='detail'>
                <h3 className='chooseUs-subheading'>Cross Country Drive</h3>
                <p>Take your driving experience to the next level with our top-notch vehicles for your cross-country adventures.</p>
              </div>
            </div>

            <div>
              <img src={icon2} alt="money icon" />
              <div className='detail'>
                <h3 className='chooseUs-subheading'>All Inclusive Pricing</h3>
                <p>Get everything you need in one convenient, transparent price with our all-inclusive pricing policy.</p>
              </div>
            </div>

            <div>
              <img src={icon3} alt="no hidden charge icon" />
              <div className='detail'>
                <h3 className='chooseUs-subheading'>No Hidden Charges</h3>
                <p>Enjoy peace of mind with our no hidden charges policy. We believe in transparent and honest pricing.
                </p>
              </div>
            </div>
            
          </div>

        </div>
      </div>
    </section>
  )
}
