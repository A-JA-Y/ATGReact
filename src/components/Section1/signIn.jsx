import React, { useState } from "react";
import { FaGoogle, FaFacebook } from "react-icons/fa";
import './section1.css'

const SignInComponent = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(false);

  const handleEmailChange = (e) => setEmail(e.target.value);
  const handlePasswordChange = (e) => setPassword(e.target.value);
  const handleRememberMeChange = () => setRememberMe(!rememberMe);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Implement your sign-in logic here
    console.log("Email:", email);
    console.log("Password:", password);
  };

  const handleSignInWithGoogle = () => {
    // Implement your Google sign-in logic here
    console.log("Sign in with Google");
  };

  const handleSignInWithFacebook = () => {
    // Implement your Facebook sign-in logic here
    console.log("Sign in with Facebook");
  };

  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-md-6">
          <div >
            <div className="card-body">
              <div className="verify row">
                <p className="col-lg-4">Sign In</p>
                <p className="col-lg-4">Join In</p>
              </div>

              <button
                className="btn  mb-4"
                onClick={handleSignInWithGoogle}
              >
                <FaGoogle className="mr-2 btn1" /><h6>Continue with Google</h6>
                
              </button>
              <button
                className="btn  mb-4"
                onClick={handleSignInWithFacebook}
              >
                <FaFacebook className="mr-2 btn2" />
                <h6>Continue with Facebook</h6>
                
              </button>
              <p className="text-center">Or connect with:</p>
              <form onSubmit={handleSubmit}>
                <div className="form-group">
                  <input
                    type="email"
                    className="form-control"
                    placeholder="Email"
                    value={email}
                    onChange={handleEmailChange}
                    required
                  />
                </div>
                <div className="form-group">
                  <input
                    type="password"
                    className="form-control"
                    placeholder="Password"
                    value={password}
                    onChange={handlePasswordChange}
                    required
                  />
                </div>
                <div className="form-group form-check">
                  <input
                    type="checkbox"
                    className="form-check-input"
                    id="remember-me"
                    checked={rememberMe}
                    onChange={handleRememberMeChange}
                  />
                  <label className="form-check-label" htmlFor="remember-me">
                    Remember me
                  </label>
                </div>
                <button type="submit" className="btn  btn-block">
                  <h6>Continue</h6>
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignInComponent;
