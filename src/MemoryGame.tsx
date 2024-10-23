import { useEffect, useState } from 'react';
import './MemoryGame.css';
export const MemoryGame = () => {
       const [currValue, setCurrValue] = useState(-1);
       const [selectedIndex, setSelectedIndex] = useState([]);
       const [prevIndex, setPrevIndex] = useState(-1);
       const [showModal, setShowModal] = useState(false);
       let valueArray = [1,2,3,4,5,1,2,3,4,5,6,7,7,6, 10, 10];

       const handleLogic = (item, index) => {
         if(currValue ===  -1){
            
            let newArr = [...selectedIndex];
            setPrevIndex(index);
            newArr.push(index);
            setSelectedIndex([...newArr]);
            setCurrValue(item);
         }
         else if(currValue === item){
           let newArr = [...selectedIndex];
           setPrevIndex(index);
           newArr.push(index);
           setSelectedIndex([...newArr]);
           setCurrValue(-1);
         }
         else if(item!==currValue) {
         let  newArr= [...selectedIndex];
         let ans = newArr.filter((arrIndex)=>{
               return arrIndex!==prevIndex;
            });
            ans.push(index);
            setPrevIndex(index);
            setCurrValue(item);
            setSelectedIndex(ans);
         }
       }
       
       useEffect(()=>{
         if(selectedIndex.length === valueArray.length){
            setShowModal(true);
         }
       },[selectedIndex]);

       return (
        <>
         <div className="mainContainer">
            <div>Memory Game</div>
            <div className="childContainer">
               {
                  valueArray.map((item, index)=>{
                     return <div className="cellContainer" style={{"backgroundColor": selectedIndex.includes(index) ? "green": "black"}} key={`${index}-${item}`} onClick={()=>{
                        if(selectedIndex.includes(index)){
                           return;
                        }
                       handleLogic(item, index);
                     }}>
                        <div style={{"color": selectedIndex.includes(index) ? "white": "black"}}>{item}</div>
                        </div>
                  })
               }
   
            </div>
            {showModal && <div className = "modalContainer">
               <div>
               Game Over Please Try Again
               </div>
               <button onClick={()=>{
                  window.location.reload();
               }}>
                  Reset
               </button>
               </div>}
         </div>
        </>
       );
}