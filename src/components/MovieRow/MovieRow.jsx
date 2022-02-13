import React, { useState } from 'react';
import './MovieRow.css'
import ArrowRight from '@mui/icons-material/ArrowRight';
import ArrowLeftIcon from '@mui/icons-material/ArrowLeft';
import PlaylistAddIcon from '@mui/icons-material/PlaylistAdd';
//import PlaylistAddCheckIcon from '@mui/icons-material/PlaylistAddCheck';
//import DeleteIcon from '@mui/icons-material/Delete';
//import FavoriteIcon from '@mui/icons-material/Favorite';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
//import ReadMoreIcon from '@mui/icons-material/ReadMore';
import BookIcon from '@mui/icons-material/Book';
//import AddIcon from '@mui/icons-material/Add';


// eslint-disable-next-line import/no-anonymous-default-export
export default ({title, items, item}) => {
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
            x = (window.innerWidth - listW) - 60;
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
                            bigTitleStyles = {marginTop: '0'};
                        }

                        let firstDate = (item.first_air_date || item.release_date);
                        let date = new Date (firstDate);

                        let genres2 =[];
                        for (let i in item.genres){
                            genres2.push( item.genres[i].name);
                        }
                        {/*console.log(items)*/}

                        
                        return (                
                        <div key={key} className='movieRow--item'>
                            <img key={key} src={`https://image.tmdb.org/t/p/original${item.poster_path}`} alt={bigTitle}/>
                            <div className='movieRow--info'>
                                <div className='movieRow--data'>
                                    <div className='movieRow--title'>
                                        {bigTitle}
                                    </div>
                                    <div className='movieRow--point'>{item.vote_average} Pontos</div>
                                    <div className='movieRow--year'>{date.getFullYear()}</div>
                                </div>
                                <div className='movieRow--buttons' style={bigTitleStyles}>              
                                    <a href={`/`} className='movieRow--buttons1' ><PlaylistAddIcon/></a>
                                    <a href={`/`} className='movieRow--buttons2' ><FavoriteBorderIcon/></a>
                                    <a href={`/`} className='movieRow--buttons3' ><BookIcon/></a>                    
                                </div>
                                <div className='movieRow--genres'>Gêneros: {genres2.join(', ')}</div>
                            </div>
                        </div>
                    )
                    })}
                </div>    
                
            </div>
            
        </div>

    );
}