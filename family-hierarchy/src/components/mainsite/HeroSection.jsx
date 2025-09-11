import familyImg from "../assets/family.png";

export default function HeroSection() {
  return (
    <section className="hero">
      <div className="imagefamily">
        <img src={familyImg} alt="family" />
      </div>
      <div className="Hero-content">
        <h1>welcome to my family</h1>
        <p>This project is about visualizing and managing family hierarchy.”</p>
        <button type="button" className="btn btn-success">
          Explore Family Tree
        </button>
      </div>
    </section>
  );
}
