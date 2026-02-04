import { useState } from "react";

const Counter = () =>{
    const [count, setCount] = useState<number | null>(0);
    
    return(
        <>
            <div>
                <p>Cups ordered :</p>
                <button onClick={() => setCount((c)=>c+1)}> {count}</button>
            </div>
        </>
    )
}

export default Counter;