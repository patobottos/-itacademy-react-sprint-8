import { FooterContainer } from "./Footer.styled";
import { FaFacebook, FaInstagram, FaYoutube, FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <FooterContainer>
      <div>
        <p>More From Star Wars:</p>
      </div>

      <div className="icons">
        <ul>
          <li>
            <a href="https://www.facebook.com/StarWars">
              <FaFacebook />
            </a>
          </li>
          <li>
            <a href="https://www.instagram.com/starwars/">
              <FaInstagram />
            </a>
          </li>
          <li>
            <a href="https://twitter.com/starwars">
              <FaTwitter />
            </a>
          </li>
          <li>
            <a href="https://www.youtube.com/user/starwars">
              <FaYoutube />
            </a>
          </li>
        </ul>
      </div>

      <div className="lucasfilm">
        <p>TM & © Lucasfilm Ltd. All Rights Reserved</p>
      </div>

      <div className="lastline">
        <ul>
          <li>
            Terms of Use<div className="laser"></div>
          </li>
          <div className="grey-bar"></div>
          <li>
            Additional Content Information<div className="laser"></div>
          </li>
          <div className="grey-bar"></div>
          <li>
            Privacy Policy<div className="laser"></div>
          </li>
          <div className="grey-bar"></div>
          <li>
            Children's Online Privacy Policy<div className="laser"></div>
          </li>
          <div className="grey-bar"></div>
          <li>
            Your California Privacy Rights<div className="laser"></div>
          </li>
          <div className="grey-bar"></div>
          <li>
            Star Wars at shopDisney<div className="laser"></div>
          </li>
          <div className="grey-bar"></div>
          <li>
            Star Wars Helpdesk<div className="laser"></div>
          </li>
          <div className="grey-bar"></div>
          <li>
            Interest-Based Ads<div className="laser"></div>
          </li>
          <div className="grey-bar"></div>
          <li>
            Do Not Sell My Personal Information<div className="laser"></div>
          </li>
        </ul>
      </div>
    </FooterContainer>
  );
};

export default Footer;
