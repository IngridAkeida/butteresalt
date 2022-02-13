import React, { useState } from 'react';
import './MovieCast.css'
import ArrowRight from '@mui/icons-material/ArrowRight';
import ArrowLeftIcon from '@mui/icons-material/ArrowLeft';
import PlaylistAddIcon from '@mui/icons-material/PlaylistAdd';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import BookIcon from '@mui/icons-material/Book';



// eslint-disable-next-line import/no-anonymous-default-export
export default function MovieCast ({items, item, key}) {

    return (
        <div className='movieRow'>

            <h2>Atores</h2>

            <div key={key} className='movieRow--item'>
                <img key={key} src={`https://image.tmdb.org/t/p/original${item.poster_path}`} alt={item.name}/>
                <div className='movieRow--info'>
                    <div className='movieRow--data'>
                        <div className='movieRow--title'>
                            {item.name}
                        </div>

                    </div>
                    {/*<div className='movieRow--buttons'>              
                        <a href={`/`} className='movieRow--buttons1' ><PlaylistAddIcon/></a>
                        <a href={`/`} className='movieRow--buttons2' ><FavoriteBorderIcon/></a>
                        <a href={`/`} className='movieRow--buttons3' ><BookIcon/></a>                    
                    </div>*/}
                </div>
            </div>
            
        </div>

    );
}