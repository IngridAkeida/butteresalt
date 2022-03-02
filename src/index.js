import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';

import Home from './Pages/Homepageajustar/Home';
import Sobre from './Pages/Sobre/Sobre';
import Filmes from './Pages/Filmes/Filmes';
import Series from './Pages/Series/Series';
import Atores from './Pages/Atores/Atores';
import Diretores from './Pages/Diretores/Diretores';
import Favoritos from './Pages/Favoritos/Favoritos';
import MinhaLista from './Pages/Lista/Lista';
import MaisInformacoes from './Pages/MaisInformacoes/MaisInformacoes';
import Login from './Pages/Login/Login';


import {
    BrowserRouter,
    Routes,
    Route
} from "react-router-dom";

ReactDOM.render(
    <>
    <BrowserRouter>
        <Header/>
        <Routes>
            <Route path="/" element={<App/>}/>
            <Route path="home" element={<Home/>}/>
            <Route path="sobre" element={<Sobre/>}/>
            <Route path="filmes" element={<Filmes/>}/>
            <Route path="séries" element={<Series/>}/>
            <Route path="atores" element={<Atores/>}/>
            <Route path="diretores" element={<Diretores/>}/>
            <Route path="favoritos" element={<Favoritos/>}/>
            <Route path="minhalista" element={<MinhaLista/>}/>
            <Route path="maisinformacoes" element={<MaisInformacoes/>}/>
            <Route path="Login" element={<Login/>}/>          
        </Routes>
        <Footer/>
    </BrowserRouter>
    </>,

document.getElementById('root')
);


