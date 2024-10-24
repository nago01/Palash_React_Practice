import { useState } from "react";

export const Counter = () => {
    const [count, setCount] = useState(0);
    const handleClick = () => {
        // let currCount = count;
        // setCount(currCount+1);
        const timer = setInterval(()=>{
            setCount((count)=> {return count+1});
            if(count>=10){
                clearInterval(timer);
            }
        }, 1000)
        
    }
    return (
        <>
        <div id="countId">
            {count}
        </div>
        <button onClick={(e)=>{
          handleClick();
        }}>Start Timer</button>
        </>
    );
}
