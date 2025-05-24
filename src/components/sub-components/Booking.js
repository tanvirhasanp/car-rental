import React, { useContext, useRef, useState } from 'react'
import { CarPick } from '../../context/SelectedCarContext';
import BookingPopUp from './BookingPopUp';
import { BookingFormPopUp } from '../../context/Popup';
import { FleetArray } from '../../context/FleetContext';

export default function Booking() {

  const { carPicked, setCarPicked } = useContext(CarPick);
  const { setActivePopUp } = useContext(BookingFormPopUp);
  const { cars, rentalLocations } = useContext(FleetArray);

  const [ invalidActive, setInvalidIsActive ] = useState(false);

  const [ pickUpLocation, setPickUpLocation ] = useState();
  const [ dropOffLocation, setDropOffLocation ] = useState();
  const [ pickUpDate, setPickUpDate ] = useState();
  const [ dropOffDate, setDropOffDate ] = useState();
  const [ carImg, setCarImg ] = useState();
  const [ errorMsg, setErrorMsg ] = useState();


  const invalidContainer = useRef();


  function closeInvalidContainer() {
    setInvalidIsActive(false);
  }

  function checkField(e) {
      if (!carPicked || !pickUpLocation|| !dropOffLocation|| !pickUpDate || !dropOffDate ) {
        e.preventDefault()
        setErrorMsg('Please Enter All Fields!');
        setInvalidIsActive(true);
        return
    } else if (pickUpDate >= dropOffDate) {
        e.preventDefault()
        setErrorMsg('Drop-off date must be later than pick-up date');
        setInvalidIsActive(true);
        return
    }

    if (carPicked) {
        setCarImg(cars.filter(item => item.name === carPicked)[0].image)
    }

    e.preventDefault();
    setInvalidIsActive(false);
    setActivePopUp(true);

    const vw = Math.max(document.documentElement.clientWidth || 0, window.innerWidth || 0)
    if (vw > 600) {
        document.documentElement.style.overflow = 'hidden';
        document.body.scroll = "no";
    }
  }
  

  return (
    <section className='booking-section' id='booking-section'>
        <div ref={invalidContainer} className='booking'>
            <h2>Book a car</h2>
            <div className={`invalid-container ${invalidActive && 'active'}`}>
                <div className={invalidActive ? 'booking__invalid active': 'booking__invalid'}>
                    <p>{errorMsg}</p>
                    <i className="fa-solid fa-xmark" onClick={closeInvalidContainer}></i>
                </div>
            </div>
            <form className='bookingForm' noValidate>
                <div className='bookingForm__element'>
                    <div>
                        <i className='fa-solid fa-car'></i>
                        <label htmlFor='carType'>Select Your Car Type <b>*</b></label>
                    </div>
                    <select name="" id="carType" value={carPicked} onChange={e => setCarPicked(e.target.value)} required >
                        <option value="">Select your car type</option>
                        {cars.map(car => {
                            return (
                                <option key={car.id} value={car.name}>{car.name}</option>
                            )
                        })}
                    </select>
                </div>
                <div className='bookingForm__element'>
                    <div>
                        <i className='fa-solid fa-location-dot'></i>
                        <label htmlFor='pickUpLocation'>Pick-Up <b>*</b></label>
                    </div>
                    <select  name="" id="pickUpLocation" onChange={(e) => setPickUpLocation(e.target.value)} required>
                        <option value="">Select Pick Up Location</option>
                        {rentalLocations.map(location => {
                            return (
                                <option key={location.id} value={location.location}>{location.location}</option>
                            )
                        })}
                    </select>
                </div>
                <div className='bookingForm__element'>
                    <div>
                        <i className='fa-solid fa-location-dot'></i>
                        <label htmlFor='dropOffLocation'>Drop-Off <b>*</b></label>
                    </div>
                    <select name="" id="dropOffLocation" onChange={(e) => setDropOffLocation(e.target.value)} required>
                        <option value="">Select Drop Up Location</option>
                        {rentalLocations.map(location => {
                            return (
                                <option key={location.id} value={location.location}>{location.location}</option>
                            )
                        })}
                    </select>
                </div>
                <div className='bookingForm__element'>
                    <div>
                        <i className='fa-regular fa-calendar-days '></i>
                        <label htmlFor='pickUpDate'>Pick-Up <b>*</b></label>
                    </div>
                    <input type="date" id='pickUpDate' onChange={(e) => setPickUpDate(e.target.value)} required/>
                </div>
                <div className='bookingForm__element'>
                    <div>
                        <i className='fa-regular fa-calendar-days '></i>
                        <label htmlFor='dropOffDate'>Drop-Off <b>*</b></label>
                    </div>
                    <input type="date" id='dropOffDate' onChange={(e) => setDropOffDate(e.target.value)} required/>
                </div>
                <button onClick={checkField} type='submit'>Search</button>
            </form>
        </div>

        <BookingPopUp pickUpDate={pickUpDate} dropOffDate={dropOffDate} pickupLocation={pickUpLocation} dropOffLocation={dropOffLocation} carName={carPicked} carImg={carImg}/>
    </section>
  )
}
