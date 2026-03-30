





import React from 'react';

export default function ViewGuideHistory({ teams, view }) {
  // Agar view 'guideHistory' nahi hai toh kuch mat dikhao
  if (view !== 'guideHistory') return null;

  return (
    <div className="p-10 bg-[#f4f7fe] min-h-screen" style={{ paddingTop: "80px" }}>
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-sky-700 mb-8 border-b-2 border-sky-200 pb-2">
          📁 Project History & Created Teams
        </h2>

        {teams && teams.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {teams.map((team, index) => (
              <div key={index} className="bg-white p-6 rounded-2xl shadow-lg border border-slate-200 hover:border-sky-500 transition-all">
                {/* Project Header */}
                <div className="mb-4">
                  <h3 className="text-xl font-bold text-slate-800">{team.projectName}</h3>
                  <p className="text-xs text-slate-400 mt-1 uppercase tracking-wider font-semibold">
                    📅 {new Date(team.createdAt).toLocaleDateString()}
                  </p>
                </div>

                {/* Members List */}
                <div className="space-y-3">
                  <h4 className="text-sm font-bold text-sky-700">Selected Team Members:</h4>
                  {team.members.map((member, i) => (
                    <div key={i} className="flex items-center gap-3 bg-slate-50 p-3 rounded-xl border border-slate-100">
                      {/* Chota Avatar Circle */}
                      <div className="w-8 h-8 rounded-full bg-sky-100 flex items-center justify-center text-sky-700 text-xs font-bold">
                        {member.name.charAt(0)}
                      </div>
                      <div>
                        <p className="text-sm font-medium text-slate-700">{member.name}</p>
                        <p className="text-[10px] text-slate-400">{member.email}</p>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Status Badge */}
                <div className="mt-5 pt-4 border-t border-slate-100 flex justify-between items-center">
                  <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-[10px] font-bold uppercase">
                    Status: Finalized
                  </span>
                </div>
              </div>
            ))}
          </div>
        ) : (
          /* Empty State agar koi team nahi hai */
          <div className="flex flex-col items-center justify-center mt-20 text-slate-400">
            <div className="text-6xl mb-4 text-slate-200">📂</div>
            <p className="text-lg italic text-slate-500">No teams created yet. Start matching from the Guide View! 🚀</p>
          </div>
        )}
      </div>
    </div>
  );
}