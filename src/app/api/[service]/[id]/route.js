import { apiRequest } from "@/lib/apiClient";

export async function GET(request, { params }) {
  const { service, id } = await params;
  if (!service || !id) {
    return Response.json(
      { error: "Service and ID are required" },
      { status: 400 }
    );
  }

  try {
    const data = await apiRequest("GET", `${service}/${id}`);
    return Response.json(data);
  } catch (error) {
    return Response.json({ error: error.message }, { status: 500 });
  }
}

export async function PATCH(request, { params }) {
  const { service, id } = await params;
  if (!service || !id) {
    return Response.json(
      { error: "Service and ID are required" },
      { status: 400 }
    );
  }

  try {
    const body = await request.json();
    const data = await apiRequest("PATCH", `${service}/${id}`, body);
    return Response.json(data);
  } catch (error) {
    return Response.json({ error: error.message }, { status: 500 });
  }
}
