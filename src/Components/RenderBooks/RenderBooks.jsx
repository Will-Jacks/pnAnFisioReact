import FilterBooks from "../FilterBooks/FilterBooks.jsx";

import { useRenderFilteredBooksContext } from "../../Context/RenderFilteredBooksContext.jsx";
import { useSearchContext } from "../../Context/SearchContext.jsx";

const RenderBooks = () => {
    const { filteredBooks } = useRenderFilteredBooksContext();
    const { searchContent } = useSearchContext();

    return (
        <div>
            { // Se houver searchContent, renderiza o h3
                searchContent&& (
                    <h3>Resultado da busca por: "{searchContent}"</h3>
                )
            }
            <FilterBooks /> {/* Esse componente realiza a filtragem dos livros */}
            {filteredBooks.map((item, index) => {
                return (
                    //Renderizando os livros filtrados pelo componente
                    <div key={index}>
                        <p>{item.name}</p>
                        <p>{item.price}</p>
                    </div>
                )
            })}
        </div>
    );
}

export default RenderBooks;