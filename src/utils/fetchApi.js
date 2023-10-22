export async function fetchApi(url) {
    try{
        const response = await fetch(url);
        const data = await response.json();
        return data;
    } catch (error) {
        console.error(`Error fetch API: ${url}`, error);
    }
}