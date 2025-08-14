import React from "react";
import Hero from "./Hero";
import About from "./About";
import Services from "./Services";
import Testimonials from "./Testimonials";
import { Element } from "react-scroll";

function Home() {
  return (
    <>
      <Element name="home">
        <Hero />
      </Element>
      <Element name="about">
        <About />
      </Element>
      <Element name="services">
        <Services />
      </Element>
      <Element name="testimonials">
        <Testimonials />
      </Element>
    </>
  );
}

export default Home;
