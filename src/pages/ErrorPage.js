import React from 'react'
import { Link } from "react-router-dom"

export default function ErrorPage() {
  return (
    <section className='subPage-banner error'>
      <div className='bg-overlay'></div>
      <div className='subPage-banner__container'>
        <div className='subPage-banner__container__heading error'>
          <i class="fa-regular fa-face-frown"></i>
          <h2>404 Error</h2>
          <h3>Page Not Found!</h3>
          <Link to='/'>Back To Home</Link>
        </div>
      </div>
    </section>
  )
}
