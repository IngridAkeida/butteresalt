import React from 'react';
import './Login.css';

export default function Login () {
    return(
        <div>
            <div className="container">
                <img src="image/user.png" alt="imagem perfil"/>
                <form>
                    <div>
                        <label for="email">Digite seu E-mail:</label>
                        <input classname="email" type="email" name="email" id="email" placeholder="exemplo@email.com"/>
                    </div>
                    <div>
                        <label for="email">Senha:</label>
                        <input classname="password" type="password" name="senha" id="senha" placeholder="Digite sua senha aqui"/>
                    </div>
                    <div>
                        <input classname="submit" type="submit" value="Entrar"/>
                    </div>
                </form>
            </div>
        </div>

    );
}
