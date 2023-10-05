import React from "react";
import { tv } from "tailwind-variants";

const getClass = tv({
  base: "py-2"
});

export default React.forwardRef((props, ref) => {
  const { className, children, ...rest } = props;

  return (
    <ul ref={ref} {...rest} className={getClass({ className })}>
      {children}
    </ul>
  )
});