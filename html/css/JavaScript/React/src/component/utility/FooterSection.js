export default function Footer(){

return(

    <>

        {/* Footer Section */}
<footer className="!bg-black text-white pt-16 pb-8 mt-0 ">
  <div className="max-w-7xl mx-auto px-8">
    <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
      
      {/* Column 1: Brand Info */}
      <div className="col-span-1 md:col-span-1">
        <h3 className="text-2xl font-black mb-4 tracking-tight">
          Skill<span className="text-indigo-400">Tracker</span>
        </h3>
        <p className="text-slate-400 text-sm leading-relaxed">
          Building smarter teams with AI. Connecting talent with the right opportunities.
        </p>
      </div>

      {/* Column 2: Quick Links */}
      <div>
        <h4 className="text-sm font-black uppercase tracking-widest mb-6 text-indigo-400">Navigation</h4>
        <ul className="space-y-4 text-slate-300 text-sm font-medium">
          <li className="hover:text-white transition-colors cursor-pointer" onClick={() => setView('home')}>Home</li>
          <li className="hover:text-white transition-colors cursor-pointer" onClick={() => setView('student')}>For Students</li>
          <li className="hover:text-white transition-colors cursor-pointer" onClick={() => setView('guide')}>For Guides</li>
        </ul>
      </div>

      {/* Column 3: Resources */}
      <div>
        <h4 className="text-sm font-black uppercase tracking-widest mb-6 text-indigo-400">Resources</h4>
        <ul className="space-y-4 text-slate-300 text-sm font-medium">
          <li className="hover:text-white transition-colors">Documentation</li>
          <li className="hover:text-white transition-colors">Skill Mapping</li>
          <li className="hover:text-white transition-colors">Privacy Policy</li>
        </ul>
      </div>

      {/* Column 4: Contact */}
      <div>
        <h4 className="text-sm font-black uppercase tracking-widest mb-6 text-indigo-400">Contact</h4>
        <p className="text-slate-300 text-sm mb-2">College Project 2026</p>
        <p className="text-slate-300 text-sm italic">support@skilltracker.ai</p>
      </div>
    </div>

    {/* Bottom Bar */}
    <div className="pt-8 border-t border-slate-800 flex flex-col md:flex-row justify-between items-center gap-4">
      <p className="text-slate-500 text-xs font-bold uppercase tracking-widest">
        © 2026 Khushboo Prajapati. All rights reserved.
      </p>
      <div className="flex gap-6">
        {/* Social Icons Placeholder */}
        <span className="text-slate-500 hover:text-indigo-400 transition-colors cursor-pointer">LinkedIn</span>
        <span className="text-slate-500 hover:text-indigo-400 transition-colors cursor-pointer">GitHub</span>
      </div>
    </div>
  </div>
</footer>

    </>
)

}