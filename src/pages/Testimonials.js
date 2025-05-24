import React from 'react'
import SubPageBanner from '../components/SubPageBanner'
import Review from '../components/sub-components/Review'
import { useLocation } from 'react-router-dom'
import CallBanner from '../components/sub-components/CallBanner'

export default function Testimonials() {
  const url = useLocation().pathname;

  return (
    <>
      <SubPageBanner pageTitle={url}/>
      <Review />
      <CallBanner />
    </>
  )
}
