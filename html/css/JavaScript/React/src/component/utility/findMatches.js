


export default function findMatches(reqSkills, students, teamSize, setMatches, setTeamSynergy) {
    
    if (!reqSkills) return alert("Please enter skills to search");

    // 1. Search skills ko array mein convert aur trim karein
    const searchArr = reqSkills.split(',').map(s => s.trim().toLowerCase()).filter(s => s !== "");
    
    const results = students
    .filter(s => {
        // 🛡️ DORAEMON'S STRICT STUDENT FILTER
        const role = (s.role || "").toLowerCase().trim();
        
        // Sirf wahi cards dikhao jo 'fresher' ya 'student' se shuru hote hain
        // Isse 'guide', 'guide_exp', 'mentor' apne aap reject ho jayenge
        const isStudent = role.includes('student') || role.includes('fresher');
        const isNotGuide = !role.includes('guide') && !role.includes('mentor');
        
        return isStudent && isNotGuide;
    })
    .map(s => {
      // 2. Student ki skills ko normalize karein (Safety ke liye string mein convert)
      const studentSkills = (s.skills || []).map(sk => sk.toString().toLowerCase().trim());
      
      // 3. FLEXIBLE MATCHING: Kya student ki kisi bhi skill mein search term hai?
      const matched = searchArr.filter(searchTerm => 
        studentSkills.some(stuSkill => stuSkill.includes(searchTerm))
      );
      
      // 4. Score Calculation
      let fitness = (matched.length / searchArr.length) * 100;
      
      // 🚀 Bonus: Experienced students ko extra weightage
      const role = (s.role || "").toLowerCase();
      if (role.includes('exp') && fitness > 0) {
          fitness += 5; 
      }
      
      return { ...s, score: Math.round(Math.min(fitness, 100)) };
    })
    .filter(s => s.score > 0) // Jiska 1% bhi match ho, wo dikhna chahiye
    .sort((a,b) => b.score - a.score) 
    .slice(0, teamSize); 

    setMatches(results);

    // Synergy Score Logic
    const totalScore = results.reduce((sum, student) => sum + student.score, 0);
    const averageScore = results.length > 0 ? Math.round(totalScore / results.length) : 0;

    setTeamSynergy(averageScore);
}