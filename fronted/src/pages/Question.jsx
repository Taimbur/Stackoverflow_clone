import React, { useEffect, useState } from "react";
import Sidebar from "./Sidebar";
import "../styles/Question.css";
import axios from "axios";
import { Link } from "react-router-dom";
const Question = () => {
  const [data, setData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    axios.get(`http://localhost:3000/comment`).then((res) => {
      if (res.data) {
        setData(res.data);
      } else {
        alert("not fetch");
      }
    });
  });

  const postsPerPage = 2;
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const record = data.slice(indexOfFirstPost, indexOfLastPost);
  const npage = Math.ceil(data.length / postsPerPage)
  const pageNumbers = [...Array(npage + 1).keys()].slice(1)


  function prevPage() {
    if (currentPage !== 1) {
      setCurrentPage(currentPage - 1)
    }
  }
  function nextPage() {
    if (currentPage !== npage) {
      setCurrentPage(currentPage + 1)
    }
  }
  function changeCPage(id) {
    setCurrentPage(id)
  }

  return (
    <section>
      <div className="container ">
        <div className="row">
          <div className="col-3 sidebar">
            <Sidebar />
          </div>

          {/* 2rd col */}
          <div className="col-6  main">
            <div className="row my-1">
              <div className="upper-1">
                <h4>All Questions</h4>
                <a href="/ask">
                  <button className="bg-primary text-white rounded-3 p-2">
                    Ask Question
                  </button>
                </a>
              </div>
            </div>
            <div className="row my-5 gap-5">
              {/* 1 */}
              <div className="col">
                <p className="text-capitalize">
                  {data.length} <br />
                  questions
                </p>
              </div>
              {/* 2ndcol */}
              <div className="col">
                <div
                  className="btn-group line-1 "
                  role="group"
                  aria-label="Basic outlined example"
                >
                  <button type="button" className="btn btn-outline-primary">
                    Newest
                  </button>
                  <button type="button" className="btn btn-outline-primary">
                    Acive
                  </button>
                  <button type="button" className="btn btn-outline-primary">
                    Bountied <span className="bg-primary text-white">186</span>
                  </button>
                </div>
              </div>

              {/* filter */}
              <div className="col">
                <div className="dropdown ">
                  <button
                    className="btn btn-secondary dropdown-toggle"
                    type="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    Filter
                  </button>
                  <ul className="dropdown-menu">
                    <li>
                      <a className="dropdown-item" href="#">
                        Action
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">
                        Another action
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">
                        Something else here
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            {/* questin card */}

            {data ? (
              record.map((item, index) => (
                <div className="row " key={index}>
                  <div className="col">
                    <div className="card mb-3 q-1">
                      <div className="card-body">
                        <p className="card-text text-capitalize  fs-4">
                          <Link to={`/answer/${item.id}`}>{item.title}</Link>
                        </p>
                        <h5 className="card-title text-capitalize ">
                          {item.problems}
                        </h5>
                        <p className="card-text">
                          asked_by &nbsp;
                          <small className="text-body-secondary">
                            {<b>{item.asked_by}</b>}
                          </small>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              ))
            ) : (
              <h1 className="text-uppercase">database under construcion😒 </h1>
            )}

            <div className="pagination-container">
              <nav aria-label="Page navigation example">
                <ul className="pagination justify-content-center">
                  <li className="page-item ">
                    <a className="page-link" onClick={prevPage}>Previous</a>
                  </li>
                  {
                    pageNumbers.map((n, i) => (
                      <li className={`page-item ${currentPage === n ? 'active' : ''}`} key={i}>

                        <a href="#" className="page-link" onClick={() => changeCPage(n)}>{n}</a>
                      </li>
                    ))
                  }

                  <li className="page-item">
                    <a className="page-link" href="#" onClick={nextPage}>Next</a>
                  </li>
                </ul>
              </nav>
            </div>


          </div>
          {/* 3rd col */}

          <div className="col main-2">
            <div className="row">
              <div className="col-12">
                <div className="card  mb-3">
                  <div className="card-header">The Overflow Blog</div>
                  <div className="card-body">
                    <p className="card-title">
                      <i className="ri-pencil-line"></i>Announcing OverflowAI
                    </p>
                    <p className="card-text">
                      <i className="ri-pencil-line"></i>
                      Behind the scenes with the folks building OverflowAI (Ep.
                      594)
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-12">
                <div className="card  mb-3 ">
                  <div className="card-header">Feature on Meta</div>
                  <div className="card-body">
                    <p className="card-title">
                      <i className="ri-chat-1-line fs-5"></i>
                      Stack Overflow at WeAreDevelopers World Congress in Berlin
                    </p>
                    <p className="card-text">
                      <i className="ri-stack-overflow-line fs-5"></i> Temporary
                      policy: Generative AI (e.g., ChatGPT) is banned
                    </p>
                    <p className="card-text">
                      <i className="ri-stack-overflow-line fs-5"></i>Preview of
                      Search and Question-Asking Powered by GenAI
                    </p>
                  </div>
                </div>
              </div>
              <div
                className="card text-bg-light mb-3"
                style={{ maxwidth: "18rem" }}
              >
                <div className="card-header bg-light">
                  <i className="ri-google-line text-primary "></i> &nbsp; Google
                  Cloud
                  <br />
                  <small>45k memeber</small>
                </div>
                <div className="card-body">
                  <h5 className="card-title"></h5>
                  <p className="card-text">
                    Google Cloud provides organizations with leading
                    infrastructure, platform capabilities and industry solutions
                    to help them solve their most critical business problems.
                    <button className="btn btn-outline-primary">Join</button>
                  </p>
                </div>
              </div>
              <div
                className="card text-bg-light mb-3"
                style={{ maxwidth: "18rem" }}
              >
                <div className="card-header bg-light">
                  <i className="ri-google-line text-primary "></i> &nbsp; Twilio
                  <br />
                  <small>4k memeber</small>
                </div>
                <div className="card-body">
                  <h5 className="card-title"></h5>
                  <p className="card-text">
                    Twilio has democratized channels like voice, text, chat,
                    video, and email by virtualizing the world’s communications
                    infrastructure through APIs that are simple enough for any
                    <button className="btn btn-outline-primary">Join</button>
                  </p>
                </div>
              </div>
            </div>
            {/* 3col-lastrow */}

            <div className="row">
              <div className="col">
                <p>Related Tags</p>
                <p>
                  <span className="tags">javascript</span>x &nbsp; 2506399
                </p>
                <p>
                  <span className="tags">pyton</span>x &nbsp; 506399
                </p>
                <p>
                  <span className="tags">java</span>x &nbsp; 9506399
                </p>
                <p>
                  <span className="tags">c++</span>x &nbsp; 206399
                </p>
                <p>
                  <span className="tags">php</span>x &nbsp; 2599
                </p>
                <p>
                  <span className="tags">andorid</span>x &nbsp; 75399
                </p>
                <p>
                  <span className="tags">jquery</span>x &nbsp; 2706399
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Question;
