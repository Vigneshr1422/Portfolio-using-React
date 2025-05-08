
// import React from 'react';
// import { Typewriter } from 'react-simple-typewriter';
// import photo from './vigneshpic.jpg';

// function Card() {
//   return (
//     <div className="relative w-screen h-screen overflow-hidden">
//       {/* Top-left text */}
//       <div className="absolute top-60 left-0 text-white ">
//       <h3 className="text-xl sm:text-2xl font-light opacity-80">
//           Hello, I'm
//         </h3>
//         <h2 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-wide mt-2">
//           VIGNESH R
//         </h2>
//         <h3 className="text-xl sm:text-2xl text-cyan-300 mt-2">
//           <Typewriter
//             words={['Full Stack Developer...,', 'Software Developer...,', 'Frontend Developer...,']}
//             loop={true}
//             cursor
//             cursorStyle="|"
//             typeSpeed={70}
//             deleteSpeed={50}
//             delaySpeed={1000}
//           />
//         </h3>
//         <p className="text-sm sm:text-base mt-2">
//           MCA - M Kumarasamy College of Engineering, Karur<br />
//           From Karaikudi
//         </p>
//       </div>

      
//     </div>
//   );
// }

// export default Card;
import React from 'react';
import { Typewriter } from 'react-simple-typewriter';
import photo from './vigneshpic.jpg';

function Card() {
  return (
    <div className="relative w-screen h-screen overflow-hidden px-4">
      {/* Top-left text */}
      <div className="absolute top-40 left-4 sm:top-60 sm:left-0 text-white">
        <h3 className="text-base sm:text-xl font-light opacity-80">
          Hello, I'm
        </h3>
        <h2 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-wide mt-2">
          VIGNESH R
        </h2>
        <h3 className="text-base sm:text-2xl text-cyan-300 mt-2">
          <Typewriter
            words={['Full Stack Developer...,', 'Software Developer...,', 'Frontend Developer...,']}
            loop={true}
            cursor
            cursorStyle="|"
            typeSpeed={70}
            deleteSpeed={50}
            delaySpeed={1000}
          />
        </h3>
        <p className="text-xs sm:text-base mt-2">
        A passionate Software Developer with a Master's degree in Computer Applications.
        <br />
        Graduate of M. Kumarasamy College of Engineering, Karur. <br />
        Karaikudi, India. 
        </p>
      </div>
    </div>
  );
}

export default Card;
