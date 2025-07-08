import React,{useEffect, useState} from "react";
import MessageCard from "./MessageCard";

function FetchMessages(){
    const [messages, setMessage] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(()=>{
        fetch("https://jsonplaceholder.typicode.com/comments?_limit=5")
        .then((res)=>res.json())
        .then((data)=>{
            const formatted = data.map((item)=>({
                sender: item.email,
                text: item.body
            }));
            setMessage(formatted);
            setLoading(false);
        })
        .catch((error)=>{
            console.error("fetch error:",error)
            setLoading(false)
        })
    }, []);

    return(
        <div>
      {/* <h2>🌐 Fetched Messages</h2> */}
      {loading ? (
        <p>Loading...</p>
      ) : (
        messages.map((msg, index) => (
          <MessageCard key={index} sender={msg.sender} text={msg.text} />
        ))
      )}
    </div>
    );
}
export default FetchMessages;