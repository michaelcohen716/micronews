import React, { useState } from "react";
import { withRouter } from "react-router-dom"
import "./Nav.css";

function TopNavItem({ text, active }) {
  return (
    <div
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
  const [activeTab, setActiveTab] = useState(0);

  return (
    <div className="top-nav d-flex my-auto justify-content-between outer-container">
      <div className="my-auto company-name">Micronews</div>
      <div className="d-flex my-auto mr-5">
        {TABS.map((tab, i) => {
          return <TopNavItem onClick={() => history.push("/dashboard")} text={tab} key={i} active={activeTab === i} />;
        })}
        <div className="ml-5 account-circle" />
      </div>
    </div>
  );
}

export default withRouter(TopNav);
