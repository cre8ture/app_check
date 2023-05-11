import React from 'react';

const CenteredButton = ({ getText, isLoading }) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submit logic here
    getText('')
    isLoading(false)

  };

  return (
    <div className="flex justify-center">
      <form onSubmit={handleSubmit}>
        <div className="center_button">
          <button className="bg-green-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded text-4xl">
            Reset
          </button>
        </div>
      </form>
    </div>
  );
};

export default CenteredButton;