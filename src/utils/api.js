const API_URL = import.meta.env.VITE_API_BASE;

    export const apiRequest = async (endpoint, options = {}) => {
    const token = localStorage.getItem("token");

    const res = await fetch(`${API_BASE}${endpoint}`, {
        ...options,
        headers: {
        "Content-Type": "application/json",
        ...(token && { Authorization: `Bearer ${token}` }),
        ...options.headers,
        },
    });

    if (!res.ok) {
        const error = await res.json();
        throw new Error(error.message || "Request failed");
    }

    return res.json();
};
