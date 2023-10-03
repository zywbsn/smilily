import React from "react";

const BaseClass = "py-1.5 px-3 rounded-full text-sm font-medium min-w-[90px] text-[#ffffff]";
const PrimaryClass = BaseClass + " bg-primary-dark hover:bg-primary-dark/50 "
const ErrorClass = BaseClass + " bg-error hover:bg-error/50 "
const TextClass = BaseClass + " text-primary-dark hover:bg-primary-dark/50 "
const TextErrorClass = BaseClass + " text-error hover:bg-primary-dark/50 "
const InfoClass = BaseClass + " bg-info-dark hover:bg-primary/50 "
const SuccessClass = BaseClass + " bg-success-dark hover:bg-primary/50 "

const getClassName = (type) => {
  switch (type) {
    case "primary":
      return PrimaryClass;
    case "error":
      return ErrorClass;
    case "text":
      return TextClass;
    case "text error":
      return TextErrorClass;
    case "info":
      return InfoClass;
    case "success":
      return SuccessClass;
  }
};

export default React.forwardRef((props, ref) => {
  console.log("props", props);
  console.log("ref", ref);
  const { children, type, onClick, className } = props;
  console.log(PrimaryClass + className);
  return (
    <>
      <button
        onClick={onClick}
        className={getClassName(type) + className}
      >
        {children}
      </button >
    </>
  )
});