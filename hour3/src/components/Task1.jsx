import { useState } from "react";
function Like(){
    const[like, setLike]=useState(0);

    return(
        <div>
            <h2>likes: {like}</h2>
            <button onClick={()=> setLike(like + 1)}>Like</button>
        </div>
    )

}
export default Like;