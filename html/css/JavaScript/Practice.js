





return (
    <div className="main-container flex flex-col min-h-screen">
      
      {/* 1. Login aur Registration View (Bina Navbar ke) */}
       {/* bg-slate-50 */}
      {view === 'login' || view === 'registration' ? (
        <div className="login-container flex justify-center items-center h-screen bg-amber-50">
          <div className="w-full max-w-md p-10 bg-white border border-slate-200 rounded-3xl shadow-xl">
            
              {view === 'login' ? (
              <>
                <h2 className="text-2xl font-bold mb-4 text-center" style={{paddingTop:"15px"}}>Login to SkillTracker</h2>
                <form onSubmit={(e) => EmailPass(e, stuData, setView)} className="flex flex-col gap-4" style={{paddingTop:"15px"}}>
                  <input 
                    type="email" 
                    placeholder="Enter your email" 
                    className="border p-2 rounded-lg" style={{paddingLeft:"20px"}}
                    onChange={(e) => setStuData({...stuData, email: e.target.value})} 
                    required 
                  />
                  <input 
                    type="password" 
                    placeholder="Enter your password" 
                    className="border p-2 rounded-lg" style={{paddingLeft:"20px"}}
                    onChange={(e) => setStuData({...stuData, password: e.target.value})} 
                    required 
                  />
                  <button type="submit" className="bg-blue-600 text-white p-2 rounded-lg font-bold hover:bg-blue-700">
                    Sign In
                  </button>
                </form>
                <p 
                  onClick={() => setView('registration')} 
                  className="mt-6 text-blue-600 cursor-pointer text-center font-bold hover:underline" style={{paddingTop:"15px"}}
                >
                  New Student? Register Profile Here 🚀
                </p>
              </>
            ) : (  
              /* Registration View (Login se pehle) */
              <div className="max-w-md">
                 <ViewStudent 
                  view="registration" 
                   stuData={stuData} 
                   setStuData={setStuData} 
                   handleSubmit={handleRegister} 
                 />
                 <p 
                   onClick={() => setView('login')} 
                   className="mt-4 text-center text-slate-500 cursor-pointer hover:underline"
                 >
                   Already have an account? Login
                 </p>
               </div>
              
               )}
                 
          </div>
          
        </div>
      ) : (
        /* 2. Login ke BAAD wala section (Hamesha Navbar ke saath) */
        <>
          <nav className="navbar sticky top-0 z-50 bg-white shadow-md py-4 px-8 flex justify-between items-center">
            <div className="logo flex items-center gap-1 cursor-pointer" onClick={() => setView('home')}>
              <span className="text-2xl font-bold text-blue-600">Skill</span>
              <span className="text-2xl font-bold text-slate-800">Tracker</span>
            </div>
            
            <ul className="nav-links flex gap-6 font-semibold text-slate-600 items-center">
              <li className="cursor-pointer hover:text-blue-600 transition-all" onClick={() => setView('home')}>Home</li>
              <li className="cursor-pointer hover:text-blue-600 transition-all" onClick={() => setView('student')}>Student View</li>
              <li className="cursor-pointer hover:text-blue-600 transition-all" onClick={() => setView('guide')}>Guide View</li>
              
              <button 
                onClick={handleLoadData} 
                className="bg-blue-100 text-blue-600 px-4 py-2 rounded-lg font-bold hover:bg-blue-200"
              >
                Load Data
              </button>

              <button 
                onClick={() => setView('login')} 
                className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-lg font-bold ml-2"
              >
                Logout
              </button>
            </ul>
          </nav>

          <div className="content-area">
            {/* Saare Views ab Navbar ke niche render honge */}
            <ViewHome view={view} setView={setView} jobsData={jobsData} />
            
            {/* Student Profile View (Login ke baad yahan Navbar dikhegi) */}
            <ViewStudent 
              view={view} 
              stuData={stuData} 
              setStuData={setStuData} 
              handleSubmit={handleRegister} 
            />

            <ViewGuide 
              view={view}
              reqSkills={reqSkills} setReqSkills={setReqSkills}
              teamSize={teamSize} setTeamSize={setTeamSize}
              findMatches={handlefindMatches} matches={matches}
              teamSynergy={teamSynergy} StudentCard={StudentCard}
              onDownload={() => {}} 
              selectedTeam={selectedTeam} 
              toggleSelection={toggleSelection}
              onFinalize={handleFinalize}
            />

            {view === 'finalTeamSummary' && (
              <div className="final-summary text-center py-12">
                <h2 className="text-2xl font-bold mb-6">Finalized Team</h2>
                <ul className="inline-block text-left">
                  {selectedTeam.map(s => (
                    <li key={s._id || s.id} className="text-lg mb-2">
                      ✅ {s.name} - {s.role}
                    </li>
                  ))}
                </ul>
                <div className="mt-6">
                  <button onClick={() => setView('guide')} className="bg-blue-600 text-white px-6 py-2 rounded-lg">Back to Guide</button>
                </div>
              </div>
            )}

            {view === 'home' && <Footer setView={setView} />}
          </div>
        </>
      )}
    </div>
  );












  