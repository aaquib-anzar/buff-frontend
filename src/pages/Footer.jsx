import React from "react";
import { FaInstagram, FaFacebookF, FaGithub } from "react-icons/fa";
import {
  FaSquareXTwitter,
  FaRegClock,
  FaPhone,
  FaLocationDot,
} from "react-icons/fa6";
import { MdAlternateEmail } from "react-icons/md";
import { Link as ScrollLink } from "react-scroll";
import { Link as RouterLink } from "react-router-dom";

function Footer() {
  return (
    <div className="bg-white dark:bg-black min-h-[20rem] border rounded-t-xl mx-2 overflow-hidden">
      <div
        className="flex flex-wrap md:flex-nowrap items-start my-4 sm:my-8 lg:my-12
               mx-4 sm:mx-10 lg:mx-20 xl:mx-40 gap-10"
      >
        <div className="w-full md:w-1/2">
          <h1 className="text-xl sm:text-2xl lg:text-3xl font-pacifico font-bold text-black dark:text-white">
            Buff & Beyond
          </h1>
        </div>

        <div className="w-full md:w-1/2 flex flex-col sm:flex-row gap-10 sm:gap-16 font-delius text-lg">
          <div className="flex-1">
            <h3 className="font-extrabold mb-2 text-black dark:text-white">
              USEFUL LINKS
            </h3>
            <ul className="space-y-1 text-gray-700 dark:text-gray-300 cursor-pointer font-bold">
              <li>
                <ScrollLink
                  to="services"
                  smooth={"easeInOutQuart"}
                  duration={1500}
                  offset={-70}
                >
                  SERVICES
                </ScrollLink>
              </li>
              <li><RouterLink to="/bookslot">BOOK APPOINTMENT</RouterLink></li>
              <li>CONTACT US</li>
              <li>PRIVACY POLICY</li>
            </ul>
          </div>

          <div className="flex-1">
            <h3 className="mb-2 text-black dark:text-white font-extrabold">
              CONTACT INFO
            </h3>
            <ul className="space-y-1 text-gray-700 dark:text-gray-300 font-bold">
              <li className="flex items-center gap-4">
                <FaRegClock /> Mon-Sat 10:00 AM - 10:00 PM
              </li>
              <li className="flex items-center gap-4">
                <FaPhone /> +91 9876543210
              </li>
              <li className="flex items-center gap-4">
                <MdAlternateEmail /> info@example.com
              </li>
              <li className="flex items-center gap-4">
                <FaLocationDot /> 123 Street, City
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Divider */}
      <hr className="border-black dark:border-gray-700 mx-4 sm:mx-10 lg:mx-20 xl:mx-40 -mt-4 sm:-mt-3 lg:-mt-2" />
      <div className="flex justify-between mx-4 sm:mx-10 lg:mx-20 xl:mx-40 mt-2">
        <p className="text-black dark:text-white font-delius font-bold">
          &copy;2025 Buff & Beyond. All Rights Reserved
        </p>
        <ul className="flex gap-4  text-gray-700 dark:text-gray-300">
          <li className="p-1 rounded-full hover:bg-gray-200 dark:hover:bg-gray-800 cursor-pointer">
            <FaInstagram size={20} />
          </li>
          <li className="p-1 rounded-full hover:bg-gray-200 dark:hover:bg-gray-800 cursor-pointer">
            <FaFacebookF size={20} />
          </li>
          <li className="p-1 rounded-full hover:bg-gray-200 dark:hover:bg-gray-800 cursor-pointer">
            <FaGithub size={20} />
          </li>
          <li className="p-1 rounded-full hover:bg-gray-200 dark:hover:bg-gray-800 cursor-pointer">
            <FaSquareXTwitter size={20} />
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Footer;
