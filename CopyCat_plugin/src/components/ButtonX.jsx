import * as React from "react";
import "./ButtonX.css";
const ButtonX = (props) => {
  return (
    <button className={`button-x ${props.className || ""}`}>
      <div className="rectangle-1">
        <span className="learn-more">{props.learnMore || "LEARN MORE"}</span>
      </div>
    </button>
  );
};
export default ButtonX;
