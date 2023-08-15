import React, { useState, useEffect } from "react";
import "../styles/Ask.css";
import q from "../assets/img/q.png";
import q2 from "../assets/img/q2.png";
import axios from "axios";
import { useNavigate, Link } from "react-router-dom";
const Ask = () => {
  const navi = useNavigate();
  const User_id = JSON.parse(window.localStorage.getItem("myItems"));
  const [comment_id, setComment_id] = useState(User_id[0].id)
  const [asked_by, setAsked_by] = useState(User_id[0].name);
  const [title, setTitle] = useState();
  const [problems, setProblems] = useState();
  const [d, setD] = useState(false);
  const [name, setName] = useState("");
  axios.defaults.withCredentials = true;
  useEffect(() => {
    axios.post(`http://localhost:3000/auth`).then((res) => {
      if (res.data.Status === "Success") {
        setD(true);
        setName(res.data.name);
      } else {
        setD(false)
        navi("/");

      }
    });
  });

  const Questions = (e) => {
    e.preventDefault();
    axios
      .post(`http://localhost:3000/comment`, {
        comment_id,
        asked_by,
        title,
        problems,
      })
      .then((res) => {
        if (res.data.Status === "Success") {
          alert("comments successfully done");
          navi("/question");
        } else {
          alert("sad");
        }
      });
  };
  return (
    <section className="ask">
      {d ? (
        <div className="container">
          <h3>WELOCME {name}</h3>
          <div className="row">
            <div className="col">
              <p className="fs-2">Ask a public question</p>
              <div className="jumbotron ">
                <h6 className="display-8 p-2">Writing a good question</h6>
                <small className="display-10 mx-2">
                  You’re ready to ask a programming-related question and this
                  form will help guide you through the process. Looking to ask a
                  non-programming question? See the topics here to find a
                  relevant site.
                </small>
                <hr className="my-4" />
                <ul className="summri">
                  <li>Summarize your problem in a one-line title.</li>
                  <li>Describe your problem in more detail. </li>
                  <li>
                    Describe what you tried and what you expected to happen.
                  </li>
                  <li>
                    Add “tags” which help surface your question to members of
                    the community.
                  </li>
                  <li>Review your question and post it to the site.</li>
                </ul>
              </div>

              {/* form */}
              <div className="row my-5">
                <div className="col title">
                  <form method="post" onSubmit={Questions}>
                    <div className="mb-3">
                      <label className="form-label fw-bold text-capitalize">
                        Title
                      </label>
                      <div className="form-text">
                        Be specific and imagine you’re asking a question to
                        another person.
                      </div>
                      <input
                        type="text"
                        className="form-control"
                        required
                        name="title"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                      />
                    </div>
                    <div className="mb-3 my-5">
                      <label className="form-label">
                        What are the details of your problem?
                      </label>
                      <div className="form-text">
                        Introduce the problem and expand on what you put in the
                        title. Minimum 20 characters.
                      </div>
                      <textarea
                        className="form-control txt-area"
                        required
                        name="problems"
                        value={problems}
                        onChange={(e) => setProblems(e.target.value)}
                        rows="6"
                        cols="50"
                      ></textarea>
                      <div className="invalid-feedback">
                        Please enter a message in the textarea.
                      </div>
                    </div>
                    <div className="d-grid gap-2 col-6 mx-auto">
                      <button className="btn btn-primary">Submit</button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
            <div className="col-4">
              <img src={q} alt="q" className="q" />
              <img src={q2} alt="q" className="q" />
              <div className="row my-5">
                <div className="col">
                  <div className="card w-100 vs-card">
                    <div className="card-body">
                      <h5 className="card-title text-center text-capitalize">
                        writing a good title
                      </h5>
                      <hr />
                      <p className="card-text text-center">
                        <i className="ri-quill-pen-line fs-2"></i>Your title
                        should summarize the problem. You might find that you
                        have a better idea of your title after writing out the
                        rest of the question..
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className="div">
          <h1 className="text-center fw-bold fst-italic">Not Authorized</h1>
          <Link to="/login">
            <center>
              <button className="btn btn-dark rounded-2 fs-5">Login</button>
            </center>
          </Link>
        </div>
      )}
    </section>
  );
};

export default Ask;
