import { useState } from "react";
import './header.css';
import { useSearchContext } from "../../Context/SearchContext";


function Header() {
    const [inputSearchField, setInputSearchField] = useState('');
    
    const { setSearchContent } = useSearchContext();

    function handleSearch(e) {
        e.preventDefault();
        setSearchContent(inputSearchField); // Atualiza o state para mandar pra o search.js
        console.log("submetido!");
    }

    return (
        <header className="main-header">
            <div>
                <h2>Logo</h2>
            </div>

            <nav className="navbar">
                <div>
                    <a href="#">Home</a>
                    <a href="#">Livros Sanar</a>
                    <a href="#">Conteúdo</a>
                    <a href="#">Resumos</a>
                    <a href="#">Livros Amazon</a>
                    <a href="#">Promoções</a>
                </div>
            </nav>

            <search>
                <form onSubmit={handleSearch}>
                    <input
                        type="search"
                        name="search"
                        id=""
                        placeholder="Pesquise resumos, livros"
                        onChange={(e)=> setInputSearchField(e.target.value)}
                        /* Posso passar os parâmetros da pesquisa via props pra outro componente lidar */
                    />
                    <button type="submit">Pesquisar</button>
                </form>
            </search>

        </header>
    )
}

export default Header;