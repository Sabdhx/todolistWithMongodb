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
    axios
      .post("http://localhost:5000/post", { todo: input })
      .then((res) => {
        setUpdateUI(!updateUI);
        console.log(res.data);
        setInput("");
      })
      .catch((err) => {
        console.log(err);
      });
    console.log("save");
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
          onChange={(e) => {
            setInput(e.target.value);
          }}
        />
        category: <input type="text" />
        <button className="" onClick={saveTodo}>
          add
        </button>
      </div>

      <div>
        {todo.map((todo) => {
          return (
            <div key={todo._id}>
              {todo.todo}
              <button onClick={() => deleteFun(todo._id)}>delete</button>
              <button onClick={() => Navigate(`update/${todo._id}`)}>
                update
              </button>
            </div>
          );
        })}
      </div>
    </>
  );
}

export default App;
