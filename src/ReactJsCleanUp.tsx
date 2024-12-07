import React, { useEffect, useState } from "react";
export const ReactJsCleanUp = () => {
    const [count, setCount] = useState(0);
     useEffect(()=>{
      console.log('called the useEffect');
      let timer = setInterval(()=>{
        setCount((count)=>{
           return count+1;
        });
      },100);
       return () => {
        console.log('clean up called');
        clearInterval(timer);
       }
     },[]);
     return <div>
        New Component;
        {count}
     </div>
}