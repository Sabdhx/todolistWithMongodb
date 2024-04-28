import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

function UpdatePage() {
  const { id } = useParams();
  const [input, setInput] = useState("");
  const [category, setCategory] = useState("");

  useEffect(() => {
    const getData = async () => {
      try {
        const response = await axios.get("http://localhost:5000/todos/" + id);
        const { data } = response;
        setInput(data.todo); // Assuming 'todo' is the property that holds the todo text
        // Assuming 'category' is the property that holds the category
        setCategory(data.category); 
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    getData();
  }, []);
  

  const navigate = useNavigate();
  const updateinput = async () => {
    const data = await axios.put("http://localhost:5000/todos/" + id, {
      input,
      category
    });
    if (data.status == 200) {
      navigate("/");
    }
  };

  return (
    <div>
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <input
        type="text"
        value={category}
        onChange={(e) => setCategory(e.target.value)}
      />
      <button onClick={updateinput}>Update</button>
    </div>
  );
}

export default UpdatePage;
