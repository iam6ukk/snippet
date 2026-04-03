import { useState } from 'react'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="min-h-screen w-full bg-slate-950 text-slate-50 flex flex-col items-center justify-center p-8 selection:bg-indigo-500/30">
      {/* Background Decor */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-[10%] -left-[10%] w-[40%] h-[40%] bg-indigo-500/20 blur-[120px] rounded-full animate-pulse" />
        <div className="absolute -bottom-[10%] -right-[10%] w-[40%] h-[40%] bg-pink-500/10 blur-[120px] rounded-full animate-pulse delay-700" />
      </div>

      <main className="relative z-10 max-w-4xl w-full text-center space-y-12">
        {/* Header */}
        <header className="space-y-4 animate-in fade-in slide-in-from-bottom-8 duration-1000">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 text-sm font-medium mb-4">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-indigo-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-indigo-500"></span>
            </span>
            v4.0 Ready
          </div>
          
          <h1 className="text-6xl md:text-8xl font-black tracking-tight bg-clip-text text-transparent bg-gradient-to-b from-white to-slate-400">
            Snippet.
          </h1>
          <p className="text-xl text-slate-400 max-w-lg mx-auto leading-relaxed">
            A premium development starter kit using React, Vite, and the power of Tailwind CSS v4.
          </p>
        </header>

        {/* Counter Section */}
        <div className="flex flex-col items-center gap-6 animate-in fade-in slide-in-from-bottom-12 duration-1000 delay-300">
          <div className="p-1 rounded-2xl bg-gradient-to-tr from-indigo-500 via-purple-500 to-pink-500 shadow-xl shadow-indigo-500/20">
            <button 
              onClick={() => setCount((c) => c + 1)}
              className="px-8 py-4 rounded-[14px] bg-slate-900 hover:bg-slate-800 transition-all active:scale-95 group relative overflow-hidden"
            >
              <div className="relative z-10 flex items-center gap-3">
                <span className="text-lg font-bold">Count is {count}</span>
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="group-hover:rotate-12 transition-transform">
                  <path d="M5 12h14M12 5l7 7-7 7"/>
                </svg>
              </div>
            </button>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 w-full">
            {[
              { label: 'React 19', color: 'indigo' },
              { label: 'Vite 6+', color: 'sky' },
              { label: 'Tailwind v4', color: 'teal' }
            ].map((tech) => (
              <div key={tech.label} className="p-4 rounded-xl bg-white/5 border border-white/10 backdrop-blur-sm hover:border-white/20 transition-colors">
                <p className="text-sm font-medium text-slate-300">{tech.label}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Footer */}
        <footer className="pt-12 text-slate-500 text-sm border-t border-white/5 animate-in fade-in duration-1000 delay-500">
          <p>Edit <code className="text-indigo-400">src/App.jsx</code> to start your journey.</p>
        </footer>
      </main>
    </div>
  )
}

export default App
