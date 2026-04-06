import React, { useState } from 'react';

const InputPage = ({ onSubmit }) => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');

  const isDisabled = !title.trim() || !content.trim();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!isDisabled) {
      onSubmit(title, content);
    }
  };

  return (
    <div>
      <div className="w-full max-w-[560px] bg-white border border-[#E0E0E0] shadow-sm rounded-xl overflow-hidden animate-in fade-in slide-in-from-bottom-2 duration-500">

        {/* Topbar */}
        <div className="flex items-center justify-between px-4 py-3 border-b-[0.5px] border-[#E0E0E0]">
          <div className="flex items-center gap-2">
            <div style={{ width: '8px', height: '8px', backgroundColor: '#1D9E75', borderRadius: '50%' }} />
            <span style={{ fontSize: '15px', fontWeight: '500', color: '#333' }}>snippet</span>
          </div>
          <span style={{ fontSize: '12px', color: '#888' }}>기록하기</span>
        </div>

        {/* Content Area */}
        <div className="p-[20px_16px] space-y-6">
          <form onSubmit={handleSubmit} className="space-y-[14px]">

            {/* Title Field */}
            <div className="space-y-1.5">
              <label style={{ fontSize: '11px', color: '#888', letterSpacing: '0.04em', fontWeight: 'bold', textTransform: 'uppercase' }}>
                Title
              </label>
              <input
                type="text"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                placeholder="오늘 배운 것의 제목을 입력하세요"
                style={{
                  width: '100%',
                  backgroundColor: '#F5F5F5',
                  border: '0.5px solid #E0E0E0',
                  borderRadius: '8px',
                  padding: '8px 10px',
                  fontSize: '13px',
                  outline: 'none'
                }}
                className="focus:border-[#1D9E75] transition-colors"
              />
            </div>

            {/* Content Field */}
            <div className="space-y-1.5">
              <label style={{ fontSize: '11px', color: '#888', letterSpacing: '0.04em', fontWeight: 'bold', textTransform: 'uppercase' }}>
                Content
              </label>
              <div className="space-y-1">
                <textarea
                  value={content}
                  onChange={(e) => setContent(e.target.value)}
                  placeholder="오늘 배운 내용을 자유롭게 입력하세요..."
                  style={{
                    width: '100%',
                    backgroundColor: '#F5F5F5',
                    border: '0.5px solid #E0E0E0',
                    borderRadius: '8px',
                    padding: '8px 10px',
                    fontSize: '13px',
                    minHeight: '90px',
                    outline: 'none',
                    resize: 'none'
                  }}
                  className="focus:border-[#1D9E75] transition-colors"
                />
                <p style={{ fontSize: '11px', color: '#888' }}>
                  코드를 포함해도 자동으로 인식돼요
                </p>
              </div>
            </div>

            {/* Submit Button */}
            <div className="pt-2">
              <button
                type="submit"
                disabled={isDisabled}
                style={{
                  width: '100%',
                  padding: '9px',
                  borderRadius: '8px',
                  fontSize: '13px',
                  fontWeight: '500',
                  color: 'white',
                  backgroundColor: isDisabled ? '#D1D5DB' : '#1D9E75',
                  cursor: isDisabled ? 'not-allowed' : 'pointer'
                }}
                className="transition-opacity active:opacity-90"
              >
                분석하기
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default InputPage;
