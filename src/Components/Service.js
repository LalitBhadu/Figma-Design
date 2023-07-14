import React from "react";
import "./Service.css";

function Service() {
  return (
    <>
      <div className="serice">
        <div className="container">
          <h2>Find the experties from</h2>
          <div className="apps">
            <img src="amazon.png" alt="" className="imagesize " />
            <img src="spotyfy.png" alt="" className="imagesize" />
            <img src="meta.png" alt="" className="imagesize" />
          </div>
          <div className="apps-1">
            <h3>Make your career growt in </h3>
            <img src="uiux.png" alt="" className="imagesize-1" />
            <img src="productmanagement.png" alt="" className="imagesize-1" />
            <img src="marketing.png" alt="" className="imagesize-1" />
            <img src="datascience.png" alt="" className="imagesize-1" />
            <img src="teaching.png" alt="" className="imagesize-1" />
          </div>
        </div>
      </div>
    </>
  );
}

export default Service;
