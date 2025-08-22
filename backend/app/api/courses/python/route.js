export async function GET() {
  const courses = 
  {
    id: 3,
    title: "Python Full Stack Development",
    description: "Become a proficient full-stack developer using Python. Master Django, Flask, frontend integration, database management, and deployment strategies for modern web applications.",
  }

return Response.json(courses);
}