import React, { useState, useEffect } from 'react';
import './MovieRow.css'
import { Link } from "react-router-dom";


import ArrowRight from '@mui/icons-material/ArrowRight';
import ArrowLeftIcon from '@mui/icons-material/ArrowLeft';
import PlaylistAddIcon from '@mui/icons-material/PlaylistAdd';
import PlaylistAddCheckIcon from '@mui/icons-material/PlaylistAddCheck';
import FavoriteIcon from '@mui/icons-material/Favorite';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import BookIcon from '@mui/icons-material/Book';


// eslint-disable-next-line import/no-anonymous-default-export
export default ({title, items}) => {


    // funcionalidade das setas 
    const [scrollX, setScrollX] = useState(0);

    const handleLeftArrow = () => {
        let x = scrollX + Math.round(window.innerWidth/2);
        if(x > 0) {
            x = 0;
        }
        setScrollX(x);

    }
    const handleRightArrow = () => {
        let x = scrollX - Math.round(window.innerWidth/2);
        let listW = items.results.length * 230;

        if((window.innerWidth - listW) > x){
            x = (window.innerWidth - listW) - 40;
        }
        setScrollX(x);
    }
    

    return (
        <div className='movieRow'>

            <h2>{title}</h2>

            <div className='movieRow--left' onClick={handleLeftArrow}>
                <ArrowLeftIcon style={{fontSize:80}}/>
            </div>

            <div className='movieRow--right' onClick={handleRightArrow}>
                <ArrowRight style={{fontSize:80}}/>
            </div>

            <div className='movieRow--listarea'>
                <div className='movieRow--list' style={{
                    marginLeft: scrollX,
                    width: items.results.length * 230
                }}>
                    {items.results.length > 0 && items.results.map((item, key)=> {

                        let bigTitle = (item.title || item.name);
                        let bigTitleStyles = {};
                        if(bigTitle.length > 25){
                            bigTitleStyles = {paddingTop: '30'};
                        }

                        let firstDate = (item.first_air_date || item.release_date);
                        let date = new Date (firstDate);
                        let year = date.getFullYear();

                        //Para pegar o gênero do título 
                        let genres =[];
                        for (let i in item.genre_ids){
                            genres.push( item.genre_ids[i].name);
                        }

                        //console.log(item);

                        let points = item.vote_average;

                        //Botões
                        const [add, setAdd] = useState(false);
                        const [fav, setFav] = useState(false);

                        //Funcoes 
                        const addOnClick = () =>{
                            setAdd(!add)
                        }
                        const favOnClick = () =>{
                            setFav(!fav)
                        }
                       
                        return (                
                        <div key={key} className='movieRow--item'>
                            <img key={key} src={`https://image.tmdb.org/t/p/original${item.poster_path}`} alt={bigTitle}/>
                            <div className='movieRow--info'>
                                <div className='movieRow--data' style={bigTitleStyles}>
                                    <div className='movieRow--title'>
                                        {bigTitle}
                                    </div>              
                                    {
                                        points > 0 ? (
                                            <div className='movieRow--point'>{points} Ponto
                                                {points > 1 ? 's' : ''}
                                            </div>
                                        ) : null
                                    }  
                                    <div className='movieRow--year'>{year}</div>
                                </div>
                                <div className='movieRow--buttons'>              
                                    <button onClick={addOnClick} href={`/`} className='movieRow--buttons1' >
                                        {
                                            add === true ? (
                                                <PlaylistAddCheckIcon/>
                                            ) : (
                                                <PlaylistAddIcon/>
                                            )
                                        }                                        
                                    </button>
                                    <button onClick={favOnClick} href={`/`} className='movieRow--buttons2' >
                                        {
                                            fav === true ? (
                                                <FavoriteIcon/>
                                            ) : (
                                                <FavoriteBorderIcon/>
                                            )
                                        } 
                                    </button>
                                    <button href={`/watch/${item.id}`} className='movieRow--buttons3'>
                                        
                                        <BookIcon/>
                                        
                                    </button>

                                </div>
                                <div className='movieRow--genres'>Gêneros: {genres.join(', ')}</div>
                            </div>*/}
                        </div>
                    )
                    })}
                </div>    
                
            </div>
            
        </div>

    );
}