import React, { useEffect, useState } from 'react';
import './App.css';
import tmdb from './Tmdb';

import Header from './components/Header/Header';
import Search from './components/Search/Search';
import FeaturedMovie from './components/FeaturedMovie/FeaturedMovie';
import MovieRow from './components/MovieRow/MovieRow';

//import Login from
//import More from


export default function App() {

  const [ movieList, setMovieList ] = useState([]);
  const [ featuredData, setFeaturedData ] = useState(null);
  const [ yellowHeader, setYellowHeader ] = useState(false);
  const [ colorHeader, setColorHeader ] = useState(false);

  //Pagar as informacoes da lista

  useEffect(() => {
    const loadAll = async () => {
      
      // Pagando a lista total  
      
      let list = await tmdb.getHomeList();
      setMovieList(list);
      //console.log(list)

      //Pegando o filme em destaque (Featured)
      
      let originals = list.filter(i=>i.slug === 'toprated');
      let randomChosen = Math.floor(Math.random() * (originals[0].items.results.length - 1));
      let chosen = originals[0].items.results[randomChosen];
      let chosenInfo = await tmdb.getMovieInfo(chosen.id, 'movie');

      setFeaturedData(chosenInfo);
      //console.log(chosenInfo)
    }

    loadAll();
  }, []);

  //Modificar ao descer da tela 

  useEffect(()=>{
    const scrollListener = () =>{
      if(window.scrollY > 10){
        setYellowHeader(true);
        setColorHeader(true);
      } else {
        setYellowHeader(false);
        setColorHeader(false);
      }
    }
    window.addEventListener('scroll', scrollListener);

    return () => {
      window.removeEventListener('scroll', scrollListener);
    }

  }, []);

  return (
  
    <div className='page'>

      <Header yellow={yellowHeader} color={colorHeader}/>

      <Search/>

      {featuredData &&
        <FeaturedMovie item={featuredData}/>
      }

      <section className='list'>
        {movieList.map((item, key)=>(
          <MovieRow key={key} title={item.title} items={item.items}/>
        ))}
      </section>

        

      {movieList <= 0 &&
        <div className='loading'>
          <img src='image/loading.gif' alt='Loading'/>
        </div>
      }
    </div>
  );
}

