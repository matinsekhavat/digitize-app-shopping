import React from "react";
import { FaPhoneAlt } from "react-icons/fa";
function ContactUs() {
  return (
    <div className="flex flex-col gap-4  text-sm pl-2 sm:text-base md:items-end">
      {/* Number */}
      <div className="flex items-center gap-2">
        <span>021-123456</span>
        <span className="text-sm text-red-600">
          <FaPhoneAlt />
        </span>
      </div>
      {/* Email */}
      <span>Matinsekhavat20@gmail.com</span>
      <p className="font-semibold">
        ساعات کاری <time className="text-orange-500">8صبح تا 22 شب</time> هر روز
        هفته
      </p>
    </div>
  );
}

export default ContactUs;
