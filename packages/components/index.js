import Button from "./Button/index";
import Input from "./Input/index";
import Select from "./Select/index";
import Radio from "./Radio/index";
import Icon from "./Icon/index";
import Menu from "./Menu/index";
import MenuItem from "./Menu/MenuItem";
import MenuGroup from "./Menu/MenuGroup";
import MenuItemLink from "./Menu/MenuItemLink";
import Tag from "./Tag/index";

export { Button, Input, Select, Radio, Icon, Menu, MenuItem, MenuGroup, MenuItemLink, Tag };

const install = (App, options) => {
  const components = [
    Button,
    Input,
    Select,
    Radio,
    Icon,
    Menu,
    MenuItem,
    MenuGroup,
    MenuItemLink,
    Tag
  ];
  components.forEach((component) => {
    App.component(component.name, component);
  });
};

export default { install };
