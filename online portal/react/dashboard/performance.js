<div className="dashboard performance">
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
        href="dashboard.html"
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
      <div className="perform-content">
        <h3>Overview</h3>
        <p>Get top insights about your performance</p>
        <div className="chart">
          <canvas id="c" />
          <div className="label">text</div>
        </div>
        <a href="#" className="btn-become bg-blue">
          Revenue Report
        </a>
      </div>
      {/*Front Page of Dashboard*/}
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
