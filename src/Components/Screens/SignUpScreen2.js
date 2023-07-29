import { createUserWithEmailAndPassword } from 'firebase/auth';
import React, { useRef } from 'react'
import { auth } from '../../firebase';

function SignUpScreen2() {

  const emailRef = useRef(null) ;
  const passwordRef = useRef(null) ;

  const register = (e) =>{
    e.preventDefault() ;
    createUserWithEmailAndPassword(auth,emailRef.current.value,passwordRef.current.value)
      .then(() => {
      })
      .catch((err) => {
        alert(err.message)
      })
  }

  return (
    <div>SignUpScreen2</div>
  )
}

export default SignUpScreen2