import React from "react";
// import { useState } from "react";
import { INTERESTS } from "./Interests";
import {GOALS} from "./Goals"
import "./main_logo.jpg";
import "./Profile.css";
import { useState } from "react";
import {motion, spring} from "framer-motion"
import { useNavigate } from "react-router-dom";
import { db } from '../../firebase.js'
import { useStateValue } from "../../MyContexts/StateProvider";



export const Profile=()=>{

  const [{user},dispatch]=useStateValue();
  const navigate= useNavigate();

const [interests,setInterests]= useState([]);
const [goals,setGoals]= useState([]);

const toggle=(x)=>{
  if(x.className==="btn") x.className="selected_btn";
  else x.className="btn";
}

const addInterest=(interest, id)=>{
  
  const isFound = interests.some(element => {
    if (interest.id === element.id) {
      return true;
    }

    return false;
  });

  if(isFound) removeInterest(id);

  var x=document.getElementById(`${id}`);
  console.log(x);
  toggle(x);

  setInterests(interests=> [...interests, interest]);
  console.log(interest);
  
}

const removeInterest=(id)=>{
  var x=document.getElementById(`${id}`);
  console.log(x);
 

  var index=interests.findIndex(object=>{
    return object.id===id
  })
  x.classList.remove("selected_btn")
  setInterests([
    ...interests.slice(0, index),
    ...interests.slice(index + 1, interests.length)
  ]);
   
 
  console.log(interests)
}

const addGoal=(goal, id)=>{
  
  const isFound = goals.some(element => {
    if (goal.id === element.id) {
      return true;
    }

    return false;
  });

 

  if(isFound) removeGoal(id);

  
  var x=document.getElementById(`${id}`);
  console.log(x);
  toggle(x);

  setGoals(goals=> [...goals, goal]);
  console.log(goal);
}


const removeGoal=(id)=>{
  var x=document.getElementById(`${id}`);
  console.log(x);
 

  var index=goals.findIndex(object=>{
    return object.id===id
  })
  x.classList.remove("selected_btn")
  setGoals([
    ...goals.slice(0, index),
    ...goals.slice(index + 1, goals.length)
  ]);
   
 
  console.log(goals)
}

const removeGoals=(index)=>{
  setGoals([
    ...goals.slice(0, index),
    ...goals.slice(index + 1, goals.length)
  ]);

}

const [move,setMove]= useState(false);

const handleNextClick = ()=>{

 setMove(true);
  
}

const animation={
  display:"none",
  opacity: "0",
  transition: {
    duration:2,
    type:spring
  }
};

const Goalanimation={
  x: "0",
  opacity: "1",
  transition: {
    type:spring,
    duration:2
  }
};

const submitInfo=()=>{
  console.log(goals);
  console.log(interests);

  const profileRef=db.collection('users').doc(user?.uid).collection('profile');

  profileRef.doc('interests').set({
    interests
  });

  profileRef.doc('goals').set({
    goals
  })
  dispatch({
    type:'SET_PROFILE',
    interests,
    goals
  })
  //TODO -> send interests, and goals to backend
  navigate('../options')
  
}




return(
 
 <>

   <div className="profile_container">
     <center className="title">
     <img src={require("./main_logo.jpg")} alt="" className="logo"/>
      CAMPUS-CONNECT
     </center>
     <div className="overall_container">

     <motion.div animate={move && animation}>
     <center className="heading">
   WHAT ARE YOU INTERESTED IN?
   
     </center> 
     
     <div className="main"
    >
     {
   INTERESTS.map((interest)=>{
// console.log(interest.name);
   return ( <motion.button className="btn" id={interest.id} onClick={()=>addInterest(interest, interest.id)} 
   initial={{opacity:0}}
   animate={{ opacity: 1}}
   transition={{duration:2}}
   >
      {interest.name}
  {interest.img}
    </motion.button>
    
    )
   })
     } </div>
     <button id="next" onClick={handleNextClick}>NEXT <span>&rarr;</span></button>
     <div className="selected">
  {
    interests.map((interest, index)=>
    {
      return(
<button className="selected_interest" >
  <span className="remove_interest_icon"onClick={()=>removeInterest(index, interest.id)}>&times;</span>{interest.name}</button>
     ) }  
    )}
 </div>
 </motion.div>
 <motion.div 
 initial={
  {x:"100vw",
  display:"none"
}
 } 
 animate={move && Goalanimation}

 >
         <center className="heading">
   CHOOSE YOUR GOALS
     </center>
  
     <div className="main">{
   GOALS.map((goal)=>{
    
    return(<button className="btn" id={goal.id}onClick={()=>addGoal(goal, goal.id)}>
      {goal.name}
    </button>)
   })
     }</div>
   
{/*    
   <div className="selected">
  {
    goals.map((goal, index)=>
    {
      return(
<button className="selected_goal">
  <span className="remove_goal_icon"onClick={()=>removeGoals(index)}>&times;</span>{goal.name}</button>
     ) }  
    )}
 </div> */}

  
   <center>
<button id="submitInfo" onClick={submitInfo}>
  SUBMIT
</button>
</center>
</motion.div>
</div>
</div>
   </>  
);


}