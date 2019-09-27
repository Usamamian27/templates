<div className="wrapper">
  <div className="signup">
    <div className="sign-background signup-bg">
      <div className="col-md-12 col-lg-12 col-sm-12">
        <h2 style={{ marginLeft: 800, color: "rgb(231, 225, 225)" }}>
          Referral To Friend
        </h2>
        <br />
        <div className="signin-form signup-form">
          <div className="logo-signin">
            <img src="imgs/Logo.png" alt="Logo" />
          </div>
          <form>
            <div className="form-row">
              <div className="form-group col-md-6">
                <label htmlFor="inputEmail4">First Name</label>{" "}
                <input
                  className="form-control"
                  placeholder="First Name"
                  type="text"
                />
              </div>
              <div className="form-group col-md-6">
                <label htmlFor="inputPassword4">Last Name</label>{" "}
                <input
                  className="form-control"
                  placeholder="Last Name"
                  type="text"
                />
              </div>
            </div>
            <div className="form-group">
              <label htmlFor="inputAddress">Email</label>{" "}
              <input
                className="form-control"
                id="inputAddress"
                placeholder="Email"
                type="text"
              />
            </div>
            <div className="form-group">
              <label htmlFor="inputAddress2">Referral Code</label>{" "}
              <input
                className="form-control"
                id="inputAddress2"
                placeholder="E54c78T5"
                type="text"
              />
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
  </div>
</div>;
