import Web3 from "web3";
import { abiEVCNFT } from "./ABI/EVCNFT";

/* global BigInt */
//dev:  RPC, Address & ABI
var RPCUrl = "https://polygon-testnet.public.blastapi.io";
var ContractaddressEVCNft = "0x220556D81448Bd67cd105B14Ee5a7C27e38b86A2";
const abiEVCNft = abiEVCNFT;

//dev:  AddressNFTStake
var ContractaddressNftStake = "0xF883f33cCf606FeAd850acc03e91e583902fA620";

//dev:  HttpProvider
var web3 = new Web3(new Web3.providers.HttpProvider(RPCUrl));

//dev: CurrentProvider
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

//dev: NFT
export const setMintNft = async (_level) => {
  console.log("setMintNft")
  if (window.ethereum) {
    const web3 = new Web3(window.ethereum);
    await window.ethereum.request({ method: "eth_requestAccounts" });
    // Get the selected account
    const accounts = await window.ethereum.request({ method: "eth_accounts" });
    const account = accounts[0];
    console.log("account", account);
    const currentChainId = await web3.eth.net.getId();
    if (currentChainId !== 80001) {
      await web3.currentProvider.request({
        method: "wallet_switchEthereumChain",
        params: [{ chainId: Web3.utils.toHex(80001) }],
      });
    }
    const contracts = new web3.eth.Contract(abiEVCNft, ContractaddressEVCNft);
    console.log(contracts);
    const to = account;
    console.log("_to", to);
    const evcNFTcost = await contracts.methods.getNFTCost(_level).call();
    let evcNFTCost = evcNFTcost.toString();
    console.log("evcNFTcost", evcNFTcost)

    let evcCostPer = BigInt(evcNFTCost) + BigInt((evcNFTCost * 0.1));
    console.log("evcCostPer", evcCostPer);
    let evcCost = BigInt(evcCostPer);
    console.log("evcCost8", evcCost);
    let evccost = evcCost.toString();
    console.log("evccost8", evccost);
    // let sponsorAddress;
    let referrerAddress = await getMyReferrer();
    let sponsorAddress = referrerAddress != "0x0000000000000000000000000000000000000000" ?
      referrerAddress : window.localStorage.getItem("sponsorAddress") != null ?
        window.localStorage.getItem("sponsorAddress") : "0x0000000000000000000000000000000000000000";
    // let sponsorAddress1 = window.localStorage.getItem("sponsorAddress") != "null" ? (window.localStorage.getItem("sponsorAddress")).slice(1) : "0x0000000000000000000000000000000000000000";
    console.log("referrallink", typeof window.localStorage.getItem("sponsorAddress"))
    console.log("sponsorAddress", sponsorAddress)
    console.log("_level", _level)
    const mintNft = await contracts.methods
      .mintNFT(_level, evccost, true, sponsorAddress)
      .send({ from: account });
    console.log("mintNft", mintNft);
  }
};

//dev: setNFTApprove
export const setNFTApprove = async (_id) => {
  console.log("setNFTApprove");
  try {
    if (window.ethereum) {
      const web3 = new Web3(window.ethereum);
      await window.ethereum.request({ method: "eth_requestAccounts" });
      // Get the selected account
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
      const contracts = new web3.eth.Contract(abiEVCNft, ContractaddressEVCNft);
      const approveNFT = await contracts.methods
        .approve(ContractaddressNftStake, _id)
        .send({ from: account });
      console.log("setNFTApprove", approveNFT);
    }
  } catch (error) {
    console.log("approveError", error);
  }
};

// dev: use setNFTApprovalForAll
export const setNFTApprovalForAll = async () => {
  console.log("setNFTApprovalForAll");
  try {
    if (window.ethereum) {
      const web3 = new Web3(window.ethereum);
      await window.ethereum.request({ method: "eth_requestAccounts" });
      // Get the selected account
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
      const contracts = new web3.eth.Contract(abiEVCNft, ContractaddressEVCNft);
      const approveForAll = await contracts.methods.setApprovalForAll(ContractaddressNftStake, true).send({ from: account });
      console.log("setNFTApprovalForAll", approveForAll);
    }
  } catch (error) {
    console.log("approveError", error);
  }
};

//dev:  use get IsApproved For All Function
export const getIsApprovedForAll = async () => {
  console.log("getIsApprovedForAll");
  let contracts = new web3.eth.Contract(abiEVCNft, ContractaddressEVCNft);
  const accounts = await window.ethereum.request({
    method: "eth_accounts",
  });
  const account = accounts[0];
  console.log("getIsApprovedForAll_account", account);
  const evcIsApprovedForAll = await contracts.methods.isApprovedForAll(account, ContractaddressNftStake).call();
  console.log("evcIsApprovedForAll", evcIsApprovedForAll);
  return evcIsApprovedForAll;
};

//dev: Get  NFT Balance
export const getNFTBalanceOf = async () => {
  console.log("getNFTBalanceOf");
  let contracts = new web3.eth.Contract(abiEVCNft, ContractaddressEVCNft);
  const accounts = await window.ethereum.request({
    method: "eth_accounts",
  });
  const account = accounts[0];
  console.log("getNFTBalanceOf_account", account);
  const evcNFTBalance = await contracts.methods.balanceOf(account).call();
  console.log("evcNFTBalanceOf", evcNFTBalance);
  return evcNFTBalance;
};

//dev: get wallet of owner
export const getWalletOfOwner = async () => {
  console.log("getWalletOfOwner");
  let contracts = new web3.eth.Contract(abiEVCNft, ContractaddressEVCNft);
  const accounts = await window.ethereum.request({
    method: "eth_accounts",
  });
  const account = accounts[0];
  console.log("getWalletOfOwner_account", account);
  const evcWalletOfOwner = await contracts.methods.walletOfOwner(account).call();
  const evcWalletofowner = [...evcWalletOfOwner].sort((a, b) => a.localeCompare(b, undefined, { numeric: true }))
  console.log("getStakedIdsFixStake", evcWalletofowner);

  console.log("evcWalletofowner", evcWalletofowner);
  return evcWalletofowner;
};

export const getMyReferrer = async () => {
  console.log("getMyReferrer");
  let contracts = new web3.eth.Contract(abiEVCNft, ContractaddressEVCNft);
  const accounts = await window.ethereum.request({
    method: "eth_accounts",
  });
  const account = accounts[0];
  console.log("getMyReferrer_account", account);
  const referrerAddress = await contracts.methods.getReferrerOf(account).call();
  console.log("getMyReferrer", referrerAddress);
  return referrerAddress;
};

export const getTeamSales = async () => {
  console.log("getTeamSales");
  let contracts = new web3.eth.Contract(abiEVCNft, ContractaddressEVCNft);
  const accounts = await window.ethereum.request({
    method: "eth_accounts",
  });
  const account = accounts[0];
  console.log("getTeamSales_account", account);
  const teamSales = await contracts.methods.getTotalTeamSaleVolume(account).call();
  console.log("teamSales", teamSales);
  return teamSales;
};

export const getTeamStatistic = async () => {
  console.log("getTeamStatistic");
  let contracts = new web3.eth.Contract(abiEVCNft, ContractaddressEVCNft);
  const accounts = await window.ethereum.request({
    method: "eth_accounts",
  });
  const account = accounts[0];
  console.log("getTeamStatistic_account", account);
  const teamStatistic = await contracts.methods.getTeamSalesStatistics(account).call();
  console.log("teamStatistic", teamStatistic);
  return teamStatistic;
};

export const getTeamStatisticOfAddress = async (_address) => {
  console.log("getTeamStatisticOfAddress", _address);
  let contracts = new web3.eth.Contract(abiEVCNft, ContractaddressEVCNft);
  const teamStatistic = await contracts.methods.getTeamSalesStatistics(_address).call();
  return teamStatistic;
};

export const getRecentlyJoined = async () => {
  console.log("getRecentlyJoined");
  let contracts = new web3.eth.Contract(abiEVCNft, ContractaddressEVCNft);
  const accounts = await window.ethereum.request({
    method: "eth_accounts",
  });
  const account = accounts[0];
  console.log("getRecentlyJoined_account", account);
  const recentlyJoined = await contracts.methods.getRecentlyJoinedTeamMembers(account).call();
  console.log("recentlyJoined", recentlyJoined);
  return recentlyJoined;
};

// NOTE: Function has been remeoved in contract cross verify about it
export const getEvcRank = async () => {
  console.log("getEvcRank");
  let contracts = new web3.eth.Contract(abiEVCNft, ContractaddressEVCNft);
  const accounts = await window.ethereum.request({
    method: "eth_accounts",
  });
  const account = accounts[0];
  console.log("getEvcRank_account", account);
  const evcRank = await contracts.methods.checkUserRank(account).call();
  console.log("evcRank", evcRank);
  return evcRank;
};

export const getRBEarning = async () => {
  console.log("getRBEarning");
  let contracts = new web3.eth.Contract(abiEVCNft, ContractaddressEVCNft);
  const accounts = await window.ethereum.request({ method: "eth_accounts", });
  const account = accounts[0];
  console.log("getRBEarning_account", account);
  const rbEarning = await contracts.methods.rankBonusEarningsByUser(account).call();
  console.log("rbEarning", rbEarning);
  const RBEarning = web3.utils.fromWei(rbEarning, 'ether');
  console.log("RBEarning", RBEarning);
  return RBEarning;
};


export const getUniLevelEarning = async () => {
  console.log("getUniLevelEarning");
  let contracts = new web3.eth.Contract(abiEVCNft, ContractaddressEVCNft);
  const accounts = await window.ethereum.request({ method: "eth_accounts", });
  const account = accounts[0];
  console.log("getUniLevelEarning_account", account);
  const unilevelearning = await contracts.methods.unilevelEarningsByUser(account).call();
  console.log("getUniLevelEarning", unilevelearning);
  const uniLevelEarning = web3.utils.fromWei(unilevelearning, 'ether')
  console.log("getUniLevelEarning", uniLevelEarning);
  return uniLevelEarning;
};


export const getEvcRbEarning = async () => {
  console.log("getEvcRbEarning");
  let contracts = new web3.eth.Contract(abiEVCNft, ContractaddressEVCNft);
  const accounts = await window.ethereum.request({ method: "eth_accounts", });
  const account = accounts[0];
  console.log("getEvcRbEarning_account", account);
  const evcrbearning = await contracts.methods.evcSwapPoolByUser(account).call();
  console.log("evcrbearning", evcrbearning);
  const EvcRbEarning = web3.utils.fromWei(evcrbearning, 'ether')
  console.log("uniLevelEarning", EvcRbEarning);
  return EvcRbEarning;
};

//dev: get Owner
export const getOwnerOf = async (_id) => {
  console.log("getOwnerOf");
  let contracts = new web3.eth.Contract(abiEVCNft, ContractaddressEVCNft);
  const evcOwnerOfNFT = await contracts.methods.ownerOf(_id).call();
  console.log("evcOwnerOfNFT", evcOwnerOfNFT);
  return evcOwnerOfNFT;
};

//dev: Get Token URL
export const getTokenURI = async (_id) => {
  console.log("getTokenURI");
  let contracts = new web3.eth.Contract(abiEVCNft, ContractaddressEVCNft);
  const evcTokenURI = await contracts.methods.tokenURI(_id).call();
  console.log("evcTokenURI", evcTokenURI);
  return evcTokenURI;
};

//dev: Get Total Supply
export const getTotalSupply = async () => {
  console.log("getTotalSupply");
  let contracts = new web3.eth.Contract(abiEVCNft, ContractaddressEVCNft);
  const evcNFTTotalSupply = await contracts.methods.totalSupply().call();
  console.log("evcNFTTotalSupply", evcNFTTotalSupply);
  return evcNFTTotalSupply;
};

export const getOwnerBalance = async () => {
  console.log("getOwnerBalance");
  let contracts = new web3.eth.Contract(abiEVCNft, ContractaddressEVCNft);
  const accounts = await window.ethereum.request({ method: "eth_accounts", });
  const account = accounts[0];
  console.log("getOwnerBalance_account", account);
  const ownerBalance = await contracts.methods.balanceOf(account).call();
  console.log("ownerBalance", ownerBalance);
  return ownerBalance;
};

export const getHasToken = async () => {
  const hasTokenArray = [];
  console.log("getHasToken");
  let contracts = new web3.eth.Contract(abiEVCNft, ContractaddressEVCNft);
  console.log("ContractaddressEVCNft", ContractaddressEVCNft);
  const accounts = await window.ethereum.request({
    method: "eth_accounts",
  });
  const account = accounts[0];
  console.log("getHasToken_account", account);
  for (let i = 0; i < 8; i++) {
    const hasNftToken = await contracts.methods.hasNFTs(i, account).call();
    hasTokenArray.push(hasNftToken)
    console.log("hasTokenArray", hasTokenArray);
  }
  return hasTokenArray;
};
getHasToken()



export const getTotalPaidUniLevelRewards = async () => {
  console.log("getTotalPaidUniLevelRewards");
  let contracts = new web3.eth.Contract(abiEVCNft, ContractaddressEVCNft);
  const totalPaidUniLevelRewardsInWei = await contracts.methods.totalPaidUniLevelRewards().call();
  console.log("totalPaidUniLevelRewardsInWei", totalPaidUniLevelRewardsInWei);
  const totalPaidUniLevelRewardsInEth = web3.utils.fromWei(totalPaidUniLevelRewardsInWei, 'ether')
  console.log("totalPaidUniLevelRewardsInEth", totalPaidUniLevelRewardsInEth);
  return totalPaidUniLevelRewardsInEth;
}
