import Web3 from "web3";
import { ABIPancakeRouter } from "../ABI/PancakeRouter";
import { abiBUSD } from "../ABI/BUSD";
import { abiEVCTokenStake } from "../ABI/EVCStake";
import { allowanceBUSD } from "../BUSDContractAction";
import { allowanceEVC } from "../EVCStakeContractAction";
import { pairAbi } from "../ABI/panCakePair";
import { abiEVCFarming } from "./Farming";
import { abiFactory } from "../ABI/FactoryAbi";
const chainAddresses = require('./ChainAddresses.json');

var RPCUrl = "https://rpc.ankr.com/avalanche_fuji";
var BUSDAddress = '0xA07566Db17C9608EB019527b1db3245e59dA33e2';
var EVCAddress = '0x97779C0b556EF2F33Cb3e8350E36F978eF0f2C53';
var pancakeRouterAddress = "0x81998918B841D3FE27C244585f6e81446d4A5E71";
// var factoryAddress = "0x8170827c89faF53DD75Cb37982Df5844C926183c";
var farmingAddress = "0x595c78D6bE258cA76b738251528Fe9F719e8F71B";
var pairAddress = '0x1d8f7C4e3297a3c1Da0A516E446250F73B291681'

const pancakecakeRouterABI = ABIPancakeRouter;
const abiERC20Token = abiBUSD;
const abiTTRouter = ABIPancakeRouter;
var web3 = new Web3(new Web3.providers.HttpProvider(RPCUrl));


export const checkTransfersToDeadAddress = async () => {
    try {
        const evcTokenContractAddress = '0x97779c0b556ef2f33cb3e8350e36f978ef0f2c53'; // EVC token contract address
        const deadAddress = '0x000000000000000000000000000000000000dEaD'; // Dead address
        const web3 = new Web3(window.ethereum);
        let evcTokenContract;
        try {
            evcTokenContract = new web3.eth.Contract(abiERC20Token, evcTokenContractAddress);
        } catch (error) {
            console.error('EVC token contract not found.');
            return; // Exit function if contract is not found
        }
        const checkForTransfers = async () => {
            const latestBlock = await web3.eth.getBlockNumber();
            alert(latestBlock)
            const fromBlock = 47572500; // Start fetching events from 100 blocks ago
            const toBlock = latestBlock;
            const events = await evcTokenContract.getPastEvents('Transfer', {
                filter: { to: deadAddress },
                fromBlock: fromBlock,
                toBlock: toBlock
            });
            events.forEach(event => {
                console.log(`Alert: Transfer to dead address detected! Transaction Hash: ${event.transactionHash}`);
            });
        };
        setInterval(checkForTransfers, 30000); // Poll every 30 seconds
    } catch (error) {
        console.error('An error occurred:', error);
    }
}
// checkTransfersToDeadAddress()



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
            const currentChainId = await web3.eth.net.getId();
            // Assuming chainAddresses is your data array
            const routerAddressObject = chainAddresses.find(chain => chain[currentChainId]);
            let routerAddress;
            if (routerAddressObject) {
                routerAddress = routerAddressObject[currentChainId].RouterAddress;
            } else {
                alert("Router address not found for current chain ID");
            }
            const response = await contracts.methods.allowance(account, routerAddress).call();
            const allowance = web3.utils.fromWei(response, 'ether')
            console.log(`allowanceToken_${tokenContractAddress}_toRouter_${routerAddress}:`, allowance);
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
            const accounts = await window.ethereum.request({
                method: "eth_accounts",
            });
            const account = accounts[0];
            const currentChainId = await web3.eth.net.getId();
            const contracts = await new web3.eth.Contract(abiERC20Token, tokenContractAddress);
            // Assuming chainAddresses is your data array
            const routerAddressObject = chainAddresses.find(chain => chain[currentChainId]);
            let routerAddress;
            if (routerAddressObject) {
                routerAddress = routerAddressObject[currentChainId].RouterAddress;
            } else {
                alert("Router address not found for current chain ID");
            }
            const amountTokenInWei = web3.utils.toWei(amount.toString(), 'ether');
            const amountApproveTokenToRouter = await contracts.methods
                .approve(routerAddress, amountTokenInWei)
                .send({ from: account });
            window.location.reload();
            console.log("amountApproveTokenToRouter", amountApproveTokenToRouter);
        }
    } catch (error) {
        console.log("amountApproveTokenToRouterError", error);
    }
};


export const addliquidity = async (_amount0, _amount1, TokenAContractAddress, TokenBContractAddress) => {
    console.log("addliquidity");
    if (window.ethereum) {
        const web3 = new Web3(window.ethereum);
        await window.ethereum.request({ method: "eth_requestAccounts" });
        // Get the selected account
        const accounts = await window.ethereum.request({ method: "eth_accounts" });
        console.log("accounts", accounts)
        const account = accounts[0];
        const currentChainId = await web3.eth.net.getId();
        // if (currentChainId !== 80001) {
        //     await web3.currentProvider.request({
        //         method: "wallet_switchEthereumChain",
        //         params: [{ chainId: Web3.utils.toHex(80001) }],
        //     });
        // }
        // const BUSDAllowance = await allowanceBUSD(pancakeRouterAddress);
        // console.log("BUSDAllowance", BUSDAllowance)
        console.log("_amount0", _amount0)
        console.log("_amount1", _amount1)
        // if (Number(BUSDAllowance) < Number((web3.utils.toWei(_amount0)))){
        //     await BUSDApprove_Router();}
        // const EVCAllowance = await allowanceEVC(pancakeRouterAddress);
        // if (Number(EVCAllowance) < Number((web3.utils.toWei(_amount1.toString(), 'ether')))){
        //     await EVCApprove_Router();}
        // Assuming chainAddresses is your data array
        const routerAddressObject = chainAddresses.find(chain => chain[currentChainId]);
        let routerAddress;
        if (routerAddressObject) {
            routerAddress = routerAddressObject[currentChainId].RouterAddress;
        } else {
            alert("Router address not found for current chain ID");
        }
        const contracts = new web3.eth.Contract(ABIPancakeRouter, routerAddress);
        console.log(contracts);
        const to = account;
        console.log("_to", to);
        const tokenA = BUSDAddress;
        const tokenB = EVCAddress;
        const start = Date.now();
        let epoch = start / 1000;
        let myepoch = epoch.toFixed(0);
        console.log("epoch...", myepoch);
        const deadlineEpoch = Number(myepoch) + 500;
        console.log("deadlineEpoch", deadlineEpoch)
        const inputValue0 = _amount0;
        // const _finalamount = web3.utils.toWei(inputValue);
        const _finalamount0Wei = web3.utils.toWei(inputValue0.toString(), 'ether');
        console.log("_finalamount0Wei", _finalamount0Wei)
        const inputValue1 = _amount1;
        // const _finalamount = web3.utils.toWei(inputValue);
        const _finalamount1Wei = web3.utils.toWei(inputValue1.toString(), 'ether');
        console.log("_finalamount1Wei", _finalamount1Wei)
        let pairAddr = await getPairforTokenATokenB(TokenAContractAddress, TokenBContractAddress);
        alert("pairAddr" + pairAddr)
        if (pairAddr === "0x0000000000000000000000000000000000000000") {
            await setPairforTokenATokenB(TokenAContractAddress, TokenBContractAddress);
        }
        const response = await contracts.methods
            .addLiquidity(TokenAContractAddress, TokenBContractAddress, _finalamount0Wei, _finalamount1Wei, 0, 0, to, deadlineEpoch)
            .send({ from: account });
        console.log("Contract response:", response);
        return response;
        // if(response){
        //     const vestApprove = await setPairFarmingApprove();
        //     if(vestApprove){
        //         await setStakeCake();
        //     }
        // }
    }
};

export const getPairforTokenATokenB = async (TokenAContractAddress, TokenBContractAddress) => {
    console.log("getPairforTokenATokenB")
    try {
        if (window.ethereum) {
            const web3 = new Web3(window.ethereum);
            const accounts = await window.ethereum.request({
                method: "eth_accounts",
            });
            const account = accounts[0];
            let chainId = await getCurrentChainId();
            // Assuming chainAddresses is your data array
            const factoryAddressObject = chainAddresses.find(chain => chain[chainId]);
            let factoryAddress;
            if (factoryAddressObject) {
                factoryAddress = factoryAddressObject[chainId].FactoryAddress;
            } else {
                alert("Factory address not found for current chain ID");
            }
            const contracts = new web3.eth.Contract(abiFactory, factoryAddress);
            console.log("account", account);
            console.log("factoryAddress", factoryAddress);
            const tokenAnBPair = await contracts.methods.getPair(TokenAContractAddress, TokenBContractAddress).call();
            console.log("tokenAnBPair", tokenAnBPair)
            return tokenAnBPair;
        }
    } catch (error) {
        console.log("getPairforTokenATokenBERROR", error);
    }
}

export const getCurrentChainId = async () => {
    console.log("getCurrentChainId")
    try {
        if (window.ethereum) {
            const web3 = new Web3(window.ethereum);
            const CurrentChainId = Number(await web3.eth.net.getId());
            console.log("CurrentChainId", CurrentChainId)
            return CurrentChainId;
        }
    } catch (error) {
        console.log("getCurrentChainIdERROR", error);
    }
}

// export const getCurrentChainIdRouterAddress = async () => {
//     try {
//         const chainId = await getCurrentChainId();
//         let routerAddress;
//         if (chainId === 80001) {
//             routerAddress = "0x81998918B841D3FE27C244585f6e81446d4A5E71"; // Polygon Testnet
//         } else if (chainId === 43113) {
//             routerAddress = "0xEd502557209a6ADF5F9d67557a6bdF0C44335884"; // Avalanche Testnet
//         } else {
//             console.error("Router address not found for chain ID:", chainId);
//             return null;
//         }
//         console.log("getCurrentChainIdRouterAddress", routerAddress);
//         return routerAddress;
//     } catch (error) {
//         console.error('Error getting router address:', error);
//         return null;
//     }
// }

export const getCurrentChainIdTokenAddress = async (tokenSymbol) => {
    let chainId = await getCurrentChainId();
    let tokenAddress = null;
    const chain = chainAddresses.find(chain => chain.hasOwnProperty(chainId));
    console.log("chain_getCurrentChainIdTokenAddress", chain)
    if (chain) {
        const token = chain[chainId].tokens.find(token => token.ticker === tokenSymbol);
        if (token) {
            tokenAddress = token.address;
            console.log(`getCurrentChainIdTokenAddress on ${chainId}-${tokenSymbol}: `, tokenAddress);
        } else {
            console.error(`Token ${tokenSymbol} not found for chain ID ${chainId}`);
        }
    } else {
        console.error(`Chain ID ${chainId} not found`);
    }
    return tokenAddress;
};

export const getCurrentChainIdNativeTokenAddress = async (nativeTokenAddress) => {
    let chainId = await getCurrentChainId();
    let tokenFound = false;
    const chain = chainAddresses.find(chain => chain.hasOwnProperty(chainId));
    console.log("chain_getCurrentChainIdNativeTokenAddress", chain)
    if (chain) {
        const token = chain[chainId].tokens.find(token => token.nativeAddress === nativeTokenAddress);
        if (token) {
            tokenFound = true;
            console.log(`getCurrentChainIdNativeTokenAddress on ${chainId}-${nativeTokenAddress}: `, nativeTokenAddress);
        } else {
            console.log(`Token ${nativeTokenAddress} is not native for chain ID ${chainId}`);
        }
    } else {
        console.log(`Chain ID ${chainId} not found`);
    }
    console.log("tokenFound", tokenFound)
    return tokenFound;
};
export const addLiquidityETH = async (_amount0, _amount1, TokenAContractAddress, TokenBContractAddress) => {
    console.log("addLiquidityETH");
    if (window.ethereum) {
        const web3 = new Web3(window.ethereum);
        await window.ethereum.request({ method: "eth_requestAccounts" });
        const accounts = await window.ethereum.request({ method: "eth_accounts" });
        const account = accounts[0];
        const currentChainId = await web3.eth.net.getId();
        const routerAddressObject = chainAddresses.find(chain => chain[currentChainId]);
        let routerAddress;
        if (routerAddressObject) {
            routerAddress = routerAddressObject[currentChainId].RouterAddress;
        } else {
            alert("Router address not found for current chain ID");
        }
        const contracts = new web3.eth.Contract(ABIPancakeRouter, routerAddress);
        const to = account;
        const start = Date.now();
        let epoch = start / 1000;
        let myepoch = epoch.toFixed(0);
        const deadlineEpoch = Number(myepoch) + 500;
        const inputValue0 = _amount0;
        const _finalamount0Wei = web3.utils.toWei(inputValue0.toString(), 'ether');
        const inputValue1 = _amount1;
        const _finalamount1Wei = web3.utils.toWei(inputValue1.toString(), 'ether');
        let pairAddr = await getPairforTokenATokenB(TokenAContractAddress, TokenBContractAddress);
        alert("pairAddr" + pairAddr);
        if (pairAddr === "0x0000000000000000000000000000000000000000") {
            await setPairforTokenATokenB(TokenAContractAddress, TokenBContractAddress);
        }
        const response = await contracts.methods
            .addLiquidityETH(TokenBContractAddress, _finalamount1Wei, 0, 0, to, deadlineEpoch)
            .send({ from: account, value: _finalamount0Wei });
        console.log("Contract response:", response);
        return response;
    }
}


export const getCurrentChainIdRouterAddress = async (chainId) => {
    console.log("getCurrentChainIdRouterAddress");
    const chainDetails = chainAddresses.find(chain => chain.hasOwnProperty(chainId));
    if (chainDetails) {
        const routerAddress = chainDetails[chainId]?.RouterAddress;
        console.log(`getCurrentChainIdRouterAddress on ${chainId}: `, routerAddress);
        return routerAddress;
    } else {
        console.error(`Chain ID ${chainId} not found`);
        return null;
    }
};


export const setPairforTokenATokenB = async (TokenAContractAddress, TokenBContractAddress) => {
    console.log("setPairforTokenATokenB")
    try {
        if (window.ethereum) {
            const web3 = new Web3(window.ethereum);
            await window.ethereum.request({ method: "eth_requestAccounts" });
            // Get the selected account
            const accounts = await window.ethereum.request({ method: "eth_accounts" });
            console.log("accounts", accounts)
            const account = accounts[0];
            const currentChainId = await web3.eth.net.getId();
            // if (currentChainId !== 80001) {
            //     await web3.currentProvider.request({
            //         method: "wallet_switchEthereumChain",
            //         params: [{ chainId: Web3.utils.toHex(80001) }],
            //     });
            // }
            // Assuming chainAddresses is your data array
            const factoryAddressObject = chainAddresses.find(chain => chain[currentChainId]);
            let factoryAddress;
            if (factoryAddressObject) {
                factoryAddress = factoryAddressObject[currentChainId].FactoryAddress;
            } else {
                alert("Factory address not found for current chain ID");
            }
            const contracts = new web3.eth.Contract(abiFactory, factoryAddress);
            console.log("account", account);
            console.log("factoryAddress", factoryAddress);
            const tokenAnBPair = await contracts.methods.createPair(TokenAContractAddress, TokenBContractAddress).send({ from: account });
            return tokenAnBPair;
        };
    } catch (error) {
        console.log("setPairforTokenATokenBERROR", error);
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
            const currentChainId = await web3.eth.net.getId();
            // Assuming chainAddresses is your data array
            const routerAddressObject = chainAddresses.find(chain => chain[currentChainId]);
            let routerAddress;
            if (routerAddressObject) {
                routerAddress = routerAddressObject[currentChainId].RouterAddress;
            } else {
                alert("Router address not found for current chain ID");
            }
            const contracts = new web3.eth.Contract(abiTTRouter, routerAddress);
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


export const setSwapTokenAForTokenB = async (amountIn, TokenAContractAddress, TokenBContractAddress) => {
    console.log("setSwapTokenAForTokenB")
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
            const currentChainId = await web3.eth.net.getId();
            // Assuming chainAddresses is your data array
            const routerAddressObject = chainAddresses.find(chain => chain[currentChainId]);
            let routerAddress;
            if (routerAddressObject) {
                routerAddress = routerAddressObject[currentChainId].RouterAddress;
            } else {
                alert("Router address not found for current chain ID");
            }
            const contract = new web3.eth.Contract(abiTTRouter, routerAddress);
            // Convert the input values to BigNumber or use string (if required)
            const amountInWei = web3.utils.toWei(amountIn.toString(), 'ether');
            console.log("amountInWei", amountInWei)
            const amountOutMin = 0;
            const path = [
                TokenAContractAddress,
                TokenBContractAddress
            ];
            // const amountOutMinWei = web3.utils.toWei(amountOutMin.toString(), 'ether');
            // console.log("amountOutMinWei", amountOutMinWei)
            // Calculate the deadline as 10 minutes ahead of the current time
            const currentTimestamp = Math.floor(Date.now() / 1000); // Convert to seconds
            const deadline = currentTimestamp + 600; // 600 seconds = 10 minutes
            // Execute the swapExactTokensForTokens2 function
            const result = await contract.methods
                .swapExactTokensForTokens2(amountInWei, amountOutMin, path, account, deadline)
                .send({ from: account });
            window.location.reload();
            console.log('setSwapStableForTokens_result:', result);
        }
    } catch (error) {
        console.error('setSwapStableForTokens_error:', error);
    }
};


export const setSwapExactETHForTokens = async (amountIn, TokenAContractAddress, TokenBContractAddress) => {
    console.log("setSwapExactETHForTokens");
    try {
        if (window.ethereum) {
            const web3 = new Web3(window.ethereum);
            await window.ethereum.request({ method: 'eth_requestAccounts' });
            const accounts = await window.ethereum.request({ method: 'eth_accounts' });
            const account = accounts[0];
            const currentChainId = await web3.eth.net.getId();
            // Assuming chainAddresses is your data array
            const routerAddressObject = chainAddresses.find(chain => chain[currentChainId]);
            let routerAddress;
            if (routerAddressObject) {
                routerAddress = routerAddressObject[currentChainId].RouterAddress;
            } else {
                alert("Router address not found for current chain ID");
            }
            const contract = new web3.eth.Contract(abiTTRouter, routerAddress);
            const amountInWei = web3.utils.toWei(amountIn.toString(), 'ether');
            const amountOutMin = 0;
            const path = [
                TokenAContractAddress,
                TokenBContractAddress
            ];
            const currentTimestamp = Math.floor(Date.now() / 1000);
            const deadline = currentTimestamp + 600; // 600 seconds = 10 minutes
            const result = await contract.methods
                .swapExactETHForTokens(amountOutMin, path, account, deadline)
                .send({ from: account, value: amountInWei });
            window.location.reload();
            console.log('swapExactETHForTokens_result:', result);
            return result;
        }
    } catch (error) {
        console.error('swapExactETHForTokens_error:', error);
    }
}

export const setSwapExactTokensForETH = async (amountIn, TokenAContractAddress, TokenBContractAddress) => {
    console.log("setSwapExactTokensForETH");
    try {
        if (window.ethereum) {
            const web3 = new Web3(window.ethereum);
            await window.ethereum.request({ method: 'eth_requestAccounts' });
            const accounts = await window.ethereum.request({ method: 'eth_accounts' });
            const account = accounts[0];
            const currentChainId = await web3.eth.net.getId();
            // Assuming chainAddresses is your data array
            const routerAddressObject = chainAddresses.find(chain => chain[currentChainId]);
            let routerAddress;
            if (routerAddressObject) {
                routerAddress = routerAddressObject[currentChainId].RouterAddress;
            } else {
                alert("Router address not found for current chain ID");
            }
            const contract = new web3.eth.Contract(abiTTRouter, routerAddress);
            const amountInWei = web3.utils.toWei(amountIn.toString(), 'ether');
            const amountOutMin = 0;
            const path = [
                TokenAContractAddress,
                TokenBContractAddress
            ];
            const currentTimestamp = Math.floor(Date.now() / 1000);
            const deadline = currentTimestamp + 600; // 600 seconds = 10 minutes
            const result = await contract.methods
                .swapExactTokensForETH(amountInWei, amountOutMin, path, account, deadline)
                .send({ from: account });
            window.location.reload();
            console.log('swapExactTokensForETH_result:', result);
            return result;
        }
    } catch (error) {
        console.error('swapExactTokensForETH_error:', error);
    }
}


export const getTokenSymbol = async (tokenContractAddress) => {
    try {
        if (window.ethereum) {
            const web3 = new Web3(window.ethereum);
            const contract = new web3.eth.Contract(abiERC20Token, tokenContractAddress);
            const tokenSymbol = await contract.methods.symbol().call();
            console.log(`Token Symbol of address ${tokenContractAddress} is: ${tokenSymbol}`);
            alert(`Token Symbol of address ${tokenContractAddress} is: ${tokenSymbol}`);
            return tokenSymbol;
        } else {
            throw new Error("MetaMask not installed or accessible");
        }
    } catch (error) {
        console.error(`Error fetching token symbol for address ${tokenContractAddress}:`, error);
        throw error;
    }
};

export const getTokenContractAddressExists = async (TokenAContractAddress, TokenBContractAddress) => {
    try {
        console.log("TokenAContractAddress, TokenBContractAddress", TokenAContractAddress, TokenBContractAddress);
        if (window.ethereum) {
            const web3 = new Web3(window.ethereum);
            const currentChainId = await web3.eth.net.getId();
            // Assuming chainAddresses is your data array
            const factoryAddressObject = chainAddresses.find(chain => chain[currentChainId]);
            let factoryAddress;
            if (factoryAddressObject) {
                factoryAddress = factoryAddressObject[currentChainId].FactoryAddress;
            } else {
                alert("Factory address not found for current chain ID");
            }
            const contracts = new web3.eth.Contract(abiFactory, factoryAddress);
            console.log(contracts);
            const tokensPairAddress = await contracts.methods.getPair(TokenAContractAddress, TokenBContractAddress).call();
            console.log("tokensPairAddress:", tokensPairAddress);
            if (tokensPairAddress !== "0x0000000000000000000000000000000000000000") {
                const tokenASymbol = await getTokenSymbol(TokenAContractAddress);
                const tokenBSymbol = await getTokenSymbol(TokenBContractAddress);
                console.log(`tokensSymbol of address ${TokenAContractAddress} is: `, tokenASymbol);
                console.log(`tokensSymbol of address ${TokenBContractAddress} is: `, tokenBSymbol);
                let tokenSymbols = [tokenASymbol, tokenBSymbol];
                console.log("tokenSymbols", tokenSymbols);
                return tokenSymbols;
            } else {
                console.log("Pair address is invalid");
                return null;
            }
        } else {
            throw new Error("MetaMask not installed or accessible");
        }
    } catch (error) {
        console.error("Error:", error);
        throw error;
    }
};















export const getTokenPairAddress = async (TokenAContractAddress, TokenBContractAddress) => {
    const currentChainId = await web3.eth.net.getId();
    // Assuming chainAddresses is your data array
    const factoryAddressObject = chainAddresses.find(chain => chain[currentChainId]);
    let factoryAddress;
    if (factoryAddressObject) {
        factoryAddress = factoryAddressObject[currentChainId].FactoryAddress;
    } else {
        alert("Factory address not found for current chain ID");
    }
    const contract = new web3.eth.Contract(abiFactory, factoryAddress);
    console.log(contract);
    const tokensPairAddress = await contract.methods.getPair(TokenAContractAddress, TokenBContractAddress).call();
    console.log("tokensPairAddress:", tokensPairAddress);
    return tokensPairAddress;
}
// getTokenPairAddress("0x0834557b3787A769c7dCda37581241D4C87AfF1c","0x9B1980E236980a8015fa447611243760883a2bBB")


export const getUserPairBalance = async () => {
    if (window.ethereum) {
        const web3 = new Web3(window.ethereum);
        await window.ethereum.request({ method: "eth_requestAccounts" });
        // Get the selected account
        const accounts = await window.ethereum.request({ method: "eth_accounts" });
        const account = accounts[0];
        let pairAddress = await getTokenPairAddress("0x0834557b3787A769c7dCda37581241D4C87AfF1c", "0x9B1980E236980a8015fa447611243760883a2bBB");
        const contract = new web3.eth.Contract(pairAbi, pairAddress);
        const balance = await contract.methods.balanceOf(account).call();
        const balanceAsNumber = balance.toString();
        console.log("getUserPairBalance:", balanceAsNumber);
        return balanceAsNumber;
    } else {
        throw new Error("MetaMask not installed or accessible");
    }
}
getUserPairBalance()
export const getPairTotalSupplyAndPoolSharePerc = async () => {
    if (window.ethereum) {
        const web3 = new Web3(window.ethereum);
        await window.ethereum.request({ method: "eth_requestAccounts" });
        // Get the selected account
        let pairAddress = await getTokenPairAddress("0x0834557b3787A769c7dCda37581241D4C87AfF1c", "0x9B1980E236980a8015fa447611243760883a2bBB");
        const contract = new web3.eth.Contract(pairAbi, pairAddress);
        const balance = await contract.methods.totalSupply().call();
        const balanceAsNumber = balance.toString();
        console.log("getPairTotalSupply:", balanceAsNumber);
        let x = await getUserPairBalance();
        let y = balanceAsNumber
        let percentage = (x / y) * 100;
        console.log("percentage", percentage);
        let result = [balanceAsNumber, percentage];
        console.log("getPairTotalSupplyAndPoolSharePerc", result);
        return result;
    } else {
        throw new Error("MetaMask not installed or accessible");
    }
}
getPairTotalSupplyAndPoolSharePerc()

export const removeliquidity = async (_amount, TokenAContractAddress, TokenBContractAddress) => {
    console.log("removeliquidity");
    if (window.ethereum) {
        const web3 = new Web3(window.ethereum);
        await window.ethereum.request({ method: "eth_requestAccounts" });
        // Get the selected account
        const accounts = await window.ethereum.request({ method: "eth_accounts" });
        console.log("accounts", accounts)
        const account = accounts[0];
        // const currentChainId = await web3.eth.net.getId();
        // if (currentChainId !== 80001) {
        //     await web3.currentProvider.request({
        //         method: "wallet_switchEthereumChain",
        //         params: [{ chainId: Web3.utils.toHex(80001) }],
        //     });
        // }
        // await BUSDApprove_Pair();
        // await EVCApprove_Pair();
        const currentChainId = await web3.eth.net.getId();
        const routerAddressObject = chainAddresses.find(chain => chain[currentChainId]);
        let routerAddress;
        if (routerAddressObject) {
            routerAddress = routerAddressObject[currentChainId].RouterAddress;
        } else {
            alert("Router address not found for current chain ID");
        }
        const contracts = new web3.eth.Contract(pancakecakeRouterABI, routerAddress);
        console.log(contracts);
        const to = account;
        console.log("_to", to);
        // const tokenA = BUSDAddress;
        // const tokenB = EVCAddress;
        const start = Date.now();
        let epoch = start / 1000;
        let myepoch = epoch.toFixed(0);
        console.log("epoch...", myepoch);
        const deadlineEpoch = Number(myepoch) + 500;
        console.log("deadlineEpoch", deadlineEpoch)
        const inputValue = _amount;
        const _finalamountWei = web3.utils.toWei(inputValue.toString(), 'ether');
        console.log("_finalamountWei", _finalamountWei)
        const response = await contracts.methods
            .removeLiquidity(TokenAContractAddress, TokenBContractAddress, _amount, 0, 0, to, deadlineEpoch)
            .send({ from: account });
        console.log("Contract response:", response);
    }
};


export const setPairApproveRouter = async (amountAprove) => {
    try {
        if (window.ethereum) {
            const web3 = new Web3(window.ethereum);
            await window.ethereum.request({ method: "eth_requestAccounts" });
            // Get the selected account
            const accounts = await window.ethereum.request({ method: "eth_accounts" });
            console.log("accounts", accounts)
            const account = accounts[0];
            const currentChainId = await web3.eth.net.getId();
            const routerAddressObject = chainAddresses.find(chain => chain[currentChainId]);
            let routerAddress;
            if (routerAddressObject) {
                routerAddress = routerAddressObject[currentChainId].RouterAddress;
            } else {
                alert("Router address not found for current chain ID");
            }
            let pairAddress = await getTokenPairAddress("0x0834557b3787A769c7dCda37581241D4C87AfF1c", "0x9B1980E236980a8015fa447611243760883a2bBB");
            console.log("pairAddress", pairAddress);
            const contracts = new web3.eth.Contract(pairAbi, pairAddress);
            const approveRouter = await contracts.methods.approve(routerAddress, amountAprove).send({ from: account });
            return approveRouter
        };
    } catch (error) {
        console.log("PairApproveRouterError", error);
    }
};

export const getPairAllowanceTokentoRouter = async () => {
    console.log("getPairAllowanceTokentoRouter")
    try {
        if (window.ethereum) {
            const web3 = new Web3(window.ethereum);
            const accounts = await window.ethereum.request({
                method: "eth_accounts",
            });
            const account = accounts[0];
            let pairAddress = await getTokenPairAddress("0x0834557b3787A769c7dCda37581241D4C87AfF1c", "0x9B1980E236980a8015fa447611243760883a2bBB");
            console.log("pairAddress", pairAddress);
            const contracts = new web3.eth.Contract(pairAbi, pairAddress);
            console.log("account", account);
            const currentChainId = await web3.eth.net.getId();
            // Assuming chainAddresses is your data array
            const routerAddressObject = chainAddresses.find(chain => chain[currentChainId]);
            let routerAddress;
            if (routerAddressObject) {
                routerAddress = routerAddressObject[currentChainId].RouterAddress;
            } else {
                alert("Router address not found for current chain ID");
            }
            const response = await contracts.methods.allowance(account, routerAddress).call();
            const allowance = response.toString()
            console.log(`allowanceToken_${pairAddress}_toRouter_${routerAddress}:`, allowance);
            return allowance;
        }
    } catch (error) {
        console.log("AllowanceTokentoRouterERROR", error);
    }
};
getPairAllowanceTokentoRouter()



/////////////////////////










export const getamountsoutEVCToBUSD = async (_amountIn) => {
    if (_amountIn > 0) {
        console.log("_amountIn", _amountIn);
        if (window.ethereum) {
            const web3 = new Web3(window.ethereum);

            const contracts = new web3.eth.Contract(pancakecakeRouterABI, pancakeRouterAddress);

            console.log(contracts);
            const path = [
                EVCAddress,
                BUSDAddress
            ];
            const _finalamountWei = web3.utils.toWei(_amountIn);
            console.log("_finalamountWei", _finalamountWei)
            const response = await contracts.methods.getAmountsOut(_finalamountWei, path).call();
            console.log("Contract response:", response);
            const res = response[1];
            let resultAmount = web3.utils.fromWei(res, 'ether')
            console.log("resultAmountE2B", resultAmount)
            let resultValue = parseFloat(resultAmount).toFixed(8)
            console.log("resultValueE2B", resultValue)
            return resultValue;
            // return response;
        } else {
            console.log("enter valid amount")
        }
    } else {
        return 0;
    }
};

export const getamountsoutBUSDToEVC = async (_amountIn) => {
    if (_amountIn > 0) {
        console.log("_amountIn", _amountIn);
        if (window.ethereum) {
            const web3 = new Web3(window.ethereum);

            const contracts = new web3.eth.Contract(pancakecakeRouterABI, pancakeRouterAddress);

            console.log(contracts);
            const path = [
                BUSDAddress,
                EVCAddress
            ];
            console.log("amount", typeof _amountIn)
            const _finalamountWei = web3.utils.toWei(_amountIn);
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

export const BUSDApprove_Router = async () => {
    try {
        if (window.ethereum) {
            const web3 = new Web3(window.ethereum);
            await window.ethereum.request({ method: "eth_requestAccounts" });
            // Get the selected account
            const accounts = await window.ethereum.request({ method: "eth_accounts" });
            console.log("accounts", accounts)
            const account = accounts[0];
            const currentChainId = await web3.eth.net.getId();
            if (currentChainId !== 80001) {
                await web3.currentProvider.request({
                    method: "wallet_switchEthereumChain",
                    params: [{ chainId: Web3.utils.toHex(80001) }],
                });
            }
            const contracts = new web3.eth.Contract(abiBUSD, BUSDAddress);
            const approveRouter = await contracts.methods.approve(pancakeRouterAddress, "100000000000000000000000000000000000").send({ from: account });
            if (approveRouter) {
                return true;
            }
        };
    } catch (error) {
        console.log("approveRouter", error);
    }
};


export const EVCApprove_Router = async () => {
    try {
        if (window.ethereum) {
            const web3 = new Web3(window.ethereum);
            await window.ethereum.request({ method: "eth_requestAccounts" });
            // Get the selected account
            const accounts = await window.ethereum.request({ method: "eth_accounts" });
            console.log("accounts", accounts)
            const account = accounts[0];
            const currentChainId = await web3.eth.net.getId();
            if (currentChainId !== 80001) {
                await web3.currentProvider.request({
                    method: "wallet_switchEthereumChain",
                    params: [{ chainId: Web3.utils.toHex(80001) }],
                });
            }
            const contracts = new web3.eth.Contract(abiEVCTokenStake, EVCAddress);
            const approveRouter = await contracts.methods.approve(pancakeRouterAddress, "100000000000000000000000000000000000").send({ from: account });
            if (approveRouter) {
                return true;
            }
        };
    } catch (error) {
        console.log("approveRouter", error);
    }
};

export const pairApprove_Router = async () => {
    try {
        if (window.ethereum) {
            const web3 = new Web3(window.ethereum);
            await window.ethereum.request({ method: "eth_requestAccounts" });
            // Get the selected account
            const accounts = await window.ethereum.request({ method: "eth_accounts" });
            console.log("accounts", accounts)
            const account = accounts[0];
            const currentChainId = await web3.eth.net.getId();
            if (currentChainId !== 80001) {
                await web3.currentProvider.request({
                    method: "wallet_switchEthereumChain",
                    params: [{ chainId: Web3.utils.toHex(80001) }],
                });
            }
            const contracts = new web3.eth.Contract(pairAbi, pairAddress);
            const approveRouter = await contracts.methods.approve(pancakeRouterAddress, "100000000000000000000000000000000000").send({ from: account });
            return approveRouter
        };
    } catch (error) {
        console.log("approveRouter", error);
    }
};

export const getCakeBalance = async () => {
    console.log("getCakeBalance")
    try {
        if (window.ethereum) {
            const web3 = new Web3(window.ethereum);
            //await window.ethereum.request({ method: "eth_requestAccounts" });
            // Get the selected account
            const accounts = await window.ethereum.request({
                method: "eth_accounts",
            });
            const account = accounts[0];
            const contracts = new web3.eth.Contract(pairAbi, pairAddress);
            console.log("i'm here", contracts.methods);
            console.log("account", account);
            const response = await contracts.methods.balanceOf(account).call();
            const balance = web3.utils.fromWei(response, 'ether')
            console.log("cakeBalance", balance);
            return balance;
        }
    } catch (error) {
        console.log("balance", error);
    }
};

export const allowanceCake = async (_contractAddress) => {
    console.log("allowanceCake")
    try {
        if (window.ethereum) {
            const web3 = new Web3(window.ethereum);
            const accounts = await window.ethereum.request({
                method: "eth_accounts",
            });
            const account = accounts[0];
            const contracts = new web3.eth.Contract(pairAbi, pairAddress);
            console.log("i'm here", contracts.methods);
            console.log("account", account);
            console.log("ContractAddressRouter", _contractAddress);
            const response = await contracts.methods.allowance(account, _contractAddress).call();
            const allowance = web3.utils.fromWei(response, 'ether')
            console.log("allowanceCake", allowance);
            return allowance;
        }
    } catch (error) {
        console.log("allowance", error);
    }
};






///////////////////



// export const getTotalFarmed = async () => {
//     console.log("getTotalFarmed");
//     let contracts = new web3.eth.Contract(abiEVCFarming, farmingAddress);
//     const response = await contracts.methods.totalFarmed().call();
//     console.log("getTotalFarmed", response);
//     const farmTotal = web3.utils.fromWei(response, 'ether');
//     console.log("farmTotal", farmTotal);
//     return farmTotal;
// };

export const getUserTotalEVCClaimed = async () => {
    console.log("getUserTotalEVCClaimed")
    try {
        if (window.ethereum) {
            const web3 = new Web3(window.ethereum);
            const accounts = await window.ethereum.request({
                method: "eth_accounts",
            });
            const account = accounts[0];
            console.log("account", account)
            const contracts = new web3.eth.Contract(abiEVCFarming, farmingAddress);
            const UserTotalEvcClaimed = await contracts.methods.userCakeClaimed(account).call();
            console.log("UserTotalEvcClaimedWEI", UserTotalEvcClaimed)
            const UserTotalEVCClaimed = web3.utils.fromWei(UserTotalEvcClaimed, 'ether')
            console.log("UserTotalEVCClaimedETH", UserTotalEVCClaimed);
            return UserTotalEVCClaimed;
        }
    } catch (error) {
        console.log("allowance", error);
    }
};


export const setPairFarmingApprove = async () => {
    console.log("setPairFarmingApprove");
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
            const contracts = new web3.eth.Contract(pairAbi, pairAddress);
            console.log("setPairApproveAddress", pairAddress);
            console.log("setVestingApproveAddress", farmingAddress);
            // console.log("setBUSD_NFTApprovecall",ethers.MaxUint256);
            const approveVest = await contracts.methods
                .approve(farmingAddress, "100000000000000000000000000000000000")
                .send({ from: account });
            console.log("setPairFarmingApprove", approveVest);
            return approveVest;
        }
    } catch (error) {
        console.log("approveError", error);
    }
};






export const setStakeCake = async () => {
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
        const contracts = new web3.eth.Contract(abiEVCFarming, farmingAddress);
        console.log(contracts);

        const stakeCakeAmount = await contracts.methods.stakeCake().send({ from: account });
        console.log("stakeCakeAmount", stakeCakeAmount);
    }
};


export const setUnstakeCake = async (_id) => {
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
        const contracts = new web3.eth.Contract(abiEVCFarming, farmingAddress);
        console.log(contracts);
        console.log("_id", _id);
        const unstakeCakeAmount = await contracts.methods.unstakeCake(_id).send({ from: account });
        console.log("unstakeCakeAmount", unstakeCakeAmount);
        return unstakeCakeAmount;
    }
};


export const setClaimCake = async () => {
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
        const contracts = new web3.eth.Contract(abiEVCFarming, farmingAddress);
        console.log(contracts);

        const claimCakeAmount = await contracts.methods.claimCakeReward().send({ from: account });
        console.log("claimCakeAmount", claimCakeAmount);
    }
};



// export const getEVCClaimLiquidityReward = async () => {
//     console.log("getEVCClaimLiquidityReward");
//     let contracts = new web3.eth.Contract(abiEVCFarming, farmingAddress);
//     const accounts = await window.ethereum.request({ method: 'eth_accounts' });
//     const account = accounts[0];
//     console.log("getEVCClaimLiquidityReward_account", account);
//     const response = await contracts.methods.getCakeStakedReward(account).call();
//     console.log("responeinwei", response)
//     const EVCClaimLiquidityReward = web3.utils.fromWei(response, "ether");
//     console.log("EVCClaimLiquidityReward", EVCClaimLiquidityReward);
//     return EVCClaimLiquidityReward;
// };

// export const getUserCakeStakedBalance = async () => {
//     console.log("getUserCakeStakedBalance");
//     let contracts = new web3.eth.Contract(abiEVCFarming, farmingAddress);
//     const accounts = await window.ethereum.request({ method: 'eth_accounts' });
//     const account = accounts[0];
//     console.log("getUserCakeStakedBalance_account", account);
//     const response = await contracts.methods.userCakeBalance(account).call();
//     console.log("responeinwei", response)
//     const userCakeStakeBalance = web3.utils.fromWei(response, "ether");
//     console.log("userCakeStakeBalance", userCakeStakeBalance);
//     return userCakeStakeBalance;
// };

///////////////////////////////////////////

// export const getPairAllowanceToFarming = async () => {
//     console.log("getPairAllowanceToFarming");
//     let contracts = new web3.eth.Contract(pairAbi, pairAddress);
//     const accounts = await window.ethereum.request({
//         method: "eth_accounts",
//     });
//     const account = accounts[0];
//     console.log("getPairAllowanceToFarming_account", account);
//     const getPairAllowanceToFarming = await contracts.methods.allowance(account, farmingAddress).call();
//     console.log("getPairAllowanceToFarming", getPairAllowanceToFarming);
//     return getPairAllowanceToFarming;
// };

// export const getUserStakedIds = async () => {
//     console.log("getUserStakedIds");
//     let contracts = new web3.eth.Contract(abiEVCFarming, farmingAddress);
//     const accounts = await window.ethereum.request({ method: 'eth_accounts' });
//     const account = accounts[0];
//     console.log("getUserStakedIds_account", account);
//     const userStakedIds = await contracts.methods.getStakedIds(account).call();
//     console.log("userStakedIds", userStakedIds);
//     return userStakedIds;
// };

// export const getUserCakeStakedInfo = async () => {
//     console.log("getUserCakeStakedInfo");
//     let contracts = new web3.eth.Contract(abiEVCFarming, farmingAddress);
//     const accounts = await window.ethereum.request({ method: 'eth_accounts' });
//     const account = accounts[0];
//     console.log("getUserCakeStakedInfo_account", account);
//     const userStakedIds = await getUserStakedIds()
//     let usercakeStakedInfoarray = [];
//     for (let i = 0; i < userStakedIds.length; i++) {
//         const userCakeStakedInfo = await contracts.methods.userCakeStakedInfo(account, userStakedIds[i]).call();
//         usercakeStakedInfoarray.push(userCakeStakedInfo);
//     }
//     console.log("usercakeStakedInfoarray", usercakeStakedInfoarray);
//     return usercakeStakedInfoarray;
// };