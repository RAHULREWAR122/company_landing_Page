import Footer from "@/components/Footer/page";
import HeroPage from "@/components/Hero/HeroPage";
import Navbar from "@/components/Navbar/Navbar";
import AllPages from "@/Pages/AllPages";

export const metadata = {
  title: "My Company",
  description:
    "Welcome to My Company page. We provide comprehensive services to develop complex apps and websites. Our clients are very happy with their projects. In web development, we use PHP, JavaScript, Node.js, WebSocket, Socket.io, Vue.js, Next.js, MySQL, Laravel, GoLang, Django, and Python. For mobile app development, we provide services in Swift, Kotlin, Alamofire, Firebase, CoreData, Room, Realm, Coroutine, RxJava, RxSwift, Unit Test, and Navigation. We have completed over 100 projects across more than 15 industries including Social Media, Fitness and Sports, Banking, Construction, Gaming, Education, Automotive, Transport, Medicine, Health, Restaurants, Food Delivery, Marketplaces, AR Technology, TV Series, Startups, and Online Courses.",
  keywords:
    "web development, mobile app development, PHP, JavaScript, Node.js, WebSocket, Socket.io, Vue.js, Next.js, MySQL, Laravel, GoLang, Django, Python, Swift, Kotlin, Alamofire, Firebase, CoreData, Room, Realm, Coroutine, RxJava, RxSwift, Unit Test, Navigation, Social Media, Fitness, Sports, Banking, Construction, Gaming, Education, Automotive, Transport, Medicine, Health, Restaurants, Food Delivery, Marketplaces, AR Technology, TV Series, Startups, Online Courses, app development services, website development services, complex app development, industry solutions",
};

export default function Home() {
  return (
    <>
      <Navbar />
      <HeroPage />
      <AllPages />
      <Footer />
    </>
  );
}
