import React, { useState } from "react";
import "../styles/Signup.css";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
const Signup = () => {
  const navi = useNavigate();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const Data = (e) => {
    e.preventDefault();
    axios
      .post(`http://localhost:3000/signup`, { name, email, password })
      .then((res) => {
        if (res.data.Status === "Success") {
          alert("created successfully");
          navi("/login");
        }
      });
  };

  return (
    <section className="s-sec">
      <div className="container">
        <div className="row gx-5">
          <div className="col p-3 side-col">
            <h1>Join the Stack Overflow community</h1>
            <p>
              <i className="ri-message-2-line fs-1"></i>Get unstuck — ask a
              question
            </p>
            <p>
              <i className="ri-lock-unlock-line fs-1"></i>Unlock new privileges
              like voting and commenting
            </p>
            <p>
              <i className="ri-save-line fs-1"></i>Save your favorite questions,
              answers, watch tags, and more
            </p>
            <p>
              <i className="ri-trophy-line fs-1"></i>Earn reputation and badge
            </p>
            <small className="fst-italic ">
              Collaborate and share knowledge with a private group for FREE. Get
              Stack Overflow for Teams free for up to 50 users.
            </small>
          </div>
          <div className="col p-3 ">
            <div className="links">
              <center>
                <p>
                  Create your Stack Overflow account. It’s free and only takes a
                  minute.
                </p>
                <br />
                <button className="google">
                  <i className="ri-google-fill "></i> Log in with Google
                </button>
                <br />
                <button className="google bg-dark text-white my-2">
                  <i className="ri-github-fill"></i> Log in with Github
                </button>
                <br />
                <button className="google bg-primary text-white my-2">
                  <i className="ri-facebook-fill"></i> Log in with Facebook
                </button>
              </center>
            </div>
            <form onSubmit={Data}>
              <center>
                <div className="form-m">
                  <div className="f-name">
                    <label>Display Name</label>
                    <input
                      type="text"
                      required
                      name="name"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                    />
                  </div>
                  <div className="f-email">
                    <label>Email </label>
                    <input
                      type="email"
                      required
                      name="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                    />
                  </div>
                  <div className="f-passowrd">
                    <label>Passoword</label>
                    <br />
                    <input
                      type="password"
                      required
                      name="password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                    />
                  </div>
                  <button className="google bg-primary text-white">
                    Signup
                  </button>
                </div>
                <p>
                  Already have an account?
                  <Link to="/login">
                    <button className="btn btn-dark p-1">Login</button>
                  </Link>
                </p>
              </center>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Signup;
