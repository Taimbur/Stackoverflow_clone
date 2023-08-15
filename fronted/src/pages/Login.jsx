import React, { useState } from "react";
import icon from "../assets/img/icon.png";
import "../styles/Signup.css";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

const Login = () => {
  const navi = useNavigate();
  axios.defaults.withCredentials = true;
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const Data = (e) => {
    e.preventDefault();
    axios
      .post(`http://localhost:3000/login`, { email, password })
      .then((res) => {
        if (res.data.Status === "Success") {
          alert("login success welcome");
          localStorage.setItem("myItems", JSON.stringify(res.data.data));
          navi("/");
          window.location.reload();
        } else {
          alert(res.data.Error);
        }
      });
  };

  return (
    <section>
      <div className="container">
        <div className="links">
          <center>
            <img src={icon} alt="icon" className="f-icon" />
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
              <label>Email </label>
              <br />
              <input
                type="email"
                required
                name="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <br />

              <label>Passoword</label>
              <br />
              <input
                type="password"
                required
                name="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <br />
              <button className="google bg-primary text-white">Login</button>
            </div>
            <p>
              Don’t have an account? <Link to="/signup">Sign up</Link> <br />
              Are you an employer? Sign up on Talent{" "}
            </p>
          </center>
        </form>
      </div>
    </section>
  );
};

export default Login;
