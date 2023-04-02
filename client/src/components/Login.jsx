import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";
import "../css/login.css";

const Login = ({ setAuthenticated }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [passwordHidden, setPasswordHidden] = useState(true);
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    if (username === "foo" && password === "bar") {
      navigate("/home");
    } else {
      setErrorMessage("Invalid username or password");
    }
  };

  const togglePasswordVisibility = () => {
    setPasswordHidden(!passwordHidden);
  };

  return (
    <div className="center">
      <div className="login-page">
        <div className="form">
          <form onSubmit={handleLogin}>
            <label>
              <input
                type="text"
                placeholder="Username = foo"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
              <FontAwesomeIcon
                icon={faUser}
                className="icon"
              />
            </label>
            <label>
              <input
                type={passwordHidden ? "password" : "text"}
                placeholder="Password = bar"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              {passwordHidden ? (
                <FontAwesomeIcon
                  icon={faEyeSlash}
                  className="icon"
                  onClick={togglePasswordVisibility}
                />
              ) : (
                <FontAwesomeIcon
                  icon={faEye}
                  className="icon"
                  onClick={togglePasswordVisibility}
                />
              )}
            </label>
            {errorMessage && <p className="error-message">{errorMessage}</p>}
            <button onClick={() => setAuthenticated()}>login</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export { Login };
