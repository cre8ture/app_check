import React from 'react';

const DashboardCard = ({ children, title, content }) => {
  return (
    <div className="bg-blue-900 shadow overflow-hidden rounded-2xl m-4">
      <div className="px-4 py-5 sm:px-6">
        <h3 className="text-lg leading-6 font-medium text-gray-900">{title}</h3>
        <p className="mt-1 max-w-2xl text-sm text-gray-500">{content}</p>
      </div>
      <div className="border-t border-gray-200">
        {React.Children.map(children, (child) => (
          <div>{child}</div>
        ))}
      </div>
    </div>
  );
};

export default DashboardCard;