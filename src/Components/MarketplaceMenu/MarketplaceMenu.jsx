import React from "react";
import { MarketplaceMenuStyled, Link } from "./MarketplaceMenuStyled";
import { FiHome } from "react-icons/fi";
import { AiOutlineUser } from "react-icons/ai";
import { BiStore } from "react-icons/bi";
import { useLocation, useNavigate } from "react-router-dom";

const MarketplaceMenu = () => {
  const nav = useNavigate();
  const { pathname } = useLocation();
  // console.log(pathname);
  return (
    <MarketplaceMenuStyled>
      <Link
        active={pathname === "/marketplace"}
        onClick={() => {
          nav("/marketplace");
        }}
      >
        <FiHome />
      </Link>
      <Link
        active={pathname.includes("/item/") || pathname === "/product"}
        // onClick={() => {
        //   nav("/item:id");
        // }}
      >
        <BiStore />
      </Link>
      <Link
        active={pathname === "/artist"}
        onClick={() => {
          nav("/artist");
        }}
      >
        <AiOutlineUser />
      </Link>
    </MarketplaceMenuStyled>
  );
};

export default MarketplaceMenu;
