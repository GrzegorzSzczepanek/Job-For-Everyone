import type { HttpMethod } from "@sveltejs/kit";

const backendIp = "127.0.0.1";

async function request(method : HttpMethod = "GET", ip: string, endpoint: string, params: object) {
    const result = await fetch(`http://${ip}:3000/${endpoint}`, {
        method: method,
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(params)
    });
    return await result.json();
}

export const backend = {
    get: (ip = backendIp, endpoint: string, params : object): any => request("GET", ip, endpoint, params),
    post: (ip = backendIp, endpoint: string, params : object): any => request("POST", ip, endpoint, params)
}