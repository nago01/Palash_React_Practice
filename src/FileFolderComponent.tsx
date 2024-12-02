import React, { useEffect, useRef, useState } from "react";

export const FileFolderComponent = (props) => {
  const [list, setList] = useState(props.list);
  // const [isOpen, setIsOpen] = useState(true);
  const [newName, setNewName] = useState("");
  const [newFolder, setNewFolder] = useState(false);

  const ref = useRef({});

  const handleclick = (item, index) => {
    let newArray = [...list];
    item.isOpen = !item.isOpen;
    newArray[index] = item;
    console.log(newArray, 'newArray');
    setList(newArray);
  }

  const addChild = (item, index) => {
    let newArray = [...list];
    let obj = {
      name: newName,
      type: newFolder ? "folder" : "file",
      isOpen: false,
      children: []
    }
    item.children.push(obj);
    newArray[index] = item;
    setList(newArray);
  }

  return (
    <>
      <div style={{ "paddingLeft": "20px" }} id='maindCotainerId'>
        {
          list.map((item, index) => {
            if (item.type === "folder") {
              return <>
                {item.isOpen && <>
                  <div>--------</div>
                  <label>name:</label><input type="input" onChange={(e) => {
                    setNewName(e.target.value);
                  }}></input>
                  <label>isFolder</label><input type="checkBox" onChange={(e) => {
                    if (e.target.value == "on") {
                      setNewFolder(true);
                    }
                    else {
                      setNewFolder(false);
                    }
                  }}></input>
                  <button onClick={() => { addChild(item, index) }}>Add</button>
                </>}
                <div onClick={() => { handleclick(item, index) }} id={item.id}>|| {item.name}</div>
                {item.isOpen && <FileFolderComponent list={item.children} />}
              </>
            }
            else {
              return <div style={{ "paddingLeft": "40px" }}>"--" {item.name}</div>
            }
          })
        }

      </div>
    </>
  );

}
