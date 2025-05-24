import React, { useContext } from 'react'
import { FleetArray } from '../../context/FleetContext'
import { useNavigate } from 'react-router-dom';
import { CarPick } from '../../context/SelectedCarContext';

export default function VehicleGrid() {

  const { cars } = useContext(FleetArray);
  const { setCarPicked } = useContext(CarPick);

  let navigate = useNavigate();

  function navigateToBookingSection(car) {
    navigate('/#booking-section');
    setCarPicked(car);
  }

  return (
    <section className='vehicle-grid-section'>
      <div className='vehicle-grid-section__container'>

        {cars.map(car => {
          
          return(
            <div className='vehicle-card' key={car.id}>

              <div className='vehicle-card__image-container'>
                <a href='/#booking-section' onClick={() => {navigateToBookingSection(car.name)}}><img src={car.image2} alt="" /></a>
              </div>

              <div className='vehicle-card__details-container'>
                <div className='vehicle-card__details-container__top'>
                  <div>
                    <h3>{car.model}</h3>
                    <i className='fa-solid fa-star'></i>
                    <i className='fa-solid fa-star'></i>
                    <i className='fa-solid fa-star'></i>
                    <i className='fa-solid fa-star'></i>
                    <i className='fa-solid fa-star'></i>
                  </div>
                  <div>
                    <h3>৳{car.price}</h3>
                    <span>per day</span>
                  </div>
                </div>

                <div className='vehicle-card__details-container__middle'>
                  <div>
                    <i className='fa-solid fa-car-side'></i>
                    <span>{car.mark}</span>
                  </div>
                  <div>
                    <span>{car.doors}</span>
                    <i className="fa-solid fa-door-open"></i>
                  </div>
                  <div>
                    <i className="fa-solid fa-gear"></i>
                    <span>{car.transmission}</span>
                  </div>
                  <div>
                    <span>{car.fuel}</span>
                    <i className="fa-solid fa-gas-pump"></i>
                  </div>
                </div>

                <a className='book-button' href='/#booking-section' onClick={() => {navigateToBookingSection(car.name)}}>Book Now</a>
              </div>
            </div>
          )
        
        })}
        

        


      </div>
    </section>
  )
}
