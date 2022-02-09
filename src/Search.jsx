import { tab } from '@testing-library/user-event/dist/tab';
import React, {Fragment, useEffect, useState} from 'react'
import tmdb from './Tmdb';

export default function busca(){
    const [series, setSeries] = useState([])

    useEffect(() => { load() }, [] )

    async function load(){
        try{
            const req = await fetch (`${API_BASE}${endpoint}`);
            const json = await req.json();
            return json;
        } catch(erro){
            console.log(erro)
        }
    }

    return (
        <Fragment>
            <div className='tabs'>
                <tab text="Lancamentos" target="lancamentos"/>

                <tab text="Sobre" target="sobre"/>
            </div>
            <div className='content'>
                {series.map((serie) => <CardSerie key={serie.id} serie={serie}/>)}

            </div>
        </Fragment>
    );

}
