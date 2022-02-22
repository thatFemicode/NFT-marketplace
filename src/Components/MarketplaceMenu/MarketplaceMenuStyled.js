import styled from "styled-components";

export const MarketplaceMenuStyled = styled.nav`
  display: flex;
  background-color: rgba(255, 255, 255, 0.01);
  position: fixed;
  bottom: 0;
  justify-content: space-around;
  align-items: center;
  width: 100%;
  height: 60px;
  backdrop-filter: blur(50px);
  z-index: 20;
`;
export const Link = styled.a`
  font-size: 1.3rem;
  @media (max-width: ${({ theme }) => theme.max}) {
    font-size: 1rem;
  }
  ${(p) => (p.active ? `color:#FF164E;` : "")}
  position: relative;
  cursor: pointer;

  ::before {
    ${(p) => (!p.active ? "display:none;" : "")}
    content: "";
    position: absolute;
    left: 0;
    bottom: 0;
    width: 0.3rem;
    border-radius: 50%;
    margin-left: 50%;
    transform: translateX(-50%);
    height: 0.3rem;
    background-color: #ff164e;
    @media (max-width: ${({ theme }) => theme.max}) {
      bottom: -0.2rem;
    }
  }
`;
