import React from "react";
import HeroBanner from "../components/sub-components/HeroBanner";
import Booking from "../components/sub-components/Booking";
import PlanTripBanner from "../components/sub-components/PlanTripBanner";
import Fleet from "../components/sub-components/Fleet";
import BasicBanner from "../components/sub-components/BasicBanner";
import ChooseUs from "../components/sub-components/ChooseUs";
import Review from "../components/sub-components/Review";
import Faq from "../components/sub-components/Faq";
import Download from "../components/sub-components/Download";
import ScrollToTop from "../components/util/ScrollToTop";

export default function Home() {
  return (
    <>
      <HeroBanner />
      <Booking />
      <PlanTripBanner />
      <Fleet />
      <BasicBanner />
      <ChooseUs />
      <Review />
      <Faq />
      <Download />
      <ScrollToTop />
    </>
  );
}
