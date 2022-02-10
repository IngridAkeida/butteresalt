import React, { useEffect, useState } from 'react';
import './App.css';
import tmdb from './Tmdb';
import Header from './components/Header/Header.jsx';
import FeaturedMovie from './components/FeaturedMovie/FeaturedMovie.jsx';
import MovieRow from './components/MovieRow/MovieRow.jsx';
//import Login from
//import Movie from
//import TV from
//import Actors from
//import Directors from
//import Favorites from
//import List from
//import More from
//import Search from './Search';

//import { BrowserRouter } from 'react-router-dom';


{/*function App() {
  return(
    <div classname="app">
      <Header/>
        <BrowserRouter>
          <Switch>
            <Route exact path="/" component={Lancamentos}/>
            <Route exact="/lancamentos" component={Lancamentos}/>
            <Route exact="/sobre" component={Sobre}/>
            <Route exact="/busca" component={Busca}/>
          </Switch>
        </BrowserRouter>
    </div>

  );
}*/}



// eslint-disable-next-line import/no-anonymous-default-export
export default () => {

  const [ movieList, setMovieList ] = useState([]);
  const [ featuredData, setFeaturedData ] = useState(null);
  const [ yellowHeader, setYellowHeader ] = useState(false);
  const [ colorHeader, setColorHeader ] = useState(false);


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

      {featuredData &&
        <FeaturedMovie item={featuredData}/>
      }

      <section className='list'>
        {movieList.map((item, key)=>(
          <MovieRow key={key} title={item.title} items={item.items}/>
        ))}
      </section>
      <footer>
        Feito com ódio no <span role="img" aria-label='Heart'>❤</span> por mim (brincadeirinha) <a href='https://ingrid-akeida.netlify.app/' target='blank' className='link'>Ingrid Sanches</a><br/>
        Projeto de estudo sem fins lucrativos<br/>
        Dados obtidos no site <a href='https://www.themoviedb.org/' target='blank' className='link'>TMDB</a> 

      </footer>
        {/*<Search/>*/}

      {movieList <= 0 &&
        <div className='loading'>
          <img src='https://media.wired.com/photos/592744d3f3e2356fd800bf00/master/w_2560%2Cc_limit/Netflix_LoadTime.gif' alt='Loading'/>
        </div>
      }
    </div>
  );
}
