import React, { useState } from "react";
import { Story, Meta } from "@storybook/react";

import { MultiSelect, MultiSelectProps } from "../components/MultiSelect";
import { OptionList } from "../components/Select";
import { IntlProvider, useIntl } from "react-intl";
import { StoryBookWrapper } from "./config/StoryBookWrapper";

export default {
  title: "Ldlj/MultiSelect",
  component: MultiSelect,
} as Meta<typeof MultiSelect>;

const Template: Story<typeof MultiSelect> = (args) => {
  return (
    <StoryBookWrapper>
      <MultiSelectWithIntl />
    </StoryBookWrapper>
  );
};

const MultiSelectWithIntl = () => {
  const intl = useIntl();
  const companiesOptions: OptionList<string> = [
    {
      value: "google",
      label: "Google",
    },
    {
      value: "apple",
      label: "Apple",
    },
    {
      value: "facebook",
      label: "Facebook",
    },
    {
      value: "amazon",
      label: "Amazon",
    },
    {
      value: "microsoft",
      label: "Microsoft",
    },
  ];

  const [selectedCompanies, setSelectedCompanies] = useState<readonly any[]>(
    []
  );

  return (
    <MultiSelect
      intl={intl}
      field={null}
      value={selectedCompanies}
      options={companiesOptions}
      label={"companies"}
      domain={"storybook"}
      optionType={"multiselect"}
      onChange={(newCompanies) => {
        setSelectedCompanies(newCompanies);
      }}
    />
  );
};

export const MultiSelectStory = Template.bind({});
