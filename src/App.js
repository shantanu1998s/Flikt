// App.js
import React from 'react';
import { useSelector } from 'react-redux';
import CrudTable from './curd/CurdTable';
import Login from './login/Login';
import NavBar from './header/NavBar';



function App() {
  const toggle= useSelector((store) => store.user.user);
  console.log(toggle)
  return (
    <div className="App">
       <NavBar/>
      {
        
        toggle ? <CrudTable/> : <Login/>
      }
    </div>
  );
}

export default App;
