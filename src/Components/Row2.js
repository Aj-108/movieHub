import axios from '../axios'
import React, { useEffect, useRef, useState } from 'react'
import './Row2.css'
import SinglePoster from './SinglePoster';
import { useNavigate } from 'react-router-dom';
// import NavigateBeforeIcon from '@mui/icons-material/NavigateBefore';
// import NavigateNextIcon from '@mui/icons-material/NavigateNext';

function Row2({title,fetchUrl,type}) {

    // const [isMoved,setIsMoved] =  useState(false) ;
    const [movie,setmovie] = useState([]) ;
    const [isLoading,setIsLoading] = useState(true) ;
    const navigate = useNavigate() ;
    // const navRef = useRef(null) ;
    // const [slideNumber,setSlideNumber] = useState(0) ;

    useEffect(()=>{
        setIsLoading(true) ;
        async function fetchData (){
            const request = await axios.get(fetchUrl) ;
            setmovie(request.data.results) ;
            setIsLoading(false);
            return request ;
        }

        fetchData() ;
    },[fetchUrl])

    const base_url = "https://image.tmdb.org/t/p/original" ;


    // const clickHandler = (direction) => {
    //     setIsMoved(true) ;
    //     let distance = navRef.current.getBoundingClientRect().x ;
    //     if(direction === 'left' && slideNumber > 0){ 
    //         navRef.current.style.transform = `translateX(${distance + 230}px)` ;
    //         setSlideNumber(slideNumber-1);
    //     }
    //     if( direction === 'right' )
    //     {
    //         navRef.current.style.transform = `translateX(${distance -230}px)`
    //         setSlideNumber(slideNumber+1)
    //     }
    //     if(slideNumber === 0 ){
    //         setIsMoved(false) ;
    //     }
    //     else{
    //         setIsMoved(true) ;
    //     }
    // }

  return (
    <div className='row2'>
        <h2 className='row__titleName'>{title}</h2>
        <div className="rowTray">
            {/* <NavigateBeforeIcon className="beforeArrow" onClick={() =>clickHandler('left')} style ={ {display : !isMoved && `none`}}/> */}
            <div className="rowTray__posters">
                {isLoading? ( <span>loading ... </span>) :(<>
                
                { movie.map((m) =>(
                    <SinglePoster 
                        key={m.id}
                        name = {m.name || m.title}
                        poster = {`${base_url}${m.backdrop_path}`}
                        id = {m.id}
                        type={type}
                    />
                )
                ) }
                </>)}
            </div>
            {/* <NavigateNextIcon className='nextArrow'   onClick={() => {clickHandler('right')}}/> */}
        </div>
    </div>
  )
}

export default Row2