import React from 'react'
import { SiYoutubeshorts } from "react-icons/si";
import { MdHomeFilled } from "react-icons/md";
import { MdSubscriptions } from "react-icons/md";
import { MdOutlineChevronRight } from "react-icons/md";
import { GrLike } from "react-icons/gr";
import { LuClock4 } from "react-icons/lu";
import { GoVideo } from "react-icons/go";
import { PiClockCounterClockwiseFill } from "react-icons/pi";
import { BsPersonSquare } from "react-icons/bs";

const SideBar = () => {
  return (
    <>

<div className=' bg-black h-screen w-40 sm:block '>
    <div className="flex flex-col h-screen bg-gray-800 text-white w-44 ">
  

      <nav className=" flex-1">
        <a href="#" className=" flex text-white items-center p-4 hover:bg-gray-700">
       <div className='text-2xl '> <MdHomeFilled /></div>
          <p className="text-1xl pl-3">Home</p>
        </a>

        <a href="#" className="flex text-white items-center pt-0  p-4 hover:bg-gray-700">
       <div className='text-2xl'> <SiYoutubeshorts /></div>
         <p className='text-1xl pl-3'> Shorts</p>
        </a>

        <a href="#" className="flex text-white items-center pt-0  p-4 hover:bg-gray-700">
       <div className='text-2xl'> <MdSubscriptions /></div>
         <p className='text-1xl pl-3'> Subscriptions</p>
        </a>
        <hr />

        <a href="#" className="flex text-white items-center  p-4 hover:bg-gray-700">
         <p className='text-1xl font-bold'> You </p>
         <div className='text-2xl pt-1 pl-2'><MdOutlineChevronRight /></div>
        </a>

          <a href="#" className="flex text-white items-center pt-0  p-4 hover:bg-gray-700">
       <div className='text-2xl'> <BsPersonSquare /> </div>
         <p className='text-1xl pl-3'> Your Channel</p>
        </a>

          <a href="#" className="flex text-white items-center pt-0  p-4 hover:bg-gray-700">
       <div className='text-2xl'> <PiClockCounterClockwiseFill /> </div>
         <p className='text-1xl pl-3'> History</p>
        </a>

        <a href="#" className="flex text-white items-center pt-0  p-4 hover:bg-gray-700">
       <div className='text-2xl'> <GoVideo /></div>
         <p className='text-1xl pl-3'> Your Videos</p>
        </a>

        <a href="#" className="flex text-white items-center pt-0  p-4 hover:bg-gray-700">
       <div className='text-2xl'> <LuClock4 /></div>
         <p className='text-1xl pl-3'>Watch Later</p>
        </a>

        <a href="#" className="flex text-white items-center pt-0  p-4 hover:bg-gray-700">
       <div className='text-2xl'> <GrLike /></div>
         <p className=' pl-3'> Liked Videos</p>
        </a>

        <hr />
        <p className='text-1xl pl-5 pt-5 font-bold'> Subscriptions </p>
      </nav>

      <div className="p-4">
        <span className="text-sm">Your Footer</span>
      </div>
    </div>
  );
      
    </div>

        


    </>
  )
}

export default SideBar