import React from "react";
import { Meta } from "@storybook/react";

import { Text } from "../components/Text";

export default {
  title: "Example/Text",
  component: Text,
} as Meta<typeof Text>;

export const TextStory = () => <Text text="Text" />;

export const TextColorStory = () => (
  <Text
    text="Text"
    textStyle={{
      color: "cornflower",
    }}
  />
);
