import React from "react";
import * as Icon from "@icon-park/react";
export default ({ name, size, ...rest }) => {
  const Element = Icon[name];
  return (
    <>
      {/* */}
      <Element {...rest} style={{ display: "inline-block" }} size={size || 24} />
    </>
  )

};