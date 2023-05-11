import React from 'react';
import TextInput_user from './TextInput'
import TextInput_app from './TextInput'
import ResetApp from './ResetApp'
import ResetApp_app from './ResetApp'
import CardForUserInput from './CardForUserInput'

const TwoColumnLayout = ({ text1, text2, isLoading1, loading1, isLoading2, loading2, getText1, getText2 }) => {
  return (
    <div className="grid grid-cols-2 gap-4" style={{ backgroundColor: 'inherit' }}>
      <div className="p-4 bg-transparent">
        <CardForUserInput text={text1} isLoading={isLoading1} loading={loading1} getText={getText1} isRight={false} />
      </div>
      <div className="p-4 bg-transparent">
        <CardForUserInput text={text2} isLoading={isLoading2} loading={loading2} getText={getText2} isRight={true} />
      </div>
    </div>
  );
};

export default TwoColumnLayout;
