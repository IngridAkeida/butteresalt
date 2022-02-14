import React from 'react';
import './Filmes.css';

import PlaylistAddIcon from '@mui/icons-material/PlaylistAdd';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import BookIcon from '@mui/icons-material/Book';

export default function Filmes () {
    return(
        <div className='movie--item'>
            <div className='movieRow--info'>
                <div className='movieRow--data'>
                    <div className='movieRow--title'>
                        <p>Título</p>
                    </div>               
                </div>
                <div className='movieRow--buttons'>              
                    <a href={`/`} className='movieRow--buttons1' ><PlaylistAddIcon/></a>
                    <a href={`/`} className='movieRow--buttons2' ><FavoriteBorderIcon/></a>
                    <a href={`/`} className='movieRow--buttons3' ><BookIcon/></a>                    
                </div>
            </div>
        </div>

    );
}
