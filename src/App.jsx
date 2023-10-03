import React, { useRef } from "react";
import { Button, Select, Radio } from "smilily";



export default () => {
  return (
    <>
      <div className="w-full min-h-screen bg-green-100 p-5">
        <div className="mb-3">
          <Button type="primary">中文测试</Button>
        </div>
        <div className="mb-3">
          <Button type="primary">smilily</Button>
        </div>
        <div className="mb-3">
          <Button type="primary">smilily Button</Button>
        </div>
        <Select />
        <Radio />
      </div>
    </>
  );
}
