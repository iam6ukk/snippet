import React from 'react';

const SuccessScreen = ({ onReset }) => {
  return (
    <div className="w-full max-w-[560px] bg-white border border-[#E0E0E0] shadow-sm rounded-[12px] overflow-hidden animate-in fade-in zoom-in-95 duration-500 mx-auto">
      
      {/* Topbar */}
      <div className="flex items-center px-4 py-3 border-b-[0.5px] border-[#E0E0E0]">
        <div className="flex items-center gap-2">
          <div style={{ width: '8px', height: '8px', backgroundColor: '#1D9E75', borderRadius: '50%' }} />
          <span style={{ fontSize: '15px', fontWeight: '500', color: '#333' }}>snippet</span>
        </div>
      </div>

      {/* Content Area */}
      <div className="p-[28px_16px] flex flex-col items-center justify-center text-center gap-[12px]">
        {/* Check Icon Circle */}
        <div style={{ 
          width: '44px', 
          height: '44px', 
          backgroundColor: '#E1F5EE', 
          borderRadius: '50%',
          display: 'flex',
          itemsCenter: 'center',
          justifyContent: 'center',
          alignItems: 'center'
        }}>
          <svg 
            width="20" 
            height="20" 
            viewBox="0 0 24 24" 
            fill="none" 
            stroke="#1D9E75" 
            strokeWidth="2.5" 
            strokeLinecap="round" 
            strokeLinejoin="round"
          >
            <path d="M4 12l4.5 4.5 7.5-9" />
          </svg>
        </div>

        {/* Title */}
        <h2 style={{ fontSize: '15px', fontWeight: '500', color: '#111', margin: 0 }}>
          Notion에 저장됐어요
        </h2>

        {/* Subtext */}
        <p style={{ fontSize: '13px', color: '#888', lineHeight: '1.6', margin: 0 }}>
          성공적으로 기록되었습니다
        </p>

        {/* Button */}
        <button
          onClick={onReset}
          style={{ 
            width: '160px', 
            padding: '9px', 
            borderRadius: '8px', 
            fontSize: '13px', 
            fontWeight: '500',
            color: 'white',
            backgroundColor: '#1D9E75',
            marginTop: '8px',
            cursor: 'pointer'
          }}
          className="transition-opacity active:opacity-90 hover:bg-[#1D9E75]/90 shadow-sm"
        >
          새 snippet 작성
        </button>
      </div>
    </div>
  );
};

export default SuccessScreen;
