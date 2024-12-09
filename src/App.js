import React from 'react';
// import TodoList from './component/TodoList';
import "bootstrap/dist/css/bootstrap.min.css";
// import Create from './component/Create';
import {BrowserRouter, Route, Routes } from 'react-router-dom'
import HeaderComp from './component/Card/Header'
import ShopCard from './component/Card/shopCard';
import CardData from './component/Card/cardData';
import Cards from './component/Card/card';
// import Home from './component/HomeComponent'

function App() {

  return (
    //   <di
    //  {/* <TodoList /> */}
    //   <Home />
    //   </div>
    <div>
      <HeaderComp />
       <BrowserRouter>
      <Routes>
        <Route path="/" element={< Cards/>}> </Route>
        <Route path="/CardData" element={<CardData />}> </Route>
        <Route path="/ShopCard" element={<ShopCard />}> </Route>

        </Routes>
       </BrowserRouter>
    </div>
   
        );
}



        export default App;
