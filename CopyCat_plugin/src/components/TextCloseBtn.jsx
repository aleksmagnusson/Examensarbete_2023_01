import * as React from "react";
import "./TextCloseBtn.css";
import xBtn from "../assets/xBtn.svg";
const TextCloseBtn = (props) => {
  return (
    <div className={`text-close-btn ${props.className || ""}`}>
      <span className="we-have-places-avail-1">
        {props.weHavePlacesAvail ||
          "WE HAVE PLACES AVAILABLE RIGHT NOW FOR CL\xc8 DE PEAU BEAUT\xc8&#39;s E-LEARNING. RESERVE YOUR PLACE NOW!"}
      </span>
      <img className="x-btn" {...props.xBtn} src={xBtn} />
    </div>
  );
};
export default TextCloseBtn;
