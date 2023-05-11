import React, { useState } from 'react';

const Steps = () => {
  const [step, setStep] = useState(1);

  return (
    <div className="steps">
      <div className={`step ${step >= 1 ? 'active' : ''} bg-blue-500 rounded-md p-2`}>
        <span>1</span>
        <p>Input App</p>
      </div>
      <div className={`step ${step >= 2 ? 'active' : ''} bg-blue-500 rounded-md p-2`}>
        <span>2</span>
        <p>Upload Your Writing</p>
      </div>
      <div className={`step ${step >= 3 ? 'active' : ''} bg-blue-500 rounded-md p-2`}>
        <span>3</span>
        <p>Analyze Match</p>
      </div>
    </div>
  );
};

export default Steps;
