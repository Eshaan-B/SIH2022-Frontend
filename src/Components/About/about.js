import React from "react";
import "./about.css";
import { Link, useNavigate } from "react-router-dom";

function About() {
  return (
    <div>
      <header id="header" className="header fixed-top" data-scrollto-offset={0}>
        <div className="container-fluid d-flex align-items-center justify-content-between">
          <a
            href="index.html"
            className="logo d-flex align-items-center scrollto me-auto me-lg-0"
          >
            {/* Uncomment the line below if you also wish to use an image logo */}
            {/* <img src="assets/img/logo.png" alt=""> */}
            <h1>
              Khelo India<span>.</span>
            </h1>
          </a>
          <a className="btn-getstarted scrollto" href="/login">
            Login
          </a>
        </div>
      </header>
      {/* End Header */}
      <section
        id="hero-animated"
        className="hero-animated d-flex align-items-center"
      >
        <div
          className="container d-flex flex-column justify-content-center align-items-center text-center position-relative"
          data-aos="zoom-out"
        >
          <img
            src="assets/img/hero-carousel/hero-carousel-3.svg"
            className="img-fluid animated"
          />
          <h2>
            Welcome to <span>Khelo India</span>
          </h2>
          <p>National Programme for Development of Sports.</p>

          <p>
            {" "}
            <span className="sabka-colour">Sabka</span> Saath,{" "}
            <span className="sabka-colour">Sabka</span> Vikas,{" "}
            <span className="sabka-colour">Sabka</span> Vishwas,{" "}
            <span className="sabka-colour">Sabka</span> Prayas.
          </p>

          <div className="d-flex">
            <Link to={"/login"}>
              <a href="/login" className="btn-get-started scrollto">
                Login
              </a>
            </Link>
            <Link to={"/signup"}>
              <a
                href="/signup"
                className="glightbox btn-watch-video d-flex align-items-center"
              >
                <i className="bi bi-file-person" />
                <span>Sign Up</span>
              </a>
            </Link>
          </div>
        </div>
      </section>
      <main id="main">
        {/* ======= Featured Services Section ======= */}
        {/* <section id="featured-services" className="featured-services">
          <div className="container">
            <div className="row gy-4">
              <div className="col-xl-3 col-md-6 d-flex" data-aos="zoom-out">
                <div className="service-item position-relative">
                  <div className="icon">
                    <i className="bi bi-activity icon" />
                  </div>
                  <h4>
                    <a href className="stretched-link">
                      Lorem Ipsum
                    </a>
                  </h4>
                  <p>
                    Voluptatum deleniti atque corrupti quos dolores et quas
                    molestias excepturi
                  </p>
                </div>
              </div>
              {/* End Service Item */}
        {/* <div
                className="col-xl-3 col-md-6 d-flex"
                data-aos="zoom-out"
                data-aos-delay={200}
              >
                <div className="service-item position-relative">
                  <div className="icon">
                    <i className="bi bi-bounding-box-circles icon" />
                  </div>
                  <h4>
                    <a href className="stretched-link">
                      Sed ut perspici
                    </a>
                  </h4>
                  <p>
                    Duis aute irure dolor in reprehenderit in voluptate velit
                    esse cillum dolore
                  </p>
                </div>
              </div> */}
        {/* End Service Item */}
        {/* <div
                className="col-xl-3 col-md-6 d-flex"
                data-aos="zoom-out"
                data-aos-delay={400}
              >
                <div className="service-item position-relative">
                  <div className="icon">
                    <i className="bi bi-calendar4-week icon" />
                  </div>
                  <h4>
                    <a href className="stretched-link">
                      Magni Dolores
                    </a>
                  </h4>
                  <p>
                    Excepteur sint occaecat cupidatat non proident, sunt in
                    culpa qui officia
                  </p>
                </div>
              </div> */}
        {/* End Service Item */}
        {/* <div
                className="col-xl-3 col-md-6 d-flex"
                data-aos="zoom-out"
                data-aos-delay={600}
              >
                <div className="service-item position-relative">
                  <div className="icon">
                    <i className="bi bi-broadcast icon" />
                  </div>
                  <h4>
                    <a href className="stretched-link">
                      Nemo Enim
                    </a>
                  </h4>
                  <p>
                    At vero eos et accusamus et iusto odio dignissimos ducimus
                    qui blanditiis
                  </p>
                </div>
              </div>
              {/* End Service Item */}
        {/* </div> */}
        {/* </div> */}
        {/* </section> */}
        {/* End Featured Services Section */}
        {/* ======= About Section ======= */}
        <section id="about" className="about">
          <div className="container" data-aos="fade-up">
            <div
              className="row g-4 g-lg-5"
              data-aos="fade-up"
              data-aos-delay={200}
            >
              <div className="col-lg-5">
                <div className="about-img">
                  <img
                    src="assets/img/ball-sport.gif"
                    className="img-fluid"
                    alt="ball-sport"
                  />
                </div>
              </div>
              <div className="col-lg-7">
                <h3 className="pt-0 pt-lg-5">
                  The Khelo India programme has been introduced to revive the
                  sports culture in India by building a strong framework for all
                  sports played in our country .
                </h3>
                {/* Tabs */}
                <ul className="nav nav-pills mb-3">
                  <li>
                    <a
                      className="nav-link active"
                      data-bs-toggle="pill"
                      href="#tab1"
                    >
                      About us
                    </a>
                  </li>
                  <li>
                    <a className="nav-link" data-bs-toggle="pill" href="#tab2">
                      Games
                    </a>
                  </li>
                </ul>
                {/* End Tabs */}
                {/* Tab Content */}
                <div className="tab-content">
                  <div className="tab-pane fade show active" id="tab1">
                    <p className="fst-italic">
                      The importance of sports and fitness in one’s life is
                      invaluable. Playing sports inculcates team spirit,
                      develops strategic & analytical thinking, leadership
                      skills, goal setting and risk taking. A fit and healthy
                      individual leads to an equally healthy society and strong
                      nation.
                    </p>

                    <p>
                      Sports is an extremely important component for the overall
                      development of our nation. India, in the last few years
                      has made steady progress in the field of sports. This
                      tremendous potential needs to be showcased at a global
                      platform. It’s time we inspire young talent, give them
                      top-notch infrastructure and training of the highest
                      level. We need to inculcate a strong spirit of
                      participation in sports that enables players to
                      demonstrate their true potential. Only then can India
                      realise its dream of becoming a sports super power.
                    </p>

                    <p>
                      The Khelo India programme has been introduced to revive
                      the sports culture in India at the grass-root level by
                      building a strong framework for all sports played in our
                      country and establish India as a great sporting nation.
                    </p>

                    <p>
                      To accomplish the above objectives, Khelo India programme
                      has been divided into 12 verticals, namely:
                    </p>
                    <div className="d-flex align-items-center mt-4">
                      <i className="bi bi-check2" />
                      <h4>Play Field Development</h4>
                    </div>
                    <div className="d-flex align-items-center mt-4">
                      <i className="bi bi-check2" />
                      <h4>Community Coaching Development</h4>
                    </div>
                    <div className="d-flex align-items-center mt-4">
                      <i className="bi bi-check2" />
                      <h4>State level Khelo India</h4>
                    </div>
                    <div className="d-flex align-items-center mt-4">
                      <i className="bi bi-check2" />
                      <h4>Annual Sports competition</h4>
                    </div>
                    <div className="d-flex align-items-center mt-4">
                      <i className="bi bi-check2" />
                      <h4>Talent Search and Development</h4>
                    </div>
                    <div className="d-flex align-items-center mt-4">
                      <i className="bi bi-check2" />
                      <h4>
                        Support to National/Regional/State Sports Academics
                      </h4>
                    </div>
                    <div className="d-flex align-items-center mt-4">
                      <i className="bi bi-check2" />
                      <h4>Physical Fitness of School Children</h4>
                    </div>
                    <div className="d-flex align-items-center mt-4">
                      <i className="bi bi-check2" />
                      <h4>Sports For Women</h4>
                    </div>
                    <div className="d-flex align-items-center mt-4">
                      <i className="bi bi-check2" />
                      <h4>
                        Promotion of Sports amoungst people with disabilities
                      </h4>
                    </div>
                    <div className="d-flex align-items-center mt-4">
                      <i className="bi bi-check2" />
                      <h4>Sports for Peace and Development</h4>
                    </div>
                    <div className="d-flex align-items-center mt-4">
                      <i className="bi bi-check2" />
                      <h4>Promotionof rural and indegeneous/tribal games</h4>
                    </div>

                    <br></br>
                    <p>
                      Talented players identified in priority sports disciplines
                      at various levels by the High-Powered Committee will be
                      provided annual financial assistance of INR 5 lakh per
                      annum for 8 years.
                    </p>
                    <p>
                      Khelo India School Games, which are a part of the Khelo
                      India programme, are being held from 31st January to 8th
                      February, 2018 in New Delhi. Under-17 athletes have been
                      invited to participate across 16 disciplines, which are as
                      follows: Archery, Athletics, Badminton, Basketball,
                      Boxing, Football, Gymnastics, Hockey, Judo, Kabaddi,
                      Kho-Kho, Shooting, Swimming, Volleyball, Weightlifting,
                      and Wrestling.
                    </p>
                    <p>
                      Join us and support the Khelo India initiative to
                      transform India into a global sporting powerhouse in the
                      upcoming years.
                    </p>
                  </div>
                  {/* End Tab 1 Content */}
                  <div className="tab-pane fade show" id="tab2">
                    <div className="d-flex align-items-center mt-4">
                      <i className="bi bi-check2" />
                      <h4>
                        <a href="https://universitygames.kheloindia.gov.in/">
                          1st Khelo India University Games, Odisha - 2020
                        </a>
                      </h4>
                    </div>
                    <div className="d-flex align-items-center mt-4">
                      <i className="bi bi-check2" />
                      <h4>
                        <a href="https://youthgames.kheloindia.gov.in/">
                          Khelo India Youth Games, Pune, Maharashtra
                        </a>
                      </h4>
                    </div>
                    <div className="d-flex align-items-center mt-4">
                      <i className="bi bi-check2" />
                      <h4>
                        <a href="https://schoolgames.kheloindia.gov.in/">
                          Khelo India School Games, Delhi-2018
                        </a>
                      </h4>
                    </div>
                  </div>
                  {/* End Tab 2 Content */}
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* End About Section */}
      </main>
    </div>
  );
}

export default About;
