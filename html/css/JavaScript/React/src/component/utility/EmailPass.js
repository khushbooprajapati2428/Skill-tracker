



// EmailPass.js - Default Export Function
export default async function handleLogin(e, stuData, setView) {
    // 1. Page refresh hone se rokta hai
    e.preventDefault();

    try {
        // 2. Backend API call (Login Request)
        const response = await fetch('http://localhost:5000/api/login', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ 
                email: stuData.email, 
                password: stuData.password 
            })
        });

        const result = await response.json();

        // 3. Agar response sahi hai toh home par bhejein
        if (response.ok) {
            alert("Login Successful! Welcome " + result.user.name);
            setView('home'); 
        } else {
            // Agar password ya email galat ho
            alert("Error: " + result.message);
        }
    } catch (error) {
        console.error("Login Error:", error);
        alert("Backend Server chalu nahi hai!");
    }
}