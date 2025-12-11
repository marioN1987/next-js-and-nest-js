export async function fetchStreamingContent() {
    const response = await fetch('http://localhost:8080/api/streaming');  
    const jsonRes = await response.json();
    
    if (!response.ok) {
        throw new Error("Failed to fetch streaming content");
    }

    return jsonRes;
}

export async function validateUser(formData: any) {
        const response = await fetch("http://localhost:8080/api/users/validate", {
        method: 'POST',
        body: JSON.stringify(formData),
        headers: {
            'Content-Type': 'application/json',
        }
    })

    if (!response.ok) {
        throw new Error("Failed to fetch streaming content");
    }

    const { userAccess } = await response.json();

    return userAccess;
}