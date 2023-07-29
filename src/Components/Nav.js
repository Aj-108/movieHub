import React,{useEffect, useState} from 'react'
import './Nav.css'
import {useNavigate} from 'react-router-dom' ;

function Nav() {
    const [show,handleShow] = useState(false) ;

    const navigate = useNavigate() ;

    const transitionNavBar = () => {
        if(window.scrollY > 100){
            handleShow(true) ;
        } 
        else {
            handleShow(false) ;
        }
    }

    useEffect(()=>{
        window.addEventListener('scroll',transitionNavBar) ; 
        return () => window.removeEventListener('scroll',transitionNavBar) ;
    },[])


 
  return (
    <div className={`nav ${ show && "nav__black"}`} >
        <div className="nav__contents">
                <div className="nav__logo" onClick={()=>{navigate('/')}}> MOVIE HUB </div>
            <ul className='nav__list'>
               <li onClick={()=> navigate('/')}>Home</li>
               <li onClick={() => navigate('/tv-shows')}>TV Shows </li>
               <li onClick={() => navigate('/movies')}>Movies</li>
               {/* TODO   add mylist page using database */}
               {/* TODO add playScreen or movieScreen  */}
               {/* <li>My List</li>  */}
            </ul>


                <img 
                    onClick={() => navigate('/profile')}
                    src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png"
                    alt="user avatar" 
                    className='nav__avatar'/>

        </div>
    </div>
  )
}

export default Nav