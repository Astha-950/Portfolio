 



import React from 'react';
import '../../src/App.css';

const CircularProgress = ({ percentage, label, logo }) => {
  return (
    <div className="progress-circle">
      <div className="outer">
        <div className="inner">
          <div className="circle">
            <div className="mask full">
              <div className="fill"></div>
            </div>
            <div className="mask half">
              <div className="fill"></div>
              <div className="fill fix"></div>
            </div>
          </div>
          <div className="inset">
            <img src={logo} alt={`${label} logo`} className="circle-logo" />
          </div>
        </div>
      </div>
      <p>{label}</p>
    </div>
  );
};

export default CircularProgress;