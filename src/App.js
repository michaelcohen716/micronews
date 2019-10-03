import React, { Component } from "react";
import MicronewsContract from "./contracts/Micronews.json";
import getWeb3 from "./utils/getWeb3";
import Base from "./Base";
import Web3Provider from "web3-react";

import "./App.css";

import { Connectors } from "web3-react";
const { InjectedConnector, NetworkOnlyConnector } = Connectors;
const MetaMask = new InjectedConnector({ supportedNetworks: [1, 3, 4] });
const Local = new NetworkOnlyConnector({
  providerURL: "http://127.0.0.1:7545"
});

const connectors = { MetaMask, Local };

class App extends Component {
  // state = { storageValue: 0, web3: null, accounts: null, contract: null, ready: false };

  // componentDidMount = async () => {
  //   try {
  //     const web3 = await getWeb3();

  //     // Use web3 to get the user's accounts.
  //     const accounts = await web3.eth.getAccounts();

  //     // Get the contract instance.
  //     const networkId = await web3.eth.net.getId();
  //     const deployedNetwork = MicronewsContract.networks[networkId];
  //     const instance = new web3.eth.Contract(
  //       MicronewsContract.abi,
  //       deployedNetwork && deployedNetwork.address
  //     );

  //     this.setState({ web3, accounts, contract: instance }, this.setReady);
  //   } catch (error) {
  //     alert(
  //       `Failed to load web3, accounts, or contract. Check console for details.`
  //     );
  //     console.error(error);
  //   }
  // };

  // setReady = () => this.setState({ ready: true })

  // runExample = async () => {
  //   const { accounts, contract } = this.state;

  //   // Stores a given value, 5 by default.
  //   await contract.methods.set(5).send({ from: accounts[0] });

  //   // Get the value from the contract to prove it worked.
  //   const response = await contract.methods.get().call();

  //   // Update state with the result.
  //   this.setState({ storageValue: response });
  // };

  render() {
    return (
      <Web3Provider
        connectors={connectors}
        libraryName={"ethers.js" | "web3.js" | null}
      >
        <div className="app">
          <div className="d-flex flex-column">
          <div className="position-relative">
            {/* <div className="position-absolute mock-ui">
              Mock UI
            </div> */}
          </div>
            <div className="big-container mx-auto">
              <Base />
            </div>
          </div>
        </div>
      </Web3Provider>
    );
  }
}

export default App;
