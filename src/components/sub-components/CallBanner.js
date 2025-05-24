import React from 'react'

export default function CallBanner() {
  return (
    <section className='callBanner-section'>
      <div className='callBanner-section__overlay'></div>
      <div className='callBanner-section__container'>
        <h2>Book a car by getting in touch with us</h2>
        <span>
          <i className='fa-solid fa-phone'></i>
          <a href='tel:123456789'>+8801756-928918</a>
        </span>
      </div>
    </section>
  )
}
