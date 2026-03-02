


// Function parameters mein wo saari cheezein likhein jo skill.js se ayengi
export default function findMatches(reqSkills, students, teamSize, setMatches, setTeamSynergy) {
    
    // 1. Validation check
    if (!reqSkills) return alert("Please enter skills to search");

    // 2. Search skills ko array mein convert karna
    const searchArr = reqSkills.split(',').map(s => s.trim().toLowerCase());
    
    // 3. Matching logic
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
    .slice(0, teamSize); 

    // 4. States update karna (Ye functions skill.js se pass hoke aaye hain)
    setMatches(results);

    const totalScore = results.reduce((sum, student) => sum + student.score, 0);
    const averageScore = results.length > 0 ? Math.round(totalScore / results.length) : 0;

    setTeamSynergy(averageScore);
}