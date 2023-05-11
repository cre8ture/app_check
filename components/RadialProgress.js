import React, {useState, useEffect} from "react";

const RadialProgress = ({ percent }) => {
  console.log("i am percent here", percent)
  
  percent = percent * 100
  const value = isNaN(percent) ? 0 : Math.max(Math.min(percent, 100), 0); // limit percent between 0 and 100

  const style1 = {
    "--value": `${percent || 0}%`,
    "--size": "12rem",
    "--thickness": "2px",
  };

  const style2 = {
    "--value": `${percent || 0}%`,
    "--size": "12rem",
    "--thickness": "2rem",
  };

  return (
    <div className="flex flex-col items-center justify-center h-full">
      <p className="text-xl text-center p-2">A higher similiarity percent means your writing is more similar to the app</p>
      <div className="radial-progress bg-primary text-primary-content border-4 border-primary" style={{ "--value": percent }}>{parseInt(percent)}%</div>
    </div>
  );
};

export default RadialProgress;
