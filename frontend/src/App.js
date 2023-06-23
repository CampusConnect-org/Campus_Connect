import { useEffect } from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route,
}from 'react-router-dom';
import { Chat } from './MyComponents/Chat/Chat.js'
import { Signup } from './MyComponents/Authentication/Signup.js';
import { Users } from './MyComponents/Chat/Users/Users.js';
import { auth, db } from './firebase';
import { useStateValue } from './MyContexts/StateProvider';
import { Profile } from './MyComponents/Profiles/Profile.js';
import { Option} from './MyComponents/Options/Option.jsx';
import { Offer } from './MyComponents/Offer/Offer.js';
import { Navbar } from './MyComponents/Navbar/Navbar.jsx';
import Footer from './MyComponents/Footer/Footer.jsx';
import Listings from './MyComponents/Listings/Listings.jsx';
import { Landing } from './MyComponents/Landing Page/Landing';
import Login from './MyComponents/Authentication/Login';

function App() {

  //eslint-disable-next-line
  const [{name},dispatch]=useStateValue();

  useEffect(()=>{
    auth.onAuthStateChanged((authUser)=>{
      if(authUser){
        console.log(authUser);
        db.collection('users').doc(authUser.uid).collection('profile').doc('userInfo').get()
        .then(doc=>{
          let name=doc.data().name;
          let college=doc.data().college;
          let email=doc.data().email;
          let yearOfStudy=doc.data().yearOfStudy;
          dispatch({
            type:'SET_USER',
            user:authUser,
            name,
            college,
            email,
            yearOfStudy
          })
        })
        db.collection('users').doc(authUser.uid).collection('profile').doc('interests').get()
        .then(doc=>{
          let interests=doc.data().interests;
          let goals=doc.data().goals;
          dispatch({
            type:'SET_PROFILE',
            interests,
            goals
          })
        })
      }
      else{
        dispatch({
          type:'SET_USER',
          user:null,
          name:'',
          college:'',
          email:'',
          yearOfStudy:''
        })
        dispatch({
          type:'SET_PROFILE',
          interests:[],
          goals:[]
        })
      }
    })
    console.log(name);
    //eslint-disable-next-line
  },[auth])

  return (
   
    <div>
  <Router>
      <Navbar/>
     
        <Routes>
          <Route exact path='/' element={<Landing />} />
          <Route exact path='/chat/' element ={<Chat />}/>
          <Route exact path='/signup' element={<Signup />} />
          <Route exact path='/login' element={<Login/>} />
          <Route exact path='/users' element={<Users />} />
         
          <Route exact path='/offer' element={<Offer/>}/>
          <Route exact path='/profile' element={<Profile/>}/>
          <Route exact path='/options' element={<Option/>}/>
          <Route exact path='/listings' element={<Listings/>}/>
          <Route exact path='/chat/:username' element ={<Chat />}/>
        </Routes>
      
           </Router>
         
        </div>
  );
}

export default App;
