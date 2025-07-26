import React, { useState } from "react";
import { brainwaveSymbol, check } from "../assets";
import { collabApps, collabContent, collabText } from "../constants";
import Button from "./Button";
import Section from "./Section";
import { LeftCurve, RightCurve } from "./design/Collaboration";

const SLOT_DURATION = 60; // minutes
const SLOT_PRICES = {
  1: 999,
  2: 1800,
  4: 3500,
};

const Collaboration = () => {
  const [selectedSlots, setSelectedSlots] = useState([]);
  const [totalAmount, setTotalAmount] = useState(0);

  const timeSlots = [
    "06:00",
    "07:00",
    "08:00",
    "09:00",
    "10:00",
    "11:00",
    "12:00",
    "13:00",
    "14:00",
    "15:00",
    "16:00",
    "17:00",
    "18:00",
    "19:00",
    "20:00",
    "21:00",
    "22:00",
    "23:00",
  ];

  const handleSlotSelect = (slot) => {
    const updatedSlots = selectedSlots.includes(slot)
      ? selectedSlots.filter((s) => s !== slot)
      : [...selectedSlots, slot].sort();

    setSelectedSlots(updatedSlots);
    calculatePrice(updatedSlots);
  };

  const calculatePrice = (slots) => {
    if (slots.length === 0) return setTotalAmount(0);

    const sortedSlots = slots.sort();
    let total = 0;
    let i = 0;

    while (i < sortedSlots.length) {
      let j = i;
      while (
        j + 1 < sortedSlots.length &&
        timeSlots.indexOf(sortedSlots[j + 1]) ===
          timeSlots.indexOf(sortedSlots[j]) + 1
      ) {
        j++;
      }
      const blockSize = j - i + 1;

      if (blockSize >= 4) {
        total += SLOT_PRICES[4];
        i += 4;
      } else if (blockSize >= 2) {
        total += SLOT_PRICES[2];
        i += 2;
      } else {
        total += SLOT_PRICES[1];
        i += 1;
      }
    }

    setTotalAmount(total);
  };

  const isSelected = (slot) => selectedSlots.includes(slot);

  // Simple Card and Button components for this file
  const Card = ({ children, ...props }) => (
    <div {...props}>{children}</div>
  );
  const CardContent = ({ children, ...props }) => (
    <div {...props}>{children}</div>
  );
  const Button = ({ children, ...props }) => (
    <button {...props}>{children}</button>
  );

  return (
    <Section id="collaboration">
      <div className="max-w-4xl mx-auto mt-16">
        <h1 className="text-4xl font-bold text-center mb-8">
          Book Your Turf Slot
        </h1>
        <p className="text-center text-sm text-purple-300 mb-10">
          Choose hourly slots. Discounts apply automatically for 2hr and 4hr
          consecutive bookings.
        </p>

        <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 gap-4 mb-8">
          {timeSlots.map((slot) => (
            <Card
              key={slot}
              onClick={() => handleSlotSelect(slot)}
              className={`cursor-pointer transition-all duration-200 border-2 rounded-xl shadow-md hover:scale-105 p-2 text-center 
                ${
                  isSelected(slot)
                    ? "bg-purple-600 border-purple-400 text-white"
                    : "bg-white/10 border-white/20 text-purple-200"
                }`}
            >
              <CardContent className="p-2 font-mono font-semibold">
                {slot}
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center text-lg font-medium mb-4">
          Total Amount:{" "}
          <span className="text-green-400 font-bold">₹{totalAmount}</span>
        </div>

        <div className="flex justify-center">
          <Button className="bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 hover:from-purple-600 hover:to-red-600 text-white font-semibold py-3 px-6 rounded-lg shadow-md transition-all duration-200">
            Book Now
          </Button>
        </div>
      </div>
    </Section>
  );
};

export default Collaboration;
