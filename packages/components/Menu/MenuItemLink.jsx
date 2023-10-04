import React, { forwardRef, useState } from "react";
import { tv } from "tailwind-variants";
import { NavLink } from "react-router-dom";

const variants = tv({
  base: "relative flex items-center h-14 pl-4 leading-normal cursor-pointer isolate"
});

export default forwardRef((props, ref) => {
  const { to, className, children, ...rest } = props;
  console.log("to", to);
  const [current, setCurrent] = useState();
  const [selectedCurrent, setSelectedCurrent] = useState();
  const onMouse = (children) => {
    if (children != selectedCurrent) setCurrent(selectedCurrent)
  };
  return (
    <li
      ref={ref}
      {...rest}
      className={variants({ className })}
      onMouseOver={() => setCurrent(children)}
      onMouseOut={() => onMouse(children)}
      onClick={() => setSelectedCurrent(children)}
    >
      <NavLink
        to={to}
        className={({ isActive }) =>
          isActive
            ? "text-primary  w-[calc(100%+16px)] h-full flex items-center pl-4 -ml-4"
            : ""
        }
      >
        {children}
        {children == current && (
          <div
            className="absolute inset-0 bg-primary/25 z-[-1]"
          />
        )}
      </NavLink>
    </li>
  )
});
