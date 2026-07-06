import HeroSection from "./_components/heroSection";
import NewList from "./_components/newList";
import LookBook from "./_components/lookBook";
import FeaturedCollection from "./_components/featuredCollection";

export default function Home() {
  return (
    <div>
     <HeroSection/>
     <NewList/>
     <LookBook/>
     <FeaturedCollection/>
    </div>
  );
}
