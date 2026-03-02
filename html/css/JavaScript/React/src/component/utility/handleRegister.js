





export async function handleRegister(e, stuData, setView) {
    e.preventDefault();
    try {
        const response = await fetch('http://localhost:5000/api/register', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(stuData) // Isme name, email, password sab jayega
        });

        const result = await response.json();

        if (response.ok) {
            alert("Registration Successful! Ab aap Login kar sakte hain.");
            setView('login'); // Registration ke baad user ko Login page par bhejein
        } else {
            alert("Registration Fail: " + result.error);
        }
    } catch (error) {
        alert("Backend Server chalu nahi hai!");
    }
}