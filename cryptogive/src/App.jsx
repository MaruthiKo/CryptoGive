import './styles.css';
// frontend/src/api.js

import axios from 'axios';

// Set the base URL for your backend API
const API_BASE_URL = 'http://localhost:5000/api';

export const fetchUserData = async (userId) => {
  try {
    const response = await axios.get(`${API_BASE_URL}/users/${userId}`);
    return response.data;
  } catch (error) {
    console.error('Error fetching user data:', error);
    return null;
  }
};

// Other API functions
// ...


function App() {

  return (
    <div>
      Hello World
    </div>
  )
}

export default App
