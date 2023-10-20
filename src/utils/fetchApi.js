export async function fetchApi() {
    const url = './api/books.json';
    try{
        const response = await fetch(url);
        const data = await response.json();
        return data;
    } catch (error) {
        console.error("Error fetch API", error);
    }
}