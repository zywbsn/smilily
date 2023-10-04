import React from "react";
import { Outlet } from "react-router-dom";
import { Menu, MenuGroup, MenuItemLink } from "smilily";
import Menus from "./Menu";


export default () => {
  return (
    <>
      <div className="w-full h-14 bg-white">Header</div>
      <div className="flex bg-gray-100 h-[calc(100vh-56px)]">
        <Menu className="w-60  h-[calc(100vh-56px)]  overflow-auto bg-white">
          {Menus.map((item, index) => {
            if (item.children) return (
              <MenuGroup key={index} label={item.label}>
                {item.children.map((child, idx) => (
                  <MenuItemLink key={idx} to={"Components/" + item.label + "/" + child.label}>{child.label}</MenuItemLink>
                ))}
              </MenuGroup>
            )
            return <MenuItemLink key={index} to={"Components/" + item.label}>{item.label}</MenuItemLink>
          })}
        </Menu>
        <div className="w-[calc(100vw-240px)] h-[calc(100vh-80px)] overflow-auto m-3 p-3 bg-white">
          <Outlet />
        </div>
      </div>
    </>
  )
};