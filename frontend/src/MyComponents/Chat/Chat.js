import React, { useEffect, useState } from 'react';
import './Chat.css';
import { useSearchParams,useNavigate } from 'react-router-dom';
import { db } from '../../firebase.js';
import { Timestamp } from 'firebase/firestore';
import { useStateValue } from '../../MyContexts/StateProvider';

export const Chat = () => {

    const [searchParams]=useSearchParams();

    const [{user,name}]=useStateValue();    
    let receiverUserId=searchParams.get('userid');
    let receiverUserName=searchParams.get('username');

    const [messageList,setMessageList]=useState([])
    const [sending,setSending]=useState(false);
    const [loading,setLoading]=useState(false);

    const navigate=useNavigate();

    const messagesRef=db.collection('users').doc(user?.uid).collection('chats').doc(receiverUserId).collection('messages');
    const messagesRef2=db.collection('users').doc(receiverUserId).collection('chats').doc(user?.uid).collection('messages');

    useEffect(()=>{
        if(!user) navigate('/login')
        setLoading(true);
        if(user){
            messagesRef
            .orderBy('createdAt','desc').limit(25)
            .onSnapshot(querySnapshot=>{
                const data=querySnapshot.docs.map(doc=>({
                    ...doc.data(),
                }));
                setMessageList(data.reverse());
            })
        }
        setLoading(false);
        // console.log(messageList);
        //eslint-disable-next-line
    },[user,messagesRef])

    const [newMessage,setNewMessage]=useState('')

    const sendMessage= async(event)=>{
        if(newMessage.length) setSending(true);
        const message={
            text:newMessage,
            createdAt:Timestamp.now(),
            id:user.uid,
            senderName:name
        };
        if(newMessage.length===0) return;
        event.preventDefault();
        if(user?.uid!==receiverUserId) messagesRef2.add(message);
        await messagesRef.add(message)
        setNewMessage('');
        setSending(false);
    }
    
    return (

        <>
        <div className='chat_area'>
            <div><h1>{receiverUserName}</h1></div>
            {loading && "Loading..."}
            <div className="messages">
                {messageList.map(message=>{
                    const {text,senderName,id}=message;
                    const status=(user.uid===id)?'sent':'received';
                    return(
                        <div className="message">
                            <div className={status}>
                                <h4>{senderName} :</h4>
                                <p>{text}</p>
                                <small>{status}</small>
                            </div>
                        </div>
                    )
                })}
            </div>

            <form id="sendMessage">
                <input 
                    type="text"
                    value={newMessage}
                    onChange={(e)=>setNewMessage(e.target.value)}
                />
                <button type="submit" onClick={sendMessage}> Send Message</button>
            </form>
            {sending&&"Message Sending..."}
            </div>
        </>
    )
}
