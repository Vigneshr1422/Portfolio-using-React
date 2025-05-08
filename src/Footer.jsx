import React from 'react';

function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 relative py-6 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Footer Content */}
        <div className="flex flex-col md:flex-row justify-between items-center">
          {/* Left Section: Portfolio Name */}
          <div className="text-center md:text-left mb-4 md:mb-0">
            <h1 className="text-xl font-bold text-white">R Vignesh</h1>
            <p className="text-sm text-gray-400">Web Developer | Software Developer</p>
          </div>

          {/* Middle Section: Social Links */}
          <div className="flex gap-4">
            <a
              href="https://github.com/Vigneshr1422"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white"
            >
              <i className="fab fa-github"></i> GitHub
            </a>
            <a
              href="https://www.linkedin.com/in/vignesh-r-793931252/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white"
            >
              <i className="fab fa-linkedin"></i> LinkedIn
            </a>
            <a
              href="mailto:vigneshramesh2208@gmail.com"
              className="text-gray-400 hover:text-white"
            >
              <i className="fas fa-envelope"></i> Email
            </a>
          </div>

          {/* Right Section: Copyright */}
          <div className="text-center md:text-right mt-4 md:mt-0 text-sm">
            <p>
              &copy; {new Date().getFullYear()} Vignesh R. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;