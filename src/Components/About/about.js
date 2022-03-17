import React from "react";
import "./about.css";
import { Link, useNavigate } from "react-router-dom";

function About() {
  return (
    <div>
      <header id="header" className="header fixed-top" data-scrollto-offset={0}>
        <div className="container-fluid d-flex align-items-center justify-content-between">
          <a href="index.html" className="logo d-flex align-items-center scrollto me-auto me-lg-0">
            {/* Uncomment the line below if you also wish to use an image logo */}
            {/* <img src="assets/img/logo.png" alt=""> */}
            <h1>Khelo India<span>.</span></h1>
          </a>
          <a className="btn-getstarted scrollto" href="index.html#about">Login</a>
        </div>
      </header>{/* End Header */}
      <section id="hero-animated" className="hero-animated d-flex align-items-center">
        <div className="container d-flex flex-column justify-content-center align-items-center text-center position-relative" data-aos="zoom-out">
          <img src="assets/img/hero-carousel/hero-carousel-3.svg" className="img-fluid animated" />
          <h2>Welcome to <span>Khelo India</span></h2>
          <p>National Programme for Development of Sports.</p>

          <p> <span className="sabka-colour">Sabka</span> Saath,  <span className="sabka-colour">Sabka</span> Vikas, <span className="sabka-colour">Sabka</span> Vishwas, <span className="sabka-colour">Sabka</span> Prayas.</p>

          <div className="d-flex">
            <a href="#about" className="btn-get-started scrollto">Login</a>
            <a href="https://www.youtube.com/watch?v=LXb3EKWsInQ" className="glightbox btn-watch-video d-flex align-items-center"><i className="bi bi-file-person" /><span>Sign Up</span></a>
          </div>
        </div>
      </section>
      <main id="main">
        {/* ======= Featured Services Section ======= */}
        <section id="featured-services" className="featured-services">
          <div className="container">
            <div className="row gy-4">
              <div className="col-xl-3 col-md-6 d-flex" data-aos="zoom-out">
                <div className="service-item position-relative">
                  <div className="icon"><i className="bi bi-activity icon" /></div>
                  <h4><a href className="stretched-link">Lorem Ipsum</a></h4>
                  <p>Voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi</p>
                </div>
              </div>{/* End Service Item */}
              <div className="col-xl-3 col-md-6 d-flex" data-aos="zoom-out" data-aos-delay={200}>
                <div className="service-item position-relative">
                  <div className="icon"><i className="bi bi-bounding-box-circles icon" /></div>
                  <h4><a href className="stretched-link">Sed ut perspici</a></h4>
                  <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore</p>
                </div>
              </div>{/* End Service Item */}
              <div className="col-xl-3 col-md-6 d-flex" data-aos="zoom-out" data-aos-delay={400}>
                <div className="service-item position-relative">
                  <div className="icon"><i className="bi bi-calendar4-week icon" /></div>
                  <h4><a href className="stretched-link">Magni Dolores</a></h4>
                  <p>Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia</p>
                </div>
              </div>{/* End Service Item */}
              <div className="col-xl-3 col-md-6 d-flex" data-aos="zoom-out" data-aos-delay={600}>
                <div className="service-item position-relative">
                  <div className="icon"><i className="bi bi-broadcast icon" /></div>
                  <h4><a href className="stretched-link">Nemo Enim</a></h4>
                  <p>At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis</p>
                </div>
              </div>{/* End Service Item */}
            </div>
          </div>
        </section>{/* End Featured Services Section */}
        {/* ======= About Section ======= */}
        <section id="about" className="about">
          <div className="container" data-aos="fade-up">

            <div className="row g-4 g-lg-5" data-aos="fade-up" data-aos-delay={200}>
              <div className="col-lg-5">
                <div className="about-img">
                  <img src="assets/img/about.jpg" className="img-fluid" alt="" />
                </div>
              </div>
              <div className="col-lg-7">
                <h3 className="pt-0 pt-lg-5">The Khelo India programme has been introduced to revive the sports culture in India by building a strong framework for all sports played in our country .</h3>
                {/* Tabs */}
                <ul className="nav nav-pills mb-3">
                  <li><a className="nav-link active" data-bs-toggle="pill" href="#tab1">About us</a></li>
                  <li><a className="nav-link" data-bs-toggle="pill" href="#tab2">Games</a></li>
                  <li><a className="nav-link" data-bs-toggle="pill" href="#tab3">Pledge</a></li>
                </ul>{/* End Tabs */}
                {/* Tab Content */}
                <div className="tab-content">
                  <div className="tab-pane fade show active" id="tab1">
                    <p className="fst-italic">Consequuntur inventore voluptates consequatur aut vel et. Eos doloribus expedita. Sapiente atque consequatur minima nihil quae aspernatur quo suscipit voluptatem.</p>
                    <div className="d-flex align-items-center mt-4">
                      <i className="bi bi-check2" />
                      <h4>Repudiandae rerum velit modi et officia quasi facilis</h4>
                    </div>
                    <p>Laborum omnis voluptates voluptas qui sit aliquam blanditiis. Sapiente minima commodi dolorum non eveniet magni quaerat nemo et.</p>
                    <div className="d-flex align-items-center mt-4">
                      <i className="bi bi-check2" />
                      <h4>Incidunt non veritatis illum ea ut nisi</h4>
                    </div>
                    <p>Non quod totam minus repellendus autem sint velit. Rerum debitis facere soluta tenetur. Iure molestiae assumenda sunt qui inventore eligendi voluptates nisi at. Dolorem quo tempora. Quia et perferendis.</p>
                    <div className="d-flex align-items-center mt-4">
                      <i className="bi bi-check2" />
                      <h4>Omnis ab quia nemo dignissimos rem eum quos..</h4>
                    </div>
                    <p>Eius alias aut cupiditate. Dolor voluptates animi ut blanditiis quos nam. Magnam officia aut ut alias quo explicabo ullam esse. Sunt magnam et dolorem eaque magnam odit enim quaerat. Vero error error voluptatem eum.</p>
                  </div>{/* End Tab 1 Content */}
                  <div className="tab-pane fade show" id="tab2">
                    <p className="fst-italic">Consequuntur inventore voluptates consequatur aut vel et. Eos doloribus expedita. Sapiente atque consequatur minima nihil quae aspernatur quo suscipit voluptatem.</p>
                    <div className="d-flex align-items-center mt-4">
                      <i className="bi bi-check2" />
                      <h4>Repudiandae rerum velit modi et officia quasi facilis</h4>
                    </div>
                    <p>Laborum omnis voluptates voluptas qui sit aliquam blanditiis. Sapiente minima commodi dolorum non eveniet magni quaerat nemo et.</p>
                    <div className="d-flex align-items-center mt-4">
                      <i className="bi bi-check2" />
                      <h4>Incidunt non veritatis illum ea ut nisi</h4>
                    </div>
                    <p>Non quod totam minus repellendus autem sint velit. Rerum debitis facere soluta tenetur. Iure molestiae assumenda sunt qui inventore eligendi voluptates nisi at. Dolorem quo tempora. Quia et perferendis.</p>
                    <div className="d-flex align-items-center mt-4">
                      <i className="bi bi-check2" />
                      <h4>Omnis ab quia nemo dignissimos rem eum quos..</h4>
                    </div>
                    <p>Eius alias aut cupiditate. Dolor voluptates animi ut blanditiis quos nam. Magnam officia aut ut alias quo explicabo ullam esse. Sunt magnam et dolorem eaque magnam odit enim quaerat. Vero error error voluptatem eum.</p>
                  </div>{/* End Tab 2 Content */}
                  <div className="tab-pane fade show" id="tab3">
                    <p className="fst-italic">Consequuntur inventore voluptates consequatur aut vel et. Eos doloribus expedita. Sapiente atque consequatur minima nihil quae aspernatur quo suscipit voluptatem.</p>
                    <div className="d-flex align-items-center mt-4">
                      <i className="bi bi-check2" />
                      <h4>Repudiandae rerum velit modi et officia quasi facilis</h4>
                    </div>
                    <p>Laborum omnis voluptates voluptas qui sit aliquam blanditiis. Sapiente minima commodi dolorum non eveniet magni quaerat nemo et.</p>
                    <div className="d-flex align-items-center mt-4">
                      <i className="bi bi-check2" />
                      <h4>Incidunt non veritatis illum ea ut nisi</h4>
                    </div>
                    <p>Non quod totam minus repellendus autem sint velit. Rerum debitis facere soluta tenetur. Iure molestiae assumenda sunt qui inventore eligendi voluptates nisi at. Dolorem quo tempora. Quia et perferendis.</p>
                    <div className="d-flex align-items-center mt-4">
                      <i className="bi bi-check2" />
                      <h4>Omnis ab quia nemo dignissimos rem eum quos..</h4>
                    </div>
                    <p>Eius alias aut cupiditate. Dolor voluptates animi ut blanditiis quos nam. Magnam officia aut ut alias quo explicabo ullam esse. Sunt magnam et dolorem eaque magnam odit enim quaerat. Vero error error voluptatem eum.</p>
                  </div>{/* End Tab 3 Content */}
                </div>
              </div>
            </div>
          </div>
        </section>{/* End About Section */}
      </main></div>
  );
}

export default About;
