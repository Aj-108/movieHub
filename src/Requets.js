const API_KEY = 'a6248bf72153370fbeda6e1cb1b8e190' ;
// TODO make a env file for hiding API KEY

const requests = {
    fetchTrending: `/trending/movie/week?api_key=${API_KEY}&language=en-US`, 
    fetchNetflixOriginals: `/discover/tv?api_key=${API_KEY}&with_networks=213`,
    fetchComedyMovies: `/discover/movie?api_key=${API_KEY}&with_genres=35`, 
    fetchHorrorMovies: `/discover/movie?api_key=${API_KEY}&with_genres=27`,
    fetchRomanceMovies: `/discover/movie?api_key=${API_KEY}&with_genres=10749`, 
    fetchDocumentaries: `/discover/movie?api_key=${API_KEY}&with_genres=99`,
    fetchTopRated : `/movie/top_rated?api_key=${API_KEY}&language=en-US`,
    fetchActionMovies : `/discover/movie?api_key=${API_KEY}&with_genres=28`,
    fetchActionTv : `/discover/tv?api_key=${API_KEY}&with_genres=10759`,
    fetchComedyTv : `/discover/tv?api_key=${API_KEY}&with_genres=35`,
    fetchAnimationTv : `/discover/tv?api_key=${API_KEY}&with_genres=16`,
    fetchCrimeTv : `/discover/tv?api_key=${API_KEY}&with_genres=80`,
    fetchDramaTv : `/discover/tv?api_key=${API_KEY}&with_genres=18`,
    fetchKidsTv :  `/discover/tv?api_key=${API_KEY}&with_genres=10762`,
    fetchTrendingTv : `trending/tv/week?api_key=${API_KEY}`,
    fetchDocumentaryTV : `/discover/tv?api_key=${API_KEY}&with_genres=99`,
    fetchAnimationMovies: `/discover/movie?api_key=${API_KEY}&with_genres=16`,
    fetchCrimeMovies: `/discover/movie?api_key=${API_KEY}&with_genres=80`,
    fetchFantasyMovies: `/discover/movie?api_key=${API_KEY}&with_genres=14`,
    fetchFamilyMovies: `/discover/movie?api_key=${API_KEY}&with_genres=10751`,
    fetchSciTv: `/discover/movie?api_key=${API_KEY}&with_genres=10768`,
}

export default requests ;