import { useState } from "react";
function Toggle(){
    const [isOn, setIsOn] = useState(false);
    return(
        <div>
            <h1>The switch is {isOn ? "ON" : "OFF"}</h1>
            <button onClick={() => setIsOn(!isOn)}>Toggle</button>
        </div>
    )

}
export default Toggle;