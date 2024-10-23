import { useState } from 'react';
import './MemoryGame.css';
export const MemoryGame = () => {
       const [currValue, setCurrValue] = useState(-1);
       const [selectedIndex, setSelectedIndex] = useState([]);
       let valueArray = [1,2,3,4,5,1,2,3,4,5];

       const handleLogic = (item, index) => {
         
         console.log(currValue,'curr');
         if(currValue ===  -1 || currValue === item){
            setCurrValue(item);
            console.log("asd");
         let newArr = [...selectedIndex];
         newArr.push(index);
         setSelectedIndex([...newArr]);
         }
         else {
         let  newArr= [...selectedIndex];
         console.log(index, 'index');
         newArr.filter((arrIndex)=>{
               return arrIndex!=index;
            });
            console.log(newArr, 'newArr');
            setCurrValue(item);
         }
       }
   
       return (
        <>
         <div className="mainContainer">
            <div>Memory Game</div>
            <div className="childContainer">
               {
                  valueArray.map((item, index)=>{
                     return <div className="cellContainer" style={{"backgroundColor": selectedIndex.includes(index) ? "green": "black"}} key={`${index}-${item}`} onClick={()=>{
                       handleLogic(item, index);
                     }}>
                        {item}
                        </div>
                  })
               }
   
            </div>
         </div>
        </>
       );
}