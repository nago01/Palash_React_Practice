import { useState } from 'react';
import './SprialBox.css';
import React from 'react';
export const SpiralBox = (prop) => {
    const [totalBox, setTotalBox] = useState(10);
    const childComponent = (val) => {
        if(val>totalBox){
            return <div></div>
        }
        return  (
            <>
        <div style={{"display": "flex", "width": `${(1000/totalBox)*val}px`, "height": `${(1000/totalBox)*val}px`, "border":"2px solid white" , "alignItems" : "center" , "justifyContent": "center"}}>
        {childComponent(val+1)}
        </div>
     
        </>
        ); 
    }
    return (<div className="mainContainer">
        {childComponent(1)}
    </div>);
}