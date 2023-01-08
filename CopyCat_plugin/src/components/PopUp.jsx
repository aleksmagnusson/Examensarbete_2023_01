import * as React from "react";
import "./PopUp.css";
import TextCloseBtn from "./TextCloseBtn";
const PopUp = (props) => {
  return (
    <div className={`pop-up ${props.className || ""}`}>
      <TextCloseBtn
        className="text-close-btn-instance-1"
        {...props.textCloseBtn}
      />
    </div>
  );
};
export default PopUp;
