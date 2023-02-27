import React, { useState } from "react";
import Onramper from "../../onramper/onramper";
import "./mint.css";
import { MintButton } from "./mintButton";
import Timer from "./timer";
function Mint() {
  // const [value, setvalue] = useState(1);
  const [launchText, setLaunchText] = useState("Launch Day-30 Nov 2022");
  // const add = () => {
  //   if (value < 10) {
  //     setvalue(value + 1);
  //   }
  // };
  // const minus = () => {
  //   if (value > 1) {
  //     setvalue(value - 1);
  //   }
  // };
  return (
    <>
      <div className="mint-container">
        <img
          src={require("./image1.gif?auto=compress")}
          className="mint-image"
        />
        <h4>{launchText}</h4>
        <br />
        <Timer setLaunchText={setLaunchText} />
        <br />
        {/* <span className="mint-value">
          <button onClick={minus} className="value-button">
            -
          </button>
          <p className="value" id="mintValue">
            {value}
          </p>
          <button onClick={add} className="value-button">
            +
          </button>
        </span> */}
        <br />
        <h5 className="current-price-text">Current-Price=15MATIC</h5>
        <MintButton />
        {/* <Onramper/> */}
      </div>
    </>
  );
}
export default Mint;
