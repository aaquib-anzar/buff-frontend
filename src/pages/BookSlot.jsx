import React, { useState } from "react";
import axios from "axios";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

export default function BookSlot() {
  const [customerName, SetCustomerName] = useState("");
  const [phoneNumber, SetPhoneNumber] = useState("");
  const [email, SetEmail] = useState("");
  const [service, setService] = useState("");
  const [timeSlot, setTimeSlot] = useState("");
  const [type, setType] = useState("");
  const [loading, setLoading] = useState(false);
  const timeslots = [
    "11:00 AM",
    "12:00 PM",
    "1:00 PM",
    "2:00 PM",
    "3:00 PM",
    "4:00 PM",
    "5:00 PM",
    "6:00 PM",
  ];
  const navigate = useNavigate();
  const baseurl = import.meta.env.VITE_API_BASE_URL
  const razorpay_key = import.meta.env.VITE_RAZORPAY_KEY_ID
  console.log("razorpay_key", razorpay_key, baseurl)
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      setLoading(true);
      const { data } = await axios.post(`${baseurl}/create-order`, {
        amount: "499",
      });

      const options = {
        key: razorpay_key,
        amount: data.order.amount,
        currency: "INR",
        order_id: data.order.id,
        name: "BUFF & BEYOND",
        description: "Car service payment",
        handler: async function (response) {
          try {
            const res = await axios.post(
              `${baseurl}/bookslot`,
              { customerName, email, service, timeSlot, type },
              { withCredentials: true }
            );
            toast.success(res.data.message);
            navigate("/");
          } catch (error) {
            toast.error(error.response?.data?.message || "Booking failed");

          }
          
        },
        prefill:{
          name:customerName,
          email: email
        }
      };
      const razor = new window.Razorpay(options)
      razor.open()
      setLoading(false);
    } catch (error) {
      console.log("Form submission error", error);
      toast.error("Booking failed");
    }
  };
  return (
    <div
      className="min-h-[calc(100vh-8rem)] /* full viewport minus navbar+footer height (2 * 4rem = 8rem) */
                    flex items-center justify-center
                    p-4"
    >
      <div className="w-full max-w-lg p-6 border rounded-2xl border-black dark:border-white bg-white dark:bg-black shadow-lg">
        <h1 className="text-center text-xl text-black dark:text-white">
          ENQUIRY FORM
        </h1>
        <form
          className="flex flex-col gap-4 text-black dark:text-white"
          onSubmit={handleSubmit}
        >
          <label htmlFor="name">Name</label>
          <input
            id="name"
            value={customerName}
            onChange={(e) => SetCustomerName(e.target.value)}
            className="border rounded-lg p-2"
            required
          />

          <label htmlFor="number">Phone Number</label>
          <input
            id="number"
            value={phoneNumber}
            onChange={(e) => SetPhoneNumber(e.target.value)}
            className="border rounded-lg p-2"
            required
          />

          <label htmlFor="email">Email</label>
          <input
            id="email"
            value={email}
            onChange={(e) => SetEmail(e.target.value)}
            className="border rounded-lg p-2"
            required
          />

          <label htmlFor="service">Service Type</label>
          <select
            id="service"
            value={service}
            onChange={(e) => setService(e.target.value)}
            className="border rounded-lg p-2"
            required
          >
            <option disabled value="">
              Select Service
            </option>
            <option value="PPF">PPF</option>
            <option value="Detailing">Detailing</option>
            <option value="Wash">Foam Wash</option>
            <option value="Interior">Interior Cleaning</option>
            <option value="Coating">Ceramic Coating</option>
          </select>

          <label htmlFor="timeSlot" className="font-medium">
            Time Slot
          </label>

          <div className="grid grid-cols-4">
            {timeslots.map((slot, idx) => (
              <button
                key={idx}
                value={timeSlot}
                type="button"
                onClick={() => setTimeSlot(slot)}
                className={`px-4 py-2 rounded border transition ${
                  timeSlot === slot
                    ? "bg-blue-600 text-white border-blue-600"
                    : "bg-white text-gray-800 border-gray-300 hover:bg-gray-100"
                }`}
              >
                {slot}
              </button>
            ))}
          </div>

          <label>Car Type</label>
          <div className="flex flex-wrap md:flex-nowrap gap-4">
            <input
              type="radio"
              id="Hatchback"
              value="Hatchback"
              checked={type === "Hatchback"}
              onChange={(e) => setType(e.target.value)}
              required
            />
            <label htmlFor="Hatchback">HatchBack</label>
            <input
              type="radio"
              id="Sedan"
              value="Sedan"
              checked={type === "Sedan"}
              onChange={(e) => setType(e.target.value)}
              required
            />
            <label htmlFor="Sedan">Sedan</label>
            <input
              type="radio"
              id="SUV"
              value="SUV"
              checked={type === "SUV"}
              onChange={(e) => setType(e.target.value)}
              required
            />
            <label htmlFor="SUV">SUV</label>
          </div>

          <label>Price</label>
          <input type="number" value="499" className="border rounded-lg p-2" />

          <button
            disabled={loading}
            type="submit"
            className="mt-4 bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition"
          >
            {loading ? "Booking ..." : "Book Slot"}
          </button>
        </form>
      </div>
    </div>
  );
}
