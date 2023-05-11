import React from 'react';
import Text_input_user from './TextInput';
import ResetApp from './ResetApp';
// import ResetApp2 from './ResetApp2';


const Card = ({ text, isLoading, loading, getText, isRight }) => {
  // const cardStyle = isRight ? 'ml-4 flex-1' : 'mr-4 flex-1';

  return (
    <div>
      {/* className={cardStyle}> */}
      <div className="bg-white rounded-md shadow-md p-4">
        {!text ? (
          <>
            <div className="text-center font-light">Input your writing. You can upload a file, scrape from another site, or input it directly</div>
            <Text_input_user getText={getText} loading={loading} isLoading={isLoading} />
          </>
        ) : (
          <ResetApp getText={getText} isLoading={isLoading} />
        )}
      </div>
    </div>
  );
};

export default Card;
