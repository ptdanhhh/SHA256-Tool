import { sha256 } from "js-sha256";
import React, { useState } from "react";
import "./index.css";

function InputField() {
  const [inputValue, setInputValue] = useState("");
  const [hashValue, setHashValue] = useState("");


  const handleClearValue = () => {
    setInputValue("");
  }

  const handleHashValue = () =>{
    const hashed = sha256(inputValue);
    setHashValue(hashed);
    setInputValue("");
  } 

  return (
    <section className="container">
      <div className="wrapperInput">
        <div className="hash-content">
          <div className="hash-in">
            <h2>Input string here</h2>
            <div className="text-area">
              <textarea
                className="textarea"
                placeholder="Type here..."
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
              ></textarea>
            </div>

            <div className="btn-in">
              <div className="hashbtn">
                <button className="btn btn--hash" onClick={handleHashValue}>Hash</button>
              </div>

              <div className="clearbtn">
                <button className="btn btn--clear" onClick={handleClearValue}>Clear</button>
              </div>
            </div>
          </div>

          <div className="hash-out">
            <h2>SHA-256 Output:</h2>
            <p>{hashValue&&hashValue.match(/.{1,4}/g).join(" ")}</p>
          </div>
        </div>

        {/* end hash-content */}
        <div className="sha-text">
          <div className="sha-title">
            <h2>What is SHA-256?</h2>
          </div>
        </div>
      </div>
    </section>
  );
}

export default InputField;
