import MicronewsContract from "../contracts/Micronews.json";
import getWeb3 from "./getWeb3";

const getContract = async () => {
    console.log("ingetcontract")
  const web3 = await getWeb3();
  const accounts = await web3.eth.getAccounts();

  const networkId = await web3.eth.net.getId();
  const deployedNetwork = MicronewsContract.networks[networkId];

  const instance = new web3.eth.Contract(
    MicronewsContract.abi,
    deployedNetwork && deployedNetwork.address
  );
    console.log("ingetcontract", instance)
  return {
    accounts,
    web3,
    contract: instance
  };
};

export default getContract;
