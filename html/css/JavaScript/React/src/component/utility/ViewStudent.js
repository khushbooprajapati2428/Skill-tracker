




export default function ViewStudent({ view, stuData, setStuData, handleSubmit }){

    if (view !== 'student' && view !== 'registration') return null;

    return(
        <section className="py-8 bg-transparent">
            <div className='flex justify-center'>
                <div className="w-full max-w-2xl px-4">
                    
                    <div className="text-center mb-6">
                        <h2 className="text-xl font-bold text-slate-700" style={{paddingTop:"30px"}}>
                            {view === 'registration' ? '🚀 Create Your Profile' : '✨ Edit Your Profile'}
                        </h2>
                        <p className="text-slate-500 text-sm"  style={{paddingTop:"20px"}}>Update your information to stay relevant.</p>
                    </div>
                    
                    <div className="bg-white rounded-2xl p-6 shadow-xl border border-slate-100">
                        <form onSubmit={handleSubmit} className="space-y-4">
                            
                            {/* Row 1: Name & Status */}
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4" >
                                <div className="flex flex-col gap-1">
                                    <label className="text-xs font-bold text-slate-400 uppercase ml-1" style={{padding:"10px 20px"}}>Full Name</label>
                                    <input 
                                        type="text" 
                                        className="w-full bg-slate-50 border border-slate-200 rounded-lg px-4 py-2 focus:ring-2 focus:ring-indigo-100 outline-none text-sm transition-all"
                                        placeholder="Ex: Enter your name" style={{padding:"8px 20px"}}
                                        value={stuData.name} 
                                        onChange={(e)=>setStuData({...stuData, name: e.target.value})} 
                                        required 
                                    />
                                </div>
                                <div className="flex flex-col gap-1">
                                    <label className="text-xs font-bold text-slate-400 uppercase ml-1" style={{padding:"10px 20px"}}>Current Status</label>

                                

                                    <select 
                                        value={stuData.role} 
                                        onChange={(e)=>setStuData({...stuData, role: e.target.value})}
                                        className="w-full bg-slate-50 border border-slate-200 rounded-lg px-4 py-2 text-sm outline-none cursor-pointer" style={{padding:"8px 20px"}}
                                    >
                                        <option value="fresher">🎓 Fresher</option>
                                        <option value="experienced">💼 Experienced</option>
                                    </select>
                                </div>
                            </div>

                            {/* Row 2: Email & Password (Only for Registration) */}
                            {view === 'registration' && (
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                    <div className="flex flex-col gap-1">
                                        <label className="text-xs font-bold text-slate-400 uppercase ml-1" style={{paddingTop:"30px"}}>Email Address</label>
                                        <input 
                                            type="email" 
                                            className="w-full bg-slate-50 border border-slate-200 rounded-lg px-4 py-2 text-sm"
                                            placeholder="email@example.com"
                                            value={stuData.email} 
                                            onChange={(e)=>setStuData({...stuData, email: e.target.value})} 
                                            required 
                                        />
                                    </div>
                                    <div className="flex flex-col gap-1">
                                        <label className="text-xs font-bold text-slate-400 uppercase ml-1" style={{paddingTop:"30px"}}>Set Password</label>
                                        <input 
                                            type="password" 
                                            className="w-full bg-slate-50 border border-slate-200 rounded-lg px-4 py-2 text-sm"
                                            placeholder="••••••••"
                                            value={stuData.password} 
                                            onChange={(e)=>setStuData({...stuData, password: e.target.value})} 
                                            required 
                                        />
                                    </div>
                                </div>
                            )}

                            {/* Row 3: URLs */}
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <div className="flex flex-col gap-1">
                                    <label className="text-xs font-bold text-slate-400 uppercase ml-1"  style={{padding:"10px 20px"}}>GitHub URL</label>
                                    <input 
                                        type="url" 
                                        className="w-full bg-slate-50 border border-slate-200 rounded-lg px-4 py-2 text-sm"  style={{padding:"8px 20px"}}
                                        placeholder="https://github.com/..." 
                                        value={stuData.github} 
                                        onChange={(e)=>setStuData({...stuData, github: e.target.value})} 
                                    />
                                </div>
                                <div className="flex flex-col gap-1">
                                    <label className="text-xs font-bold text-slate-400 uppercase ml-1"  style={{padding:"10px 20px"}}>LinkedIn URL</label>
                                    <input 
                                        type="url" 
                                        className="w-full bg-slate-50 border border-slate-200 rounded-lg px-4 py-2 text-sm"  style={{padding:"8px 20px"}}
                                        placeholder="https://linkedin.com/in/..." 
                                        value={stuData.linkedin} 
                                        onChange={(e)=>setStuData({...stuData, linkedin: e.target.value})} 
                                    />
                                </div>
                            </div>

                            {/* Skills */}
                            <div className="flex flex-col gap-1">
                                <label className="text-xs font-bold text-slate-400 uppercase ml-1"  style={{padding:"10px 20px"}}>Skills (Comma Separated)</label>
                                <input 
                                    type="text" 
                                    className="w-full bg-slate-50 border border-slate-200 rounded-lg px-4 py-2 text-sm"  style={{padding:"8px 20px"}}
                                    placeholder="React, Node.js, Tailwind..." 
                                    value={stuData.skills} 
                                    onChange={(e)=>setStuData({...stuData, skills: e.target.value})} 
                                    required 
                                />
                            </div>

                            {/* Projects */}
                            <div className="flex flex-col gap-1">
                                <label className="text-xs font-bold text-slate-400 uppercase ml-1"  style={{padding:"10px 20px"}}>Major Projects</label>
                                <textarea 
                                    rows="2"
                                    className="w-full bg-slate-50 border border-slate-200 rounded-lg px-4 py-2 text-sm outline-none resize-none"  style={{padding:"20px 20px"}}
                                    placeholder="Briefly describe your top 2 projects..." 
                                    value={stuData.projects} 
                                    onChange={(e)=>setStuData({...stuData, projects: e.target.value})} 
                                />
                            </div>

                            <button 
                                type="submit" 
                                className="w-full bg-slate-800 text-white py-3 rounded-xl font-bold text-sm hover:bg-slate-900 transition-all shadow-md active:scale-95 mt-2"
                            >
                                {view === 'registration' ? 'Register Profile 🚀' : 'Update Profile ✨'}
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
}






















