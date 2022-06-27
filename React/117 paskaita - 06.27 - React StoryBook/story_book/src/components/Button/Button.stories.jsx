import Button from "./Button";

export default {
  title: "Components/Button",
  component: Button,
};

const Template = args => <Button {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  text : "Primary button",
  type : "Primary"
}

export const Secondary = Template.bind({});
Secondary.args = {
  text : "Secondary button",
  type : "Secondary"
}

export const Success = Template.bind({});
Success.args = {
  text : "Success button",
  type : "Success"
}

export const Default = Template.bind({});
Default.args = {
}