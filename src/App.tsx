import { useEffect, useState } from 'react';
import './App.css';
import { RenderList } from './RenderList';
function App() {
  console.log('called');
  let taskList = [{
    task: "Cleaning",
    efforts: 2
  },
  {
    task: "Laundary",
    efforts: 1
  }
    , {
    task: "Parking",
    efforts: 5
  }]

  const [list, setList] = useState([]);

  const [taskVal, settaskVal] = useState("");
  const [durationVal, setdurationVal] = useState("");
  const [error, setError] = useState("");

  useEffect(() => {
    if (taskList.length > 0) {
      setList(taskList);
    }
  }, [])

  function handleClick() {
    if (taskVal.length === 0 || durationVal.length === 0) {
      setError("Check the inputs");
      return;
    }
    else if ((Number(taskVal) >= -Infinity) || !(Number(durationVal) >= -Infinity)) {
      setError("Check the inputs type passed");
      return;
    }
    else {
      setError("");
    }
    let newList = [...list];
    let obj = {};
    obj["task"] = taskVal;
    obj["efforts"] = durationVal;
    newList.push(obj);
    setList(() => {
      return newList});
    setdurationVal("");
    settaskVal("");
  }

  console.log(list , 'list');
  return <div className='todoContainer'>
    <input onChange={(e) => {
      settaskVal(() => {
        return e.target.value;
      })
    }} placeholder='task' value={taskVal}></input>
    <input onChange={(e) => {
      setdurationVal(() => {
        return e.target.value;
      })
    }} placeholder='duration' value={durationVal} type="number"></input>
    {error.length && <p style={{ color: "red" }}>{error}</p>}
    <button onClick={handleClick}>
      Click Me to add task
    </button>
        <RenderList list={list} setList={setList}/>
  </div>
}

export default App;
