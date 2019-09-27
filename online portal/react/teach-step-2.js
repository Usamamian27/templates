<div className="teach-detail-1">
  <header className="teach-detail-header">
    <ul>
      <li>
        <a href="index.html">
          <img src="imgs/Logo.png" alt="Logo" />
        </a>
      </li>
      <li>Step 1 of 2</li>
      <li>
        <a href="index.html" className="exit">
          Exit
        </a>
      </li>
    </ul>
  </header>
  {/*Teacher Deatil Header Ends Here*/}
  <div className="progress">
    <div
      aria-valuemax={100}
      aria-valuemin={0}
      aria-valuenow={50}
      className="progress-bar"
      role="progressbar"
      style={{ width: "100%" }}
    />
  </div>
  {/*Progress Bar Bootstrap Ends Here*/}
  <div className="selection-teacher">
    <div className="container">
      <h2>Create a course</h2>
      <p>
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry's standard dummy text ever
        since the 1500s, when an unknown printer took a galley of type and
        scrambled it to make a type specimen book. It has survived not only five
        centuries, but also the leap into electronic typesetting, remaining
        essentially unchanged. It was popularised in the 1960s with the release
        of Letraset sheets containing Lorem Ipsum passages, and more recently
        with desktop publishing software like Aldus PageMaker including versions
        of Lorem Ipsum
      </p>
      <div className="col-md-12 col-lg-12 col-sm-12">
        <div className="row">
          <div className="col-md-6 col-sm-12">
            <div className="row">
              <form action>
                <label htmlFor>
                  <strong>How much of a video "pro" are you?</strong>
                </label>
                <div className="radio-select">
                  <input type="radio" name="radio" />{" "}
                  <label htmlFor>I'm a beginner</label>
                </div>
                <div className="radio-select">
                  <input type="radio" name="radio" />{" "}
                  <label htmlFor>I have some knowledge</label>
                </div>
                <div className="radio-select">
                  <input type="radio" name="radio" />{" "}
                  <label htmlFor>I'm experienced</label>
                </div>
                <div className="radio-select">
                  <input type="radio" name="radio" />{" "}
                  <label htmlFor>I have videos ready to upload</label>
                </div>
              </form>
            </div>
          </div>
          <div className="col-md-6 col-sm-12">
            <div className="row">
              <div className="radio-img">
                <img src="imgs/teacher-2.png" alt="Image" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  {/*Seclection Teacher Ends Here*/}
  <footer className="teacher-detail-footer fixed-bottom">
    <div className="container">
      <a href="dashboard/dashboard.html" className="btn-become bg-blue">
        Continue
      </a>
    </div>
  </footer>
</div>;
