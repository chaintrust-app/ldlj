import React from "react";
import { Meta, Story } from "@storybook/react";

import { Card, CardProps } from "../components/Card";
import { StoryBookWrapper } from "./config/StoryBookWrapper";

export default {
  title: "Ldlj/Card",
  component: Card,
} as Meta<typeof Card>;

export const ConfigurableButtonStory: Story<CardProps> = (args) => {
  return (
    <StoryBookWrapper>
      <Card {...args}>
        <h1>hello</h1>
      </Card>
    </StoryBookWrapper>
  );
};

export const SimpleCard: Story<CardProps> = (args) => {
  return (
    <StoryBookWrapper>
      <Card {...args}></Card>
    </StoryBookWrapper>
  );
};

export const JustifyContentStartCard: Story<CardProps> = (args) => {
  return (
    <StoryBookWrapper>
      <Card justifyContent="flex-start" height="30rem" {...args}>
        <h1>hello</h1>
      </Card>
    </StoryBookWrapper>
  );
};
