import React from 'react'
import SubPageBanner from '../components/SubPageBanner'
import { useLocation } from 'react-router-dom'
import People from '../components/sub-components/People';
import CallBanner from '../components/sub-components/CallBanner';

export default function Team() {
  const url = useLocation().pathname;

  return (
    <>
      <SubPageBanner pageTitle={url} additionalStartText='our'/>
      <People />
      <CallBanner />
    </>
  )
}
