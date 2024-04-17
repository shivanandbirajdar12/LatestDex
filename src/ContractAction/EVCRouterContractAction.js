import Web3 from "web3";
import { abiEVCTokenStake } from "./ABI/EVCStake"
import { ABIPancakeRouter } from "./ABI/PancakeRouter"
import { abiBUSD } from "./ABI/BUSD";
import { useActionData } from "react-router-dom";

//dev: RPC, Address & ABI
var RPCUrl = "https://polygon-testnet.public.blastapi.io";
var ContractaddressEVCToken = "0x7DB4F94C61317D3A971c0D9027212Ee3a328bca0";
// const abiERC20Token = abiEVCTokenStake

var ContractaddressBUSD = "0xA07566Db17C9608EB019527b1db3245e59dA33e2";
const abiERC20Token = abiBUSD;

var ContractAddressEvcRouter = "0x8954AfA98594b838bda56FE4C12a09D7739D179b";
const abiTTRouter = ABIPancakeRouter;


var TTRouterAddress = "0x81998918B841D3FE27C244585f6e81446d4A5E71";
var USDTAddress = '0xA07566Db17C9608EB019527b1db3245e59dA33e2';
var EVCAddress = '0x97779C0b556EF2F33Cb3e8350E36F978eF0f2C53';
var pairAddress = '0x1d8f7C4e3297a3c1Da0A516E446250F73B291681'

// NOTE: EVC deployed for providing liquidity remove it when addressess are being changed 
// and also replace variable in allownceEVC function and also remove ABIEVCToken in EVCStake.js in ABI file

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



export const getAllowanceTokentoRouter = async (tokenContractAddress) => {
    console.log("getAllowanceTokentoRouter")
    try {
        if (window.ethereum) {
            const web3 = new Web3(window.ethereum);
            const accounts = await window.ethereum.request({
                method: "eth_accounts",
            });
            const account = accounts[0];
            const contracts = new web3.eth.Contract(abiERC20Token, tokenContractAddress);
            console.log("account", account);
            console.log("tokenContractAddress", tokenContractAddress);
            const response = await contracts.methods.allowance(account, TTRouterAddress).call();
            const allowance = web3.utils.fromWei(response, 'ether')
            console.log("allowanceTokentoRouter", allowance);
            return allowance;
        }
    } catch (error) {
        console.log("AllowanceTokentoRouterERROR", error);
    }
};

export const setTokenApproveRouter = async (amount, tokenContractAddress) => {
    console.log("setTokenApproveRouter");
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
            const contracts = await new web3.eth.Contract(abiBUSD, USDTAddress);
            const amountTokenInWei = web3.utils.toWei(amount.toString(), 'ether');
            const amountApproveTokenToRouter = await contracts.methods
                .approve(TTRouterAddress, amountTokenInWei)
                .send({ from: account });
            console.log("amountApproveTokenToRouter", amountApproveTokenToRouter);
        }
    } catch (error) {
        console.log("amountApproveTokenToRouterError", error);
    }
};


export const getTokenBalance = async (tokenContractAddress) => {
    console.log("getTokenBalance");
    try {
        if (window.ethereum) {
            const web3 = new Web3(window.ethereum);
            // Get the selected account
            const accounts = await window.ethereum.request({
                method: "eth_accounts",
            });
            const account = accounts[0];
            const contracts = new web3.eth.Contract(abiERC20Token, tokenContractAddress);
            console.log("contracts_methods", contracts.methods);
            console.log("account", account);
            const response = await contracts.methods.balanceOf(account).call();
            const balance = Number(web3.utils.fromWei(response, 'ether'));
            console.log(`TokenBalance of ${tokenContractAddress}`, balance);
            return balance;
        }
    } catch (error) {
        console.log("balance_error", error);
    }
};



export const getValueOutTokenAtoTokenB = async (TokenA, TokenAContractAddress, TokenBContractAddress) => {
    if (TokenA > 0) {
        console.log("TokenA", TokenA);
        if (window.ethereum) {
            const web3 = new Web3(window.ethereum);
            const contracts = new web3.eth.Contract(abiTTRouter, TTRouterAddress);
            console.log(contracts);
            const path = [
                TokenAContractAddress,
                TokenBContractAddress
            ];
            const _finalTokenAamountWei = web3.utils.toWei(TokenA.toString(), 'ether');
            console.log("_finalTokenAamountWei", _finalTokenAamountWei)
            const response = await contracts.methods.getAmountsOut(_finalTokenAamountWei, path).call();
            console.log("Contract response:", response);
            const res = response[1];
            let resultAmount = web3.utils.fromWei(res, 'ether')
            console.log("resultAmountTokenAtoTokenB", resultAmount)
            let resultValue = parseFloat(resultAmount).toFixed(8)
            console.log("resultValueTokenAtoTokenB", resultValue)
            return resultValue;
            // return response;
        } else {
            console.log("enter valid amount")
        }
    } else {
        return 0;
    }
};




// export const allowanceBusdtoEvcRouter = async () => {
//     console.log("allowanceBusdtoEvcRouter")
//     try {
//         if (window.ethereum) {
//             const web3 = new Web3(window.ethereum);
//             const accounts = await window.ethereum.request({
//                 method: "eth_accounts",
//             });
//             const account = accounts[0];
//             const contracts = new web3.eth.Contract(abiERC20Token, ContractaddressBUSD);
//             console.log("account", account);
//             console.log("ContractAddressEvcRouter", ContractAddressEvcRouter);
//             const response = await contracts.methods.allowance(account, ContractAddressEvcRouter).call();
//             const allowance = web3.utils.fromWei(response, 'ether')
//             console.log("allowanceBusdtoEvcRouter", allowance);
//             return allowance;
//         }
//     } catch (error) {
//         console.log("allowanceBusdtoEvcRouter_error", error);
//     }
// };
// allowanceBusdtoEvcRouter()

export const setSwapStableForTokens = async (amountIn) => {
    try {
        if (window.ethereum) {
            const web3 = new Web3(window.ethereum);
            // Ensure the user is connected to their wallet
            await window.ethereum.request({ method: 'eth_requestAccounts' });
            // Get the selected account
            const accounts = await window.ethereum.request({
                method: 'eth_accounts',
            });
            const account = accounts[0];
            // Create a new instance of the contract
            const contract = new web3.eth.Contract(abiTTRouter, ContractAddressEvcRouter);
            // Convert the input values to BigNumber or use string (if required)
            const amountInWei = web3.utils.toWei(amountIn.toString(), 'ether');
            console.log("amountInWei", amountInWei)
            const amountOutMin = 1;
            const amountOutMinWei = web3.utils.toWei(amountOutMin.toString(), 'ether');
            console.log("amountOutMinWei", amountOutMinWei)
            // Calculate the deadline as 10 minutes ahead of the current time
            const currentTimestamp = Math.floor(Date.now() / 1000); // Convert to seconds
            const deadline = currentTimestamp + 600; // 600 seconds = 10 minutes
            // Execute the swapExactTokensForTokens2 function
            const result = await contract.methods
                .swapExactTokensForTokens2(amountInWei, amountOutMinWei, account, account, deadline)
                .send({ from: account });
            console.log('setSwapStableForTokens_result:', result);
        }
    } catch (error) {
        console.error('setSwapStableForTokens_error:', error);
    }
};

export const setSwapTokensForStable = async (amountIn) => {
    try {
        if (window.ethereum) {
            const web3 = new Web3(window.ethereum);
            // Ensure the user is connected to their wallet
            await window.ethereum.request({ method: 'eth_requestAccounts' });
            // Get the selected account
            const accounts = await window.ethereum.request({
                method: 'eth_accounts',
            });
            const account = accounts[0];
            // Create a new instance of the contract
            const contract = new web3.eth.Contract(abiTTRouter, ContractAddressEvcRouter);
            // Convert the input values to BigNumber or use string (if required)
            const amountInWei = web3.utils.toWei(amountIn.toString(), 'ether');
            console.log("amountInWei", amountInWei)
            const amountOutMin = 0;
            // const amountOutMinWei = web3.utils.toWei(amountOutMin.toString(), 'ether');
            // console.log("amountOutMinWei", amountOutMinWei)
            const path = [
                ContractaddressEVCToken,
                ContractaddressBUSD
            ];
            // Calculate the deadline as 10 minutes ahead of the current time
            const currentTimestamp = Math.floor(Date.now() / 1000); // Convert to seconds
            const deadline = currentTimestamp + 600; // 600 seconds = 10 minutes
            // Execute the swapTokensForStable function
            const result = await contract.methods
                .swapExactTokensForTokensSupportingFeeOnTransferTokens(amountInWei, amountOutMin, path, account, deadline)
                .send({ from: account });
            console.log('swapExactTokensForTokens_E2B_result:', result);
        }
    } catch (error) {
        console.error('swapExactTokensForTokens_E2B_error:', error);
    }
};


export const getValueOutBusdToEvc = async (amountBusd) => {
    if (amountBusd > 0) {
        console.log("amountBusd", amountBusd);
        if (window.ethereum) {
            const web3 = new Web3(window.ethereum);

            const contracts = new web3.eth.Contract(abiTTRouter, ContractAddressEvcRouter);

            console.log(contracts);
            const path = [
                ContractaddressBUSD,
                ContractaddressEVCToken
            ];
            console.log("amount", typeof amountBusd)
            const _finalamountWei = new web3.utils.BN(web3.utils.toWei(amountBusd.toString(), 'ether'));
            console.log("_finalamountWei", _finalamountWei)
            const response = await contracts.methods.getAmountsOut(_finalamountWei, path).call();
            console.log("Contract response:", response);
            const res = response[1];
            let resultAmount = web3.utils.fromWei(res, 'ether')
            console.log("resultAmountB2E", resultAmount)
            let resultValue = parseFloat(resultAmount).toFixed(8)
            console.log("resultAmountB2E", resultValue)
            return resultValue;
            // return response;
        } else {
            console.log("enter valid amount")
        }
    } else {
        return 0;
    }
}

// export const getValueOutBusdToEvc = async (amountBusd) => {
//     try {
//         if (window.ethereum) {
//             const web3 = new Web3(window.ethereum);
//             const accounts = await window.ethereum.request({
//                 method: 'eth_accounts',
//             });
//             const account = accounts[0];
//             const contracts = new web3.eth.Contract(abiTTRouter, ContractAddressEvcRouter);
//             // Convert amountBusd to a BigNumber
//             const amountInBusd = new web3.utils.BN(web3.utils.toWei(amountBusd.toString(), 'ether'));
//             // Check if amountInEvc is zero
//             if (amountInBusd.isZero()) {
//                 return "0"; // Return "0" as a string
//             }
//             // Call the smart contract function
//             const response = await contracts.methods.getAmountoutBusdToEvc(amountInBusd).call();
//             const amountOutBUSD = web3.utils.fromWei(response, 'ether');
//             console.log('AmountoutBusdToEvc:', amountOutBUSD);
//             return amountOutBUSD;
//         }
//     } catch (error) {
//         console.error('getValueOutBusdToEvc', error);
//     }
// };
// getValueOutBusdToEvc(1)

// export const getValueOutEvcToBusd = async (amountEvc) => {
//     try {
//         if (window.ethereum) {
//             const web3 = new Web3(window.ethereum);
//             const accounts = await window.ethereum.request({
//                 method: 'eth_accounts',
//             });
//             const account = accounts[0];
//             const contracts = new web3.eth.Contract(abiTTRouter, ContractAddressEvcRouter);
//             // Convert amountEvc to a BigNumber
//             const amountInEvc = new web3.utils.BN(web3.utils.toWei(amountEvc.toString(), 'ether'));
//             // Check if amountInEvc is zero
//             if (amountInEvc.isZero()) {
//                 return "0"; // Return "0" as a string
//             }
//             // Call the smart contract function
//             const response = await contracts.methods.getAmountoutEvcToBusd(amountInEvc).call();
//             const amountOutBUSD = web3.utils.fromWei(response, 'ether');
//             console.log('AmountoutEvcToBusd:', amountOutBUSD);
//             return amountOutBUSD;
//         }
//     } catch (error) {
//         console.error('getAmountoutEvcToBusd', error);
//     }
// };
// getValueOutEvcToBusd(1)

export const getAmountUserSwappedEvctoBusd = async () => {
    try {
        if (window.ethereum) {
            const web3 = new Web3(window.ethereum);
            // Get the selected account
            const accounts = await window.ethereum.request({
                method: 'eth_accounts',
            });
            const account = accounts[0];
            console.log("getAmountUserSwappedEvctoBusd_account", account);
            // Create a new instance of the contract
            const contract = new web3.eth.Contract(abiTTRouter, ContractAddressEvcRouter);
            const amountUserSwappedEvctoBusdInWei = await contract.methods.getUserSwapEvctoBusdAmount(account).call();
            console.log("amountUserSwappedEvctoBusdInWei", amountUserSwappedEvctoBusdInWei);
            // Convert the result to a human-readable format
            const amountUserSwapEvctoBusd = web3.utils.fromWei(amountUserSwappedEvctoBusdInWei, "ether");
            console.log("amountUserSwapEvctoBusd", amountUserSwapEvctoBusd);
            // Round the amount to 6 decimal places
            const amountuserSwapEvctoBusd = parseFloat(amountUserSwapEvctoBusd).toFixed(6);
            console.log("getAmountUserSwappedEvctoBusd_return", amountuserSwapEvctoBusd);
            // return amountuserSwapEvctoBusd;
            return 2;

        }
    } catch (error) {
        console.error('getAmountUserSwappedEvctoBusd_error:', error);
    }
};

export const getUserTotalledEVCMinted = async () => {
    try {
        if (window.ethereum) {
            const web3 = new Web3(window.ethereum);
            // Get the selected account
            const accounts = await window.ethereum.request({
                method: 'eth_accounts',
            });
            const account = accounts[0];
            console.log("getUserTotalledEVCMinted_account", account);
            // Create a new instance of the contract
            const contract = new web3.eth.Contract(abiTTRouter, ContractAddressEvcRouter);
            const userTotalEVCMintedInWei = await contract.methods.getUserTotalEVCMinted(account).call();
            console.log("userTotalEVCMintedInWei", userTotalEVCMintedInWei);
            // Convert the result to a human-readable format
            const userTotalEVCMinted = web3.utils.fromWei(userTotalEVCMintedInWei, "ether");
            console.log("userTotalEVCMinted", userTotalEVCMinted);
            // Round the amount to 6 decimal places
            const userTotalledEVCMinted = parseFloat(userTotalEVCMinted).toFixed(6);
            console.log("getUserTotalledEVCMinted_return", userTotalledEVCMinted);
            return userTotalledEVCMinted;
            // return 3;
        }
    } catch (error) {
        console.error('getUserTotalledEVCMinted_error:', error);
    }
};

export const estimateGasFeeForSwapBUSDToEVC = async (amountIn) => {
    if (amountIn > 0) {
        try {
            if (window.ethereum) {
                const web3 = new Web3(window.ethereum);
                // Get the selected account
                const accounts = await window.ethereum.request({
                    method: 'eth_accounts',
                });
                const account = accounts[0];
                // Create a new instance of the contract
                const contract = new web3.eth.Contract(abiTTRouter, ContractAddressEvcRouter);
                // Convert the input values to BigNumber or use string (if required)
                const amountInWei = web3.utils.toWei(amountIn.toString(), 'ether');
                const amountOutMin = 1;
                const amountOutMinWei = web3.utils.toWei(amountOutMin.toString(), 'ether');
                const path = [
                    ContractaddressBUSD,
                    ContractaddressEVCToken
                ];
                // Calculate the deadline as 10 minutes ahead of the current time
                const currentTimestamp = Math.floor(Date.now() / 1000); // Convert to seconds
                const deadline = currentTimestamp + 600; // 600 seconds = 10 minutes
                // Estimate gas cost for the swapExactTokensForTokens2 function
                const gasEstimate = await contract.methods
                    .swapExactTokensForTokens(amountInWei, amountOutMinWei, path, account, deadline)
                    .estimateGas({ from: account });
                // Get the current gas price
                const gasPrice = await web3.eth.getGasPrice();
                // Calculate the gas fee in Ether
                const gasFee = web3.utils.fromWei((gasEstimate * gasPrice).toString(), 'ether');
                console.log("estimateGasFeeForSwapBUSDToEVC", gasFee)
                return gasFee;
            }
        } catch (error) {
            console.error('estimateGasFeeForSwapBUSDToEVC_error:', error);
        }
    }
    return;
};

export const estimateGasFeeForSwap = async (amountIn) => {
    if (amountIn > 0) {
        try {
            if (window.ethereum) {
                const web3 = new Web3(window.ethereum);
                // Get the selected account
                const accounts = await window.ethereum.request({
                    method: 'eth_accounts',
                });
                const account = accounts[0];
                // Create a new instance of the contract
                const contract = new web3.eth.Contract(abiTTRouter, ContractAddressEvcRouter);
                // Convert the input values to BigNumber or use string (if required)
                const amountInWei = web3.utils.toWei(amountIn.toString(), 'ether');
                const amountOutMin = 0;
                const amountOutMinWei = web3.utils.toWei(amountOutMin.toString(), 'ether');
                const path = [
                    ContractaddressEVCToken,
                    ContractaddressBUSD
                ];
                // Calculate the deadline as 10 minutes ahead of the current time
                const currentTimestamp = Math.floor(Date.now() / 1000); // Convert to seconds
                const deadline = currentTimestamp + 600; // 600 seconds = 10 minutes
                // Estimate gas cost for the swapTokensForStable function
                const gasEstimate = await contract.methods
                    .swapExactTokensForTokens(amountInWei, amountOutMinWei, path, account, deadline)
                    .estimateGas({ from: account });
                // Get the current gas price
                const gasPrice = await web3.eth.getGasPrice();
                // Calculate the gas fee in Ether
                const gasFee = web3.utils.fromWei((gasEstimate * gasPrice).toString(), 'ether');
                console.log("estimateGasFeeForSwap", gasFee)
                return gasFee;
            }
        } catch (error) {
            console.error('estimateGasFeeForSwap_error:', error);
        }
    }
    return;
};