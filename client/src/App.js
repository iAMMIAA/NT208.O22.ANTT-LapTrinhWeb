import React, {useState} from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom'; 
import AppClient from './App1';
import AppUser from './App2';

function App() {
  const [noLogIn, setLogIn] = useState(false);
  alert(noLogIn);
  return (
    <BrowserRouter> 
      <Routes>
        <Route path="*" element={<AppClient userLogged={()=>{setLogIn(true)}}/>}/>
        {noLogIn && 
          <Route path="/user/*" element={<AppUser />}/>
        }
        
      </Routes>
    </BrowserRouter>
  );
}

export default App;
