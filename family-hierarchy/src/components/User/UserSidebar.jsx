// import { NavLink } from "react-router-dom";
// import "../../Styles/UserSidebar.css";

// export default function UserSidebar() {
//   return (
//     <aside className="sidebar">
//       <ul>
//         <li><NavLink to="/">Home</NavLink></li>
//         <li><NavLink to="/dashboard">Dashboard</NavLink></li>
//         <li><NavLink to="/dashboard/profile">Profile</NavLink></li>
//         <li><NavLink to="/dashboard/family-tree">Family Tree</NavLink></li>
//         <li><NavLink to="/dashboard/add-member">Add Member</NavLink></li>
//         <li><NavLink to="/logout">Logout</NavLink></li>
//       </ul>

//     </aside>
//   );
// }
import { NavLink } from "react-router-dom";
export default function UserSidebar() {
  return (
    <aside className="sidebar">
      <ul>

        <li><NavLink to="/Home">Home</NavLink></li>
        <NavLink to="/UserDashboard">Dashboard</NavLink>
        <li><NavLink to="/UserDashboard/profile">Profile</NavLink></li>
        <li><NavLink to="/UserDashboard/family-tree">Family Tree</NavLink></li>
        <li><NavLink to="/UserDashboard/add-member">Add Member</NavLink></li>
      </ul>
    </aside>
  );
}
