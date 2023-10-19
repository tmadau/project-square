import React from "react";
import Header from "../Header/Header";
import FooterLinks from "./FooterLinks";
import "./footer.scss";

const Footer = () => {
  const termsLinks = [
    {
      url: "https://en.wikipedia.org/wiki/Terms_of_service",
      text: "Terms of service",
    },
    {
      url: "https://en.wikipedia.org/wiki/Privacy_policy",
      text: "Privacy policy",
    },
    { url: "https://en.wikipedia.org/wiki/Impressum", text: "Impressum" },
  ];

  const socialLinks = [
    { url: "https://www.facebook.com/", text: "Facebook" },
    { url: "https://www.instagram.com/", text: "Instagram" },
    { url: "https://twitter.com/", text: "Twitter" },
  ];

  const companyLinks = [
    { url: "https://github.com/tmadau", text: "Github" },
    { url: "https://www.linkedin.com/", text: "Linkedin" },
    {
      url: "https://www.microsoft.com/en-za/microsoft-teams/log-in",
      text: "Teams",
    },
  ];

  const moreLinks = [
    { url: "https://www.youtube.com/", text: "Youtube" },
    { url: "https://www.behance.net/", text: "Behance" },
    { url: "https://dribbble.com/", text: "Dribble" },
  ];

  return (
    <footer>
      <div className="contact-container">
        <div>
          <Header
            paragraph="Contact us"
            heading="Have a project in mind? Let's make it happen"
          />
        </div>
        <div className="address-details">
          <p>
            22 Street Name, Surburb, 8000, Cape Town, South Africa +27 21 431
            0001
          </p>
          <a href="/">enquirie@website.co.za</a>
        </div>
        <div className="links-container">
          <div>
            <FooterLinks links={termsLinks} />
          </div>
          <div>
            <FooterLinks links={socialLinks} />
          </div>
          <div>
            <FooterLinks links={companyLinks} />
          </div>
          <div>
            <FooterLinks links={moreLinks} />
          </div>
        </div>
        <div>
          <li>
            <a href="/">Explore open jobs</a>
          </li>
          <p>&copy; 2000&minus;2023 Company Name</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
