import React from "react";
import ContactForm from "../Form/ContactForm";

const img1 =
"https://s3-alpha-sig.figma.com/img/9eb5/0887/fbc231627dd24c764990817126cf7eb1?Expires=1722211200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=JPhyAZVtGwmadARs1BaQ6QLIl~6Sn8MvUQOuS5uFUD-9Ru2aFjd-BVCXb5pxGXwqBoRn9iYgdNHr79h38P~KOEJsc7TfBnYo-u7aX9H6pwez5UMx8~75K9IbkhbAv8vqudzHjNzYOyjQhT8EoMl7~8mhdbcYIqB97ayTIfmjWQUPijhd3J6F7uEzIL883rZaF79uO0~NNzdMFPR~3W1C~vcNkONO07fmlw1ooHr6W-Rie9tdkxhcf5k8a00JDiG6bSnTmIjBjlIPezKpOCTHuFpYbNvbqus7dZsVQi1-W2NfG5JJzeFs8h1m9KZNyQvG8NuwhtsUWsQX-euIjJf1DQ__";
const img2 =
"https://s3-alpha-sig.figma.com/img/e1c1/a0a8/20c5ac161ce9cf498cb4424c62367725?Expires=1722211200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=B0ZjFUjYzqj2ng6osuulVZVetR4C-JHb7MOsoj9o8SrLU6FibCa0ogna3yWCBZ6n7jBGs52~yxO~rZe8SbeoNXyzs5TdsXf7C2Kf0RrUiY45RHl-FbkCdFt7kfpjNS91HxtElcFIQ6ebQdesxvN1HVNefrSjkuq~hLLNXJgZemZG0gqmCkrE2wRw4ahkUyROm5~S-fp6EzQlAnkorcw5hLoc0~i4lurG78aEc~8jIn6oN0eANVqF46TzFoLJ-StpSVbH9ersFylRRbR9oESGqxCx3OiOD1nb13DZrWU3LzQ7PKEklju7TDQ4rmD00Zucy39m-Py2297cUUl9nVfYWA__";
const img3 =
"https://s3-alpha-sig.figma.com/img/5abd/11fd/39e11af175707d5a31caffa40d2a51e0?Expires=1722211200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=oY6r3fWdDNJeN~HnkFx2tR~U-wP3jbuST2FF2wsUnXlxsNzCCckpyF-NmzQb1tEKZe4Ve0rF4OpBqoIjJWy2h8eS-zRJjQYS1CQDnfgaELF1MGrx5HvSyc3qVlbH8DbXQC0PUycosdy3kEvcolJI2o2KoCXeXU4MtlSEOLGXJkzShbKpo10pvzhZ2lqqZNnF6IWyaT4jluIb3NfquXl5urpWr7ViI7YabLlpC8HS--ZXr173mGsIUy3SNUEgl7Sau7YHf9xevaC9omFzXlrauTMvOvzfSbHyoG8kusHvPCN93w0P7n1DVfDrFB7X-jR3nB5DJJTizug8L6oXUbLqUw__";
const img4 =
"https://s3-alpha-sig.figma.com/img/79de/403c/4f8b01884a6dc3d15cd1243eb90d916c?Expires=1722211200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=hoXNN9IbnOqWcJMj6FK9f6wpVrz9or10sftHawJoBNPpl893BRj00iY-mTbX~hBK8afVf3Re5V9~OPer7crckbOBmE4NmhaL2R0oGnE18pOie56gdG54zCiolA7dkpgamAn2BbQURtooMWo3MoJmNPLQmXJ2d3xrhCNPoJuEmXs0t7yX8NiNhMvS5~HiOmxcTa5c2~57pWwVojJicKIGOJs4lNCR1vrE29JeQdySHKUaz6bsFLE5LZbywwv47ekbpUQFp3POnHmqk9zfZSl3QI7IUFP7BEaHvZCS7ACf1v5Sn25~nDDMwXHEFaA9Varlu88vxnj6~-LTsl6x-CQB2A__";
const img5 =
"https://s3-alpha-sig.figma.com/img/1e5a/9875/8d3e8f60cb7154b40b7e9574aa3943f4?Expires=1722211200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=e~1zQ-m9v6DUqAnnX79Ub9SLyF2-~YOCyxS-8YMZwCvjzHuB-htJ3e0hct8v~59airldSfVP60UfqMxjWAYY~gi1hN0MJ53v4TvGyLSdwHPKmD2VLu9yCJCsLBiVteQphbSthqA27ygcwTXLRX7wSN84lcBq~NbtpPSXXIatGnDJ2A~jhrfQUt~rYYfiobdmvBwOPwLEgqUk~OlN78Y9kV7vjZs8tcqBoWGTYc~5Ca00vEGfkrBDCSPc9dEzxsRG1uQoM8-qwJ1dnO3hn5GeV8IytAq0O12CtKJiQGebjAqbcbUmlmJLY~fAOj~11gXvxgJdcJbA2y-eLmN~Vac5AQ__";
const img6 =
"https://s3-alpha-sig.figma.com/img/cd58/b301/dc5f38f3f43e1ab95ba0d024ff9492fd?Expires=1722211200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=A3XPcxkGuxVSlIhCA70Y6vjNgtuBAWCaDCzJYtfYwR9XGa~2EUDDnMuwi2IyLU43ZRCgd4XhMxOOxcKDXpdv1fXDu3na1KJUsX7unVc9YDnQPieDbfUIaYfAuXgt5cjf-TI0sz2t8roguLGEv6LHErb-tmWp9moW5xFuP0hLuF4qOvT6C8GYntJoYPOWxcPPRXH2B3~qFtXB0hK~KoWw4WoeOpf9tPOz1ny9kJKIlBGpC0~sw7tGaj9PxMI~krZZTdn0aQN3-mkhtQ0JckbeMahhZTHHfPni9hx1hCkK4HFPesbUKPR49ZQiyvkAnVI5i9MaRCszGJDylxLHMNTmIg__";



function HeroPage() {
  let text = "Get consultation";
  let color = '#2bb010';
  let text2 = "Leave your contacts and we will call you back within 30 minutes";

  return (
    <>
      <div id="home" className="min-h-screen bg-[#F2F4F7] flex items-center justify-center w-full">
        <div className="container mx-auto mt-24 flex flex-wrap items-center">
          <section className="left_sec_hero w-full md:w-1/2 h-full flex flex-col justify-center p-8">
            <div className="l_top w-full mb-8">
              <h2 className="text-2xl md:text-4xl font-bold">
                <span className="text-yellow-500 font-extrabold">User-Centric Excellence</span>: Our App Development services Tackle Your Pain Points
              </h2>
              <p className="text-sm md:text-base mt-4">
                Experience a Seamless Digital Journey with <span className="text-green-500 font-semibold">Desun</span> - Where Every Line of Code Resolves Your Challenges and <span className="font-semibold text-yellow-500">Elevates Your App Experience</span> to Unparalleled Heights.
              </p>
            </div>
            <ContactForm text={text} color={color} text2={text2} />
          </section>
          <section className="right_sec_hero w-full hidden md:initial md:w-1/2 mt-[-190px] md:flex h-[120vh] rotate-[-4deg] overflow-hidden justify-center items-center">
            <div className="allServices flex gap-5 h-[100%] w-[100%] trans">
              <div className="leftImages h-[100%] w-[310px] gap-3 flex rotate-[-5deg] flex-col items-center justify-center">
                <img src={img4} alt="Service Image 1" className="h-[90vh] w-[100%]" />
                <img src={img2} alt="Service Image 2" className="h-[90vh] w-[100%]" />
                <img src={img3} alt="Service Image 3" className="h-[90vh] w-[100%]" />
              </div>
              <div className="leftImages h-[100%] w-[310px] gap-3 flex rotate-[-5deg] flex-col items-center justify-center">
                <img src={img6} alt="Service Image 4" className="h-[80vh] w-[95%] rounded-[20px]" />
                <img src={img5} alt="Service Image 5" className="h-[80vh] w-[95%] rounded-[20px] border" />
                <img src={img1} alt="Service Image 6" className="h-[80vh] w-[95%] rounded-[20px]" />
              </div>
            </div>
          </section>
        </div>
      </div>
    </>
  );
}

export default HeroPage;
