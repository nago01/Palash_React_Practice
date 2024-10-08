import { useEffect, useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';
import { data } from './assets/employeeData';

function App() {
  const [employeeList, setEmployeeList] = useState(data);
  const [id, setId] = useState(0);
  const [search, currSearch] = useState('');
  const handleChange = (e) => {
    currSearch(e.target.value);
  };
  useEffect(() => {
    employeeList.map((item, index) => {
      if (item.id.toString() === search) {
        setId(index);
        return;
      }
    });
  }, [search]);

  return (
    <>
      <div>
        Search by Id :
        <input
          onChange={(e) => {
            handleChange(e);
          }}
        ></input>
      </div>
      <div className="mainContainer">
        <div className="listContainer">
          {employeeList.map((item, index) => {
            return (
              <div
                className={index === id ? 'selectedEmployee' : 'eachEmployee'}
                onClick={() => {
                  setId(index);
                }}
              >
                {item.id}
              </div>
            );
          })}
        </div>
        <div className="profilePic">
          Current Employee
          <div>{employeeList[id].id}</div>
          <div>{employeeList[id].firstName}</div>
        </div>
      </div>
    </>
  );
}

export default App;
