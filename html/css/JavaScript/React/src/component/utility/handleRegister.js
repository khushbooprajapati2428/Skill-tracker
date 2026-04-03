






export async function handleRegister(e, stuData, setView) {
    e.preventDefault();
    
    // 🚀 Logic: Comma separated skills ko array banana aur dynamic fields handle karna
    const userData = {
        ...stuData, // Isme name, email, password pehle se hai
        skills: typeof stuData.skills === 'string' 
                ? stuData.skills.split(',').map(s => s.trim()) 
                : stuData.skills,
        // role: 'student' // Default role 'student' set kar rahe hain
    };

    try {
        const response = await fetch('http://localhost:5000/api/register', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(userData) 
        });

        const result = await response.json();

        if (response.ok) {
            alert("Profile Created Successfully! 🚀 Ab aap Login kar sakte hain.");
            setView('login'); 
        } else {
            alert("Registration Fail: " + result.error);
        }
    } catch (error) {
        console.error("Error:", error);
        alert("Backend Server chalu nahi hai ya network issue hai!");
    }
}