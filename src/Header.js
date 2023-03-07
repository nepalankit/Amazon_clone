import React from "react";
import "./Header.css";
import SearchIcon from "@mui/icons-material/Search";
import ShoppingBasketIcon from "@mui/icons-material/ShoppingBasket";

function Header() {
  return (
    <div className="header">
      <img
        className="header_logo"
        alt="http:://pngimg.com/uploads/amazon/amazon_PNG11.png"
        src="http://www.userlogos.org/files/logos/ArkAngel06/Amazon.png"
      />
      <div className="header_search">
        <input className="header_search_input" type="text" />
        <SearchIcon className="header_searchIcon" />
        {/*logo*/}
        <div className="header_nav">
          <div className="header_option">
            <span className="header_option_lineone"> Hello Guest</span>
            <span className="header_option_linetwo"> Sign In</span>
          </div>
          <div className="header_option">
            <span className="header_option_lineone"> Returns</span>
            <span className="header_option_linetwo"> &Orders</span>
          </div>
          <div className="header_option">
            <span className="header_option_lineone"> Your</span>
            <span className="header_option_linetwo"> Prime</span>
          </div>
          <div className="header_optionBasket">
            <ShoppingBasketIcon />
            <span className="header_option_linetwo  header_basketCount">0</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
