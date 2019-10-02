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

  registerCreator = async () => {
    const { contract, accounts, web3 } = this.state;

    const creatorName = web3.utils.fromAscii("MemerGamer");
    await contract.methods.registerContentCreator(creatorName).send({
      from: accounts[0]
    })
  };

  createChannel = async () => {
    const { contract, accounts, web3 } = this.state;
    const channelName = web3.utils.fromAscii("Gaming");
    
    await contract.methods.createChannel(channelName).send({
      from: accounts[0]
    });
  };
  
  subscribe = async() => {
    const { contract, accounts, web3 } = this.state;
    const channelId = 1;

    await contract.methods.subscribeToChannel(channelId).send({
      from: accounts[0],  
      value: web3.utils.toWei("0.1", "ether")
    })
  }
  
  createPost = async() => {
    const { contract, accounts, web3 } = this.state;
    const content = "Has anyone played the new Counterstrike??";
    const channelId = 1;
    
    await contract.methods.createPost(content, channelId).send({
      from: accounts[0]
    })
  }

  render() {
    console.log("this.state", this.state);
    return (
      <div className="d-flex flex-column mx-auto">
        <div className="d-flex flex-column mt-5">
          <DashboardCard headline="Register as a Creator">
            <div>Register</div>
            <button className="btn btn-primary" onClick={this.registerCreator}>
              Register
            </button>
          </DashboardCard>
          <DashboardCard headline="Create a Channel">
            <div>Create Channel</div>
            <button className="btn btn-primary" onClick={this.createChannel}>
              Create
            </button>
          </DashboardCard>
          <DashboardCard headline="Subscribe to Channel">
            <div>Subscribe to Channel</div>
            <button className="btn btn-primary" onClick={this.subscribe}>
              Subscribe to Channel
            </button>
          </DashboardCard>
          <DashboardCard headline="Create a Post">
            <div>Create Post</div>
            <button className="btn btn-primary" onClick={this.createPost}>
              Create Post
            </button>
          </DashboardCard>
        </div>
      </div>
    );
  }
}

export default Dashboard;
