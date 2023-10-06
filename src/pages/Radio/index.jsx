import { Radio } from "smilily";

export default () => {
  return (
    <>
      <Radio.Group name="test" options={["React", "Vue", "Angular", "Svelte"]} >
        <Radio name="test" label="radio1" />
        <Radio name="test" label="radio1" />
        <Radio name="test" label="radio1" disabled />
      </Radio.Group>
      <br />

      <Radio.Group name="test" options={[{ label: "React", value: 1, disabled: true }, { label: "Vue", value: 1, disabled: false }]} >
        <Radio name="test" label="radio1" />
        <Radio name="test" label="radio1" />
        <Radio name="test" label="radio1" disabled />
      </Radio.Group>
      <br />
      <div className="flex">
        <Radio name="1" label="radio" />
        <Radio name="1" label="radio1" />
      </div>
      <br></br>
      <div className="flex">
        <Radio name="2" label="radio" />
        <Radio name="2" label="radio1" />
      </div>
      <Radio.Group options={["React1", "Vue1", "Angular1", "Svelte1"]} />
    </>
  )
};