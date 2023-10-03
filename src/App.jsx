import React, { useRef } from "react";
import { Button, Select, Radio, Icon } from "smilily";



export default () => {
  const onButton = () => {
    console.log("onButton");
  };
  return (
    <>

      <div className="w-full min-h-screen bg-green-100 p-5">
        <div>
          <Icon name="Add" fill="#ff0000" />
          <Icon name="Bookmark" fill="#ff0000" />
        </div>
        <div className="mb-3">
          <Button onClick={onButton} className="text-green-300" icon="Add" type="primary" disabled>中文测试</Button>
          <Button type="primary">smilily</Button>
        </div>
        <div className="mb-3">
          <Button type="primary">smilily Button</Button>
          <Button type="error">smilily error</Button>

        </div>

        <div className="mb-3">
          <Button type="primary" href="https://www.baidu.com">smilily a</Button>
          <Button type="primary" disabled href="https://www.baidu.com">smilily a disabled</Button>
        </div>
        <div className="mb-3">
          <Button type="text error" title="smilily title">smilily text error</Button>
          <Button type="text error" disabled title="smilily title">smilily text error</Button>
        </div>
        <div className="mb-3">
          <Button type="text" title="smilily title">smilily text</Button>
          <Button type="text" disabled title="smilily title">smilily text</Button>
        </div>
        <Select />
        <Radio />
        <button disabled>1</button>

      </div >
    </>
  );
}
