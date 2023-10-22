import { createContext, useContext, useEffect, useState } from "react";

const SearchContext = createContext();

const useSearchContext = () => {
    return useContext(SearchContext);
}

const SearchProvider= ( { children } )=> {
    const [searchContent, setSearchContent] = useState('');
    // Conteúdo do input do Header search

    return (
        <SearchContext.Provider value={{ searchContent, setSearchContent }}>
            {children}
        </SearchContext.Provider>
    )
}

export { useSearchContext, SearchProvider }