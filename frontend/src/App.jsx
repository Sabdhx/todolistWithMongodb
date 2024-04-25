import { useEffect, useState } from "react";
import "./App.css";
import axios from "axios";

function App() {
  
  const [input,setInput] = useState("")
  const [todo,setTodo] = useState([])
  const [updateUI,setupdateUI] = useState(false)

  useEffect(() => {
    axios
      .get("http://localhost:5000/get")
      .then((res) => {
        setTodo(res.data)
      })
      .catch((err) => {
        console.error("Error fetching data:", err)
      })
  })
  
  

  const addingTask = () => {
    axios.post("http://localhost:5000/post",{todo:input})
    .then((res)=>{
      console.log(res.data)
      setupdateUI(prev => !prev)
      setInput("")
    })
    .catch((err)=>{
      console.error("Error fetching data:", err)
    })
  }

 

  return (
    <>
      <div>
        text: <input type="text" className="" 
        value={input}
        onChange={(e)=>{
          setInput(e.target.value)
        }}
        />
        category: <input type="text" />
        <button className=""
        onClick={()=>{addingTask}}
        >add</button>
      </div>
    </>
  );
}

export default App;
