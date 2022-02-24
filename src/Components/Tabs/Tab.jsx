import React, { useState } from "react";
import ScrollToTop from "../ScrollToTop/ScrollToTop";
import { TabStyled, Content, TitlesContainer, Title } from "./TabStyled";

const Tab = ({ tabs }) => {
  const [CurrentTab, SetCurrentTab] = useState(tabs[0]);

  return (
    <TabStyled>
      <ScrollToTop />
      <TitlesContainer>
        {tabs.map((tab) => {
          return (
            <Title
              onClick={() => {
                if (CurrentTab.id !== tab.id) {
                  SetCurrentTab(tab);
                }
              }}
              active={CurrentTab.id === tab.id}
              key={tab.id}
            >
              {tab.title}
            </Title>
          );
        })}
      </TitlesContainer>
      <Content>{CurrentTab.content}</Content>
    </TabStyled>
  );
};

export default Tab;
