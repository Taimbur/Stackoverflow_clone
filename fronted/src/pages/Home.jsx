import React from "react";
import "../styles/Home.css";
import logo from "../assets/img/stackoverflow.png";
import team from "../assets/img/team.png";
import facebook from "../assets/img/facebook.png";
import facebook1 from "../assets/img/facebook1.png";
import facebook2 from "../assets/img/illo-question.png";
import facebook3 from "../assets/img/f-team.png";
import facebook4 from "../assets/img/f-team-r.png";
import free from "../assets/img/free.jpg";
import free1 from "../assets/img/f-pik.jpg";
import icon from "../assets/img/icon.png";
import icon1 from "../assets/img/icon1.png";
import icon2 from "../assets/img/icon2.png";
import icon3 from "../assets/img/icon3.png";
import icon4 from "../assets/img/icon4.png";
import icon5 from "../assets/img/icon5.png";
import icon6 from "../assets/img/icon6.png";
import icon7 from "../assets/img/icon7.png";
import icon8 from "../assets/img/icon8.png";
import { useEffect } from "react";

const Home = () => {
  AOS.init({
    duration: 1500,
  });

  useEffect(() => {
    AOS.init();
    // window.scrollTo(top);
  });

  return (
    <section>
      <div className="container h">
        <div className="p">
          <div className="row ">
            <div className="col topC">
              <div>
                <div className="bubble b1">
                  <span className="icon-m">
                    <i className="ri-search-line icon-m"></i>
                  </span>
                  <br />
                  <p className="p1">
                    Find the best answer to your technical question, help others
                    answer theirs
                  </p>
                  <button className="btn">Join The Community</button>
                </div>
                <div className="pointer b1"></div>
              </div>
              <div className="bubble blurred"></div>
              <div className="pointer blurred"></div>
            </div>
            <div className="col">
              <div>
                <div className="bubble b2">
                  <span className="icon-m2">
                    <i className="ri-lock-2-line"></i>
                  </span>
                  <p className="p2">
                    Want a secure, private space for your technical knowledge?
                  </p>
                  <button className="btn2">Discover Teams</button>
                </div>
                <div className="pointer b2"></div>
              </div>
              <div className="bubble blurred"></div>
              <div className="pointer blurred"></div>
            </div>
          </div>
          <div className=" bodyyy">
            <p>Every</p>
            <p className="bbb">
              <span className="spannn">
                Web Developer
                <br />
                Game Developer
                <br />
                Data Scientice <br />
                System Developer
                <br />
                Mobile Developer
              </span>
            </p>
            <p> has a tab open to Stack Overflow</p>
          </div>
        </div>

        <h1 className="text-center ">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fillRule="currentColor"
            className="bi bi-chevron-double-down"
            viewBox="0 0 16 16"
          >
            <path
              fillRule="evenodd"
              d="M1.646 6.646a.5.5 0 0 1 .708 0L8 12.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z"
            />
            <path
              fillRule="evenodd"
              d="M1.646 2.646a.5.5 0 0 1 .708 0L8 8.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z"
            />
          </svg>
        </h1>
        <div className="row bg-dark text-white">
          <div className="col">
            <h1 className="highlight">100+ million</h1>
            <p className="visitor">
              monthly visitors to Stack Overflow & Stack Exchange
            </p>
          </div>
          <div className="col">
            <h1 className="highlight"> 45.1+ billion</h1>
            <p className="visitor">Times a developer got help since 2008 </p>
          </div>
          <div className="col">
            <h1 className="highlight"> 191% ROI</h1>
            <p className="visitor">
              from companies using Stack Overflow for Teams
            </p>
          </div>
          <div className="col">
            <h1 className="highlight">5,000+</h1>
            <p className="visitor">
              Stack Overflow for Teams instances active every da
            </p>
          </div>
        </div>

        {/* big-cards */}
        <div className="container px-4 text-center ">
          <div className="row gx-5 bb-card">
            <div className="col">
              <div className="p-3">
                {" "}
                <div className="card rang1" style={{ width: "25rem" }}>
                  <center>
                    <img src={logo} alt="logo" className="w-50 " />
                  </center>
                  <div className="card-body">
                    <center>
                      <img
                        className="prithivi1"
                        src="https://cdn.sstatic.net/Img/home/illo-public.svg?v=14bd5a506009"
                        alt="earth"
                      />
                    </center>
                    <p className="t-line">
                      A public platform building the definitive collection of
                      coding questions & answers
                    </p>
                    <p className="m-line">
                      A community-based space to find and contribute answers to
                      technical challenges, and one of the most popular websites
                      in the world.
                    </p>
                    <p className="text-center">
                      <button className="btn">Join The Community</button>
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="p-3">
                {" "}
                <div className="card rang2" style={{ width: "25rem" }}>
                  <center>
                    <img src={team} alt="logo" className="w-50" />
                  </center>
                  <div className="card-body">
                    <center>
                      <img
                        className="prithivi"
                        src="https://cdn.sstatic.net/Img/home/illo-teams.svg?v=7e543f14fcc0"
                        alt="earth"
                      />
                    </center>
                    <p className="t-line">
                      A private collaboration & knowledge sharing SaaS platform
                      for companies
                    </p>
                    <p className="m-line">
                      A web-based platform to increase productivity, decrease
                      cycle times, accelerate time to market, and protect
                      institutional knowledge.
                    </p>
                    <p className="text-center">
                      <button className="btn2">For Large Organization </button>
                      &nbsp;
                      <span>
                        <button className="btn2">
                          For small<i className="ri-group-line"></i>
                        </button>
                      </span>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* carousel_start_here */}

        <div className="carousel">
          <h1 className="fsw-bold fs-5 text-center mt-3 text-capitalize fst-italic">
            Thousands of organizations around the globe use Stack Overflow for
            Teams
          </h1>
          <div
            id="carouselExampleDark"
            className="carousel carousel-dark slide"
          >
            <div className="carousel-indicators">
              <button
                type="button"
                data-bs-target="#carouselExampleDark"
                data-bs-slide-to="0"
                className="active"
                aria-current="true"
                aria-label="Slide 1"
              ></button>
              <button
                type="button"
                data-bs-target="#carouselExampleDark"
                data-bs-slide-to="1"
                aria-label="Slide 2"
              ></button>
              <button
                type="button"
                data-bs-target="#carouselExampleDark"
                data-bs-slide-to="2"
                aria-label="Slide 3"
              ></button>
              <button
                type="button"
                data-bs-target="#carouselExampleDark"
                data-bs-slide-to="3"
                aria-label="Slide 4"
              ></button>
              <button
                type="button"
                data-bs-target="#carouselExampleDark"
                data-bs-slide-to="4"
                aria-label="Slide 5"
              ></button>
            </div>
            <div className="carousel-inner">
              <div className="carousel-item active" data-bs-interval="10000">
                <div className="row boxes">
                  <img
                    src="https://cdn.sstatic.net/Img/product/teams/logos/wisetech-global-alt.svg?v=3b6b11e76536"
                    className="d-block "
                    alt="..."
                  />

                  <img
                    src="https://cdn.sstatic.net/Img/product/teams/logos/philips-alt.svg?v=7fc60c993103"
                    className="d-block "
                    alt="..."
                  />

                  <img
                    src="https://cdn.sstatic.net/Img/product/teams/logos/dialpad-alt.svg?v=4e63facf7f79"
                    className="d-block "
                    alt="..."
                  />
                  <img
                    src="https://cdn.sstatic.net/Img/product/teams/logos/intercom-alt.svg?v=3eda71aed47c"
                    className="d-block "
                    alt="..."
                  />
                </div>
              </div>
              <div className="carousel-item" data-bs-interval="2000">
                <div className="row boxes">
                  <img
                    src="https://cdn.sstatic.net/Img/product/teams/logos/chevron-alt.svg?v=3bfd2c06a64b"
                    className="d-block "
                    alt="..."
                  />

                  <img
                    src="https://cdn.sstatic.net/Img/product/teams/logos/overstock-alt.svg?v=ed38ea932870"
                    className="d-block "
                    alt="..."
                  />

                  <img
                    src="https://cdn.sstatic.net/Img/product/teams/logos/verizon-media-alt.svg?v=f335b20096b2"
                    className="d-block "
                    alt="..."
                  />
                  <img
                    src="https://cdn.sstatic.net/Img/product/teams/logos/logitech-alt.svg?v=a99c74b88566"
                    className="d-block "
                    alt="..."
                  />
                </div>
              </div>
              <div className="carousel-item">
                <center>
                  <img
                    src="https://cdn.sstatic.net/Img/product/teams/logos/microsoft-alt.svg?v=e57319450314"
                    className="d-block "
                    alt="..."
                  />
                </center>
              </div>
              <div className="carousel-item">
                <center>
                  <img
                    src="https://cdn.sstatic.net/Img/product/teams/logos/barkbox-alt.svg?v=419890745024"
                    className="d-block "
                    alt="..."
                  />
                </center>
              </div>
              <div className="carousel-item">
                <center>
                  <img
                    src="https://cdn.sstatic.net/Img/product/teams/logos/expensify-alt.svg?v=375099b85ce5"
                    className="d-block "
                    alt="..."
                  />
                </center>
              </div>
            </div>
            <button
              className="carousel-control-prev"
              type="button"
              data-bs-target="#carouselExampleDark"
              data-bs-slide="prev"
            ></button>
            <button
              className="carousel-control-next"
              type="button"
              data-bs-target="#carouselExampleDark"
              data-bs-slide="next"
            ></button>
          </div>
        </div>

        <div className="row mt-2 ">
          <div className="col">
            <img src={facebook} alt="img" className="side w-100 h-100" />
          </div>
          <div className="col">
            <img src={facebook1} alt="img" className="middle w-100 h-100" />
          </div>
          <div className="col">
            <img src={facebook2} alt="img" className="side w-100 h-100" />
          </div>
        </div>
        <div className="team-sec  ">
          <center>
            <img src={team} alt="team" className="team_img " />
          </center>
          <h1 className="t-line text-white fs-2">
            Capture your company’s knowledge and context
          </h1>
          <h1 className="t-line text-white fs-2">
            in a discoverable format to
            <span className="unlock_team"> unblock your team</span>
          </h1>
          <center className="mt-5">
            <button className="btn2">Take a Tour of Team </button>
          </center>

          <div className="row mt-5 ">
            <div className="col ">
              <h1 className="t-line text-white">
                <center>
                  <i className="ri-check-line"></i>
                </center>
                Increase productivity
              </h1>
              <p className="m-line ">
                If somebody somewhere has the right answer, suddenly you have it
                too. Collaborate better in a remote-first world.
              </p>
            </div>
            <div className="col">
              <h1 className="t-line text-white">
                <center>
                  <i className="ri-check-line"></i>
                </center>
                Accelerate time to market
              </h1>
              <p className="m-line ">
                Shorten the time between initial idea and complete product. Take
                delays and misinformation out of the equation.
              </p>
            </div>
            <div className="col">
              <h1 className="t-line text-white">
                <center>
                  <i className="ri-check-line"></i>
                </center>
                Protect institutional knowledge
              </h1>
              <p className="m-line ">
                People come and people go, but if you capture their
                contributions in one central place, that expertise sticks
                around.
              </p>
            </div>
          </div>
        </div>

        <div className="support bg-dark my-1">
          <h1 className="text-center t-line text-white fs-2 mt-5">
            Ensure your company stays on course
          </h1>
          <p className="text-white m-line mt-4">
            Here are just a few types of technologists that we help.
          </p>

          {/* suppport card */}

          <div className=" row gap-2 mx-auto mt-4">
            <div className="col">
              <div
                className="card cardkabg text-white"
                style={{ width: "16rem" }}
              >
                <div className="card-body">
                  <center>
                    <i className="ri-rocket-line r-icon"></i>
                    <p className="card-text t-line text-white">
                      DevOps engineers
                    </p>
                  </center>
                  <p className="text-center m-line hidden desc-support ">
                    Shipping new products and features requires teamwork and
                    coordination. Forget checklists and long docs no one ever
                    reads.
                  </p>
                </div>
              </div>
            </div>
            <div className="col">
              <div
                className="card cardkabg text-white"
                style={{ width: "16rem" }}
              >
                <div className="card-body">
                  <center>
                    <i className="ri-group-2-line r-icon"></i>
                    <p className="card-text t-line text-white">
                      Engineering leaders
                    </p>
                  </center>
                  <p className="text-center m-line hidden desc-support">
                    Help your team get the information they need to do their job
                    - reduce burnout and help engineers grow and learn together.
                  </p>
                </div>
              </div>
            </div>
            <div className="col">
              <div
                className="card cardkabg text-white"
                style={{ width: "16rem" }}
              >
                <div className="card-body">
                  <center>
                    <i className="ri-headphone-line r-icon"></i>
                    <p className="card-text t-line text-white">Support teams</p>
                  </center>
                  <p className="text-center m-line hidden desc-support ">
                    Level up your support by providing information to your
                    customers using a natural interface: questions and answers.
                  </p>
                </div>
              </div>
            </div>
            <div className="col">
              <div
                className="card cardkabg text-white"
                style={{ width: "16rem" }}
              >
                <div className="card-body">
                  <center>
                    <i className="ri-settings-3-line r-icon"></i>
                    <p className="card-text t-line text-white">
                      Software engineers{" "}
                    </p>
                  </center>
                  <p className="text-center m-line hidden desc-support ">
                    Help engineers be more efficient and streamline knowledge
                    sharing using a tool they already love and trust.
                  </p>
                </div>
              </div>
            </div>
            <div className="col">
              <div
                className="card cardkabg text-white"
                style={{ width: "16rem" }}
              >
                <div className="card-body">
                  <center>
                    <i className="ri-key-2-line r-icon"></i>
                    <p className="card-text t-line text-white">
                      Data scientists
                    </p>
                  </center>
                  <p className="text-center m-line hidden desc-support ">
                    Shipping new products and features requires teamwork and
                    coordination. Forget checklists and long docs no one ever
                    reads.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* bill-card */}

          <div className="bill-card mt-5 mx-3">
            <h1>annual billing </h1>
            <div className="row mt-5 gap-2 gx-3">
              <div className="col">
                <div className="card-bill">
                  <button className="btn  mb-5 mx-2 px-4 py-2">Free</button>
                  <h1 className="t-line fs-2">Free</h1>

                  <p className="title m-line">No credit card required</p>
                  <br />
                  <hr className="hr" />
                  <ul>
                    <li className="m-line">
                      <p>
                        <i className="ri-volume-up-line"></i>
                        &nbsp;
                        <span className="sub-t">
                          ChatOps integrations - Slack & Microsoft Teams
                        </span>
                      </p>
                    </li>
                    <li className="m-line">
                      <p>
                        <i className="ri-door-lock-line"></i> &nbsp;
                        <span className="sub-t">
                          Your own private space hosted on
                          stackoverflowteams.com{" "}
                        </span>
                      </p>
                    </li>

                    <li className="m-line">
                      <p>
                        <i className="ri-delete-bin-line"></i>
                        &nbsp;
                        <span className="sub-t">
                          Structured and searchable knowledge base
                        </span>
                      </p>
                    </li>
                  </ul>

                  <p>
                    <button className="b-button">Create a free Team</button>
                  </p>
                  <p className="text-center  l_txt-bill">
                    Always free up to 50 teammates
                  </p>
                </div>
              </div>

              <div className="col">
                <div className="card-bill">
                  <button className=" text-white bg-secondary rounded-2 mb-5 mx-2 px-4 py-2">
                    Basic
                  </button>
                  <h1 className="t-line fs-2">$6.50 USD</h1>

                  <p className="title m-line">per teammate / month</p>
                  <br />
                  <hr className="hr" />
                  <ul>
                    <li className="m-line">
                      <p>
                        <i className="ri-key-2-line"></i> &nbsp;
                        <span className="sub-t">
                          Single sign-on (SSO) with SAML + Okta integration{" "}
                        </span>
                      </p>
                    </li>
                    <li className="m-line">
                      <p>
                        <i className="ri-volume-up-fill"></i> &nbsp;
                        <span className="sub-t">
                          ChatOps integrations - Slack & Microsoft Teams{" "}
                        </span>
                      </p>
                    </li>

                    <li className="m-line">
                      <p>
                        <i className="ri-lock-unlock-line"></i> &nbsp;
                        <span className="sub-t">
                          Your own private space hosted on
                          stackoverflowteams.com{" "}
                        </span>
                      </p>
                    </li>
                    <li className="m-line">
                      <p>
                        <i className="ri-delete-bin-7-line"></i> &nbsp;
                        <span className="sub-t">
                          Structured and searchable knowledge base{" "}
                        </span>
                      </p>
                    </li>
                  </ul>

                  <p>
                    <button className="b-button">Get Started</button>
                  </p>
                  <p className="text-center  l_txt-bill">
                    Up to 250 teammates{" "}
                  </p>
                </div>
              </div>

              <div className="col">
                <div className="card-bill">
                  <button className=" bg-dark rounded-2 text-white mb-5 mx-2 px-4 py-2">
                    Busines
                  </button>
                  <h1 className="t-line fs-2">RECOMMENDED</h1>

                  <p className="title m-line fs-2 fw-bold text-dark">
                    $13.50 USD
                  </p>
                  <p className="title m-line">per teammate / month</p>
                  <p className="title m-line">
                    +All the features of Basic plus…
                  </p>
                  <br />
                  <hr className="hr" />
                  <ul>
                    <li className="m-line">
                      <p>
                        <i className="ri-article-line"></i>
                        &nbsp;
                        <span className="sub-t">
                          Long-form knowledge with Articles{" "}
                        </span>
                      </p>
                    </li>
                    <li className="m-line">
                      <p>
                        <i className="ri-links-line"></i> &nbsp;
                        <span className="sub-t">
                          Additional integrations — ChatOps, Jira, GitHub & Okta
                        </span>
                      </p>
                    </li>

                    <li className="m-line">
                      <p>
                        <i className="ri-bar-chart-grouped-line"></i> &nbsp;
                        <span className="sub-t">
                          Group content together into Collections{" "}
                        </span>
                      </p>
                    </li>
                    <li className="m-line">
                      <p>
                        <i className="ri-secure-payment-fill"></i> &nbsp;
                        <span className="sub-t">
                          Priority customer support{" "}
                        </span>
                      </p>
                    </li>
                    <li className="m-line">
                      <p>
                        <i className="ri-tools-line"></i> &nbsp;
                        <span className="sub-t">Content Health tools </span>
                      </p>
                    </li>
                  </ul>

                  <p>
                    <button className="b-button">Get Started</button>
                  </p>
                  <p className="text-center  l_txt-bill">
                    Unlimited teammates{" "}
                  </p>
                </div>
              </div>

              <div className="col">
                <div className="card-bill">
                  <button className=" bg-primary rounded-2 text-white mb-5 mx-2 px-4 py-2">
                    Enterprise
                  </button>
                  <h1 className="t-line fs-2">Custom pricing</h1>

                  <p className="title m-line fs-2 fw-bold text-dark">
                    Let’s talk about what you need
                  </p>
                  <p className="title m-line">
                    +Premium features of Business plus…
                  </p>
                  <br />
                  <hr className="hr" />
                  <ul>
                    <li className="m-line">
                      <p>
                        <i className="ri-group-line"></i> &nbsp;
                        <span className="sub-t">
                          Unlimited Teams within your instance{" "}
                        </span>
                      </p>
                    </li>
                    <li className="m-line">
                      <p>
                        <i className="ri-download-cloud-line"></i> &nbsp;
                        <span className="sub-t">
                          Flexible hosting options — cloud or on-premises{" "}
                        </span>
                      </p>
                    </li>

                    <li className="m-line">
                      <p>
                        <i className="ri-bar-chart-grouped-line"></i> &nbsp;
                        <span className="sub-t">
                          Group content together into Collections{" "}
                        </span>
                      </p>
                    </li>
                    <li className="m-line">
                      <p>
                        <i className="ri-robot-line"></i> &nbsp;
                        <span className="sub-t">Robust read and write API</span>
                      </p>
                    </li>
                    <li className="m-line">
                      <p>
                        <i className="ri-spy-line"></i> &nbsp;
                        <span className="sub-t">
                          99.5% uptime SLA and priority support
                        </span>
                      </p>
                    </li>
                  </ul>

                  <p>
                    <button className="b-button">Get Started</button>
                  </p>
                  <p className="text-center  l_txt-bill">
                    Unlimited teammates{" "}
                  </p>
                </div>
              </div>
            </div>
          </div>
          {/* end of bill-card */}
          {/* consulting of bill-card */}

          <div className="row gap-2 consulting mt-5 mx-auto ">
            <div className="col">
              <div className="card  consult-card" style={{ width: "18rem" }}>
                <div className="card-body bg-dark text-white ">
                  <p className="card-text">
                    A Forrester Consulting study shows{" "}
                    <span className="text-primary">
                      191% return on investment
                    </span>{" "}
                    with Stack Overflow for Teams..
                  </p>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="card  consult-card  " style={{ width: "18rem" }}>
                <div className="card-body bg-dark text-white">
                  <p className="card-text">
                    The world’s largest telecom firm{" "}
                    <span className="text-primary">saved $10M</span>in deflected
                    support cases with our centralized knowledge base.{" "}
                  </p>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="card   consult-card " style={{ width: "18rem" }}>
                <div className="card-body bg-dark text-white ">
                  <p className="card-text">
                    Subject-matter experts at software platform Unqork had{" "}
                    <span className="text-primary">27% more time</span> to work
                    on projects after using Teams.
                  </p>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="card   consult-card  " style={{ width: "18rem" }}>
                <div className="card-body bg-dark text-white ">
                  <p className="card-text">
                    you can save time and money with Stack Overflow for Teams
                  </p>
                  <center>
                    <button className="text-primary bg-dark text-center">
                      Calculate your ROI
                    </button>
                  </center>
                </div>
              </div>
            </div>
          </div>

          <div className="container my-5">
            <div className="row">
              <div className="col">
                <img src={facebook3} alt="fb" className="fb-r" />
              </div>
              <div className="col">
                <h1 className="top-line text-white text-center">
                  Integrates with and improves other tools
                </h1>
                <p className="m-line">
                  All plans come with integrations for ChatOps tools{" "}
                  <span>
                    <a href="https://stackoverflow.co/teams/integrations/slack/">
                      Slack
                    </a>
                  </span>{" "}
                  &
                  <span>
                    <a href="https://stackoverflow.co/teams/integrations/microsoft-teams/">
                      Micorsoft
                    </a>
                  </span>
                  Teams in order to cut down on pings, limit distractions and
                  make the tools even more powerful. Business and Enterprise
                  customers get access to Jira, GitHub & Okta integrations.
                </p>
                <ul className="text-white d-flex gap-5 justify-content-center mt-5">
                  <li>
                    <img
                      src="https://cdn.sstatic.net/Img/product/teams/microsoft-integration/microsoft-teams-logo.svg?v=00361aadd408"
                      alt="m"
                    />
                  </li>
                  <li>
                    <i className="ri-github-fill fs-1"></i>
                  </li>
                  <li>
                    <i className="ri-google-line fs-1"></i>
                  </li>
                  <li>
                    <i className="ri-flutter-line fs-1"></i>
                  </li>
                </ul>
              </div>
              <div className="col">
                <img src={facebook4} alt="fb-r" className="fb-r" />
              </div>
              <em className="text-center text-white">
                Some of the premium features available with paid tiers
              </em>
            </div>
          </div>
        </div>
        {/* card key wala */}

        <div className="container text-center">
          <div className="row gap-3">
            <div className="col" data-aos="zoom-in-down">
              <div className="card    mb-3 small-card">
                <div className="card-body">
                  <h5 className="card-title">
                    <i className="ri-key-line fs-1"></i>
                  </h5>
                  <p className="card-text"> Robust read and write API.</p>
                </div>
              </div>
            </div>
            <div
              className="col"
              data-aos="zoom-in-down"
              data-aos-duration="3000"
            >
              <div className="card  mb-3 small-card">
                <div className="card-body">
                  <h5 className="card-title">
                    <i className="ri-lock-2-line fs-1"></i>{" "}
                  </h5>
                  <p className="card-text">Single sign-on with AD or SAML</p>
                </div>
              </div>
            </div>
            <div
              className="col"
              data-aos="zoom-in-down"
              data-aos-duration="5000"
            >
              <div className="card  mb-3 small-card">
                <div className="card-body">
                  <h5 className="card-title">
                    <i className="ri-group-2-line fs-1"></i>{" "}
                  </h5>
                  <p className="card-text">
                    Your own customer success representative{" "}
                  </p>
                </div>
              </div>
            </div>
            <div
              className="col"
              data-aos="zoom-in-down"
              data-aos-duration="7000"
            >
              <div className="card  mb-3 small-card">
                <div className="card-body">
                  <h5 className="card-title">
                    <i className="ri-customer-service-line fs-1 "></i>{" "}
                  </h5>
                  <p className="card-text">
                    99.5% uptime SLA and priority support{" "}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* message card */}

        <div className="container">
          <div className="row ">
            <div className="col">
              <div className="card  mb-3 small-card-2">
                <div className="card-body">
                  <h5 className="card-title">
                    <i className="ri-chat-1-fill fs-1"></i>{" "}
                  </h5>
                  <p className=" card-text top-line">
                    Stack Overflow for Teams has been a resource for our entire
                    company. Not only for developers to solve problems, it’s
                    also enabled our sales field to answer technical questions
                    that help them close deals.
                  </p>
                  <em>Director of Engineering</em>
                  <p>Elastic Cloud</p>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="card  mb-3 small-card-2">
                <div className="card-body">
                  <h5 className="card-title">
                    <i className="ri-chat-1-fill fs-1"></i>{" "}
                  </h5>
                  <p className=" card-text top-line">
                    As we started to use [Stack Overflow for Teams] and saw how
                    nice it was to have a repository of information, we started
                    to see it spread to other teams. Our customer support team
                    started using it, our people success team started using it,
                    next thing we knew, we had [Slack] integrations all over the
                    place.
                  </p>
                  <em>Engineering</em>
                  <p>Expensify</p>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="card  mb-3 small-card-2">
                <div className="card-body">
                  <h5 className="card-title">
                    <i className="ri-chat-1-fill fs-1"></i>{" "}
                  </h5>
                  <p className=" card-text top-line">
                    What we love about Stack Overflow for Teams is that it’s a
                    very dynamic tool…there’s just so many ways to use this as a
                    liaison between different teams and different knowledge
                    bases.
                  </p>
                  <em>Software Engineer</em>
                  <p>Box</p>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="card  mb-3 small-card-2">
                <div className="card-body">
                  <h5 className="card-title">
                    <i className="ri-chat-1-fill fs-1"></i>{" "}
                  </h5>
                  <p className=" card-text top-line">
                    Stack Overflow for Teams has been a resource for our entire
                    company. Not only for developers to solve problems, it’s
                    also enabled our sales field to answer technical questions
                    that help them close deals.
                  </p>
                  <em>Director of Product Management</em>
                  <p>Microsoft</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* additinal secton start */}

        <div className="container my-5">
          <div className="row mt-5">
            <div className="col">
              <img src={free} alt="fb" className="small-card-addi" />
            </div>
            <div className="col">
              <center>
                <img src={logo} alt="loho " className="w-75 " />
                <em className="fs-3">
                  Additional products that reach and engage developers &
                  technologists…
                </em>
              </center>{" "}
            </div>
            <div className="col">
              <img src={free1} alt="loho " className="small-card-addi " />
            </div>
          </div>
        </div>
        <div className="container">
          <div className="row">
            <div className="col">
              <div className="card  mb-3 small-card-2">
                <div className="card-body">
                  <h5 className="card-title">
                    <img src={icon} alt="icon" className="icon-stack" />
                    <em className="fw-bold">ADVENRTISING</em>
                  </h5>
                  <p className=" card-text top-line">
                    Reach the worlds largest audience of developer and
                    technologist
                  </p>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="card  mb-3 small-card-2">
                <div className="card-body">
                  <h5 className="card-title">
                    <img src={icon} alt="icon" className="icon-stack" />
                    <em className="fw-bold">COLLECTIVES</em>
                  </h5>
                  <p className=" card-text top-line">
                    Connecting communites with the specific technoligist they
                    use the most
                  </p>
                </div>
              </div>
            </div>
            <center>
              <div className="col">
                <div className="card  mb-3 small-card-2">
                  <div className="card-body">
                    <h5 className="card-title">
                      <img src={icon} alt="icon" className="icon-stack" />
                      <em className="fw-bold">TALENT</em>
                    </h5>
                    <p className=" card-text top-line">
                      Bulid your employer brand
                    </p>
                    <button className="btn ">
                      <a
                        href="https://stackoverflow.co/"
                        className="text-white"
                      >
                        About the company
                      </a>
                    </button>
                  </div>
                </div>
              </div>
            </center>
          </div>
        </div>
      </div>

      {/* animation container */}

      <div className="container">
        <div className="b">
          <div className="row text-center">
            <div className="col">
              <img
                src={icon1}
                alt="icon"
                className="item-aos w-50"
                data-aos="zoom-in"
              />
              <img
                src={icon2}
                alt="icon"
                className="item-aos w-50"
                data-aos="zoom-in"
              />
              <img
                src={icon3}
                alt="icon"
                className="item-aos w-50"
                data-aos="zoom-in"
              />
              <img
                src={icon7}
                alt="icon"
                className="item-aos w-50"
                data-aos="zoom-in"
              />
            </div>
            <div className="col">
              {" "}
              <h5 className="text-center text-white">
                Stack Exchange{" "}
                <span>
                  <i className="ri-chat-heart-line"></i>{" "}
                </span>
              </h5>
              <hr />
              <h1 className="text-white t-line">
                Explore technical topics and other disciplines across 170+ Q&A
                communities
              </h1>
            </div>
            <div className="col">
              <img
                src={icon4}
                alt="icon"
                className="item-aos w-50"
                data-aos="zoom-in"
              />
              <img
                src={icon5}
                alt="icon"
                className="item-aos w-50"
                data-aos="zoom-in"
              />
              <img
                src={icon6}
                alt="icon"
                className="item-aos w-50"
                data-aos="zoom-in"
              />
              <img
                src={icon8}
                alt="icon"
                className="item-aos w-50 "
                data-aos="fade-up"
                data-aos-anchor-placement="top-bottom"
              />
            </div>
          </div>
          <div className="row">
            <div className="col">
              <p className="m-line text-white">
                From Server Fault to Super User, much of the Stack Exchange
                network continues our mission to empower the world to develop
                technology through collective knowledge. Other sites on the
                Stack Exchange network further encourage knowledge sharing
                across topics such as cooking and medicine.
              </p>
            </div>
            <center>
              <button className="btn">Explore the network</button>
            </center>
          </div>
        </div>
      </div>

      <section>
        <div className="container mt-5 mb-5">
          <div className="home-end">
            <p>
              <i className="ri-lock-2-line fs-1 "></i>
            </p>
            <p className="fst-italic fs-4">
              Build a private community to share technical or non-technical
              knowledge.
            </p>
            <button className="btn btn-outline-primary">
              Create Team Free
            </button>
          </div>
        </div>
      </section>
    </section>
  );
};

export default Home;
