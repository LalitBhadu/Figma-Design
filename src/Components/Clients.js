import React from "react";
import "./Clients.css";

function Clients() {
  return (
    <>
      <div className="clients">
        <div className="container">
          <h1>What our Clients says about us</h1>
        </div>
        <div className="vector">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="15"
            height="31"
            viewBox="0 0 25 41"
            fill="none"
          >
            <path
              d="M24.3911 35.5758L9.31527 20.5L24.3911 5.39125L19.7499 0.75L-0.000144958 20.5L19.7499 40.25L24.3911 35.5758Z"
              fill="black"
            />
          </svg>
          <img src="clients.PNG" alt="" className="cliens-image" />
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="15"
            height="31"
            viewBox="0 0 26 41"
            fill="none"
          >
            <path
              d="M0.941895 35.5758L16.0177 20.5L0.941895 5.39125L5.58315 0.75L25.3332 20.5L5.58315 40.25L0.941895 35.5758Z"
              fill="black"
            />
          </svg>
        </div>
      </div>
    </>
  );
}

export default Clients;
