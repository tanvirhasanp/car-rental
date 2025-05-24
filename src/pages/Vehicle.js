import React from 'react'
import SubPageBanner from '../components/SubPageBanner'
import { useLocation } from 'react-router-dom'
import VehicleGrid from '../components/sub-components/VehicleGrid';

export default function Vehicle() {

  const url = useLocation().pathname;

  return (
    <>
      <SubPageBanner pageTitle={url} additionalEndText='models' />
      <VehicleGrid />
    </>
  )
}
