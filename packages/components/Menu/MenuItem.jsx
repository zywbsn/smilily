import React, { forwardRef, useState } from "react";
import { tv } from "tailwind-variants";

const getClass = tv({
  base: "relative flex items-center h-14 pl-4 leading-normal cursor-pointer isolate"
});

export default forwardRef((props, ref) => {
  const { className, children, ...rest } = props;
  const [current, setCurrent] = useState();

  return (
    <li
      ref={ref}
      {...rest}
      className={getClass({ className })}
      onMouseOver={() => setCurrent(children)}
      onMouseOut={() => setCurrent(undefined)}
    >
      {children}
      {children == current && (
        <div
          className="absolute inset-0 bg-primary/25 z-[-1]"
        />
      )}
    </li>
  )
});