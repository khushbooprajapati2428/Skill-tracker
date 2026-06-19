// npx parcel html/skill.html














import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom/client';
import findMatches from './React/src/component/utility/findMatches';
import Footer from './React/src/component/utility/FooterSection';
import jobsData from './React/src/component/utility/jobsData';
import loadSampleData from './React/src/component/utility/loadSampleData';
import StudentCard from './React/src/component/utility/StudentCard';
import ViewGuide from './React/src/component/utility/ViewGuide';
import ViewHome from './React/src/component/utility/ViewHome';
import ViewStudent from './React/src/component/utility/ViewStudent';
import EmailPass from './React/src/component/utility/EmailPass';
import { handleRegister } from './React/src/component/utility/handleRegister';
import ViewDashboard from './React/src/component/utility/ViewDashboard';
import ViewGuideHistory from './React/src/component/utility/ViewGuideHistory';
import GuideHistory from './React/src/component/utility/GuideHistory';
import MessageModal from './React/src/component/utility/MessageModal';
import ViewSkillMarket from './React/src/component/utility/ViewSkillMarket';





const App = () => {
  // --- States ---
  const [view, setView] = useState('login'); 
  const [activeModal, setActiveModal] = useState(null); // 'resume' ya 'team' ya null
  const [students, setStudents] = useState([]);
  const [matches, setMatches] = useState([]);
  const [reqSkills, setReqSkills] = useState('');
  const [teamSize, setTeamSize] = useState(5);
  const [teamSynergy, setTeamSynergy] = useState(0);
  const [selectedTeam, setSelectedTeam] = useState([]);
  const [stuData, setStuData] = useState({
    name: '', role: 'fresher', github: '', linkedin: '', skills: '', projects: '', email: '', password: ''
  });

  // App.js / skill.js ke top par states ke saath add karein
    const [projectName, setProjectName] = useState('');
    const [guideTeams, setGuideTeams] = useState([]);
    const [guideHistory, setGuideHistory] = useState([]);
    // App.js ke states section mein:
    const [isMessageModalOpen, setIsMessageModalOpen] = useState(false);
    const [selectedStudentForMessage, setSelectedStudentForMessage] = useState(null);
    
   



    // --- States ke niche aur handleRegister ke upar ---

const handleLoadData = () => {
    if (typeof loadSampleData === 'function') {
        loadSampleData(setStudents);
    } else {
        console.warn("loadSampleData function define nahi hai!");
    }
};

  const handlefindMatches = () => {
    findMatches(reqSkills, students, teamSize, setMatches, setTeamSynergy);
  };



const handleLogin = async (e) => {
    e.preventDefault();
    try {
        // 🚀 URL ko dhyan se dekho, koi extra space nahi hona chahiye
        const response = await fetch('http://localhost:5000/api/login', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ email: stuData.email, password: stuData.password })
        });

        // 💡 Ye check add karein taaki HTML/JSON ka pata chale
        const contentType = response.headers.get("content-type");
        if (!contentType || !contentType.includes("application/json")) {
             const errorText = await response.text();
             console.error("Backend ne JSON nahi, HTML bheja hai:", errorText);
             throw new Error("Backend route missing (404) or Server Error");
        }

        const data = await response.json();

        if (response.ok) {
            setStuData(data.user); 
            setView('home'); 
            alert("Welcome back, " + data.user.name + "!");
        } else {
            alert("Login Failed: " + data.message);
        }
    } catch (error) {
        console.error("Login Error Details:", error);
        alert("Server connection error! Please check if the backend is running on port 5000.");
    }
};





const handleRegister = async (e) => {
    e.preventDefault();
    
    // 🚀 Formatting: String ko Array mein badalna zaroori hai
    const formattedData = {
        ...stuData,
        skills: typeof stuData.skills === 'string' 
                ? stuData.skills.split(',').map(s => s.trim()) 
                : stuData.skills,

        skillsToLearn: typeof stuData.skillsToLearn === 'string' 
                ? stuData.skillsToLearn.split(',').map(s => s.trim()) 
                : stuData.skillsToLearn,

        skillsToTeach: typeof stuData.skillsToTeach === 'string' 
                ? stuData.skillsToTeach.split(',').map(s => s.trim()) 
                : stuData.skillsToTeach
    };

    try {
        const response = await fetch('http://localhost:5000/api/register', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(formattedData)
        });

        const result = await response.json();

        if (response.ok) {
            alert("Success: " + result.message);
            
            // ✨ Doraemon Magic: Saare fields reset karo (including new ones)
            setStuData({ 
                name: '', role: 'fresher', github: '', linkedin: '', 
                skills: '', projects: '', email: '', password: '',
                skillsToLearn: '', skillsToTeach: '' // 👈 Ye add kiya maine
            });
            
            setView('login');
        } else {
            alert("Error: " + (result.error || "Registration failed."));
        }
    } catch (error) {
        console.error("Fetch Error:", error);
        alert("Unable to connect to the server.");
    }
};


// 🚀 Naya Logic: Profile Update karne ke liye (Skill Market ke liye zaroori)
const handleUpdateProfile = async (e) => {
    e.preventDefault();
    
    // 🔍 Doraemon Check: ID hai ya nahi
    if (!stuData._id) return alert("Error: User ID not found. Please login again.");

    try {
        const response = await fetch(`http://localhost:5000/api/update-skill-market/${stuData._id}`, {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                // Hum backend ko saara data bhej rahe hain, including naye fields
                skillsToLearn: stuData.skillsToLearn,
                skillsToTeach: stuData.skillsToTeach,
                name: stuData.name,
                skills: stuData.skills,
                projects: stuData.projects,
                github: stuData.github,
                linkedin: stuData.linkedin
            })
        });

        const result = await response.json();

        if (response.ok) {
            alert("✨ Profile Updated Successfully!");
            // 📦 Updated data ko state mein set karo
            setStuData(result.updatedStudent);
        } else {
            alert("Update Failed: " + result.error);
        }
    } catch (error) {
        console.error("Update Error:", error);
        alert("Server connection error!");
    }
};

  // App.js ke andar toggleSelection function ko replace karein
const toggleSelection = (student) => {
  setSelectedTeam((prev) => {
    // 🚀 Strict Check: Sirf database ki _id match honi chahiye
    const isSelected = prev.find(s => s._id === student._id);
    
    if (isSelected) {
      // Deselect logic
      return prev.filter(s => s._id !== student._id);
    } else {
      // Select logic (Purane selected members + naya student)
      return [...prev, student];
    }
  });
};


const handleFinalize = async () => {
    // 1. Basic Validation
    if (!projectName) return alert("Please enter a Project Name first!");
    if (selectedTeam.length === 0) return alert("Please select at least one member!");

    console.log("Finalizing for:", projectName, "by Guide:", stuData.name);

    try {
        const response = await fetch('http://localhost:5000/api/finalize-team', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                projectName: projectName,
                guideName: stuData.name || "Guide",
                guideId: stuData._id || "dummy-id", // Default agar name missing ho
                selectedMembers: selectedTeam
            })
        });

        const result = await response.json();

        if (response.ok) {
            alert("🚀 Success: Team Finalized and Notified!");
            // Data reset taaki dubara galti na ho
            setSelectedTeam([]);
            setProjectName('');
            // setView('home'); 
        } else {
            // Backend se error aaye toh ye alert dikhega
            alert("Backend Error: " + (result.error || "Something went wrong"));
        }
    } catch (error) {
        console.error("Finalize Fetch Error:", error);
        alert("Server se connect nahi ho paya. Check karo backend terminal chalu hai na?");
    }
};

// 🚀 Naya Request Logic (Copy & Paste)
const handleSendJoinRequest = async (message) => {
    try {
        const response = await fetch('http://localhost:5000/api/send-request', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                studentId: selectedStudentForMessage._id,
                guideId: stuData._id,
                guideName: stuData.name,
                message: message
            })
        });

        const data = await response.json();

        if (response.ok) {
            alert("🚀 Invitation Sent! Student will be notified.");
            setIsMessageModalOpen(false); // Modal close karo
        } else {
            alert("Error: " + data.error);
        }
    } catch (error) {
        console.error("Request Error:", error);
        alert("Server error while sending request.");
    }
};

// Ye function Modal ko open karega
const openConnectModal = (student) => {
    setSelectedStudentForMessage(student);
    setIsMessageModalOpen(true);
};



const handleDownload = () => {
    if (selectedTeam.length === 0) return alert("Pehle members select karein!");

    // Simple CSV logic
    let csvData = "Name,Email,Role\n";
    selectedTeam.forEach(user => {
        csvData += `${user.name},${user.email},${user.role}\n`;
    });

    const blob = new Blob([csvData], { type: 'text/csv' });
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `${projectName || 'Team'}_Selection.csv`;
    a.click();
};



const fetchGuideHistory = async () => {
    // 🔍 Doraemon Check: Pehle dekhte hain ID mil rahi hai ya nahi
    console.log("Fetching history for ID:", stuData?._id);

    if (!stuData?._id) {
        console.error("❌ Error: Guide ID missing! Login check karein.");
        return;
    }

    try {
        // 🚀 SMART URL: Sirf is guide ka data mangwao
        const response = await fetch(`http://localhost:5000/api/guide-teams/${stuData._id}`);
        
        if (!response.ok) {
            throw new Error(`Server Error: ${response.status}`);
        }

        const data = await response.json();
        
        // 📦 Data set karo aur screen badlo
        setGuideHistory(data); 
        setView('guideHistory'); 
        
        console.log("✅ History Loaded Successfully!", data);
        
    } catch (error) {
        console.log("❌ Fetching history failed");
        console.log("Reason:", error.message);
        setGuideTeams([]); // Crash hone se bachane ke liye empty array
    }
};








const handleSkillMarketConnect = async (mentor) => {
    try {
        const response = await fetch('http://localhost:5000/api/send-request', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                studentId: mentor._id, // Jisko seekhna hai (Nandini/Ajay)
                guideId: stuData._id,   // Jo request bhej raha hai
                guideName: stuData.name,
                message: `Hey, I want to learn ${mentor.skillsToTeach} from you! Can we connect?`
            })
        });

        if (response.ok) {
            alert(`🚀 Request sent to ${mentor.name}! Check back later for their response.`);
        } else {
            alert("Failed to send request.");
        }
    } catch (error) {
        console.error("Connect Error:", error);
        alert("Server error!");
    }
};



  // // --- Effects ---
  useEffect(() => {
    const getAllStudents = async () => {
        const localDummy = JSON.parse(localStorage.getItem('students')) || [];
        try {
            const response = await fetch('http://localhost:5000/api/students');
            if (response.ok) {
                const mongoData = await response.json();
                setStudents([...localDummy, ...mongoData]);
            } else {
                setStudents(localDummy);
            }
        } catch (error) {
            setStudents(localDummy);
        }
    };
    getAllStudents();
  }, []);


 
  return (

  
    <div className="main-container flex flex-col min-h-screen">
      
      {/* 1. Login aur Registration View (Bina Navbar ke) */}
      {view === 'login' ? (
        <div className="flex flex-col lg:flex-row h-screen w-full bg-white">
    {/* Left Side: Illustration & Branding (Behance Style) */}
<div className="lg:flex w-1/2 bg-blue-600 justify-center items-center p-12 relative">
  <div className="text-white max-w-md">
    <h1 className="text-5xl font-extrabold mb-6 tracking-tight">Skill Tracker</h1>
    <p className="text-xl text-blue-100 leading-relaxed" style={{paddingTop:"20px"}}>
      The ultimate platform for resume parsing and skill-based team building. 
      Find your dream team or dream job today.
    </p>

    {/* Yahan naya clickable code paste kijiye */}
    <div className="mt-10 flex gap-4" style={{paddingTop:"20px"}}>
      <span 
        onClick={() => setActiveModal('resume')}
        className="bg-white/20 px-4 py-2 rounded-full text-sm cursor-pointer hover:bg-white/40 transition-all border border-white/20 backdrop-blur-sm" 
      >
        #ResumeParsing 🔍
      </span>
      
      <span 
        onClick={() => setActiveModal('team')}
        className="bg-white/20 px-4 py-2 rounded-full text-sm cursor-pointer hover:bg-white/40 transition-all border border-white/20 backdrop-blur-sm"
      >
        #TeamBuilder 🚀
      </span>
    </div>
  </div>

  {/* Background Decorations (Inhe mat hatana, ye design ke liye hain) */}
  <div className="absolute top-[20%] right-25 w-32 h-32 bg-white/10 rounded-full -mr-16 -mt-16 animate-float"></div>
    <div className="absolute bottom-2 left-3 w-48 h-48 bg-blue-500 rounded-full -ml-24 -mb-24 shadow-2xl animate-float-delayed"></div>
</div>

          {/* Right Side: Login Form  */}
          <div className="w-full lg:w-1/2 flex flex-col justify-center items-center p-8 bg-slate-50">
            <div className="w-full max-w-sm p-8 bg-white rounded-3xl shadow-2xl border border-slate-100">
              <div className="mb-10 text-center lg:text-left">
                <h2 className="text-3xl font-bold text-slate-800 text-center">Welcome Back!</h2>
                <p className="text-slate-500 mt-2" style={{padding:"10px 10px"}}>Please enter your details to login.</p>
              </div>

              {/* <form onSubmit={(e) => EmailPass(e, stuData, setView)} className="space-y-5"> */}
              <form onSubmit={handleLogin} className="space-y-5">
                <div>
                  <label className="block text-sm font-semibold text-slate-700 mb-2"  style={{padding:"10px 10px"}}>Email Address</label>
                  <input 
                    type="email" 
                    placeholder="Enter your email" 
                    autoComplete="off"
                    className="w-full border border-slate-200 p-3 rounded-xl focus:ring-2 focus:ring-blue-500 outline-none transition-all shadow-sm" style={{padding:"5px"}}
                    onChange={(e) => setStuData({...stuData, email: e.target.value})} 
                    required 
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-slate-700 mb-2" style={{padding:"10px 10px"}}>Password</label>
                  <input 
                    type="password" 
                    placeholder="Enter your password" 
                    autoComplete="new-password"
                    className="w-full border border-slate-200 p-3 rounded-xl focus:ring-2 focus:ring-blue-500 outline-none transition-all shadow-sm" style={{paddingTop:"5px"}}
                    onChange={(e) => setStuData({...stuData, password: e.target.value})} 
                    required 
                  />
                </div>
                <br></br>
                <button type="submit" className="w-full  bg-blue-600 text-white py-3 rounded-xl font-bold text-lg hover:bg-blue-700 hover:shadow-lg transform transition-all active:scale-95">
                  Sign In
                </button>
              </form>

              <p className="mt-8 text-center text-slate-600" style={{paddingTop:"10px"}}>
                New here? {' '}
                <span 
                  onClick={() => setView('registration')} 
                  className="text-blue-600 font-bold cursor-pointer hover:underline" 
                >
                  Create an Account 
                </span>
              </p>
            </div>
          </div>
        </div>
      ) : view === 'registration' ? (
        <div className="registration-container flex justify-center items-center h-screen bg-amber-50">
          <div className="w-full max-w-md p-10 bg-white border border-slate-200 rounded-3xl shadow-xl">
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
              
<li 
  className="cursor-pointer hover:text-blue-600 transition-all" 
  onClick={() => setView('dashboard')} 
>
  My Profile
</li>

<li className="cursor-pointer hover:text-blue-600 transition-all" 
    onClick={() => setView('skillMarket')}>
    Skill Market 
</li>

{/* {stuData?.role === 'guide' && (
  <li 
    className="cursor-pointer hover:text-blue-600 font-medium transition-all duration-300" 
    onClick={async () => {
      // 🚀 Doraemon Power: History fetch karo aur screen switch karo
      await fetchGuideHistory(); 
      setView('guideHistory'); 
    }}
  >
    History
  </li>
)} */}
{(stuData?.role === 'guide' || stuData?.role === 'guide_exp') && (
  <li 
    className="cursor-pointer hover:text-blue-600 font-medium transition-all duration-300" 
    onClick={async () => {
      // 🚀 Doraemon Power: History fetch karo aur screen switch karo
      await fetchGuideHistory(); 
      setView('guideHistory'); 
    }}
  >
    History
  </li>
)}
              <button 
                onClick={handleLoadData} 
                className="bg-blue-100 text-blue-600 px-4 py-2 rounded-lg font-bold hover:bg-blue-200"
              >
                Load Data
              </button>

              <button 
                onClick={() => setView('login')} 
                className=" text-black px-4 py-2 rounded-lg font-bold ml-2 cursor-pointer hover:text-blue-600 transition-all"
              >
                Logout
              </button>
            </ul>
          </nav>

          <div className="content-area">
            {/* Saare Views ab Navbar ke niche render honge */}
            <ViewHome view={view}
             setView={setView}
              jobsData={jobsData}
              
               />


               <ViewDashboard view={view} 
               stuData={stuData}
                />

            
            <ViewStudent 
                  view={view} 
                  stuData={stuData} 
                  setStuData={setStuData} 
            // 🚀 Ek hi handleSubmit prop mein condition daal do
                   handleSubmit={view === 'registration' ? handleRegister : handleUpdateProfile} 
                />

            <ViewGuide 
              view={view}
              reqSkills={reqSkills} 
               setReqSkills={setReqSkills}
              teamSize={teamSize} 
              setTeamSize={setTeamSize}
               findMatches={handlefindMatches} 
               matches={matches}
               teamSynergy={teamSynergy} 
               StudentCard={StudentCard}
               selectedTeam={selectedTeam} 
               toggleSelection={toggleSelection}
               projectName={projectName}     
               setProjectName={setProjectName}
               // 🚀 Sirf ek baar sahi function ke saath:
               onDownload={handleDownload}  
               onFinalize={handleFinalize} 
               // 🚀 Naya Request Logic (Copy & Paste)
               onConnectClick={openConnectModal}

              />
{view === 'guideHistory' && (
    <GuideHistory 
        teams={guideHistory} 
        guideData={stuData} 
    />
)}


<ViewSkillMarket view={view} stuData={stuData}
onConnectClick={handleSkillMarketConnect} />



            {view === 'finalTeamSummary' && (
              <div className="final-summary text-center py-12">
                <h2 className="text-2xl font-bold mb-6 text-slate-800">Finalized Team</h2>
                <ul className="inline-block text-left bg-white p-6 rounded-2xl shadow-md">
                  {selectedTeam.map(s => (
                    <li key={s._id || s.id} className="text-lg mb-2 text-slate-700">
                      ✅ <span className="font-bold">{s.name}</span> — {s.role}
                    </li>
                  ))}
                </ul>
                <div className="mt-8">
                  <button onClick={() => setView('guide')} className="bg-blue-600 text-white px-8 py-3 rounded-xl font-bold hover:bg-blue-700 transition-all">
                    Back to Guide
                  </button>
                </div>
              </div>
            )}

            {view === 'home' && <Footer setView={setView} />}
          </div>
        </>
      )}

      {/* ... baaki sara code ... */}
      
      {/* Modal Code: Isse sabse niche rakhein taaki ye overlap na ho */}
      {activeModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm">
          <div className="bg-white rounded-xl p-8 max-w-sm w-full shadow-2xl transform transition-all scale-100">
            <div className="text-4xl mb-4">
              {activeModal === 'resume' ? '' : ''}
            </div>
            <h3 className="text-2xl font-black text-slate-800 mb-2">
              {activeModal === 'resume' ? ' 🔍Resume Parsing' : ' 🤝Team Builder'}
            </h3>
            <p className="text-slate-600 leading-relaxed mb-6">
              {activeModal === 'resume' 
                ? "Our AI scans your resume to pick up specific skills like Java, React, or even hobbies like Dance to match you with the best roles." 
                : "We analyze every student's profile to help you choose as many top compatible team members as you want, ensuring every project has a balanced mix of talent."}
            </p>
            <div className="flex justify-center w-full mt-6  text-center">
            <button 
              onClick={() => setActiveModal(null)}
              className="w-[20%] bg-blue-600 text-white py-3 rounded-xl font-bold hover:bg-blue-700 transition-colors " >
              Got it!
            </button>
            </div>
          </div>
        </div>
      )}

      {/* App.js ke end mein main div se pehle */}
<MessageModal 
    isOpen={isMessageModalOpen}
    onClose={() => setIsMessageModalOpen(false)}
    studentName={selectedStudentForMessage?.name}
    onSend={handleSendJoinRequest}
/>

    </div> // Main container ka aakhri closing div
  );
};



// React DOM Mounting
const rootElement = document.getElementById('root');
if (rootElement) {
  const root = ReactDOM.createRoot(rootElement);
  root.render(<App />);
}




