import { createContext, useState } from "react";
import axios from "axios";
export const MyContext = createContext();

function UseContext({ children }) {
  const [state, setState] = useState(0);
  const [todo, setTodo] = useState([]);

  const [id,setId]=useState("")
  const fetchData = async () => {
    try {
      await axios
        .get("http://localhost:5000/get")
        .then((res) => {
          setTodo(res.data);
          setId(res.data.id)
          console.log();
        })
        .catch((err) => {
          console.log(err);
        })
    }
    catch (err)
    {
      console.error("Error fetching data:", err);
    }
  }
  return (
    <MyContext.Provider
      value={{ state, setState, fetchData, setTodo,  todo,id }}
    >
      {children}
    </MyContext.Provider>
  );
}
export default UseContext
