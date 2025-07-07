import React from 'react';

function MessageCard({sender, text}){
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
        </div>
        
    );
}
export default MessageCard;
