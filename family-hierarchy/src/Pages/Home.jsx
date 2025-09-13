import Navbar from "../components/mainsite/Navbar";
import HeroSection from "../components/mainsite/HeroSection";
import FamilySection from "../components/mainsite/FamilySection";
import Footer from "../components/mainsite/Footer";
// import LoginPage from "../Pages/Login";
import "../Styles/Navbar.css";
import "../Styles/HeroSection.css";
import "../Styles/FamilySection.css";
import "../Styles/Footer.css";
import "../Styles/Login.css";
import "../Styles/Signup.css";


function Home() {
  return (
    <>
      <Navbar />
      <HeroSection />
      <hr />
      <FamilySection />
      <Footer />
      {/* <LoginPage/> */}
    </>
  );
}

export default Home;
