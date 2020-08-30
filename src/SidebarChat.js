import './SidebarChat.css';
import { Avatar } from '@material-ui/core';
import React, {useEffect, useState} from "react";
import db from "./firebase";
import {Link} from "react-router-dom";

function SidebarChat({ id, name, addNewChat }){
    const [seed, setseed] = useState("");
    const [messages, setMessages] = useState("");

    useEffect(() =>{
        if (id) {
            db.collection("rooms")
            .doc(id)
            .collection("messages")
            .orderBy("timestamp", "desc")
            .onSnapshot(onSnapshot =>
                setMessages(onSnapshot.docs.map((doc)=>
                doc.data()))
            );
        }
    }, [id])

    
    useEffect(
        () =>{
            setseed(Math.floor(Math.random() * 5000));
        }, []
    );

    const createChat =() => {
        const roomName = prompt("please enter name for chat room");
        if (roomName) {
            // do some db stuffs
            db.collection('rooms').add({
                name: roomName,
            });
        }
    };

    return !addNewChat ?(
        <Link to={`/rooms/${id}`}>
        <div className="sidebarChat">
        <Avatar src={`https://avatars.dicebear.com/api/human/${seed}.svg`}/>
            <div className="sidebarchat_info">
            <h2>{name}</h2>
                <p>{messages[0]?.message}</p>
            </div>
        </div>    
        </Link>

    ): (
        <div></div>
        // <div onClick={createChat}
        // className="sidebarChat">
        //     <h2>Add New Chat</h2>
        // </div>
    )
}

export default SidebarChat
