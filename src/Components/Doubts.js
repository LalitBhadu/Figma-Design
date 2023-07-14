import React from "react";
import "./Doubts.css";

function Doubts() {
  return (
    <>
      <div className="doubts">
        <h1>Let's Clear your Doubts!</h1>

        <div className="container">
          {/* <button>
            <h1>What is the approval criteria to be a Mentor? +</h1>
          </button>
          <button>
            <h1>How does Mentor Bridge work for Mentors? +</h1>
          </button>
          <button>
            <h1>Can I charge fees of my choice? +</h1>
          </button>
          <button>
            <h1>Can I get guidance on how to be a mentor ? +</h1>
          </button> */}
          <select
            className="form-select form-select-lg mb-3"
            aria-label=".form-select-lg example"
          >
            <option selected>
              What is the approval criteria to be a Mentor?
            </option>
          </select>
          <select
            className="form-select form-select-lg mb-3 my-2"
            aria-label=".form-select-lg example"
          >
            <option selected>How does Mentor Bridge work for Mentors? </option>
          </select>
          <select
            className="form-select form-select-lg mb-3 my-2  "
            aria-label=".form-select-lg example"
          >
            <option selected>Can I get guidance on how to be a mentor ?</option>
          </select>
          <select
            className="form-select form-select-lg mb-3 my-2"
            aria-label=".form-select-lg example"
          >
            <option selected>
              <storng>Can I charge fees of my choice? </storng>
            </option>
          </select>
        </div>
      </div>
    </>
  );
}

export default Doubts;
