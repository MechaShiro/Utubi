import { useState } from 'react';
import '../css/registrationmenu.css'

import Login from './Login';
import SignUp from './SignUp';
import GoBackButton from './GoBackButton'
import CloseRgtMenus from './CloseRgtMenus';

function RegistrationMenu({
                        closeRgtMenus,
                        setLogin , 
                        showLogin ,
                        handleToggle,
                        setSignUp , 
                        showSignUp}){

        const handleLogin = () => {
                handleToggle();
                setLogin(!showLogin);
        }

        const handleSignUp = () => {
                handleToggle();
                setSignUp(!showSignUp)
        }
        

        return(
                <>
                        <div>
                                <div className="container registration_container">
                                        <CloseRgtMenus 
                                                closeRgtMenus = {closeRgtMenus}/>
                                        <div>
                                                <button onClick={handleLogin} className ="btn_login">Login</button>
                                                <button onClick={handleSignUp} className ="btn_signUp">Sign Up</button>
                                        </div>
                                </div>
                        </div>
                </>
                )
        }

export default RegistrationMenu;