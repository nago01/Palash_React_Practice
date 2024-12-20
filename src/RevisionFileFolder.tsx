import './App.css';
import { useState } from "react";

export const RevisionFileFolder = (props) => {
    const [data, setData] = useState(props.data);
    console.log(data, 'data');
    function handleClick(currItem){
        currItem.isOpen =  !currItem.isOpen;
        console.log(data ,'data');
        let data2 = [...data];
        setData(data2);
    }
    return <>
        <div>
            {
                data.map((item) => {
                    let isFolder = false;
                    if (item?.children?.length > 0) {
                        isFolder = true;
                    }
                    return <div className={'folderCnt'}>
                        <div style={{'display' : "inline-flex"}}>
                        <p>{item.name}</p>
                        {isFolder ? <h3>Folder</h3> : <h3>File</h3>}
                        {isFolder && <button onClick={()=>{handleClick(item)}}>Change</button>}
                        </div>
                        {isFolder && item.isOpen && <RevisionFileFolder data={item.children} />}
                    </div>
                })
            }
        </div>
    </>
}