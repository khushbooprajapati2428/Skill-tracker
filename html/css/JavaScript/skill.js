// npx parcel html/skill.html



import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom/client';
const App = () => {

  // --- SAARI STATES FUNCTION KE ANDAR HONI CHAHIYE ---
  const [view, setView] = useState('home'); 
  const [students, setStudents] = useState([]);
  const [matches, setMatches] = useState([]);
  const [clusters, setClusters] = useState({ high: [], mid: [], low: [] });
  const [reqSkills, setReqSkills] = useState('');
  // App function ke andar, baaki states ke saath ye likhein:
    const [teamSize, setTeamSize] = useState(5);
    const [teamSynergy, setTeamSynergy] = useState(0);

 
    const loadSampleData = () => {
    const sampleStudents = [
      { id: 1, name: "Aarav Sharma", role: "fresher", github: "https://github.com", linkedin: "https://linkedin.com", skills: ["react", "javascript", "css"], projects: "E-commerce Website, Weather App" },
      { id: 2, name: "Ishani Gupta", role: "experienced", experience: "2 years at TechCorp", github: "https://github.com", linkedin: "https://linkedin.com", skills: ["python", "django", "sql"], projects: "Inventory Management System" },
      { id: 3, name: "Rohan Verma", role: "fresher", github: "https://github.com", linkedin: "https://linkedin.com", skills: ["react", "node", "mongodb"], projects: "Chat Application" },
      { id: 4, name: "Sanya Malhotra", role: "fresher", github: "https://github.com", linkedin: "https://linkedin.com", skills: ["ui/ux", "figma", "html"], projects: "Portfolio Design" },
      { id: 5, name: "Kabir Singh", role: "experienced", experience: "1 year at StartupX", github: "https://github.com", linkedin: "https://linkedin.com", skills: ["java", "spring boot", "mysql"], projects: "Banking Portal" },
      { id: 6, name: "Neha Patel", role: "fresher", github: "https://github.com", linkedin: "https://linkedin.com", skills: ["html", "css", "bootstrap"], projects: "Landing Page" },
  { id: 7, name: "Aditya Mehra", role: "experienced", experience: "3 years at Infosys", github: "https://github.com", linkedin: "https://linkedin.com", skills: ["react", "redux", "typescript"], projects: "HR Management System" },
  { id: 8, name: "Pooja Nair", role: "fresher", github: "https://github.com", linkedin: "https://linkedin.com", skills: ["python", "flask", "sqlite"], projects: "Student Result System" },
  { id: 9, name: "Rahul Khanna", role: "experienced", experience: "4 years at TCS", github: "https://github.com", linkedin: "https://linkedin.com", skills: ["angular", "node", "mongodb"], projects: "CRM Application" },
  { id: 10, name: "Simran Kaur", role: "fresher", github: "https://github.com", linkedin: "https://linkedin.com", skills: ["react", "tailwind", "javascript"], projects: "Blog Website" },
  {id: 16, name: "Sneha Iyer", role: "fresher", github: "https://github.com", linkedin: "https://linkedin.com", skills: ["react", "firebase", "css"], projects: "To-do App" },
  { id: 17, name: "Arjun Malviya", role: "experienced", experience: "6 years at IBM", github: "https://github.com", linkedin: "https://linkedin.com", skills: ["devops", "docker", "aws"], projects: "Cloud Deployment System" },
  { id: 18, name: "Kritika Saxena", role: "fresher", github: "https://github.com", linkedin: "https://linkedin.com", skills: ["javascript", "react", "api"], projects: "Movie Search App" },
  { id: 19, name: "Nikhil Bansal", role: "experienced", experience: "2 years at Zoho", github: "https://github.com", linkedin: "https://linkedin.com", skills: ["php", "laravel", "mysql"], projects: "Billing Software" },
  { id: 20, name: "Megha Choudhary", role: "fresher", github: "https://github.com", linkedin: "https://linkedin.com", skills: ["html", "css", "js"], projects: "Restaurant Website" },
  { id: 21, name: "Yash Kulkarni", role: "experienced", experience: "3 years at Oracle", github: "https://github.com", linkedin: "https://linkedin.com", skills: ["sql", "plsql", "database"], projects: "Data Warehouse System" },
  { id: 22, name: "Aditi Mishra", role: "fresher", github: "https://github.com", linkedin: "https://linkedin.com", skills: ["react", "mui", "css"], projects: "Dashboard UI" },
  { id: 23, name: "Saurabh Pandey", role: "experienced", experience: "7 years at Amazon", github: "https://github.com", linkedin: "https://linkedin.com", skills: ["system design", "java", "microservices"], projects: "E-commerce Backend" },
  { id: 24, name: "Divya Rathi", role: "fresher", github: "https://github.com", linkedin: "https://linkedin.com", skills: ["python", "ml basics"], projects: "Spam Detection System" },
  { id: 25, name: "Harsh Vardhan", role: "experienced", experience: "4 years at Paytm", github: "https://github.com", linkedin: "https://linkedin.com", skills: ["react", "node", "payment gateway"], projects: "Wallet Application" },
  {id: 26, name: "Isha Kapoor", role: "fresher", github: "https://github.com", linkedin: "https://linkedin.com", skills: ["ui/ux", "figma"], projects: "Travel App Design" },
  { id: 27, name: "Mohit Aggarwal", role: "experienced", experience: "2 years at Flipkart", github: "https://github.com", linkedin: "https://linkedin.com", skills: ["node", "redis", "mongodb"], projects: "Order Management System" },
  { id: 28, name: "Palak Sethi", role: "fresher", github: "https://github.com", linkedin: "https://linkedin.com", skills: ["react", "hooks", "context"], projects: "Notes App" },
  { id: 29, name: "Ravi Prakash", role: "experienced", experience: "5 years at HCL", github: "https://github.com", linkedin: "https://linkedin.com", skills: ["testing", "selenium", "java"], projects: "Automation Framework" },
  { id: 30, name: "Naina Arora", role: "fresher", github: "https://github.com", linkedin: "https://linkedin.com", skills: ["css", "animation"], projects: "Creative Website" },
   { id: 31, name: "Keshav Rana", role: "experienced", experience: "6 years at Deloitte", github: "https://github.com", linkedin: "https://linkedin.com", skills: ["data analysis", "python", "powerbi"], projects: "Sales Analytics Dashboard" },
  { id: 32, name: "Riya Sen", role: "fresher", github: "https://github.com", linkedin: "https://linkedin.com", skills: ["react", "router"], projects: "Multi Page Website" },
  { id: 33, name: "Aman Tiwari", role: "experienced", experience: "3 years at Cognizant", github: "https://github.com", linkedin: "https://linkedin.com", skills: ["dotnet", "c#", "sql server"], projects: "ERP System" },
  { id: 34, name: "Payal Verma", role: "fresher", github: "https://github.com", linkedin: "https://linkedin.com", skills: ["javascript", "logic building"], projects: "Quiz App" },
  { id: 35, name: "Siddharth Jain", role: "experienced", experience: "8 years at Google", github: "https://github.com", linkedin: "https://linkedin.com", skills: ["algorithms", "system design"], projects: "Search Optimization Tool" },
  { id: 36, name: "Tanvi Kulkarni", role: "fresher", github: "https://github.com", linkedin: "https://linkedin.com", skills: ["html", "css", "responsive"], projects: "College Website" },
  { id: 37, name: "Deepak Soni", role: "experienced", experience: "4 years at Adobe", github: "https://github.com", linkedin: "https://linkedin.com", skills: ["ui engineering", "react"], projects: "Design System" },
  { id: 38, name: "Bhavya Goyal", role: "fresher", github: "https://github.com", linkedin: "https://linkedin.com", skills: ["node", "api"], projects: "URL Shortener" },
  { id: 39, name: "Prateek Mishra", role: "experienced", experience: "3 years at Swiggy", github: "https://github.com", linkedin: "https://linkedin.com", skills: ["backend", "node", "scaling"], projects: "Food Delivery Backend" },
  { id: 40, name: "Shreya Das", role: "fresher", github: "https://github.com", linkedin: "https://linkedin.com", skills: ["figma", "ux research"], projects: "User Research Case Study" },
  { id: 41, name: "Akash Singh", role: "experienced", experience: "5 years at Microsoft", github: "https://github.com", linkedin: "https://linkedin.com", skills: ["azure", "cloud"], projects: "Cloud Monitoring Tool" },
  { id: 42, name: "Pallavi Rao", role: "fresher", github: "https://github.com", linkedin: "https://linkedin.com", skills: ["react", "forms"], projects: "Registration System" },
  { id: 43, name: "Gaurav Kapoor", role: "experienced", experience: "2 years at Byju’s", github: "https://github.com", linkedin: "https://linkedin.com", skills: ["edtech", "frontend"], projects: "Learning Platform" },
  { id: 44, name: "Kajal Meena", role: "fresher", github: "https://github.com", linkedin: "https://linkedin.com", skills: ["javascript", "dom"], projects: "Interactive Game" },
  { id: 45, name: "Ritesh Kulkarni", role: "experienced", experience: "6 years at SAP", github: "https://github.com", linkedin: "https://linkedin.com", skills: ["enterprise apps", "java"], projects: "Supply Chain System" },
  { id: 46, name: "Muskan Ali", role: "fresher", github: "https://github.com", linkedin: "https://linkedin.com", skills: ["react", "api"], projects: "News App" },
  { id: 47, name: "Shubham Patil", role: "experienced", experience: "3 years at Zomato", github: "https://github.com", linkedin: "https://linkedin.com", skills: ["node", "performance"], projects: "Order Tracking System" },
  { id: 48, name: "Ayesha Khan", role: "fresher", github: "https://github.com", linkedin: "https://linkedin.com", skills: ["ui/ux", "wireframing"], projects: "Health App Design" },
  { id: 49, name: "Naveen Kumar", role: "experienced", experience: "4 years at Ola", github: "https://github.com", linkedin: "https://linkedin.com", skills: ["maps", "backend"], projects: "Ride Allocation System" },
  { id: 50, name: "Khushboo Prajapati", role: "fresher", github: "https://github.com", linkedin: "https://linkedin.com", skills: ["react", "web development"], projects: "Final Year Project" },

      
    ];

  
    setStudents(sampleStudents);
    localStorage.setItem('students', JSON.stringify(sampleStudents));
    alert("25 Sample Students Loaded! Now go to Guide View and search 'React'");
  };
  // Load data on start
  useEffect(() => {
    const savedStudents = JSON.parse(localStorage.getItem('students')) || [];
    setStudents(savedStudents);
  }, []);

  // --- STUDENT STATE ---
  const [stuData, setStuData] = useState({
    name: '',
    role: 'fresher', 
    github: '',
    linkedin: '',
    skills: '',
    projects: '',
    experience: ''
  });

  const handleStudentSubmit = (e) => {
    e.preventDefault();
    const newStudent = {
      id: Date.now(),
      ...stuData,
      skills: stuData.skills.split(',').map(s => s.trim().toLowerCase())
    };
    const updatedList = [...students, newStudent];
    setStudents(updatedList);
    localStorage.setItem('students', JSON.stringify(updatedList));
    alert("Profile Submitted Successfully!");
    setStuData({ name: '', role: 'fresher', github: '', linkedin: '', skills: '', projects: '', experience: '' });
  };

  // --- GUIDE LOGIC ---

  // --- ORIGINAL LOGIC: Direct Matching & Sorting ---
  const findMatches = () => {
    if (!reqSkills) return alert("Please enter skills to search");

    const searchArr = reqSkills.split(',').map(s => s.trim().toLowerCase());
    
    const results = students.map(s => {
      const matched = s.skills.filter(stuSkill => 
        searchArr.some(rs => stuSkill.toLowerCase().includes(rs))
      );
      
      let fitness = (matched.length / searchArr.length) * 100;
      // B.Tech Logic: Experienced candidates ko extra weightage
      if (s.role === 'experienced' && fitness > 0) fitness += 5; 
      
      return { ...s, score: Math.round(Math.min(fitness, 100)) };
    })
    .filter(s => s.score > 0)
    .sort((a,b) => b.score - a.score) 
    .slice(0, teamSize); // <--- Manager ki choice ke hisaab se cards dikhayega

    setMatches(results);
    // findMatches function ke end mein (setMatches ke baad)
      const totalScore = results.reduce((sum, student) => sum + student.score, 0);
      const averageScore = results.length > 0 ? Math.round(totalScore / results.length) : 0;

    // Ise ek state mein save karne ke liye (Naya State banayein: teamSynergy)
      setTeamSynergy(averageScore);


  };
  return (
    <div className="main-container">
      <nav className="navbar">
        <div className="logo" onClick={() => setView('home')} style={{cursor:'pointer'}}>
          Skill<span>Tracker</span>
        </div>
        <ul className="nav-links">
  <li onClick={() => setView('home')}><a href="#">Home</a></li>
  <li onClick={() => setView('student')}><a href="#">Student View</a></li>
  <li onClick={() => setView('guide')}><a href="#">Guide View</a></li>
  {/* Testing Button */}
  <button onClick={loadSampleData} style={{
    background: '#396397', 
    border: 'none', 
    padding: '5px 10px', 
    borderRadius: '5px', 
    cursor: 'pointer',
    fontWeight: 'bold'
  }}>
    Load Demo Data
  </button>
</ul>
      </nav>

      {view === 'home' && (
        <section className="hero">
          <div className="hero-text">
            <h1 className="animated-heading">
              <span style={{"--i": 1}}>Build</span> <span style={{"--i": 2}}>Smarter</span> 
              <span style={{"--i": 3}}>Teams</span> <span style={{"--i": 4}}>with</span> <span style={{"--i": 5}}>AI</span>
            </h1>
            <p>Let AI help you create balanced project teams based on student skills and interests.</p>
            <button className="btn" onClick={() => setView('student')} style={{marginTop: '30px'}}>Get Started</button>
          </div>
        </section>
      )}

      {view === 'student' && (
        <section className="skill-section">
          <div style={{ background: 'white', padding: '30px', borderRadius: '15px', boxShadow: '0 4px 15px rgba(0,0,0,0.1)', width: '100%', maxWidth: '500px', textAlign:'left' }}>
            <h2 style={{textAlign:'center', marginBottom:'20px'}}>Create Your Profile</h2>
            <form className="skill-form" onSubmit={handleStudentSubmit} style={{display:'flex', flexDirection:'column', gap:'10px'}}>
              
              <label>Full Name</label>
              <input type="text" placeholder="Name" value={stuData.name} onChange={(e)=>setStuData({...stuData, name: e.target.value})} required />

              <label>Status</label>
              <select value={stuData.role} onChange={(e)=>setStuData({...stuData, role: e.target.value})} style={{padding:'10px', borderRadius:'8px', border:'1px solid #ccc'}}>
                <option value="fresher">Fresher</option>
                <option value="experienced">Experienced</option>
              </select>

              {stuData.role === 'experienced' && (
                <input type="text" placeholder="Work Experience Details" value={stuData.experience} onChange={(e)=>setStuData({...stuData, experience: e.target.value})} />
              )}

              <label>GitHub & LinkedIn</label>
              <input type="url" placeholder="GitHub URL" value={stuData.github} onChange={(e)=>setStuData({...stuData, github: e.target.value})} />
              <input type="url" placeholder="LinkedIn URL" value={stuData.linkedin} onChange={(e)=>setStuData({...stuData, linkedin: e.target.value})} />

              <label>Projects & Skills</label>
              <textarea placeholder="Major Projects" value={stuData.projects} onChange={(e)=>setStuData({...stuData, projects: e.target.value})} style={{padding:'10px', borderRadius:'8px', border:'1px solid #ccc'}} />
              <input type="text" placeholder="Skills (React, Java, Python)" value={stuData.skills} onChange={(e)=>setStuData({...stuData, skills: e.target.value})} required />

              <button type="submit" className="bt" style={{position:'relative', width:'100%', marginTop:'10px'}}>Register Profile</button>
            </form>
          </div>
        </section>
      )}

      {view === 'guide' && (
  <section className="skill-section">
    <h2>Guide: Team Matching</h2>
    <div className="skill-form">
      <input 
        type="text" 
        placeholder="Enter Required Skills (e.g. React, Node)" 
        value={reqSkills} 
        onChange={(e)=>setReqSkills(e.target.value)} 
      />

      <div style={{ marginBottom: '15px', textAlign: 'center' }}>
  <label style={{ marginRight: '10px', fontWeight: 'bold' }}>Members Needed: </label>
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
      <button onClick={findMatches} className="bt" style={{position:'relative'}}>Search Matches</button>
    </div>

    {/* SYNERGY DASHBOARD: Tabhi dikhega jab search results honge */}



      {/* HORIZONTAL ANALYTICS DASHBOARD */}
{matches.length > 0 && (
  <div style={{
    display: 'flex', 
    gap: '20px', 
    justifyContent: 'center', 
    flexWrap: 'wrap', // Mobile par apne aap upar-niche ho jayenge
    margin: '30px auto',
    maxWidth: '1000px'
  }}>
    
    {/* 1. BLUE CARD: Overall Match */}
    <div style={{
      flex: '1',
      minWidth: '300px',
      padding: '20px',
      background: 'linear-gradient(135deg, #007bff, #00c6ff)',
      borderRadius: '15px',
      color: 'white',
      textAlign: 'center',
      boxShadow: '0 8px 15px rgba(0,123,255,0.2)'
    }}>
      <h3 style={{ margin: 0, fontSize: '0.9rem', opacity: 0.9 }}>Overall Team Match</h3>
      <div style={{ fontSize: '2.5rem', fontWeight: 'bold', margin: '5px 0' }}>{teamSynergy}%</div>
      <div style={{ width: '100%', height: '8px', background: 'rgba(255,255,255,0.3)', borderRadius: '4px', overflow: 'hidden' }}>
        <div style={{ width: `${teamSynergy}%`, height: '100%', background: 'white', transition: 'width 1.5s' }}></div>
      </div>
      <p style={{fontSize: '0.75rem', marginTop: '10px'}}>Based on top {matches.length} candidates</p>
    </div>

    {/* 2. PINK/PURPLE CARD: Team Synergy Score */}
    <div style={{
      flex: '1',
      minWidth: '300px',
      padding: '20px',
      background: 'linear-gradient(135deg, #a777e3, #6e8efb)',
      borderRadius: '15px',
      color: 'white',
      textAlign: 'center',
      boxShadow: '0 8px 15px rgba(110,142,251,0.2)'
    }}>
      <h3 style={{ margin: 0, fontSize: '0.9rem', opacity: 0.9 }}>Team Synergy Score</h3>
      <div style={{ fontSize: '2.5rem', fontWeight: 'bold', margin: '5px 0' }}>{teamSynergy}%</div>
      <div style={{ width: '100%', height: '8px', background: 'rgba(255,255,255,0.3)', borderRadius: '4px', overflow: 'hidden' }}>
        <div style={{ width: `${teamSynergy}%`, height: '100%', background: 'white', transition: 'width 1.5s' }}></div>
      </div>
      <p style={{fontSize: '0.75rem', marginTop: '10px'}}>Optimized for {teamSize} members</p>
    </div>

  </div>
)}

    <p style={{ margin: '0', fontSize: '0.9rem', opacity: '0.9' }}>
      Overall strength based on your {matches.length} selected members.
    </p>
    
    {/* Visual Strength Bar */}
    <div style={{ width: '100%', height: '10px', background: 'rgba(255,255,255,0.3)', borderRadius: '5px', marginTop: '15px', overflow: 'hidden' }}>
      <div style={{ width: `${teamSynergy}%`, height: '100%', background: 'white', transition: 'width 1s ease-in-out' }}></div>
    </div>

   



      {/* MATCHING CARDS CONTAINER */}
        <div style={{
          marginTop: '40px', 
          display: 'grid', 
          gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', 
          gap: '25px', 
          width: '100%', 
           maxWidth: '1200px'
        }}>
  {matches.map(m => (
    <StudentCard 
      key={m.id} 
      student={m} 
      searchArr={reqSkills.split(',').map(s => s.trim().toLowerCase())} 
    />
  ))}
  


</div>
  </section>
)
  };
   </div>
  );
};



// App component ke bahar (Niche)
const StudentCard = ({ student, searchArr }) => {
  return (
    <div className="student-card" style={{
        background: 'white', padding: '25px', borderRadius: '15px', 
        boxShadow: '0 8px 20px rgba(0,0,0,0.1)', textAlign: 'left', borderTop: '5px solid #007bff',
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
        {searchArr.map((skill, index) => {
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
        })}
      </div>

      <p style={{marginTop: '15px', fontSize: '0.9rem'}}><strong>Role:</strong> {student.role === 'fresher' ? '🎓 Fresher' : '💼 Experienced'}</p>
      <p style={{fontSize: '0.9rem'}}><strong>Projects:</strong> {student.projects || 'N/A'}</p>
      
      <div style={{display: 'flex', gap: '20px', marginTop: '15px', borderTop: '1px solid #eee', paddingTop: '15px'}}>
        <a href={student.github} target="_blank" rel="noreferrer" style={{textDecoration: 'none', color: '#333', fontSize: '0.85rem', fontWeight: 'bold'}}>GitHub ↗</a>
        <a href={student.linkedin} target="_blank" rel="noreferrer" style={{textDecoration: 'none', color: '#007bff', fontSize: '0.85rem', fontWeight: 'bold'}}>LinkedIn ↗</a>
      </div>
    </div>
  );
};

const rootElement = document.getElementById('root');
if (rootElement) {
  if (!window._root) window._root = ReactDOM.createRoot(rootElement);
  window._root.render(<App />);
}
























