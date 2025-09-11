import Grandparent from "../assets/grandparent.png";
import Parents from "../assets/Parent.png";
import Children from "../assets/children.png";

export default function FamilySection() {
  return (
    <section className="hero2">
      <div className="GrandParent">
        <img src={Grandparent} alt="grandparent" />
        <div className="heading">
          <h2>Grandparent</h2>
        </div>
      </div>
      <div className="GrandParent">
        <img src={Parents} alt="Parents" />
        <div className="heading">
          <h2>Parents</h2>
        </div>
      </div>
      <div className="GrandParent">
        <img src={Children} alt="grandparent" />
        <div className="heading">
          <h2>Children</h2>
        </div>
      </div>
     
    </section>
  );
}
