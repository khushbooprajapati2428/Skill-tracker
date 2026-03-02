


export default function loadSampleData(setStudents){
    const sampleStudents = [
  { name: "Yash Patil", email: "yash@gmail.com", password: "hashed_123", role: "student", skills: ["React", "Node.js"], projects: "Data Warehouse System" },
  { name: "Sneha Sharma", email: "sneha@gmail.com", password: "hashed_123", role: "student", skills: ["Python", "ML"], projects: "Fake News Detector" },
  { name: "Amit Verma", email: "amit@gmail.com", password: "hashed_123", role: "student", skills: ["Java", "Spring"], projects: "Library Management System" },
  { name: "Pooja Singh", email: "pooja@gmail.com", password: "hashed_123", role: "student", skills: ["React", "Firebase"], projects: "Chat Application" },
  { name: "Rahul Jadhav", email: "rahul@gmail.com", password: "hashed_123", role: "student", skills: ["Node.js", "MongoDB"], projects: "Expense Tracker" },
  { name: "Neha Gupta", email: "neha@gmail.com", password: "hashed_123", role: "student", skills: ["HTML", "CSS"], projects: "Portfolio Website" },
  { name: "Karan Patel", email: "karan@gmail.com", password: "hashed_123", role: "student", skills: ["Angular", "TypeScript"], projects: "Task Manager" },
  { name: "Riya Mehta", email: "riya@gmail.com", password: "hashed_123", role: "student", skills: ["React", "Redux"], projects: "E-commerce UI" },
  { name: "Arjun Nair", email: "arjun@gmail.com", password: "hashed_123", role: "student", skills: ["Python", "Django"], projects: "Blog Platform" },
  { name: "Priya Kulkarni", email: "priya@gmail.com", password: "hashed_123", role: "student", skills: ["Java", "MySQL"], projects: "Attendance System" },

  { name: "Vikas Yadav", email: "vikas@gmail.com", password: "hashed_123", role: "student", skills: ["C++", "DSA"], projects: "Online Judge System" },
  { name: "Anjali Deshmukh", email: "anjali@gmail.com", password: "hashed_123", role: "student", skills: ["React", "Node"], projects: "Food Ordering App" },
  { name: "Manish Kumar", email: "manish@gmail.com", password: "hashed_123", role: "student", skills: ["Python", "AI"], projects: "Face Recognition" },
  { name: "Sakshi Jain", email: "sakshi@gmail.com", password: "hashed_123", role: "student", skills: ["UI/UX", "Figma"], projects: "Travel App Design" },
  { name: "Rohit Pawar", email: "rohit@gmail.com", password: "hashed_123", role: "student", skills: ["Node.js", "Express"], projects: "API Gateway" },
  { name: "Meena Iyer", email: "meena@gmail.com", password: "hashed_123", role: "student", skills: ["Python", "Flask"], projects: "Quiz App" },
  { name: "Deepak Thakur", email: "deepak@gmail.com", password: "hashed_123", role: "student", skills: ["Java", "Android"], projects: "Notes App" },
  { name: "Simran Kaur", email: "simran@gmail.com", password: "hashed_123", role: "student", skills: ["React Native"], projects: "Fitness Tracker" },
  { name: "Akash Mishra", email: "akash@gmail.com", password: "hashed_123", role: "student", skills: ["MongoDB", "Node"], projects: "Job Portal" },
  { name: "Divya Shah", email: "divya@gmail.com", password: "hashed_123", role: "student", skills: ["Vue", "Firebase"], projects: "Event Manager" },

  { name: "Saurabh Tiwari", email: "saurabh@gmail.com", password: "hashed_123", role: "student", skills: ["Python", "NLP"], projects: "Chatbot" },
  { name: "Tanvi Joshi", email: "tanvi@gmail.com", password: "hashed_123", role: "student", skills: ["React", "Tailwind"], projects: "Landing Pages" },
  { name: "Nikhil Bansal", email: "nikhil@gmail.com", password: "hashed_123", role: "student", skills: ["C#", ".NET"], projects: "Billing Software" },
  { name: "Aarti Pandey", email: "aarti@gmail.com", password: "hashed_123", role: "student", skills: ["HTML", "Bootstrap"], projects: "College Website" },
  { name: "Gaurav Saxena", email: "gaurav@gmail.com", password: "hashed_123", role: "student", skills: ["React", "Node"], projects: "Realtime Chat" },
  { name: "Ishita Roy", email: "ishita@gmail.com", password: "hashed_123", role: "student", skills: ["Python", "Data Science"], projects: "Stock Predictor" },
  { name: "Harsh Vardhan", email: "harsh@gmail.com", password: "hashed_123", role: "student", skills: ["Java", "Hibernate"], projects: "CRM Tool" },
  { name: "Payal Agarwal", email: "payal@gmail.com", password: "hashed_123", role: "student", skills: ["Figma", "UI"], projects: "Food UI Kit" },
  { name: "Aditya Shetty", email: "aditya@gmail.com", password: "hashed_123", role: "student", skills: ["Node", "Redis"], projects: "Cache System" },
  { name: "Komal Rathi", email: "komal@gmail.com", password: "hashed_123", role: "student", skills: ["React", "Next.js"], projects: "SSR Blog" },

  { name: "Mohit Arora", email: "mohit@gmail.com", password: "hashed_123", role: "student", skills: ["Python", "OpenCV"], projects: "Object Detection" },
  { name: "Ritu Chawla", email: "ritu@gmail.com", password: "hashed_123", role: "student", skills: ["Angular"], projects: "Admin Panel" },
  { name: "Shubham Jain", email: "shubham@gmail.com", password: "hashed_123", role: "student", skills: ["React", "GraphQL"], projects: "Social Media App" },
  { name: "Nisha Soni", email: "nisha@gmail.com", password: "hashed_123", role: "student", skills: ["Python", "Flask"], projects: "ToDo API" },
  { name: "Varun Malhotra", email: "varun@gmail.com", password: "hashed_123", role: "student", skills: ["Java", "Microservices"], projects: "Order Service" },
  { name: "Kriti Arora", email: "kriti@gmail.com", password: "hashed_123", role: "student", skills: ["UI", "Illustrator"], projects: "Brand Kit" },
  { name: "Ankit Gupta", email: "ankit@gmail.com", password: "hashed_123", role: "student", skills: ["Node", "JWT"], projects: "Auth System" },
  { name: "Mitali Das", email: "mitali@gmail.com", password: "hashed_123", role: "student", skills: ["React Native"], projects: "Travel App" },
  { name: "Kunal Kapoor", email: "kunal@gmail.com", password: "hashed_123", role: "student", skills: ["Python", "TensorFlow"], projects: "Image Classifier" },
  { name: "Bhavna Tripathi", email: "bhavna@gmail.com", password: "hashed_123", role: "student", skills: ["HTML", "CSS"], projects: "NGO Website" },

  { name: "Rakesh Yadav", email: "rakesh@gmail.com", password: "hashed_123", role: "student", skills: ["Node", "Socket.io"], projects: "Live Chat" },
  { name: "Pallavi Shinde", email: "pallavi@gmail.com", password: "hashed_123", role: "student", skills: ["React", "Material UI"], projects: "Dashboard UI" },
  { name: "Alok Singh", email: "alok@gmail.com", password: "hashed_123", role: "student", skills: ["C++", "Algorithms"], projects: "Path Finder" },
  { name: "Rashmi Nair", email: "rashmi@gmail.com", password: "hashed_123", role: "student", skills: ["Python", "Automation"], projects: "Web Scraper" },
  { name: "Tushar Chavan", email: "tushar@gmail.com", password: "hashed_123", role: "student", skills: ["React", "Node"], projects: "Learning Platform" },
  { name: "Sonal Bhatia", email: "sonal@gmail.com", password: "hashed_123", role: "student", skills: ["UI/UX"], projects: "Mobile UI Kit" },
  { name: "Abhishek Dubey", email: "abhishek@gmail.com", password: "hashed_123", role: "student", skills: ["Python", "FastAPI"], projects: "REST API" },
  { name: "Heena Khan", email: "heena@gmail.com", password: "hashed_123", role: "student", skills: ["React", "Firebase"], projects: "Realtime Notes" },
  { name: "Siddharth Rao", email: "sid@gmail.com", password: "hashed_123", role: "student", skills: ["Java", "Spring Boot"], projects: "Banking API" }
];
  
    setStudents(sampleStudents);
    localStorage.setItem('students', JSON.stringify(sampleStudents));
    // Alert message ko 50 kar do
    alert("50 Sample Students Loaded! Now go to Guide View and search 'React'");
  };





