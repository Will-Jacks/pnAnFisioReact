import { createContext, useContext, useEffect, useState } from "react";

const RenderFilteredBooksContext = createContext();

const useRenderFilteredBooksContext = () => {
    return useContext(RenderFilteredBooksContext);
}


const RenderFilteredBooksProvider = ({ children }) => {
    const [filteredBooks, setFilteredBooks] = useState([]);
    
    return (
        <RenderFilteredBooksContext.Provider value={{filteredBooks, setFilteredBooks}}>
            {children}
        </RenderFilteredBooksContext.Provider>
    )
}

export { RenderFilteredBooksProvider, useRenderFilteredBooksContext };