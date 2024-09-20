export async function GET() {
  // Example static data
  const data = {
    name: "John Doe",
    email: "johndoe@test.com",
    age: 30,
  };

  return new Response(JSON.stringify(data), {
    headers: { "Content-Type": "application/json" },
  });
}
