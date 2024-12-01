import React, { useState } from "react";

export const Folder = (props) => {
    const { item } = props;
    const [open, setOpen] = useState(false);
    return <> 
        <div>{item.name}</div>

        {
            open && item.children.length && item.children.map((item1, i) => {
                if (item1.type === "folder") {
                    return <Folder item={item1} />
                }
                else {
                    return <div>{item.name}</div>
                }
            })}


    </>
}