import React from "react";

const ProfileSettings = () => {
  return (
    <div>
      <div className="flex flex-col gap-5 mb-24">
        {/* Payment Settings */}
        <div className="bg-gray-100 rounded-lg p-4">
          <h3 className="font-semibold text-lg mb-2">PAYMENT SETTINGS</h3>
          <ul className="list-disc pl-6">
            <li>Transaction history</li>
            <li>Update payment</li>
          </ul>
        </div>

        {/* Personal */}
        <div className="bg-gray-100 rounded-lg p-4">
          <h3 className="font-semibold text-lg mb-2">PERSONAL</h3>
          <ul className="list-disc pl-6">
            <li>Notification preferences</li>
            <li>Skills</li>
          </ul>
        </div>

        {/* More */}
        <div className="bg-gray-100 rounded-lg p-4">
          <h3 className="font-semibold text-lg mb-2">MORE</h3>
          <ul className="list-disc pl-6">
            <li>Set up task alerts</li>
            <li>Community guidelines</li>
            <li>Language</li>
          </ul>
        </div>

        {/* Safety */}
        <div className="bg-gray-100 rounded-lg p-4 col-span-2">
          <h3 className="font-semibold text-lg mb-2">SAFETY</h3>
          <ul className="list-disc pl-6">
            <li>Terms and conditions</li>
            <li>Contact us</li>
            <li>Update number</li>
            <li>Delete my account</li>
            <li>Sign out</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ProfileSettings;
