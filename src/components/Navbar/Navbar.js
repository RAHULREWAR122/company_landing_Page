"use client"
import React, { useState } from "react";
import { CiMobile1 } from "react-icons/ci";
import { MdEmail } from "react-icons/md";
import "./navbar.css";
import {Link as ScrollLink} from "react-scroll";
import { IoMdMenu } from "react-icons/io";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleMenuToggle = () => {
    setMenuOpen(!menuOpen);
  };
      
  return (
    <div className="h-[60px] rounded-[13px] md:overflow-hidden z-40 bg-white py-2 px-3 fixed w-[94%] top-4 flex justify-between items-center">
      <div className="flex w-full justify-between items-center">
        <div className="logo ml-[-20px] w-[170px]">
        <ScrollLink to="home" smooth={true} duration={500}>
          <img
            src="https://s3-alpha-sig.figma.com/img/7fd8/7fd6/6706ff5bce5a4d719332ce26f46a5267?Expires=1722211200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=QkV-t1MQXTlDwhcx~TtdKJbdB9~OgvhqlmuRc~EYq~yXVcXzufADYctJpgegTQHcmv8gkp0X7eNAIWsyq0vVe0fNrn6aA5gorl8SnZeetavNFyejtBjhT~iDe~Cc~CopF5MZdhPIEunZFgMM~0Eonc21A4j2SR3NtcgnzZ8~lrFZ3wGkNoWpKOgRTIGtItHfRjvJrIM~Yu-3LeAeWOIXvqaau0aNkcuHooc9RkTOOGgFVtETJ4x8NiSldHFYf4Oz7Ul5b-qFPF3iBqcs4fkhCibmZ~~-R9wSCnDl1qP0QhofgwrGEyiX2gUGYtRUC4-ymwvpnFY6ESBeRTpeoShZSA__"
            height={190}
            width={180}
            alt="company logo"
            className="cursor-pointer"
          />
         </ScrollLink> 
        </div>
        <ul className="hidden md:flex w-[45%]  h-[100%] ml-[-70px]  items-center justify-evenly text-[#101828]">
          <ScrollLink to="company" smooth={true} duration={500} className="cursor-pointer hover-border-animation">Services</ScrollLink>          
          <ScrollLink to="media" smooth={true} duration={500} className="cursor-pointer hover-border-animation">Media</ScrollLink>
          <ScrollLink to="cases" smooth={true} duration={500} className="cursor-pointer hover-border-animation">Cases</ScrollLink>
          <ScrollLink to="faq" smooth={true} duration={500} className="cursor-pointer hover-border-animation">FAQ</ScrollLink>
          <ScrollLink to="contacts" smooth={true} duration={500} className="cursor-pointer hover-border-animation">Contacts</ScrollLink>
        </ul>
        <div className="hidden mr-8 md:flex right_nav_section justify-around items-center w-[27%] h-full text-[#80A948]">
          <div className="mobile flex  ">
            <CiMobile1 size={18} />
            <pre className="text-[14px]">+91 0000000000</pre>
          </div>
          <div className="email flex ">
            <MdEmail size={18} />
            <span className="text-[14px]">demo@gmail.com</span>
          </div>
        </div>
        <div className="md:hidden">
          <button
            id="menu-button"
            aria-label="Open Menu"
            onClick={handleMenuToggle}
          >
            <IoMdMenu size={25}/>
          </button>
        </div>
      </div>
      {menuOpen && (
        <div className="md:hidden absolute top-[46px] left-0 flex flex-col items-start mt-2 w-full bg-white p-4 rounded-b-[13px] shadow-lg">
          <ul className="w-full flex flex-col items-start text-[#101828]">
            <ScrollLink to="company" smooth={true} duration={500} className="cursor-pointer hover-border-animation border-b border-blue-200 w-[100%] py-2 my-0">Services</ScrollLink>          
            <ScrollLink to="media" smooth={true} duration={500} className="cursor-pointer hover-border-animation border-b border-blue-200 w-[100%] py-2 my-0">Media</ScrollLink>
            <ScrollLink to="cases" smooth={true} duration={500} className="cursor-pointer hover-border-animation border-b border-blue-200 w-[100%] py-2 my-0">Cases</ScrollLink>
            <ScrollLink to="faq" smooth={true} duration={500} className="cursor-pointer hover-border-animation border-b border-blue-200 w-[100%] py-2 my-0">FAQ</ScrollLink>
            <ScrollLink to="contacts" smooth={true} duration={500} className="cursor-pointer hover-border-animation border-b border-blue-200 w-[100%] py-2 my-0">Contacts</ScrollLink>
        
          </ul>
          <div className="right_nav_section flex flex-col items-start text-[#80A948] mt-4">
            <div className="mobile flex gap-1 items-center mb-2">
              <CiMobile1 size={22} />
              <span>+91 0000000000</span>
            </div>
            <div className="email flex gap-1 items-center">
              <MdEmail size={22} />
              <span>demo@gmail.com</span>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Navbar;
