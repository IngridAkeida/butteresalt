import React from "react"
import './Footer.css'

export default function Footer () {


    return(
        <div className="bla">
            
            <div classname="mapaSite">
                <h4>Mapa do Site</h4>
                <p><a href="quemsomos.html #quemsomos">Sobre Nós</a></p>
                <p><a href="quemsomos.html #ajuda">Suporte</a></p>
                <p><a href="quemsomos.html #sobrefrete">Sobre Frete</a></p>
                <p><a href="quemsomos.html #pagamentos">Pagamentos</a></p>
                <p><a href="ofertas.html #cartaopresente">Cartão de Presente</a></p>
                <p><a href="quemsomos.html #ajuda">Ajuda</a></p>
            </div>
                    
            <div>
                <h4>Informações:</h4>
                <p><i class="fa fa-fw fa-map-marker"></i>MLH LTDA</p>
                <p><i class="fa fa-fw fa-phone"></i> (82) 99696-9696</p>
                <p><i class="fa fa-fw fa-envelope"></i> mlh@gmail.com</p>
                <h4>Aceitamos:</h4>
                <p><i class="fa fa-fw fa-cc-mastercard"></i>Mastercard</p>
                <p><i class="fa fa-fw fa-credit-card"></i>Credit Card</p>
                <p><i class="fa fa-fw fa-paypal"></i>Paypal</p>
                <br/>
                <i class="fa fa-facebook-official w3-hover-opacity w3-large"></i>
                <i class="fa fa-instagram w3-hover-opacity w3-large"></i>
                <i class="fa fa-snapchat w3-hover-opacity w3-large"></i>
                <i class="fa fa-pinterest-p w3-hover-opacity w3-large"></i>
                <i class="fa fa-twitter w3-hover-opacity w3-large"></i>
                <i class="fa fa-linkedin w3-hover-opacity w3-large"></i>
            </div>
            <div className="foo">
                Todos os Direitos Reservados
                Feito com ódio no <span role="img" aria-label='Heart'>❤</span> por mim (brincadeirinha) <a href='https://ingrid-akeida.netlify.app/' target='blank' className='link'>Ingrid Sanches</a><br/>
                Projeto de estudo sem fins lucrativos<br/>
                Dados obtidos no site <a href='https://www.themoviedb.org/' target='blank' className='link'>TMDB</a>
            </div>      
        </div>
        

    );
}
