export async function GET() {
  const courses = 
  {
    id : 1,
    title: "Data Science Mastery",
    description: "Learn advanced data analysis, machine learning, and visualization techniques with Python and R. Our comprehensive program covers statistics, predictive modeling, and real-world data applications.",
  
  }

return Response.json(courses);
}