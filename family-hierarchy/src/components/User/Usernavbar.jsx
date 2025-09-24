
import logo from "../assets/logo.png";
import avtar from "../assets/parent.png";
export default function Usernavbar() {
  return (
    <>
      <nav className="user-navbar">
          
      <div className="logo">
        <img src={logo} alt="logo" />
        <h2>MyFamilyApp </h2>
       
      </div>
      {/* Right Side - User Info */}
      <div className="user-info">
        <span className="username">Shrikant</span>
        <img src={avtar} alt="User Avatar"className="avatar" 
        />
      </div>
    </nav>
      
    </>
  )
}
