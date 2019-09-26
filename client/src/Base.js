import React, { useEffect } from "react";
import { useWeb3Context } from "web3-react";
import Nav from "./components/Nav/Nav";
import Stream from "./components/Stream/Stream";

function Base() {
  const context = useWeb3Context();
  console.log("context", context);

  useEffect(() => {
    context.setFirstValidConnector(["MetaMask", "Local"]);
  }, []);

  if (!context.active && !context.error) {
    // loading
    return <div>loading..</div>;
  } else if (context.error) {
    //error
    return <div>error</div>;
  } else {
    // success
    return (
      <div className="outer-container">
        <div className="inner-container mx-auto d-flex">
          <Nav />
          <Stream />
        </div>
      </div>
    );
  }
}

export default Base;
