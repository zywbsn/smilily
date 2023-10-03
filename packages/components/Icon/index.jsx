import React from "react";
import * as Icon from "@icon-park/react";
export default ({ name, size, ...rest }) => {
  // console.log(name);
  // const key = name.slice(0, 1).toUpperCase() + name.slice(1).toLowerCase();
  const Element = Icon[name];
  return (
    <>
      {/* */}
      <Element {...rest} style={{ display: "inline-block" }} size={size || 24} />
    </>
  )

};