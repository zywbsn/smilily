import React, { useState } from "react";
import { tv } from "tailwind-variants";
import Icon from "../Icon";


const getClass = tv({
  base: "px-4 cursor-pointer relative isolate"
});

export default React.forwardRef((props, ref) => {
  const [open, setOpen] = useState(false);
  const [hovered, setHovered] = useState(false);
  const { style, className, label, children, ...rest } = props;

  return (
    <li ref={ref} {...rest} style={style} className={getClass({ className })}>
      <div
        className="h-14 flex items-center justify-between"
        onMouseOver={() => setHovered(true)}
        onMouseOut={() => setHovered(false)}
        onClick={() => setOpen(!open)}
      >
        {label}
        <Icon
          name="Down"
          className={`transition-transform ${open ? "rotate-180" : ""}`}
        />
      </div>
      {hovered && (
        <div
          className="h-14 absolute inset-0 bg-primary/25  z-[-1]"
        />
      )}
      <div
        className={`transition-all duration-300 ease-in-out grid ${open ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'
          }`}
      >
        <ul className="overflow-hidden">
          {React.Children.map(
            children,
            (child) =>
              React.isValidElement(child) &&
              React.cloneElement(child, {
                ...child.props
              })
          )}
        </ul>
      </div>
    </li>
  )
});
