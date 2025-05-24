import React from 'react'
import planCar from '../../images/plan/icon1.png'
import planOperator from '../../images/plan/icon2.png'
import planDrive from '../../images/plan/icon3.png'

export default function PlanTripBanner() {
  return (
    <section className="planTrip">
        <div className='planTrip-container'>
            <div className='planTrip-container__title'>
                <h3>Plan your trip now</h3>
                <h2>Quick & easy car rental</h2>
            </div>
            <div className='planTrip-container__details'>
                <div>
                    <img src={planCar} alt="plan car icon" />
                    <h3>Select Car</h3>
                    <p>We offers a big range of vehicles for all your driving needs. We have the perfect car to meet your needs</p>
                </div>
                <div>
                    <img src={planOperator} alt="plan operator icon" />
                    <h3>Contact Operator</h3>
                    <p>Our knowledgeable and friendly operators are always ready to help with any questions or concerns</p>
                </div>
                <div>
                    <img src={planDrive} alt="plan drive icon" />
                    <h3>Let's Drive</h3>
                    <p>Whether you're hitting the open road, we've got you covered with our wide range of cars</p>
                </div>
            </div>
        </div>
    </section>
  )
}
