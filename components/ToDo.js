import React from "react";

const ListWithIcons = ({ items }) => {
  return (
    <>
      <div className='px-10'>
        <ul>
          {Object?.keys(items).map((item, index) => (
            <li key={index} className="ml-8">
              {items[item] ? (
                <span className="text-green-500 mr-2">&#x2714;</span>
              ) : (
                <span className="text-red-500 mr-2">&#x2718;</span>
              )}
              {item}
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default ListWithIcons;
