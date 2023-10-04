import Button from "./Button/index";
import Select from "./Select/index";
import Radio from "./Radio/index";
import Icon from "./Icon/index";
import Menu from "./Menu/index";
import MenuItem from "./Menu/MenuItem";
import MenuGroup from "./Menu/MenuGroup";
import MenuItemLink from "./Menu/MenuItemLink";

export { Button, Select, Radio, Icon, Menu, MenuItem, MenuGroup, MenuItemLink };

const install = (App, options) => {
  const components = [Button, Select, Radio, Icon, Menu, MenuItem, MenuGroup, MenuItemLink];
  components.forEach((component) => {
    App.component(component.name, component);
  });
};

export default { install };
