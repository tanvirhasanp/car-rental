import React from 'react'

export default function SubPageBanner({ pageTitle, additionalStartText, additionalEndText }) {

  let startText = additionalStartText ? additionalStartText.charAt(0).toUpperCase() + additionalStartText.slice(1) : "";
  let endText = additionalEndText ? additionalEndText.charAt(0).toUpperCase() + additionalEndText.slice(1) : "";


  return (
    <section className='subPage-banner'>
      <div className='bg-overlay'></div>
      <div className='subPage-banner__container'>
        {pageTitle && <div className='subPage-banner__container__heading'>
          <h3>{startText} {pageTitle.slice(1).charAt(0).toUpperCase() + pageTitle.slice(2)} {endText}</h3>
          <h4>Home {pageTitle.charAt(0) + " " +startText + " " + pageTitle.charAt(1).toUpperCase() + pageTitle.slice(2) + " " + endText}</h4>
        </div>}
      </div>
    </section>
  )
}
