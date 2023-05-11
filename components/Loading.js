import React from 'react';
import CancelButton from './CancelButton'

const CSSLoader = ({ onCancel, text }) => {
  const loaderStyle = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100%',
  };

  const innerCircleStyle = {
    animation: 'spin 1s ease-in-out infinite',
    border: '6px solid rgba(0, 0, 0, 0.1)',
    borderTopColor: '#000',
    borderRadius: '50%',
    content: '',
    display: 'block',
    height: '50px',
    width: '50px',
  };


// add ripple animation keyframes
const keyframes = `
  @keyframes ripple {
    from {
      transform: scale(0);
      opacity: 1;
    }
    to {
      transform: scale(2.5);
      opacity: 0;
    }
  }
`;


  return (
    <div style={loaderStyle}>
      <div style={innerCircleStyle}></div>
      <div className="absolute top-1 right-1" >
     <CancelButton />
        </div >
    </div>
  );
};

export default CSSLoader;
