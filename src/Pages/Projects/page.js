import { BiMobileVibration } from "react-icons/bi";
import { MdOutlineSportsBaseball } from "react-icons/md"
import { CiBank } from "react-icons/ci";
import { MdEngineering } from "react-icons/md";
import { IoGameControllerOutline } from "react-icons/io5";
import { MdOutlineCastForEducation } from "react-icons/md";
import { FaCarAlt } from "react-icons/fa";
import { TbHealthRecognition } from "react-icons/tb";
import { IoFastFood } from "react-icons/io5";
import { SlHandbag } from "react-icons/sl";
import { GrTechnology } from "react-icons/gr";
import { LiaTvSolid } from "react-icons/lia";
import { PiShoppingBagOpenFill } from "react-icons/pi";
import { RxMagicWand } from "react-icons/rx";
import { IoDiscOutline } from "react-icons/io5";

export default function Projects() {
    const industries = [
        { title: "Social media", icon: <BiMobileVibration /> },
        { title: "Fitness and sport", icon: <MdOutlineSportsBaseball /> },
        { title: "Bank", icon: <CiBank /> },
        { title: "Construction", icon: <MdEngineering /> },
        { title: "Game projects", icon: <IoGameControllerOutline /> },
        { title: "Education", icon: <MdOutlineCastForEducation /> },
        { title: "Auto, transport", icon: <FaCarAlt /> },
        { title: "Medicine, health", icon: <TbHealthRecognition /> },
        { title: "Restaurants, food delivery", icon: <IoFastFood /> },
        { title: "Marketplaces", icon: <SlHandbag /> },
        { title: "AR Technology", icon: <GrTechnology /> },
        { title: "TV Series", icon: <LiaTvSolid /> },
        { title: "Startups", icon: <PiShoppingBagOpenFill /> },
        { title: "Religion", icon: <RxMagicWand /> },
        { title: "Online cources", icon: <IoDiscOutline /> },
    ];
    

    return (
        <div id="media" className="p-10  shadow-md rounded-md mt-8 w-full">
      <h2 className="text-2xl font-bold mb-4 text-[18px] md:text-[30px]">Developed more than <span className="text-green-500">100</span> projects in <span className="text-green-500">15</span> industries</h2>
      <div className="grid grid-cols-1 ml-5 sm:grid-cols-2 md:grid-cols-3  gap-4">
        {industries.map((industry, index) => (
          <div key={index} className="flex items-center">
            <span className="text-yellow-500 mr-2 p-3 bg-white shadow-md rounded-full">{industry.icon}</span>
            <span>{industry.title}</span>
          </div>
        ))}
      </div>
    </div>
    );
}