import { FC } from "react";
import HomeHero from "../home/home-hero";
import OurServicesList from "../home/our-services-list";
import WhatOurCustomerSays from "../home/what-our-customer-says";
import Footer from "../footer";

interface HomePageProps {}

const HomePage: FC<HomePageProps> = ({}) => {
  return (
    <div className="h-full w-full">
      <HomeHero />
      <OurServicesList />
      <WhatOurCustomerSays />
      <Footer />
    </div>
  );
};

export default HomePage;
