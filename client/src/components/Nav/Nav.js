import React, { useEffect } from "react";
import science from "../../assets/science.png";

function NavItem() {
  return (
    <div className="nav-item-holder my-2">
      <div className="mx-auto my-auto p-2">
        <img src={science} className="img-fluid" />
      </div>
    </div>
  );
}

function Nav() {
  return (
    <div className="d-flex flex-column mt-5">
      <NavItem />
      <NavItem />
      <NavItem />
      <NavItem />
    </div>
  );
}

export default Nav;
