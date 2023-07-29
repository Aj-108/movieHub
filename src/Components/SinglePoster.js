import React from 'react'
import { useNavigate } from 'react-router-dom';

import './SinglePoster.css' ;


function SinglePoster({name,poster,id,isLoading,type}) {

  const navigate = useNavigate() ;

  // if(isLoading){
  //   <ShimmerEffect shape='rectangle'/>
  // }


  return (
    <div className='poster' onClick={() => navigate(`/playWindow/${id}/${type}`)}>
        <img 
          src={poster} 
          alt={name} 
          className='poster__image' 
        />
        <h2 className='row__movieName'> {name }</h2>
    </div>

  )
}

export default SinglePoster