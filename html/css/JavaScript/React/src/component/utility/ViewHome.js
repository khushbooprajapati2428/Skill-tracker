









export default function ViewHome({ view, setView, jobsData }) {
  if (view !== 'home') return null;

  return (
    <>
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-text">
          <h1 className="animated-heading">
            <span style={{ "--i": 1 }}>Build</span>{" "}
            <span style={{ "--i": 2 }}>Smarter</span>{" "}
            <span style={{ "--i": 3 }}>Teams</span>{" "}
            <span style={{ "--i": 4 }}>with</span>{" "}
            <span style={{ "--i": 5 }}>AI</span>
          </h1>
          <p>Let AI help you create balanced project teams based on student skills and interests.</p>
          <button className="btn" onClick={() => setView('student')} style={{ marginTop: '30px' }}>
            Get Started
          </button>
        </div>
      </section>

      {/* Marketplace Section */}
      <section className="w-full py-20 bg-[#f8fafc]">
        <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 40px' }}>
          
          <div className="flex items-center gap-3 mb-12">
            <h2 className="text-2xl font-black text-slate-600 tracking-tight"style={{paddingTop:"50px"}}>
              Current Opportunities
            </h2>
            <span className="text-2xl" style={{paddingTop:"50px"}}>🚀</span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10"style={{paddingTop:"50px"}}>
            {jobsData && jobsData.map((job) => (
                    <div key={job.id} className="bg-white rounded-[2rem] p-8 border border-slate-200 shadow-xl hover:-translate-y-2 transition-all duration-300 flex flex-col min-h-[200px]"style={{paddingTop:"20px"}}>
                
                <div className="flex justify-between items-start mb-6">
                  <div className="h-12 w-12 bg-indigo-500 rounded-xl flex items-center justify-center text-white text-2xl font-bold shadow-lg">
                    {job.guide[0]}
                  </div>
                  <span className="text-[12px] font-bold text-emerald-600 bg-emerald-50 px-3 py-1 rounded-full uppercase tracking-widest border border-emerald-100">
                    Active
                  </span>
                </div>

                {/* Role aur Guide - Added explicit slate colors for visibility */}
                <h3 className="text-xl font-black text-slate-800 mb-1">{job.role}</h3>
                <p className="text-slate-500 font-bold mb-4 italic text-sm">
                  {job.guide}
                </p>

                {/* Skills Tags */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {job.skills.map((s, i) => (
                    <span key={i} className="bg-slate-100 text-slate-700 text-[11px] font-bold px-3 py-1 rounded-md border border-slate-200">
                      {s}
                    </span>
                  ))}
                </div>

                <div className="mt-auto pt-6 border-t border-slate-100 flex items-center justify-between">
                  <div>
                    <p className="text-[10px] text-slate-400 font-black uppercase mb-1">Match Score</p>
                    <p className="text-2xl font-black text-indigo-600">{job.match}</p>
                  </div>
                  <button className="bg-yellow-400 text-slate-900 px-5 py-2.5 rounded-xl font-black text-sm hover:bg-yellow-500 transition-all">
                    Apply Now
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
    









