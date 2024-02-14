import Head from "next/head";
import Link from "next/link";

const ForgotPassword = () => {
  return (
    <>
      <Head>
        <title>Forgot Password</title>
      </Head>

      {/* Content */}
      <div
        className="bg-soft-success"
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          minHeight: "100vh",
          backgroundSize: "cover",
        }}
      >
        <div className="container content-space-1 content-space-t-md-3">
          <div className="mx-auto" style={{ maxWidth: "30rem" }}>
            {/* Card */}
            <div className="card card-lg zi-2">
              {/* Header */}
              <div className="card-header text-center">
                <h4 className="card-title">Forgot password?</h4>
                <p className="card-text">
                  Enter the email address you used when you joined and well send
                  you instructions to reset your password.
                </p>
              </div>
              {/* End Header */}

              {/* Card Body */}
              <div className="card-body">
                <form className="js-validate need-validate" noValidate>
                  {/* Form */}
                  <div className="mb-4">
                    <label
                      className="form-label"
                      htmlFor="forgotPasswordFormEmail"
                    >
                      Your email
                    </label>
                    <input
                      type="email"
                      className="form-control"
                      name="forgotPasswordEmailName"
                      id="forgotPasswordFormEmail"
                      placeholder="Enter your emaill address"
                      aria-label="Enter your emaill address"
                      required
                    />
                    <span className="invalid-feedback">
                      Please enter a valid email address.
                    </span>
                  </div>
                  {/* End Form */}

                  <div className="d-grid mb-4">
                    <button type="submit" className="btn btn-secondary btn-lg" style={{ textTransform: "none", color: "white" }}>
                      Submit
                    </button>
                  </div>

                  <div className="text-center">
                    <Link
                      href="/auth/signin"
                      style={{ textDecoration: "none" }}
                    >
                      Return to sign in
                    </Link>
                  </div>
                </form>
              </div>
              {/* End Card Body */}
            </div>
            {/* End Card */}
          </div>
        </div>
      </div>
      {/* End Content */}

      {/* Shape */}
      <div className="shape-container">
        <div className="shape shape-bottom zi-1">
          <svg
            viewBox="0 0 3000 600"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M0 600V350.234L3000 0V600H0Z" fill="#fff" />
          </svg>
        </div>
      </div>
      {/* End Shape */}
    </>
  );
};

export default ForgotPassword;
