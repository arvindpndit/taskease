import React from "react";
import {
  IoCardOutline,
  IoPersonOutline,
  IoAppsOutline,
  IoShieldCheckmarkOutline,
  IoChatbubblesOutline,
  IoDocumentOutline,
  IoLanguageOutline,
  IoAlertCircleOutline,
  IoNotificationsCircleOutline,
  IoCloudUploadOutline,
} from "react-icons/io5";

const ProfileSettings = () => {
  return (
    <div>
      <div className="flex flex-col gap-5 mb-24">
        {/* Payment Settings */}
        <div className="bg-gray-100 rounded-lg p-4">
          <h3 className="font-semibold text-lg mb-2">PAYMENT SETTINGS</h3>
          <ul className="list-none pl-6">
            <li className="flex items-center">
              <IoCardOutline className="mr-2 text-gray-500" />
              Transaction history
            </li>
            <li className="flex items-center">
              <IoCloudUploadOutline className="mr-2 text-gray-500" />
              Update payment
            </li>
          </ul>
        </div>

        {/* Personal */}
        <div className="bg-gray-100 rounded-lg p-4">
          <h3 className="font-semibold text-lg mb-2">PERSONAL</h3>
          <ul className="list-none pl-6">
            <li className="flex items-center">
              <IoNotificationsCircleOutline className="mr-2 text-gray-500" />
              Notification preferences
            </li>
            <li className="flex items-center">
              <IoPersonOutline className="mr-2 text-gray-500" />
              Skills
            </li>
          </ul>
        </div>

        {/* More */}
        <div className="bg-gray-100 rounded-lg p-4">
          <h3 className="font-semibold text-lg mb-2">MORE</h3>
          <ul className="list-none pl-6">
            <li className="flex items-center">
              <IoAppsOutline className="mr-2 text-gray-500" />
              Set up task alerts
            </li>
            <li className="flex items-center">
              <IoChatbubblesOutline className="mr-2 text-gray-500" />
              Community guidelines
            </li>
            <li className="flex items-center">
              <IoLanguageOutline className="mr-2 text-gray-500" />
              Language
            </li>
          </ul>
        </div>

        {/* Safety */}
        <div className="bg-gray-100 rounded-lg p-4 col-span-2">
          <h3 className="font-semibold text-lg mb-2">SAFETY</h3>
          <ul className="list-none pl-6">
            <li className="flex items-center">
              <IoShieldCheckmarkOutline className="mr-2 text-gray-500" />
              Terms and conditions
            </li>
            <li className="flex items-center">
              <IoAlertCircleOutline className="mr-2 text-gray-500" />
              Contact us
            </li>
            <li className="flex items-center">
              <IoDocumentOutline className="mr-2 text-gray-500" />
              Update number
            </li>
            <li className="flex items-center">
              <IoDocumentOutline className="mr-2 text-gray-500" />
              Delete my account
            </li>
            <li className="flex items-center">
              <IoPersonOutline className="mr-2 text-gray-500" />
              Sign out
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ProfileSettings;
