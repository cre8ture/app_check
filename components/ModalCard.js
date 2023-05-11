import React from "react";

const Modal = ({displayText="You've been selected for a chance to get one year of subscription to use Wikipedia for free!"}) => {
  return (
    <>
      {/* The button to open modal */}
      {/* <label htmlFor="my-modal-3" className="btn">open modal</label> */}

      {/* Put this part before </body> tag */}
      {/* <input type="checkbox" id="my-modal-3" className="modal-toggle" /> */}
      <div className="modal">
        <div className="modal-box relative">
          <label htmlFor="my-modal-3" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
          <h3 className="text-lg font-bold">Information about this process</h3>
          <p className="py-4">{displayText}</p>
        </div>
      </div>
    </>
  );
};

export default Modal;
