import React, { useState } from "react";
import './style.css';

const Check = ( {value, onClick}) => {
  
  
  const handleClick = () => {
    onClick(!value);
  };
  
  return (
    <button 
      className="check"
      onClick={handleClick}
    >
      {value ? '✓' : ''}
    </button>
  )
};

export default Check;
