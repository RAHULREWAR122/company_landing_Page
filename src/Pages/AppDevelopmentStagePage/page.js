import Image from 'next/image';
import { SiSimpleanalytics } from "react-icons/si";
import { MdOutlineDesignServices } from "react-icons/md";
import { FaLaptopCode } from "react-icons/fa";
import { VscNotebookTemplate } from "react-icons/vsc";
import { PiRocketBold } from "react-icons/pi";
import { FaHandsHelping } from "react-icons/fa";

const stagesLeft = [
  { title: 'Analysis',icon : <SiSimpleanalytics/> , description: 'We craft precise technical specs, aligning with your business, technology, and user requirements.' },
  { title: 'Design' ,icon : <MdOutlineDesignServices/> , description: 'We adapt the customer’s corporate identity to the platform guidelines. We draw convenient and understandable interfaces.' },
  { title: 'Development' ,icon : <FaLaptopCode/> , description: 'We create an extensible architecture, write clean and stable code. We integrate with customer technologies.' },
];

const stagesRight = [
  { title: 'Testing' ,icon : <VscNotebookTemplate/> ,  description: 'We carry out functional testing and debug fixes. We adapt the application to different phone resolutions.' },
  { title: 'Launching' ,icon : <PiRocketBold/> , description: 'We design the application page and publish it in the App Store and Google Play stores.' },
  { title: 'Support' ,icon : <FaHandsHelping/> , description: 'We monitor the stability of the application, update it for new devices and versions of iOS and Android.' }
];

const ApplicationDevelopmentStages = () => {
  return (
    <div id='cases' className="bg-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-extrabold text-gray-900 text-center">Application Development Stages</h2>
        <div className="mt-12 flex flex-col lg:flex-row justify-center items-center space-y-12 lg:space-y-0 lg:space-x-8">
          <div className="space-y-8 lg:w-1/3">
            {stagesLeft.map((stage, index) => (
              <div key={index} className="flex items-start">
                <div className="flex-shrink-0">
                  <span className="inline-flex items-center justify-center h-12 w-12 rounded-md shadow-md mt-[-10px] text-green-500 ">
                      {stage.icon}  
                  </span>
                </div>
                <div className="ml-4">
                  <h3 className="text-lg leading-6 font-medium text-gray-900">{stage.title}</h3>
                  <p className="mt-2 text-base text-gray-500">{stage.description}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="flex justify-center lg:w-1/3">
            <Image src="/appMob.png" alt="App mobile preview" width={300} height={600} className="object-cover" />
          </div>
          <div className="space-y-8 lg:w-1/3">
            {stagesRight.map((stage, index) => (
              <div key={index} className="flex items-start">
                <div className="flex-shrink-0">
                <span className="inline-flex items-center justify-center h-12 w-12 rounded-md shadow-md mt-[-10px] text-green-500 ">
                      {stage.icon}  
                  </span>
                </div>
                <div className="ml-4">
                  <h3 className="text-lg leading-6 font-medium text-gray-900">{stage.title}</h3>
                  <p className="mt-2 text-base text-gray-500">{stage.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ApplicationDevelopmentStages;
