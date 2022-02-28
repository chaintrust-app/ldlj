import * as React from "react";
import { Text } from "./Text";
import { ElementType } from "react";

interface LinkProps {
  text: string;
  href: string;
  RouterLink: ElementType
}

export const Link = ({ text, href, RouterLink }: LinkProps) => {
  return (
    <RouterLink to={href}>
      <Text
        text={text}
        textStyle={{
          fontWeight: 500,
          color: "cornflower",
          fontSize: 1.75,
          fontFamily: "Roboto",
          underline: true,
          cursor: "pointer",
        }}
      />
    </RouterLink>
  );
};
