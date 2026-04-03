

import React from "react";

export default function ViewDashboard({ view, stuData }) {
  if (view !== 'dashboard') return null;

  const getInitials = (name) => {
    if (!name) return "?";
    return name.trim().split(/\s+/).map(n => n[0]).join('').toUpperCase().slice(0, 2);
  };

  return (
    
      <div className="flex flex-col items-center p-10 bg-[#f4f7fe] min-h-screen " style={{paddingTop:"20px"}}>
    {/* Page Title */}
    <h1 className="text-xl font-bold text-blue-600 mb-6 uppercase tracking-widest mt-4">
      Student Profile
    </h1>
      <div className="bg-white rounded-2xl shadow-xl p-8 max-w-3xl w-full flex flex-col md:flex-row gap-8 items-center md:items-start border border-slate-200">
        
        {/* Profile Circle */}
        <div className="w-20 h-20 rounded-full bg-gradient-to-br from-sky-600 to-blue-800 flex items-center justify-center text-white text-4xl font-extrabold shadow-2xl flex-shrink-0 border-4 border-white">
          {getInitials(stuData?.name)}
        </div>

        <div className="space-y-4 text-slate-700 w-full">
          <div>
            <h2 className="text-3xl font-bold text-slate-800">{stuData?.name || "User Name"}</h2>
            <span className="bg-sky-100 text-sky-700 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-tighter">
              {stuData?.status || "Fresher"} {/* 🚀 Dynamic Status */}
            </span>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
            <p><span className="font-bold text-slate-500 block uppercase text-[10px]">Email</span> {stuData?.email}</p>
            {/* <p><span className="font-bold text-slate-500 block uppercase text-[10px]">Course</span> {stuData?.course || "Not Mentioned"}</p> */}
          </div>

          <div>
            <span className="font-bold text-slate-500 block uppercase text-[10px] mb-1">Skills</span>
            <div className="flex flex-wrap gap-2">
              {Array.isArray(stuData?.skills) ? stuData.skills.map((s, i) => (
                <span key={i} className="bg-slate-100 px-2 py-1 rounded text-xs border border-slate-200">{s}</span>
              )) : <span className="text-slate-400 italic">No skills added</span>}
            </div>
          </div>

          {/* 🚀 Major Projects Section */}
          {stuData?.projects && (
            <div className="bg-slate-50 p-3 rounded-lg border border-dashed border-slate-300">
              <span className="font-bold text-slate-500 block uppercase text-[10px] mb-1">MAJOR PROJECTS</span>
              <p className="text-sm italic text-slate-600">"{stuData.projects}"</p>
            </div>
          )}

          <div className="pt-4 flex gap-6 border-t border-slate-100">
            {stuData?.linkedin && (
              <a href={stuData.linkedin} target="_blank" rel="noreferrer" className="flex items-center gap-1 text-blue-600 font-medium hover:text-blue-800 transition-colors">
                 LinkedIn ↗
              </a>
            )}
            {stuData?.github && (
              <a href={stuData.github} target="_blank" rel="noreferrer" className="flex items-center gap-1 text-slate-800 font-medium hover:text-black transition-colors">
                 GitHub ↗
              </a>
            )}
          </div>
        </div>
      </div>

      {/* Notifications... (Same as before) */}
      


            {/* 2. Notifications Section (Wahi Solid Blue Look) */}
    <div className="mt-8 w-full max-w-3xl">
      <h3 className="text-lg font-bold text-slate-700 mb-4 flex items-center gap-2 border-b pb-2">
         Notifications
      </h3>

      {stuData?.notifications && stuData.notifications.length > 0 ? (
        stuData.notifications.map((note, index) => (
          <div 
            key={index} 
            className="bg-sky-50 border-l-4 border-sky-700 p-4 rounded-r-xl shadow-sm mb-3"
          >
            <p className="text-sky-900 font-medium">
              Congratulations! You have been selected for <strong>{note.projectName}</strong> project by <strong>{note.guideName}</strong>.
            </p>
            <span className="text-xs text-sky-600 mt-2 block italic">
              {note.date ? new Date(note.date).toLocaleDateString('en-GB') : "Just now"}
            </span>
          </div>
        ))
      ) : (
        /* 🚀 Wahi Blue Box jo aapko pasand tha */
        <div className="bg-sky-700 border border-slate-200 p-6 rounded-2xl text-center text-slate-100 italic shadow-lg">
          No new notifications yet. Keep building your skills! 
        </div>
      )}
    </div>
  
    </div>
  );
}