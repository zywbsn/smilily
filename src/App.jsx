import React from "react";
import Layout from "./Layout";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import RouteList from "./RouteList";

export default () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Layout />}>
            {RouteList.map((item, index) => {
              return <Route key={index} path={item.path} element={<item.component />} />;
            })}
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}
