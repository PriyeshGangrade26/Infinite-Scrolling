import React from "react";
import "../css/PageNotFound.css";
import image from "../assets/404-2.png";
import { useNavigate } from "react-router-dom";

const PageNotFound = () => {
  const navigate = useNavigate();
  const goHome = () => {
    navigate("/");
  };
  return (
    <>
      <div className="Center">
        <div className="container">
          <img
            className="img-404"
            src={image}
            height="350"
            width="450"></img>
          <h3>404 Error</h3>
          <p className="message-404">OH N0! You're lost...!!!</p>
          <p className="message-404">
            The page you are looking for does not exist. How you got here is a
            mystery, But you can click the button below to go back to the login
            page.
          </p>
          <button
            className="btn-404 Center white-space"
            onClick={()=> goHome()}>
            HOME
          </button>
        </div>
      </div>
    </>
  );
};

export { PageNotFound };
