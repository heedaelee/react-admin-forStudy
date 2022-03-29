import React from "react";
import "./topbar.css";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import LanguageIcon from "@mui/icons-material/Language";
import SettingsIcon from "@mui/icons-material/Settings";

export default function Topbar() {
  return (
    <div className="topbar">
      <div className="topbarWrapper">
        <div className="topLeft">
          <span className="logo">CityAdmin</span>
        </div>
        <div className="topRight">
          {/* tapbarIcon */}
          <div className="topbarIconContainer">
            <NotificationsNoneIcon />
            <span className="topIconBadge">2</span>
          </div>
          {/* tapbarIcon */}
          <div className="topbarIconContainer">
            <LanguageIcon />
          </div>
          {/* tapbarIcon */}
          <div className="topbarIconContainer">
            <SettingsIcon />
          </div>
          <img
            src="https://w.namu.la/s/3ca92265fffe4dd38a729df3df7dd41ea3ef12b72383958c8fd0bea79ffaa0331810fb8bea8ba09156d69e5f792eef522dd8eb932389ed972ff233c2c9adb34fc93212b29fb9fab7b73b621ed8ba6a42b4a08f89baed00d64ff1f840ffeff3c92e45cfabeb412cba9ecdf367e5c2038a"
            alt=""
            className="topAvatar"
          />
        </div>
      </div>
    </div>
  );
}
