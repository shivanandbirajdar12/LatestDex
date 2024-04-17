import Web3 from "web3";
import { abiEVCNFTStake } from "./ABI/EVCNFTStake"

//dev: RPC, Address & ABI
var RPCUrl = "https://polygon-testnet.public.blastapi.io";
var ContractaddressEVCNftStake = "0xF883f33cCf606FeAd850acc03e91e583902fA620";
const abiEVCNftStake = abiEVCNFTStake;

//dev: HttpProvider
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



//dev: NFT Stake

export const setStakeNFT = async (_id) => {
    console.log("_idStakeNFT", _id);
    if (window.ethereum) {
        const web3 = new Web3(window.ethereum);
        await window.ethereum.request({ method: "eth_requestAccounts" });
        //dev: Get the selected account
        const accounts = await window.ethereum.request({ method: "eth_accounts" });
        const account = accounts[0];
        const currentChainId = await web3.eth.net.getId();
        if (currentChainId !== 80001) {
            await web3.currentProvider.request({
                method: "wallet_switchEthereumChain",
                params: [{ chainId: Web3.utils.toHex(80001) }],
            });
        }
        const contracts = new web3.eth.Contract(abiEVCNftStake, ContractaddressEVCNftStake);
        console.log(contracts);
        // const planId = 1;
        // console.log("planId", planId);
        const id = _id.split(",")
        console.log("_idStakeNFT", id);
        const nftStake = await contracts.methods.stakeNFT(id).send({ from: account });
        console.log("nftStake", nftStake);
    }
};

//dev: Set Withdraw NFT
export const setWithdrawNFT = async (_id) => {
    console.log("_idNFTUnStake", _id);
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
        const contracts = new web3.eth.Contract(abiEVCNftStake, ContractaddressEVCNftStake);
        console.log(contracts);
        const id = _id.split(",")
        console.log("_idWithdrawNFT", id);
        const nftUnStake = await contracts.methods.withdrawNFT(id).send({ from: account });
        console.log("nftUnStake", nftUnStake);
        if (nftUnStake) {
            window.location.reload();
        }
        console.log("nftUnStake", nftUnStake);
    }
};

//dev: Set Claim Rewards
export const setClaimReward = async (_id) => {
    console.log("_NFTidClaim", _id);
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
        const contracts = new web3.eth.Contract(abiEVCNftStake, ContractaddressEVCNftStake);
        console.log(contracts);
        const id = _id.split(",");
        console.log("_NFTidClaim", id);
        const idClaimValue = await contracts.methods.claimReward(id).send({ from: account });

        if (idClaimValue) {
            window.location.reload();
        }
        console.log("setClaimNFTReward", idClaimValue);
    }
};

//dev: Set Repurchase NFT
export const setRepurchaseNFT = async (_id) => {
    console.log("_idRepurchaseNFT", _id);
    if (window.ethereum) {
        const web3 = new Web3(window.ethereum);
        await window.ethereum.request({ method: "eth_requestAccounts" });
        //dev: Get the selected account
        const accounts = await window.ethereum.request({ method: "eth_accounts" });
        const account = accounts[0];
        const currentChainId = await web3.eth.net.getId();
        if (currentChainId !== 80001) {
            await web3.currentProvider.request({
                method: "wallet_switchEthereumChain",
                params: [{ chainId: Web3.utils.toHex(80001) }],
            });
        }
        const contracts = new web3.eth.Contract(abiEVCNftStake, ContractaddressEVCNftStake);
        console.log(contracts);
        // const id = _id.split(",")
        // console.log("_idRepurchaseNFT", id);
        const repurchaseNFT = await contracts.methods.repurchase(_id).send({ from: account });
        console.log("RepurchaseNFT", repurchaseNFT);
    }
};

export const getRepurchaseLimit = async (_id) => {
    console.log("getRepurchaseLimit");
    let contracts = new web3.eth.Contract(abiEVCNftStake, ContractaddressEVCNftStake);
    const repurchaseLimitWeiValue = await contracts.methods.tokenIdRepurchaseLimit(_id).call();
    // const repurchaseLimitEthValue = web3.utils.fromWei(repurchaseLimitWeiValue, "ether");
    console.log("repurchaseLimitEthValue", repurchaseLimitWeiValue);
    return repurchaseLimitWeiValue;
};

//dev: Get Tokens of Staker
export const getTokensOfStaker = async () => {
    console.log("getTokensOfStaker");
    let contracts = new web3.eth.Contract(abiEVCNftStake, ContractaddressEVCNftStake);
    const accounts = await window.ethereum.request({
        method: "eth_accounts",
    });
    const account = accounts[0];
    console.log("gettokensOfStakerNFTIDs_account", account);
    const tokensOfStakerNFTIDs = await contracts.methods.getTokensOfStaker(account).call();
    console.log("tokensOfStakerNFTIDs", tokensOfStakerNFTIDs);
    return tokensOfStakerNFTIDs;
};

export const getRewardPercentage = async (_id) => {
    console.log("getRewardPercentage");
    let contracts = new web3.eth.Contract(abiEVCNftStake, ContractaddressEVCNftStake);
    const accounts = await window.ethereum.request({
        method: "eth_accounts",
    });
    const account = accounts[0];
    console.log("getRewardPercentage_account", account);
    const rewardPercentage = await contracts.methods.getRewardPercentage(account, _id).call();
    console.log("rewardPercentage", rewardPercentage);
    return rewardPercentage;
};

//dev: Get Unclaimable Reward
export const getUnClaimableReward = async (_id) => {
    console.log("_NFTidClaim", _id);
    const contracts = new web3.eth.Contract(abiEVCNftStake, ContractaddressEVCNftStake);
    console.log(contracts);
    // const id = _id.split(",")
    // console.log("_NFTidClaim", id);
    const idUnClaimValue = await contracts.methods.getUnclaimedReward(_id).call();
    console.log("getUnClaimedReward", idUnClaimValue);
    let claimableNFTreward = web3.utils.fromWei(idUnClaimValue, "ether");
    console.log("claimableNFTreward", claimableNFTreward);
    let UnClaimedReward = parseFloat(claimableNFTreward).toFixed(6);
    console.log("UnClaimedReward", UnClaimedReward);
    return UnClaimedReward;
};

export const getEVCToBUSDAmountsOut = async (_id) => {
    console.log("_NFTidClaim", _id);
    const contracts = new web3.eth.Contract(abiEVCNftStake, ContractaddressEVCNftStake);
    console.log(contracts);
    // const id = _id.split(",")
    // console.log("_NFTidClaim", id);
    let claimedEvc = await getRepurchaseLimit(_id)
    if (claimedEvc > 0) {
        const EVCToBUSDAmountsOutwei = await contracts.methods.getAmountoutEvcToBusd(claimedEvc).call();
        console.log("getUnClaimedReward", EVCToBUSDAmountsOutwei);
        let EVCToBUSDAmountsOut = web3.utils.fromWei(EVCToBUSDAmountsOutwei, "ether");
        let EVCtoBUSDAmountsOut = Number(EVCToBUSDAmountsOut).toFixed(4);
        console.log("EVCtoBUSDAmountsOut", EVCtoBUSDAmountsOut);
        return EVCtoBUSDAmountsOut;
    }
    return 0;
};

export const getamountsoutEVCToBUSD = async (_amountIn) => {
    console.log("_amountIn", _amountIn);
    const contracts = new web3.eth.Contract(abiEVCNftStake, ContractaddressEVCNftStake);
    console.log(contracts);
    if (_amountIn > 0) {
        let _amountInWei = web3.utils.toWei(_amountIn, "ether");
        const EVCToBUSDAmountsOutwei = await contracts.methods.getAmountoutEvcToBusd(_amountInWei).call();
        console.log("EVCToBUSDAmountsOutwei", EVCToBUSDAmountsOutwei);
        let EVCToBUSDAmountsOut = web3.utils.fromWei(EVCToBUSDAmountsOutwei, "ether");
        let EVCtoBUSDAmountsOut = Number(EVCToBUSDAmountsOut).toFixed(4);
        console.log("EVCtoBUSDAmountsOut", EVCtoBUSDAmountsOut);
        return EVCtoBUSDAmountsOut;
    }
    return 0;
};

export const getCheckRepurchase = async (_id) => {
    console.log("getCheckRepurchaseId", _id);
    const contracts = new web3.eth.Contract(abiEVCNftStake, ContractaddressEVCNftStake);
    console.log(contracts);
    const CheckRepurchase = await contracts.methods.checkRepurchase(_id).call();
    console.log("CheckRepurchase", CheckRepurchase);
    return CheckRepurchase;
};

export const getTokenInfos = async (_id) => {
    console.log("getTokenInfos", _id);
    const contracts = new web3.eth.Contract(abiEVCNftStake, ContractaddressEVCNftStake);
    console.log(contracts);
    const tokenInfo = await contracts.methods.tokenInfo(_id).call();
    console.log("tokenInfo", tokenInfo);
    return tokenInfo;
};

//dev: get Next ClaimTime
export const getNextClaimTime = async (_id) => {
    console.log("_NFTidNextClaim", _id);
    const contracts = new web3.eth.Contract(abiEVCNftStake, ContractaddressEVCNftStake);
    console.log(contracts);
    const accounts = await window.ethereum.request({
        method: "eth_accounts",
    });
    const account = accounts[0];
    console.log("getNFTNextClaim_account", account);
    // const id =( _id.split(",")).toString();
    // console.log("_NFTidNextClaim", id);
    const nextClaim = await contracts.methods.nextClaimTime(account, _id).call();
    console.log("NextClaim111", nextClaim);
    const ClaimTime = window.localStorage.setItem("nextClaim ", nextClaim);
    console.log("ClaimTime", ClaimTime)
    return nextClaim;
};

//dev: get Current APR Of Plan
export const getCurrentAPROfNFTLevel = async (tokenId) => {
    const contracts = new web3.eth.Contract(abiEVCNftStake, ContractaddressEVCNftStake);
    console.log("APRForNftLevel", tokenId);
    const CurrentAPR = await contracts.methods.getCurrentAPRForTokenId(tokenId).call();
    console.log("CurrentAPR", CurrentAPR);
    // const CurrentAprPerc = CurrentAPR;
    // console.log("CurrentAprPerc", CurrentAprPerc);
    return CurrentAPR;
};








//dev: get Stake Balances NFTs
// defined but never used nor such view function in contract.
export const getStakeBalancesNFTs = async () => {
    console.log("getStakeBalancesNFTs");
    let contracts = new web3.eth.Contract(abiEVCNftStake, ContractaddressEVCNftStake);
    const accounts = await window.ethereum.request({
        method: "eth_accounts",
    });
    const account = accounts[0];
    console.log("getStakeBalancesNFTs_account", account);
    const stakeBalancesNFTs = await contracts.methods.stakeBalances(account).call();
    console.log("stakeBalancesNFTs", stakeBalancesNFTs);
    return stakeBalancesNFTs;
};

//dev: get Stake Balances NFTs
// defined but never used nor such view function in contract.
export const getFinalWithdraw = async (_id) => {
    console.log("_NFTidFinalWithdraw", _id);
    const contracts = new web3.eth.Contract(abiEVCNftStake, ContractaddressEVCNftStake);
    console.log(contracts);
    const accounts = await window.ethereum.request({
        method: "eth_accounts",
    });
    const account = accounts[0];
    console.log("getNFTFinalWithdraw_account", account);
    const id = _id.split(",")
    console.log("_NFTidFinalWithdraw", id);
    const nextClaim = await contracts.methods.final_ID_withdraw(account, id).call();
    console.log("getFinalWithdraw", nextClaim);
    return nextClaim;
};