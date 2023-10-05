import React from "react";
import Icon from "../Icon";
import { tv } from "tailwind-variants";

const getClass = tv({
  base: "px-3 py-1 rounded-full text-sm font-medium min-w-[90px] text-[#ffffff]",
  variants: {
    type: {
      primary: "bg-primary hover:bg-primary/50",
      default: "text-[#333333] bg-[#ffffff] hover:bg-[#ffffff]/50",
      error: "bg-error hover:bg-error/50",
      text: "text-primary hover:text-primary/70",
      "text error": "text-error hover:text-error/70"
    },
    disabled: {
      true: "text-disabled cursor-not-allowed bg-disabled/40 hover:bg-disabled/40 hover:text-disabled"
    }
  },
  compoundVariants: [
    {
      type: "error",
      className: {
        disabled: {
          true: "bg-error/50 hover:bg-error/50"
        }
      }
    },
    {
      type: "text",
      className: "bg-transparent hover:bg-transparent"
    },
    {
      type: "text error",
      className: "bg-transparent hover:bg-transparent"
    }
  ],
  defaultVariants: {
    type: "primary"
  }
});

export default React.forwardRef((props, ref) => {
  const { children, type, onClick, className, icon, size, disabled, ...rest } = props;

  //存在 href 直接跳转
  const toHref = () => {
    window.location.href = rest.href;
  };
  return (
    <>
      <button
        ref={ref}
        {...rest}
        onClick={disabled ? null : rest.href ? toHref : onClick}
        className={
          getClass({
            type,
            className,
            disabled
          })}
      >
        {icon ? <Icon className="h-3 mr-1" name={icon} size={size || 14} /> : null}
        {children}
      </button>
    </>
  );
});
