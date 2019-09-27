<div className="sign-background signup-bg">
  <div className="col-md-12 col-lg-12 col-sm-12">
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
        <div className="form-row">
          <div className="form-group col-md-6">
            <label htmlFor="inputEmail4">Email</label>{" "}
            <input
              className="form-control"
              id="inputEmail4"
              placeholder="Email"
              type="email"
            />
          </div>
          <div className="form-group col-md-6">
            <label htmlFor="inputPassword4">Password</label>{" "}
            <input
              className="form-control"
              id="inputPassword4"
              placeholder="Password"
              type="password"
            />
          </div>
        </div>
        <div className="form-group">
          <label htmlFor="inputAddress">Address</label>{" "}
          <input
            className="form-control"
            id="inputAddress"
            placeholder="1234 Main St"
            type="text"
          />
        </div>
        <div className="form-group">
          <label htmlFor="inputAddress2">Address 2</label>{" "}
          <input
            className="form-control"
            id="inputAddress2"
            placeholder="Apartment, studio, or floor"
            type="text"
          />
        </div>
        <div className="form-row">
          <div className="form-group col-md-6">
            <label htmlFor="inputCity">City</label>{" "}
            <input className="form-control" id="inputCity" type="text" />
          </div>
          <div className="form-group col-md-4">
            <label htmlFor="inputState">State</label>{" "}
            <select className="form-control" id="inputState">
              <option selected>Choose...</option>
              <option>...</option>
            </select>
          </div>
          <div className="form-group col-md-2">
            <label htmlFor="inputZip">Zip</label>{" "}
            <input className="form-control" id="inputZip" type="text" />
          </div>
        </div>
        <div className="button-center center">
          <a className="btn-become bg-blue" href="index.html">
            Submit
          </a>
        </div>
      </form>
    </div>
  </div>
</div>;
