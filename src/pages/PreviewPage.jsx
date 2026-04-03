import React from 'react';
import PreviewCard from '../components/PreviewCard';

const PreviewPage = () => {
  return (
    <div className="preview-page p-6">
      <h1 className="text-3xl font-bold mb-6">스니펫 미리보기</h1>
      <PreviewCard />
      <div className="mt-8">
        <button className="bg-indigo-600 px-6 py-2 rounded-lg text-white">저장하기</button>
      </div>
    </div>
  );
};

export default PreviewPage;
