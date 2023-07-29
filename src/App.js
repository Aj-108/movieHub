import React, { useEffect } from 'react';
import HomeScreen from './Components/Screens/HomeScreen';
import './App.css' ;
import {
  BrowserRouter,
  Routes,
  Route,
} from 'react-router-dom' ;
import LoginScreen from './Components/Screens/LoginScreen';
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from './firebase';
import {useDispatch, useSelector} from 'react-redux' ;
import { login, logout, selectUser } from './features/userSlice';
import ProfileScreen from './Components/Screens/ProfileScreen';
import GenreScreen from './Components/Screens/GenreScreen';
import PlayWindow from './Components/Screens/PlayWindow';
// import PlayScreen from './Components/Screens/PlayScreen';


function App() {
  const user = useSelector(selectUser) ;
  const dispatch = useDispatch() ;

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth,(user) => {
      if(user){
        dispatch(login({
          uid : user.uid ,
          email : user.email ,
          displayName : user.displayName ,
        })) ;
      }
      else{
        dispatch(logout()) ;
      }
    })
    return unsubscribe ;
  },[dispatch])


  const tvDecs = 'These days, the small screen has some very big things to offer. From sitcoms to dramas to travel and talk shows, these are all the best shows on TV.' ;

  const movieDesc = 'Movies move us like nothing else can, whether they’re scary, funny, dramatic, romantic or anywhere in-between. So many titles, so much to experience.';

  return (
    <div className="app">
      <BrowserRouter>
        {console.log(user)}
        {!user?(
          <LoginScreen />
        ) : (
        <Routes>
          <Route path='/' element={<HomeScreen/>}></Route>
          <Route path='/profile' element={<ProfileScreen/>}></Route>
          <Route path='/tv-shows' element={<GenreScreen  title='TV Shows' descrp={tvDecs}/>}/>
          <Route path='/Movies' element={<GenreScreen  title='Movies' descrp={movieDesc}/>}/>
          <Route path='/playWindow/:movieId/:type' element={<PlayWindow/>}/>
          {/* <Route path='/playScreen' element={<PlayScreen/>}></Route> */}
        </Routes>)
        }
      </BrowserRouter>
    </div>
  );
}

export default App;
