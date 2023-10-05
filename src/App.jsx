import React from "react";
import Layout from "./Layout";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import RouteList from "./RouteList";
import Home from "./pages/index"

console.log(RouteList);

export default () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/Components' element={<Layout />}>
            {RouteList.map((item, index) => {
              return <Route key={index} path={item.path} element={<item.component />} />;
            })}
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}
