/**
 * Footer component
 *
 * Displays avenues to contact you.
 * Contact information is passed in from the App component that
 * renders the Footer.
 *
 * If a social value has an empty string it will not be displayed.
 */
import React from "react";
import PropTypes from "prop-types";

//import devDotToIcon from "../images/socials/devdotto.svg";
//import envelopeIcon from "../images/socials/envelope.svg";
import gitHubIcon from "../images/socials/github.svg";
//import instagramIcon from "../images/socials/instagram.svg";
import linkedInIcon from "../images/socials/linkedin.svg";
//import mediumIcon from "../images/socials/medium.svg";
//import twitterIcon from "../images/socials/twitter.svg";
//import youTubeIcon from "../images/socials/youtube.svg";

/**
 * 💡 Learning resources
 *
 *  HTML hyperlinks: https://www.w3schools.com/html/html_links.asp
 *  Opening links in new tabs: https://www.freecodecamp.org/news/how-to-use-html-to-open-link-in-new-tab/
 */

const Footer = (props) => {
  const { gitHub, linkedIn, name } = props;

  return (
    <div
      id="footer"
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: "2.5rem",
        padding: "5rem 0 3rem",
        backgroundColor: "rgba(255, 251, 255, 0.8)",
        width: "100vw",
        borderTop: "1px solid #B4B4B3",
      }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          gap: "2.5rem",
        }}
      >
        {gitHub && (
          <a href={`https://github.com/Aaronsupa`} target="_blank" rel="noopener noreferrer">
            <img src={gitHubIcon} alt="GitHub" className="socialIcon" />
          </a>
        )}
        {linkedIn && (
          <a
            href={`https://www.linkedin.com/in/aaron-johnson-b6a234229`}
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={linkedInIcon} alt="LinkedIn" className="socialIcon" />
          </a>
        )}
      </div>
      <p className="small" style={{ marginTop: 0, color: "black" }}>
        Created by {name}
      </p>
    </div>
  );
};

Footer.defaultProps = {
  name: "",
};

Footer.propTypes = {
  devDotTo: PropTypes.string,
  email: PropTypes.string,
  gitHub: PropTypes.string,
  instagram: PropTypes.string,
  linkedIn: PropTypes.string,
  medium: PropTypes.string,
  name: PropTypes.string.isRequired,
  primaryColor: PropTypes.string,
  twitter: PropTypes.string,
  youTube: PropTypes.string,

};

export default Footer;
