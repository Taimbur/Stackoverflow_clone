import React from "react";
import "../styles/Sidebar.css";
import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <section>
      <div className="contianer sidebar-container">
        <p className="l-1">
          <Link to="/">home</Link>
        </p>
        <p className="l-1">
          <Link to="/">public</Link>
        </p>
        <p className="l-1">
          <Link to="/question">
            <i className="ri-earth-line fs-4 mb-5"></i>Question
          </Link>
        </p>
        <p className="l-1">
          <Link to="/">tags</Link>
        </p>
        <p className="l-1">
          <Link to="/">user</Link>
        </p>
        <p className="l-1">
          <Link to="/">companies</Link>
        </p>

        <em>
          COLLECTIVES <i className="ri-error-warning-line"></i>
        </em>
        <p className="l-1">
          <Link to="/">
            <i className="ri-star-smile-line text-warning fs-3"></i>
            explore collectives
          </Link>
        </p>
        <p className="l-1">
          <Link to="/"> teams</Link>
        </p>
        <hr />
        <p>
          <span className="fw-bold">Stack Overflow for Teams</span> <br />–
          Start collaborating and sharing organizational knowledge.
        </p>
      </div>
    </section>
  );
};

export default Sidebar;
