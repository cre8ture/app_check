import React from 'react';

export default function AppChecker() {
  return (
    <div className="bg-white rounded-lg shadow-lg p-6">
      <p className="text-gray-600 mb-4">Improve your application to a job, college or other program.</p>
      <div className="mb-4">
        <p className="mb-2">
          <span className="inline-block bg-blue-100 rounded-full px-3 py-1 text-sm font-semibold text-blue-700 mr-2">#1</span>
          Input your 
          <span className="inline-block bg-green-100 p-1 text-sm font-semibold text-blue-700">
          application writing
          </span>. This might be a question such as *Why is this college the right choice for you?* Or *How does our company's mission align with your beliefs?* etc.
        </p>
        <p className="mb-2">
          <span className="inline-block bg-blue-100 rounded-full px-3 py-1 text-sm font-semibold text-blue-700 mr-2">#2</span>
          Then input or upload the 
          <span className="inline-block bg-green-100 p-1 text-sm font-semibold text-blue-700">mission statement</span>, or description of the company or college. or program you are applying to.
        </p>
        <p className="mb-2">
          <span className="inline-block bg-blue-100 rounded-full px-3 py-1 text-sm font-semibold text-blue-700 mr-2">#3</span>
          Once both your writing and the mission of the program are submitted this application will run an <span className="inline-block bg-green-100 p-1 text-sm font-semibold text-blue-700">analysis and display the results</span>.
        </p>
      </div>
      <p className="text-gray-600">Please send me your feedback or questions. This app is experimental in nature: kak2594@g.harvard.edu</p>
    </div>
  );
}