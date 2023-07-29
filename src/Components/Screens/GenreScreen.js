import React from 'react'
import Nav from '../Nav'
import './GenreScreen.css'
import Footer from '../Footer';
import Row2 from '../Row2';
import requests from '../../Requets';


function GenreScreen({title,descrp}) {
  return (
    <div className='genreContainer'>
        <Nav className='navbar'/>
        <h2 className='genreContainer__heading'> {title} </h2>
        <h4> {descrp} </h4>
        { title === 'TV Shows' && (
          <>
            <Row2 title='Trending' fetchUrl={requests.fetchTrendingTv} type='tv'/>
            <Row2 title='Action' fetchUrl={requests.fetchActionTv} type='tv'/>
            <Row2 title='Comedy' fetchUrl={requests.fetchComedyTv} type='tv'/>
            <Row2 title='Animation' fetchUrl={requests.fetchAnimationTv} type='tv'/>
            <Row2 title='Crime' fetchUrl={requests.fetchCrimeTv} type='tv'/>
            <Row2 title='Drama' fetchUrl={requests.fetchDramaTv} type='tv'/>
            <Row2 title='Kids' fetchUrl={requests.fetchKidsTv} type='tv'/>
            {/* <Row2 title='Sci-fci' fetchUrl={requests.fetchSciTv}/> */}
          </>
        )}

        { title === 'Movies' && (
          <>
            <Row2 title='Trending' fetchUrl={requests.fetchTrending} type='movie'/>
            <Row2 title='Action' fetchUrl={requests.fetchActionMovies} type='movie'/>
            <Row2 title='Comedy' fetchUrl={requests.fetchComedyMovies} type='movie'/>
            <Row2 title='Crime' fetchUrl={requests.fetchCrimeMovies} type='movie'/>
            <Row2 title='Animation' fetchUrl={requests.fetchAnimationMovies} type='movie'/>
            <Row2 title='Fantasy' fetchUrl={requests.fetchFantasyMovies} type='movie'/>
            <Row2 title='Family' fetchUrl={requests.fetchFamilyMovies} type='movie'/>
          </>
        )}
        <Footer className='footer'/>
    </div>
  )
}

export default GenreScreen