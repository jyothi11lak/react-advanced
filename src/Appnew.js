import React, {useState} from "react";
function Countex()
{
    const [count,setCount]=useState(0);
    return(
        <div>
            <p>You Clicked{count}times</p>
            <button onClick = {()=>setCount(count+1)}>
                Click Me
            </button>
        </div>
    )
}
export default Countex;