import React, { useState, useEffect } from 'react';
import { SlSocialYoutube } from 'react-icons/sl';
import { MdOutlineSegment } from 'react-icons/md';
import Sidebar from './Sidebar'; // Import your Sidebar component

const Navbar = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  useEffect(() => {
    const handleResize = () => {
      // Always show the sidebar on large screens
      setIsSidebarOpen(window.innerWidth >= 768);
    };

    // Attach event listener for window resize
    window.addEventListener('resize', handleResize);

    // Initial check on component mount
    handleResize();

    // Clean up the event listener when the component unmounts
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <>
      <nav className="bg-gray-800 p-4 sm:w-full flex">
        <div className="container flex items-center justify-between sm:justify-start">
          <div className="flex space-x-3 flex-row text-white">
            <a
              href="#"
              onClick={() => setIsSidebarOpen(!isSidebarOpen)}
              className="flex lg:ml-[-10px] ml-[-16px] text-white items-center hover:bg-gray-700 cursor-pointer"
            >
              <div className="text-3xl">
                <MdOutlineSegment />
              </div>
            </a>

            <div className="pl-0 pt-1 pl-1 lg:pl-5 space-x-0 text-4xl lg:text-4xl">
              <SlSocialYoutube className="mr-0 " />
            </div>
            <div className="flex ml-[-23px]">
              <p className="text-2xl ml-[-10px] mt-1 lg:mt-1">Gtube</p>
            </div>
          </div>
        </div>
      </nav>

      {/* Render Sidebar component based on state */}
      {isSidebarOpen && <Sidebar />}
    </>
  );
};

export default Navbar;
