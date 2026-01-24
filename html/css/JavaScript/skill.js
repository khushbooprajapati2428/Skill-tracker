// npx parcel html/skill.html













// import React, { useState, useEffect } from 'react';
// import ReactDOM from 'react-dom/client';



// const jobsData = [
//   { id: 1, guide: "Google", role: "Software Intern", skills: ["React", "Node.js", "Firebase"], match: "95%" },
//   { id: 2, guide: "Dr. Prajapati", role: "AI Research", skills: ["Python", "TensorFlow", "NLP"], match: "80%" },
//   { id: 3, guide: "Web Solutions", role: "UI Designer", skills: ["Figma", "Tailwind", "Adobe XD"], match: "70%" },
//   { id: 4, guide: "Microsoft", role: "Cloud Intern", skills: ["Azure", "Docker", "Kubernetes"], match: "85%" },
//   { id: 5, guide: "Amazon", role: "Backend Dev", skills: ["Java", "AWS", "SQL"], match: "90%" },
//   { id: 6, guide: "Meta", role: "Full Stack", skills: ["Next.js", "GraphQL", "MongoDB"], match: "88%" },
//   { id: 7, guide: "TCS Research", role: "Blockchain Intern", skills: ["Solidity", "Ether.js", "Web3"], match: "75%" },
//   { id: 8, guide: "Infosys", role: "Cyber Security", skills: ["Pentesting", "Linux", "Ethical Hacking"], match: "82%" },
//   { id: 9, guide: "Skill Sentry AI", role: "ML Engineer", skills: ["Scikit-learn", "Pandas", "Flask"], match: "92%" },

//   { id: 10, guide: "Wipro", role: "Data Analyst", skills: ["Excel", "Power BI", "SQL"], match: "78%" },
//   { id: 11, guide: "Accenture", role: "Business Analyst", skills: ["Requirement Analysis", "Agile", "JIRA"], match: "83%" },
//   { id: 12, guide: "IBM", role: "Data Scientist", skills: ["Python", "R", "Machine Learning"], match: "88%" },
//   { id: 13, guide: "Oracle", role: "Database Admin", skills: ["MySQL", "PostgreSQL", "Backup"], match: "80%" },
//   { id: 14, guide: "Zoho", role: "Product Intern", skills: ["Wireframing", "UX Research", "Prototyping"], match: "76%" },
//   { id: 15, guide: "HCL", role: "DevOps Intern", skills: ["CI/CD", "Docker", "Jenkins"], match: "84%" },
//   { id: 16, guide: "Capgemini", role: "QA Engineer", skills: ["Selenium", "Manual Testing", "JMeter"], match: "79%" },
//   { id: 17, guide: "Deloitte", role: "Tech Consultant", skills: ["Cloud", "Security", "Architecture"], match: "86%" },
//   { id: 18, guide: "Flipkart", role: "Frontend Dev", skills: ["React", "Redux", "CSS"], match: "89%" },
//   { id: 19, guide: "Paytm", role: "Mobile App Dev", skills: ["Flutter", "Dart", "Firebase"], match: "87%" },

//   { id: 20, guide: "Swiggy", role: "Backend Intern", skills: ["Node.js", "Express", "MongoDB"], match: "85%" },
//   { id: 21, guide: "Zomato", role: "Product Analyst", skills: ["SQL", "Tableau", "Statistics"], match: "81%" },
//   { id: 22, guide: "Byjus", role: "EdTech Developer", skills: ["React", "Node.js", "REST API"], match: "83%" },
//   { id: 23, guide: "Razorpay", role: "FinTech Intern", skills: ["Java", "Spring Boot", "Microservices"], match: "88%" },
//   { id: 24, guide: "PhonePe", role: "Payment Systems", skills: ["Kotlin", "API Design", "Security"], match: "86%" },
//   { id: 25, guide: "Ola", role: "Data Engineer", skills: ["Spark", "Hadoop", "ETL"], match: "82%" },
//   { id: 26, guide: "Uber", role: "Maps Engineer", skills: ["C++", "Algorithms", "GIS"], match: "90%" },
//   { id: 27, guide: "Tesla", role: "Autonomous AI", skills: ["Computer Vision", "PyTorch", "ROS"], match: "91%" },
//   { id: 28, guide: "Nvidia", role: "GPU Programmer", skills: ["CUDA", "C++", "Parallel Computing"], match: "89%" },
//   { id: 29, guide: "Adobe", role: "Creative Dev", skills: ["JavaScript", "Canvas API", "UX"], match: "84%" },
//   { id: 30, guide: "OpenAI Labs", role: "AI Engineer", skills: ["Deep Learning", "Transformers", "Python"], match: "96%" }
// ];










// const App = () => {

//   // --- SAARI STATES FUNCTION KE ANDAR HONI CHAHIYE ---
//   const [view, setView] = useState('home'); 
//   const [students, setStudents] = useState([]);
//   const [matches, setMatches] = useState([]);
//   const [clusters, setClusters] = useState({ high: [], mid: [], low: [] });
//   const [reqSkills, setReqSkills] = useState('');
//   // App function ke andar, baaki states ke saath ye likhein:
//     const [teamSize, setTeamSize] = useState(5);
//     const [teamSynergy, setTeamSynergy] = useState(0);

//     const exportToCSV = () => {
//   if (matches.length === 0) {
//     alert("Pehle matches search karein!");
//     return;
//   }

//   // Headers for the Excel/CSV file
//   let csvContent = "data:text/csv;charset=utf-8,Name,Role,Score,GitHub,LinkedIn\n";

//   // Adding each matched student's data
//   matches.forEach(student => {
//     const row = `${student.name},${student.role},${student.score}%,${student.github},${student.linkedin}`;
//     csvContent += row + "\n";
//   });

//   // Download logic
//   const encodedUri = encodeURI(csvContent);
//   const link = document.createElement("a");
//   link.setAttribute("href", encodedUri);
//   link.setAttribute("download", "Skill_Sentry_Team_Data.csv");
//   document.body.appendChild(link);
//   link.click();
//   document.body.removeChild(link);
// };

 
//     const loadSampleData = () => {
//     const sampleStudents = [
//       { id: 1, name: "Aarav Sharma", role: "fresher", github: "https://github.com", linkedin: "https://linkedin.com", skills: ["react", "javascript", "css"], projects: "E-commerce Website, Weather App" },
//       { id: 2, name: "Ishani Gupta", role: "experienced", experience: "2 years at TechCorp", github: "https://github.com", linkedin: "https://linkedin.com", skills: ["python", "django", "sql"], projects: "Inventory Management System" },
//       { id: 3, name: "Rohan Verma", role: "fresher", github: "https://github.com", linkedin: "https://linkedin.com", skills: ["react", "node", "mongodb"], projects: "Chat Application" },
//       { id: 4, name: "Sanya Malhotra", role: "fresher", github: "https://github.com", linkedin: "https://linkedin.com", skills: ["ui/ux", "figma", "html"], projects: "Portfolio Design" },
//       { id: 5, name: "Kabir Singh", role: "experienced", experience: "1 year at StartupX", github: "https://github.com", linkedin: "https://linkedin.com", skills: ["java", "spring boot", "mysql"], projects: "Banking Portal" },
//       { id: 6, name: "Neha Patel", role: "fresher", github: "https://github.com", linkedin: "https://linkedin.com", skills: ["html", "css", "bootstrap"], projects: "Landing Page" },
//   { id: 7, name: "Aditya Mehra", role: "experienced", experience: "3 years at Infosys", github: "https://github.com", linkedin: "https://linkedin.com", skills: ["react", "redux", "typescript"], projects: "HR Management System" },
//   { id: 8, name: "Pooja Nair", role: "fresher", github: "https://github.com", linkedin: "https://linkedin.com", skills: ["python", "flask", "sqlite"], projects: "Student Result System" },
//   { id: 9, name: "Rahul Khanna", role: "experienced", experience: "4 years at TCS", github: "https://github.com", linkedin: "https://linkedin.com", skills: ["angular", "node", "mongodb"], projects: "CRM Application" },
//   { id: 10, name: "Simran Kaur", role: "fresher", github: "https://github.com", linkedin: "https://linkedin.com", skills: ["react", "tailwind", "javascript"], projects: "Blog Website" },
//   {id: 16, name: "Sneha Iyer", role: "fresher", github: "https://github.com", linkedin: "https://linkedin.com", skills: ["react", "firebase", "css"], projects: "To-do App" },
//   { id: 17, name: "Arjun Malviya", role: "experienced", experience: "6 years at IBM", github: "https://github.com", linkedin: "https://linkedin.com", skills: ["devops", "docker", "aws"], projects: "Cloud Deployment System" },
//   { id: 18, name: "Kritika Saxena", role: "fresher", github: "https://github.com", linkedin: "https://linkedin.com", skills: ["javascript", "react", "api"], projects: "Movie Search App" },
//   { id: 19, name: "Nikhil Bansal", role: "experienced", experience: "2 years at Zoho", github: "https://github.com", linkedin: "https://linkedin.com", skills: ["php", "laravel", "mysql"], projects: "Billing Software" },
//   { id: 20, name: "Megha Choudhary", role: "fresher", github: "https://github.com", linkedin: "https://linkedin.com", skills: ["html", "css", "js"], projects: "Restaurant Website" },
//   { id: 21, name: "Yash Kulkarni", role: "experienced", experience: "3 years at Oracle", github: "https://github.com", linkedin: "https://linkedin.com", skills: ["sql", "plsql", "database"], projects: "Data Warehouse System" },
//   { id: 22, name: "Aditi Mishra", role: "fresher", github: "https://github.com", linkedin: "https://linkedin.com", skills: ["react", "mui", "css"], projects: "Dashboard UI" },
//   { id: 23, name: "Saurabh Pandey", role: "experienced", experience: "7 years at Amazon", github: "https://github.com", linkedin: "https://linkedin.com", skills: ["system design", "java", "microservices"], projects: "E-commerce Backend" },
//   { id: 24, name: "Divya Rathi", role: "fresher", github: "https://github.com", linkedin: "https://linkedin.com", skills: ["python", "ml basics"], projects: "Spam Detection System" },
//   { id: 25, name: "Harsh Vardhan", role: "experienced", experience: "4 years at Paytm", github: "https://github.com", linkedin: "https://linkedin.com", skills: ["react", "node", "payment gateway"], projects: "Wallet Application" },
//   {id: 26, name: "Isha Kapoor", role: "fresher", github: "https://github.com", linkedin: "https://linkedin.com", skills: ["ui/ux", "figma"], projects: "Travel App Design" },
//   { id: 27, name: "Mohit Aggarwal", role: "experienced", experience: "2 years at Flipkart", github: "https://github.com", linkedin: "https://linkedin.com", skills: ["node", "redis", "mongodb"], projects: "Order Management System" },
//   { id: 28, name: "Palak Sethi", role: "fresher", github: "https://github.com", linkedin: "https://linkedin.com", skills: ["react", "hooks", "context"], projects: "Notes App" },
//   { id: 29, name: "Ravi Prakash", role: "experienced", experience: "5 years at HCL", github: "https://github.com", linkedin: "https://linkedin.com", skills: ["testing", "selenium", "java"], projects: "Automation Framework" },
//   { id: 30, name: "Naina Arora", role: "fresher", github: "https://github.com", linkedin: "https://linkedin.com", skills: ["css", "animation"], projects: "Creative Website" },
//    { id: 31, name: "Keshav Rana", role: "experienced", experience: "6 years at Deloitte", github: "https://github.com", linkedin: "https://linkedin.com", skills: ["data analysis", "python", "powerbi"], projects: "Sales Analytics Dashboard" },
//   { id: 32, name: "Riya Sen", role: "fresher", github: "https://github.com", linkedin: "https://linkedin.com", skills: ["react", "router"], projects: "Multi Page Website" },
//   { id: 33, name: "Aman Tiwari", role: "experienced", experience: "3 years at Cognizant", github: "https://github.com", linkedin: "https://linkedin.com", skills: ["dotnet", "c#", "sql server"], projects: "ERP System" },
//   { id: 34, name: "Payal Verma", role: "fresher", github: "https://github.com", linkedin: "https://linkedin.com", skills: ["javascript", "logic building"], projects: "Quiz App" },
//   { id: 35, name: "Siddharth Jain", role: "experienced", experience: "8 years at Google", github: "https://github.com", linkedin: "https://linkedin.com", skills: ["algorithms", "system design"], projects: "Search Optimization Tool" },
//   { id: 36, name: "Tanvi Kulkarni", role: "fresher", github: "https://github.com", linkedin: "https://linkedin.com", skills: ["html", "css", "responsive"], projects: "College Website" },
//   { id: 37, name: "Deepak Soni", role: "experienced", experience: "4 years at Adobe", github: "https://github.com", linkedin: "https://linkedin.com", skills: ["ui engineering", "react"], projects: "Design System" },
//   { id: 38, name: "Bhavya Goyal", role: "fresher", github: "https://github.com", linkedin: "https://linkedin.com", skills: ["node", "api"], projects: "URL Shortener" },
//   { id: 39, name: "Prateek Mishra", role: "experienced", experience: "3 years at Swiggy", github: "https://github.com", linkedin: "https://linkedin.com", skills: ["backend", "node", "scaling"], projects: "Food Delivery Backend" },
//   { id: 40, name: "Shreya Das", role: "fresher", github: "https://github.com", linkedin: "https://linkedin.com", skills: ["figma", "ux research"], projects: "User Research Case Study" },
//   { id: 41, name: "Akash Singh", role: "experienced", experience: "5 years at Microsoft", github: "https://github.com", linkedin: "https://linkedin.com", skills: ["azure", "cloud"], projects: "Cloud Monitoring Tool" },
//   { id: 42, name: "Pallavi Rao", role: "fresher", github: "https://github.com", linkedin: "https://linkedin.com", skills: ["react", "forms"], projects: "Registration System" },
//   { id: 43, name: "Gaurav Kapoor", role: "experienced", experience: "2 years at Byju’s", github: "https://github.com", linkedin: "https://linkedin.com", skills: ["edtech", "frontend"], projects: "Learning Platform" },
//   { id: 44, name: "Kajal Meena", role: "fresher", github: "https://github.com", linkedin: "https://linkedin.com", skills: ["javascript", "dom"], projects: "Interactive Game" },
//   { id: 45, name: "Ritesh Kulkarni", role: "experienced", experience: "6 years at SAP", github: "https://github.com", linkedin: "https://linkedin.com", skills: ["enterprise apps", "java"], projects: "Supply Chain System" },
//   { id: 46, name: "Muskan Ali", role: "fresher", github: "https://github.com", linkedin: "https://linkedin.com", skills: ["react", "api"], projects: "News App" },
//   { id: 47, name: "Shubham Patil", role: "experienced", experience: "3 years at Zomato", github: "https://github.com", linkedin: "https://linkedin.com", skills: ["node", "performance"], projects: "Order Tracking System" },
//   { id: 48, name: "Ayesha Khan", role: "fresher", github: "https://github.com", linkedin: "https://linkedin.com", skills: ["ui/ux", "wireframing"], projects: "Health App Design" },
//   { id: 49, name: "Naveen Kumar", role: "experienced", experience: "4 years at Ola", github: "https://github.com", linkedin: "https://linkedin.com", skills: ["maps", "backend"], projects: "Ride Allocation System" },
//   { id: 50, name: "Khushboo Prajapati", role: "fresher", github: "https://github.com", linkedin: "https://linkedin.com", skills: ["react", "web development"], projects: "Final Year Project" },

      
//     ];



  
//     setStudents(sampleStudents);
//     localStorage.setItem('students', JSON.stringify(sampleStudents));
//     alert("25 Sample Students Loaded! Now go to Guide View and search 'React'");
//   };
//   // Load data on start
//   useEffect(() => {
//     const savedStudents = JSON.parse(localStorage.getItem('students')) || [];
//     setStudents(savedStudents);
//   }, []);

//   // --- STUDENT STATE ---
//   const [stuData, setStuData] = useState({
//     name: '',
//     role: 'fresher', 
//     github: '',
//     linkedin: '',
//     skills: '',
//     projects: '',
//     experience: ''
//   });

//   const handleStudentSubmit = (e) => {
//     e.preventDefault();
//     const newStudent = {
//       id: Date.now(),
//       ...stuData,
//       skills: stuData.skills.split(',').map(s => s.trim().toLowerCase())
//     };
//     const updatedList = [...students, newStudent];
//     setStudents(updatedList);
//     localStorage.setItem('students', JSON.stringify(updatedList));
//     alert("Profile Submitted Successfully!");
//     setStuData({ name: '', role: 'fresher', github: '', linkedin: '', skills: '', projects: '', experience: '' });
//   };

//   // --- GUIDE LOGIC ---

//   // --- ORIGINAL LOGIC: Direct Matching & Sorting ---
//   const findMatches = () => {
//     if (!reqSkills) return alert("Please enter skills to search");

//     const searchArr = reqSkills.split(',').map(s => s.trim().toLowerCase());
    
//     const results = students.map(s => {
//       const matched = s.skills.filter(stuSkill => 
//         searchArr.some(rs => stuSkill.toLowerCase().includes(rs))
//       );
      
//       let fitness = (matched.length / searchArr.length) * 100;
//       // B.Tech Logic: Experienced candidates ko extra weightage
//       if (s.role === 'experienced' && fitness > 0) fitness += 5; 
      
//       return { ...s, score: Math.round(Math.min(fitness, 100)) };
//     })
//     .filter(s => s.score > 0)
//     .sort((a,b) => b.score - a.score) 
//     .slice(0, teamSize); // <--- Manager ki choice ke hisaab se cards dikhayega

//     setMatches(results);
//     // findMatches function ke end mein (setMatches ke baad)
//       const totalScore = results.reduce((sum, student) => sum + student.score, 0);
//       const averageScore = results.length > 0 ? Math.round(totalScore / results.length) : 0;

//     // Ise ek state mein save karne ke liye (Naya State banayein: teamSynergy)
//       setTeamSynergy(averageScore);


//   };
//   return (
//     <div className="main-container">
//       <nav className="navbar">
//         <div className="logo" onClick={() => setView('home')} style={{cursor:'pointer'}}>
//           Skill<span>Tracker</span>
//         </div>
//         <ul className="nav-links">
//   <li onClick={() => setView('home')}><a href="#">Home</a></li>
//   <li onClick={() => setView('student')}><a href="#">Student View</a></li>
//   <li onClick={() => setView('guide')}><a href="#">Guide View</a></li>
//   {/* Testing Button */}
//   <button onClick={loadSampleData} style={{
//     background: '#396397', 
//     border: 'none', 
//     padding: '5px 10px', 
//     borderRadius: '5px', 
//     cursor: 'pointer',
//     fontWeight: 'bold'
//   }}>
//    Load demo data
//   </button>
// </ul>
//       </nav>

        



//         {view === 'home' && (
//   <> {/* Fragment shuru */}
//     <section className="hero">
//       <div className="hero-text">
//         <h1 className="animated-heading">
//           <span style={{"--i": 1}}>Build</span> <span style={{"--i": 2}}>Smarter</span> 
//           <span style={{"--i": 3}}>Teams</span> <span style={{"--i": 4}}>with</span> <span style={{"--i": 5}}>AI</span>
//         </h1>
//         <p>Let AI help you create balanced project teams based on student skills and interests.</p>
//         <button className="btn" onClick={() => setView('student')} style={{marginTop: '30px'}}>Get Started</button>
//       </div>
//     </section>






//     {/* Marketplace Section - Forced Centering */}
// <section className="w-full py-20 bg-[#f8fafc]">
//   {/* Is container mein maine inline style di hai taaki alignment pakka ho jaye */}
//   <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 40px' }}>
    
//     {/* Title Section: Thoda right margin dene ke liye padding-left badha diya hai */}
//     <div className="flex items-center gap-3 mb-12" style={{ paddingLeft: '20px' }}>
//       <h2 className="text-2xl font-black text-slate-600 tracking-tight" style={{paddingTop:'20px'}}>
//         Current Opportunities
//       </h2>
//       <span className="text-xl" style={{paddingTop:'20px'}}>🚀</span>
//     </div>
    
//     {/* Cards Grid: Desktop par 3 items, center aligned */}
//     <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10" style={{paddingTop:'90px'}}>
//       {jobsData.map((job) => (
//         <div key={job.id} className="bg-white rounded-[2rem] p-8 border border-slate-100 shadow-xl shadow-slate-200/50 hover:-translate-y-2 transition-all duration-300 flex flex-col min-h-[200px]">
          
//           <div className="flex justify-between items-start mb-6">
//             <div className="h-10 w-10 bg-indigo-400 rounded-xl flex items-center justify-center text-white text-xl font-bold shadow-lg shadow-indigo-100">
//               {job.guide[0]}
//             </div>
//             <span className="text-[10px] font-bold text-emerald-600 bg-emerald-10 px-3 py-1 rounded-full uppercase tracking-widest" style={{padding:'20px 30px' }}>
//               Active
//             </span>
//           </div>

//           <h3 className="text-ml font-extrabold text-slate-600 mb-1" style={{paddingLeft:'10px'}}>{job.role}</h3>
//           <p className="text-slate-500 font-semibold mb-6 flex items-center gap-2" style={{paddingLeft:'10px'}}>
//             <span className="h-1.5 w-1.5 bg-slate-300 rounded-full"></span>
//             {job.guide}
//           </p>

//           <div className="flex flex-wrap gap-2 mb-8">
//             {job.skills.map((s, i) => (
//               <span key={i} className="bg-slate-50 text-slate-600 text-[12px] font-bold px-3 py-1.5 rounded-lg border border-slate-100" style={{paddingLeft:'13px'}}>
//                 {s}
//               </span>
//             ))}
//           </div>

//           <div className="mt-auto pt-6 border-t border-slate-50 flex items-center justify-between"  style={{paddingLeft:'13px'}}>
//             <div>
//               <p className="text-[10px] text-slate-400 font-bold uppercase mb-1"  style={{paddingTop:'10px'}}>Match Score</p>
//               <p className="text-1.5xl font-black text-indigo-500 italic"  style={{paddingLeft:'13px'}}>{job.match}</p>
//             </div>
//             <button className="bg-yellow-200 text-gray-800 px-6 py-3 rounded-xl font-bold text-sm hover:bg-yellow-400 transition-all mt-auto" style={{paddingRight:'5px'}}>
//               Apply Now
//             </button>
//           </div>
//         </div>
//       ))}
//     </div>
//   </div>
// </section>
//   </> /* Fragment khatam */
// )}
//         {view === 'student' && (
//   <section className="py-16 bg-[#f8fafc] min-h-screen">
//      <div className='flex justify-center'>
//     <div className="max-w-3xl mx-auto px-6">
      
//       {/* Header Section */}
      
//       <div className="text-center mb-12">
//         <h2 className="text-2xl font-black text-slate-600 mb-4" style={{padding:'20px'}}>Create Your Profile</h2>
//         <p className="text-slate-550 font-medium" style={{padding:'20px'}}>Showcase your skills to recruiters and find the perfect team.</p>
//       </div>
      
//       {/* Modern Form Card */}
//       <div className="bg-white rounded-[1.5rem] p-10 shadow-2xl shadow-slate-200/60 border border-slate-100">
//         <form onSubmit={handleStudentSubmit} className="space-y-8">
          
//           {/* Section 1: Basic Info */}
//           <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//             <div className="flex flex-col gap-2">
//               <label className="text-sm font-black text-slate-500 uppercase tracking-widest ml-1">Full Name</label>
//               <input 
//                 type="text" 
//                 className="w-full bg-slate-50 border border-slate-100 rounded-2xl px-5 py-4 focus:ring-4 focus:ring-indigo-100 focus:border-indigo-500 outline-none transition-all font-semibold"
//                 placeholder="Ex: Enter your name" 
//                 value={stuData.name} 
//                 onChange={(e)=>setStuData({...stuData, name: e.target.value})} 
//                 required 
//               />
//             </div>

//             <div className="flex flex-col gap-2">
//               <label className="text-sm font-black text-slate-500 uppercase tracking-widest ml-1">Current Status</label>
//               <select 
//                 value={stuData.role} 
//                 onChange={(e)=>setStuData({...stuData, role: e.target.value})}
//                 className="w-full bg-slate-50 border border-slate-100 rounded-2xl px-5 py-4 focus:ring-4 focus:ring-indigo-100 outline-none transition-all font-semibold appearance-none"
//               >
//                 <option value="fresher">🎓 Fresher</option>
//                 <option value="experienced">💼 Experienced</option>
//               </select>
//             </div>
//           </div>

//           {/* Section 2: Social Links */}
//           <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//             <div className="flex flex-col gap-2">
//               <label className="text-sm font-black text-slate-500 uppercase tracking-widest ml-1">GitHub URL</label>
//               <input 
//                 type="url" 
//                 className="w-full bg-slate-50 border border-slate-100 rounded-2xl px-5 py-4 focus:ring-4 focus:ring-indigo-100 outline-none transition-all"
//                 placeholder="https://github.com/..." 
//                 value={stuData.github} 
//                 onChange={(e)=>setStuData({...stuData, github: e.target.value})} 
//               />
//             </div>
//             <div className="flex flex-col gap-2">
//               <label className="text-sm font-black text-slate-500 uppercase tracking-widest ml-1">LinkedIn URL</label>
//               <input 
//                 type="url" 
//                 className="w-full bg-slate-50 border border-slate-100 rounded-2xl px-5 py-4 focus:ring-4 focus:ring-indigo-100 outline-none transition-all"
//                 placeholder="https://linkedin.com/in/..." 
//                 value={stuData.linkedin} 
//                 onChange={(e)=>setStuData({...stuData, linkedin: e.target.value})} 
//               />
//             </div>
//           </div>

//           {/* Section 3: Professional Info */}
//           <div className="flex flex-col gap-2">
//             <label className="text-sm font-black text-slate-500 uppercase tracking-widest ml-1">Skills (Comma Separated)</label>
//             <input 
//               type="text" 
//               className="w-full bg-slate-50 border border-slate-100 rounded-2xl px-5 py-4 focus:ring-4 focus:ring-indigo-100 outline-none transition-all font-semibold"
//               placeholder="React, Node.js, Tailwind, MongoDB" 
//               value={stuData.skills} 
//               onChange={(e)=>setStuData({...stuData, skills: e.target.value})} 
//               required 
//             />
//           </div>

//           <div className="flex flex-col gap-2">
//             <label className="text-sm font-black text-slate-500 uppercase tracking-widest ml-1">Major Projects</label>
//             <textarea 
//               rows="3"
//               className="w-full bg-slate-50 border border-slate-100 rounded-2xl px-5 py-4 focus:ring-4 focus:ring-indigo-100 outline-none transition-all font-medium"
//               placeholder="Briefly describe your top 2 projects..." 
//               value={stuData.projects} 
//               onChange={(e)=>setStuData({...stuData, projects: e.target.value})} 
//             />
//           </div>

//           {/* Submit Button */}
//           <button 
//             type="submit" 
//             className="w-full bg-slate-700 text-white py-5 rounded-[1.5rem] font-black text-lg hover:bg-sky-900 hover:shadow-xl hover:shadow-indigo-200 transition-all active:scale-[0.98] mt-4"
//           >
//             Register Profile 🚀
//           </button>
//         </form>
//       </div>
//     </div>

//     </div>
//   </section>
// )}
//       {view === 'guide' && (
//   <section className="skill-section">
//     <h2>Guide: Team Matching</h2>
//     <div className="skill-form">
//       <input 
//         type="text" 
//         placeholder="Enter Required Skills (e.g. React, Node)" 
//         value={reqSkills} 
//         onChange={(e)=>setReqSkills(e.target.value)} 
//       />

//       <div style={{ marginBottom: '15px', textAlign: 'center' }}>
//   <label style={{ marginRight: '10px', fontWeight: 'bold' }}>Members Needed: </label>
//   <input 
//     type="number" 
//     min="1" 
//     max="50" 
//     value={teamSize} 
//     onChange={(e) => setTeamSize(e.target.value)}
//     style={{ 
//       marginTop: '60px',
//       padding: '5px', 
//       borderRadius: '5px', 
//       border: '1px solid #ccc', 
//       width: '100px' 
//     }} 
//   />
//     </div>
//       <button onClick={findMatches} className="bt" style={{position:'relative'}}>Search Matches</button>
//     </div>

//     {/* SYNERGY DASHBOARD: Tabhi dikhega jab search results honge */}



//       {/* HORIZONTAL ANALYTICS DASHBOARD */}
// {matches.length > 0 && (
//   <div style={{
//     display: 'flex', 
//     gap: '20px', 
//     justifyContent: 'center', 
//     flexWrap: 'wrap', // Mobile par apne aap upar-niche ho jayenge
//     margin: '30px auto',
//     maxWidth: '1000px'
//   }}>
    
//     {/* 1. BLUE CARD: Overall Match */}
//     <div style={{
//       flex: '1',
//       minWidth: '300px',
//       padding: '20px',
//       background: 'linear-gradient(135deg, #007bff, #00c6ff)',
//       borderRadius: '15px',
//       color: 'white',
//       textAlign: 'center',
//       boxShadow: '0 8px 15px rgba(0,123,255,0.2)'
//     }}>
//       <h3 style={{ margin: 0, fontSize: '0.9rem', opacity: 0.9 }}>Overall Team Match</h3>
//       <div style={{ fontSize: '2.5rem', fontWeight: 'bold', margin: '5px 0' }}>{teamSynergy}%</div>
//       <div style={{ width: '100%', height: '8px', background: 'rgba(255,255,255,0.3)', borderRadius: '4px', overflow: 'hidden' }}>
//         <div style={{ width: `${teamSynergy}%`, height: '100%', background: 'white', transition: 'width 1.5s' }}></div>
//       </div>
//       <p style={{fontSize: '0.75rem', marginTop: '10px'}}>Based on top {matches.length} candidates</p>
//     </div>

//     {/* 2. PINK/PURPLE CARD: Team Synergy Score */}
//     <div style={{
//       flex: '1',
//       minWidth: '300px',
//       padding: '20px',
//       background: 'linear-gradient(135deg, #a777e3, #6e8efb)',
//       borderRadius: '15px',
//       color: 'white',
//       textAlign: 'center',
//       boxShadow: '0 8px 15px rgba(110,142,251,0.2)'
//     }}>
//       <h3 style={{ margin: 0, fontSize: '0.9rem', opacity: 0.9 }}>Team Synergy Score</h3>
//       <div style={{ fontSize: '2.5rem', fontWeight: 'bold', margin: '5px 0' }}>{teamSynergy}%</div>
//       <div style={{ width: '100%', height: '8px', background: 'rgba(255,255,255,0.3)', borderRadius: '4px', overflow: 'hidden' }}>
//         <div style={{ width: `${teamSynergy}%`, height: '100%', background: 'white', transition: 'width 1.5s' }}></div>
//       </div>
//       <p style={{fontSize: '0.75rem', marginTop: '10px'}}>Optimized for {teamSize} members</p>
//     </div>

//   </div>
// )}


//     <div style={{ textAlign: 'center', margin: '20px 0' }}>
//   <button 
//     onClick={exportToCSV}
//     style={{
//       padding: '12px 25px',
//       background: '#28a745', // Green color for download
//       color: 'white',
//       border: 'none',
//       borderRadius: '30px',
//       fontWeight: 'bold',
//       cursor: 'pointer',
//       boxShadow: '0 4px 10px rgba(40,167,69,0.3)'
//     }}
//   >
//     📥 Download Selected Team (CSV)
//   </button>
// </div>

//     <p style={{ margin: '0', fontSize: '0.9rem', opacity: '0.9' }}>
//       Overall strength based on your {matches.length} selected members.
//     </p>
    
//     {/* Visual Strength Bar */}
//     <div style={{ width: '100%', height: '10px', background: 'rgba(255,255,255,0.3)', borderRadius: '5px', marginTop: '15px', overflow: 'hidden' }}>
//       <div style={{ width: `${teamSynergy}%`, height: '100%', background: 'white', transition: 'width 1s ease-in-out' }}></div>
//     </div>

//       {/* MATCHING CARDS CONTAINER */}
//         <div style={{
//           marginTop: '40px', 
//           display: 'grid', 
//           gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', 
//           gap: '25px', 
//           width: '100%', 
//            maxWidth: '1200px'
//         }}>
//   {matches.map(m => (
//     <StudentCard 
//       key={m.id} 
//       student={m} 
//       searchArr={reqSkills.split(',').map(s => s.trim().toLowerCase())} 
//     />
//   ))}
  


// </div>
//   </section>
// )
//   };
//    </div>
//   );
// };



// // App component ke bahar (Niche)
// const StudentCard = ({ student, searchArr }) => {
//   return (
//     <div className="student-card" style={{
//         background: 'white', padding: '25px', borderRadius: '15px', 
//         boxShadow: '0 8px 20px rgba(0,0,0,0.1)', textAlign: 'left', borderTop: '5px solid #007bff',
//         marginBottom: '20px'
//     }}>
//       <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}>
//         <h3 style={{margin: 0}}>{student.name}</h3>
//         <span style={{background: '#e6f7ff', color: '#007bff', padding: '5px 12px', borderRadius: '20px', fontWeight: 'bold', fontSize: '0.9rem'}}>
//           {student.score}% Match
//         </span>
//       </div>

//       {/* --- SKILL GAP ANALYSIS BARS --- */}
//       <div style={{ marginTop: '15px', padding: '12px', background: '#f9f9f9', borderRadius: '10px', border: '1px solid #eee' }}>
//         <p style={{ fontSize: '0.8rem', fontWeight: 'bold', color: '#555', marginBottom: '8px', marginTop: 0 }}>Skill Gap Analysis:</p>
//         {searchArr.map((skill, index) => {
//           // Check if student has this specific skill
//           const isMatched = student.skills.some(s => s.toLowerCase().includes(skill.toLowerCase()));
//           return (
//             <div key={index} style={{ display: 'flex', alignItems: 'center', marginBottom: '6px' }}>
//               <span style={{ width: '90px', fontSize: '0.75rem', textTransform: 'capitalize', color: '#333' }}>{skill}</span>
//               <div style={{ flex: 1, height: '8px', background: '#e0e0e0', borderRadius: '4px', overflow: 'hidden', margin: '0 12px' }}>
//                 <div style={{ 
//                     width: isMatched ? '100%' : '5%', 
//                     height: '100%', 
//                     background: isMatched ? '#28a745' : '#dc3545', 
//                     transition: 'width 0.6s ease-in-out' 
//                 }}></div>
//               </div>
//               <span style={{ fontSize: '0.8rem', color: isMatched ? '#28a745' : '#dc3545', fontWeight: 'bold' }}>
//                 {isMatched ? '✓' : '✗'}
//               </span>
//             </div>
//           );
//         })}
//       </div>

//       <p style={{marginTop: '15px', fontSize: '0.9rem'}}><strong>Role:</strong> {student.role === 'fresher' ? '🎓 Fresher' : '💼 Experienced'}</p>
//       <p style={{fontSize: '0.9rem'}}><strong>Projects:</strong> {student.projects || 'N/A'}</p>
      
//       <div style={{display: 'flex', gap: '20px', marginTop: '15px', borderTop: '1px solid #eee', paddingTop: '15px'}}>
//         <a href={student.github} target="_blank" rel="noreferrer" style={{textDecoration: 'none', color: '#333', fontSize: '0.85rem', fontWeight: 'bold'}}>GitHub ↗</a>
//         <a href={student.linkedin} target="_blank" rel="noreferrer" style={{textDecoration: 'none', color: '#007bff', fontSize: '0.85rem', fontWeight: 'bold'}}>LinkedIn ↗</a>
//       </div>
//     </div>
//   );
// };

// const rootElement = document.getElementById('root');
// if (rootElement) {
//   if (!window._root) window._root = ReactDOM.createRoot(rootElement);
//   window._root.render(<App />);
// }






















import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom/client';



const jobsData = [
  { id: 1, guide: "Google", role: "Software Intern", skills: ["React", "Node.js", "Firebase"], match: "95%" },
  { id: 2, guide: "Dr. Prajapati", role: "AI Research", skills: ["Python", "TensorFlow", "NLP"], match: "80%" },
  { id: 3, guide: "Web Solutions", role: "UI Designer", skills: ["Figma", "Tailwind", "Adobe XD"], match: "70%" },
  { id: 4, guide: "Microsoft", role: "Cloud Intern", skills: ["Azure", "Docker", "Kubernetes"], match: "85%" },
  { id: 5, guide: "Amazon", role: "Backend Dev", skills: ["Java", "AWS", "SQL"], match: "90%" },
  { id: 6, guide: "Meta", role: "Full Stack", skills: ["Next.js", "GraphQL", "MongoDB"], match: "88%" },
  { id: 7, guide: "TCS Research", role: "Blockchain Intern", skills: ["Solidity", "Ether.js", "Web3"], match: "75%" },
  { id: 8, guide: "Infosys", role: "Cyber Security", skills: ["Pentesting", "Linux", "Ethical Hacking"], match: "82%" },
  { id: 9, guide: "Skill Sentry AI", role: "ML Engineer", skills: ["Scikit-learn", "Pandas", "Flask"], match: "92%" },

  { id: 10, guide: "Wipro", role: "Data Analyst", skills: ["Excel", "Power BI", "SQL"], match: "78%" },
  { id: 11, guide: "Accenture", role: "Business Analyst", skills: ["Requirement Analysis", "Agile", "JIRA"], match: "83%" },
  { id: 12, guide: "IBM", role: "Data Scientist", skills: ["Python", "R", "Machine Learning"], match: "88%" },
  { id: 13, guide: "Oracle", role: "Database Admin", skills: ["MySQL", "PostgreSQL", "Backup"], match: "80%" },
  { id: 14, guide: "Zoho", role: "Product Intern", skills: ["Wireframing", "UX Research", "Prototyping"], match: "76%" },
  { id: 15, guide: "HCL", role: "DevOps Intern", skills: ["CI/CD", "Docker", "Jenkins"], match: "84%" },
  { id: 16, guide: "Capgemini", role: "QA Engineer", skills: ["Selenium", "Manual Testing", "JMeter"], match: "79%" },
  { id: 17, guide: "Deloitte", role: "Tech Consultant", skills: ["Cloud", "Security", "Architecture"], match: "86%" },
  { id: 18, guide: "Flipkart", role: "Frontend Dev", skills: ["React", "Redux", "CSS"], match: "89%" },
  { id: 19, guide: "Paytm", role: "Mobile App Dev", skills: ["Flutter", "Dart", "Firebase"], match: "87%" },

  { id: 20, guide: "Swiggy", role: "Backend Intern", skills: ["Node.js", "Express", "MongoDB"], match: "85%" },
  { id: 21, guide: "Zomato", role: "Product Analyst", skills: ["SQL", "Tableau", "Statistics"], match: "81%" },
  { id: 22, guide: "Byjus", role: "EdTech Developer", skills: ["React", "Node.js", "REST API"], match: "83%" },
  { id: 23, guide: "Razorpay", role: "FinTech Intern", skills: ["Java", "Spring Boot", "Microservices"], match: "88%" },
  { id: 24, guide: "PhonePe", role: "Payment Systems", skills: ["Kotlin", "API Design", "Security"], match: "86%" },
  { id: 25, guide: "Ola", role: "Data Engineer", skills: ["Spark", "Hadoop", "ETL"], match: "82%" },
  { id: 26, guide: "Uber", role: "Maps Engineer", skills: ["C++", "Algorithms", "GIS"], match: "90%" },
  { id: 27, guide: "Tesla", role: "Autonomous AI", skills: ["Computer Vision", "PyTorch", "ROS"], match: "91%" },
  { id: 28, guide: "Nvidia", role: "GPU Programmer", skills: ["CUDA", "C++", "Parallel Computing"], match: "89%" },
  { id: 29, guide: "Adobe", role: "Creative Dev", skills: ["JavaScript", "Canvas API", "UX"], match: "84%" },
  { id: 30, guide: "OpenAI Labs", role: "AI Engineer", skills: ["Deep Learning", "Transformers", "Python"], match: "96%" }
];










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

    const exportToCSV = () => {
  if (matches.length === 0) {
    alert("Pehle matches search karein!");
    return;
  }

  // Headers for the Excel/CSV file
  let csvContent = "data:text/csv;charset=utf-8,Name,Role,Score,GitHub,LinkedIn\n";

  // Adding each matched student's data
  matches.forEach(student => {
    const row = `${student.name},${student.role},${student.score}%,${student.github},${student.linkedin}`;
    csvContent += row + "\n";
  });

  // Download logic
  const encodedUri = encodeURI(csvContent);
  const link = document.createElement("a");
  link.setAttribute("href", encodedUri);
  link.setAttribute("download", "Skill_Sentry_Team_Data.csv");
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
};

 
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
   Load demo data
  </button>
</ul>
      </nav>

        



        {view === 'home' && (
  <> {/* Fragment shuru */}
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






    {/* Marketplace Section - Forced Centering */}
<section className="w-full py-20 bg-[#f8fafc]">
  {/* Is container mein maine inline style di hai taaki alignment pakka ho jaye */}
  <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 40px' }}>
    
    {/* Title Section: Thoda right margin dene ke liye padding-left badha diya hai */}
    <div className="flex items-center gap-3 mb-12" style={{ paddingLeft: '20px' }}>
      <h2 className="text-2xl font-black text-slate-600 tracking-tight" style={{paddingTop:'20px'}}>
        Current Opportunities
      </h2>
      <span className="text-xl" style={{paddingTop:'20px'}}>🚀</span>
    </div>
    
    {/* Cards Grid: Desktop par 3 items, center aligned */}
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10" style={{paddingTop:'90px'}}>
      {jobsData.map((job) => (
        <div key={job.id} className="bg-white rounded-[2rem] p-8 border border-slate-100 shadow-xl shadow-slate-200/50 hover:-translate-y-2 transition-all duration-300 flex flex-col min-h-[200px]">
          
          <div className="flex justify-between items-start mb-6">
            <div className="h-10 w-10 bg-indigo-400 rounded-xl flex items-center justify-center text-white text-xl font-bold shadow-lg shadow-indigo-100">
              {job.guide[0]}
            </div>
            <span className="text-[10px] font-bold text-emerald-600 bg-emerald-10 px-3 py-1 rounded-full uppercase tracking-widest" style={{padding:'20px 30px' }}>
              Active
            </span>
          </div>

          <h3 className="text-ml font-extrabold text-slate-600 mb-1" style={{paddingLeft:'10px'}}>{job.role}</h3>
          <p className="text-slate-500 font-semibold mb-6 flex items-center gap-2" style={{paddingLeft:'10px'}}>
            <span className="h-1.5 w-1.5 bg-slate-300 rounded-full"></span>
            {job.guide}
          </p>

          <div className="flex flex-wrap gap-2 mb-8">
            {job.skills.map((s, i) => (
              <span key={i} className="bg-slate-50 text-slate-600 text-[12px] font-bold px-3 py-1.5 rounded-lg border border-slate-100" style={{paddingLeft:'13px'}}>
                {s}
              </span>
            ))}
          </div>

          <div className="mt-auto pt-6 border-t border-slate-50 flex items-center justify-between"  style={{paddingLeft:'13px'}}>
            <div>
              <p className="text-[10px] text-slate-400 font-bold uppercase mb-1"  style={{paddingTop:'10px'}}>Match Score</p>
              <p className="text-1.5xl font-black text-indigo-500 italic"  style={{paddingLeft:'13px'}}>{job.match}</p>
            </div>
            <button className="bg-yellow-200 text-gray-800 px-6 py-3 rounded-xl font-bold text-sm hover:bg-yellow-400 transition-all mt-auto" style={{paddingRight:'5px'}}>
              Apply Now
            </button>
          </div>
        </div>
      ))}
    </div>
  </div>
</section>




  </> /* Fragment khatam */
)}
        {view === 'student' && (
  <section className="py-16 bg-[#f8fafc] min-h-screen">
     <div className='flex justify-center'>
    <div className="max-w-3xl mx-auto px-6">
      
      {/* Header Section */}
      
      <div className="text-center mb-12">
        <h2 className="text-2xl font-black text-slate-600 mb-4" style={{padding:'20px'}}>Create Your Profile</h2>
        <p className="text-slate-550 font-medium" style={{padding:'20px'}}>Showcase your skills to recruiters and find the perfect team.</p>
      </div>
      
      {/* Modern Form Card */}
      <div className="bg-white rounded-[1.5rem] p-10 shadow-2xl shadow-slate-200/60 border border-slate-100">
        <form onSubmit={handleStudentSubmit} className="space-y-8">
          
          {/* Section 1: Basic Info */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="flex flex-col gap-2">
              <label className="text-sm font-black text-slate-500 uppercase tracking-widest ml-1">Full Name</label>
              <input 
                type="text" 
                className="w-full bg-slate-50 border border-slate-100 rounded-2xl px-5 py-4 focus:ring-4 focus:ring-indigo-100 focus:border-indigo-500 outline-none transition-all font-semibold"
                placeholder="Ex: Enter your name" 
                value={stuData.name} 
                onChange={(e)=>setStuData({...stuData, name: e.target.value})} 
                required 
              />
            </div>

            <div className="flex flex-col gap-2">
              <label className="text-sm font-black text-slate-500 uppercase tracking-widest ml-1">Current Status</label>
              <select 
                value={stuData.role} 
                onChange={(e)=>setStuData({...stuData, role: e.target.value})}
                className="w-full bg-slate-50 border border-slate-100 rounded-2xl px-5 py-4 focus:ring-4 focus:ring-indigo-100 outline-none transition-all font-semibold appearance-none"
              >
                <option value="fresher">🎓 Fresher</option>
                <option value="experienced">💼 Experienced</option>
              </select>
            </div>
          </div>

          {/* Section 2: Social Links */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="flex flex-col gap-2">
              <label className="text-sm font-black text-slate-500 uppercase tracking-widest ml-1">GitHub URL</label>
              <input 
                type="url" 
                className="w-full bg-slate-50 border border-slate-100 rounded-2xl px-5 py-4 focus:ring-4 focus:ring-indigo-100 outline-none transition-all"
                placeholder="https://github.com/..." 
                value={stuData.github} 
                onChange={(e)=>setStuData({...stuData, github: e.target.value})} 
              />
            </div>
            <div className="flex flex-col gap-2">
              <label className="text-sm font-black text-slate-500 uppercase tracking-widest ml-1">LinkedIn URL</label>
              <input 
                type="url" 
                className="w-full bg-slate-50 border border-slate-100 rounded-2xl px-5 py-4 focus:ring-4 focus:ring-indigo-100 outline-none transition-all"
                placeholder="https://linkedin.com/in/..." 
                value={stuData.linkedin} 
                onChange={(e)=>setStuData({...stuData, linkedin: e.target.value})} 
              />
            </div>
          </div>

          {/* Section 3: Professional Info */}
          <div className="flex flex-col gap-2">
            <label className="text-sm font-black text-slate-500 uppercase tracking-widest ml-1">Skills (Comma Separated)</label>
            <input 
              type="text" 
              className="w-full bg-slate-50 border border-slate-100 rounded-2xl px-5 py-4 focus:ring-4 focus:ring-indigo-100 outline-none transition-all font-semibold"
              placeholder="React, Node.js, Tailwind, MongoDB" 
              value={stuData.skills} 
              onChange={(e)=>setStuData({...stuData, skills: e.target.value})} 
              required 
            />
          </div>

          <div className="flex flex-col gap-2">
            <label className="text-sm font-black text-slate-500 uppercase tracking-widest ml-1">Major Projects</label>
            <textarea 
              rows="3"
              className="w-full bg-slate-50 border border-slate-100 rounded-2xl px-5 py-4 focus:ring-4 focus:ring-indigo-100 outline-none transition-all font-medium"
              placeholder="Briefly describe your top 2 projects..." 
              value={stuData.projects} 
              onChange={(e)=>setStuData({...stuData, projects: e.target.value})} 
            />
          </div>

          {/* Submit Button */}
          <button 
            type="submit" 
            className="w-full bg-slate-700 text-white py-5 rounded-[1.5rem] font-black text-lg hover:bg-sky-900 hover:shadow-xl hover:shadow-indigo-200 transition-all active:scale-[0.98] mt-4"
          >
            Register Profile 🚀
          </button>
        </form>
      </div>
    </div>

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


    <div style={{ textAlign: 'center', margin: '20px 0' }}>
  <button 
    onClick={exportToCSV}
    style={{
      padding: '12px 25px',
      background: '#28a745', // Green color for download
      color: 'white',
      border: 'none',
      borderRadius: '30px',
      fontWeight: 'bold',
      cursor: 'pointer',
      boxShadow: '0 4px 10px rgba(40,167,69,0.3)'
    }}
  >
    📥 Download Selected Team (CSV)
  </button>
</div>

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



























