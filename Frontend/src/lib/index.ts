// place files you want to import through the `$lib` alias in this folder.
export async function getData(url: string): Promise<any> {
    try {
        const response = await fetch(url);
        const data = await response.json();
        return data;
    } catch (error) {
        throw new Error(`Failed to fetch data: ${error}`);
    }
}