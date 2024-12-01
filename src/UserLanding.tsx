import { useEffect, useRef, useState } from "react";
import './App.css';
import { EmployeeCard } from "./EmployeeCard";

export const UserLanding = () => {
  const [user, setUsers] = useState([]);
  const [limit, setLimit] = useState(10);
  const [skip, setSkip] = useState(0);
  const btnRef = useRef();
  useEffect(() => {
    fetch(`https://dummyjson.com/user?limit=${limit}&skip=${skip}`).then((res) => {
      console.log(res, 'res1');
      return res.json();
    }).then((res) => {
      console.log(res, 'res2');
      setUsers(res?.users);
      return res;
    });
    console.log(user);
  }, [skip]);

  let arr = [0, 1, 2, 3, 4];

  return <div className="gridLayout">
    {user.map((item) => {
      return <EmployeeCard data={item} />
    })
    }
    {
      arr.map((item, index) => {
        return <button onClick={() => {
          setSkip(() => {
            index = index + 1;
            return index * 10;
          });
        }}>{item}</button>
      })
    }
  </div>
}