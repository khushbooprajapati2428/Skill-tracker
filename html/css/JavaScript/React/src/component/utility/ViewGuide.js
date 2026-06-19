




import React, { useState } from 'react';

export default function ViewGuide({ 
  view, reqSkills, setReqSkills, teamSize, setTeamSize, 
  findMatches, matches, teamSynergy, StudentCard, onDownload, 
  toggleSelection, selectedTeam, onFinalize, projectName, setProjectName, onConnectClick
}) {

  const [autoTeams, setAutoTeams] = useState([]);
  const [isAutoMode, setIsAutoMode] = useState(false);
  const [loading, setLoading] = useState(false);
  const [numSquads, setNumSquads] = useState(3); 

  const generateAutoSquads = async () => {
    setLoading(true);
    try {
        // 🚀 Size query parameter bhi bhej rahe hain ab
        const res = await fetch(`http://localhost:5000/api/auto-squad?limit=${numSquads}&size=${teamSize}`);
        const data = await res.json();
        
        if (res.ok) {
            setAutoTeams(data);
            setIsAutoMode(true);
        } else {
            alert("Error generating squads");
        }
    } catch (err) {
        alert("Server Error");
    } finally {
        setLoading(false);
    }
};

  return (
    <>
      {view === 'guide' && (
        <section className="skill-section">
          <h2>Guide: Team Matching</h2>
          
          <div className="skill-form">
            {/* Input: Required Skills */}
            <input 
              type="text" 
              placeholder="Enter Required Skills (e.g. React, Node)" 
              value={reqSkills} 
              onChange={(e) => setReqSkills(e.target.value)} 
            />

            {/* Input: Project Name */}
            <div style={{ marginBottom: '20px', paddingTop:'20px' }}>
              <label style={{ display: 'block', marginBottom: '5px', fontWeight: 'bold' }}>Project / Event Name:</label>
              <input 
                type="text" 
                placeholder="e.g. Web Dev Team" 
                value={projectName} 
                onChange={(e) => setProjectName(e.target.value)} 
                style={{ width: '100%', padding: '10px', borderRadius: '8px', border: '1px solid #0369a1' }} 
              />
            </div>

            {/* Input: Members Needed */}
            <div style={{ marginBottom: '15px', textAlign: 'center' }}>
              <label style={{ marginRight: '10px', fontWeight: 'bold' }}>Members Needed Per Team: </label>
              <input 
                type="number" 
                value={teamSize} 
                onChange={(e) => setTeamSize(e.target.value)}
                style={{ padding: '5px', borderRadius: '5px', border: '1px solid #ccc', width: '60px' }} 
              />
            </div>

            {/* 🚀 AI SETTINGS BOX (Buttons se alag aur upar) */}
            <div style={{ marginBottom: '25px', textAlign: 'center', background: '#f0f9ff', padding: '15px', borderRadius: '12px', border: '1px dashed #6e8efb' }}>
                <label style={{ fontWeight: '600', color: '#0369a1' }}>AI Mode: How many squads to generate? </label>
                <input 
                    type="number" 
                    value={numSquads} 
                    onChange={(e) => setNumSquads(e.target.value)}
                    style={{ width: '60px', padding: '5px', marginLeft: '10px', borderRadius: '5px', border: '1px solid #6e8efb' }}
                />
            </div>

            {/* 🚀 DUAL MODE BUTTONS SECTION */}
            <div style={{ display: 'flex', gap: '20px', justifyContent: 'center', paddingBottom: '30px', flexWrap: 'wrap' }}>
              
              {/* Option 1: Manual Mode */}
              <button 
                onClick={() => { setIsAutoMode(false); findMatches(); }} 
                className="bt"
                style={{ cursor: 'pointer', padding: '12px 25px' }}
              >
                🔍 Search Matches (Manual Selection)
              </button>

              {/* Option 2: AI Mode */}
              <button 
                onClick={generateAutoSquads} 
                style={{ 
                  padding: '12px 25px', 
                  background: 'linear-gradient(135deg, #6e8efb, #a777e3)', 
                  color: 'white', 
                  border: 'none', 
                  borderRadius: '30px', 
                  fontWeight: 'bold', 
                  cursor: 'pointer',
                  boxShadow: '0 4px 15px rgba(110, 142, 251, 0.4)'
                }}
              >
                {loading ? "✨ Generating..." : "✨ AI Auto-Squad Suggestion"}
              </button>
            </div>
          </div>

          {/* --- RESULTS DISPLAY --- */}
          {isAutoMode ? (
            /* 🚀 VIEW A: AI AUTOMATIC SQUADS */
            <div style={{ marginTop: '40px', width: '100%', maxWidth: '1200px' }}>
              <h2 style={{ textAlign: 'center', color: '#0369a1', marginBottom: '30px' }}>AI Recommended Squads</h2>
              {autoTeams.map((squad) => (
                <div key={squad.teamId} style={{ marginBottom: '40px', padding: '20px', background: '#f0f9ff', borderRadius: '20px', border: '2px dashed #0369a1' }}>
                  <h3 style={{ color: '#0369a1' }}>Squad #{squad.teamId} (Balanced)</h3>
                  <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '20px' }}>
                    {squad.members.map((m, memberIndex) => (
                      <StudentCard 
                        key={`squad-${squad.teamId}-student-${m._id}-${memberIndex}`} 
                        student={m} 
                        isSelected={false} 
                        onConnect={() => onConnectClick(m)} 
                      />
                    ))}
                  </div>
                </div>
              ))}
            </div>
          ) : (
            /* 🔍 VIEW B: MANUAL SELECTION (Guide's Choice) */
            <>
              {matches.length > 0 && (
                <div style={{ display: 'flex', gap: '20px', justifyContent: 'center', flexWrap: 'wrap', margin: '30px auto', maxWidth: '1000px', paddingTop:"20px" }}>
                   <div style={{ flex: '1', minWidth: '300px', padding: '20px', background: 'linear-gradient(135deg, #007bff, #00c6ff)', borderRadius: '15px', color: 'white', textAlign: 'center' }}>
                      <h3 style={{ margin: 0, fontSize: '0.9rem', opacity: 0.9 }}>Overall Team Match</h3>
                      <div style={{ fontSize: '2.5rem', fontWeight: 'bold', margin: '5px 0' }}>{teamSynergy}%</div>
                   </div>
                   <div style={{ flex: '1', minWidth: '300px', padding: '20px', background: 'linear-gradient(135deg, #a777e3, #6e8efb)', borderRadius: '15px', color: 'white', textAlign: 'center' }}>
                      <h3 style={{ margin: 0, fontSize: '0.9rem', opacity: 0.9 }}>Team Synergy Score</h3>
                      <div style={{ fontSize: '2.5rem', fontWeight: 'bold', margin: '5px 0' }}>{teamSynergy}%</div>
                   </div>
                </div>
              )}

              {/* Guide's Finalize Section (Only in Manual Mode) */}
              {matches.length > 0 && (
                <div style={{ textAlign: 'center', margin: '30px 0', background: '#fff9e6', padding: '20px', borderRadius: '15px', border: '1px solid #ffeeba' }}>
                  <p style={{ fontWeight: 'bold', color: '#856404', marginBottom: '10px' }}>Manual Mode: Pick your team members from the cards below.</p>
                  <div style={{ display: 'flex', gap: '15px', justifyContent: 'center' }}>
                    <button onClick={onDownload} style={{ padding: '12px 25px', background: '#28a745', color: 'white', border: 'none', borderRadius: '30px', fontWeight: 'bold', cursor: 'pointer' }}>📥 Download CSV</button>
                    <button onClick={onFinalize} style={{ padding: '12px 25px', background: '#396397', color: 'white', border: 'none', borderRadius: '30px', fontWeight: 'bold', cursor: 'pointer' }}>✅ Confirm Manual Team ({selectedTeam.length})</button>
                  </div>
                </div>
              )}

              {/* Grid of Student Cards for Manual Selection */}
              <div style={{ marginTop: '40px', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', gap: '25px', width: '100%', maxWidth: '1200px' }}>
                {matches.map((m, index) => {
                  const isSelected = selectedTeam.some(s => (s._id || s.id) === (m._id || m.id));
                  return (
                    <div key={m._id || index} onClick={() => toggleSelection(m)} style={{ cursor: 'pointer', borderRadius: '20px', border: isSelected ? '4px solid #007bff' : '4px solid transparent', backgroundColor: isSelected ? 'rgba(0, 123, 255, 0.05)' : 'white', transition: '0.3s all ease', transform: isSelected ? 'scale(1.02)' : 'scale(1)' }}>
                      <StudentCard student={m} isSelected={isSelected} searchArr={reqSkills ? reqSkills.split(',').map(s => s.trim().toLowerCase()) : []} onConnect={() => onConnectClick(m)} />
                    </div>
                  );
                })}
              </div>
            </>
          )}
        </section>
      )}
    </>
  );
}