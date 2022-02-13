import React, { useEffect, useState } from 'react';
import './Atores.css';
import tmdb from '../../Tmdb';

import MovieCast from '../SpecialComponents/MovieCast/MovieCast';

export default function Atores () {

  const [ movieList, setMovieList ] = useState([]);


  useEffect(() => {
    const loadAll = async () => {
      
      // Pagando a lista total  
      
      let ators = await tmdb.getHomeList();
      setMovieList(ators);
      //console.log(list)
    }

    loadAll();
  }, []);
    
 {/* const [ actorsList, setActorsList ] = useState([]);


  useEffect(() => {
    const loadAll = async () => {
      
      // Pagando a lista total de atores 

      let actors = await tmdb.getMovieCredts();
      setActorsList(actors);
      console.log(actors)

      let directors = []; 
      for (let i in movie.crew){
        if (i["job"] === "Director"){ 
          directors.append(i)
          console.log(i)
        } 
      }
      
     
      
    }

    loadAll();
  }, []);*/}

    return(
        <div>

          <section className='actors'>
            {movieList.map((item, key)=>(
              <MovieCast key={key} title={item.title} items={item.items}/>
            ))}
          </section>

        </div>

    );
}
