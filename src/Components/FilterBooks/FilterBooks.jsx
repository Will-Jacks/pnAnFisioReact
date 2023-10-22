import { useEffect, useState } from "react";
import { useSearchContext } from "../../Context/SearchContext.jsx";
import { fetchApi } from "../../utils/fetchApi.js";
import { useRenderFilteredBooksContext } from "../../Context/RenderFilteredBooksContext.jsx";


function FilterBooks() {
    const { searchContent } = useSearchContext();
    const { setFilteredBooks } = useRenderFilteredBooksContext();
    const [books, setBooks] = useState();


    useEffect(() => {
        updateBooks();
    }, []);

    useEffect(() => {

        if (books) {
            const filteredData = books.filter(book => {
                return book.name.includes(searchContent.toLowerCase());
            });

            setFilteredBooks(filteredData);
        }

    }, [books, searchContent]);

    async function updateBooks() {
        const url = './api/books.json';
        const books = await fetchApi(url);
        setBooks(books);
        // Busca os dados da fetchAPI e seta eles no state books
    }

    return null;
}

export default FilterBooks;