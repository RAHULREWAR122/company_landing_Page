"use client"
import React, { useState } from 'react'
import { IoLocationOutline } from "react-icons/io5";
import { LuShoppingBag } from "react-icons/lu";
import { FaApple } from "react-icons/fa";
import { IoLogoGooglePlaystore } from "react-icons/io5";
import { Button } from '@/components/ui/button';


function MostPopularProjects() {
    const [currentPage , setCurrentPage] = useState(1);  
    
 
    return (
        <div className="min-h-[80vh] flex flex-col text-[#101828] w-full p-8 md:text-[28px]">
        <h1 className="mb-4 text-3xl font-bold">Projects we are proud of</h1>
        <p className="text-sm md:text-base w-full md:w-1/2 mb-6">
          Our software development company is truly proud of the wonderful clients we have worked with. We enjoy a long-term partnership.
        </p>  
        <div className="w-full mt-6">
          <ul className="w-full flex gap-5 border-b border-gray-300">
            <li
              className={`md:text-lg text-[13px] cursor-pointer pb-2 ${
                currentPage === 1 ? "border-b-2 border-yellow-500 text-yellow-600" : ""
              }`}
              onClick={() => setCurrentPage(1)}
            >
              Project 1
            </li>
            <li
              className={`md:text-lg text-[13px] cursor-pointer pb-2 ${
                currentPage === 2 ? "border-b-2 border-yellow-500 text-yellow-600" : ""
              }`}
              onClick={() => setCurrentPage(2)}
            >
              Project 2
            </li>
            <li
              className={`md:text-lg text-[13px] cursor-pointer pb-2 ${
                currentPage === 3 ? "border-b-2 border-yellow-500 text-yellow-600" : ""
              }`}
              onClick={() => setCurrentPage(3)}
            >
              Project 3
            </li>
            <li
              className={`md:text-lg text-[13px] cursor-pointer pb-2 ${
                currentPage === 4 ? "border-b-2 border-yellow-500 text-yellow-600" : ""
              }`}
              onClick={() => setCurrentPage(4)}
            >
              Project 4
            </li>
          </ul>
        </div>
  
        {currentPage === 1 && (
          <div className="md:flex justify-between block min-h-[70vh] w-full mt-8">
            <div className="md:w-1/2 w-full mt-12">
              <h1 className="text-xl md:text-2xl font-bold mb-4">Project 1</h1>
              <p className="text-sm md:text-base mb-4">
                Crafted an innovative rental property management app, seamlessly integrating secure login, absence registration, and a tenant notice board. Elevating the resident experience with user-friendly design and efficient communication channels.
              </p>
              <p className="text-md font-semibold mb-4">
                Business analysis / iOS / Android / QA / UI/UX Design
              </p>
              <div className="location flex gap-6 mb-4">
                <span className="text-sm flex items-center">
                  <IoLocationOutline size={20} />&nbsp; India
                </span>
                <span className="text-sm flex items-center">
                  <LuShoppingBag size={20} />&nbsp; Real Estate
                </span>
              </div>
  
              <div className="growth flex mt-5 gap-6 mb-4">
                <div className="block text-center">
                  <p className="text-xl font-bold">400%</p>
                  <span className="text-sm">User Growth</span>
                </div>
                <div className="block text-center">
                  <p className="text-xl font-bold">+200,000</p>
                  <span className="text-sm">Active users</span>
                </div>
              </div>
              <div className="bt mt-8 flex gap-5">
                <div className="appStore">
                  <Button >
                    <FaApple size={28} />
                    <span className="flex flex-col">
                      <span className="text-xs"><span>3</span>arpy3NTe B</span>
                      <span className="text-sm font-bold">App Store</span>
                    </span>
                  </Button>
                </div>
                <div className="play_Store">
                <Button >
                <IoLogoGooglePlaystore size={28} />
                    <span className="flex flex-col">
                      <span className="text-xs">GET IT ON</span>
                      <span className="text-sm font-bold">Google Play</span>
                    </span>
                  </Button>
                </div>
              </div>
            </div>
            <div className="mobileImg md:w-1/2 h-full flex items-center justify-center">
              <img
                src="/mobilepages.png"
                alt="Services"
                className="max-h-80 md:max-h-96 w-auto"
              />
            </div>
          </div>
        )}
        {currentPage === 2 && (
          <div className="md:flex justify-between block min-h-[70vh] w-full mt-8">
            <div className="md:w-1/2 w-full mt-12">
              <h1 className="text-xl md:text-2xl font-bold mb-4">Project 2</h1>
              <p className="text-sm md:text-base mb-4">
                Crafted an innovative rental property management app, seamlessly integrating secure login, absence registration, and a tenant notice board. Elevating the resident experience with user-friendly design and efficient communication channels.
              </p>
              <p className="text-md font-semibold mb-4">
                Business analysis / iOS / Android / QA / UI/UX Design
              </p>
              <div className="location flex gap-6 mb-4">
                <span className="text-sm flex items-center">
                  <IoLocationOutline size={20} />&nbsp; India
                </span>
                <span className="text-sm flex items-center">
                  <LuShoppingBag size={20} />&nbsp; Real Estate
                </span>
              </div>
  
              <div className="growth flex mt-5 gap-6 mb-4">
                <div className="block text-center">
                  <p className="text-xl font-bold">400%</p>
                  <span className="text-sm">User Growth</span>
                </div>
                <div className="block text-center">
                  <p className="text-xl font-bold">+200,000</p>
                  <span className="text-sm">Active users</span>
                </div>
              </div>
              <div className="bt mt-8 flex gap-5">
                <div className="appStore">
                <Button >
                <FaApple size={28} />
                    <span className="flex flex-col">
                      <span className="text-xs"><span>3</span>arpy3NTe B</span>
                      <span className="text-sm font-bold">App Store</span>
                    </span>
                  </Button>
                </div>
                <div className="play_Store">
                <Button >
                <IoLogoGooglePlaystore size={28} />
                    <span className="flex flex-col">
                      <span className="text-xs">GET IT ON</span>
                      <span className="text-sm font-bold">Google Play</span>
                    </span>
                  </Button>
                </div>
              </div>
            </div>
            <div className="mobileImg md:w-1/2 h-full flex items-center justify-center">
              <img
                src="/mobilepages.png"
                alt="Services"
                className="max-h-80 md:max-h-96 w-auto"
              />
            </div>
          </div>
        )}
        {currentPage === 3 && (
          <div className="md:flex justify-between block min-h-[70vh] w-full mt-8">
            <div className="md:w-1/2 w-full mt-12">
              <h1 className="text-xl md:text-2xl font-bold mb-4">Project 3</h1>
              <p className="text-sm md:text-base mb-4">
                Crafted an innovative rental property management app, seamlessly integrating secure login, absence registration, and a tenant notice board. Elevating the resident experience with user-friendly design and efficient communication channels.
              </p>
              <p className="text-md font-semibold mb-4">
                Business analysis / iOS / Android / QA / UI/UX Design
              </p>
              <div className="location flex gap-6 mb-4">
                <span className="text-sm flex items-center">
                  <IoLocationOutline size={20} />&nbsp; India
                </span>
                <span className="text-sm flex items-center">
                  <LuShoppingBag size={20} />&nbsp; Real Estate
                </span>
              </div>
  
              <div className="growth flex mt-5 gap-6 mb-4">
                <div className="block text-center">
                  <p className="text-xl font-bold">400%</p>
                  <span className="text-sm">User Growth</span>
                </div>
                <div className="block text-center">
                  <p className="text-xl font-bold">+200,000</p>
                  <span className="text-sm">Active users</span>
                </div>
              </div>
              <div className="bt mt-8 flex gap-5">
                <div className="appStore">
                <Button >
                <FaApple size={28} />
                    <span className="flex flex-col">
                      <span className="text-xs"><span>3</span>arpy3NTe B</span>
                      <span className="text-sm font-bold">App Store</span>
                    </span>
                  </Button>
                </div>
                <div className="play_Store">
                <Button >
                <IoLogoGooglePlaystore size={28} />
                    <span className="flex flex-col">
                      <span className="text-xs">GET IT ON</span>
                      <span className="text-sm font-bold">Google Play</span>
                    </span>
                  </Button>
                </div>
              </div>
            </div>
            <div className="mobileImg md:w-1/2 h-full flex items-center justify-center">
              <img
                src="/mobilepages.png"
                alt="Services"
                className="max-h-80 md:max-h-96 w-auto"
              />
            </div>
          </div>
        )}
        {currentPage === 4 && (
          <div className="md:flex justify-between block min-h-[70vh] w-full mt-8">
            <div className="md:w-1/2 w-full mt-12">
              <h1 className="text-xl md:text-2xl font-bold mb-4">Project 4</h1>
              <p className="text-sm md:text-base mb-4">
                Crafted an innovative rental property management app, seamlessly integrating secure login, absence registration, and a tenant notice board. Elevating the resident experience with user-friendly design and efficient communication channels.
              </p>
              <p className="text-md font-semibold mb-4">
                Business analysis / iOS / Android / QA / UI/UX Design
              </p>
              <div className="location flex gap-6 mb-4">
                <span className="text-sm flex items-center">
                  <IoLocationOutline size={20} />&nbsp; India
                </span>
                <span className="text-sm flex items-center">
                  <LuShoppingBag size={20} />&nbsp; Real Estate
                </span>
              </div>
  
              <div className="growth flex mt-5 gap-6 mb-4">
                <div className="block text-center">
                  <p className="text-xl font-bold">400%</p>
                  <span className="text-sm">User Growth</span>
                </div>
                <div className="block text-center">
                  <p className="text-xl font-bold">+200,000</p>
                  <span className="text-sm">Active users</span>
                </div>
              </div>
              <div className="bt mt-8 flex gap-5">
                <div className="appStore">
                <Button >
                <FaApple size={28} />
                    <span className="flex flex-col">
                      <span className="text-xs"><span>3</span>arpy3NTe B</span>
                      <span className="text-sm font-bold">App Store</span>
                    </span>
                  </Button>
                </div>
                <div className="play_Store">
                  <button className="py-1 text-white w-36 rounded-lg hover:bg-gray-800 transition-all px-3 bg-black flex justify-evenly items-center">
                    <IoLogoGooglePlaystore size={28} />
                    <span className="flex flex-col">
                      <span className="text-xs">GET IT ON</span>
                      <span className="text-sm font-bold">Google Play</span>
                    </span>
                  </button>
                </div>
              </div>
            </div>
            <div className="mobileImg md:w-1/2 h-full flex items-center justify-center">
              <img
                src="/mobilepages.png"
                alt="Services"
                className="max-h-80 md:max-h-96 w-auto"
              />
            </div>
          </div>
        )}
    </div>
  )
}

export default MostPopularProjects