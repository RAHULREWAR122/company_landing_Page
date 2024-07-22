export default function FullDevelopmentCycle() {
  return (
    <div className="w-full p-8 bg-white shadow-md rounded-md md:flex md:justify-around md:items-center">
      <div className="md:w-2/5">
        <h2 className="text-2xl font-bold mb-4">Full development cycle</h2>
        <p className="mb-4">We use proven technologies</p>
        <div className="mb-4">
          <h3 className="text-xl font-semibold">Web</h3>
          <p>PHP / Javascript / Node.JS / Web Socket / Socket.io / Vue.js / Nuxt / MySQL / Laravel / GO lang / django / Python</p>
        </div>
        <div>
          <h3 className="text-xl font-semibold">Mobile</h3>
          <p>Swift / Kotlin / Alamofire / Firebase / CoreData / Room / Realm / Coroutine / RxJava / RxSwift / Unit Test / Navigation</p>
        </div>
      </div>

      <div className="mt-8 md:mt-0 md:w-1/3 md:flex md:justify-center md:items-center">
        <ul className="w-[auto] flex flex-col gap-6 text-center md:text-left text-[#101828]">
          <li className="cursor-pointer hover-border-animation md:text-left text-center flex items-center ">iOS development &nbsp;&nbsp;<span className="text-green-500 text-[18px] ml-1">{`>`}</span></li>
          <li className="cursor-pointer hover-border-animation md:text-left text-center flex items-center">Android development &nbsp;&nbsp;<span className="text-green-500 text-[18px] ml-1">{`>`}</span></li>
          <li className="cursor-pointer hover-border-animation md:text-left text-center flex items-center">Web development &nbsp;&nbsp;<span className="text-green-500 text-[18px] ml-1">{`>`}</span></li>
          <li className="cursor-pointer hover-border-animation md:text-left text-center flex items-center">Testing &nbsp;&nbsp;<span className="text-green-500 text-[18px] ml-1">{`>`}</span></li>
          <li className="cursor-pointer hover-border-animation md:text-left text-center flex items-center">Launch &nbsp;&nbsp;<span className="text-green-500 text-[18px] ml-1">{`>`}</span></li>
          <li className="cursor-pointer hover-border-animation md:text-left text-center flex items-center">IT consulting &nbsp;&nbsp;<span className="text-green-500 text-[18px] ml-1">{`>`}</span></li>
        </ul>
      </div>
    </div>
  );
}
