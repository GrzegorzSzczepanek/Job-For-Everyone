const backendIp = "192.168.1.13";

export const backend = {
    get: async (endpoint: string, params : object): Promise<any> => {
        const result = await fetch(`http://${backendIp}:3000/${endpoint}`, params);
        return await result.json();
    },
    post: async (endpoint: string, params : object): Promise<any> => {
        const result = await fetch(`http://${backendIp}:3000/${endpoint}`, {
            method: "POST",
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(params)
        });
        return await result.json();
    },
}

export const cookies = {
    set: (key: string, value: string) => {

    }
}