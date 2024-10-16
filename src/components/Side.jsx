"use client";

import { useState } from "react";

const Side = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      {/* Hamburger/Close Button - Visible only on mobile */}
      <button
        className="fixed top-4 left-4 z-50 text-gray-800 bg-white p-2 rounded-md md:hidden"
        onClick={toggleSidebar}
      >
        {isOpen ? (
          // Close (X) Icon
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        ) : (
          // Hamburger Icon
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16m-7 6h7"
            />
          </svg>
        )}
      </button>

      {/* Sidebar - Visible only on mobile */}
      <div
        className={`fixed top-[90px] left-0 bg-white w-[260px] h-full z-40 transition-transform transform ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        } md:hidden overflow-hidden flex flex-col items-center`}
      >
        <div className="px-[0.5rem] w-full">
          {/* Language Dropdown */}
          <div className="text-[14px] hover:rounded-[8px] transition-all hover:bg-[#dfe7fd] cursor-pointer text-[#323232] flex-col p-3 flex items-center justify-between group">
            <div className="w-full transition-all hover:bg-[#dfe7fd] cursor-pointer text-[#323232] flex items-center justify-between">
              Language
              <div>
                <img
                  className="group-hover:rotate-0 rotate-180 transition-transform delay-200"
                  src="https://cdn.hugeicons.com/icons/arrow-up-01-stroke-sharp.svg"
                  alt="toggle"
                />
              </div>
            </div>
            <div className="group-hover:pt-2 w-full max-h-0 transition-all overflow-y-scroll genNav group-hover:max-h-[300px] duration-500 ease-in-out">
              <div className="w-full p-[10.5px]">Hindi</div>
              <div className="w-full p-[10.5px]">Bengali</div>
              <div className="w-full p-[10.5px]">English</div>
              <div className="w-full p-[10.5px]">Kannada</div>
              <div className="w-full p-[10.5px]">Malyalam</div>
              <div className="w-full p-[10.5px]">Chinese</div>
              <div className="w-full p-[10.5px]">Fan Hindi</div>
              <div className="w-full p-[10.5px]">Japanese</div>
              <div className="w-full p-[10.5px]">Korean</div>
              <div className="w-full p-[10.5px]">Marathi</div>
            </div>
          </div>

          {/* Gender Dropdown */}
          <div className="text-[14px] hover:rounded-[8px] transition-all hover:bg-[#dfe7fd] cursor-pointer text-[#323232] flex-col p-3 flex items-center justify-between group">
            <div className="w-full transition-all hover:bg-[#dfe7fd] cursor-pointer text-[#323232] flex items-center justify-between">
              Gender
              <div>
                <img
                  className="group-hover:rotate-0 rotate-180 transition-transform delay-200"
                  src="https://cdn.hugeicons.com/icons/arrow-up-01-stroke-sharp.svg"
                  alt="toggle"
                />
              </div>
            </div>
            <div className="genNav group-hover:pt-2 w-full max-h-0 transition-all overflow-hidden group-hover:max-h-[430px] overflow-y-scroll duration-500 ease-in-out">
              <div className="w-full p-[10.5px]">Action</div>
              <div className="w-full p-[10.5px]">Adventure</div>
              <div className="w-full p-[10.5px]">Animation</div>
              <div className="w-full p-[10.5px]">Comedy</div>
              <div className="w-full p-[10.5px]">Crime</div>
              <div className="w-full p-[10.5px]">Drama</div>
              <div className="w-full p-[10.5px]">Family</div>
              <div className="w-full p-[10.5px]">Fantasy</div>
              <div className="w-full p-[10.5px]">Horror</div>
              <div className="w-full p-[10.5px]">Kids</div>
              <div className="w-full p-[10.5px]">Martial ART</div>
              <div className="w-full p-[10.5px]">Mystery</div>
              <div className="w-full p-[10.5px]">Romance</div>
              <div className="w-full p-[10.5px]">Sci fi</div>
              <div className="w-full p-[10.5px]">Sci-Fi & Fantasy</div>
              <div className="w-full p-[10.5px]">Superhero</div>
              <div className="w-full p-[10.5px]">Thriller</div>
              <div className="w-full p-[10.5px]">War</div>
            </div>
          </div>

          {/* Streaming Services */}
          <div className="text-[14px] text-[#323232] p-3 transition-all hover:bg-[#dfe7fd] hover:rounded-[8px] cursor-pointer">
            crunchyroll
          </div>
          <div className="text-[14px] text-[#323232] p-3 transition-all hover:bg-[#dfe7fd] hover:rounded-[8px] cursor-pointer">
            netflix
          </div>
          <div className="text-[14px] text-[#323232] p-3 transition-all hover:bg-[#dfe7fd] hover:rounded-[8px] cursor-pointer">
            hungama
          </div>
          <div className="text-[14px] text-[#323232] p-3 transition-all hover:bg-[#dfe7fd] hover:rounded-[8px] cursor-pointer">
            disney
          </div>
          <div className="text-[14px] text-[#323232] p-3 transition-all hover:bg-[#dfe7fd] hover:rounded-[8px] cursor-pointer">
            cartoon network
          </div>
          <div className="text-[14px] text-[#323232] p-3 transition-all hover:bg-[#dfe7fd] hover:rounded-[8px] cursor-pointer">
            nickelodeon
          </div>
          <div className="text-[14px] text-[#323232] p-3 transition-all hover:bg-[#dfe7fd] hover:rounded-[8px] cursor-pointer">
            kinds zone plus
          </div>
          <div className="text-[14px] text-[#323232] p-3 transition-all hover:bg-[#dfe7fd] hover:rounded-[8px] cursor-pointer">
            sony yay
          </div>
          <div className="text-[14px] text-[#323232] p-3 transition-all hover:bg-[#dfe7fd] hover:rounded-[8px] cursor-pointer">
            etv bal bharti
          </div>
        </div>
      </div>

      {/* Background Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black opacity-50 z-30 md:hidden"
          onClick={toggleSidebar}
        ></div>
      )}
    </div>
  );
};

export default Side;
