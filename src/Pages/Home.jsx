import Cards from "../componots/Cards";
import ContactForm from "../componots/ContactForm";
import Cv from "../componots/Cv";
import FreeWorkouts from "../componots/FreeWorkouts";
import Hero from "../componots/Hero";
import Hero2 from "../componots/Hero2";
import Hero3 from "../componots/Hero3";
import HeroSlide from "../componots/HeroSlide";
import PaidPlans from "../componots/PaidPlans";
import Path from "../componots/Path";
import PlansSection from "../componots/PlansSection";
import Posts from "../componots/Posts";
import Header from "./Header";


function Home() {
    return (
        <div>
<Header/>
          <Hero/>
          <Cv/>
          <Path/>
          <Cards/>
          <PlansSection/>
          <FreeWorkouts/>
          <PaidPlans/>
          <Hero2/>
          <Hero3/>
          <ContactForm/>
          <Posts/>
          <HeroSlide/>
        
        
       
        </div>
    )
}

export default Home
