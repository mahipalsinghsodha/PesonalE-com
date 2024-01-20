import React, { useState } from "react";
import "./Profile.css"; // Import your stylesheet

const Profile = () => {
  const initialUser = {
    name: "John Doe",
    email: "john.doe@example.com",
    phoneNumber: "123-456-7890",
    address: "",
    pinCode: "",
    state: "",
    country: "",
    profileImage: "",
  };

  const [user, setUser] = useState(initialUser);
  const [isEditing, setIsEditing] = useState(false);
  const [editedUser, setEditedUser] = useState({ ...user });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setEditedUser({ ...editedUser, [name]: value });
  };

  const handleImageUpload = (e) => {
    const imageFile = e.target.files[0];

    if (imageFile) {
      const reader = new FileReader();

      reader.onloadend = () => {
        setEditedUser({ ...editedUser, profileImage: reader.result });
      };

      reader.readAsDataURL(imageFile);
    }
  };

  const handleEdit = () => {
    setIsEditing(true);
  };

  const handleCancelEdit = () => {
    setEditedUser({ ...user });
    setIsEditing(false);
  };

  const handleSave = () => {
    setUser({ ...editedUser });
    setIsEditing(false);
  };

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <div className="profile-container">
        <div className="header">
          <div className="profile-image">
            <img
              src={editedUser.profileImage || "default-image-url"}
              alt="Profile"
            />
          </div>
          <div className="profile-details">
            <div className="profile-name">
              <h2>{user.name}</h2>
            </div>
            <div className="profile-email">
              <p>{user.email}</p>
            </div>
          </div>
        </div>
        <div className="profile-form">
          <div className="form-group">
            <label>Name:</label>
            {!isEditing ? (
              <span>{user.name}</span>
            ) : (
              <input
                type="text"
                name="name"
                value={editedUser.name}
                onChange={handleInputChange}
              />
            )}
          </div>
          <div className="form-group">
            <label>Email:</label>
            {!isEditing ? (
              <span>{user.email}</span>
            ) : (
              <input
                type="email"
                name="email"
                value={editedUser.email}
                onChange={handleInputChange}
              />
            )}
          </div>
          <div className="form-group">
            <label>Phone Number:</label>
            {!isEditing ? (
              <span>{user.phoneNumber}</span>
            ) : (
              <input
                type="tel"
                name="phoneNumber"
                value={editedUser.phoneNumber}
                onChange={handleInputChange}
              />
            )}
          </div>
          {/* Add more form fields here */}
          <div className="form-group">
            <label>Address:</label>
            {!isEditing ? (
              <span>{user.address}</span>
            ) : (
              <input
                type="text"
                name="address"
                value={editedUser.address}
                onChange={handleInputChange}
              />
            )}
          </div>
          <div className="form-group">
            <label>Pin Code:</label>
            {!isEditing ? (
              <span>{user.pinCode}</span>
            ) : (
              <input
                type="text"
                name="pinCode"
                value={editedUser.pinCode}
                onChange={handleInputChange}
              />
            )}
          </div>
          <div className="form-group">
            <label>State:</label>
            {!isEditing ? (
              <span>{user.state}</span>
            ) : (
              <input
                type="text"
                name="state"
                value={editedUser.state}
                onChange={handleInputChange}
              />
            )}
          </div>
          <div className="form-group">
            <label>Country:</label>
            {!isEditing ? (
              <span>{user.country}</span>
            ) : (
              <input
                type="text"
                name="country"
                value={editedUser.country}
                onChange={handleInputChange}
              />
            )}
          </div>
          <div className="form-group">
            <label>Upload Picture:</label>
            {isEditing && <input type="file" onChange={handleImageUpload} />}
          </div>
          {isEditing ? (
            <div>
              <button onClick={handleSave}>Save</button>
              <button onClick={handleCancelEdit}>Cancel</button>
            </div>
          ) : (
            <button onClick={handleEdit}>Edit Details</button>
          )}
        </div>
      </div>
    </div>
  );
};

export default Profile;
