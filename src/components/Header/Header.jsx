import React, {useState} from "react";
import './Header.css';
import SearchIcon from '@mui/icons-material/Search';
import PlaylistAddIcon from '@mui/icons-material/PlaylistAdd';
import PlaylistAddCheckIcon from '@mui/icons-material/PlaylistAddCheck';
import DeleteIcon from '@mui/icons-material/Delete';
import FavoriteIcon from '@mui/icons-material/Favorite';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import ReadMoreIcon from '@mui/icons-material/ReadMore';

{/*import {BrowserRouter, Route, Switch, Link} from 'react-router-dom'*/}


// eslint-disable-next-line import/no-anonymous-default-export
export default ({yellow, color}) => {

    const [search, setSearch] = useState("");

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
                        <button type="submit" className="searchcss"><SearchIcon/></button>
                    </form>   
                
                <div className="header--user">
                    <a className={color ? 'color' : ''}> 
                        <p><strong>Olá, faça login!</strong></p>
                        <a href="/">
                            <img src="image/user.png" alt="User"/>
                        </a>
                    </a>
                </div>
            </div>
            
            <div className="header--2">
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

                <div className="header--personal">
                    <div className="header--favorite">
                        <a className={color ? 'color' : ''} href="/">
                            <p><FavoriteIcon style={{fontsize: 50}}/></p>
                        </a>
                    </div>
                    <div className="header--myList">
                        <a className={color ? 'color' : ''} href="/">
                            <p><ReadMoreIcon style={{fontsize:50}}/></p>
                        </a>
                    </div>
                </div>
            </div>      
        </header>        
    );
}


