import { useState } from "react";

export const EmployeeCard = (props) => {
    const [show, setShow] = useState(false);
    const handleClick = () => {
       setShow(()=>{
        return !show;
       })
    }
    const { data } = props;
    return (<div className="card">
        <div>{data?.firstName} having id {data?.id}</div>
        <button onClick={handleClick}>Show More Text</button>
        {show && 
        <div>Show This Card</div>}
    </div>);
}