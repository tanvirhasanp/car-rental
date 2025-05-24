import React, { useContext, useState } from 'react'
import { FleetArray } from '../../context/FleetContext'
import { CarPick } from '../../context/SelectedCarContext';

export default function Fleet() {

  const { cars } = useContext(FleetArray);
  const { setCarPicked } = useContext(CarPick);

  const [ currentCar, setCurrentCar ] = useState(cars[0]);
  const [ selectedCar, setSelectedCar ] = useState(cars[0].name);

  function setCar(e) {
    setCurrentCar(cars.filter(car => car.name === e.target.value)[0])
    setSelectedCar(e.target.value)
  }

  function chosenCar() {
    setCarPicked(selectedCar);
  }

  return (
    <section className='fleet-section'>
      <div className='fleet-section__container'>
        <div className='fleet-heading-container'>
          <h3>Vehicle Models</h3>
          <h2>Our rental fleet</h2>
          <p>Choose from a variety of our amazing vehicles to rent for your next adventure or business trip</p>
        </div>

        <div className='fleet-car-container'>
          <div className='fleet-car-container__buttons'>
            {cars.map(car => <button className={currentCar.name === car.name ? "active":null} key={car.id} onClick={setCar} value={car.name}>{car.name}</button>)}
          </div>
          <div className='image-container'>
            <img src={currentCar.image} alt={currentCar.name} />
          </div>
          <div className='details-container'>
            <div className="pricePerDay-container">
              <span>৳{currentCar.price} </span> &emsp; / rent per day 
            </div>
            <div className='detail-table'>
              <span className='table-option'>Model</span>
              <span>{currentCar.model}</span>
            </div>
            <div className='detail-table'>
              <span className='table-option'>Mark</span>
              <span>{currentCar.mark}</span>
            </div>
            <div className='detail-table'>
              <span className='table-option'>Year</span>
              <span>{currentCar.year}</span>
            </div>
            <div className='detail-table'>
              <span className='table-option'>Doors</span>
              <span>{currentCar.doors}</span>
            </div>
            <div className='detail-table'>
              <span className='table-option'>AC</span>
              <span>{currentCar.ac ? "Yes":"No"}</span>
            </div>
            <div className='detail-table'>
              <span className='table-option'>Transmission</span>
              <span>{currentCar.transmission}</span>
            </div>
            <div className='detail-table'>
              <span className='table-option'>Fuel</span>
              <span>{currentCar.fuel}</span>
            </div>
            <a href="#booking-section" onClick={chosenCar}>Reserve Now</a>
          </div>
        </div>

      </div>
    </section>
  )
}
