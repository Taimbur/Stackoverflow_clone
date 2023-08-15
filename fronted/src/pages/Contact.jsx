import React from "react";
import "../styles/Contact.css";
import ss from "../assets/img/ss.png";
const Contact = () => {
  return (
    <section className="about-us">
      <div className="about">
        <img src={ss} alt="sahil" className="pic" />
        <div className="text">
          <h2 className="h-2">About Us</h2>
          <h5 className="h-5">
            Front-end Developer & <span>Designer</span>
          </h5>
          <p className="p-11">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Expedita
            natus ad sed harum itaque ullam enim quas, veniam accusantium, quia
            animi id eos adipisci iusto molestias asperiores explicabo cum vero
            atque amet corporis! Soluta illum facere consequuntur magni. Ullam
            dolorem repudiandae cumque voluptate consequatur consectetur, eos
            provident necessitatibus reiciendis corrupti!
          </p>
          <div className="data-1">
            <a
              href="https://www.instagram.com/taimbur.kha/?igshid=MzNlNGNkZWQ4Mg%3D%3D"
              className="hire"
            >
              Hire Me
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
