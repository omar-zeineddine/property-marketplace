import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { ReactComponent as ArrowRightIcon } from "../assets/svg/keyboardArrowRightIcon.svg";
import visibilityIcon from "../assets/svg/visibilityIcon.svg";

const SignIn = () => {
  const navigate = useNavigate();

  // states
  const [showPassword, setShowPassword] = useState(false);
  // formData object with all input fields as a state
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const { email, password } = formData;

  // event handlers
  const handleChange = (e) => {
    console.log(e.target.value);
  };

  return (
    <>
      <div className="pageContainer">
        <header>
          <p className="pageHeader">Welcome Back!</p>
        </header>

        <form action="">
          <input
            type="email"
            className="emailInput"
            id="email"
            placeholder="Email"
            value={email}
            onChange={handleChange}
          />

          <div className="passwordInputDiv">
            <input
              type={showPassword ? "text" : "password"}
              className="passwordInput"
              placeholder="password"
              id="password"
              value={password}
              onChange={handleChange}
            />
            <img
              src={visibilityIcon}
              alt="show password"
              className="showPassword"
              onClick={() => {
                setShowPassword((prev) => !prev);
              }}
            />
          </div>
          <Link to="/forgot-password" className="forgotPasswordLink">
            Forgot Password
          </Link>

          <div className="signInBar">
            <p className="signInText">Sign in</p>
            <button className="signInButton">
              <ArrowRightIcon fill="#fff" width="34px" height="34px" />
            </button>
          </div>
        </form>

        {/* Google OAuth */}
        <Link to="/sign-up" className="registerLink">
          Sign Up Instead
        </Link>
      </div>
    </>
  );
};

export default SignIn;
