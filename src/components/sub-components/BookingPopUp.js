import React, { useContext, useRef, useState } from 'react'
import { BookingFormPopUp } from '../../context/Popup'

export default function BookingPopUp({ pickUpDate, dropOffDate, pickupLocation, dropOffLocation, carName, carImg }) {

  const { activePopUp, setActivePopUp } = useContext(BookingFormPopUp);

  const [ successful, setSuccessful ] = useState(false);
  const [ invalidActive, setInvalidIsActive ] = useState(false);
  
  const pickUpTime = useRef();
  const dropOffTime = useRef();
  const firstName = useRef();
  const lastName = useRef();
  const phoneNumber = useRef();
  const age = useRef();
  const email = useRef();
  const address = useRef();
  const city = useRef();
  const postcode = useRef();


  function checkForm(e) {
    if (!pickUpTime.current.value || !dropOffTime.current.value || !firstName.current.value || !lastName.current.value || !phoneNumber.current.value || !age.current.value || !email.current.value || !address.current.value || !city.current.value || !postcode.current.value ) {
      e.preventDefault()
      setInvalidIsActive(true);
      return
    }

    e.preventDefault();
    setInvalidIsActive(false);
    setSuccessful(true);

  }

  function cleanForm() {
    pickUpTime.current.value = '';
    dropOffTime.current.value = '';
    firstName.current.value = '';
    lastName.current.value = '';
    phoneNumber.current.value = '';
    age.current.value = '';
    email.current.value = '';
    address.current.value = '';
    city.current.value = '';
    postcode.current.value = '';
    setTimeout(() => {
      setSuccessful(false);
    }, 550);
    document.documentElement.style.overflow = 'scroll';
    document.body.scroll = "yes";
  }

  return (
    <div className='booking-popup'>
      <div className={`booking-popup__overlay ${activePopUp && 'active'}`} onClick={() => {setActivePopUp(false); cleanForm()}}></div>
      <div className={`booking-popup__container ${activePopUp && 'active'}`}>
        <div className='booking-popup__container__header'>
          <h2>COMPLETE RESERVATION</h2>
          <i className='fa-solid fa-xmark' onClick={() => {setActivePopUp(false); cleanForm()}}></i>
        </div>
        <div className={`content ${successful && 'successful'}`}>
          <div className={`booking-popup__container__info ${successful && 'successful'}`}>
            <h3><i className='fa-solid fa-circle-info'></i> Upon completing this reservation enquiry, you will receive:</h3>
            <p>Your rental voucher to produce on arrival at the rental desk and a toll-free customer support number.</p>
          </div>
          <div className={`booking-popup__container__details ${successful && 'successful'}`}>
            <div className='booking-popup__container__details__left'>
              <h3 className='title'>Location & Date</h3>
              <div>
                <div>
                  <i className='fa-solid fa-location-dot'></i>
                  <div>
                    <h4 className='test'>Pick-Up Date & Time <span className='asterisk'>*</span></h4>
                    <span className='date'>{pickUpDate} / <input ref={pickUpTime} type="time" required/></span>
                  </div>
                </div>
                <div>
                  <i className='fa-solid fa-location-dot'></i>
                  <div>
                    <h4>Drop-off Date & Time <span className='asterisk'>*</span></h4>
                    <span className='date'>{dropOffDate} / <input ref={dropOffTime} type="time" required/></span>
                  </div>
                </div>
                <div>
                  <i className='fa-solid fa-calendar-days'></i>
                  <div>
                    <h4>Pick-Up Location</h4>
                    <span className='location'>{pickupLocation}</span>
                  </div>
                </div>
                <div>
                  <i className='fa-solid fa-calendar-days'></i>
                  <div>
                    <h4>Drop-Off Location</h4>
                    <span className='location'>{dropOffLocation}</span>
                  </div>
                </div>
              </div>
            </div>
            <div className='booking-popup__container__details__right'>
              <h3>Car - <span>{carName}</span></h3>
              <img src={carImg} alt={carName} />
            </div>
          </div>
  
          <form className={`booking-popup__container__form-container ${successful && 'successful'}`} action="post">
            <h3 className='title'>PERSONAL INFORMATION</h3>
            <div className='booking-popup__container__form-container__form'>
              <div className='top'>
                <div className='input-container'>
                  <label htmlFor="fname">First Name</label>
                  <input ref={firstName} type="text" id='fname' placeholder='Enter your first name' required/>
                </div>
                <div className='input-container'>
                  <label htmlFor="lname">Last Name</label>
                  <input ref={lastName} type="text" id='lname' placeholder='Enter your last name' required/>
                </div>
                <div className='input-container'>
                  <label htmlFor="number">Phone Number</label>
                  <input ref={phoneNumber} type="tel" id='number' placeholder='Enter your phone number' required/>
                </div>
                <div className='input-container'>
                  <label htmlFor="age">Age</label>
                  <input ref={age} className='test' type="number" id='age' placeholder='e.g. 18' required/>
                </div>
              </div>
  
              <div className='middle'>
                <div className='input-container'>
                  <label htmlFor="email">Email</label>
                  <input ref={email} type="email" id='email' placeholder='Enter your email address' required/>
                </div>
                <div className='input-container'>
                  <label htmlFor="address">Address</label>
                  <input ref={address} type="text" id='address' placeholder='Enter your address' required/>
                </div>
              </div>

              <div className='bottom'>
                <div className='input-container'>
                  <label htmlFor="city">City</label>
                  <input ref={city} type="text" id='city' placeholder='Enter your city' required/>
                </div>
                <div className='input-container'>
                  <label htmlFor="postcode">Postcode</label>
                  <input ref={postcode} type="text" id='postcode' placeholder='Enter your postcode' required/>
                </div>
              </div>

              <div className='news-check'>
                <input className='news-checkbox' type="checkbox" id='news'/>
                <label htmlFor="news">Please send me latest news and updates</label>
              </div>
            </div>

            <div className={`invalid-container ${invalidActive && 'active'}`}>
              <div className={invalidActive ? 'booking__invalid active': 'booking__invalid'}>
                  <p>Please Enter All Fields!</p>
                  <i className="fa-solid fa-xmark" onClick={() => setInvalidIsActive(false)}></i>
              </div>
            </div>

            <div className='submit-container'>
              <button type='submit' onClick={checkForm}>Reserve Now</button>
            </div>
          </form>
          <div className={`booking-successful ${successful && 'successful'}`}>
            <i className="fa-solid fa-circle-check"></i>
            <p>Booking Successful</p>
            <button onClick={() => {setActivePopUp(false); cleanForm()}}>Close</button>
          </div>
        </div>
      </div>

    </div>
  )
}
