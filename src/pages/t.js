import React, { useState } from "react";
import { FcGoogle } from "react-icons/fc";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import { toast } from "react-toastify";

// Assuming you have these functions implemented somewhere
// import { googleLogin, registerWithEmailAndPassword, loginWithEmailAndPassword } from "@/lib/auth";

function Authentication() {
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [isRegistering, setIsRegistering] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "demo@gmail.com",
    password: "123456",
  });

  const togglePasswordVisibility = () => {
    setPasswordVisible((prev) => !prev);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { name, email, password } = formData;

    try {
      if (isRegistering) {
        // Assuming this function is available from your authentication library
        await registerWithEmailAndPassword(email, password, name);
      } else {
        // Assuming this function is available from your authentication library
        await loginWithEmailAndPassword(email, password);
      }
    } catch (error) {
      toast.error(error.message);
    }
  };

  const handleGoogleLogin = async () => {
    try {
      // Assuming this function is available from your authentication library
      await googleLogin();
    } catch (error) {
      toast.error(error.message);
    }
  };

  return (
    <main className="container mx-auto" style={{ maxWidth: '768px' }}>
      <h1 className="mb-4 text-center display-4">Welcome 👋</h1>

      <div className="card shadow bg-dark text-white">
        <img src="https://images.unsplash.com/photo-1553729459-efe14ef6055d" className="card-img-top" alt="..." />

        <div className="card-body">
          <h3 className="card-title text-center">
            {isRegistering ? "Please sign up to continue" : "Please sign in to continue"}
          </h3>

          <form onSubmit={handleSubmit} className="mt-3">
            {isRegistering && (
              <div className="mb-3">
                <input
                  type="text"
                  className="form-control"
                  name="name"
                  placeholder="Name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </div>
            )}
            <div className="mb-3">
              <input
                type="email"
                className="form-control"
                name="email"
                placeholder="Email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>
            <div className="mb-3 position-relative">
              <input
                type={passwordVisible ? "text" : "password"}
                className="form-control"
                name="password"
                placeholder="Password"
                id="password-input"
                value={formData.password}
                onChange={handleChange}
                minLength={6}
                required
              />
              <span
                className="position-absolute top-50 end-0 translate-middle-y me-3 cursor-pointer"
                onClick={togglePasswordVisibility}
              >
                {passwordVisible ? (
                  <AiOutlineEye size={24} />
                ) : (
                  <AiOutlineEyeInvisible size={24} />
                )}
              </span>
            </div>
            <button className="btn btn-primary w-100">
              {isRegistering ? "Register" : "Login"}
            </button>

            <hr className="my-4" />

            <button
              onClick={handleGoogleLogin}
              type="button"
              className="btn btn-secondary d-flex align-items-center justify-content-center mx-auto"
              style={{ width: 'fit-content' }}
            >
              <FcGoogle className="me-2" /> Login with Google
            </button>

            <div className="mt-3 text-center">
              <p>
                {isRegistering
                  ? "Already have an account?"
                  : "Don't have an account?"}
              </p>
              <button
                type="button"
                className="btn btn-outline-primary"
                onClick={() => setIsRegistering((prev) => !prev)}
              >
                {isRegistering ? "Login" : "Register"}
              </button>
            </div>
          </form>
        </div>
      </div>
    </main>
  );
}

export default Authentication;
