import React from "react";
import "../../assets/styles/_HeroSection.style.scss";
import {} from "@fortawesome/free-solid-svg-icons";
import HeroSlider, { Slide, MenuNav } from "hero-slider";
import heroSlider1 from "../../assets/images/hero-slider1.jpg";
import heroSlider2 from "../../assets/images/hero-slider2.jpg";
import heroSlider3 from "../../assets/images/hero-slider3.jpg";
import heroSlider4 from "../../assets/images/hero-slider4.jpg";

export default function BasicSlider() {
  return (
    <HeroSlider
      className="pb-16"
      height={"100vh"}
      autoplay
      controller={{
        initialSlide: 1,
        slidingDuration: 500,
        slidingDelay: 100,
      }}
    >
      <Slide
        shouldRenderMask
        label="Seating"
        background={{
          backgroundImageSrc: heroSlider1,
        }}
      />

      <Slide
        shouldRenderMask
        label="Living"
        background={{
          backgroundImageSrc: heroSlider2,
        }}
      />

      <Slide
        shouldRenderMask
        label="Bedroom"
        background={{
          backgroundImageSrc: heroSlider3,
        }}
      />

      <Slide
        shouldRenderMask
        label="Outdoor"
        background={{
          backgroundImageSrc: heroSlider4,
        }}
      />

      <MenuNav />
    </HeroSlider>
  );
}
