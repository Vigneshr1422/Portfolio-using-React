import React from 'react';
import { Link } from 'react-router-dom';

function Navbar(props) {
  return (
    <nav className="z-50 sticky top-0 px-4 py-3">
      <ul className="flex space-x-8">
        <li className="group"> {/* Added group class here */}
          <Link to={props.link}><span className="relative text-white text-lg font-medium transition-all duration-300 ease-in-out hover:cursor-pointer">
            {props.title}
            <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-white transition-all duration-300 ease-in-out group-hover:w-full "></span>
          </span>
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
