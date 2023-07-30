/* eslint-disable react-refresh/only-export-components */
import "./styles.css";
// frontend/src/api.js
import "./output.css";

import axios from "axios";
import Header from "./components/Header";
import About from "./components/About";
import Footer from "./components/Footer";
import DonationPage from "./pages/DonationPage";
import SignupPage from "./pages/SignUpPage";
import LoginPage from "./pages/LoginPage";
import HomePage from "./pages/HomePage";
import { Route, BrowserRouter, Routes } from "react-router-dom";

// Set the base URL for your backend API
const API_BASE_URL = "http://localhost:5000/api";

export const fetchUserData = async (userId) => {
  try {
    const response = await axios.get(`${API_BASE_URL}/users/${userId}`);
    return response.data;
  } catch (error) {
    console.error("Error fetching user data:", error);
    return null;
  }
};

// Other API functions
// ...

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="about" element={<About />} />
          <Route path="sign-up" element={<SignupPage />} />
          <Route path="donation" element={<DonationPage />} />
          <Route path="login" element={<LoginPage />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
