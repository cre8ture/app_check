import React from "react";

const CancelButton = ({ onClick }) => {
  return (
    <button
      className="inline-flex items-center justify-center w-8 h-8 bg-white rounded-full border border-gray-300 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500"
      onClick={onClick}
    >
      <svg className="text-gray-500" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke-width="2" width="1em" height="1em">
        <path d="M6 18L18 6M6 6l12 12"></path>
      </svg>
    </button>
  );
};

export default CancelButton;
