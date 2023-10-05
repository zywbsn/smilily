import React, { useState } from "react";
import { tv } from "tailwind-variants";
import { NavLink } from "react-router-dom";

const getClass = tv({
  base: "relative flex items-center h-14 pl-4 leading-normal cursor-pointer isolate"
});

export default React.forwardRef((props, ref) => {
  const { to, className, children, ...rest } = props;
  const [current, setCurrent] = useState();
  return (
    <li
      ref={ref}
      {...rest}
      className={getClass({ className })}
      onMouseOver={() => setCurrent(children)}
      onMouseOut={() => setCurrent(undefined)}
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
