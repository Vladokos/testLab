import React from "react";
import "../../assets/styles/customComponents/Input.css";

export const Input:React.FC<{text:string}> = ({text}) => {
  return (
    <div className="input">
      <div className="input-field">
        <input type="text" id="name" required />
        <label htmlFor="name">{text}</label>
      </div>
    </div>
  );
};
