export async function getData(ip: string, endpoint: string): Promise<any> {
    try {
        const response = await fetch(`http://${ip}:3000/${endpoint}`);
        const data = await response.json();
        return data;
    } catch (error) {
        throw new Error(`Failed to fetch data: ${error}`);
    }
}