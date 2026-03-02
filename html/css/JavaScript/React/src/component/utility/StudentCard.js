




import React from 'react';

// Ek hi function rakhein aur props ko destructure karein
const StudentCard = ({ student, searchArr = [] }) => {
  return (
    <div className="student-card" style={{
        background: 'white', 
        padding: '25px', 
        borderRadius: '15px', 
        boxShadow: '0 8px 20px rgba(0,0,0,0.1)', 
        textAlign: 'left', 
        borderTop: '5px solid #007bff',
        marginBottom: '20px'
    }}>
      <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}>
        <h3 style={{margin: 0}}>{student.name}</h3>
        <span style={{background: '#e6f7ff', color: '#007bff', padding: '5px 12px', borderRadius: '20px', fontWeight: 'bold', fontSize: '0.9rem'}}>
          {student.score}% Match
        </span>
      </div>

      {/* --- SKILL GAP ANALYSIS BARS --- */}
      <div style={{ marginTop: '15px', padding: '12px', background: '#f9f9f9', borderRadius: '10px', border: '1px solid #eee' }}>
        <p style={{ fontSize: '0.8rem', fontWeight: 'bold', color: '#555', marginBottom: '8px', marginTop: 0 }}>Skill Gap Analysis:</p>
        
        {searchArr && searchArr.length > 0 ? (
          searchArr.map((skill, index) => {
            // Check if student has this specific skill
            const isMatched = student.skills.some(s => s.toLowerCase().includes(skill.toLowerCase()));
            return (
              <div key={index} style={{ display: 'flex', alignItems: 'center', marginBottom: '6px' }}>
                <span style={{ width: '90px', fontSize: '0.75rem', textTransform: 'capitalize', color: '#333' }}>{skill}</span>
                <div style={{ flex: 1, height: '8px', background: '#e0e0e0', borderRadius: '4px', overflow: 'hidden', margin: '0 12px' }}>
                  <div style={{ 
                      width: isMatched ? '100%' : '5%', 
                      height: '100%', 
                      background: isMatched ? '#28a745' : '#dc3545', 
                      transition: 'width 0.6s ease-in-out' 
                  }}></div>
                </div>
                <span style={{ fontSize: '0.8rem', color: isMatched ? '#28a745' : '#dc3545', fontWeight: 'bold' }}>
                  {isMatched ? '✓' : '✗'}
                </span>
              </div>
            );
          })
        ) : (
          <p style={{ fontSize: '0.75rem', color: '#888' }}>No specific skills searched</p>
        )}
      </div>

      <p style={{marginTop: '15px', fontSize: '0.9rem'}}><strong>Role:</strong> {student.role === 'fresher' ? '🎓 Fresher' : '💼 Experienced'}</p>
      <p style={{fontSize: '0.9rem'}}><strong>Projects:</strong> {student.projects || 'N/A'}</p>
      
      <div style={{display: 'flex', gap: '20px', marginTop: '15px', borderTop: '1px solid #eee', paddingTop: '15px'}}>
        <a href={student.github} target="_blank" rel="noreferrer"  onClick={(e) => e.stopPropagation()}     style={{textDecoration: 'none', color: '#333', fontSize: '0.85rem', fontWeight: 'bold'}}>GitHub ↗</a>
        <a href={student.linkedin} target="_blank" rel="noreferrer"   onClick={(e) => e.stopPropagation()}      style={{textDecoration: 'none', color: '#007bff', fontSize: '0.85rem', fontWeight: 'bold'}}>LinkedIn ↗</a>
      </div>
    </div>
  );
};

export default StudentCard;
