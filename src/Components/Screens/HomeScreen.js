import React from 'react'
import Banner from '../Banner'
import './HomeScreen.css'
import Nav from '../Nav'
import requests from '../../Requets';
import Rows from '../Rows';
import Footer from '../Footer';

function HomeScreen() {
  return (
    <div className='homeScreen'>
    
        <Nav />
        <Banner />
        <Rows title='NETFLIX ORIGINALS' fetchUrl={requests.fetchNetflixOriginals} isLargeRow={true} type={'tv'}/>
        <Rows title='Top Rated' fetchUrl={requests.fetchTopRated} type={'movie'}/>
        <Rows title='Popular Movies' fetchUrl={requests.fetchTrending} type={'movie'}/>
        <Rows title='Popular TV Shows' fetchUrl={requests.fetchTrendingTv} type={'tv'}/>
        <Rows title='Action Movies' fetchUrl={requests.fetchActionMovies} type={'movie'}/>
        <Rows title='Comedy Movies' fetchUrl={requests.fetchComedyMovies} type={'movie'}/>
        <Rows title='Horror Movies' fetchUrl={requests.fetchHorrorMovies} type={'movie'}/>
        {/* <Rows title='Romance Movies' fetchUrl={requests.fetchRomanceMovies} /> */}
        <Rows title='Documentaries TV' fetchUrl={requests.fetchDocumentaryTV} type={'tv'}/>
 
      <Footer />

    </div>
  )
}

export default HomeScreen