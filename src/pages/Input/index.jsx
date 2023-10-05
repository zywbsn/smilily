import React, { useState } from "react";
import { Input, Button, Icon } from "smilily";

export default React.forwardRef(() => {
  const [value, setValue] = useState("");
  const InputRef = React.useRef(null);
  const btnRef = React.useRef(null);
  const sub = () => {
    console.log("btnRef", btnRef);
    console.log("value", value, InputRef);
  };
  // const ChangeValue = (e) => {
  //   setValue(InputRef.current.value);
  //   console.log(value);
  // };
  return (
    <>
      <div className="w-96">
        {/**
         * ref 
         * setValue 获取输的值
         * prefix 输入框前
         * suffix 输入框后
         * 
         */}
        <Input ref={InputRef} placeholder="请输入" setValue={setValue} />
        {value}
        <br></br>
        <Input prefix="￥" suffix={<Icon name="Add" />} placeholder="请输入" />
        <Input prefix="￥" suffix={<Icon name="Add" />} placeholder="请输入" type="number" />
        <br></br>
        <Input prefix="$" suffix={"@16fds3.com"} placeholder="请输入" />
        <Input prefix="$" placeholder="请输入" />
        <br></br>
        <Input placeholder="请输入" disabled />
        <br></br>
        <br></br>
        <Button onClick={sub}>sub</Button>
      </div>
    </>
  )
});