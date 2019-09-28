import React, { useState } from "react";
import { withRouter } from "react-router-dom";
import "./Nav.css";

function TopNavItem({ text, active, onClick }) {
  return (
    <div
      onClick={onClick}
      className={`mx-4 my-auto top-nav-item ${
        active ? "top-nav-active" : "top-nav-inactive"
      }`}
    >
      {text}
    </div>
  );
}

const TABS = ["Stream", "Dashboard", "Post"];

function TopNav({ history }) {
  const routes = {
    Stream: "/",
    Dashboard: "/dashboard",
    Post: "/post"
  };

  return (
    <div className="top-nav d-flex my-auto justify-content-between outer-container">
      <div className="my-auto company-name">Micronews</div>
      <div className="d-flex my-auto mr-5">
        {TABS.map((tab, i) => {
          return (
            <TopNavItem
              onClick={() => history.push(routes[tab])}
              text={tab}
              key={i}
              active={routes[tab] === history.location.pathname}
            />
          );
        })}
        <div className="ml-5 account-circle" />
      </div>
    </div>
  );
}

export default withRouter(TopNav);
