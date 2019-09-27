<div className="dashboard">
  <header className="dashboard-header">
    <nav className="navbar navbar-dark bg-dark">
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarToggleExternalContent"
        aria-controls="navbarToggleExternalContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
        id="custom-hide"
      >
        <span className="navbar-toggler-icon" />
      </button>
      {/*
  <div class="dash-icon-before">
      <ul>
          <li><a href=""><i class="fas fa-video"></i></a></li>
          <li><a href=""><i class="fas fa-envelope"></i></a></li>
          <li><a href=""><i class="fas fa-chart-bar"></i></a></li>
          <li><a href=""><i class="fas fa-question-circle"></i></a></li>
      </ul>
  </div>
*/}
    </nav>
    <ul className="collapse" id="navbarToggleExternalContent">
      <a
        className="navbar-brand blue"
        style={{ marginLeft: 40 }}
        href="../index.html"
      >
        <img src="../imgs/Logo1.png" alt="Brand" />
      </a>
      <li>
        <a href="course.html">
          <i className="fas fa-video" />
          Courses
        </a>
      </li>
      <li>
        <a href="communication.html">
          <i className="fas fa-envelope" />
          Communication
        </a>
      </li>
      <li>
        <a href="performance.html">
          <i className="fas fa-chart-bar" />
          Performance
        </a>
      </li>
      <li>
        <a href="#">
          <i className="fas fa-question-circle" />
          Resources
        </a>
      </li>
      <li>
        <a href="../index.html">
          <i className="fas fa-sign-out-alt" />
          Logout
        </a>
      </li>
    </ul>
  </header>
  {/*Header Ends Here*/}
  <div className="courses-section">
    <div className="col-md-12 col-lg-12">
      <div className="setting">
        <div className="setting-img">
          <a href="profile.html">
            <img src="../imgs/s3.jpg" alt="Img" />
          </a>
        </div>
        <h5>
          Teacher
          <i className="far fa-bell" />
        </h5>
      </div>
    </div>
    <div className="container">
      <div className="courses-content-dash">
        <h2>Courses</h2>
        <a href="course.html" className="btn-become bg-blue">
          Add New Course
        </a>
        <div className="clear-fix" />
        <div className="col-md-12 col-lg-12 col-sm-12">
          <div className="row">
            <div className="col-md-12 col-lg-12 col-sm-12">
              <div className="row">
                <div className="experience center">
                  <h3>
                    Based on your experience, we think these resources will be
                    helpful.
                  </h3>
                </div>
                <div className="experience-box">
                  <div className="col-md-12 col-lg-12 col-sm-12">
                    <div className="row">
                      <div className="col-md-4 col-lg-4 col-sm-4">
                        <img src="../imgs/teacher.png" alt="Image" />
                      </div>
                      <div className="col-md-8 col-lg-8 col-sm-8">
                        <h5>Create an Engaging Course</h5>
                        <p>
                          Whether you've been teaching for years or are teaching
                          for the first time, you can make an engaging course.
                          We've compiled resources and best practices to help
                          you get to the next level, no matter where you're
                          starting.
                        </p>
                        <a href="#" className="btn-become bg-blue">
                          Get Started
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="clear-fix" />
            <div className="col-md-6 col-lg-6 col-sm-12">
              <div className="experience-box">
                <div className="col-md-12 col-lg-12 col-sm-12">
                  <div className="row">
                    <div className="col-md-5 col-lg-5 col-sm-5">
                      <img src="../imgs/dash-content-2.png" alt="Image" />
                    </div>
                    <div className="col-md-7 col-lg-7 col-sm-7">
                      <h5>Get Started with Video</h5>
                      <p>
                        Quality video lectures can set your course apart. Use
                        our resources to learn the basics.
                      </p>
                      <a href="#" className="btn-become bg-blue">
                        Get Started
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-6 col-sm-12">
              <div className="experience-box">
                <div className="col-md-12 col-lg-12 col-sm-12">
                  <div className="row">
                    <div className="col-md-5 col-lg-5 col-sm-5">
                      <img src="../imgs/dash-content-1.png" alt="Image" />
                    </div>
                    <div className="col-md-7 col-lg-7 col-sm-7">
                      <h5>Build Your Audience</h5>
                      <p>
                        Set your course up for success by building your
                        audience. Use our resources to learn the basics.
                      </p>
                      <a href="#" className="btn-become bg-blue">
                        Get Started
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="clear-fix" />
            <div className="col-md-12 col-lg-12 col-sm-12">
              <div className="row">
                <div className="experience-box">
                  <div className="col-md-12 col-lg-12 col-sm-12">
                    <div className="row">
                      <div className="col-md-4 col-lg-4 col-sm-4">
                        <img src="../imgs/dash-content-3.png" alt="Image" />
                      </div>
                      <div className="col-md-8 col-lg-8 col-sm-8">
                        <h5>Join the Newcomer Challenge!</h5>
                        <p>
                          Get exclusive tips &amp; resources designed to help
                          you launch your first course! Eligible instructors who
                          publish their first course on time will receive a
                          bonus. Start today!
                        </p>
                        <a href="#" className="btn-become bg-blue">
                          Get Started
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="clear-fix" />
          </div>
        </div>
      </div>
      {/*Front Page of Dashboard*/}
      <section className="discover">
        <div className="container">
          <div className="disc-content">
            <h3 className="center">
              Have questions? Here are our most popular instructor resources.
            </h3>
          </div>
          <div className="col-md-12 col-lg-12">
            <div className="row">
              <div className="col-md-4 center">
                <div className="disc-box instructor-box">
                  <a href="#" className="capitalize">
                    <p className="uppercase text-blue">
                      <i className="fas fa-piggy-bank" />
                    </p>
                    <strong>Earn money</strong>
                  </a>
                </div>
              </div>
              <div className="col-md-4 center">
                <div className="disc-box instructor-box">
                  <a href="#" className="capitalize">
                    <p className="uppercase text-blue">
                      <i className="fab fa-youtube" />
                    </p>
                    <strong>Inspire Student</strong>
                  </a>
                </div>
              </div>
              <div className="col-md-4 center">
                <div className="disc-box instructor-box">
                  <a href="#" className="capitalize">
                    <p className="uppercase text-blue">
                      <i className="far fa-thumbs-up" />
                    </p>
                    <strong>Join our community</strong>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Discover Ends Here */}
    </div>
  </div>
  {/*Middle Section Ends Here*/}
  <footer className="footer dashboard-footer">
    <div className="container">
      <div className="col-md-12 col-lg-12">
        <div className="row">
          <div className="col-md-2 col-lg-2 col-sm-12">
            <div className="footer-logo-img">
              <img src="../imgs/logo1.png" alt="Brand" />
            </div>
          </div>
          <div className="col-md-8 col-lg-8 col-sm-12 center">
            <div className="footer-content">
              <ul>
                <li>© Logo 2019</li>
                <li>
                  <a href="#">Jobs</a>
                </li>
                <li>
                  <a href="#">Privacy Policy</a>
                </li>
                <li>
                  <a href="#">Term of Use</a>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-md-2 col-lg-2 col-sm-12">
            <div className="footer-content social-icon">
              <ul>
                <li>
                  <a href="#">
                    <i className="fab fa-twitter" />
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i className="fab fa-instagram" />
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i className="fab fa-facebook" />
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  </footer>
  {/* Footer Ends Here */}
</div>;
