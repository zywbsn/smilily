import React from "react";
import { tv } from "tailwind-variants";

export default React.forwardRef((props, ref) => {
  const { type, setValue, disabled, prefix, suffix, style, ...rest } = props;
  const InputRef = React.useRef(null)
  const getClass = tv({
    base: "overflow-hidden block w-full rounded-md py-1 text-gray-900 shadow-sm placeholder:text-gray-400 sm:text-sm sm:leading-6",
    variants: {
      disabled: {
        true: "text-disabled placeholder:text-disabled cursor-not-allowed bg-disabled/40 "
      },
      prefix: {
        [prefix]: "pl-6 ",
      }
    }
  });

  const changeValue = () => {
    if (type === "number") return setValue(Number(ref ? ref.current.value : InputRef.current.value));
    return setValue(ref ? ref.current.value : InputRef.current.value);
  };
  return (
    <div className={
      disabled ?
        "relative rounded-md shadow-sm" :
        "border-2 border-disabled hover:border-primary rounded-md  hover:border-2 relative shadow-sm"
    }>
      {
        prefix ?
          <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center rounded-s-md  px-1 bg-gradient-to-r from-[#EBEBEB] to-[#FFFFFF]">
            <span className="text-gray-400/50 sm:text-sm">{prefix}</span>
          </div>
          : null
      }

      <input
        onChange={setValue ? changeValue : null}
        {...rest}
        ref={ref || InputRef}
        disabled={disabled}
        className={
          getClass({ disabled, prefix })
        }
        type={type}
        style={{
          paddingRight: typeof suffix === "object" ? "40px" : (suffix && suffix.length) + "0px",
          ...style
        }}
      />
      {
        suffix ?
          <div className="absolute inset-y-0 right-0 flex items-center bg-gradient-to-r from-[#FFFFFF] to-[#EBEBEB] rounded-e px-2">
            <span className="text-gray-400/50  sm:text-sm flex items-center">{suffix}</span>
          </div>
          : null
      }
    </div>
  )
});