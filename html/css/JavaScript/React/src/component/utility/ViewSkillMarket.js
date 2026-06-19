




import React, { useState, useEffect } from 'react';

export default function ViewSkillMarket({ view, stuData,onConnectClick }) {
    const [mentors, setMentors] = useState([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        if (view === 'skillMarket' && stuData?._id) {
            fetchMentors();
        }
    }, [view, stuData]);

    const fetchMentors = async () => {
        setLoading(true);
        try {
            // const res = await fetch(`http://localhost:5000/api/skill-market-matches/${stuData._id}`);
            // ViewSkillMarket.js mein check karo
            const res = await fetch(`http://localhost:5000/api/skill-market-matches/${stuData._id}`);

            const data = await res.json();
            setMentors(data);
        } catch (err) {
            console.error("Error fetching mentors:", err);
        } finally {
            setLoading(false);
        }
    };

    if (view !== 'skillMarket') return null;

    return (
        <div className="p-8 bg-[#f4f7fe] min-h-screen flex flex-col items-center">
            <h1 className="text-2xl font-bold text-indigo-600 mb-2 uppercase">🤝 Peer Skill Marketplace</h1>
            <p className="text-slate-500 mb-8">Connect with students who can teach you what you want to learn!</p>

            {loading ? <p>✨ Finding best matches for you...</p> : (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full max-w-6xl">
                    {mentors.length > 0 ? mentors.map(m => (
                        <div key={m._id} className="bg-white p-6 rounded-2xl shadow-lg border border-indigo-50 hover:scale-105 transition-all">
                            <div className="flex items-center gap-4 mb-4">
                                <div className="w-12 h-12 bg-indigo-600 rounded-full flex items-center justify-center text-white font-bold">
                                    {m.name[0]}
                                </div>
                                <div>
                                    <h3 className="font-bold text-slate-800">{m.name}</h3>
                                    <span className="text-[10px] bg-emerald-100 text-emerald-700 px-2 py-0.5 rounded-full font-bold uppercase">Expert</span>
                                </div>
                            </div>
                            <p className="text-sm text-slate-600 mb-4">
                                💡 <span className="font-bold">Can teach you:</span> {m.skillsToTeach}
                            </p>
                            {/* <button className="w-full bg-indigo-600 text-white py-2 rounded-xl text-sm font-bold hover:bg-indigo-700">
                                Connect to Learn ↗
                            </button> */}
                            
<button 
    onClick={() => onConnectClick(m)} // 'm' wahan mentor ka object hai
    className="w-full bg-indigo-600 text-white py-2 rounded-xl text-sm font-bold hover:bg-indigo-700 transition-all active:scale-95"
>
    Connect to Learn ↗
</button>
                        </div>
                    )) : (
                        <div className="col-span-full text-center p-10 bg-white rounded-3xl shadow-md italic text-slate-400">
                            No matches found yet. Try adding more skills to your 'Wants to Learn' list!
                        </div>
                    )}
                </div>
            )}
        </div>
    );
}