// import Web3 from "web3";
// import { pairAbi } from "./ABI/panCakePair";
// import { abiLocker } from "./ABI/Locker";

// var RPCUrl = "https://polygon-testnet.public.blastapi.io";
// var pairAddress = "0x44542A401e898D8DE9A86bF028fee463F662A508";
// var lockerAddress = "0xf25b899F920B63DD61E9153A13b8f3f799F279EE";

// const pairABI = pairAbi;
// const lockerAbI = abiLocker;

// var web3 = new Web3(new Web3.providers.HttpProvider(RPCUrl));

// //dev: CurrentProvider
// const detectCurrentProvider = () => {
//     let provider;
//     if (window.ethereum) {
//         provider = window.ethereum;
//     } else if (window.web3) {
//         provider = window.web3.currentProvider;
//     } else {
//         console.log("Non-ethereum browser detected. You should install Metamask");
//     }
//     return provider;
// };


// export const setPairApprovalToLocker = async () => {
//     console.log("setPairApprovalToLocker");
//     try {
//         if (window.ethereum) {
//             const web3 = new Web3(window.ethereum);
//             await window.ethereum.request({ method: "eth_requestAccounts" });
//             //dev:  Get the selected account
//             const accounts = await window.ethereum.request({
//                 method: "eth_accounts",
//             });
//             const account = accounts[0];
//             const currentChainId = await web3.eth.net.getId();
//             if (currentChainId !== 80001) {
//                 await web3.currentProvider.request({
//                     method: "wallet_switchEthereumChain",
//                     params: [{ chainId: Web3.utils.toHex(80001) }],
//                 });
//             }
//             const contracts = new web3.eth.Contract(pairABI, pairAddress);
//             const approveLock = await contracts.methods
//                 .approve(lockerAddress, "100000000000000000000000000000000000")
//                 .send({ from: account });
//             console.log("approveLock", approveLock);
//             if(approveLock){
//                 window.location.reload();
//             }
//         }
//     } catch (error) {
//         console.log("approveLock", error);
//     }
// };

// // export const getPairAllowanceToFarming = async () => {
// //     console.log("getPairAllowanceToFarming");
// //     let contracts = new web3.eth.Contract(pairABI, pairAddress);
// //     const accounts = await window.ethereum.request({
// //         method: "eth_accounts",
// //     });
// //     const account = accounts[0];
// //     console.log("getPairAllowanceToFarming_account", account);
// //     const getPairAllowanceToFarming = await contracts.methods.allowance(account, lockerAddress).call();
// //     console.log("getPairAllowanceToFarming", getPairAllowanceToFarming);
// //     return getPairAllowanceToFarming;
// // };


// export const setLockLiquidity = async (_amount) => {
//     console.log("_amount", _amount);
//     if (window.ethereum) {
//         const web3 = new Web3(window.ethereum);
//         await window.ethereum.request({ method: "eth_requestAccounts" });
//         // Get the selected account
//         const accounts = await window.ethereum.request({ method: "eth_accounts" });
//         const account = accounts[0];
//         const currentChainId = await web3.eth.net.getId();
//         if (currentChainId !== 80001) {
//             await web3.currentProvider.request({
//                 method: "wallet_switchEthereumChain",
//                 params: [{ chainId: Web3.utils.toHex(80001) }],
//             });
//         }
//         const contracts = new web3.eth.Contract(lockerAbI, lockerAddress);
//         console.log(contracts);
//         const amount = web3.utils.toWei(_amount);
//         console.log("amount", amount);
//         let timeInSeconds = 60; // NOTE: update this as per requirement
//         const lockliquidity = await contracts.methods.lockLiquidity(amount, timeInSeconds, account).send({ from: account });
//         console.log("lockliquidity", lockliquidity);
//         if(lockliquidity){
//             window.location.reload();
//         };
//     }
// };


// export const setUnLockLiquidity = async (_ID) => {
//     console.log("_ID", _ID);
//     if (window.ethereum) {
//         const web3 = new Web3(window.ethereum);
//         await window.ethereum.request({ method: "eth_requestAccounts" });
//         // Get the selected account
//         const accounts = await window.ethereum.request({ method: "eth_accounts" });
//         const account = accounts[0];
//         const currentChainId = await web3.eth.net.getId();
//         if (currentChainId !== 80001) {
//             await web3.currentProvider.request({
//                 method: "wallet_switchEthereumChain",
//                 params: [{ chainId: Web3.utils.toHex(80001) }],
//             });
//         }
//         const contracts = new web3.eth.Contract(lockerAbI, lockerAddress);
//         console.log(contracts);
//         const unlockliquidity = await contracts.methods.unLockLiquidity(pairAddress, _ID).send({ from: account });
//         console.log("unlockliquidity", unlockliquidity);
//         if(unlockliquidity){
//             window.location.reload();
//         };
//     }
// };


// export const getUserActiveLocksids = async () => {
//     console.log("getUserActiveLocksids");
//     let contracts = new web3.eth.Contract(lockerAbI, lockerAddress);
//     const accounts = await window.ethereum.request({
//         method: "eth_accounts",
//     });
//     const account = accounts[0];
//     console.log("getUserActiveLocksids_account", account);
//     const useractiveLocksids = await contracts.methods.userActiveLocksids(account).call();
//     console.log("useractiveLocksids", useractiveLocksids);
//     return useractiveLocksids;
// };


// export const getUserLpLockBalance = async () => {
//     console.log("getUserLpLockBalance");
//     let contracts = new web3.eth.Contract(lockerAbI, lockerAddress);
//     const accounts = await window.ethereum.request({
//         method: "eth_accounts",
//     });
//     const account = accounts[0];
//     console.log("getUserLpLockBalance_account", account);
//     let userLpLockData = await contracts.methods.userLPlocks(pairAddress, account).call();
//     console.log("userLpLockData", userLpLockData);
//     let userLpLockBalance = userLpLockData[3];
//     console.log("userLpLockBalanceWei", userLpLockBalance);
//     let userLPLockBalance = web3.utils.fromWei(userLpLockBalance, "ether");
//     console.log("userLpLockBalanceEth", userLPLockBalance);
//     return userLPLockBalance;
// };
