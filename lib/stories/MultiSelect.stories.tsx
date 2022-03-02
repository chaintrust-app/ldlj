import React from "react";
import { Story, Meta } from "@storybook/react";

// import { MultiSelect, MultiSelectProps } from "../lib/components/MultiSelect";
import { useIntl } from "react-intl";

interface MultiSelectProps {
  name: string;
}
const MultiSelect = (props: MultiSelectProps) => {
  return <div>{props.name}</div>;
};
export default {
  title: "MultiSelect",
  component: MultiSelect,
  argTypes: {},
} as Meta<typeof MultiSelect>;

const Template: Story<MultiSelectProps> = (args) => <MultiSelect {...args} />;

export const SimpleMultiSelect = Template.bind({});
SimpleMultiSelect.args = {
  name: "aaa",
};
