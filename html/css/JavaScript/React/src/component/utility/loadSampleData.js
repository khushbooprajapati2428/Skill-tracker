


export default function loadSampleData(setStudents){
  const sampleStudents = [
  { _id:"stu1", name: "Yash Patil", email: "yash@gmail.com", password: "hashed_123", role: "student", skills: ["React", "Node.js"], projects: "Data Warehouse System" },
  { _id:"stu2", name: "Sneha Sharma", email: "sneha@gmail.com", password: "hashed_123", role: "student", skills: ["Python", "ML"], projects: "Fake News Detector" },
  { _id:"stu3", name: "Amit Verma", email: "amit@gmail.com", password: "hashed_123", role: "student", skills: ["Java", "Spring"], projects: "Library Management System" },
  { _id:"stu4", name: "Pooja Singh", email: "pooja@gmail.com", password: "hashed_123", role: "student", skills: ["React", "Firebase"], projects: "Chat Application" },
  { _id:"stu5", name: "Rahul Jadhav", email: "rahul@gmail.com", password: "hashed_123", role: "student", skills: ["Node.js", "MongoDB"], projects: "Expense Tracker" },
  { _id:"stu6", name: "Neha Gupta", email: "neha@gmail.com", password: "hashed_123", role: "student", skills: ["HTML", "CSS"], projects: "Portfolio Website" },
  { _id:"stu7", name: "Karan Patel", email: "karan@gmail.com", password: "hashed_123", role: "student", skills: ["Angular", "TypeScript"], projects: "Task Manager" },
  { _id:"stu8", name: "Riya Mehta", email: "riya@gmail.com", password: "hashed_123", role: "student", skills: ["React", "Redux"], projects: "E-commerce UI" },
  { _id:"stu9", name: "Arjun Nair", email: "arjun@gmail.com", password: "hashed_123", role: "student", skills: ["Python", "Django"], projects: "Blog Platform" },
  { _id:"stu10", name: "Priya Kulkarni", email: "priya@gmail.com", password: "hashed_123", role: "student", skills: ["Java", "MySQL"], projects: "Attendance System" },

  { _id:"stu11", name: "Vikas Yadav", email: "vikas@gmail.com", password: "hashed_123", role: "student", skills: ["C++", "DSA"], projects: "Online Judge System" },
  { _id:"stu12", name: "Anjali Deshmukh", email: "anjali@gmail.com", password: "hashed_123", role: "student", skills: ["React", "Node"], projects: "Food Ordering App" },
  { _id:"stu13", name: "Manish Kumar", email: "manish@gmail.com", password: "hashed_123", role: "student", skills: ["Python", "AI"], projects: "Face Recognition" },
  { _id:"stu14", name: "Sakshi Jain", email: "sakshi@gmail.com", password: "hashed_123", role: "student", skills: ["UI/UX", "Figma"], projects: "Travel App Design" },
  { _id:"stu15", name: "Rohit Pawar", email: "rohit@gmail.com", password: "hashed_123", role: "student", skills: ["Node.js", "Express"], projects: "API Gateway" },
  { _id:"stu16", name: "Meena Iyer", email: "meena@gmail.com", password: "hashed_123", role: "student", skills: ["Python", "Flask"], projects: "Quiz App" },
  { _id:"stu17", name: "Deepak Thakur", email: "deepak@gmail.com", password: "hashed_123", role: "student", skills: ["Java", "Android"], projects: "Notes App" },
  { _id:"stu18", name: "Simran Kaur", email: "simran@gmail.com", password: "hashed_123", role: "student", skills: ["React Native"], projects: "Fitness Tracker" },
  { _id:"stu19", name: "Akash Mishra", email: "akash@gmail.com", password: "hashed_123", role: "student", skills: ["MongoDB", "Node"], projects: "Job Portal" },
  { _id:"stu20", name: "Divya Shah", email: "divya@gmail.com", password: "hashed_123", role: "student", skills: ["Vue", "Firebase"], projects: "Event Manager" },

  { _id:"stu21", name: "Saurabh Tiwari", email: "saurabh@gmail.com", password: "hashed_123", role: "student", skills: ["Python", "NLP"], projects: "Chatbot" },
  { _id:"stu22", name: "Tanvi Joshi", email: "tanvi@gmail.com", password: "hashed_123", role: "student", skills: ["React", "Tailwind"], projects: "Landing Pages" },
  { _id:"stu23", name: "Nikhil Bansal", email: "nikhil@gmail.com", password: "hashed_123", role: "student", skills: ["C#", ".NET"], projects: "Billing Software" },
  { _id:"stu24", name: "Aarti Pandey", email: "aarti@gmail.com", password: "hashed_123", role: "student", skills: ["HTML", "Bootstrap"], projects: "College Website" },
  { _id:"stu25", name: "Gaurav Saxena", email: "gaurav@gmail.com", password: "hashed_123", role: "student", skills: ["React", "Node"], projects: "Realtime Chat" },
  { _id:"stu26", name: "Ishita Roy", email: "ishita@gmail.com", password: "hashed_123", role: "student", skills: ["Python", "Data Science"], projects: "Stock Predictor" },
  { _id:"stu27", name: "Harsh Vardhan", email: "harsh@gmail.com", password: "hashed_123", role: "student", skills: ["Java", "Data Science"], projects: "CRM Tool" },
  { _id:"stu28", name: "Payal Agarwal", email: "payal@gmail.com", password: "hashed_123", role: "student", skills: ["Figma", "UI"], projects: "Food UI Kit" },
  { _id:"stu29", name: "Aditya Shetty", email: "aditya@gmail.com", password: "hashed_123", role: "student", skills: ["Node", "Redis"], projects: "Cache System" },
  { _id:"stu30", name: "Komal Rathi", email: "komal@gmail.com", password: "hashed_123", role: "student", skills: ["React", "Next.js"], projects: "SSR Blog" },

  { _id:"stu31", name: "Mohit Arora", email: "mohit@gmail.com", password: "hashed_123", role: "student", skills: ["Python", "OpenCV"], projects: "Object Detection" },
  { _id:"stu32", name: "Ritu Chawla", email: "ritu@gmail.com", password: "hashed_123", role: "student", skills: ["Angular"], projects: "Admin Panel" },
  { _id:"stu33", name: "Shubham Jain", email: "shubham@gmail.com", password: "hashed_123", role: "student", skills: ["React", "GraphQL"], projects: "Social Media App" },
  { _id:"stu34", name: "Nisha Soni", email: "nisha@gmail.com", password: "hashed_123", role: "student", skills: ["Python", "Flask"], projects: "ToDo API" },
  { _id:"stu35", name: "Varun Malhotra", email: "varun@gmail.com", password: "hashed_123", role: "student", skills: ["Java", "Microservices"], projects: "Order Service" },
  { _id:"stu36", name: "Kriti Arora", email: "kriti@gmail.com", password: "hashed_123", role: "student", skills: ["UI", "Illustrator"], projects: "Brand Kit" },
  { _id:"stu37", name: "Ankit Gupta", email: "ankit@gmail.com", password: "hashed_123", role: "student", skills: ["Node", "JWT"], projects: "Auth System" },
  { _id:"stu38", name: "Mitali Das", email: "mitali@gmail.com", password: "hashed_123", role: "student", skills: ["React Native"], projects: "Travel App" },
  { _id:"stu39", name: "Kunal Kapoor", email: "kunal@gmail.com", password: "hashed_123", role: "student", skills: ["Python", "TensorFlow"], projects: "Image Classifier" },
  { _id:"stu40", name: "Bhavna Tripathi", email: "bhavna@gmail.com", password: "hashed_123", role: "student", skills: ["HTML", "CSS"], projects: "NGO Website" },

  { _id:"stu41", name: "Rakesh Yadav", email: "rakesh@gmail.com", password: "hashed_123", role: "student", skills: ["Node", "Socket.io"], projects: "Live Chat" },
  { _id:"stu42", name: "Pallavi Shinde", email: "pallavi@gmail.com", password: "hashed_123", role: "student", skills: ["React", "Material UI"], projects: "Dashboard UI" },
  { _id:"stu43", name: "Alok Singh", email: "alok@gmail.com", password: "hashed_123", role: "student", skills: ["C++", "Algorithms"], projects: "Path Finder" },
  { _id:"stu44", name: "Rashmi Nair", email: "rashmi@gmail.com", password: "hashed_123", role: "student", skills: ["Python", "Automation"], projects: "Web Scraper" },
  { _id:"stu45", name: "Tushar Chavan", email: "tushar@gmail.com", password: "hashed_123", role: "student", skills: ["React", "Node"], projects: "Learning Platform" },
  { _id:"stu46", name: "Sonal Bhatia", email: "sonal@gmail.com", password: "hashed_123", role: "student", skills: ["UI/UX"], projects: "Mobile UI Kit" },
  { _id:"stu47", name: "Abhishek Dubey", email: "abhishek@gmail.com", password: "hashed_123", role: "student", skills: ["Python", "FastAPI"], projects: "REST API" },
  { _id:"stu48", name: "Heena Khan", email: "heena@gmail.com", password: "hashed_123", role: "student", skills: ["React", "Firebase"], projects: "Realtime Notes" },
  { _id:"stu49", name: "Siddharth Rao", email: "sid@gmail.com", password: "hashed_123", role: "student", skills: ["Java", "Spring Boot"], projects: "Banking API" }
];

  setStudents(sampleStudents);
  localStorage.setItem('students', JSON.stringify(sampleStudents));
  alert("50 Sample Students Loaded! Now go to Guide View and search 'React'");
};