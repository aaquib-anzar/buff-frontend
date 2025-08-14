import React from "react";

function Services() {
  return (
    <>
      <div className="flex justify-center font-delius">
        <h1 className="font-bold text-3xl sm:text-5xl lg:text-6xl leading-tight text-gray-900 dark:text-gray-600">
          OUR SERVICES
        </h1>
      </div>
      <div className="flex flex-wrap justify-center mx-auto p-4 sm:p-8 lg:p-10">
        {[
          { src: "ppf.jpg", label: "PPF" },
          { src: "detailing.jpg", label: "Detailing" },
          { src: "wash.jpg", label: "Foam Wash" },
          { src: "interior.jpg", label: "Interior Cleaning " },
          { src: "ceramic.jpg", label: "Ceramic Coating" },
        ].map((car, idx) => (
          <div className="relative group overflow-hidden">
            <img
              key={idx}
              src={`/images/${car.src}`}
              alt={car.label}
              aria-label="Detailed Car Image"
              className="max-w-full sm:w-[300px] lg:w-[350px] max-h-[600px] object-cover"
            />
            <div className="absolute inset-0 bg-black/20 flex items-center justify-center translate-y-full group-hover:translate-y-0 transition-all duration-300 ease-out">
              <p className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-amber-400 font-michroma font-bold px-2 sm:px-4 py-3 sm:py-5 mx-2">
                {car.label}
              </p>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

export default Services;
