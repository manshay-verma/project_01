import React, {useEffect, useState} from 'react';

function MessageCard({sender, text}){
    const [like, setLikes] = useState(0);
    const [isRead, setIsRead] = useState(false);

    const handleLikes = () => {
        setLikes(like+1);//update state
    } 

    //  🧠 use Effect : Run Once when the component mount
    useEffect(()=>{
        const timer = setTimeout(()=>{
            setIsRead(true);
        },2000);// 2 sec
        // Optional Cleanup (in case of component is removed)
        return ()=>clearTimeout(timer);
    },[]);// empty dependency array = run only once on mount
    return(
        <div style={{
            border: "1px solid #ccc",
            margin: "10px",
            padding: "15px",
            borderRadius: "8px",
            backgroundColor: "#f9f9f9"
        }}>
            <h3>✉️ From {sender}</h3>
            <p>{text}</p>
            <p>Status: {isRead ? "✅Read" : "⌛Unread"}</p>
            <button onClick={handleLikes}>🩷 Like</button>
            <p>Likes:{like}</p>
        </div>
        
    );
}
export default MessageCard;
