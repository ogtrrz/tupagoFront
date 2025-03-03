export async function apiRequest(method, endpoint, data = null) {
    const apiUrl = `${process.env.JSONPATH}${endpoint}`;
    const jsonKey = process.env.JSONKEY;

    if (!jsonKey) {
        throw new Error("Missing JSONKEY in environment variables.");
    }

    try {
        const options = {
            method,
            headers: {
                "accept": "application/json",
                "Authorization": `Bearer ${jsonKey}`,
            },
        };

        if (data) {
            options.headers["Content-Type"] = "application/json";
            options.body = JSON.stringify(data);
        }

        // console.log(`🔗 Requesting: ${method} ${apiUrl}`);
        const response = await fetch(apiUrl, options);

        if (!response.ok) {
            const errorText = await response.text();
            console.error(`❌ API Error: ${response.status} - ${errorText}`);
            throw new Error(errorText);
        }

        return await response.json();
    } catch (error) {
        console.error(`❌ Fetch Error:`, error.message);
        throw new Error(error.message);
    }
}
