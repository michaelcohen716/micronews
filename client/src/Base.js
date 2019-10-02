import React, { useEffect } from "react";
import { useWeb3Context } from "web3-react";
import Nav from "./components/Nav/Nav";
import Stream from "./components/Stream/Stream";
import Router from "./Router";

function Base() {
  const context = useWeb3Context();
  console.log("context", context);
  console.log("window.web3", window.web3)

  useEffect(() => {
    context.setFirstValidConnector(["MetaMask"]);
    // context.setFirstValidConnector(["MetaMask", "Local"]);
  }, []);

  if (!context.active && !context.error) {
    // loading
    return (
      <div className="outer-container">
        <div className="inner-container mx-auto d-flex">Loading...</div>
      </div>
    );
  } else if (context.error) {
    //error
    return (
      <div className="outer-container">
        <div className="inner-container mx-auto d-flex">Error...</div>
      </div>
    );
  } else {
    // success
    return <Router />;
  }
}

export default Base;
