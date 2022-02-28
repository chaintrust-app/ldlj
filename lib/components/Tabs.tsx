import styled, { css } from "styled-components";
import { Link, LinkProps, useMatch, useResolvedPath } from "react-router-dom";
import { Fragment, ReactNode } from "react";
import { bump, colors } from "../design.config";
import * as React from "react";

export interface TabObject {
  to: string;
  title: string;
  icon: ReactNode;
  isDisplayed: boolean;
}

interface TabProps extends LinkProps {
  useMatch: typeof useMatch;
  useResolvedPath: typeof useResolvedPath;
}

const Tab = ({
  useMatch,
  useResolvedPath,
  children,
  to,
  ...props
}: TabProps) => {
  let resolved = useResolvedPath(to);
  let match = useMatch({ path: resolved.pathname, end: true });

  return (
    <>
      <StyledLink to={to} match={match} Link={Link} {...props}>
        {children}
      </StyledLink>
      <Underline match={match} />
    </>
  );
};

interface MatchingLink {
  match: unknown;
  Link?: typeof Link;
}

interface TabsProps {
  useMatch: typeof useMatch;
  useResolvedPath: typeof useResolvedPath;
  tabs: TabObject[];
}
export const Tabs = ({ useMatch, useResolvedPath, tabs }: TabsProps) => {
  return (
    <>
      <nav>
        <TabsWrapper id="tabList">
          {tabs.map((tab, i) => (
            <Fragment key={i}>
              {tab.isDisplayed && (
                <ListItem key={tab.to}>
                  <Tab
                    to={tab.to}
                    useMatch={useMatch}
                    useResolvedPath={useResolvedPath}
                  >
                    {tab.icon}
                    {tab.title}
                  </Tab>
                </ListItem>
              )}
            </Fragment>
          ))}
        </TabsWrapper>
      </nav>
    </>
  );
};

const TabsWrapper = styled.ul`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0;
  padding: 0;
`;

const ListItem = styled.li`
  list-style-type: none;
  padding: 0 2.5rem;
`;

// !important to override rsuite global css
const StyledLink = styled((props) => <props.Link {...props} />)<MatchingLink>`
  font-family: "Poppins", sans-serif;
  font-weight: 600;
  font-size: 1.75rem;
  display: flex;
  align-items: center;
  color: ${(props) =>
    props.match
      ? `${colors.cornflower} !important`
      : `${colors.steelBlue} !important`};

  text-decoration: none;

  transition: color 0.35s ease-in-out 0.1s;

  & svg {
    padding-right: 0.75rem;
    width: 2rem;
    height: 2rem;
  }

  & path {
    transform-origin: center;

    animation: ${(props) =>
      props.match
        ? css`0.6s ${bump} 0.3s ease-in-out` /* stylelint-disable-line */
        : ""};
    transition: fill 0.6s ease-in-out;
    fill: ${(props) =>
      props.match ? `${colors.cornflower}` : `${colors.steelBlue}`};
  }
`;

const Underline = styled.div<MatchingLink>`
  border-top: ${(props) =>
    props.match ? `2px solid ${colors.cornflower}` : `2px solid transparent`};
  border-radius: 5px;
  transition: border-top 0.35s ease-in-out 0.1s;
`;
