import React from 'react';
import './Login.css';

import PersonIcon from '@mui/icons-material/Person';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import LockIcon from '@mui/icons-material/Lock';
import FacebookIcon from '@mui/icons-material/Facebook';
import GoogleIcon from '@mui/icons-material/Google';
import AppleIcon from '@mui/icons-material/Apple';
import Apple from '@mui/icons-material/Apple';

export default function Login () {
    return(
        <div className='login'>
            <div className="container">
                <img src="image/userLogin.png" alt="imagem perfil"/>
                <h3 className='login-text'>Login</h3>
                <form>
                    <div>
                        <label for="email">Username:</label>
                        <input className="email" type="text" name="email" id="email" placeholder="Type your username"/>
                    </div>
                    <div>
                        <label for="email">Senha:</label>
                        <input className="password" type="password" name="senha" id="senha" placeholder="Type your passaword"/>
                    </div>
                    <div className='login-forgot'>
                        <a href="/">Forgot your password?</a>
                    </div>
                    <div>
                        <input className="submit" type="submit" value="Login"/>
                    </div>
                </form>
                <div className='login-others'>
                    <div>Or Sign Up Using</div>
                    <ul className='login-signup'>
                        <li>
                            <a href="/"><GoogleIcon style={{fontSize:50}}/></a>
                        </li>   
                        <li>
                            <a href="/"><AppleIcon style={{fontSize:50}}/></a>
                        </li>
                        <li>
                            <a href="/"><FacebookIcon style={{fontSize:50}}/></a>
                        </li>
                    </ul>
                    <div className='login-link'>
                        <a href="/">Sign Up</a>
                    </div>
                    
                </div>
            </div>
        </div>

    );
}
