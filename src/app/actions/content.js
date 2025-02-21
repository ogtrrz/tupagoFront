import { data } from "@/lib/data"; // ✅ Import fallback data

export async function getSkills() {
  try {
    const apiUrl = process.env.NEXT_PUBLIC_API_URL;

    if (!apiUrl) {
      console.warn("⚠️ NEXT_PUBLIC_API_URL is not set! Using fallback data.");
      return { skills: data.skills };
    }

    console.log("Fetching from:", apiUrl);

    const res = await fetch(`${apiUrl}/skills`, {
      cache: "force-cache",
      next: { revalidate: 60 },
    });

    if (!res.ok) {
      console.error(`❌ API error ${res.status}: Falling back to local data.`);
      return { skills: data.skills };
    }

    const fetchedData = await res.json();
    
    if (!fetchedData?.skills?.length) {
      console.warn("⚠️ API returned empty or invalid data. Using fallback.");
      return { skills: data.skills };
    }

    console.log("✅ Successfully fetched skills:", fetchedData.skills.length);
    return fetchedData;
  } catch (error) {
    console.error("❌ Fetch error:", error.message, "Using fallback data.");
    return { skills: data.skills };
  }
}
