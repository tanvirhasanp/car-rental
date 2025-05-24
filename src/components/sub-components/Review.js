import React from 'react'
import User1 from '../../images/testimonials/pfp1.jpg'
import User2 from '../../images/testimonials/pfp2.jpg'

export default function Review() {

  const reviewers = [
    {
      name: "Harry Potter",
      message: "We rented a car from this website and had an amazing experience! The booking was easy and the rental rates were very affordable. ",
      image: User1,
      imageAlt: "Harry Potter Profile pic",
      location: "Privet Drive",
      userId: 1
    },
    {
      name: "Ron Weasley",
      message: "The car was in great condition and made our trip even better. Highly recommend for this car rental website!",
      image: User2,
      imageAlt: "Ron Weasley Profile pic",
      location: "The Burrow",
      userId: 2
    }
  ]

  return (
    <section className='reviews-section'>
      <div className='reviews-section__container'>

        <div className='reviews-section__container__heading'>
          <h3>Reviewed by People</h3>
          <h2>Client's Testimonials</h2>
          <p>Discover the positive impact we've made on the our clients by reading through their testimonials. Our clients have experienced our service and results, and they're eager to share their positive experiences with you.</p>
        </div>

        <div className='review-container'>
          {reviewers.map(user => {
            return(
              
                <div key={user.userId} className='review-container__card'>

                  <p className='review-container__card__msg'>"{user.message}"</p>

                  <div className='review-container__card__user'>

                    <div className='review-container__card__user__details'>
                      <img src={user.image} alt={user.imageAlt} />
                      <span>
                        <h4 className='reviewer-name'>{user.name}</h4>
                        <p>{user.location}</p>
                      </span>
                    </div>

                    <i className='fa-solid fa-quote-right'></i>
                  </div>

                </div>
              
            )
          })}
        </div>
  

      </div>
    </section>
  )
}
