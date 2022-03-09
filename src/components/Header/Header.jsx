import React, {useState} from "react";
import './Header.css';


import { Link } from "react-router-dom";



import FavoriteIcon from '@mui/icons-material/Favorite';
import ReadMoreIcon from '@mui/icons-material/ReadMore';



// eslint-disable-next-line import/no-anonymous-default-export
export default function Header ({yellow, color, props}) {

    const [search, setSearch] = useState("");

    const name = 'Joe Doe'
    const x = true

    /*function handleSearch(e){
        setSearch(e.target.value)

    }*/
    return(
        <header className={yellow ? 'yellow' : ''}>

            <div className="header">
                {/*LOGO*/}
                <div className="header--logo">
                    <a href="/">
                        <img src="image/butteresaltyellow.png" alt="butteresaltyellow"/>
                    </a>
                </div>

                {/*MENU*/}
                <div className="header--options">
                    <div className="header--film">
                        <a className={color ? 'color' : ''}>Filmes</a>
                        <div  className="header--dropdown">
                            <Link to="/filmes" ><p>Populares</p></Link>
                            <Link to="/filmes" ><p>Em Breve</p></Link>
                            <Link to="/filmes" ><p>Melhores</p></Link>
                        </div>
                    </div>

                    <div className="header--tv">    
                        <a className={color ? 'color' : ''}>Séries</a>
                        <div  className="header--dropdown">
                            <Link to="/series" ><p>Populares</p></Link>
                            <Link to="/series" ><p>Em Breve</p></Link>
                            <Link to="/series" ><p>Melhores</p></Link>
                        </div>
                    </div>

                    <div className="header--actor">
                        <nav>
                            <Link to="/Atores" className={color ? 'color' : ''}>
                               <p>Atores</p>
                            </Link>
                        </nav>
                    </div>
                    <div className="header--director">
                        <nav>
                            <Link to="/Diretores" className={color ? 'color' : ''}>
                               <p>Diretores</p>
                            </Link>
                        </nav>
                    </div>
                </div>

                {/*PESQUISA SÓ O ICON, ABRIR POPUP DE PESQUISA, CLIQUE FORA CANCELA*/}
                <div className="header--search">
                        <nav>
                            <Link to="/Séries" className={color ? 'color' : ''}>
                               <p>Fake</p>
                            </Link>
                        </nav>
                    </div>
                {/*USER*/}
                
                <div className="header--user">
                    <Link to="Login" className={color ? 'color' : ''}>
                        <span>Olá, {x ? name : 'faça login!'}</span>
                        <img src="image/user.png" alt="User"/>   
                    </Link>
                </div>
            </div>                  
        </header>        
    );
}
