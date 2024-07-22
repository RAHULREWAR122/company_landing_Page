import { FaMobileAlt } from "react-icons/fa";
import { MdOutgoingMail } from "react-icons/md";
import { CiLocationOn } from "react-icons/ci";
import { MdOutlineContactPage } from "react-icons/md";

const Footer = () => {
  return (
    <footer id="contacts" className="bg-black text-white md:w-[90%] rounded-[20px] mb-4">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 p-8 flex  flex-col items-center justify-center lg:px-8">
        <div className="flex flex-col items-center justify-center w-[100%] space-y-6 md:space-y-0  md:justify-between">
          <div className="flex justify-center w-[100%] items-center ">
            <img
              src="https://s3-alpha-sig.figma.com/img/0b29/5d18/447030ac981738d1de0668b277e646ce?Expires=1722211200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=cU~0Bdqgkvl3Nibj8CQOYuJ06c6290HckGJxNAOQkrun08fHc7HeOEsHUC~Jo-9remUlCHW7Rf1gplZhghCZ-xoC5SuCXQJNsUaft4o8CVN3~e0fDY~33W6II6unXCT15XwTLtC6ZG1HOuiMWV0sKvdmT3Dk5yXB6QfWRQehy33XyjWHoJ7E5ilA3Db2IgvxqgzKSMQbXgn0fIEqPSq~M~N3I4rpRO2vceKKMMCNSs8izxfsPZx-kb9CmRS2SOR3krTaCVff0Y76WOpHj1e5D9GoVO5ek9808mPBDyVOmgxoWKuRpr36aOJLs~RUHmrvfi3-fmwNZePrdIHb82SGMQ__"
              alt="Company Logo"
              width={140}
              height={100}
            />
          </div>
          <div className="flex flex-wrap justify-around  w-[100%] py-4  md:space-x-6">
            <div className="text-center md:text-left mt-3 ">
              <h3 className="flex items-center justify-center md:justify-start font-bold text-sm md:text-[14px]">
                <FaMobileAlt size={18} className="mr-2" />
                Contact nums
              </h3>
              <p className="mt-2 text-xs">+91 0000000000</p>
            </div>
            <div className="text-center md:text-left mt-3">
              <h3 className="flex items-center justify-center md:justify-start font-bold text-sm md:text-[14px]">
                <MdOutgoingMail size={18} className="mr-2" />
                Email
              </h3>
              <p className="mt-2 text-xs">demo@gmail.com</p>
            </div>
            <div className="text-center md:text-left mt-3">
              <h3 className="flex items-center justify-center md:justify-start font-bold text-sm md:text-[14px]">
                <CiLocationOn size={18} className="mr-2" />
                Address
              </h3>
              <p className="mt-2 text-xs">Mumbai, India</p>
            </div>
            <div className="text-center md:text-left mt-3">
              <h3 className="flex items-center justify-center md:justify-start font-bold text-sm md:text-[14px]">
                <MdOutlineContactPage size={18} className="mr-2" />
                Leave a request
              </h3>
              <p className="mt-2 text-xs">Leave a request</p>
            </div>
          </div>
        </div>
        <div className="mt-8 text-center text-xs">
          <p>We work throughout the world</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
