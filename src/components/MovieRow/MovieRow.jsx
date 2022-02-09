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
        let listW = items.results.length * 220;

        if((window.innerWidth - listW) > x){
            x = (window.innerWidth - listW) - 60;
        }
        setScrollX(x);
    }
    //let date = new Date (item.release_date)
    //console.log(item.release_date)
    //console.log(item)

   /* let genres =[];
    for (let i in item.genres){
        genres.push( item.genres[i].name);
    }*/


    return (
        <div className='movieRow'>

            <h2>{title}</h2>

            <div className='movieRow--left' onClick={handleLeftArrow}>
                <ArrowLeftIcon style={{fontsize:50}}/>
            </div>

            <div className='movieRow--right' onClick={handleRightArrow}>
                <ArrowRight style={{fontsize:50}}/>
            </div>

            <div className='movieRow--listarea'>
                <div className='movieRow--list' style={{
                    marginLeft: scrollX,
                    width: items.results.length * 220
                }}>
                    {items.results.length > 0 && items.results.map((item, key)=> {

                        let bigTitle = (item.title || item.name);
                        let bigTitleStyles = {};
                        if(bigTitle.length > 20){
                            bigTitleStyles = {marginTop: '20px'};
                        }
                        
                        return (                
                        <div key={key} className='movieRow--item'>
                            <img key={key} src={`https://image.tmdb.org/t/p/w300${item.poster_path}`} alt={item.original_title}/>
                            <div className='movierow--info'>
                                <div className='movieRow--data'>
                                    <div className='movieRow--title' style={bigTitleStyles}>
                                        <strong>{bigTitle}</strong>
                                    </div>
                                    <div className='movieRow--point'>{item.vote_average} Pontos</div>
                                    {/*<div className='movieRow--year'>{date.getFullYear()}</div>*/}
                                </div>
                                <div className='movierow--buttons'>              
                                    <a href={`/`} className='movierow--buttons1' ><PlaylistAddIcon/></a>
                                    <a href={`/`} className='movierow--buttons2' ><FavoriteBorderIcon/></a>
                                    <a href={`/`} className='movierow--buttons3' ><BookIcon/></a>                    
                                </div>
                                <div className='movierow--genres'><strong>Gêneros: Drama</strong>{/*{genres.join(', ')}*/}</div>
                            </div>
                        </div>
                    )
                    })}
                </div>    
                
            </div>
            
        </div>

    );
}