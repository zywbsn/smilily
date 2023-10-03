import * as Icons from "@icon-park/react";
import { Icon } from "smilily";
const IconsList = () => {
  let IconsKeys = [];
  const IconsNameKeys = [];
  for (const key in Icons) {
    IconsNameKeys.push(key);
  }
  IconsKeys = IconsNameKeys.slice(2650);
  return (
    <>
      {IconsNameKeys.map((item) => (
        <React.Fragment key={item}>
          <div className="flex items-center">
            <span className="ml-1">{item}</span>
          </div>
        </React.Fragment>
      ))}
      {IconsKeys.map((item) => (
        <React.Fragment key={item}>
          <div className="flex items-center">
            <Icon name={item} />
            <span className="ml-1">{item}</span>
          </div>
        </React.Fragment>
      ))}
    </>
  );
};

const IconsPage = () => (
  <div className="grid gap-2 grid-cols-5">
    {IconsList()}
  </div>
);

export default IconsPage