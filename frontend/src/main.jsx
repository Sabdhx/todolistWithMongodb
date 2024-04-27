import React, { useContext } from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import Update from './Update.jsx';
import UseContext from './Usecontext.jsx';



ReactDOM.createRoot(document.getElementById('root')).render(
  <UseContext>
<BrowserRouter>
<Routes>
      <Route path="/" element={<App />} />
      <Route path="update/:id" element={<Update/>}/>
    </Routes>
    </BrowserRouter>
  </UseContext>

   

)
