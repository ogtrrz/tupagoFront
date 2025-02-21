import { apiRequest } from "@/lib/apiClient";

export async function GET(request, { params }) {
  const { service } = await params;
  if (!service) {
    return Response.json({ error: "Service is required" }, { status: 400 });
  }

  try {
    const data = await apiRequest("GET", `${service}`);
    return Response.json(data);
  } catch (error) {
    return Response.json({ error: error.message }, { status: 500 });
  }
}

export async function POST(request, { params }) {
  const { service } = await params;
  if (!service) {
    return Response.json({ error: "Service is required" }, { status: 400 });
  }

  try {
    const body = await request.json();
    const data = await apiRequest("POST", `${service}`, body);
    return Response.json(data);
  } catch (error) {
    return Response.json({ error: error.message }, { status: 500 });
  }
}
