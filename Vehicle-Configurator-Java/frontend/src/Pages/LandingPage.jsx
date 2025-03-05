import React, { useRef } from "react";
import Header from "../Components/Header";
import Hero from "../Components/Hero";
import Features from "../Components/Features";
import About from "../Components/About";
import Clients from "../Components/Clients";
import Testomonials from "../Components/Testomonials";
import TeamMember from "../Components/TeamMember";
import Footer from "../Components/Footer";

function LandingPage() {
  // Create refs for each section
  const homeRef = useRef(null);
  const aboutRef = useRef(null);
  const servicesRef = useRef(null);
  const contactRef = useRef(null);

  // Function to scroll to a specific section
  const scrollToSection = (section) => {
    let ref;
    switch (section) {
      case "home":
        ref = homeRef;
        break;
      case "about":
        ref = aboutRef;
        break;
      case "services":
        ref = servicesRef;
        break;
      case "contact":
        ref = contactRef;
        break;
      default:
        ref = homeRef;
    }
    ref.current.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="App">
      {/* Pass the scrollToSection function to Header */}
      <Header scrollToSection={scrollToSection} />

      {/* Attach refs to each section */}
      <div ref={homeRef}>
        <Hero />
      </div>
      <Features />
      <div ref={aboutRef}>
        <About />
      </div>
       <div >
        <Testomonials />
      </div>
      <div ref={servicesRef}>
        <Clients />
      </div>
      <div ref={contactRef}>
        <TeamMember />
      </div>
      <Footer />
    </div>
  );
}

export default LandingPage;