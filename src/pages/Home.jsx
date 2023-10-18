import React from "react";
import HeroSection from "../components/HeroSection";
import SaleFurniture from "../components/SaleFurniture";
import SolveFurniture from "../components/SolveFurniture";
import Collection from "../components/Collection";
import Accordion from "../components/Accordion";
import MoveDesign from "../components/MoveDesign";
import Testimonial from "../components/Testimonial";
import ModalAdvertising from "../components/ModalAdvertising";
import ModalSale from "../components/ModalSale";

const Home = () => {
  return (
    <>
      <HeroSection />
      <SaleFurniture />
      <SolveFurniture />
      <Collection />
      <Accordion />
      <Testimonial />
      <MoveDesign />
      <ModalAdvertising />
      <ModalSale />
    </>
  );
};

export default Home;
