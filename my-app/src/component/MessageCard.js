import React, {useState} from 'react';

function MessageCard({sender, text}){
    const [like, setLikes] = useState(0);
    const handleLikes = () => {
        setLikes(like+1);//update state
    }
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
            <button onClick={handleLikes}>🩷 Like</button>
            <p>Likes:{like}</p>
        </div>
        
    );
}
export default MessageCard;
