import React from "react";
import "../css/PageLoader.css";

const PageLoader = () => {
  return (
    <>
      <div className="LoadingPageDataBody">
        <div className="lds-ripple">
          <div></div>
          <div></div>
        </div>
      </div>
    </>
  );
};

export { PageLoader };
