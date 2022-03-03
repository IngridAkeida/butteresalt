import React from 'react';
import './SignUp.css';

import PersonIcon from '@mui/icons-material/Person';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import LockIcon from '@mui/icons-material/Lock';
import FacebookIcon from '@mui/icons-material/Facebook';
import GoogleIcon from '@mui/icons-material/Google';
import AppleIcon from '@mui/icons-material/Apple';
import Apple from '@mui/icons-material/Apple';

export default function SignUp () {
    return(
        <div className='signUp'>
            <div className="container1">

                <h3 className='signUp-text'>Sign Up</h3>

                <div className='signUp-others'>
                    <div>With your social network</div>
                    <ul className='signUp-signup'>
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

                    <div>or</div>   
                </div>

                <form>
                    <div>
                        <label for="name">Username:</label>
                        <input className="email" type="text" name="name" id="name" placeholder="Type your username"/>
                    </div>
                    <div>
                        <label for="email">Email:</label>
                        <input className="email" type="email" name="email" id="email" placeholder="Type your username"/>
                    </div>
                    <div>
                        <label for="email">Senha:</label>
                        <input className="password" type="password" name="senha" id="senha" placeholder="Type your passaword"/>
                    </div>
                    <div>
                        <input className="submit" type="submit" value="Login"/>
                    </div>
                </form>
                <div>
                    <div className='signIn-link'>
                        <p>Already have an Account?</p><a href="/">Sign in</a>
                    </div>
                </div> 
            </div>
        </div>

    );
}
