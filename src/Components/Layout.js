import React from "react";
import "./Layout.css";

function Layout() {
  return (
    <>
      <div className="layout">
        <div className="container">
          <div className="img_rocket">
            <img src="blue-rocket.png" alt="" className="rocket" />
            <div className="girl-on-psychologist">
              <img
                src="girl-on-psychologist-online-session.png"
                alt=""
                className="girl"
              />
            </div>
          </div>

          <div className="layout-heading">
            <h1>Grow Faster Together</h1>
            <h6>
              Find a mentor or Lead the path for someone
              <br />
              It's a win win!
            </h6>
          </div>
          <div className="button-demo">
            <button type="button" className="btndemo1">
              Find a Mentor
            </button>
            <button type="button" className="btndemo1">
              Become a Mentor
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Layout;
