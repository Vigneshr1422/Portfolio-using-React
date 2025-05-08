// Sidebar.jsx
import React, { useState } from 'react';
import Inner from './Inner';
import Codolio from '/leet.png';
import Gfg from '/geeksforgeeks.svg';
import LinkedIn from '/linkedin.png'

function Sidebar() {
    const [isOpen, setIsOpen] = useState(false);
    const [downloaded, setDownloaded] = useState(false);

    const toggleSidebar = () => setIsOpen(!isOpen);

    const handleDownload = () => {
        setDownloaded(true);
        setTimeout(() => setDownloaded(false), 3000); // reset after 3 seconds
    };

    return (
        <div className='relative z-40'>
           <button
  onClick={toggleSidebar}
  className={`fixed top-48 lg:top-32 left-3 transform -translate-y-1/2 z-20 
  w-12 h-12 bg-sky-500 rounded-full text-white flex items-center justify-center transition-all duration-300 
  ${isOpen ? 'rotate-180' : ''}`}
>
  <i className="fas fa-bars"></i>
</button>

<div
  className={`fixed top-[35%] left-0 h-fit flex flex-col items-center justify-center bg-white rounded-full gap-4 py-2 sm:py-4 px-2 m-3 shadow-xl transition-all duration-300 
  ${isOpen ? 'translate-x-0' : '-translate-x-full'} sm:flex-col md:flex-col lg:flex-col`}
>
                <Inner title="fa-brands fa-linkedin" link="https://www.linkedin.com/in/vignesh-r-793931252/" />
                <Inner title="fa-brands fa-github" link="https://github.com/Vigneshr1422" />
                <Inner imgs={Codolio} link="https://leetcode.com/u/vigneshramesh2208/" />
                <Inner imgs={Gfg} link="https://www.geeksforgeeks.org/user/vigneshra7v6m/" />
                <Inner title="fa-brands fa-hackerrank" link="https://www.hackerrank.com/profile/vigneshramesh22" />

                {/* Resume Download with tick */}
                <Inner
                    title="fa-regular fa-file"
                    link="/Vignesh.R.pdf"
                    download={true}
                    onClick={handleDownload}
                    active={downloaded}
                />
            </div>
        </div>
    );
}

export default Sidebar;
