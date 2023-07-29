import React, { useEffect,useState } from 'react'
import { useParams } from 'react-router-dom'
import Nav from '../Nav'
import './PlayWindow.css'
import Footer from '../Footer' ;
import axios from '../../axios';
import Row2 from '../Row2';

function PlayWindow() {
  const base_url = "https://image.tmdb.org/t/p/original" ;
    const API_KEY = process.env.REACT_APP_API_KEY ;
    const {movieId,type} = useParams() ;
    const [movie,setMovie] = useState([]) ;
    const fetchMovieDetails =  `/${type}/${movieId}?api_key=${API_KEY}&language=en-US` ;
    const fetchSimilar = `https://api.themoviedb.org/3/${type}/${movieId}/similar?api_key=${API_KEY}`
    const fetchRecommended = `https://api.themoviedb.org/3/${type}/${movieId}/recommendations?api_key=${API_KEY}` ;
    const [isLoad,setIsLoad] = useState(false) ;
    

    useEffect(()=>{
        async function fetchData() {
            await axios.get(fetchMovieDetails)
            .then((req) => {
              setMovie(req.data) ;
              setIsLoad(true) ;
            })
            .catch((err) => {
              console.log("Error in fetching movie details ",err) ;
            })
            return ;
        } 
        fetchData() ;
    },[fetchMovieDetails])

  return (
    <div  className='playWindow'>
        <Nav/>

        {
          isLoad?(<>
          <div className='playwindow__container'>
            <img src={base_url+movie.backdrop_path} alt="image should be here" className='play__image'/>
            <div className="play__top">
              <div className="play__title"> {movie?.title || movie?.name|| movie?.original_name } </div>
              <div className="play__tagline">{movie.tagline}</div>
              <div className="play__genre"> {movie.genres.map((genre) => (
                <div className='play__genreName' key={genre.id}> {genre.name} </div>
              ))} </div>
              <div className="play__date"> Released Date :  {movie.release_date} </div>          
              <div className="play__desc">{movie.overview}</div>
            </div>

            
          </div>
          
          <div className="similarMovies">
            <Row2 title={`SIMILAR`} fetchUrl={fetchSimilar} type={type}  className='movies__name'/>
          </div>

          <div className="similarMovies">
            <Row2 title={`RECOMMENDED`} fetchUrl={fetchRecommended} type={type} className='movies__name'/>
          </div>
          </>
          ) 
          :(<>
            {console.log("Loading")}
          </>)
        }

        
        <Footer/>

    </div>
  )
}

export default PlayWindow
