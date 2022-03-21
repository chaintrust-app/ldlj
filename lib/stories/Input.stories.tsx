import {Input} from "../components/Input";
import {Meta} from "@storybook/react";
import {StoryBookWrapper} from "./config/StoryBookWrapper";
import React from "react";

export default {
    title: "Ldlj/Input",
    component: Input,
} as Meta<typeof Input>;


export const InputStory = () => {
    return (
        <StoryBookWrapper>
            <Input label={"Rechercher"}
                   value={""}
                   maxWidth={30}
                   shadowed={true}
                   noBorder={true}
                   isSearch={true} />
        </StoryBookWrapper>
    )
}