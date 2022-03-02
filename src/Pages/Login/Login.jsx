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
                <h3 className='login-text'>Login</h3>
                <form>
                    <div>
                        <label for="email">Username:</label>
                        <input className="email" type="email" name="email" id="email" placeholder="Type your username"/>
                    </div>
                    <div>
                        <label for="email">Senha:</label>
                        <input className="password" type="password" name="senha" id="senha" placeholder="Type your passaword"/>
                    </div>
                    <div>
                        <p><a href="/">Forgot your passaword?</a></p>
                    </div>
                    <div>
                        <input className="submit" type="submit" value="Login"/>
                    </div>
                </form>
                <div>
                    <div>Or Sing Up Using</div>
                    <ul>
                        <li>
                            <a href="/"></a>
                        </li>
                        <li>
                            <a href="/"></a>
                        </li>
                        <li>
                            <a href="/"></a>
                        </li>   
                    </ul>

                </div>
            </div>
        </div>

    );
}
