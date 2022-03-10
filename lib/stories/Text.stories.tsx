import React from "react";
import { Meta, Story } from "@storybook/react";

import { Text, TextProps } from "../components/Text";
import { StoryBookWrapper } from "./config/StoryBookWrapper";

export default {
  title: "Ldlj/Text",
  component: Text,
} as Meta<typeof Text>;

const Template: Story<TextProps> = (args) => (
  <StoryBookWrapper>
    <Text {...args} />
  </StoryBookWrapper>
);

export const ConfigurableTextStory = Template.bind({});
ConfigurableTextStory.args = {
  variant: "primary",
  text: "Text !!!",
};

export const TextStory = () => {
  return (
    <StoryBookWrapper>
      <Text text="Coucou tout le monde" />
    </StoryBookWrapper>
  );
};

export const TextBoldStory = () => (
  <StoryBookWrapper>
    <Text
      text="Text"
      textStyle={{
        fontWeight: 700,
      }}
    />
  </StoryBookWrapper>
);

export const TextColorStory = () => (
  <StoryBookWrapper>
    <Text
      text="Text"
      textStyle={{
        color: "shamrock",
      }}
    />
  </StoryBookWrapper>
);

export const TextFontStory = () => (
  <StoryBookWrapper>
    <Text
      text="Text"
      textStyle={{
        color: "cornflower",
        fontFamily: "Poppins",
      }}
    />
  </StoryBookWrapper>
);
