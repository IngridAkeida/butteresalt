import React from "react";
import './Header.css';


// eslint-disable-next-line import/no-anonymous-default-export
export default ({yellow, color}) => {
    return(
        <header className={yellow ? 'yellow' : ''}>
            <div className="header--logo">
                <a href="/">
                    <img src="image/butteresaltyellow.png" alt="butteresaltyellow"/>
                </a>

            </div>

            <div className="header--bar">
                <div className="header--options">
                    <div className="header--film">
                        <a className={color ? 'color' : ''} href="/">
                            <p>Filmes</p>
                        </a>
                    </div>
                    <div className="header--tv">
                        <a className={color ? 'color' : ''} href="/">
                            <p>Séries</p>
                        </a>
                    </div>
                    <div className="header--actor">
                        <a className={color ? 'color' : ''} href="/">
                            <p>Atores</p>
                        </a>
                    </div>
                    <div className="header--director">
                        <a className={color ? 'color' : ''} href="/">
                            <p>Diretores</p>
                        </a>
                    </div>
                </div>
                <div className="header--save">
                    <div className="header--ask">
                        <a className={color ? 'color' : ''} href="/">
                            <p>Pesquisar</p>
                        </a>
                    </div>
                    <div className="header--favorite">
                        <a className={color ? 'color' : ''} href="/">
                            <p>Favoritos</p>
                        </a>
                    </div>
                    <div className="header--myList">
                        <a className={color ? 'color' : ''} href="/">
                            <p>Minha Lista</p>
                        </a>
                    </div>
                </div>
            </div>
            
            <div className="header--user">
            <a href="/">
                    <img src="image/user.png" alt="User"/>
                </a>
            </div>
        </header>
        
    );
}

