// Carousel.js
import React, { useState } from "react";

const Carousel = () => {
  const images = [
    "https://images.pexels.com/photos/432059/pexels-photo-432059.jpeg?auto=compress&cs=tinysrgb&w=600",
    "https://images.pexels.com/photos/934070/pexels-photo-934070.jpeg?auto=compress&cs=tinysrgb&w=600",
    "https://images.pexels.com/photos/994234/pexels-photo-994234.jpeg?auto=compress&cs=tinysrgb&w=600",
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <div className="w-full flex items-center justify-center">
      <div className="relative w-full max-w-8xl">
        {/* Image */}
        <img
          src={images[currentIndex]}
          alt={`Slide ${currentIndex + 1}`}
          className="w-full h-96 rounded-lg shadow-md bg"
        />

        {/* Previous Button */}
        <button
          className="absolute top-1/2 left-3 transform -translate-y-1/2 bg-black bg-opacity-50 text-white px-4 py-2 rounded-full hover:bg-opacity-75"
          onClick={handlePrev}
        >
          &#10094;
        </button>

        {/* Next Button */}
        <button
          className="absolute top-1/2 right-3 transform -translate-y-1/2 bg-black bg-opacity-50 text-white px-4 py-2 rounded-full hover:bg-opacity-75"
          onClick={handleNext}
        >
          &#10095;
        </button>

        {/* Dots Indicator */}
        <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 flex space-x-2">
          {images.map((_, index) => (
            <div
              key={index}
              className={`w-3 h-3 rounded-full ${
                currentIndex === index ? "bg-white" : "bg-gray-400"
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Carousel;

// src / components / Carousel.js;
// import React, { useState } from "react";

// const images = [
//   "https://via.placeholder.com/600x300?text=Slide+1",
//   "https://via.placeholder.com/600x300?text=Slide+2",
//   "https://via.placeholder.com/600x300?text=Slide+3",
// ];

// const Carousel = () => {
//   const [currentIndex, setCurrentIndex] = useState(0);

//   const prevSlide = () => {
//     setCurrentIndex((prevIndex) =>
//       prevIndex === 0 ? images.length - 1 : prevIndex - 1
//     );
//   };

//   const nextSlide = () => {
//     setCurrentIndex((prevIndex) =>
//       prevIndex === images.length - 1 ? 0 : prevIndex + 1
//     );
//   };

//   return (
//     <div className="relative w-full max-w-xl mx-auto">
//       <div className="overflow-hidden relative rounded-lg">
//         {/* Carousel Images */}
//         <div
//           className="flex transition-transform duration-500 ease-in-out"
//           style={{ transform: `translateX(-${currentIndex * 100}%)` }}
//         >
//           {images.map((img, index) => (
//             <img
//               key={index}
//               src={img}
//               alt={`Slide ${index}`}
//               className="w-full object-cover"
//             />
//           ))}
//         </div>

//         {/* Previous Button */}
//         <button
//           onClick={prevSlide}
//           className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 rounded-full hover:bg-opacity-75"
//         >
//           &#10094;
//         </button>

//         {/* Next Button */}
//         <button
//           onClick={nextSlide}
//           className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 rounded-full hover:bg-opacity-75"
//         >
//           &#10095;
//         </button>

//         {/* Indicators */}
//         <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
//           {images.map((_, index) => (
//             <div
//               key={index}
//               className={`h-3 w-3 rounded-full ${
//                 index === currentIndex ? "bg-slate-600" : "bg-gray-400"
//               }`}
//             />
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Carousel;
