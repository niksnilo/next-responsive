import React from "react";

const Card = () => {
  return (
    <div className="bg-white rounded-md md:w-1/3 shadow-xl px-3 py-5 m-4 flex flex-col md:flex-row items-center">
      <div className="flex-none">
        <img
          src="https://www.w3schools.com/howto/img_avatar.png"
          className="rounded-full h-16 md:h-28 w-16 md:w-28"
        />
      </div>
      <div className="p-3 text-center md:text-left">
        <p className="font-bold text-base md:text-lg text-blue-500">
          John Snow
        </p>
        <span className="font-normal leading-none text-sm md:text-base text-gray-700 italic">
          Lorem ipsum dolor sit amet, consectetuj szqpe yuqw a ui.
        </span>
      </div>
    </div>
  );
};

export default Card;
