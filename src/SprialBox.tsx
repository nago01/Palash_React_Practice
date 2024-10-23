import { useState } from 'react';
import './SprialBox.css';
export const SpiralBox = (prop) => {

    const [count, setCount] = useState(prop?.count);

    console.log(count, 'count');
    return (<div className="mainContainer">
        { count >0 && count<1000 && 
         <div style={{"display": "flex", "width": `${count*100}px`, "height": `${count*100}px`, "border":"10px solid white" , "alignItems" : "center"}}></div> }
         <SpiralBox/>
    </div>);
}