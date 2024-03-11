const dawidBackend: string = "156.17.72.125:3001";
const martinBackend: string = "156.17.72.12:3000";

export let searchResult;

export function setSearchResult(val) {
    searchResult = val;
}

export const backend = {
    get: async <Type>(endpoint: string, backend: string, params: object = {}): Promise<Type> => {
        const url = new URL(`http://${backend == "dawid" ? dawidBackend : martinBackend}/${endpoint}${backend != "dawid" ? ".php" : ""}`);
        url.search = new URLSearchParams(params).toString();
        const result = await fetch(url.toString());
        return await result.json();
    },
    post: async <Type>(endpoint: string, backend: string, params: object = {}): Promise<Type> => {
        const result = await fetch(`http://${backend == "dawid" ? dawidBackend : martinBackend}/${endpoint}${backend != "dawid" ? ".php" : ""}`, {
            method: "POST",
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(params)
        });
        return await result.json();
    }
}

export const cookies = {
    get: (key: string) => {
        let cname = key + '=';
        let decoded_cookie = decodeURIComponent(document.cookie);
        let ca = decoded_cookie.split(';');
        for (let i = 0; i < ca.length; i++) {
            let c = ca[i];
            while (c.charAt(0) == ' ') {
                c = c.substring(1);
            }
            if (c.indexOf(cname) == 0) {
                return c.substring(cname.length, c.length);
            }
        }
        return undefined;
    },
    set: (key: string, value: string) => {
        document.cookie = `${key}=${value};`;
    },
    delete: (key: string) => {
        document.cookie = `${key}=;expires=Thu, 01 Jan 1970 00:00:00 GMT`;
    }
}

export const assets = {
    getAssetUrl: (filepath: string) => `/src/lib/assets/${filepath}`
}

export const loginutil = {
    login: (isCompany: boolean, authkey: string) => {
        cookies.set("authkey", authkey);
        cookies.set("isCompany", isCompany);
    },
    logout: () => {
        cookies.delete("authkey");
        cookies.delete("isCompany");
    }
}