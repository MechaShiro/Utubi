
import '../css/login.css'

import GoBackButton from './GoBackButton'
import VisibilityButton from './VisibilityButton'



function Login({loginState , setAdminLogin , handleGoBack , username , setUsername, password , setPassword , profiles , adminProfile , getDatabase , loginBehaviour , loginMessage , handleVisibility, visibilityOn, visibilityOff , visibility}){
    
    return(
        <>
            <div>
            
                <form className="container login_container">

                    <label className="username_label" htmlFor="username"><p>Username</p></label>
                    <input className="username_input" type="text" placeholder="Enter Username" id="username" value={username} onChange={e => setUsername(e.target.value)} ></input>

                    <label className="password_label" htmlFor="password"><p>Password</p></label>
                    <div className='div_password_input'>
                        <input className="password_input" type="password" placeholder="Enter Username" id="password" value={password} onChange={e => setPassword(e.target.value)} ></input>
                        <VisibilityButton
                                    handleVisibility = {handleVisibility,
                                                        visibilityOn,
                                                        visibilityOff,
                                                        visibility
                                    }/>
                    </div>
                    
                    {loginMessage && <p>{loginMessage}</p>}
                    <div className="login_ft">
                            <button onClick={() => loginBehaviour(username , password)} type="button" className="btn_LoginBtn">Login</button> 
                            <GoBackButton 
                                handleGoBack = {handleGoBack}/>
                            
                    </div>
                    
                </form>
            </div>
        </>
    )
}

export default Login;