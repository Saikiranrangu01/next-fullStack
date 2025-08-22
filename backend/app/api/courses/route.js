export async function GET() {
  const courses = 
  [
  {
    "id": 1,
    "title": "Web Development",
    "description": "HTML, CSS, JavaScript, React, Node.js."
  },
  {
    "id": 2,
    "title": "Digital Marketing",
    "description": "SEO, Google Ads, Analytics, Social Media Marketing."
  },
  {
    "id": 3,
    "title": "Data Science",
    "description": "Python, Pandas, Machine Learning, Deep Learning."
  },
  {
    "id": 4,
    "title": "Mobile App Development",
    "description": "Flutter, React Native, Android, iOS."
  },
  {
    "id": 5,
    "title": "Cloud Computing",
    "description": "AWS, Azure, Google Cloud Platform, DevOps."
  },
  {
    "id": 6,
    "title": "Cybersecurity",
    "description": "Ethical Hacking, Network Security, Penetration Testing."
  },
  {
    "id": 7,
    "title": "UI/UX Design",
    "description": "Wireframing, Prototyping, Figma, Adobe XD."
  },
  {
    "id": 8,
    "title": "Artificial Intelligence",
    "description": "Neural Networks, NLP, Computer Vision."
  },
  {
    "id": 9,
    "title": "Blockchain Development",
    "description": "Smart Contracts, Ethereum, Web3, Cryptocurrency."
  },
  {
    "id": 10,
    "title": "Project Management",
    "description": "Agile, Scrum, Kanban, Risk Management."
  },
  {
    "id": 11,
    "title": "Graphic Design",
    "description": "Photoshop, Illustrator, Branding, Visual Design."
  },
  {
    "id": 12,
    "title": "Business Analytics",
    "description": "Data Visualization, Power BI, Tableau, SQL."
  }
]


return Response.json(courses);
}