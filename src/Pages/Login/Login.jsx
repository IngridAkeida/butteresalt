import React from 'react';
import './Login.css';

import PersonIcon from '@mui/icons-material/Person';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import LockIcon from '@mui/icons-material/Lock';

export default function Login () {
    return(
        <div className='login'>
            <div className="container">
                <img src="image/userLogin.png" alt="imagem perfil"/>
                <form>
                    <div>
                        <label for="email">Digite seu E-mail:</label>
                        <input className="email" type="email" name="email" id="email" placeholder="exemplo@email.com"/>
                    </div>
                    <div>
                        <label for="email">Senha:</label>
                        <input className="password" type="password" name="senha" id="senha" placeholder="Digite sua senha aqui"/>
                    </div>
                    <div>
                        <input className="submit" type="submit" value="Entrar"/>
                    </div>
                </form>
            </div>
        </div>

    );
}
