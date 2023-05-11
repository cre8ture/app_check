
// import { Stepper, Step } from 'react-basic-stepper';
// import 'react-basic-stepper/dist/index.css';

// export default function StepperComp ({currStep}){

// return (
//     <Stepper
//        activeStep={2}
//       >

//         <Step label="Upload draft">
//             {/* <h3>Step1</h3> */}
//         </Step>
//         <Step label="Upload app/mission">
//             {/* <h3>Step2</h3> */}
//         </Step>
//         <Step label="Analyze">
//             {/* <h3>Step3</h3> */}
//         </Step>
//     </Stepper>
//         )}

import React, { useRef } from 'react';
import { Stepper, Step } from 'react-basic-stepper';
import 'react-basic-stepper/dist/index.css';


export default function MyComponent({ currStep }) {
  const stepperRef = useRef(null);

  function handleButtonClick() {
    // Increment the active step by 1
    // stepperRef.current.nextStep();
    console.log("clicked step")
  }

  return (
    <div>
      <Stepper ref={stepperRef} indexStep={currStep}>
        <Step label="Upload draft">
          {/* <p>Step 1 Content</p> */}
        </Step>
        <Step label="Upload app/mission">
          {/* <p>Step 2 Content</p> */}
        </Step>
        <Step label="Analyze">
          {/* <p>Step 3 Content</p> */}
        </Step>
      </Stepper>

    </div>
  );
}
