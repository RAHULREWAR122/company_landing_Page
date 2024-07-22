
import Image from 'next/image';

const OurTeam = () => {
  return (
    <div className="bg-slate-100 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mt-10 flex flex-col-reverse md:flex-row justify-between items-center md:items-start space-y-6 md:space-y-0 md:space-x-12 ">
          <div className="md:w-1/2 order-2 md:order-1">
            <h2 className="text-3xl font-extrabold text-gray-900">Our Team</h2>
            <p className="mt-4 md:text-lg text-[13px]  text-gray-500">
              Thousand is a full-cycle digital production company with its own product analytics, design, web and mobile development.
            </p>
            <div className=" flex justify-between items-center px-9 mt-10 mb-10  p-3">
             <div className="flex flex-col ">
                <span className="md:text-3xl text-[18px] font-extrabold text-gray-900">+100</span>
                <span className="text-lg text-gray-500">projects</span>
              </div>
              <div className="flex flex-col ">
                <span className="md:text-3xl text-[18px] font-extrabold text-gray-900">+100</span>
                <span className="text-lg text-gray-500">projects</span>
              </div>
              <div className="flex flex-col ">
                <span className="md:text-3xl text-[18px] font-extrabold text-gray-900">7 years</span>
                <span className="text-lg text-gray-500">in IT sphere</span>
              </div>
            </div>
            <p className="mt-6 md:text-lg text-[13px]  text-gray-500">
              All the necessary specialists - from a designer to a tester - are on our staff. We hire the best specialists in the market. It’s expensive but worth it.
            </p>
          </div>
          <div className="md:w-1/2 order-1 md:order-2 flex justify-center">
            <Image src="/teamImg.png" alt="Team Image" width={440} height={564} className="object-cover rounded-md" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurTeam;
