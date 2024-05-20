// import React from 'react';
// import './Profile.css'; // Import file CSS cho styling
import './css/Profile.css'
function ProfilePage() {

let a = '1'
 a = '2'
console.log(a)
  return (
    <div className="container">
      <div className="profile-card">
        <div className="profile-header">
          <img src="background.jpg" alt="Background" className="background-img" />
          <img src="avatar.jpg" alt="Avatar" className="avatar" />
          <h1>User Name</h1>
          <p>Email: user@example.com</p>
        </div>
        <div className="profile-body">
          <div className="info">
            <p>Phone: 123-456-7890</p>
            <p>Location: City, Country</p>
            <p>Birthday: January 1, 2000</p>
            <p>Gender: Male</p>
            <p>Occupation: Software Developer</p>
          </div>
          <button>Edit Profile</button>
        </div>
      </div>
    </div>
  );
}

export default ProfilePage;
