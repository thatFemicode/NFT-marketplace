import styled from "styled-components";

export const MarketplaceStyled = styled.main`
  display: flex;
  flex-direction: column;
  position: relative;
  left: 0;
  top: 0;
  width: 100%;
  overflow: hidden;
  height: 100vh;
  overflow-x: hidden;
  align-items: center;
`;
export const Pages = styled.div`
  flex: 1;
  display: flex;
  overflow: hidden;
  overflow-x: hidden;
`;
export const PageContainer = styled.div`
  /* background-color: #f4f4f4; */
  /* flex: 1; */

  overflow: auto;
  overflow-x: hidden;
  padding-top: 1rem;
  -ms-overflow-style: none; /* Internet Explorer 10+ */
  scrollbar-width: none; /* Firefox */
  &::-webkit-scrollbar {
    display: none;
  }
`;
