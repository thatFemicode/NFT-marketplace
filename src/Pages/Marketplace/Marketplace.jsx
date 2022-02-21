import React from "react";
import MarketplaceMenu from "../../Components/MarketplaceMenu/MarketplaceMenu";
import Tab from "../../Components/Tabs/Tab";
import tabs from "./data";
import { MarketplaceStyled, Pages, PageContainer } from "./MarketplaceStyled";

const Marketplace = () => {
  return (
    <MarketplaceStyled>
      <h1>ExpressSea</h1>
      <MarketplaceMenu />
      <PageContainer>
        <Tab tabs={tabs} />
      </PageContainer>
    </MarketplaceStyled>
  );
};

export default Marketplace;
