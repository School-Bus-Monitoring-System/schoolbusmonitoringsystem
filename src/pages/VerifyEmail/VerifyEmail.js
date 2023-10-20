import { useAuthValue } from "../../context/AuthContext";
import { useState } from "react";
import { auth } from "../../firebase";
import { sendEmailVerification } from "firebase/auth";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

// This is the verify email page component
function VerifyEmail() {

  // Use the useAuthValue hook to get the current user
  const { currentUser } = useAuthValue();
  // Use the useState hook to store the button disabled state
  const [buttonDisabled, setButtonDisabled] = useState(false);
  // Use the useState hook to store the time
  const [time, setTime] = useState(60);
  // Use the useState hook to store the time active
  const { timeActive, setTimeActive } = useAuthValue();
  // Use the useNavigate hook to navigate to the login page
  const history = useNavigate();

  // Use the useEffect hook to send the email verification
  useEffect(() => {
    const interval = setInterval(() => {
      currentUser
        ?.reload()
        .then(() => {
          if (currentUser?.emailVerified) {
            clearInterval(interval);
            // Redirect to Home Page
            history("/");
          }
        })
        .catch((err) => {
          // Show Alert Message
          alert(err.message);
        }, 1000);
    }, [history, currentUser]);
  });

  // Use the useEffect hook to set the time
  useEffect(() => {
    let interval = null;
    if (timeActive && time !== 0) {
      interval = setInterval(() => {
        setTime((time) => time - 1);
      }, 1000);
    } else if (time === 0) {
      setTimeActive(false);
      setTime(60);
      clearInterval(interval);
    }
    return () => clearInterval(interval);
    // eslint-disable-next-line
  }, [timeActive, time]);

  // Use the resend sendEmailVerification function
  const resendEmailVerification = () => {
    setButtonDisabled(true);
    sendEmailVerification(auth.currentUser)
      .then(() => {
        setButtonDisabled(false);
        setTimeActive(true);
      })
      .catch((err) => {
        alert(err.message);
        setButtonDisabled(false);
      });
  };

  return (
    <div className="mx-auto mt-36 w-max">
      <div className="card lg:card-side bg-base-100 shadow-xl">
        <figure>
          <img
            src="https://img.freepik.com/premium-vector/protected-3d-email-green-envelope-with-attached-file-with-safeguard-shield-check-symbol_87850-488.jpg"
            alt="Album"
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title">Verify your email Address</h2>
          <p>
            <strong>A Verification email has been sent to:</strong>
            <br />
            <span>{currentUser?.email}</span>
          </p>

          <div className="card-actions">
            {buttonDisabled ? <div>Please Check you email</div> : null}
          </div>
          <span>
            Follow the instruction in the email to verify your account
          </span>
          <div className="card-actions justify-end">
            <button
              className="btn btn-primary"
              onClick={resendEmailVerification}
              disabled={timeActive}
            >
              Resend Email {timeActive && time}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default VerifyEmail;
