const experienceData = [
  {
    id: 1,
    jobtitle: "AI Engineer",
    companyname: "TECHNIBITS SOLUTIONS",
    worktype: "Full-time",
    duration: "July 2025 - Present",
    location: "Chennai, India",
    responsibility: [
      `Built a custom Object Detection pipeline using YOLOv8 with manually labeled datasets, achieving accurate PPE and human activity detection in images and videos.`,
      `Integrated pose estimation (YOLOv7-Pose/MediaPipe) with object detection to map PPE items to human keypoints for advanced safety-compliance monitoring.`,
      `Developed NLP modules using BERT-based models for text classification, document summarization, and domain-specific chatbot query understanding.`,
      `Created end-to-end AI pipelines using Python, PyTorch, OpenCV, and FastAPI, enabling real-time inference and modular deployment.`,
    ],
  },
];

const educationData = [
  {
    name: "MNM Jain Engineering College",
    status: "B.Tech - Artificial Intelligence and Data Science   CGPA: 8",
    year: "Nov 2021 – May 2025",
  },
  {
    name: "12th Grade – Biology-Maths",
    status: "Percentage: 83%",
    year: "June 2020 – April 2021",
  },
  {
    name: "10th Grade",
    status: "Percentage: 80%",
    year: "June 2018 – April 2019",
  },
];

const certificationData = [
  {
    name: "Hexaware Mavericks Hackathon Winner",
    source: "Hexaware",
    date: "Awarded ₹50,000 for creating an innovative soft skill enhancement app leveraging GPT-2 and the MERN stack.",
  },
  {
    name: "Google Data Analytics Professional Certification",
    source: "Google",
    date: "Completed Data Analytics course and completed the project on cyclist bikeshare analysis.",
  },
  {
    name: "Data Analytics CSR Program",
    source: "ICT Academy",
    date: "Worked on practical projects, including Adventure Works Data Analysis (Main Project), Amazon Sales Analysis, Bank Loan Analysis.",
  },
];

export { experienceData, educationData, certificationData };
