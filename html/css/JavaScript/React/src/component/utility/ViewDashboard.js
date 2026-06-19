



import React from "react";

export default function ViewDashboard({ view, stuData }) {
  if (view !== 'dashboard') return null;

  // 🚀 ACTION HANDLE FUNCTION (No-Logout Fix)
  const handleAction = async (notificationId, actionStatus) => {
    try {
        const response = await fetch(`http://localhost:5000/api/notifications/${notificationId}/action`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ 
                status: actionStatus, 
                studentId: stuData?._id 
            })
        });
        
        const data = await response.json();
        if (response.ok) {
            alert(`Request ${actionStatus === 'accepted' ? 'Accepted!' : 'Deferred for later.'}`);
            
            // Soft-state update bina reload kiye taaki automatic logout na ho!
            if (stuData?.notifications) {
                const note = stuData.notifications.find(n => n._id === notificationId);
                if (note) note.status = actionStatus;
            }
        } else {
            alert(data.error || "Something went wrong");
        }
    } catch (err) {
        console.error("Error updating notification:", err);
        alert("Failed to connect to the server.");
    }
  };

  const getInitials = (name) => {
    if (!name) return "?";
    return name.trim().split(/\s+/).map(n => n[0]).join('').toUpperCase().slice(0, 2);
  };

  return (
    <div className="flex flex-col items-center p-10 bg-[#f4f7fe] min-h-screen" style={{paddingTop:"20px"}}>
      <h1 className="text-xl font-bold text-blue-600 mb-6 uppercase tracking-widest mt-4">
        Student Profile
      </h1>

      <div className="bg-white rounded-2xl shadow-xl p-8 max-w-3xl w-full flex flex-col md:flex-row gap-8 items-center md:items-start border border-slate-200">
        <div className="w-20 h-20 rounded-full bg-gradient-to-br from-sky-600 to-blue-800 flex items-center justify-center text-white text-4xl font-extrabold shadow-2xl flex-shrink-0 border-4 border-white">
          {getInitials(stuData?.name)}
        </div>

        <div className="space-y-4 text-slate-700 w-full">
          <div>
            <h2 className="text-3xl font-bold text-slate-800">{stuData?.name || "User Name"}</h2>
            <span className="bg-sky-100 text-sky-700 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-tighter">
              {stuData?.role || "Fresher"} 
            </span>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
            <p><span className="font-bold text-slate-500 block uppercase text-[10px]">Email</span> {stuData?.email}</p>
          </div>

          <div>
            <span className="font-bold text-slate-500 block uppercase text-[10px] mb-1">Primary Skills</span>
            <div className="flex flex-wrap gap-2">
              {Array.isArray(stuData?.skills) ? stuData.skills.map((s, i) => (
                <span key={i} className="bg-slate-100 px-2 py-1 rounded text-xs border border-slate-200">{s}</span>
              )) : <span className="text-slate-400 italic">No skills added</span>}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mt-4">
            <div className="bg-indigo-50 p-3 rounded-lg border border-indigo-100 shadow-sm">
              <span className="font-bold text-indigo-500 block uppercase text-[10px] mb-1">🎯 Wants to Learn</span>
              <p className="text-sm font-semibold text-slate-700">
                {stuData?.skillsToLearn || "Not specified yet"}
              </p>
            </div>
            
            <div className="bg-emerald-50 p-3 rounded-lg border border-emerald-100 shadow-sm">
              <span className="font-bold text-emerald-500 block uppercase text-[10px] mb-1">🤝 Can Teach</span>
              <p className="text-sm font-semibold text-slate-700">
                {stuData?.skillsToTeach || "Not specified yet"}
              </p>
            </div>
          </div>

          {stuData?.projects && (
            <div className="bg-slate-50 p-3 rounded-lg border border-dashed border-slate-300 mt-4">
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
      {/* //notication wala */}

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
              {note.message ? (
                <div>
                  <p className="text-sky-900 font-bold mb-1">Message from {note.guideName}:</p>
                  <p className="text-sky-800 bg-white p-3 rounded-lg border border-sky-100 italic shadow-sm">
                    "{note.message}"
                  </p>
                </div>
              ) : (
                <p className="text-sky-900 font-medium">
                  Congratulations! You have been selected for <strong>{note.projectName || "a naye project"}</strong> by <strong>{note.guideName}</strong>.
                </p>
              )}
              
              <span className="text-xs text-sky-600 mt-2 block italic">
                {note.date ? new Date(note.date).toLocaleDateString('en-GB') : "Recently"}
              </span>

              {(!note.status || note.status === 'pending') && (
                <div className="mt-3 flex gap-3">
                  <button 
                    onClick={() => handleAction(note._id, 'accepted')}
                    className="bg-green-600 hover:bg-green-700 text-white font-medium text-xs px-4 py-1.5 rounded-lg shadow-sm transition-all"
                  >
                    Accept
                  </button>
                  <button 
                    onClick={() => handleAction(note._id, 'declined')}
                    className="bg-gray-300 hover:bg-gray-400 text-gray-700 font-medium text-xs px-4 py-1.5 rounded-lg shadow-sm transition-all"
                  >
                    Later
                  </button>
                </div>
              )}

              {note.status === 'accepted' && (
                <span className="text-xs font-bold text-green-600 mt-2 block">✓ Connected</span>
              )}
              {note.status === 'declined' && (
                <span className="text-xs font-bold text-gray-500 mt-2 block">Deferred for Later</span>
              )}

            </div>
          ))
        ) : (
          <div className="bg-sky-700 p-6 rounded-2xl text-center text-slate-100 italic shadow-lg">
            No new notifications yet. Keep building your skills! 
          </div>
        )}
      </div>
    </div>
  );
}