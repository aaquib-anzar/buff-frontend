import React from "react";

const Hero = () => {
  return (
    <section
      className="relative overflow-hidden border rounded-xl w-full h-[90vh] bg-cover bg-center pt-16"
      style={{ backgroundImage: "url('/images/Car2.jpg')" }}
    >
      <div className="font-michroma absolute bottom-6 right-6 sm:bottom-10 sm:right-10 text-right max-w-full">
        <h1 className="text-amber-200 text-[25px] sm:text-6xl lg:text-8xl font-extrabold leading-tight">
          DETAILING STUDIO
        </h1>
        <p className="text-amber-200 text-sm sm:text-base lg:text-xl">
          Shine. Because your car deserves it.
        </p>
      </div>
    </section>
  );
};

export default Hero;
