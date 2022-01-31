import React from 'react';
import './FeaturedMovie.css';

// eslint-disable-next-line import/no-anonymous-default-export
export default ({item}) => {
    // Para pegar o ano do titilo
    let releaseDate = new Date (item.release_date);

    //Para pegar o gênero do título 
    let genres =[];
    for (let i in item.genres){
        genres.push( item.genres[i].name);
    }

    //Para limitar a quantidade de caracteres da descricao do título
    let description = item.overview;
    if(description.length > 250){
        description = description.substring(0 , 250) + '...';
    }
    
    return (
        <section className='featured' style={{
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundImage:`url(https://image.tmdb.org/t/p/original${item.backdrop_path})`

        }}>
            <div className='featured--vertical'>
                <div className='featured--hotizontal'>
                    <div className='featured--title'>
                        Destaques da semana:
                    </div>
                    <div className='featured--name'>
                        {item.original_title}
                    </div>
                    <div className='featured--info'>
                        <div className='featured--points'>{item.vote_average} Pontos </div>
                        <div className='featured--year'>{releaseDate.getFullYear()}</div>
                        {/*<div className='featured--seasons'>{item.number_of_seasons} Temporada{item.number_of_seasons !== 1 ? 's' : ''}</div>*/}
                    </div>
                    <div className='featured--description'>{description}</div>
                    <div className='featured--buttons'>
                        <a href={`/watch/${item.id}`} className='featured--buttons1'> ▶ Trailer</a>
                        <a href={`/list/add/${item.id}`} className='featured--buttons2'> + Adicionar a Lista</a>
                        <a href={`/list/add/${item.id}`} className='featured--buttons3'> + Adicionar aos Favoritos</a>
                        <a href={`/list/add/${item.id}`} className='featured--buttons4'> + Informacoes</a>
                        
                    </div>
                    <div className='featured--genres'><strong>Gêneros: </strong>{ genres.join(', ')}</div>


                </div>       
            </div>
        </section>
    );
}
