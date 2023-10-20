import { useEffect, useState } from "react";
import { useSearchContext } from "../Context/SearchContext";
import { fetchApi } from "./fetchApi";


function Search() {
    const { searchContent } = useSearchContext();
    const [books, setBooks] = useState();
    const [filteredBooks, setFilteredBooks] = useState([]);

    useEffect(() => {
        updateBooks();
    }, []);

    useEffect(() => {

        if (books) {
            const filteredData = books.filter(book => {
                return book.name.includes(searchContent);
            });

            setFilteredBooks(filteredData);
        }

    }, [books, searchContent]);

    async function updateBooks() {
        const books = await fetchApi();
        setBooks(books);
        // Busca os dados da fetchAPI e seta eles no state books
    }

    return (
        <div>
            {filteredBooks.map((item, index) => {
                return (
                    <div key={index}>
                        <p>{item.name}</p>
                        <p>{item.price}</p>
                    </div>
                )
            })}
        </div>
    )
}

/* EU AINDA NÃO TERMINEI! ISSO NÃO DEVE SER UM COMPONENTE, NÃO DEVE RENDERIZAR NADA NO LADO DO CLIENT
ISSO TEM QUE SER EXTERNALIZADO PARA UM USECONTEXT
*/
export default Search;