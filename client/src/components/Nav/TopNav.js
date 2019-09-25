import React, { useEffect } from "react";
import "./Nav.css";

function TopNav() {
  return (
    <div className="top-nav d-flex my-auto justify-content-between outer-container">
      <div className="my-auto company-name">Micronews</div>
      <div className="d-flex my-auto">
        <div className="mr-3 my-auto">Account</div>
        <div className="account-circle"/>

      </div>
    </div>
  );
}

export default TopNav;
