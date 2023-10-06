import React from "react";
import { tv } from "tailwind-variants";

const getClass = tv({
  // base: "mr-1 w-4 h-4",
  base: "h-4 mr-1  w-4 border-gray-300 text-primary focus:ring-primary",
  variants: {
    disabled: {
      true: "text-disabled placeholder:text-disabled cursor-not-allowed bg-disabled/40 "
    }
  }
});

const Radio = React.forwardRef((props, ref) => {
  const { label, value, className, disabled, ...rest } = props;

  return (
    <>
      <label ref={ref} className="inline-block min-w-[100px]">
        <input {...rest} type="radio"
          className={getClass({ className, disabled })}
          value={value}
          disabled={disabled}
        />
        <span>{label}</span>
      </label>
    </>
  )
});

const GroupItem = React.forwardRef((props, ref) => {
  const { options, name, children, disabled, ...rest } = props;
  return (
    <>
      {options.map((item, index) => (
        <Radio key={index} name={name} {...rest} label={item.label ?? item} value={item.value ?? item} disabled={item.disabled ?? disabled} />
      ))}
      {children}
    </>
  )
});

const Group = React.forwardRef((props, ref) => {
  const { name } = props;
  const GroupName = name || React.useId();
  return (
    <>
      {
        props.options ?
          <GroupItem ref={ref} name={GroupName} {...props} />
          :
          null
      }
    </>
  )
});

Radio.Group = Group;

export default Radio;