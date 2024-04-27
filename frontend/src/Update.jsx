import React, { useContext, useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { MyContext } from "./Usecontext";
import axios from "axios";

const Update = () => {
  const [updatedTask, setUpdatedTask] = useState();
  const id = useParams;
  const [input, setInput] = useState("");
  const Navigate = useNavigate("");

  useEffect(() => {
    axios
      .get("http://localhost:5000/get")
      .then((res) => {
        setUpdatedTask(res.data);

        console.log();
      })
      .catch((err) => {
        console.log(err)
      });
  }, [])
  const handleUpdate = () => {
    const data = axios.put(`http://localhost/update/${id}`, { updatedTask })
    if (data.status == 200) {
      Navigate("/")
    }
  };

  return (
    <div>
      <input
        type="text"
        className=""
        value={input}
        onChange={(e) => {
          setInput(e.target.value);
        }}
      />
      <button onClick={handleUpdate}>save</button>
    </div>
  );
};

export default Update;
