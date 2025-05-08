// Inner.jsx
import React from 'react';

function Inner({ title, link, imgs, download = false, onClick, active }) {
  return (
    <div
      className={`border border-gray-400 rounded-lg text-2xl self-center hover:shadow-md hover:shadow-sky-600 ${
        active ? 'bg-green-100 border-green-400' : ''
      }`}
    >
      <a
        href={link}
        target={download ? '_self' : '_blank'}
        rel={download ? undefined : 'noopener noreferrer'}
        download={download}
        onClick={onClick}
        className="p-1 flex items-center justify-center"
      >
        {active ? (
          <i className="fas fa-check text-green-600"></i>
        ) : imgs ? (
          <img src={imgs} alt="icon" className='w-7' />
        ) : (
          <i className={`${title}`}></i>
        )}
      </a>
    </div>
  );
}

export default Inner;
