import React, { useRef } from "react";
import {
  Button, Select, Radio, Icon, Menu, MenuItem, MenuGroup, MenuItemLink
} from "smilily";
import Layout from "./Layout";
import Menus from "./Menu";
import { BrowserRouter, Routes, Route, useLocation, useNavigate } from "react-router-dom";
import RouteList from "./RouteList";

console.log("routeList", RouteList);


export default () => {
  // const Navigate = useNavigate();
  // const { pathname } = useLocation();
  // console.log("pathname", pathname);

  const list = ['HTML', 'Tailwind CSS', 'Vue']
  const onButton = () => {
    console.log("onButton");

  };
  const onItem = (val) => {
    console.log("onItem", val);
    // Navigate("/Layout");
  };
  const Text = RouteList[0].component;
  return (
    <>
      <BrowserRouter>
        <Routes>
          {/* <Route path='/' element={<Login />} /> */}
          <Route path='/' element={<Layout />}>
            {RouteList.map((item, index) => {
              console.log("item", item);
              return <Route key={index} path={item.path} element={<item.component />} />;
            })}
          </Route>
          {/* {RouteList.map((item, index) => {
            console.log("item", item);
            return <Route key={index} path={item.path} element={<item.component />} />;
          })} */}
        </Routes>
      </BrowserRouter>
      {/* <Layout /> */}
      {/* <div className="w-full min-h-screen bg-green-100 p-5">
        <Button onClick={onButton} className="text-green-300" icon="Add" type="primary">To Example</Button>
        <div className="bg-blue-200 w-60 my-3">
          <Menu>
            {list.map((item) => (
              <MenuItem key={item} onClick={() => onItem(item)}>{item}</MenuItem>
            ))}
            <MenuGroup label="React">
              {['Next.js', 'Zustand', 'Framer Motion', 'Actify'].map((item) => (
                <MenuItem key={item} onClick={() => onItem(item)}>{item}</MenuItem>
              ))}
            </MenuGroup>
          </Menu>
        </div>
        <div>
          <Icon name="Add" fill="#ff0000" />
          <Icon name="Bookmark" fill="#ff0000" />
        </div>
        <div className="mb-3">
          <Button onClick={onButton} className="text-green-300" icon="Add" type="primary" disabled>中文测试</Button>
          <Button type="primary">smilily</Button>
        </div>
        <div className="mb-3">
          <Button type="error">smilily Button</Button>
          <Button type="error" disabled>smilily error</Button>

        </div>

        <div className="mb-3">
          <Button type="default">smilily default</Button>
          <Button type="default" disabled>smilily default disabled</Button>

        </div>

        <div className="mb-3">
          <Button type="primary" href="https://www.baidu.com">smilily a</Button>
          <Button type="primary" disabled href="https://www.baidu.com">smilily a disabled</Button>
        </div>
        <div className="mb-3">
          <Button type="text error" title="smilily title">smilily text error</Button>
          <Button type="text error" disabled title="smilily title">smilily text error</Button>
        </div>
        <div className="mb-3">
          <Button type="text" title="smilily title">smilily text</Button>
          <Button type="text" disabled title="smilily title">smilily text</Button>
        </div>
        <Select />
        <Radio />
        <button disabled>1</button>

      </div > */}
    </>
  );
}
