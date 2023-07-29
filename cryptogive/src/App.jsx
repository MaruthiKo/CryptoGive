import "./styles.css";
// frontend/src/api.js
import "./output.css";
import Header from "./components/Header";

import axios from "axios";
import Home from "./components/Home";
import Donation from "./components/Donation";
import About from "./components/About";

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
      <Header />
      <Home />
      <Donation />
      <About />
    </>
  );
}

export default App;
