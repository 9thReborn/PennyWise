import "./Forgotpassword.css";
import logo from "../../assets/logo.jpg";
import { useState } from "react";
import EmailConfirmation from "../../Components/Modal/emailConfirmation/emailConfirm";

const ForgotPassword = () => {
  const [isModalOpen, setModalOpen] = useState(false);

  const handleButtonClick = () => {
    setModalOpen(true);
  };
  const handleCloseModal = () => {
    setModalOpen(false);
  };

  return (
    <div className="body">
      <div className="form-container">
        <form action="#">
          <div className="form-content">
            <div className="form-heading">
              <div className="title">
                <img src={logo} alt="pennywiseLogo" className="logo-image" />
                <h2>Pennywise</h2>
              </div>
              <h2 className="major-heading">Reset your password</h2>
              <p className="first-paragraph">
                Enter your email below and we'll send you instructions on how to
                reset your password
              </p>
            </div>
            <fieldset>
              <label htmlFor="email">
                Email Address
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="input-field"
                  placeholder="Enter your email"
                  required
                />
              </label>
              <input
                type="submit"
                value={"Send reset instructions"}
                onClick={handleButtonClick}
              />
              <p className="footer">
                Go back to <a href="/login">Sign in</a>
              </p>
            </fieldset>
          </div>
        </form>
      </div>
      <EmailConfirmation isOpen={isModalOpen} onClose={handleCloseModal} />
    </div>
  );
};

export default ForgotPassword;
