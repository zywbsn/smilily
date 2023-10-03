import React from "react";

export default React.forwardRef((props, ref) => {
  console.log("props", props);
  console.log("ref", ref);
  const { children } = props;
  return (
    <>
      <button
        className="py-1.5 px-3 rounded-full bg-primary-dark text-sm font-medium min-w-[90px] text-[#ffffff]"
      >
        {children}
      </button >
    </>
  )
});