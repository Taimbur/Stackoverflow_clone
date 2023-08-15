import React from "react";
import "../styles/Footer.css";
import icon from "../assets/img/icon.png";
const Footer = () => {
  return (
    <section className="footer">
      <div className="container ">
        <div className="row f-list ">
          <div className="col">
            <img src={icon} alt="icom" className="icon" />
            <p>
              Stack OverFlow <br />
              <em className="fw-bold">Question Help</em>
            </p>
            <p className="my-5">
              Site design / logo © 2023 Stack Exchange Inc; user contributions
              licensed under CC BY-SA. rev 2023.7.24.43543
            </p>
          </div>
          <div className="col">
            <p className="fw-bold text-white">Products</p>
            <ul>
              <li>Team</li>
              <li>Adertising</li>
              <li>Collectives</li>
              <li>Talent</li>
            </ul>
          </div>
          <div className="col">
            <p className="fw-bold text-white">Company</p>
            <ul>
              <li>About</li>
              <li>Press</li>
              <li>Work Here</li>
              <li>Legal</li>
              <li>Privacy Policy</li>
              <li>Terms of Service</li>
              <li>Contact Us</li>
              <li>Cookie Settings</li>
              <li>Cookie Policy</li>
            </ul>
          </div>

          <div className="col">
            <p className="fw-bold text-white">STACK EXCHANGE NETWORK</p>
            <ul>
              <li>Technology Culture & recreation Life & arts Science</li>
              <li>API</li>
              <li>Data</li>
              <li>Business</li>
              <li>Professional</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Footer;
