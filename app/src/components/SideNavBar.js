import React, { useState } from "react";
import "./SideNavBar.css";

const SideNavBar = () => {
  const [isExpanded, setExpendState] = useState(false);
  const menuItems = [
    {
      text: "Quick Links",
      icon: "icons/quicklinks.svg",
    },
    {
      text: "Discord",
      icon: "icons/discord.svg",
    },
    {
      text: "Newsletter",
      icon: "icons/newsletter.svg",
    },
    {
      text: "Announcements",
      icon: "icons/announcement.svg",
    },
    {
      text: "Events",
      icon: "icons/events.svg",
    },
    {
      text: "Videos",
      icon: "icons/videos.svg",
    },
    {
      text: "Canvas",
      icon: "icons/canvas.svg",
    },
    {
      text: "Settings",
      icon: "icons/settings.svg",
    },
  ];
  return (
    <div
      className={
        isExpanded
          ? "side-nav-container"
          : "side-nav-container side-nav-container-NX"
      }
    >
      <div className="nav-upper">
        <div className="nav-heading">
          {isExpanded && (
            <div className="nav-brand">
              <img src="icons/btech.png" alt="nav brand" />
              <h2>Btech</h2>
            </div>
          )}
          <button
            className={
              isExpanded ? "hamburger hamburger-in" : "hamburger hamburger-out"
            }
            onClick={() => setExpendState(!isExpanded)}
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
        <div className="nav-menu">
          {menuItems.map(({ text, icon }) => (
            <a
              className={isExpanded ? "menu-item" : "menu-item menu-item-NX"}
              href="#"
            >
              <img className="menu-item-icon" src={icon} alt="" srcset="" />
              {isExpanded && <p>{text}</p>}
            </a>
          ))}
        </div>
      </div>
      <div className="nav-footer">
        {isExpanded && (
          <div className="nav-details">
            <img
              className="nav-footer-avatar"
              src="icons/admin-avatar.svg"
              alt=""
              srcset=""
            />
            <div className="nav-footer-info">
              <p className="nav-footer-user-name">M Showkat</p>
              <p className="nav-footer-user-position">store admin</p>
            </div>
          </div>
        )}
        <img className="logout-icon" src="icons/logout.svg" alt="" srcset="" />
      </div>
    </div>
  );
};

export default SideNavBar;
