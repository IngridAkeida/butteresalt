import React from 'react';
import './Search.css';





// eslint-disable-next-line import/no-anonymous-default-export
export default () => {

    

    
    return (
        <section className='search'>
            <div className='search--box'>
                <div className="search--text">Aqui você pode pesquisar os seus títulos ou pessoas favoritas, e fazer sua lista personalizada!</div>
                <form action="" className="search--form">
                    <input 
                        className="search--input" 
                        type="text" 
                        name="search" 
                        id="search" 
                    />
                    
                </form> 
            </div>
        </section>
    );
}
