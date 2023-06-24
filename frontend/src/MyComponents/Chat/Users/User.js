import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import { db } from '../../../firebase'
import "./Users.css"

export const User = ({id}) => {

    const [name,setName]=useState('');

    useEffect(()=>{
        db.collection('users').doc(id).collection('profile').doc('userInfo').get()
        .then(doc=>{
            setName(doc.data().name);
        })
    },[id])

    const url=`/chat?userid=${id}&username=${name}`;

  return (
    <div className='horizontal-box'>
        <span className='box-name'>{name}  </span>
        <span className='chat-icon'>  <Link  to={url}>&#x1F4AC;</Link></span>
    </div>
  )
}
