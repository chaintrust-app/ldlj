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

export const Primary = Template.bind({});
Primary.args = {
  variant: "primary",
};

export const ConfigurableTextStory = () => {
  return (
    <StoryBookWrapper>
      <Text text="Text" />
    </StoryBookWrapper>
  );
};

export const TextStory = () => {
  return (
    <StoryBookWrapper>
      <Text text="Text" />
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
        color: "cornflower",
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
