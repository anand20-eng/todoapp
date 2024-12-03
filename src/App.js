import React from 'react';
// import TodoList from './component/TodoList';
import "bootstrap/dist/css/bootstrap.min.css";
import Create from './component/Create';
import {BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './component/HomeComponent'
function App() {

  return (
    //   <div >
    //  {/* <TodoList /> */}
    //   <Home />
    //   </div>
    <div>
       <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}> </Route>
        <Route path="/create" element={<Create />}> </Route>
        </Routes>
       </BrowserRouter>
    </div>
   
        );
}



        export default App;
