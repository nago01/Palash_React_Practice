import { useState } from 'react';
import './SprialMatrix.css';
export const SpiralMatrix = () => {
    const [boxCount, setBoxCount] = useState(10);
    return (<div className="mainContainer">
        <div>
            {conti && <div style={{"border" : "2px solid black" , "width" : "100px" , "height": "0px"}}></div>}
            {conti && <div style={{"border" : "2px solid black" , "width" : "0px" , "height": "100px"}}></div>}
            {/* {conti && <div style={{"border" : "2px solid black" , "width" : "100px" , "height": "0px"}}></div>}
            {conti && <div style={{"border" : "2px solid black" , "width" : "100px" , "height": "0px"}}></div>} */}
        </div>
    </div>);
}