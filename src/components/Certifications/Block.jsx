import React, { useState, useEffect } from 'react';
import { FaCertificate } from 'react-icons/fa';
import { Link } from 'react-router-dom';

function Card() {
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setAnimate(true), 100); // delay for smoother entrance
    return () => clearTimeout(timer);
  }, []);

  const data = [
    { id: 1, title: 'Cloud Infrastructure Foundations Associate - Oracle', by: 'Oracle', image: '/Oracle_Vignesh_R.jpg' },
    { id: 2, title: 'IBM Web Development with HTML, CSS, JavaScript', by: 'IBM', image: '/ibm.png' },
    { id: 3, title: 'Foundations of Cybersecurity by Google', by: 'Google', image: '/cyber.png' },
    { id: 4, title: 'Technical Support Fundamentals by Google', by: 'Google', image: '/ts.png' },
    { id: 5, title: 'Cloud Computing and Distributed Systems - NPTEL', by: 'NPTEL', image: '/cc.jpg' },
    { id: 6, title: 'Introduction to SQL by Simplilearn (10 Hours)', by: 'Simplilearn', image: '/sql.png' },
  ];

  return (
    <div className={`bg-gradient-to-t from-gray-900 to-stone-700 m-4 border border-gray-700 rounded-xl p-6 shadow-2xl text-white font-semibold max-w-6xl mx-auto transition-opacity duration-1000 ${animate ? 'opacity-100' : 'opacity-0'}`}>
      <p className="text-3xl font-bold py-4 text-center text-cyan-300">My Certifications</p>
      <hr className="mb-6 border-gray-600" />

      {/* Mobile and tablet optimized grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {data.map((item, index) => (
          <Link
            to={`/certification/${item.id}`}
            key={item.id}
            className={`transform transition-all duration-500 ease-in-out delay-${index * 100}`}
          >
            <div className="relative p-5 rounded-xl bg-gradient-to-br from-gray-800/60 to-gray-900/60 
              border border-cyan-500/20 hover:border-cyan-400 hover:scale-[1.02] 
              transition-transform duration-300 shadow-lg backdrop-blur-md 
              hover:translate-y-[-5px] hover:opacity-90"
            >
              <div className="flex items-center gap-3 mb-3">
                <FaCertificate className="text-cyan-400 text-2xl" />
                <h3 className="text-lg font-bold text-white">{item.title}</h3>
              </div>
              <p className="text-sm text-gray-400 mb-2">Issued by: {item.by}</p>

              <div className="mt-2">
                <img src={item.image} alt={item.title} className="rounded-lg w-full h-auto object-contain" />
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default Card;
