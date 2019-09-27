<header className="header fixed-top">
  <div className="container">
    <div className="header-navbar">
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <a className="navbar-brand blue" href="index.html">
          <img src="imgs/Logo.png" alt="Brand" />
        </a>{" "}
        <button
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
          className="navbar-toggler"
          data-target="#navbarSupportedContent"
          data-toggle="collapse"
          type="button"
        >
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item">
              <a
                className="nav-link explore-section"
                data-toggle="collapse"
                href="#collapseExample"
                role="button"
                aria-expanded="false"
                aria-controls="collapseExample"
              >
                <i className="fas fa-th" />
                &nbsp;&nbsp;Explore
              </a>
            </li>
            <li className="nav-item active">
              <a className="nav-link" href="#">
                Catalog <span className="sr-only">(current)</span>
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Path
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Career
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="teach.html">
                Become a Teacher
              </a>
            </li>
            <li className="nav-item">
              <form action className="nav navbar-left search">
                <input type="text" placeholder="Search" />
                <button className="search-btn">
                  <i className="fas fa-search" />
                </button>
              </form>
            </li>
          </ul>
        </div>
      </nav>
    </div>
    <div className="explore-hover collapse" id="collapseExample">
      <div className="owl-carousel owl-theme hover-slider">
        <div className="item">
          <div className="explore-slider">
            <div className="col-md-12 col-lg-12 col-sm-12">
              <div className="row">
                <div className="col-md-4 explore-header-marg-bottom">
                  <div className="bg-data-science">
                    <a
                      href="grid.html"
                      className="capitalize anchor-header-hover"
                    >
                      <div className="hover-science">Data science</div>
                    </a>
                  </div>
                </div>
                <div className="col-md-8">
                  <div className="row">
                    <div className="col-md-6">
                      <div className="bg-business explore-header-marg-bottom">
                        <a
                          href="grid.html"
                          className="capitalize anchor-header-hover"
                        >
                          <div className="hover-science">business</div>
                        </a>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="bg-personal bg-business explore-header-marg-bottom">
                        <a
                          href="grid.html"
                          className="capitalize anchor-header-hover"
                        >
                          <div className="hover-science">
                            personal development
                          </div>
                        </a>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="bg-computer bg-business explore-header-marg-bottom">
                        <a
                          href="grid.html"
                          className="capitalize anchor-header-hover"
                        >
                          <div className="hover-science">computer science</div>
                        </a>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="bg-information bg-business explore-header-marg-bottom">
                        <a
                          href="grid.html"
                          className="capitalize anchor-header-hover"
                        >
                          <div className="hover-science">
                            information technology
                          </div>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="item">
          <div className="explore-slider">
            <div className="col-md-12 col-lg-12 col-sm-12">
              <div className="row">
                <div className="col-md-4">
                  <div className="bg-language bg-business explore-header-marg-bottom">
                    <a
                      href="grid.html"
                      className="capitalize anchor-header-hover"
                    >
                      <div className="hover-science">language learning</div>
                    </a>
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="bg-math bg-business explore-header-marg-bottom">
                    <a
                      href="grid.html"
                      className="capitalize anchor-header-hover"
                    >
                      <div className="hover-science">math &amp; logic</div>
                    </a>
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="bg-physical bg-business explore-header-marg-bottom">
                    <a
                      href="grid.html"
                      className="capitalize anchor-header-hover"
                    >
                      <div className="hover-science">
                        physical science &amp; Engineering
                      </div>
                    </a>
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="bg-health bg-business explore-header-marg-bottom">
                    <a
                      href="grid.html"
                      className="capitalize anchor-header-hover"
                    >
                      <div className="hover-science">Health</div>
                    </a>
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="bg-social bg-business explore-header-marg-bottom">
                    <a
                      href="grid.html"
                      className="capitalize anchor-header-hover"
                    >
                      <div className="hover-science">Social sciences</div>
                    </a>
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="bg-art bg-business explore-header-marg-bottom">
                    <a
                      href="grid.html"
                      className="capitalize anchor-header-hover"
                    >
                      <div className="hover-science">Arts &amp; humanities</div>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</header>;
