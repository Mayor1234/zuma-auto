import React from "react";
import "./ButtonComponent.style.scss";

const ButtonComponent = ({ text, handleClick, solid}) => {

  

  return (
    
      <button className={solid} onClick={handleClick}> 
        {text}
      </button>
  );

};

export default ButtonComponent;
