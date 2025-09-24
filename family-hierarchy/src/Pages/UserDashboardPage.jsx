import { Routes, Route } from "react-router-dom";
import UserNavbar from "../components/User/Usernavbar";
import Profile from "../components/User/Profile";
import UserSidebar from "../components/User/UserSidebar";

function UserDashboardPage() {
  return (
    <div style={{ display: "flex", flexDirection: "column", height: "100vh" }}>
      {/* Navbar stays fixed */}
      <UserNavbar />

      <div style={{ display: "flex", flex: 1 }}>
        {/* Sidebar stays fixed */}
        <UserSidebar />

        {/* Only this area changes */}
        <div style={{ flex: 1, padding: "20px" }}>
          <Routes>
            {/* Default Dashboard Page */}
            <Route index element={<h2>Welcome to your Dashboard</h2>} />

            {/* Profile Page */}
            <Route path="profile" element={<Profile />} />

            {/* Later add Family Tree, Add Member */}
          </Routes>
        </div>
      </div>
    </div>
  );
}
export default UserDashboardPage;
