import Head from "next/head";
import { useState } from "react";
import Router from "next/router";
import Image from "next/image";
import Link from "next/link";
import signUp from "@/firebase/auth/signup";

const Register = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    password2: "",
  });

  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const { result, error } = await signUp(formData.email, formData.password);

      if (error) {
        console.error("Signup failed:", error);
        setErrorMessage("Signup failed. Please try again.");
        setSuccessMessage("");
      } else {
        console.log(result);
        setSuccessMessage("Registration successful!");
        setErrorMessage("");
        setFormData({
          email: "",
          password: "",
          password2: "",
        });
        setTimeout(() => {
          setSuccessMessage("");
        }, 2000);
        Router.push("/auth/signin");
      }
    } catch (error) {
      console.error("Error during signup:", error);
      if (error.response && error.response.status === 400) {
        setErrorMessage("A user with that email already exists.");
      } else {
        setErrorMessage("Signup failed. Please try again.");
      }
    }
  };

  return (
    <>
      <Head>
        <title>SignUp</title>
        <link
          rel="stylesheet"
          href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css"
          integrity="sha384-B4gt1jrGC7Jh4AgTPSdUtOBvfO8sh+WyZ5eJRM63Xs9E9KGdVXTt4u"
          crossOrigin="anonymous"
        />
      </Head>

      <section
        className="h-100 gradient-form"
        style={{
          backgroundColor: "#eee",
          alignContent: "center",
          justifyContent: "center",
        }}
      >
        <div className="container py-4 h-50">
          <div className="row d-flex justify-content-center align-items-center h-100">
            <div className="col-xl-10">
              <div className="card rounded-3 text-black">
                <div className="row g-0">
                  <div className="col-lg-6">
                    <div className="card-body p-md-5 mx-md-4">
                      <div className="text-center">
                        <img
                          src="/assets/imgs/logo.jpg"
                          style={{ width: "185px" }}
                          alt="logo"
                        />
                        <h4 className="mt-1 mb-5 pb-1"></h4>
                      </div>

                      <form onSubmit={handleSubmit}>
                        {errorMessage && (
                          <div className="alert alert-danger" role="alert">
                            {errorMessage}
                          </div>
                        )}
                        {successMessage && (
                          <div className="alert alert-success" role="alert">
                            {successMessage}
                          </div>
                        )}
                        <h5 className="mb-4">Create Your Account Here</h5>

                        <div className="mb-4">
                          <label className="mb-3">
                            Your Email
                            <span className="text-danger mb-9">*</span>
                          </label>
                          <input
                            type="email"
                            id="email"
                            name="email"
                            className="form-control"
                            placeholder="example@gmail.com"
                            value={formData.email}
                            onChange={handleChange}
                          />
                        </div>

                        <div className="mb-4">
                          <label className="mb-3">
                            Password
                            <span className="text-danger mb-9">*</span>
                          </label>
                          <input
                            type="password"
                            id="password"
                            name="password"
                            className="form-control"
                            placeholder="8+ characters required"
                            value={formData.password}
                            onChange={handleChange}
                          />
                        </div>

                        <div className="mb-4">
                          <label className="mb-3">
                            Confirm Password
                            <span className="text-danger mb-9">*</span>
                          </label>
                          <input
                            type="password"
                            id="password2"
                            name="password2"
                            className="form-control"
                            placeholder="8+ characters required"
                            value={formData.password2}
                            onChange={handleChange}
                          />
                        </div>

                        <div className="form-check mb-4">
                          <input
                            className="form-check-input"
                            type="checkbox"
                            value=""
                            id="termsCheckbox"
                          />
                          <label
                            className="form-check-label"
                            htmlFor="termsCheckbox"
                          >
                            I agree to the{" "}
                            <a href="#terms" style={{ textDecoration: "none" }}>
                              Terms and Conditions
                            </a>
                          </label>
                        </div>

                        <div className="text-center pt-1 mb-3">
                          <button
                            className="btn btn-primary btn-block fa-lg gradient-custom-2 mb-2"
                            type="submit"
                            style={{ textTransform: "none" }}
                          >
                            Sign Up
                          </button>
                        </div>

                        <div className="d-flex align-items-center justify-content-center pb-4">
                          <p className="mb-0 me-2">Already have an account?</p>
                          <Link href={"/auth/signin"} legacyBehavior>
                            <a
                              className="btn btn-outline-primary"
                              style={{ textTransform: "none" }}
                            >
                              Log In
                            </a>
                          </Link>
                        </div>
                      </form>
                    </div>
                  </div>
                  <div className="col-lg-6 d-flex align-items-center">
                    <Image
                      src="/assets/imgs/register.webp"
                      alt="Welcome Image"
                      width={600}
                      height={700}
                      className="img-fluid"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Register;
