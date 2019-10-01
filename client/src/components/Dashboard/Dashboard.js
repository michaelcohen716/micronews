import React from "react";
import DashboardCard from "./DashboardCard";
import MicronewsContract from "../../contracts/Micronews.json";
import getWeb3 from "../../utils/getWeb3";
import getContract from "../../utils/getContract";

class Dashboard extends React.Component {
  state = {
    storageValue: 0,
    web3: null,
    accounts: null,
    contract: null,
    ready: false
  };

  componentDidMount = async () => {
    const { accounts, web3, contract } = await getContract();

    this.setState({ web3, accounts, contract }, this.setReady);
  };

  setReady = () => {
    this.setState({ ready: true });
  };

  registerCreator = async () => {};

  createChannel = async () => {
    const { contract, accounts, web3 } = this.state;
    const channelName = web3.utils.fromAscii("Gaming");

    // const owner = await contract.methods.isOwner().send({
    //     from: accounts[0]
    // })
    // console.log("owner", owner)
    // console.log('accounts[0', accounts[0])
 
    await contract.methods.createChannel(channelName).send({
      from: accounts[0],
    //   value: web3.utils.toWei("1", "ether")
    });
  };

  render() {
    console.log("this.state", this.state);
    return (
      <div className="d-flex flex-column mx-auto">
        <div className="d-flex flex-column mt-5">
          <DashboardCard headline="Register as a Creator">
            <div>Which Channel?</div>
          </DashboardCard>
          <DashboardCard headline="Create a Channel">
            <div>Create Channel</div>
            <button className="btn btn-primary" onClick={this.createChannel}>
              Create
            </button>
          </DashboardCard>
        </div>
      </div>
    );
  }
}

export default Dashboard;
