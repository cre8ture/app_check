import React from 'react';
import Draggable from 'react-draggable';

const DraggableCards = ({ children }) => {
  return (
    <div>
      {React.Children.map(children, (child) => (
        child?.props.title && <Draggable>
          <div className={`rounded-lg border-solid border-2 border-sky-500 shadow-lg p-5 m-3`}>
            <div className="text-center text-xl mb-3">{child?.props.title}</div>
            {child}
          </div>
        </Draggable>
      ))}
    </div>
  );
};

export default DraggableCards;
