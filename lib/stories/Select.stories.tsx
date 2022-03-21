import {Meta, Story} from "@storybook/react";
import React from "react";

import { useIntl } from "react-intl";
import {OptionList, Select} from "../components/Select";
import {StoryBookWrapper} from "./config/StoryBookWrapper";

export default {
    title: "Ldlj/Select",
    component: Select,
} as Meta<typeof Select>;

export const SelectStoryBook: Story<typeof Select> = (args) => {
    return (
        <StoryBookWrapper>
            <SelectStory />
        </StoryBookWrapper>
    )
}

const SelectStory = () => {

    const intl = useIntl();
    const options: OptionList<string> = [
        {value: "machin", label: "Machin"},
        {value: "bidule", label: "Bidule"}
    ]

    return (
       <Select options={options} value={options[1]} selectType={"sort"} intl={intl} />
    )
}