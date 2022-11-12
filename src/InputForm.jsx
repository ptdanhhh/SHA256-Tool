import React from "react";

const InputForm = () => {
  return (
    <div className="container form">
      <div className="d-flex">
        <div className="">
          <div className="hash-in">
            <h2>Input string here</h2>
            <div className="text-area">
              <textarea
                className="textarea"
                placeholder="Type here..."
                required
              ></textarea>
            </div>

            <div className="btn-in">
              <div className="hashbtn">
                <button className="btn btn--hash">Hash</button>
              </div>

              <div className="clearbtn">
                <button className="btn btn--clear">Clear</button>
              </div>
            </div>
          </div>

          <div className="hash-out">
            <h2>SHA-256 Output:</h2>
          </div>
        </div>

        {/* end hash-content */}
        <div className="sha-text">
          <div className="sha-title">
            <h2>What is SHA-256?</h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InputForm;
