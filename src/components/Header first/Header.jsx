import React, {useState} from "react";
import './Header.css';


import { Link } from "react-router-dom";

import Button from '../Button/Button';

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

            <div className="header--1">

                <div className="header--logo">
                    <a href="/">
                        <img src="image/butteresaltyellow.png" alt="butteresaltyellow"/>
                    </a>
                </div>

                <form action="" className="header--ask">
                    <input 
                        className="header--form" 
                        type="text" 
                        name="search" 
                        id="search" 
                        onChange={(e)=> setSearch(e.target.value)}
                    />
                    <Button/> 
                </form>   
                
                <div className="header--user">
                    <Link to="Login" className={color ? 'color' : ''}>
                        <img src="image/user.png" alt="User"/>
                        <span>Olá, {x ? name : 'faça login!'}</span>
                    </Link>
                 {/*Depois deletar essa tag*/} */}   <Link to="SignUp" className={color ? 'color' : ''}>
                        <span>Cadastro, {x ? name : 'faça login!'}</span>
                    </Link>
                </div>
            </div>
            
            <div className="header--2">

                <div className="header--home">
                    <div className= "header--homePage">
                        <nav>
                            <Link to="/" className={color ? 'color' : ''}>
                                <p>Home</p>
                            </Link>
                        </nav>
                    </div>
                    <div className= "header--about">
                        <nav>
                            <Link to="/Sobre" className={color ? 'color' : ''}>
                                <p>Sobre nós</p>
                            </Link>
                        </nav>
                    </div>
                    <div className= "header--help">
                        <nav>
                            <Link to="/Sobre" className={color ? 'color' : ''}>
                                <p>Ajuda</p>
                            </Link>
                        </nav>
                    </div>
                </div>
                <div className="header--options">
                    <div className="header--film">
                        <nav>
                            <Link to="Filmes" className={color ? 'color' : ''}>
                               <p>Filmes</p>
                            </Link>
                        </nav>
                    </div>
                    <div className="header--tv">
                        <nav>
                            <Link to="/Séries" className={color ? 'color' : ''}>
                               <p>Séries</p>
                            </Link>
                        </nav>
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

                <div className="header--personal">
                    <div className="header--favorite">
                        <nav>
                            <Link to="/Favoritos" className={color ? 'color' : ''}>
                               <p><FavoriteIcon style={{fontsize: 50}}/></p>
                            </Link>
                        </nav>
                    </div>
                    <div className="header--myList">
                        <nav>
                            <Link to="/MinhaLista" className={color ? 'color' : ''}>
                               <p><ReadMoreIcon style={{fontsize:50}}/></p>
                            </Link>
                        </nav>
                    </div>
                </div>
                
            </div>      
        </header>        
    );
}
