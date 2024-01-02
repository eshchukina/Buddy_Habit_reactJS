import React from "react";
import { Link } from "react-router-dom";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGrip,
  faShareNodes,
  faArrowRightFromBracket,
  faEnvelope,
  faCircleInfo,
  faGears,
} from "@fortawesome/free-solid-svg-icons";

import "./Sidebar.css";

const Sidebar = ({ setActiveSection }) => {
  const handleShare = () => {
    if (navigator.share) {
      navigator
        .share({
          title: "Share App",
          url: window.location.href,
        })
        .then(() => console.log("successfully"))
        .catch((error) => console.log("Error:", error));
    } else {
      console.log("Not supported in your browser");
    }
  };

  const handleContactUs = () => {
    const emailSubject = "Contact Us Inquiry";
    const emailAddress = "frankkat377@gmail.com";

    const mailtoLink = `mailto:${emailAddress}?subject=${encodeURIComponent(
      emailSubject
    )}`;

    window.open(mailtoLink, "_blank");
  };

  return (
    <aside className={"sidebar"}>
      <div className="imageContainer">
        <a >
          <div className="imageCircleWrapper">
            <div className="imageCircle"></div>
          </div>
          John Doe
        </a>
      </div>
      <div className="settingContainer">
        <Link to="/settingsList">

          <FontAwesomeIcon icon={faGears} className="link-img" />
          settings
        </Link>
      </div>

      <div className="link-sidebar">
      <Link to="/dashboard">
          <FontAwesomeIcon icon={faGrip} className="link-img" />
          Habits
        </Link>

        <div>
        <Link to="/instruction">
            <FontAwesomeIcon icon={faCircleInfo} className="link-img" />
            Instruction
          </Link>

          <a onClick={handleShare}>
            <FontAwesomeIcon icon={faShareNodes} className="link-img" />
            Share
          </a>

          <a onClick={handleContactUs}>
            <FontAwesomeIcon icon={faEnvelope} className="link-img" />
            Contact us
          </a>
          <a>
            <FontAwesomeIcon
              icon={faArrowRightFromBracket}
              className="link-img"
            />
            Log out
          </a>
        </div>

        <div className="logoWrapper">
          {" "}
          <img src="bh logo.png"></img>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;