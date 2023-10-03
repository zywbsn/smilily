import React from "react";
import Icon from "../Icon";

const BaseClass = "px-3 py-1.5 rounded-full text-sm font-medium min-w-[90px] text-[#ffffff] ";
const PrimaryClass = BaseClass + " bg-primary hover:bg-primary/50 "
const ErrorClass = BaseClass + " bg-error hover:bg-error/50 "
const TextClass = BaseClass + " text-primary hover:bg-primary/50 "
const TextErrorClass = BaseClass + " text-error hover:bg-primary/50 "
const InfoClass = BaseClass + " bg-info-dark hover:bg-primary/50 "
const SuccessClass = BaseClass + " bg-success-dark hover:bg-primary/50 "

const getClassName = (type, disabled) => {
  switch (type) {
    case "primary":
      return PrimaryClass;
    case "error":
      return ErrorClass;
    case "text":
      if (!disabled) {
        return TextClass;
      } else {
        return " ";
      }
    case "text error":
      if (!disabled) {
        return TextErrorClass;
      } else {
        return " ";
      }
    case "info":
      return InfoClass;
    case "success":
      return SuccessClass;
  }
};

const getDisableClass = (type, disabled) => {
  if (!["text", "text error"].includes(type) && disabled) {
    return " bg-primary/50 text-[#C3C3C3] cursor-not-allowed ";
  } else if (disabled) {
    return " text-[#C3C3C3] cursor-not-allowed ";
  }

};

export default React.forwardRef((props, ref) => {
  const { children, type, onClick, className, icon, size, disabled, ...rest } = props;
  const Btn = rest.href ? "a" : "button";
  const btnClass = getClassName(type, disabled) + getDisableClass(type, disabled) + className;
  return (
    <>
      <Btn
        {...rest}
        onClick={disabled ? null : onClick}
        className={btnClass}
      >
        {icon ? <Icon className="h-3 mr-1" name={icon} size={size || 14} /> : null}
        {children}
      </Btn>
    </>
  )
});