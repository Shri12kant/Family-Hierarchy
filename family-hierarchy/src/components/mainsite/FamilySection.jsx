import Grandparent from "../assets/grandparent.png";
import Parents from "../assets/Parent.png";
import Children from "../assets/children.png";

export default function FamilySection() {
  return (
    <section className="hero2">
      <div className="GrandParent">
        <img src={Grandparent} alt="grandparent" />
      </div>
      <div className="GrandParent">
        <img src={Parents} alt="Parents" />
      </div>
      <div className="GrandParent">
        <img src={Children} alt="grandparent" />
      </div>
      <div className="GrandParent">
        <img src={Grandparent} alt="grandparent" />
      </div>
    </section>
  );
}
