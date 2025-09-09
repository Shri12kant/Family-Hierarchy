import Navbar from "./components/mainsite/Navbar";
import HeroSection from "./components/mainsite/HeroSection";
import FamilySection from "./components/mainsite/FamilySection";
import "./Styles/Navbar.css";
import "./Styles/HeroSection.css";
import "./Styles/FamilySection.css";


// import Footer from "./components/Footer/Footer";

function App() {
  return (
    <>
     
        <Navbar />

      <HeroSection />
      <hr />
      <FamilySection />
      {/* <Footer /> */}
    </>
  );
}

export default App;
