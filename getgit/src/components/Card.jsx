import React, { useState } from 'react';
import axios from 'axios';  // Import Axios
import ProfileCard from './ProfileCard'; 

const Card = () => {
  const [username, setUsername] = useState("");
  const [userData, setUserData] = useState(null);
  const [error, setError] = useState("");

  const fetchGitHubProfile = async (e) => {
    e.preventDefault();
    setError(""); 

    if (!username.trim()) {
      setError("Username cannot be empty");
      return;
    }

    try {
      const response = await axios.get(`https://api.github.com/users/${username}`);
      console.log("Response received:", response);
      setUserData(response.data);  // Axios stores data inside response.data
    } catch (error) {
      setError("User not found or API error");
      setUserData(null);
    }
  };

  return (
    <div className="container">
      <h1>GitHub Profile Fetcher</h1>
      <div className="search-box">
        <form onSubmit={fetchGitHubProfile}>
          <input 
            type="text" 
            value={username} 
            onChange={(e) => setUsername(e.target.value)}
            placeholder="Enter GitHub username..."
          />
          <button type="submit">Search</button>
        </form>
      </div>
      {error && <p className="error">{error}</p>}
      {userData &&<ProfileCard userData={userData} />}
    
    </div>
  );
};

export default Card;
