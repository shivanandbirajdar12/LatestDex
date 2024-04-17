import Web3 from "web3";
import { abiRedeem } from "./ABI/Redeem";
import { abiPreSale } from "./ABI/PreSale";

//dev:  RPC, Address & ABI
var RPCUrl = "https://polygon-testnet.public.blastapi.io";
var ContractaddressRedeem = "0xBB727661eF83588a54A81D6EB7Afc4cc84d78c2f";
const abiredeem = abiRedeem;

//dev: AddressPreSale & ABIPreSale
var PresaleContractAddress = "0xC5d6D4F080179402fE9c65757E9824A85a69bb08"
const abiPresale = abiPreSale;

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



//dev:  Redeem

//dev: get Deposit At Stake Flex
export const setPresaleApprove = async () => {
    console.log("setPresaleApprovecall");
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
            const contracts = new web3.eth.Contract(abiPresale, PresaleContractAddress);
            console.log("setPresaleApprove-PresaleContractAddress", PresaleContractAddress);
            console.log("setPresaleApprove-ContractaddressRedeem", ContractaddressRedeem);
            // console.log("SetPresaleApprovecall",ethers.MaxUint256);
            const txid = await contracts.methods
                .approve(ContractaddressRedeem, "100000000000000000000000000000000000")
                .send({ from: account });
            console.log(txid);
        }
    } catch (error) {
        console.log("approveError", error);
    }
};
//dev:set Swap PRE EVC For EVC
export const setSwapPREEVCForEVC = async () => {
    console.log("setSwapPREEVCForEVC")
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
        const contracts = new web3.eth.Contract(abiredeem, ContractaddressRedeem);
        console.log("CONTRACTS", contracts);
        const txid = await contracts.methods.swappreEVCForEVC().send({ from: account });
        console.log(txid);
    }
};
