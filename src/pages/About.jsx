import React from "react";

function About() {
  return (
    <>
      <div className="flex flex-col lg:flex-row items-center justify-between font-delius overflow-x-hidden m-6 sm:m-10 lg:m-20 p-6 sm:p-6 lg:p-10 gap-10 dark:border dark:rounded-lg">
        {/* Text Section */}
        <div className="flex-1">
          <h1 className="font-bold text-3xl sm:text-5xl lg:text-6xl leading-tight text-gray-900 dark:text-gray-600">
            Welcome to
            <span className="block">Buff & Beyond Detailing Studio</span>
          </h1>
          <p className="mt-10 font-medium text-lg sm:text-xl lg:text-2xl leading-relaxed max-w-2xl text-gray-700 dark:text-gray-500">
            Welcome to Buff & Beyond Detailing Studio, where precision and
            passion meet automotive excellence. Our skilled technicians are
            dedicated to enhancing your vehicle&apos;s appearance with
            personalized, top-tier care. Whether it&apos;s a flawless exterior
            polish, deep interior cleaning, or premium ceramic coating, every
            service is designed to restore your car&apos;s original glory. Step
            into our modern detailing studio and experience meticulous
            craftsmanship, quality products, and unmatched attention to detail.
            At Buff & Beyond, your car deserves nothing less than brilliance.
          </p>
        </div>

        {/* Image Section */}
        <div className="flex-1">
          <img
            src="/images/Car4.jpg"
            alt="Car Detailing"
            className="w-full max-h-[600px] rounded-xl shadow-lg"
          />
        </div>
      </div>
    </>
  );
}

export default About;
