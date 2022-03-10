import React from "react";
import { IntlProvider } from "react-intl";

export const StoryBookWrapper = ({
  children,
}: {
  children: Array<JSX.Element> | JSX.Element;
}) => {
  return (
    <IntlProvider locale="fr" messages={storyBookTestMessages}>
      <link
        href="https://fonts.googleapis.com/css2?family=Poppins:wght@600;700&family=Roboto:ital,wght@0,400;0,500;0,700;1,400&display=swap"
        rel="stylesheet"
      />
      <div>{children}</div>
    </IntlProvider>
  );
};

const storyBookTestMessages = {
  "storybook.multiselect": "Membre des GAFAMs",
};
