import React from 'react';
import TitleInput from '../components/TitleInput';
import ContentInput from '../components/ContentInput';

const InputPage = () => {
  return (
    <div className="input-page p-6">
      <h1 className="text-3xl font-bold mb-6">새 스니펫 만들기</h1>
      <div className="space-y-4">
        <TitleInput />
        <ContentInput />
      </div>
    </div>
  );
};

export default InputPage;
