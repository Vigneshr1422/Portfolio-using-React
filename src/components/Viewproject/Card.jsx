import React from 'react';

function Card(props) {
  return (
      <div
        className="bg-gradient-to-t from-gray-900 to-stone-700 m-4 
        border border-gray-700 rounded-xl p-5 shadow-2xl shadow-gray-600 
        transition transform hover:scale-102 cursor-pointer duration-300 
        text-white font-semibold max-w-4xl mx-auto flex flex-col lg:flex-row sm:flex-row sm:mx-12 gap-6"
      >
        {/* Image Section */}
        <div className="flex justify-center lg:w-1/2">
          <img
            src={props.img}
            alt={props.title}
            className="bg-stone-100 rounded-lg w-full max-w-[500px] sm:max-w-[400px] lg:max-w-none h-auto object-cover"
            loading='lazy'
          />
        </div>

        {/* Text Section */}
        <div className="flex flex-col lg:w-1/2 gap-4 text-center lg:text-left">
          {/* Title and Icon */}
          <div className="flex items-center sm:gap-2 justify-between lg:justify-between text-xl lg:text-2xl font-bold">
            <p>{props.title}</p>
            <i className="fa-solid fa-arrow-up-right-from-square text-gray-300"></i>
          </div>

          {/* Description */}
          <div
            className="text-sm text-justify lg:text-lg font-light 
            text-gray-300 leading-relaxed"
          >
            <p>{props.desc}</p>
          </div>
        </div>
      </div>
  );
}

export default Card;
