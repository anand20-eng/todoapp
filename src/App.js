import React from 'react';
// import TodoList from './component/TodoList';
import "bootstrap/dist/css/bootstrap.min.css";
// import Create from './component/Create';
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import HeaderComp from './component/Card/Header'
import ShopCard from './component/Card/shopCard'
import CardMenu from  './component/Card/CardMenu'
// import Home from './component/HomeComponent'

function App() {

  return (
    //   <di
    //  {/* <TodoList /> */}
    //   <Home />
    //   </div>
    <div>
      <BrowserRouter>
      <HeaderComp />

        <Routes>
          <Route path="/" element={< CardMenu />}> </Route>
          <Route path="/ShopCard/:id" element={<ShopCard />}> </Route>

        </Routes>
      </BrowserRouter>
    </div>

  );
}



export default App;
