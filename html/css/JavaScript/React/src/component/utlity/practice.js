import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom/client';

const MOCK_STUDENTS = [
  { id: 1, name: "Rahul", skills: ["react", "node", "mongodb"] },
  { id: 2, name: "Sneha", skills: ["python", "flask", "sql"] },
  { id: 3, name: "Amit", skills: ["react", "ui/ux", "figma"] },
];

const ProjectRequirements = () => {
  const [skillInput, setSkillInput] = useState('');
  const [requiredSkills, setRequiredSkills] = useState([]);
  const [matches, setMatches] = useState([]);

  useEffect(() => {
    if (requiredSkills.length === 0) {
      setMatches([]);
      return;
    }
    const results = MOCK_STUDENTS.map(student => {
      const matchingSkills = student.skills.filter(skill => 
        requiredSkills.includes(skill.toLowerCase())
      );
      const score = (matchingSkills.length / requiredSkills.length) * 100;
      return { ...student, score: Math.round(score) };
    })
    .filter(s => s.score > 0)
    .sort((a, b) => b.score - a.score);
    setMatches(results);
  }, [requiredSkills]);

  const addSkill = (e) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      if (skillInput.trim() !== "") {
        setRequiredSkills([...requiredSkills, skillInput.toLowerCase().trim()]);
        setSkillInput('');
      }
    }
  };

  // Defining styles as objects to avoid "Expected , got style" errors
  const containerStyle = { padding: '40px', maxWidth: '800px', margin: '0 auto', fontFamily: 'sans-serif' };
  const cardStyle = { background: '#f9f9f9', padding: '20px', borderRadius: '12px', boxShadow: '0 4px 6px rgba(0,0,0,0.1)' };

  return (
    <div style={containerStyle}>
      <h2 style={{ textAlign: 'center' }}>Project Requirements (Guide View)</h2>
      <div style={cardStyle}>
        <div style={{ display: 'flex', gap: '10px', marginBottom: '10px' }}>
          <input 
            type="text" 
            placeholder="Type skill (e.g. react) & press Enter" 
            value={skillInput}
            onKeyDown={addSkill}
            onChange={(e) => setSkillInput(e.target.value)}
            style={{ flex: 1, padding: '10px', borderRadius: '5px', border: '1px solid #ddd' }}
          />
        </div>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
          {requiredSkills.map((skill, index) => (
            <span key={index} style={{ background: '#007bff', color: 'white', padding: '5px 12px', borderRadius: '20px', fontSize: '14px' }}>
              {skill}
            </span>
          ))}
        </div>
      </div>

      {requiredSkills.length > 0 && (
        <div style={{ marginTop: '30px' }}>
          <h3>AI Match Preview: {matches.length} Candidates</h3>
          {matches.map(student => (
            <div key={student.id} style={{ display: 'flex', justifyContent: 'space-between', padding: '10px', borderBottom: '1px solid #eee' }}>
              <span><strong>{student.name}</strong> ({student.skills.join(', ')})</span>
              <span style={{ color: '#28a745', fontWeight: 'bold' }}>{student.score}% Match</span>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

const rootElement = document.getElementById('root');
if (rootElement) {
  ReactDOM.createRoot(rootElement).render(<ProjectRequirements />);
}