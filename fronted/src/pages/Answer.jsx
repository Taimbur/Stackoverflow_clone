import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import Sidebar from "../pages/Sidebar.jsx";
import "../styles/Answer.css";

const Answer = () => {
  const User_id = JSON.parse(window.localStorage.getItem("myItems"));
  const [aswer_id, setAswer_id] = useState(User_id[0].id);
  const [user_name, setUser_name] = useState(User_id[0].name);

  const [answer, setAnswer] = useState();

  const { id } = useParams();

  const [data, setData] = useState([]);
  const [adata, setAdata] = useState([]);

  useEffect(() => {
    axios.get(`http://localhost:3000/details/${id}}`).then((res) => {
      if (res.data) {
        setData(res.data);
      } else {
        alert("not fetch");
      }
    });

    axios.get(`http://localhost:3000/answer/${id}}`).then((res) => {
      if (res.data) {
        setAdata(res.data);
      } else {
        alert("not fetch");
      }
    });
  });

  const Questions = (e) => {
    e.preventDefault();
    axios
      .post(`http://localhost:3000/answer`, {
        aswer_id,
        user_name,
        id,
        answer,
      })
      .then((res) => {
        if (res.data.Status === "Success") {
          alert("Post successfully done");
          navi("/");
        } else {
          alert("sad");
        }
      });
  };
  return (
    <section className="m-main">
      <div className="container">
        <div className="row">
          <div className="col-3">
            <Sidebar />
          </div>
          <div className="col">
            <div className="row ">
              {data ? (
                data.map((item) => (
                  <>
                    <div className="col">
                      <div className="card ">
                        <div className="card-header text-capitalize fs-1">
                          {item.title}
                        </div>
                        <div className="card-body">
                          <blockquote className="blockquote mb-0 ">
                            <p className="fs-3 text-capitalize">
                              {item.problems}{" "}
                            </p>
                            <footer className="blockquote-footer">
                              asked _by
                              <cite title="Source Title " className="fw-bold">
                                {" "}
                                &nbsp; {item.asked_by}{" "}
                              </cite>
                            </footer>
                          </blockquote>
                        </div>
                      </div>
                    </div>
                  </>
                ))
              ) : (
                <h1>data base not well</h1>
              )}

              {adata ? (
                adata.map((ans, ids) => (
                  <div className="accordion my-5" id="accordionExample">
                    <div className="accordion-item">
                      <h2 className="accordion-header">
                        <button
                          className="accordion-button"
                          type="button"
                          data-bs-toggle="collapse"
                          data-bs-target="#collapseOne"
                          aria-expanded="true"
                          aria-controls="collapseOne"
                        >
                          Answer_by____ {ans.user_name}
                        </button>
                      </h2>
                      <div
                        id="collapseOne"
                        className="accordion-collapse collapse show"
                        data-bs-parent="#accordionExample"
                      >
                        <div className="accordion-body">
                          <strong className="fs-3 text-capitalize">
                            {ans.answer}
                          </strong>{" "}
                        </div>
                      </div>
                    </div>
                  </div>
                ))
              ) : (
                <h1>databasse not well 🤒</h1>
              )}
            </div>
            <div className="row">
              <div className="col">
                <p className="txt">
                  know someone who can answer? Share a link to this question via
                  email, Twitter, or Facebook. Your Answer
                </p>
                <form method="post" onSubmit={Questions}>
                  <div className="mb-3 my-5">
                    <textarea
                      className="form-control txt-area"
                      required
                      name="problems"
                      value={answer}
                      onChange={(e) => setAnswer(e.target.value)}
                      rows="6"
                      cols="50"
                    ></textarea>
                    <div className="invalid-feedback">
                      Please enter a message in the textarea.
                    </div>
                  </div>
                  <div className="d-grid gap-2 col-6 mx-auto">
                    <button className="btn btn-primary">Post Answer</button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Answer;
