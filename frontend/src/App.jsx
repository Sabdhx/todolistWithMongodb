import { useContext, useEffect, useState } from "react";
import "./App.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { MyContext } from "./Usecontext";

function App() {
  const { fetchData, todo, setTodo } = useContext(MyContext);
  const [input, setInput] = useState("");
  const [updateUI, setUpdateUI] = useState(false);

  const Navigate = useNavigate();

  useEffect(() => {
    fetchData();
  }, [updateUI]);

  const saveTodo = () => {
    if (input.trim() !== "") { // Ensure input is not empty
      axios
        .post("http://localhost:5000/post", { todo: input })
        .then((res) => {
          setUpdateUI(!updateUI);
          console.log(res.data);
          setInput(""); // Reset input after saving todo
        })
        .catch((err) => {
          console.log(err);
        });
    }
  };

  const deleteFun = (id) => {
    axios
      .delete(`http://localhost:5000/delete/${id}`)
      .then((res) => {
        setUpdateUI(!updateUI);
        console.log(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <>
      <div>
        <input
          type="text"
          className=""
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        category: <input type="text" />
        <button className="" onClick={saveTodo}>
          add
        </button>
      </div>

      <div>
        {todo.map((todoItem) => (
          <div key={todoItem._id}>
            {todoItem.todo}
            <button onClick={() => deleteFun(todoItem._id)}>delete</button>
            <button onClick={() => Navigate(`update/${todoItem._id}`)}>
              update
            </button>
          </div>
        ))}
      </div>
    </>
  );
}

export default App;
