import {SortButton} from "../components/SortButton";
import React from "react";
import {Meta, Story} from "@storybook/react";
import {StoryBookWrapper} from "./config/StoryBookWrapper";
import {useIntl} from "react-intl";

export default {
    title: "Ldlj/SortButton",
    component: SortButton,
} as Meta<typeof SortButton>;

export const SortButtonStorybook: Story<typeof SortButton> = (args) => {
    return (
        <StoryBookWrapper>
            <SortButtonStory />
        </StoryBookWrapper>
    )
}

const SortButtonStory = () => {
    const intl = useIntl();
    const options = [
        {value: "machin", label: "Machin"},
        {value: "bidule", label: "Bidule"}
    ]

    const sort = () => {
        console.log("SORT")
    }

    return (
       <SortButton sortMethod={sort} options={options} defaultOption={options[0]} intl={intl} />
    )
}