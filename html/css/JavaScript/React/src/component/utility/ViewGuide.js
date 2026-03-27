






export default function ViewGuide({ 
  view, reqSkills, setReqSkills, teamSize, setTeamSize, 
  findMatches, matches, teamSynergy, StudentCard, onDownload, 
  toggleSelection, selectedTeam, onFinalize,projectName, setProjectName // <--- toggleSelection aur onFinalize yahan add kiya
}) {

  // Local toggleSelection function ko yahan se delete kar diya gaya hai ❌

  return (
    <>
      {view === 'guide' && (
        <section className="skill-section">
          <h2>Guide: Team Matching</h2>
          
          <div className="skill-form">
            <input 
              type="text" 
              placeholder="Enter Required Skills (e.g. React, Node)" 
              value={reqSkills} 
              onChange={(e) => setReqSkills(e.target.value)} 
            />



            {/* Project Name Input - Requirement 1 ke liye */}
            <div style={{ marginBottom: '20px',paddingTop:'20px' }}>
            <label style={{ display: 'block', marginBottom: '5px' }}>Project / Event Name:</label>
            <input 
             type="text" 
             placeholder="e.g. Web Dev Team or  Annual Dance Group or " 
             value={projectName} // Ye naya state hoga
             onChange={(e) => setProjectName(e.target.value)} 
             style={{ 
             width: '100%', 
             padding: '10px', 
              borderRadius: '8px', 
              // border: '1px solid #ccc' 
             border: '1px solid #0369a1'
          }} 

          

           />
          </div>





            <div style={{ marginBottom: '15px', textAlign: 'center' }}>
              <label style={{ marginRight: '10px', fontWeight: 'bold' }}>Members Needed : </label>
              <input 
                type="number" 
                min="1" 
                max="50" 
                value={teamSize} 
                onChange={(e) => setTeamSize(e.target.value)}
                style={{ 
                  marginTop: '60px',
                  padding: '5px', 
                  borderRadius: '5px', 
                  border: '1px solid #ccc', 
                  width: '100px' 
                }} 
              />
            </div>
            <div className="bt0" style={{padding:"0px 200px 20px 1px"}}>
            <button onClick={findMatches} className="bt">
              Search Matches
            </button>
            </div>
          </div>

          {/* DASHBOARD CARDS */}
          {matches.length > 0 && (
            <div style={{ display: 'flex', gap: '20px', justifyContent: 'center', flexWrap: 'wrap', margin: '30px auto', maxWidth: '1000px',paddingTop:"80px" }}>
              <div style={{ flex: '1', minWidth: '300px', padding: '20px', background: 'linear-gradient(135deg, #007bff, #00c6ff)', borderRadius: '15px', color: 'white', textAlign: 'center' }}>
                <h3 style={{ margin: 0, fontSize: '0.9rem', opacity: 0.9 }}>Overall Team Match</h3>
                <div style={{ fontSize: '2.5rem', fontWeight: 'bold', margin: '5px 0' }}>{teamSynergy}%</div>
                <div style={{ width: '100%', height: '8px', background: 'rgba(255,255,255,0.3)', borderRadius: '4px', overflow: 'hidden' }}>
                  <div style={{ width: `${teamSynergy}%`, height: '100%', background: 'white' }}></div>
                </div>
              </div>

              <div style={{ flex: '1', minWidth: '300px', padding: '20px', background: 'linear-gradient(135deg, #a777e3, #6e8efb)', borderRadius: '15px', color: 'white', textAlign: 'center' }}>
                <h3 style={{ margin: 0, fontSize: '0.9rem', opacity: 0.9 }}>Team Synergy Score</h3>
                <div style={{ fontSize: '2.5rem', fontWeight: 'bold', margin: '5px 0' }}>{teamSynergy}%</div>
                <div style={{ width: '100%', height: '8px', background: 'rgba(255,255,255,0.3)', borderRadius: '4px', overflow: 'hidden' }}>
                  <div style={{ width: `${teamSynergy}%`, height: '100%', background: 'white' }}></div>
                </div>
              </div>
            </div>
          )}

          {/* ACTIONS BUTTONS */}
          <div style={{ textAlign: 'center', margin: '20px 0', display: 'flex', gap: '15px', justifyContent: 'center',paddingTop:"100px"}}>
            <button 
              onClick={onDownload} 
              style={{ padding: '12px 25px', background: '#28a745', color: 'white', border: 'none', borderRadius: '30px', fontWeight: 'bold', cursor: 'pointer' }}
            >
              📥 Download CSV
            </button>
            <div className="vnkas">
            <button 
              onClick={onFinalize} // <--- Guide ka "Confirm Team" button
              style={{ padding: '12px 25px', background: '#396397', color: 'white', border: 'none', borderRadius: '30px', fontWeight: 'bold', cursor: 'pointer' }}
            >
              ✅ Confirm Team ({selectedTeam.length})
            </button>
            </div>
          </div>


          {/* Result Cards */}
<div style={{ marginTop: '40px', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', gap: '25px', width: '100%', maxWidth: '1200px' }}>
  {matches.map((m, index) => {
    // MongoDB ID ya Dummy ID mein se jo mile use pick karein
    const studentId = m._id || m.id || index; 
    
    // Check karein ki kya ye student selectedTeam mein hai
    const isSelected = selectedTeam.some(s => (s._id || s.id) === studentId);

    return (
      <div 
        key={studentId} // Sabse important line: Unique Key!
        onClick={() => toggleSelection(m)} 
        style={{ 
          cursor: 'pointer',
          border: isSelected ? '4px solid #007bff' : '4px solid transparent', 
          borderRadius: '20px',
          transition: '0.3s',
          backgroundColor: isSelected ? 'rgba(0, 123, 255, 0.05)' : 'transparent'
        }}
      >
        <StudentCard 
          student={m} 
          searchArr={reqSkills.split(',').map(s => s.trim().toLowerCase())} 
        />
      </div>
    );
  })}
</div>
        </section>
      )}
    </>
  );
}
