import Image from "next/image";
import Hero from "./Hero";
import About from './About/About'
import HappyClients from './Testmonials/HappyClients'
import Project from './components/Project/Project'
import Services from "./components/Services/Services";
import Contact from "./components/Contact/Contact";
import Brands from "./components/Brands/Brands";
import Footer from "./components/Footer/Footer";
import SubFooter from "./components/Subfooter/SubFooter";

export default function Home() {
  return (
    <div>
      <section>
      <Hero />
      </section>
       <div className="relative bottom-50 md:bottom-40 w-full  ">
          <Services/>
        </div>
        <About/>
        <HappyClients/>
        <Project/>
        <Contact/>
        <Brands/>
        <Footer/>
        <SubFooter/>
     
    </div>
  );
}
