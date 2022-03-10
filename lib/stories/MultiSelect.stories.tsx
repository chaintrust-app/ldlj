import React, { useState } from "react";
import { Story, Meta } from "@storybook/react";

import { MultiSelect } from "../components/MultiSelect";
import { OptionList } from "../components/Select";
import { useIntl } from "react-intl";
import { StoryBookWrapper } from "./config/StoryBookWrapper";

export default {
  title: "Ldlj/MultiSelect",
  component: MultiSelect,
} as Meta<typeof MultiSelect>;

export const SimpleMultiSelectStory: Story<typeof MultiSelect> = (args) => {
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

export const MultiSelectWithSelectAllStory: Story<typeof MultiSelect> = (
  args
) => {
  return (
    <StoryBookWrapper>
      <MultiSelectWithSelectAll />
    </StoryBookWrapper>
  );
};

const MultiSelectWithSelectAll = () => {
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
      canToggleAllOptions={true}
    />
  );
};
