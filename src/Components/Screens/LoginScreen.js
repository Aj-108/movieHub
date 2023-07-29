import React, { useState } from 'react'
import './LoginScreen.css';
import SignUpScreen from './SignUpScreen';

function LoginScreen() {

    const [signin,setSignin] = useState(false);

  return (
    <div className='loginScreen'>
        <div className="loginScreen__background">
            <div className="loginScreen__logo">MOVIE HUB</div>
             <button className="loginScreen__button" onClick={() => setSignin(true)}>Sign in</button>

             <div className="loginScreen__gradient"/>
        </div>
            <div className="loginScreen__body">
                { signin?(
                    <SignUpScreen />
                ) : (
                    <>
                        <h1>Movie Time!!</h1>
                        <h2>Watch antwhere anytime</h2>
                        <h3>
                            Ready to watch? Let's go.....
                        </h3>
                        <div className="loginScreen__input">
                            <form>
                                {/* <input type="email" placeholder="Email Address"/> */}
                                <button className="loginScreen__getStarted" 
                                        onClick={() => {setSignin(true)}}>
                                    GET STARTED
                                </button>
                            </form>
                        </div>
                    </>
                )}
                
            </div>
    </div>
  )
}

export default LoginScreen