import React, { forwardRef } from "react";
import { tv } from "tailwind-variants";

const variants = tv({
  base: "py-2"
});

export default forwardRef((props, ref) => {
  const { className, children, ...rest } = props;

  return (
    <ul ref={ref} {...rest} className={variants({ className })}>
      {children}
    </ul>
  )
});