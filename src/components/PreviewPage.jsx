import React from 'react';

const PreviewPage = ({ snippetData, inputData, onSave, onBack }) => {
  if (!snippetData) return null;

  const { skill, tags, summary, concepts, code } = snippetData;

  return (
    <div className="w-full max-w-[560px] bg-white border border-[#E0E0E0] shadow-sm rounded-[12px] overflow-hidden animate-in fade-in slide-in-from-bottom-2 duration-500">
      
      {/* Topbar */}
      <div className="flex items-center justify-between px-4 py-3 border-b-[0.5px] border-[#E0E0E0]">
        <div className="flex items-center gap-2">
          <div style={{ width: '8px', height: '8px', backgroundColor: '#1D9E75', borderRadius: '50%' }} />
          <span style={{ fontSize: '15px', fontWeight: '500', color: '#333' }}>snippet</span>
        </div>
        <span style={{ fontSize: '12px', color: '#888' }}>결과 확인</span>
      </div>

      {/* Content Area */}
      <div className="p-[20px_16px] space-y-[14px]">
        
        {/* Title & Badges Section */}
        <div className="space-y-3">
          <h1 style={{ fontSize: '16px', fontWeight: '500', color: '#111' }}>{inputData.title}</h1>
          <div className="flex flex-wrap gap-2">
            {/* Skill Badge */}
            <span style={{ 
              backgroundColor: '#E1F5EE', 
              color: '#0F6E56', 
              borderRadius: '999px', 
              fontSize: '11px', 
              padding: '3px 8px',
              fontWeight: '500'
            }}>
              {skill}
            </span>
            {/* Tag Badges */}
            {tags && tags.map((tag, index) => (
              <span key={index} style={{ 
                backgroundColor: '#F5F5F5', 
                color: '#888', 
                border: '0.5px solid #E0E0E0', 
                borderRadius: '999px', 
                fontSize: '11px', 
                padding: '3px 8px'
              }}>
                {tag}
              </span>
            ))}
          </div>
        </div>

        {/* Divider */}
        <div style={{ borderBottom: '0.5px solid #E0E0E0' }} />

        {/* Summary Block */}
        <div style={{ backgroundColor: '#F9F9F9', borderRadius: '8px', padding: '12px' }} className="space-y-1.5">
          <label style={{ fontSize: '11px', color: '#888', letterSpacing: '0.04em', fontWeight: 'bold' }}>
            요약
          </label>
          <p style={{ fontSize: '13px', color: '#333', lineHeight: '1.6' }}>
            {summary}
          </p>
        </div>

        {/* Core Concepts Block */}
        <div style={{ backgroundColor: '#F9F9F9', borderRadius: '8px', padding: '12px' }} className="space-y-1.5">
          <label style={{ fontSize: '11px', color: '#888', letterSpacing: '0.04em', fontWeight: 'bold' }}>
            핵심 개념
          </label>
          <ul className="space-y-2">
            {concepts && concepts.map((concept, index) => (
              <li key={index} className="flex items-start gap-2">
                <div style={{ width: '4px', height: '4px', backgroundColor: '#1D9E75', borderRadius: '50%', marginTop: '7px', flexShrink: 0 }} />
                <span style={{ fontSize: '13px', color: '#333' }}>{concept}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Code Example Block */}
        {code && (
          <div style={{ backgroundColor: '#1e2027', borderRadius: '8px', padding: '12px', overflowX: 'auto' }}>
            <pre style={{ 
              fontFamily: 'monospace', 
              fontSize: '11px', 
              color: '#9FE1CB', 
              lineHeight: '1.7',
              margin: 0,
              whiteSpace: 'pre-wrap'
            }}>
              <code>{code}</code>
            </pre>
          </div>
        )}

        {/* Button Area */}
        <div className="flex gap-2 pt-2">
          <button
            onClick={onSave}
            style={{ 
              flex: '1.5',
              padding: '9px', 
              borderRadius: '8px', 
              fontSize: '13px', 
              fontWeight: '500',
              color: 'white',
              backgroundColor: '#1D9E75',
              cursor: 'pointer'
            }}
            className="transition-opacity active:opacity-90"
          >
            Notion에 저장
          </button>
          <button
            onClick={onBack}
            style={{ 
              flex: '1',
              padding: '9px', 
              borderRadius: '8px', 
              fontSize: '13px', 
              fontWeight: '500',
              color: '#333',
              backgroundColor: 'transparent',
              border: '0.5px solid #E0E0E0',
              cursor: 'pointer'
            }}
            className="transition-opacity active:opacity-90 hover:bg-slate-50"
          >
            다시 작성
          </button>
        </div>
      </div>
    </div>
  );
};

export default PreviewPage;
