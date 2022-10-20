import React, { useState } from "react";
import './style.css';

const Check = ( {checked, onChange}) => {
  
  
  const handleClick = () => {
    onChange(!checked);
    console.log(!checked)
    
  };
  
  return (
    <button 
      className="check"
      onClick={handleClick}
    >
      {checked ? '✓' : ''}
    </button>
  )
};

export default Check;


//