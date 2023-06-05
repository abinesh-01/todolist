import React, { useState } from "react";
import "./App.css"


const From = (props) =>{

    const [input, setInput] = useState("")

    const change = (event) =>{
        setInput(event.target.value)
    }

    const Click = () =>{
        props.AddItems(input);
        setInput("");
    }
    
    return(
        <>
          <div className="from">
            <input type="text" onChange={change} value={input} placeholder="Something else...."/>
            <button onClick={Click}>Add</button>
          </div>
         
        </>
    )
}
export default From;