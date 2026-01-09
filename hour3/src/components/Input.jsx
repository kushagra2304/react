import { useState } from "react";

function Input(){
    const [text,setText]=useState("");

    return (
        <div>
            <input  value={text} onChange={(e)=>setText(e.target.value)} />
            <h2>You typed: {text}</h2>

        </div>
    )
}
export default Input;