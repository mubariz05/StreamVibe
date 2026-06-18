

async function request(endpoint) {
    try {
        const response = await fetch(
            `${import.meta.env.VITE_BASE_URL}${endpoint}&api_key=${import.meta.env.VITE_API_KEY}`
        );

        if (!response.ok) {
            throw new Error("API error: " + response.status);
        }

        const data = await response.json();
        return data;
    } catch (error) {
        console.error("Fetch error:", error);
        return null;
    }
}

export default request;