export async function GET(request: Request) {
  const res = await fetch('http://localhost:4000/api/hello');
  const data = await res.text();
  return new Response(data.trim(), {
    status: 200,
  });
}