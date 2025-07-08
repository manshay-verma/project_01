import React,{useState} from "react";

function FeedbackForm(){
    const [input, setInput] = useState("");
    const [submitted, setSubmitted] = useState("");

    const handleChange= (e)=>{
        setInput(e.target.value);
    }
    const handleSubmit = (e) =>{
        e.preventDefault();// prevent page reload
        setSubmitted(input);
        setInput("");//clear input after submit
    };
    return(
        <div style={{
        border: "1px solid #0077cc",
        padding: "20px",
        borderRadius: "10px",
        marginTop: "20px",
        backgroundColor: "#eef7ff"
        }}>

        <h3>FeedBack</h3>
        <form onSubmit={handleSubmit}>
            <input
            type="text"
            placeholder="Write Your feedback..."
            value={input}
            onChange={handleChange}
            style={{
                padding:"10px",
                width:"70%",
                fontSize:"16px"
            }}
            />
            <button type="submit" style={{ marginLeft: "10px", padding: "10px" }}>
            Submit
            </button>
            {submitted && (
                <p style={{marginTop:'15px',fontStyle:'italic'}}>
                    You said:"{submitted}"
                </p>
            )}
        </form>

        </div>
        

    );
}
export default FeedbackForm