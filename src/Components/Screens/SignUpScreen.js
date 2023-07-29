import React, { useRef, useState } from 'react';
import './SignUpScreen.css';
import { auth } from '../../firebase';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { login } from '../../features/userSlice';
import { addDoc, collection } from 'firebase/firestore';

function SignUpScreen() {

  
  const [userEmail,setEmail] = useState('') ;
  const [userPassword,setPassword] = useState('') ;
  const [signup,setSignup] = useState(true) ;
  const [fname,setFname] = useState('') ;
  const [lname,setLname] = useState('') ;

  const dispatch = useDispatch() ;


  const register = (e) =>{
    e.preventDefault() ;
    let fullName = fname +" "+ lname ;
    createUserWithEmailAndPassword(auth,userEmail,userPassword)
      .then((userAuth) => {
        dispatch(login({
          email : userEmail,
          displayName :  fullName,
        }))
      })
      .catch((err) => {
        console.log("DisplayName value "+fullName );
        console.log(userEmail) ;
        alert(err.message)
        console.log('Error in registering ')
      })



  }

  const signIn = (e) => {
    e.preventDefault() ;
    signInWithEmailAndPassword(auth,userEmail,userPassword)
     .then((userAuth)=> {
        dispatch(login({
          email : userEmail ,
          // displayName : fname + lname ,
        }
        ))
     })
     .catch((err) => {
        alert(err.message) ;
        console.log('error in signing in ')
     })
  }


  return (
    <div className='signupScreen'>
          {/* <form> */}
          {signup?(
            <form onSubmit={signIn}>
            <h1>Log In</h1>
            <div className="signupScreen__inputs">
              <label htmlFor="email">Email Address </label>
              <input type="email" placeholder='Email' name="email" onChange={(e) => setEmail(e.target.value)}/>
            </div>
            <div className="signupScreen__inputs">
              <label htmlFor="password">Password </label>
              <input type="password" placeholder='Password' onChange={(e) => setPassword(e.target.value)} name='password'/>
            </div>
            <button type='submit'> Sign In</button>

            <h4>
              <span className='signupScreen__gray'>New to Netflix? </span>
              <span className='signupScreen__link' onClick={()=>setSignup(false) }>  Sign Up now </span>
              </h4>
            </form>
          )
          :(
            <form onSubmit={register}>
            <h1>Sign Up</h1>
            <div className="signupScreen__inputs">
              <div className="input__name">
                <div className="inputName__first">
                  <label htmlFor="fname">First Name </label>
                  <input type="text" placeholder='First Name' name="fname" onChange={(e) => setFname(e.target.value)}/>
                </div>
                <div className="inputName__second">
                  <label htmlFor="lname">Last Name </label>
                  <input type="text" placeholder='Last Name' name="lname" onChange={(e) => setLname(e.target.value)}/>
                </div>
              </div>
            </div>
            <div className="signupScreen__inputs">
              <label htmlFor="email">Email Address </label>
              <input type="email" placeholder='Email' name="email" onChange={(e) => setEmail(e.target.value)}/>
            </div>
            <div className="signupScreen__inputs">
              <label htmlFor="password">Password </label>
              <input type="password" placeholder='Password' onChange={(e) => setPassword(e.target.value)} name='password'/>
            </div>
            <button type='submit'> Sign Up</button>

            <h4>
              <span className='signupScreen__gray'>Already have an account? </span>
              <span className='signupScreen__link' onClick={()=>setSignup(true) }>  Sign In now </span>
              </h4>

            </form>
          )}
          {/* </form> */}
    </div>
  )
}

export default SignUpScreen

