import React from "react";
import { OuterLayout } from "../../Layout/Layout";
import { FooterStyled } from "./FooterStyled";
import Logo from "./Img/slack.svg";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <FooterStyled>
      <OuterLayout>
        <div className="footer">
          <div className="footer-top">
            <div className="footer-top-left">
              <h1>Dont admire from afar, stay in the loop</h1>
              <p className="content">
                Join our mailing list to stay in the loop with our newest
                feature releases, NFT drops, and tips and tricks for navigating
                ExpressSea.
              </p>
              <form className="form">
                <div className="form-content">
                  <div className="form-content-input">
                    <input
                      placeholder="Your email address"
                      name="email"
                    ></input>
                  </div>
                  <Link to="/marketplace">
                    <button>Marketplace</button>
                  </Link>
                </div>
              </form>
            </div>
            <div className="footer-top-right">
              <h1>Join the community</h1>
              <div className="icons">
                <div className="icon twitter">
                  <svg className="" fill="#000" viewBox="0 0 18 16">
                    <path d="M.09 13.791c1.992.14 3.728-.344 5.327-1.571-.816-.098-1.527-.311-2.127-.786-.584-.466-1.032-1.047-1.272-1.841h1.48c.008-.033.016-.066.024-.107-.816-.237-1.512-.663-2.032-1.342-.52-.67-.775-1.448-.8-2.3.52.148 1.016.295 1.52.434.016-.033.04-.065.056-.098-.72-.606-1.24-1.334-1.431-2.275a3.92 3.92 0 01.391-2.7c2 2.389 4.511 3.715 7.598 3.936-.096-.778-.104-1.498.16-2.202.912-2.463 3.983-3.249 5.894-1.481.216.196.4.229.632.147.632-.229 1.255-.474 1.903-.72-.248.81-.784 1.408-1.415 1.989.615-.164 1.231-.336 1.839-.5.024.025.048.041.072.066-.464.491-.912 1.007-1.415 1.449-.272.237-.36.458-.376.818-.144 4.01-1.752 7.25-5.175 9.289-3.487 2.07-7.077 1.947-10.612-.025-.064-.04-.12-.09-.24-.18z"></path>
                  </svg>
                </div>
                <div className="icon instagram">
                  <svg className="" fill="#000" viewBox="0 0 24 24">
                    <path d="M15.75 2H8.25C4.79875 2 2 4.79875 2 8.25V15.75C2 19.2012 4.79875 22 8.25 22H15.75C19.2012 22 22 19.2012 22 15.75V8.25C22 4.79875 19.2012 2 15.75 2ZM20.125 15.75C20.125 18.1625 18.1625 20.125 15.75 20.125H8.25C5.8375 20.125 3.875 18.1625 3.875 15.75V8.25C3.875 5.8375 5.8375 3.875 8.25 3.875H15.75C18.1625 3.875 20.125 5.8375 20.125 8.25V15.75Z"></path>
                    <path d="M12 7C9.23875 7 7 9.23875 7 12C7 14.7613 9.23875 17 12 17C14.7613 17 17 14.7613 17 12C17 9.23875 14.7613 7 12 7ZM12 15.125C10.2775 15.125 8.875 13.7225 8.875 12C8.875 10.2763 10.2775 8.875 12 8.875C13.7225 8.875 15.125 10.2763 15.125 12C15.125 13.7225 13.7225 15.125 12 15.125Z"></path>
                    <path d="M17.375 7.29124C17.743 7.29124 18.0413 6.99295 18.0413 6.62499C18.0413 6.25703 17.743 5.95874 17.375 5.95874C17.0071 5.95874 16.7088 6.25703 16.7088 6.62499C16.7088 6.99295 17.0071 7.29124 17.375 7.29124Z"></path>
                  </svg>
                </div>
                <div className="icon youtube">
                  <svg className="" fill="#000" viewBox="0 0 20 18">
                    <path d="M9.99433 3.33325C9.99433 3.33325 4.26441 3.33326 2.82628 3.70695C2.05625 3.9221 1.4222 4.55617 1.20704 5.33752C0.833352 6.77565 0.833344 9.75391 0.833344 9.75391C0.833344 9.75391 0.833352 12.7435 1.20704 14.159C1.4222 14.9403 2.04493 15.563 2.82628 15.7782C4.27574 16.1632 9.99433 16.1632 9.99433 16.1632C9.99433 16.1632 15.7356 16.1632 17.1737 15.7895C17.9551 15.5744 18.5778 14.963 18.7816 14.1703C19.1666 12.7435 19.1666 9.76524 19.1666 9.76524C19.1666 9.76524 19.178 6.77565 18.7816 5.33752C18.5778 4.55617 17.9551 3.93344 17.1737 3.72961C15.7356 3.33327 9.99433 3.33325 9.99433 3.33325ZM8.17116 7.00225L12.9386 9.75391L8.17116 12.4942V7.00225Z"></path>
                  </svg>
                </div>
              </div>
            </div>
          </div>
          <div className="footer-mid">
            <div className="footer-mid-left">
              <div className="logo">
                <img src={Logo} alt="" />
              </div>
              <div className="heading">
                <h1>ExpressSea</h1>
              </div>
              <div className="content">
                <p>
                  The best digital market to get mind blowing digital art. Come
                  and get that dream art today
                </p>
              </div>
            </div>
            <div className="footer-mid-right">
              <div className="footer-mid-right-one">
                <h3>Marketplace</h3>
                <ul className="list">
                  <li>Ape Collection</li>
                  <li>Celebrity Art Collection</li>
                  <li>Players Collection</li>
                  <li>Radom Art Collection</li>
                  <li>Polygon Art Collection</li>
                </ul>
              </div>
              <div className="footer-mid-right-two">
                <h3>Why ExpressSea</h3>
                <ul className="list">
                  <li>Digital Art</li>
                  <li>Crypto Reliance</li>
                  <li>Wallet Connection</li>
                  <li>Creative Artist</li>
                  <li>Awesome Arts</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </OuterLayout>
    </FooterStyled>
  );
};

export default Footer;
