import React from "react";

const ProfileCard = ({ name, title, image, email, location }) => {
  return (
    <div className="bg-white p-2 rounded-3xl shadow-lg hover:shadow-xl transition-shadow">
      <img
        src={image}
        alt={name}
        className="w-30 h-30 rounded-full mx-auto mb-4 object-cover"
      />
      <h2 className="text-xl font-semibold text-center">{name}</h2>
      <p className="text-gray-600 text-center">{title}</p>
      {email && (
        <p className="text-sm text-gray-500 text-center mt-2">{email}</p>
      )}
      <p className="text-sm text-gray-500 text-center mt-2">{location}</p>
    </div>
  );
};

export default ProfileCard;
