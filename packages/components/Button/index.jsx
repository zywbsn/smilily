import React from "react";
import Icon from "../Icon";
import { tv } from "tailwind-variants";

const BaseClass = "px-3 py-1.5 rounded-full text-sm font-medium min-w-[90px] text-[#ffffff] ";
const PrimaryClass = BaseClass + " bg-primary hover:bg-primary/50 ";
const ErrorClass = BaseClass + " bg-error hover:bg-error/50 ";
const TextClass = BaseClass + " text-primary hover:bg-primary/50 ";
const TextErrorClass = BaseClass + " text-error hover:bg-primary/50 ";

const TypeClass = {
  primary: PrimaryClass,
  error: ErrorClass,
  text: TextClass,
  "text error": TextErrorClass
};

const DisabledClass = {
  primary: " text-[#C3C3C3] cursor-not-allowed ",
  error: " text-[#C3C3C3] cursor-not-allowed ",
  text: " text-[#C3C3C3] cursor-not-allowed ",
  "text error": " text-[#C3C3C3] cursor-not-allowed "

};

const getClass = tv({
  base: "px-3 py-1.5 rounded-full text-sm font-medium min-w-[90px] text-[#ffffff]",
  variants: {
    type: {
      primary: "bg-primary hover:bg-primary/50",
      error: "bg-error hover:bg-error/50",
      text: "text-primary hover:text-primary/70",
      "text error": "text-error hover:text-error/70"
    },
    disabled: {
      true: "text-[#C3C3C3] cursor-not-allowed bg-primary/50 hover:bg-primary/50 hover:text-[#C3C3C3]"
    }
  },
  compoundVariants: [
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
  const Btn = rest.href ? "a" : "button";
  // const btnClass = (disabled ? DisabledClass[type] : TypeClass[type]) + className;
  const btnClass = "px-3 py-1.5 rounded-full text-sm font-medium min-w-[90px] text-[#ffffff] bg-primary";
  return (
    <>
      <Btn
        {...rest}
        onClick={disabled ? null : onClick}
        className={
          getClass({
            type,
            disabled,
            className
          })}
      >
        {icon ? <Icon className="h-3 mr-1" name={icon} size={size || 14} /> : null}
        {children}
      </Btn>
    </>
  );
});
