import React from "react"
import './Footer.css'


import StorefrontIcon from '@mui/icons-material/Storefront';
import PhoneIcon from '@mui/icons-material/Phone';
import AlternateEmailIcon from '@mui/icons-material/AlternateEmail';

import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import PinterestIcon from '@mui/icons-material/Pinterest';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

export default function Footer () {


    return(
        <div className="footer">
            <div className="footer-Flex">
                <div classname="footer--Contact">
                    <h4>Aqui será um formulário</h4>
                    <p>Contato</p>
                    <p>Dúvidas? Pergunta pra gente!</p>
                    <p>Nome</p><p>Email</p><p>Título</p>
                    <p>Eu queria muito saber si...</p>   
                </div>

                <div classname="footer--Map">
                    <h4>Mapa do Site</h4>
                    <p><a href="quemsomos.html #quemsomos">Sobre Nós</a></p>
                    <p><a href="quemsomos.html #ajuda">Suporte</a></p>
                    <p><a href="quemsomos.html #sobrefrete">Sobre Frete</a></p>
                    <p><a href="quemsomos.html #pagamentos">Pagamentos</a></p>
                    <p><a href="ofertas.html #cartaopresente">Cartão de Presente</a></p>
                    <p><a href="quemsomos.html #ajuda">Ajuda</a></p>
                </div>
                        
                <div classname="footer--Information">
                    <h4>Informações:</h4>
                    <p><i classname="marker"></i> <StorefrontIcon/> Butter&Salt LTDA</p>
                    <p><i classname="phone"></i> <PhoneIcon/> (82) 99696-9696</p>
                    <p><i classname="email"></i> <AlternateEmailIcon/>butteresalt@gmail.com</p>
                    <br/>
                    <a href="quemsomos.html #quemsomos" classname="facebook"> <FacebookIcon/></a>
                    <a href="quemsomos.html #quemsomos" classname="instagram"><InstagramIcon/></a>
                    <a href="quemsomos.html #quemsomos" classname="whatsapp"><WhatsAppIcon/></a>
                    <a href="quemsomos.html #quemsomos" classname="pinterest"><PinterestIcon/></a>
                    <a href="quemsomos.html #quemsomos" classname="twitter"><TwitterIcon/></a>
                    <a href="quemsomos.html #quemsomos" classname="linkedin"><LinkedInIcon/></a>
                </div>
            </div>

            <div className="footer--Footer">
                As <strong>informações de contato</strong> são dados fictícios<br/>
                Todos os Direitos Reservados<br/>
                Feito com ódio no <span role="img" aria-label='Heart'>❤</span> por mim (brincadeirinha) <a href='https://ingrid-akeida.netlify.app/' target='blank' className='link'>Ingrid Sanches</a><br/>
                Projeto de estudo sem fins lucrativos<br/>
                Dados obtidos no site <a href='https://www.themoviedb.org/' target='blank' className='link'>TMDB</a>
            </div>      
        </div>
        

    );
}
