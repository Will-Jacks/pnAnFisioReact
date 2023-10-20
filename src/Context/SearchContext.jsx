import { createContext, useContext, useState } from "react";

const SearchContext = createContext();

function useSearchContext() {
    return useContext(SearchContext);
}

function SearchProvider({ children }) {
    const [searchContent, setSearchContent] = useState(''); 
    // Conteúdo do input do Header search

    return (
        <SearchContext.Provider value={{searchContent, setSearchContent}}>
            {children}
        </SearchContext.Provider>
    )
}

export { useSearchContext, SearchProvider}