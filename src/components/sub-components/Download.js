import React from 'react'
import googlePlay from '../../images/download/googleapp.svg'
import appStore from '../../images/download/appstore.svg'


export default function Download() {
  return (
    <section className='download-section'>
      <div className='download-section__container'>
        <div className='text-container'>
          <h2>Download our app to get most out of it</h2>
          <p>Get the best prices in our exclusive in-app booking, with special discount for first time users and long term users! Why wait, download now and we will bring the car to you!</p>
          <img src={googlePlay} alt="google play icon" />
          <img src={appStore} alt="app store icon" />
        </div>
      </div>
    </section>
  )
}
