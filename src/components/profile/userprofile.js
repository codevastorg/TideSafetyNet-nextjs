import React, { useState } from "react";

const Profile = () => {
  const [userInfo, setUserInfo] = useState({
    name: "John Doe",
    email: "john.doe@example.com",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserInfo((prevState) => ({ ...prevState, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Updated user info:", userInfo);
    // Add logic to submit updated userInfo to backend
  };

  return (
    <div style={{ backgroundColor: "#f0f0f0", minHeight: "100vh" }}>
      <section className="">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-md-6">
              <div className="card mt-5">
                <div className="card-body">
                  <h2 className="form-title text-center card-header mb-3">
                    Your Info
                  </h2>
                  <div className="alert alert-primary mb-3 text-center">
                    Email cannot be changed
                  </div>
                  <form onSubmit={handleSubmit} id="register-form">
                    <div className="form-group">
                      <div className="user-info">
                        <label htmlFor="name">
                          <i className="zmdi zmdi-account material-icons-name"></i>
                        </label>
                        <input
                          type="text"
                          name="name"
                          id="name"
                          value={userInfo.name}
                          onChange={handleChange}
                          className="form-control form-control-lg"
                        />
                      </div>
                    </div>
                    <div className="form-group">
                      <label htmlFor="email">
                        <i className="zmdi zmdi-email"></i>
                      </label>
                      <input
                        type="email"
                        readOnly
                        id="email"
                        value={userInfo.email}
                        className="form-control form-control-lg"
                      />
                    </div>
                    <div className="form-group">
                      <label htmlFor="pass">
                        <i className="zmdi zmdi-lock"></i>
                      </label>
                      <input
                        type="password"
                        name="currentPassword"
                        id="pass"
                        placeholder="Current password"
                        className="form-control form-control-lg"
                      />
                    </div>
                    <div className="form-group">
                      <label htmlFor="re-pass">
                        <i className="zmdi zmdi-lock-outline"></i>
                      </label>
                      <input
                        type="password"
                        name="newPassword"
                        id="re_pass"
                        placeholder="New password"
                        className="form-control form-control-lg mb-3"
                      />
                    </div>
                    <div className="form-group text-center">
                      <button
                        type="submit"
                        className="btn btn-primary form-submit"
                      >
                        Update
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Profile;
