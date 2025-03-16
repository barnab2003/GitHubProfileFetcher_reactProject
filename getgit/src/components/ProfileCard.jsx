import React from "react";

const ProfileCard = ({ userData }) => {
  return (
    <div className="profilecard">
      <img className="avatar" src={userData.avatar_url} alt="Profile" />
      <h2>{userData.name || userData.login}</h2>
      <p className="bio">{userData.bio || "No bio available"}</p>
      <div className="details">
        <p>📍 {userData.location || "Unknown"}</p>
        <p>📌 {userData.public_repos} Repos</p>
        <p>👥 {userData.followers} Followers | {userData.following} Following</p>
      </div>
      <a href={userData.html_url} target="_blank" rel="noopener noreferrer">
        <button className="profile-btn">View Profile</button>
      </a>
    </div>
  );
};

export default ProfileCard;

