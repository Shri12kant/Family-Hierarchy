import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import { useState, useEffect } from 'react';
import UserDashboardPage from "./Pages/UserDashboardPage";
import Home from "./Pages/Home";  
import Login from "./Pages/Login";
import Signup from "./Pages/Signup";
import About from "./Pages/About";
import Contact from "./Pages/Contact";

// Protected Route Component
const ProtectedRoute = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Check authentication status
    const checkAuth = () => {
      const token = localStorage.getItem('token'); // or your auth token
      setIsAuthenticated(!!token);
      setIsLoading(false);
    };

    checkAuth();
  }, []);

  if (isLoading) {
    return <div>Loading...</div>; // Or a loading spinner
  }

  if (!isAuthenticated) {
    return <Navigate to="/login" replace />;
  }

  return children;
};

function App() {
  return (
    <Router>
      <Routes>
        {/* Public Routes */}
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        
        {/* Protected Routes */}
        <Route 
          path="/user/*" 
          element={
            <ProtectedRoute>
              <UserDashboardPage />
            </ProtectedRoute>
          } 
        />
        
        {/* 404 Route - Keep this at the bottom */}
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </Router>
  );
}

export default App;
