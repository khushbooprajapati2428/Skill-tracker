


import React from 'react';

// 🚀 Khushboo, yahan hum sirf data "receive" kar rahe hain, fetch nahi!
export default function GuideHistory({ teams }) {
    return (
        <div className="history-container" style={{ padding: '40px', maxWidth: '1200px', margin: '0 auto' }}>
            <h2 style={{ color: '#0369a1', borderBottom: '2px solid #0369a1', paddingBottom: '10px' }}>
                📜 My Project History
            </h2>
            
            <div style={{ marginTop: '30px', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '20px' }}>
                {teams && teams.length > 0 ? teams.map((team, index) => (
                    <div key={index} style={{ background: 'white', padding: '20px', borderRadius: '15px', boxShadow: '0 4px 15px rgba(0,0,0,0.1)', borderLeft: '5px solid #0369a1' }}>
                        <h3 style={{ margin: '0 0 10px 0', color: '#1e293b' }}>🚀 {team.projectName}</h3>
                        <p style={{ fontSize: '0.9rem', color: '#64748b' }}>
                            📅 Finalized on: {new Date(team.createdAt).toLocaleDateString('en-GB')}
                        </p>
                        
                        <h4 style={{ fontSize: '1rem', marginTop: '15px', color: '#334155' }}>👥 Team Members:</h4>
                        <ul style={{ paddingLeft: '20px', color: '#475569' }}>
                            {team.members && team.members.map((m, i) => (
                                <li key={i}>{m.name} ({m.email})</li>
                            ))}
                        </ul>
                    </div>
                )) : (
                    <p style={{ textAlign: 'center', gridColumn: '1/-1', color: '#94a3b8' }}>
                        No teams finalized yet. Start matching!
                    </p>
                )}
            </div>
        </div>
    );
}