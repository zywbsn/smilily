import Button from "./Button/index";
import Select from "./Select/index";
import Radio from "./Radio/index";
import Icon from "./Icon/index";

export { Button, Select, Radio, Icon };

const install = (App, options) => {
  const components = [Button, Select, Radio, Icon];
  components.forEach((component) => {
    App.component(component.name, component);
  });
};

export default { install };
