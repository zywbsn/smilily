import Button from "./Button/index";
import Select from "./Select/index";
import Radio from "./Radio/index";

export { Button, Select, Radio };

const install = (App, options) => {
  const components = [Button, Select, Radio];
  components.forEach((component) => {
    App.component(component.name, component);
  });
};

export default { install };
