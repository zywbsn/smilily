import React from "react";
import { tv } from "tailwind-variants";

export default React.forwardRef((props, ref) => {
  const { type, className, title, children, ...rest } = props;
  const getClass = tv({
    base: "inline-flex items-center rounded-md px-2 py-1 text-xs font-medium ring-1 ring-inset",
    variants: {
      type: {
        info: "bg-gray-50 text-gray-600  ring-gray-500/10",
        success: "bg-green-50 text-green-700  ring-green-600/20",
        warning: "bg-yellow-50 font-medium text-yellow-800  ring-yellow-600/20",
        error: "bg-red-50 font-medium text-red-700 ring-red-600/10"
      }
    }
  });
  return (
    <>
      <span {...rest} className={getClass({ type, className })}>
        {title || children || "--"}
      </span>
      {/* <span className="inline-flex items-center rounded-md bg-gray-50 text-gray-600 ring-gray-500/10">
        Badge
      </span>
      <span className="inline-flex items-center rounded-md bg-red-50 text-red-700 ring-red-600/10">
        Badge
      </span>
      <span className="inline-flex items-center rounded-md bg-yellow-50 text-yellow-800 ring-yellow-600/20">
        Badge
      </span>
      <span className="inline-flex items-center rounded-md bg-green-50  text-green-700 ring-green-600/20">
        Badge
      </span>
      <span className="inline-flex items-center rounded-md bg-blue-50 text-blue-700 ring-blue-700/10">
        Badge
      </span>
      <span className="inline-flex items-center rounded-md bg-indigo-50 text-indigo-700 ring-indigo-700/10">
        Badge
      </span>
      <span className="inline-flex items-center rounded-md bg-purple-50 text-purple-700 ring-purple-700/10">
        Badge
      </span>
      <span className="inline-flex items-center rounded-md bg-pink-50 text-pink-700 ring-pink-700/10">
        Badge
      </span> */}
    </>
  )
});