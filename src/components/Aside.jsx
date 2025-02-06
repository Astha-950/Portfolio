import React, { useState } from "react";
import { GiMailbox, GiPhone, GiMayanPyramid } from "react-icons/gi";
import { SocialIcon } from "react-social-icons";

const Aside = () => {
  const [isSidebarActive, setSidebarActive] = useState(false);

  const toggleSidebar = () => {
    setSidebarActive(!isSidebarActive);
  };

  return (
    <aside className={`sidebar ${isSidebarActive ? "active" : ""}`}>
      <div className="sidebar-info">
        <figure className="avatar-box">
          <img src={"./images/profile-photo.jpg"} alt="Astha Chaurasia" width="80" />
        </figure>

        <div className="info-content">
          <h1 className="name" title="Astha Chaurasia">
            Astha Chaurasia
          </h1>
        </div>

        <button className="info_more-btn" data-sidebar-btn onClick={toggleSidebar}>
          <span>Show Contacts</span>
        </button>
      </div>

      <div className="sidebar-info_more">
        <div className="separator"></div>

        <ul className="contacts-list">
          <li className="contact-item">
            <div className="icon-box">
              <GiMailbox />
            </div>
            <div className="contact-info">
              <p className="contact-title">Email</p>
              <a href="mailto:asthachaurasia272006@gmail.com" className="contact-link">
                asthachaurasia272006@gmail.com
              </a>
            </div>
          </li>

          <li className="contact-item">
            <div className="icon-box">
              <GiPhone />
            </div>
            <div className="contact-info">
              <p className="contact-title">Phone</p>
              <a href="tel:9752294198" className="contact-link">
                Call
              </a>
            </div>
          </li>

          <li className="contact-item">
            <div className="icon-box">
              <GiMayanPyramid />
            </div>
            <div className="contact-info">
              <p className="contact-title">Location</p>
              <address>Gwalior, M.P</address>
            </div>
          </li>
        </ul>

        <div className="separator"></div>

        <ul className="social-list">
          <li className="social-item">
            <a href="https://github.com/Astha-950"  className="social-link" >
            <SocialIcon href="https://github.com/Astha-950" url="https://github.com/" target="_blank" rel="noopener noreferrer" style={{ height: 40, width: 40 }} />
            </a>
          </li>
          <li className="social-item">
            <a href="https://linkedin.com/" className="social-link">
            <SocialIcon href="https://www.linkedin.com/in/astha-chaurasia-825605253/" url="https://linkedin.com/" target="_blank" rel="noopener noreferrer" style={{ height: 40, width: 40 }} />
            </a>
          </li>
          <li className="social-item">
      <a
        href="https://www.geeksforgeeks.org/user/asthachauraxfyc/"
        className="social-link"
        target="_blank"
        rel="noopener noreferrer"
      >
        
        <img
          src="./images/gfg-logo.png" 
          alt="GeeksforGeeks"
          style={{ width: 40, height: 40 ,borderRadius: "50%" }}
        />
      </a>
    </li>
          <li className="social-item">
            <a href="https://leetcode.com/u/asthachaurasia272006/" className="social-link">
            <SocialIcon href="https://leetcode.com/u/asthachaurasia272006/" url="https://leetcode.com/" target="_blank" rel="noopener noreferrer" style={{ height: 40, width: 40 }} />
            </a>
          </li>
        </ul>
      </div>
    </aside>
  );
};

export default Aside;
