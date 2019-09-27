<div className="signin">
  <div className="sign-background">
    <div className="col-md-12 col-lg-12 col-sm-12">
      <div className="signin-form">
        <div className="logo-signin">
          <img src="imgs/Logo.png" alt="Logo" />
        </div>
        <form>
          <div className="form-group">
            <label htmlFor="exampleInputEmail1">Email address</label>{" "}
            <input
              aria-describedby="emailHelp"
              className="form-control"
              id="exampleInputEmail1"
              placeholder="Enter email"
              type="email"
            />{" "}
            <small className="form-text text-muted" id="emailHelp">
              We'll never share your email with anyone else.
            </small>
          </div>
          <div className="form-group">
            <label htmlFor="exampleInputPassword1">Password</label>{" "}
            <input
              className="form-control"
              id="exampleInputPassword1"
              placeholder="Password"
              type="password"
            />
          </div>
          <div className="form-check">
            <input
              className="form-check-input"
              id="exampleCheck1"
              type="checkbox"
            />{" "}
            <label className="form-check-label" htmlFor="exampleCheck1">
              Remember me
            </label>
            <small
              className="form-text text-muted signup-anchor"
              id="emailHelp"
            >
              Don't have account?&nbsp;&nbsp;&nbsp;
              <strong>
                <a href="signup.html">Signup</a>
              </strong>
            </small>
          </div>
          <div className="button-center center">
            <a className="btn-become bg-blue" href="index.html">
              SignIn
            </a>
          </div>
        </form>
      </div>
    </div>
  </div>
</div>;
