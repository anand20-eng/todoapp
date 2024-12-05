import React from 'react';
// import TodoList from './component/TodoList';
import "bootstrap/dist/css/bootstrap.min.css";
import Create from './component/Create';
import HeaderComp from './component/Card/Header'
import {BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './component/HomeComponent'
import UpdateComp from './component/updateComp';
function App() {

  return (
    //   <di
    //  {/* <TodoList /> */}
    //   <Home />
    //   </div>
    <div>
       <BrowserRouter>
      <Routes>
        <Route path="/" element={<HeaderComp />}> </Route>
        <Route path="/create" element={<Create />}> </Route>
        <Route path="/edit/:id" element={<UpdateComp />}> </Route>

        </Routes>
       </BrowserRouter>
    </div>
   
        );
}



        export default App;
