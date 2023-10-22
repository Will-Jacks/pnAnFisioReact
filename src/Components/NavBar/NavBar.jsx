import "bootstrap/dist/css/bootstrap.min.css";
import { useState } from "react";
import { useSearchContext } from "../../Context/SearchContext";
import { Link, useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faExternalLink } from "@fortawesome/free-solid-svg-icons";

const NavBar = () => {
    const [inputSearchField, setInputSearchField] = useState('');
    const navigate = useNavigate();

    const { setSearchContent } = useSearchContext();

    function handleSearch(e) {
        e.preventDefault();
        setSearchContent(inputSearchField); // Atualiza o state para mandar pra o filterBooks.js
        navigate("/books");
    }

    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-lightd" >
            <div className="container-fluid">
                <Link className="navbar-brand" to={"/"}>Ana na Fisio</Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <Link className="nav-link active" aria-current="page" to={"/"}>Home</Link>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="https://www.sanarsaude.com/?utm_term=sanar&utm_campaign=&utm_source=google&utm_medium=cpc&hsa_acc=5238750109&hsa_cam=20534043116&hsa_grp=152557088119&hsa_ad=673313044537&hsa_src=g&hsa_tgt=kwd-344286205890&hsa_kw=sanar&hsa_mt=e&hsa_net=adwords&hsa_ver=3&gclid=CjwKCAjwkNOpBhBEEiwAb3MvvXjiq4AGKrTesOhZ2BA3y1czhQDWAWT3qkozGWj9qnr5L4M_uWZSZRoCy3YQAvD_BwE" target="_blank">Livros Sanar <FontAwesomeIcon icon={faExternalLink} style={{color: "#4C4C4C", fontSize: 12}} /></a>
                        </li>
                        <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                Conteúdos
                            </a>
                            <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                                <li><Link className="dropdown-item" to={"/books"}>Todos os materiais</Link></li>
                                <li><a className="dropdown-item" href="#">Resumos</a></li>
                                <li><hr className="dropdown-divider" /></li> 
                                <li><a className="dropdown-item" href="https://www.amazon.com.br/" target="_blank">Livros Amazon <FontAwesomeIcon icon={faExternalLink} style={{color: "#4C4C4C", fontSize: 12}} /></a></li>
                            </ul>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link">Parcerias</Link>
                        </li>
                    </ul>
                    <search>
                        <form className="d-flex" onSubmit={handleSearch}>
                            <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" onChange={(e) => setInputSearchField(e.target.value)} />
                            <button className="btn btn-outline-success" type="submit">Search</button>
                        </form>
                    </search>
                </div>
            </div>
        </nav>
    )
}

export default NavBar;