import React from "react";

export default React.forwardRef((props, ref) => {
  console.log("props", props);
  const { options } = props;
  return (
    <>
      <select className="bg-primary-dark min-w-[100px] rounded h-7 px-2">
        {/* <select> */}
        {options.map((item) => (
          <option key={item.value} value={item.value} >
            {item.label}
          </option>
        ))}
      </select>
    </>
  )
});