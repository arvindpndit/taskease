import React from "react";
import ProfileHeader from "./ProfileHeader";
import ProfileSettings from "./ProfileSettings";

const Profile = () => {
  return (
    <div className="w-full md:w-4/5 mx-auto md:px-6 lg:px-8 mb-4 md:mb-6">
      <ProfileHeader />
      <ProfileSettings />
    </div>
  );
};

export default Profile;
