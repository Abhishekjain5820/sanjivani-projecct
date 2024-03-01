import AboutUs from "./components/AboutUs";
import Cta from "./components/Cta";
import Faq from "./components/Faq";
import Footer from "./components/Footer";
import HeroSection from "./components/HeroSection";
import InnerContainer from "./components/InnerContainer";
import Navbar from "./components/Navbar";
import OuterContainer from "./components/OuterContainer";

import Services from "./components/Services";
import Skills from "./components/Skills";
import UpperNavbar from "./components/UpperNavbar";
import WhyUs from "./components/WhyUs";

function App() {
  return (
    <>
      <OuterContainer>
        <InnerContainer>
          <UpperNavbar />
          <Navbar />
          <HeroSection />
          <AboutUs />
          <WhyUs />
          <Skills />
          <Services />
          <Cta />
          <Faq />
          <Footer />
        </InnerContainer>
      </OuterContainer>
    </>
  );
}

export default App;
