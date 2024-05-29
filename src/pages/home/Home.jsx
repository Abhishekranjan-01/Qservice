import ContentWrapper from "@/components/contentWrapper/ContentWrapper";
import React from "react";
import Herosection from "./components/hero section/Herosection";
import OurService from "./components/ourService/OurService";
import Benefits from "./components/benefits/Benefits";
import HomeRepair from "./components/homeRepair/HomeRepair";

function Home() {
  return (
    <ContentWrapper>
      <Herosection />
      <OurService />
      <Benefits />
      <HomeRepair />
    </ContentWrapper>
  );
}

export default Home;
