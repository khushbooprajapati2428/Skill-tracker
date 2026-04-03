import React, { useState, useEffect } from 'react';

export default function GuideHistory({ teams,guideData }) {
    const [teams, setTeams] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchHistory = async () => {
            try {
                const res = await fetch(`http://localhost:5000/api/guide-teams/${guideData._id || 'dummy-id'}`);
                const data = await res.json();
                setTeams(data);
            } catch (err) {
                console.error("History fetch error:", err);
            } finally {
                setLoading(false);
            }
        };
        fetchHistory();
    }, [guideData?._id]);

    return (
        <div className="history-container" style={{ padding: '40px', maxWidth: '1200px', margin: '0 auto' }}>
            <h2 style={{ color: '#0369a1', borderBottom: '2px solid #0369a1', paddingBottom: '10px' }}>
                📜 My Project History
            </h2>
            
            {loading ? <p>Loading your history...</p> : (
                <div style={{ marginTop: '30px', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '20px' }}>
                    {teams.length > 0 ? teams.map((team, index) => (
                        <div key={index} style={{ background: 'white', padding: '20px', borderRadius: '15px', boxShadow: '0 4px 15px rgba(0,0,0,0.1)', borderLeft: '5px solid #0369a1' }}>
                            <h3 style={{ margin: '0 0 10px 0', color: '#1e293b' }}>🚀 {team.projectName}</h3>
                            <p style={{ fontSize: '0.9rem', color: '#64748b' }}>📅 Finalized on: {new Date(team.createdAt).toLocaleDateString('en-GB')}</p>
                            
                            <h4 style={{ fontSize: '1rem', marginTop: '15px', color: '#334155' }}>👥 Team Members:</h4>
                            <ul style={{ paddingLeft: '20px', color: '#475569' }}>
                                {team.members.map((m, i) => (
                                    <li key={i}>{m.name} ({m.email})</li>
                                ))}
                            </ul>
                            
                            <div style={{ marginTop: '15px', textAlign: 'right' }}>
                                <span style={{ background: '#e0f2fe', color: '#0369a1', padding: '5px 12px', borderRadius: '20px', fontSize: '0.8rem', fontWeight: 'bold' }}>
                                    Completed
                                </span>
                            </div>
                        </div>
                    )) : (
                        <p style={{ textAlign: 'center', gridColumn: '1/-1', color: '#94a3b8' }}>
                            No teams finalized yet. Start matching!
                        </p>
                    )}
                </div>
            )}
        </div>
    );
}