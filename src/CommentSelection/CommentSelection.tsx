import { useState } from "react"
import React from "react";

export const CommentSelection = () => {
    const [currText, setCurrText] = useState("");
    const [list, setList] = useState([]);
    const handleAdd = () => {
        console.log('called on redner');
        let obj = {};
        obj["text"] = currText;
        obj["like"] = 0;
        obj["dislike"] = 0;
        setList(() => {
            let currList = [...list];
            // below one is wrong as it will create a reference to same object/array
            // therefore any change on list, state won't detect reference chagne so won't rerender
            // let currList = list;
            currList.push(obj);
            return currList;
        })
        setCurrText("");
    }
    console.log(list, 'list');
    const CommentComponent = (prop) => {
        const { item, index } = prop;
        console.log(item, 'item');
        return <div id={item.text} style={{ "display": "flex", "width": "fit-content", "backgroundColor": "red", "padding": "20px", "margin": "20px" }}>
            {item.text}
            Likes : {item.like}
            DisLikes : {item.dislike}
            <button onClick={() => {
                let newArray = [...list];
                item.like++;
                newArray[index] = item;
                setList(() => { return newArray });
            }}>Like</button>
            <button onClick={() => {
                let newArray = [...list];
                item.dislike++;
                newArray[index] = item;
                setList(() => { return newArray });
            }}>disLike</button>
            <button onClick={() => {
                let newArray = [...list];
                newArray = newArray.filter((i)=>{
                  if(i.text != item.text){
                    return i;
                  }
                })
                console.log(newArray , 'newArray');
                setList(() => { return newArray });
            }}>Delete Comment</button>
        </div>
    }
    return <div>
        <label>comment section</label>
        <input type='text' onChange={(e) => {
            setCurrText(e.target.value);
        }} value={currText}></input>
        <button onClick={() => { handleAdd() }}>To Add</button>
        {currText}
        {list.map((item, index) => {
            return <CommentComponent item={item} index={index} />
        })}
    </div>
}