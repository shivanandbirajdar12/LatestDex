import Web3 from "web3";
import { abiPool } from "./ABI/Pool";

// RPC, Address & ABI
var RPCUrl = "https://polygon-testnet.public.blastapi.io";
var ContractaddressPool = "0xd836a64dD1e44658e7b487ac599138f0784865fC";
const abipool = abiPool;

// HttpProvider
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

//dev:  Pool
export const getRemainingRbEvcValue = async () => {
    console.log("getRemainingRbEvcValue");
    let contracts = new web3.eth.Contract(abipool, ContractaddressPool);
    const accounts = await window.ethereum.request({ method: 'eth_accounts' });
    const account = accounts[0];
    console.log("getRemainingRbEvcValue_account", account);
    const response = await contracts.methods.getRemainingEVCAmountRB(account).call();
    console.log("getRemainingRbEvcValue", response);
    const rbEvcValueRemaining = web3.utils.fromWei(response, 'ether');
    console.log("rbEvcValueRemaining", rbEvcValueRemaining);
    return rbEvcValueRemaining;
};

export const getClaimedRbEvcValue = async () => {
    console.log("getClaimedRbEvcValue");
    let contracts = new web3.eth.Contract(abipool, ContractaddressPool);
    const accounts = await window.ethereum.request({ method: 'eth_accounts' });
    const account = accounts[0];
    console.log("getClaimedRbEvcValue_account", account);
    const response = await contracts.methods.getUserRedeemValuepoolSwap(account).call();
    console.log("getClaimedRbEvcValue", response);
    const rbEvcValueClaimed = web3.utils.fromWei(response, 'ether');
    console.log("rbEvcValueClaimed", rbEvcValueClaimed);
    return rbEvcValueClaimed;
};

export const getRbClaimPerc = async () => {
    console.log("getRbClaimPerc");
    let contracts = new web3.eth.Contract(abipool, ContractaddressPool);
    const accounts = await window.ethereum.request({ method: 'eth_accounts' });
    const account = accounts[0];
    console.log("getRbClaimPerc_account", account);
    const RbClaimPerc = await contracts.methods.getRewardPercentageEVCRB(account).call();
    console.log("RbClaimPerc", RbClaimPerc);
    return RbClaimPerc;
};

export const setClaimRB = async () => {
    if (window.ethereum) {
        const web3 = new Web3(window.ethereum);
        await window.ethereum.request({ method: "eth_requestAccounts" });
        // Get the selected account
        const accounts = await window.ethereum.request({ method: "eth_accounts" });
        const account = accounts[0];
        const currentChainId = await web3.eth.net.getId();
        if (currentChainId !== 80001) {
            await web3.currentProvider.request({
                method: "wallet_switchEthereumChain",
                params: [{ chainId: Web3.utils.toHex(80001) }],
            });
        }
        const contracts = new web3.eth.Contract(abipool, ContractaddressPool);
        console.log(contracts);
        const claimpoolRb = await contracts.methods.claimPoolRB().send({ from: account });
        console.log("claimpoolRb", claimpoolRb);

        if(claimpoolRb){
                window.location.reload();
        }
    }
};