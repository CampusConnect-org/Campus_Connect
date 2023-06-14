import React, { useState } from 'react';
import { Link,  useNavigate } from 'react-router-dom';
// import firebase from 'firebase/app';
// import 'firebase/auth';
import firebase from 'firebase/compat/app';
import { auth, db } from '../../firebase';
import "./Login.css"

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
    alert("logging in");
    e.preventDefault();
    firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then(() => {
        // Redirect to the home page after successful login
        navigate('./')
      })
      .catch((error) => {
        // Handle login errors here
        console.error(error);
      });
  };

  const handleGoogleLogin = () => {
    const provider = new firebase.auth.GoogleAuthProvider();
    firebase
      .auth()
      .signInWithPopup(provider)
      .then(() => {
        // Redirect to the home page after successful login
        navigate('/dashboard')
      })
      .catch((error) => {
        // Handle login errors here
        console.error(error);
      });
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

