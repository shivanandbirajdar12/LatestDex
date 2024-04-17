import Web3 from "web3";
import { abiBUSD } from "./ABI/BUSD.js";

//dev: RPC, Address & ABI
var RPCUrl = "https://polygon-testnet.public.blastapi.io";
var ContractaddressBUSD = "0xA07566Db17C9608EB019527b1db3245e59dA33e2";
const abiBusd = abiBUSD;

//dev: AddressNFT & ABINFT
var NftContractaddress = "0x220556D81448Bd67cd105B14Ee5a7C27e38b86A2"

//dev: AddressNFTStake
var ContractaddressEVCNftStake = "0xF883f33cCf606FeAd850acc03e91e583902fA620";

//dev:  HttpProvider
var web3 = new Web3(new Web3.providers.HttpProvider(RPCUrl));

//dev:  CurrentProvider
const detectCurrentProvider = () => {
  let provider;
  if (window.ethereum) {
    provider = window.ethereum;
  } else if (window.web3) {
    provider = window.web3.currentProvider;
  } else {
    console.log("Non-ethereum browser detected. You should install Metamask");
  }
  return provider;
};



//dev: BUSD

export const setBUSD_NFTApprove = async () => {
  console.log("setBUSD_NFTApprove");
  try {
    if (window.ethereum) {
      const web3 = new Web3(window.ethereum);
      await window.ethereum.request({ method: "eth_requestAccounts" });
      //dev: Get the selected account
      const accounts = await window.ethereum.request({
        method: "eth_accounts",
      });
      const account = accounts[0];
      const currentChainId = await web3.eth.net.getId();
      if (currentChainId !== 80001) {
        await web3.currentProvider.request({
          method: "wallet_switchEthereumChain",
          params: [{ chainId: Web3.utils.toHex(80001) }],
        });
      }
      const contracts = new web3.eth.Contract(abiBusd, ContractaddressBUSD);
      console.log("setBUSD_NFTApprove_NFTContractAddress", NftContractaddress);
      console.log("setBUSD_NFTApprove_ContractaddressBUSD", ContractaddressBUSD);
      // console.log("setBUSD_NFTApprovecall",ethers.MaxUint256);
      const approveNFT = await contracts.methods
        .approve(NftContractaddress, "100000000000000000000000000000000000")
        .send({ from: account });
      console.log("setBUSD_NFTApprove", approveNFT);
    }
  } catch (error) {
    console.log("approveError", error);
  }
};

export const setBUSD_NFTStakeApprove = async () => {
  console.log("setBUSD_NFTStakeApprove");
  try {
    if (window.ethereum) {
      const web3 = new Web3(window.ethereum);
      await window.ethereum.request({ method: "eth_requestAccounts" });
      //dev: Get the selected account
      const accounts = await window.ethereum.request({
        method: "eth_accounts",
      });
      const account = accounts[0];
      const currentChainId = await web3.eth.net.getId();
      if (currentChainId !== 80001) {
        await web3.currentProvider.request({
          method: "wallet_switchEthereumChain",
          params: [{ chainId: Web3.utils.toHex(80001) }],
        });
      }
      const contracts = new web3.eth.Contract(abiBusd, ContractaddressBUSD);
      console.log("setBUSD_NFTStakeApprove_NFTStakeContractAddress", ContractaddressEVCNftStake);
      console.log("setBUSD_NFTStakeApprove_ContractaddressBUSD", ContractaddressBUSD);
      // console.log("setBUSD_NFTApprovecall",ethers.MaxUint256);
      const approveNFT = await contracts.methods
        .approve(ContractaddressEVCNftStake, "100000000000000000000000000000000000")
        .send({ from: account });
      console.log("setBUSD_NFTStakeApprove", approveNFT);
    }
  } catch (error) {
    console.log("approveError", error);
  }
};

export const allowanceBUSD = async (_contractAddress) => {
  console.log("allowanceBUSD")
  try {
    if (window.ethereum) {
      const web3 = new Web3(window.ethereum);
      // Get the selected account
      const accounts = await window.ethereum.request({
        method: "eth_accounts",
      });
      const account = accounts[0];
      const contracts = new web3.eth.Contract(abiBusd, ContractaddressBUSD);
      console.log("i'm here", contracts.methods);
      console.log("account", account);
      console.log("ContractaddressRouter", _contractAddress);
      const response = await contracts.methods.allowance(account, _contractAddress).call();
      const allowance = web3.utils.fromWei(response, 'ether')
      console.log("allowanceBUSD", allowance);
      return allowance;
    }
  } catch (error) {
    console.log("allowance", error);
  }
};

export const getBUSDBalance = async () => {
  console.log("getBUSDBalance")
  try {
    if (window.ethereum) {
      const web3 = new Web3(window.ethereum);
      // Get the selected account
      const accounts = await window.ethereum.request({
        method: "eth_accounts",
      });
      const account = accounts[0];
      const contracts = new web3.eth.Contract(abiBusd, ContractaddressBUSD);
      console.log("i'm here", contracts.methods);
      console.log("account", account);
      const response = await contracts.methods.balanceOf(account).call();
      const balance = Number((web3.utils.fromWei(response, 'ether')));
      console.log("BUSDBalance", balance);
      return balance;
    }
  } catch (error) {
    console.log("balance", error);
  }
};