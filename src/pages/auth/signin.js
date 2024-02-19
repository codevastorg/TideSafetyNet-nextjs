import React, { useState } from "react";
import Router from "next/router";
import Link from "next/link";
import Image from "next/image";
import signIn from "@/firebase/auth/signin";

const Login = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [errorMessage, setErrorMessage] = useState("");
  const [successMessage, setSuccessMessage] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    const { email, password } = formData;

    try {
      const { result, error } = await signIn(email, password);

      if (error) {
        console.error("Login failed:", error);
        setErrorMessage("Invalid email or password. Please try again.");
        setSuccessMessage("");
      } else {
        console.log(result);
        setSuccessMessage("Login successful!");
        setErrorMessage("");

        Router.push("/dashboard/homepage");

        // Reset form data after successful login
        setFormData({
          email: "",
          password: "",
        });
      }
    } catch (error) {
      console.error("Error during login:", error);
      setErrorMessage("Login failed. Please try again.");
      setSuccessMessage("");
    }
  };

  return (
    <section className="h-100 gradient-form" style={{ backgroundColor: "#eee" }}>
      <div className="container py-5 h-100">
        <div className="row d-flex justify-content-center align-items-center h-100">
          <div className="col-xl-10">
            <div className="card rounded-3 text-black">
              <div className="row g-0">
                <div className="col-lg-6">
                  <div className="card-body p-md-5 mx-md-4">
                    <div className="text-center mt-1 mb-5 pb-1">
                      <Image
                        src="/assets/imgs/logo.jpg"
                        style={{ width: "185px" }}
                        width={185}
                        height={185}
                        alt="logo"
                      />
                    </div>

                    <form onSubmit={handleLogin}>
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
                      <p>Please login to your account</p>
                      <label className="mb-2">
                        Email Address
                        <span className="text-danger mb-9">*</span>
                      </label>
                      <input
                        type="text"
                        id="email"
                        name="email"
                        className="form-control mb-3"
                        placeholder="example@gmail.com"
                        value={formData.email}
                        onChange={handleChange}
                      />

                      <div className="form-group mb-4">
                        <label className="mb-2">
                          Password
                          <span className="text-danger mb-9">*</span>
                        </label>
                        <input
                          type="password"
                          name="password"
                          className="form-control"
                          value={formData.password}
                          placeholder="8+ characters required"
                          onChange={handleChange}
                          required
                        />
                      </div>

                      <div className="text-center pt-1 mb-5 pb-1">
                        <button
                          className="btn btn-primary btn-block fa-lg mb-3"
                          type="submit"
                          style={{ textTransform: "none" }}
                        >
                          Sign In
                        </button>
                        <Link href="/auth/forgotpassword">Forgot Password</Link>
                      </div>

                      <p>
                        Dont have an account?{" "}
                        <Link
                          href="/auth/signup"
                          style={{ textDecoration: "none" }}
                        >
                          Register here
                        </Link>
                      </p>
                    </form>
                  </div>
                </div>
                <div className="col-lg-6 d-flex align-items-center">
                  <Image
                    src="/assets/imgs/login.webp"
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
  );
};

export default Login;
