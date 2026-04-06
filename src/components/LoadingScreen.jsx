import React from 'react';

const LoadingScreen = () => {
  return (
    <div className="w-full max-w-[560px] bg-white border border-[#E0E0E0] shadow-sm rounded-xl overflow-hidden animate-in fade-in duration-500">
      
      {/* Topbar */}
      <div className="flex items-center px-4 py-3 border-b-[0.5px] border-[#E0E0E0]">
        <div className="flex items-center gap-2">
          <div style={{ width: '8px', height: '8px', backgroundColor: '#1D9E75', borderRadius: '50%' }} />
          <span style={{ fontSize: '15px', fontWeight: '500', color: '#333' }}>snippet</span>
        </div>
      </div>

      {/* Loading Content */}
      <div className="flex flex-col items-center justify-center min-h-[200px] gap-4">
        {/* Spinner */}
        <div 
          style={{ 
            width: '24px', 
            height: '24px', 
            border: '2px solid #F3F3F3', 
            borderTop: '2px solid #1D9E75', 
            borderRadius: '50%' 
          }} 
          className="animate-spin"
        />
        <p style={{ fontSize: '13px', color: '#888' }}>분석 중...</p>
      </div>
    </div>
  );
};

export default LoadingScreen;
