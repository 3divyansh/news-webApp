import React, { useState } from 'react';

function UserProfile({ user }) {
  const [isEditing, setIsEditing] = useState(false);
  const [profileImage, setProfileImage] = useState(user.avatarUrl);

  const handleEditClick = () => {
    setIsEditing(!isEditing);
  };

  const handleImageChange = (e) => {
    if (e.target.files && e.target.files[0]) {
      const reader = new FileReader();
      reader.onload = (event) => {
        setProfileImage(event.target.result);
      };
      reader.readAsDataURL(e.target.files[0]);
    }
  };

  const handleSaveClick = () => {
    // Here you would typically send the updated image to the server
    // and save it in the user's profile.
    setIsEditing(false);
  };

  return (
    <div className="p-4 bg-white dark:bg-gray-800 shadow-md rounded-lg">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold">{user.name}</h1>
        <button
          className="text-white-500 hover:text-white bg-blue-400 mr-5 px-4 py-2 rounded-md"
          onClick={handleEditClick}
        >
          {isEditing ? 'Cancel' : 'Edit Profile'}
        </button>
      </div>
      <div className="mt-4">
        <img
          src={profileImage}
          alt={user.name}
          className="rounded-full w-24 h-24 object-cover"
        />
        {isEditing && (
          <div className="mt-4">
            <input
              type="file"
              accept="image/*"
              onChange={handleImageChange}
              className="mt-2"
            />
            <button
              onClick={handleSaveClick}
              className="mt-4 px-4 py-2 bg-blue-500 text-white rounded-lg"
            >
              Save Changes
            </button>
          </div>
        )}
      </div>
      <p className="mt-2 text-gray-500">@{user.username}</p>
    </div>
  );
}

export default UserProfile;
