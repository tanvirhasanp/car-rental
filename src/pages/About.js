import React from 'react'
import SubPageBanner from '../components/SubPageBanner'
import { useLocation } from 'react-router-dom'
import AboutCompany from '../components/sub-components/AboutCompany'
import PlanTripBanner from '../components/sub-components/PlanTripBanner'
import CallBanner from '../components/sub-components/CallBanner'

export default function About() {
  const url = useLocation().pathname;
  return (
    <>
      <SubPageBanner pageTitle={url} />
      <AboutCompany />
      <PlanTripBanner />
      <CallBanner />
    </>
  )
}
