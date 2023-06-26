import React, { useState } from 'react';
import { Link,  useNavigate } from 'react-router-dom';
import firebase from 'firebase/compat/app';
import { auth, db , provider} from '../../firebase';
import "./Login.css"
import { getAdditionalUserInfo, signInWithPopup } from 'firebase/auth';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleLogin = (e) => {
    e.preventDefault();
    alert("Logging in");
    auth.signInWithEmailAndPassword(email,password)
    .then((auth)=>{
      if(auth){
        navigate('/options')
      }
    }).catch(error=>{
      alert(error.message);
    })
  };

  const handleGoogleLogin = () => {
    signInWithPopup(auth,provider)
    .then(authUser=>{
      const info=getAdditionalUserInfo(authUser);
      if(info.isNewUser){
        db.collection('users').doc(authUser.user.uid).set({
          userid:authUser.user.uid
        }).then(()=>{
            db.collection('users').doc(authUser.user.uid).collection('profile').doc('userInfo').set({
                name:authUser.user.displayName,
                email:authUser.user.email,
                college:"abc",
                yearOfStudy:"3"
            }).then(()=>{
                if(authUser)navigate('/profile');
            }).catch(error=>alert(error.message))
        }).catch(error=>alert(error.message))
      }
      else{
        navigate('/options');
      }
    }).catch(error=>{
      alert(error.message);
    })
  };

  const redirect = ()=>{
    navigate("../signup/");
  }

  return (
  
<div className="login-container">
        <div class="box">
            <div class="login-content">
                <h1>Login</h1>
                <hr/>
                <input type="email"
         placeholder="Email"
           value={email}
           onChange={handleEmailChange}/>
                <input       type="password"
           placeholder="Password"
           value={password}
           onChange={handlePasswordChange}
         />    <button className="google-login" onClick={handleGoogleLogin}>
            Login with Google
            </button>  
                <hr/>
                <a className="login-a" href="#">Forgot Password?</a>
                <div class="buttons">
                    <button class="login-btn" onClick={handleLogin}>Login</button>
            
                    <button className="login-btn btn1" onClick={()=> redirect()}>Signup</button>
    
                </div>
                
            </div>
        </div>
</div>
  );
};

export default Login;


{ // <div className="login-container">
    //   <h2>Login</h2>

    //   <form onSubmit={handleLogin}>
    //     <input
    //       type="email"
    //       placeholder="Email"
    //       value={email}
    //       onChange={handleEmailChange}
    //     />
    //     <input
    //       type="password"
    //       placeholder="Password"
    //       value={password}
    //       onChange={handlePasswordChange}
    //     />
    //     <button type="submit">Login</button>
    //   </form>  <div>
     
    //   <button className="google-login" onClick={handleGoogleLogin}>
    //     Login with Google
    //   </button>
    
    //     Don't have an account? <Link to="/signup">Sign up</Link>
    //   </div>
    // </div>
}

