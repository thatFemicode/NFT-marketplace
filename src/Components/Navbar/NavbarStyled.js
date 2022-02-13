import styled from "styled-components";

export const NavbarStyled = styled.div`
  /* opacity: 0; */
  position: absolute;
  top: 0;

  width: 100%;

  z-index: 12;
  .navigation {
    position: relative;
    /* background: transparent; */
    z-index: 10;
    /* width: 100%; */
    /* display: flex; */
    /* justify-content: space-between; */
    /* align-items: center; */
    /* margin-left: auto;
    margin-right: auto; */
    padding-top: 1.5rem;
    padding-bottom: 1rem;
    padding-left: 2rem;
    padding-right: 2rem;
    /* @media (max-width: ${({ theme }) => theme.desktop}) {
      padding: 0 2rem;
    } */
    .logo {
      @media (max-width: ${({ theme }) => theme.images}) {
        width: 55px;
      }
      @media (max-width: ${({ theme }) => theme.make}) {
        width: 45px;
      }
      @media screen and (min-height: 100px) and (max-height: 600px) and (max-width: 1024px) {
        width: 65px;
      }
    }
    .mid-nav {
      transition: all 0.2s ease-in-out;
      @media (max-width: ${({ theme }) => theme.images}) {
        display: none;
      }
    }
  }
`;
export const Buttons = styled.button`
  background-color: var(--black);
  border: none;
  width: 2.5rem;
  height: 2.5rem;
  border-radius: 50%;
  margin: 0.5rem 0 0 0.5rem;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  &::before,
  &::after {
    content: "";
    background-color: var(--white);
    height: 2px;
    width: 1rem;
    position: absolute;
    transition: all 0.3s ease;
  }
  &::before {
    top: ${(props) => (props.clicked ? "1.5" : "1rem")};
    transform: ${(props) => (props.clicked ? "rotate(135deg)" : "rotate(0)")};
  }
  &::after {
    top: ${(props) => (props.clicked ? "1.2" : "1.5rem")};
    transform: ${(props) => (props.clicked ? "rotate(-135deg)" : "rotate(0)")};
  }
  @media (min-width: ${({ theme }) => theme.images}) {
    display: none;
  }
`;
export const Container = styled.nav`
  /* background: linear-gradient(150deg, #53f 15%, #05d5ff); */
  display: flex;
  align-items: center;
  justify-content: space-between;
  max-width: 1400px;
  margin: 0 auto;
  padding-top: 2rem;
  padding-left: 2rem;
  padding-right: 2rem;
  position: relative;
  z-index: 14;
  width: 100%;
  /* height: 100%; */
  /* width: 100%; */
  @media screen and (max-width: 1300px) {
    /* max-width: 1100px; */
  }
  @media screen and (max-width: 1100px) {
    max-width: 900px;
  }
  .options {
    display: flex;
    align-items: center;
    justify-content: center;

    @media (max-width: ${({ theme }) => theme.nav}) {
      display: none;
    }
  }
  .hashtag {
    /* display: flex; */
    /* align-items: center; */
    /* justify-self: flex-end; */
    @media (max-width: ${({ theme }) => theme.nav}) {
      display: none;
    }
  }
  .mobile-nav {
    width: 100%;
    display: flex;
    align-items: flex-end;
    justify-content: flex-end;
    button {
      display: flex;
      align-items: center;
      background: transparent;
      border: none;
    }
    @media (min-width: ${({ theme }) => theme.nav}) {
      display: none;
    }
  }
`;
export const DropdownStyles = styled.div`
  .dropdown-option {
    padding: 0 20px;
    outline: 0;
    color: #000;
    /* font-size: 18px; */
    border: none;
    transition: opacity 0.2s;
    background: transparent;
    cursor: pointer;
    &:hover,
    &:focus {
      opacity: 0.55;
    }
  }

  .dropdown-root {
    z-index: 10;
    position: absolute;
  }

  .dropdown-arrow {
    position: relative;

    &::before {
      content: "";
      position: absolute;
      width: 16px;
      height: 16px;
      background: #fff;
      top: -15.5px;
      left: -8px;
      border-radius: 4px 0 0 0;

      transform: rotate(45deg);
    }
  }

  .dropdown-container {
    position: absolute;
    overflow: hidden;
    box-shadow: 0 50px 100px -20px rgba(50, 50, 93, 0.25),
      0 30px 60px -30px rgba(0, 0, 0, 0.3),
      0 -18px 60px -10px rgba(0, 0, 0, 0.025);

    background: #fff;
    border-radius: 6px;
    width: 100%;
    top: -10px;
    z-index: 11;
  }

  .dropdown-section {
    position: absolute;
    /* background: #fff; */
  }

  .dropdown-background {
    position: absolute;
    bottom: 0;
    background: #f6f9fc;
    width: 100%;
  }
`;
