



              <li 
  className="cursor-pointer hover:text-blue-600 transition-all" 
  onClick={() => {
    if (stuData?.role === 'guide') {
      fetchGuideHistory(); // Ye function history fetch karega aur setView('guideHistory') karega
    } else {
      setView('dashboard'); // Student ke liye normal dashboard
    }
  }}
>
  My Profile
</li>