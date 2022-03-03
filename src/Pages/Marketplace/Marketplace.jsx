import React from "react";
import MarketplaceMenu from "../../Components/MarketplaceMenu/MarketplaceMenu";
import Tab from "../../Components/Tabs/Tab";
import tabs from "./data";
import { MarketplaceStyled, PageContainer } from "./MarketplaceStyled";
import MarketPlaceTopMenu from "../../Components/MarketplaceMenu/MarketPlaceMenuTop/MarketPlaceTopMenu";
const Marketplace = () => {
  return (
    <MarketplaceStyled>
      <MarketPlaceTopMenu />
      <MarketplaceMenu />
      <PageContainer>
        <Tab tabs={tabs} />
      </PageContainer>
    </MarketplaceStyled>
  );
};

export default Marketplace;
