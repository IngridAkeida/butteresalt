import React, {useState} from 'react';
import './FeaturedMovie.css';
import { Link } from "react-router-dom";


import PlaylistAddIcon from '@mui/icons-material/PlaylistAdd';
import PlaylistAddCheckIcon from '@mui/icons-material/PlaylistAddCheck';
import FavoriteIcon from '@mui/icons-material/Favorite';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import BookIcon from '@mui/icons-material/Book';

// eslint-disable-next-line import/no-anonymous-default-export
export default function FeaturedMovie ({item}) {

    // Para pegar o ano do titilo
    let releaseDate = new Date (item.release_date);

    //Para pegar o gênero do título 
    let genres =[];
    for (let i in item.genres){
        genres.push(item.genres[i].name);
    }
    console.log(item);


    //Para limitar a quantidade de caracteres da descricao do título
    let description = item.overview;
    if(description.length > 200){
        description = description.substring(0 , 200) + '...';
    }

    //Temporadas

    let seasons = item.number_of_seasons;

    //Botões
    const [add, setAdd] = useState(false);
    const [fav, setFav] = useState(false);

    //Funcoes dos botões
    const addOnClick = () =>{
        setAdd(!add)
    }
    const favOnClick = () =>{
        setFav(!fav)
    }
    
    return (
        <section className='featured' style={{
            
            backgroundImage:`url(https://image.tmdb.org/t/p/original${item.backdrop_path})`

        }}>
            <div className='featured--vertical'>
                <div className='featured--hotizontal'>
                    <div className='featured--title'>
                        Destaques da semana:
                    </div>
                    <div className='featured--name'>
                        {item.title}
                    </div>
                    <div className='featured--info'>
                        <div className='featured--points'>{item.vote_average} Pontos </div>
                        <div className='featured--year'>{releaseDate.getFullYear()}</div>
                        {
                            seasons > 0 ? (
                                <div className='featured--seasons'>{seasons} Temporada
                                    {seasons > 1 ? 's' : ''}
                                </div>
                            ) : null
                        } 
                    </div>
                    <div className='featured--description'>{description}</div>
                    <div className='featured--buttons'>

                        <button onClick={addOnClick} href={`/list/add/${item.id}`} className='featured--buttons1'>
                            {
                                add === true ? (
                                    <PlaylistAddCheckIcon/>
                                ) : (
                                    <PlaylistAddIcon/>
                                )
                            }                      
                        </button>
                        
                        <button onClick={favOnClick} href={`/list/add/${item.id}`} className='featured--buttons2'>
                            {
                                fav === true ? (
                                    <FavoriteIcon/>
                                ) : (
                                    <FavoriteBorderIcon/>
                                )
                            } 
                        </button>
                        
                        <button href={`/watch/${item.id}`} className='featured--buttons3'>
                            
                            <BookIcon/>
                             
                        </button>
                         
                    </div>
                    <div className='featured--genres'><strong>Gêneros: </strong>{genres.join(', ')}</div>
                </div>       
            </div>
        </section>
    );
}
