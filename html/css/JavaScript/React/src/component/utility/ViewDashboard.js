


import React from "react";

export default function ViewDashboard({ view, stuData }) {
  if (view !== 'dashboard') return null;

  return (
    <div className="flex flex-col items-center justify-center p-10 bg-[#f4f7fe] max-h-screen" style={{paddingTop:"50px"}}>
      <h1 className="text-xl font-bold text-blue-500 mb-8">Student Dashboard</h1>
      
      {/* Simple White Card */}
      <div className="bg-white rounded-lg shadow-sm p-10 max-w-xl w-[50%] flex gap-5 items-start border border-gray-300">
        
    

        {/* Profile Initials Circle (No Image, No Cost) */}
        <div className="w-24 h-24 rounded-full bg-sky-700 flex items-center justify-center text-white text-3xl font-bold shadow-lg flex-shrink-0">
        {stuData?.name ? stuData.name.split(' ').map(n => n[0]).join('') : "KP"}
        </div>

        {/* List Style Information */}
        <div className="space-y-3 text-gray-700">
          {/* <h2 className="text-50px font-bold text-gray-900 mb-4">{stuData?.name || "Vikas Sharma"}</h2> */}
          {/* src={"https://api.dicebear.com/7.x/avataaars/svg?seed=" + (stuData?.name || "User")}
           */}

          <p className="text-20px"><span className="font-semibold">Email:</span> {stuData?.email || "vikasharma@gmail.com"}</p>
          
          <p className="text-20px"><span className="font-semibold">Course:</span> {stuData?.course || "B.Tech Computer Science"}</p>
          
          <p className="text-20px">
            <span className="font-semibold">Achievements:</span> {Array.isArray(stuData?.skills) ? stuData.skills.join(', ') : "Java, ML, React.js"}
          </p>

          <p className="text-lg text-blue-600 underline">
            <span className="font-semibold text-gray-700 no-underline">LinkedIn:</span> linkedin.com/in/{stuData?.name?.toLowerCase().replace(' ', '-')}
          </p>

          <p className="text-lg text-blue-600 underline">
            <span className="font-semibold text-gray-700 no-underline">GitHub:</span> github.com/{stuData?.name?.split(' ')[0].toLowerCase()}
          </p>
        </div>
      </div>
      {/* Notification Section - Requirement 1 ke liye */}
<div className="mt-8 w-full max-w-xl" style={{paddingTop:"20px"}}>
  <h3 className="text-lg font-bold text-slate-700 mb-4 flex items-center gap-2">
    <span></span> Notifications
  </h3>

  {stuData?.notifications && stuData.notifications.length > 0 ? (
    stuData.notifications.map((note, index) => (
      <div 
        key={index} 
        className="bg-sky-50 border-l-4 border-sky-700 p-4 rounded-r-xl shadow-sm mb-3 animate-slide-in"
      >
        <p className="text-sky-900 font-medium">
          Congratulations! You have been selected for <strong>{note.projectName}</strong> project by <strong>{note.guideName}</strong>.
        </p>
        <span className="text-xs text-sky-600 mt-2 block">
          {new Date(note.date).toLocaleDateString()}
        </span>
      </div>
    ))
  ) : (
    <div className="bg-sky-700 border border-slate-200 p-6 rounded-2xl text-center text-slate-200 italic">
      No new notifications yet. Keep building your skills! 
    </div>
  )}
</div>
    </div>
  );
}




