// frontend/src/pages/HomePage.js

import { useEffect, useState } from 'react';
import { fetchUserData } from '../api';

const HomePage = () => {
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    const userId = 'someUserId'; // Replace with the actual user ID
    fetchUserData(userId)
      .then((data) => setUserData(data))
      .catch((error) => console.error('Error fetching user data:', error));
  }, []);

  return (
    <div>
      {userData ? (
        <p>Hello, {userData.name}! Welcome to the Home Page.</p>
      ) : (
        <p>Loading user data...</p>
      )}
    </div>
  );
};

export default HomePage;
