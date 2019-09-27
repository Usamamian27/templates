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
    <div className="communicate-content">
      <nav className="nav nav-pills nav-justified" id="nav-tab" role="tablist">
        <a
          aria-controls="nav-home"
          aria-selected="true"
          className="nav-item nav-link active"
          data-toggle="tab"
          href="#nav-home"
          id="nav-home-tab"
          role="tab"
        >
          Courses
        </a>
        <a
          aria-controls="nav-profile"
          aria-selected="false"
          className="nav-item nav-link"
          data-toggle="tab"
          href="#nav-profile"
          id="nav-profile-tab"
          role="tab"
        >
          Assignment
        </a>
        <a
          aria-controls="nav-contact"
          aria-selected="false"
          className="nav-item nav-link"
          data-toggle="tab"
          href="#nav-contact"
          id="nav-contact-tab"
          role="tab"
        >
          Announcement
        </a>
      </nav>
      <div className="tab-content" id="nav-tabContent">
        <div
          aria-labelledby="nav-home-tab"
          className="tab-pane fade show active"
          id="nav-home"
          role="tabpanel"
        >
          {/* <div class="messages">Courses</div> */}
          <br />
          <br />
          <form>
            <div className="form-row">
              <div className="form-group col-md-6">
                <label htmlFor="inputEmail4">Cource Title</label>{" "}
                <input
                  className="form-control"
                  placeholder="Cource Title"
                  type="text"
                />
              </div>
              <div className="form-group col-md-6">
                <label htmlFor="inputPassword4">Cource Catagory</label>{" "}
                <input
                  className="form-control"
                  placeholder="Cource Catagory"
                  type="text"
                />
              </div>
            </div>
            <div className="form-row">
              <div className="form-group col-md-6">
                <label htmlFor="inputEmail4">Cource Credit Hours</label>{" "}
                <input
                  className="form-control"
                  placeholder="Cource Credit Hours"
                  type="text"
                />
              </div>
              <div className="form-group col-md-6">
                <label htmlFor="inputPassword4">No. of Tutorials</label>{" "}
                <input
                  className="form-control"
                  placeholder="No. of Tutorials"
                  type="text"
                />
              </div>
            </div>
            <div className="form-group">
              <label htmlFor="inputAddress">Cource Discription</label>
              <textarea
                rows={10}
                placeholder="Cource Discription"
                className="form-control"
                id="inputAddress"
                defaultValue={""}
              />
              <div className="button-left">
                <button
                  className="btn started bg-blue btn-signin"
                  type="submit"
                >
                  Add Video/File
                </button>
              </div>
            </div>
            <div className="button-center center">
              <button className="btn started bg-blue btn-signin" type="submit">
                Submit
              </button>
            </div>
          </form>
        </div>
        <div
          aria-labelledby="nav-profile-tab"
          className="tab-pane fade"
          id="nav-profile"
          role="tabpanel"
        >
          {/* <div class="messages">Assignment</div> */}
          <br />
          <br />
          <form>
            <div className="form-row">
              <div className="form-group col-md-6">
                <label htmlFor="inputEmail4">Assignment Title</label>{" "}
                <input
                  className="form-control"
                  placeholder="Assignment Title"
                  type="text"
                />
              </div>
              <div className="form-group col-md-6">
                <label htmlFor="inputPassword4">Assignment Catagory</label>{" "}
                <input
                  className="form-control"
                  placeholder="Assignment Catagory"
                  type="text"
                />
              </div>
            </div>
            <div className="form-row">
              <div className="form-group col-md-6">
                <label htmlFor="inputEmail4">Assignment Marks</label>{" "}
                <input
                  className="form-control"
                  placeholder="Assignment Marks"
                  type="text"
                />
              </div>
              <div className="form-group col-md-6">
                <label htmlFor="inputPassword4">Due Date</label>{" "}
                <input
                  className="form-control"
                  placeholder="Due Date"
                  type="text"
                />
              </div>
            </div>
            <div className="form-group">
              <label htmlFor="inputAddress">Assignment Discription</label>
              <textarea
                rows={10}
                placeholder="Assignment Discription"
                className="form-control"
                id="inputAddress"
                defaultValue={""}
              />
              <div className="button-left">
                <button
                  className="btn started bg-blue btn-signin"
                  type="submit"
                >
                  Add File
                </button>
              </div>
            </div>
            <div className="button-center center">
              <button className="btn started bg-blue btn-signin" type="submit">
                Submit
              </button>
            </div>
          </form>
        </div>
        <div
          aria-labelledby="nav-contact-tab"
          className="tab-pane fade"
          id="nav-contact"
          role="tabpanel"
        >
          {/* <div class="messages">Announcement</div> */}
          <br />
          <br />
          <form>
            <div className="form-row">
              <div className="form-group col-md-6">
                <label htmlFor="inputEmail4">Announcement Title</label>{" "}
                <input
                  className="form-control"
                  placeholder="Announcement Title"
                  type="text"
                />
              </div>
              <div className="form-group col-md-6">
                <label htmlFor="inputPassword4">Announcement Catagory</label>{" "}
                <input
                  className="form-control"
                  placeholder="Announcement Catagory"
                  type="text"
                />
              </div>
            </div>
            <div className="form-row">
              <div className="form-group col-md-6">
                <label htmlFor="inputEmail4">Announcement Marks</label>{" "}
                <input
                  className="form-control"
                  placeholder="Announcement Marks"
                  type="text"
                />
              </div>
              <div className="form-group col-md-6">
                <label htmlFor="inputPassword4">Due Date</label>{" "}
                <input
                  className="form-control"
                  placeholder="Due Date"
                  type="text"
                />
              </div>
            </div>
            <div className="form-group">
              <label htmlFor="inputAddress">Announcement Discription</label>
              <textarea
                rows={10}
                placeholder="Announcement Discription"
                className="form-control"
                id="inputAddress"
                defaultValue={""}
              />
              <div className="button-left">
                <button
                  className="btn started bg-blue btn-signin"
                  type="submit"
                >
                  Add File
                </button>
              </div>
            </div>
            <div className="button-center center">
              <button className="btn started bg-blue btn-signin" type="submit">
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
    {/*Front Page of Dashboard*/}
  </div>
</div>;
