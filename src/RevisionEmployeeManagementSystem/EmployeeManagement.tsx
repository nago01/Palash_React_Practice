import React, { useEffect, useState } from "react";
export const EmployeeManagement = (props) => {
    const { data } = props;
    const [empList, setEmpList] = useState([]);
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [newAge, setNewAge] = useState(0);
    const [newId, setNewId] = useState(0);

    const [currName , setCurrName] = useState("");

    useEffect(() => {
        setEmpList(data);
    }, []);

    const handleSubmitFuc = (e) => {
        e.preventDefault();

        let obj = {
            id: newId,
            imageUrl: 'https://cdn-icons-png.flaticon.com/512/0/93.png',
            firstName: firstName,
            lastName: lastName,
            email: 'Thomas.Leannon@dummyapis.com',
            contactNumber: '4121091095',
            age: newAge,
            dob: '26/08/1979',
            salary: 1211,
            address: 'Address1',
        }
        let newEmpList = [...empList, obj];
        setEmpList(() => { return newEmpList });
    }
    console.log(empList, 'empList');

    const EmployeeCard = (props) => {
        const { item } = props;
        return (
            <div id={item.id} style={{ "display": "flex", "border": "2px solid black", "width": "90%", "height": "100%" }} className="empCard" onClick={()=>{
                 setCurrName(item.firstName + " " + item.lastName);
            }}>{item.firstName} {item.lastName}</div>
        );
    }
    return (
        <>
            <div style={{ "display": "flex", "width": "1000px", "height": "500px", "backgroundColor": "grey", "alignItems": "flex-start", "justifyContent": "space-around" }}>
                <div style={{ "display": "flex", "flexDirection": "column", "width": "100%", "height": "100%", "backgroundColor": "chocolate", "alignItems": "flex-start", "justifyContent": "space-around", "border": "10px solid white" }}>USER LIST:
                    {empList.map((item) => {
                        return <EmployeeCard item={item} />
                    })}
                </div>
                <div style={{ "display": "flex", "flexDirection": "column", "width": "100%", "height": "100%", "backgroundColor": "tomato", "alignItems": "center", "justifyContent": "center", "border": "10px solid white" }}>CURRENT USER:
                     <div style={{"display": "flex", "flexDirection": "column", "width": "200px", "height": "200px", "backgroundColor": "grey", "alignItems": "center", "justifyContent": "center", "border": "10px solid yellow", "borderRadius": "50%"}}>
                        {currName}
                     </div>
                </div>
            </div>

            <form>

                <div className="formCnt">
                    ADD NEW EMPLOYEE DETAILS:
                    <label>First Name:</label> {firstName}
                    <input onChange={(e) => {
                        setFirstName(e.target.value);
                    }} value={firstName}></input>
                    <label>Last Name:</label>
                    <input onChange={(e) => {
                        setLastName(e.target.value);
                    }} value={lastName}></input>
                    <label>Age:</label>
                    <input onChange={(e) => {
                        setNewAge(Number(e.target.value));
                    }} value={newAge}></input>
                    <label>id:</label>
                    <input onChange={(e) => {
                        setNewId(Number(e.target.value));
                    }} value={newId}></input>
                    <button onClick={(e) => {
                        handleSubmitFuc(e);
                    }}>ADD NEW EMPLOYEE</button>
                </div>
            </form>

        </>
    );
}


