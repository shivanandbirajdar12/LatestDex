//dev:  ABI-EVCNFTStake  Data
export const abiEVCNFTStake = [{
  "inputs": [{
      "internalType": "contract Token",
      "name": "_rewardTokenAddress",
      "type": "address"
  }, {
      "internalType": "contract NFT",
      "name": "_nftTokenAddress",
      "type": "address"
  }],
  "stateMutability": "nonpayable",
  "type": "constructor"
}, {
  "anonymous": false,
  "inputs": [{
      "indexed": true,
      "internalType": "address",
      "name": "staker",
      "type": "address"
  }, {
      "indexed": false,
      "internalType": "uint256[]",
      "name": "nftIds",
      "type": "uint256[]"
  }],
  "name": "NFTsStaked",
  "type": "event"
}, {
  "anonymous": false,
  "inputs": [{
      "indexed": true,
      "internalType": "address",
      "name": "staker",
      "type": "address"
  }, {
      "indexed": false,
      "internalType": "uint256[]",
      "name": "nftIds",
      "type": "uint256[]"
  }],
  "name": "NFTsUnstaked",
  "type": "event"
}, {
  "anonymous": false,
  "inputs": [{
      "indexed": true,
      "internalType": "address",
      "name": "previousOwner",
      "type": "address"
  }, {
      "indexed": true,
      "internalType": "address",
      "name": "newOwner",
      "type": "address"
  }],
  "name": "OwnershipTransferred",
  "type": "event"
}, {
  "anonymous": false,
  "inputs": [{
      "indexed": false,
      "internalType": "address",
      "name": "account",
      "type": "address"
  }],
  "name": "Paused",
  "type": "event"
}, {
  "anonymous": false,
  "inputs": [{
      "indexed": true,
      "internalType": "address",
      "name": "staker",
      "type": "address"
  }, {
      "indexed": false,
      "internalType": "uint256[]",
      "name": "nftIds",
      "type": "uint256[]"
  }, {
      "indexed": false,
      "internalType": "uint256",
      "name": "claimedAmount",
      "type": "uint256"
  }],
  "name": "RewardClaimed",
  "type": "event"
}, {
  "anonymous": false,
  "inputs": [{
      "indexed": false,
      "internalType": "uint256",
      "name": "rewardPercentage",
      "type": "uint256"
  }, {
      "indexed": false,
      "internalType": "uint256",
      "name": "claimedReward",
      "type": "uint256"
  }, {
      "indexed": false,
      "internalType": "uint256",
      "name": "totalReward",
      "type": "uint256"
  }],
  "name": "RewardPercentage",
  "type": "event"
}, {
  "anonymous": false,
  "inputs": [{
      "indexed": false,
      "internalType": "address",
      "name": "account",
      "type": "address"
  }],
  "name": "Unpaused",
  "type": "event"
}, {
  "stateMutability": "payable",
  "type": "fallback"
}, {
  "inputs": [{
      "internalType": "uint256",
      "name": "tokenId",
      "type": "uint256"
  }],
  "name": "checkRepurchase",
  "outputs": [{
      "internalType": "bool",
      "name": "",
      "type": "bool"
  }],
  "stateMutability": "view",
  "type": "function"
}, {
  "inputs": [{
      "internalType": "uint256[]",
      "name": "_ids",
      "type": "uint256[]"
  }],
  "name": "claimReward",
  "outputs": [],
  "stateMutability": "nonpayable",
  "type": "function"
}, {
  "inputs": [{
      "internalType": "uint256",
      "name": "totalEVC",
      "type": "uint256"
  }],
  "name": "getAmountoutEvcToUsdt",
  "outputs": [{
      "internalType": "uint256",
      "name": "",
      "type": "uint256"
  }],
  "stateMutability": "view",
  "type": "function"
}, {
  "inputs": [{
      "internalType": "uint256",
      "name": "totalUsdt",
      "type": "uint256"
  }],
  "name": "getAmountoutUsdtToEvc",
  "outputs": [{
      "internalType": "uint256",
      "name": "",
      "type": "uint256"
  }],
  "stateMutability": "view",
  "type": "function"
}, {
  "inputs": [{
      "internalType": "uint256",
      "name": "tokenId",
      "type": "uint256"
  }],
  "name": "getCurrentAPRForTokenId",
  "outputs": [{
      "internalType": "uint256",
      "name": "",
      "type": "uint256"
  }],
  "stateMutability": "view",
  "type": "function"
}, {
  "inputs": [{
      "internalType": "address",
      "name": "user",
      "type": "address"
  }, {
      "internalType": "uint256",
      "name": "tokenId",
      "type": "uint256"
  }],
  "name": "getElapsedTime",
  "outputs": [{
      "internalType": "uint256",
      "name": "",
      "type": "uint256"
  }],
  "stateMutability": "view",
  "type": "function"
}, {
  "inputs": [{
      "internalType": "uint256",
      "name": "tokenId",
      "type": "uint256"
  }],
  "name": "getNFTCost",
  "outputs": [{
      "internalType": "uint256",
      "name": "",
      "type": "uint256"
  }],
  "stateMutability": "view",
  "type": "function"
}, {
  "inputs": [{
      "internalType": "uint256",
      "name": "tokenId",
      "type": "uint256"
  }],
  "name": "getRepurchaseNftCost",
  "outputs": [{
      "internalType": "uint256",
      "name": "",
      "type": "uint256"
  }],
  "stateMutability": "view",
  "type": "function"
}, {
  "inputs": [{
      "internalType": "address",
      "name": "_user",
      "type": "address"
  }, {
      "internalType": "uint256",
      "name": "_id",
      "type": "uint256"
  }],
  "name": "getRewardPercentage",
  "outputs": [{
      "internalType": "uint256",
      "name": "",
      "type": "uint256"
  }],
  "stateMutability": "view",
  "type": "function"
}, {
  "inputs": [{
      "internalType": "address",
      "name": "_owner",
      "type": "address"
  }],
  "name": "getTokensOfStaker",
  "outputs": [{
      "internalType": "uint256[]",
      "name": "",
      "type": "uint256[]"
  }],
  "stateMutability": "view",
  "type": "function"
}, {
  "inputs": [{
      "internalType": "uint256",
      "name": "tokenId",
      "type": "uint256"
  }],
  "name": "getUnclaimedReward",
  "outputs": [{
      "internalType": "uint256",
      "name": "",
      "type": "uint256"
  }],
  "stateMutability": "view",
  "type": "function"
}, {
  "inputs": [{
      "internalType": "address",
      "name": "user",
      "type": "address"
  }],
  "name": "getUserEvcClaimedNFtStake",
  "outputs": [{
      "internalType": "uint256",
      "name": "",
      "type": "uint256"
  }],
  "stateMutability": "view",
  "type": "function"
}, {
  "inputs": [{
      "internalType": "address",
      "name": "_usdt",
      "type": "address"
  }, {
      "internalType": "address",
      "name": "_evc",
      "type": "address"
  }, {
      "internalType": "address",
      "name": "_nftaddress",
      "type": "address"
  }, {
      "internalType": "address",
      "name": "_evcRouter",
      "type": "address"
  }],
  "name": "initialize",
  "outputs": [],
  "stateMutability": "nonpayable",
  "type": "function"
}, {
  "inputs": [{
      "internalType": "address",
      "name": "",
      "type": "address"
  }, {
      "internalType": "uint256",
      "name": "",
      "type": "uint256"
  }],
  "name": "nextClaimTime",
  "outputs": [{
      "internalType": "uint256",
      "name": "",
      "type": "uint256"
  }],
  "stateMutability": "view",
  "type": "function"
}, {
  "inputs": [],
  "name": "owner",
  "outputs": [{
      "internalType": "address",
      "name": "",
      "type": "address"
  }],
  "stateMutability": "view",
  "type": "function"
}, {
  "inputs": [],
  "name": "pause",
  "outputs": [],
  "stateMutability": "nonpayable",
  "type": "function"
}, {
  "inputs": [],
  "name": "paused",
  "outputs": [{
      "internalType": "bool",
      "name": "",
      "type": "bool"
  }],
  "stateMutability": "view",
  "type": "function"
}, {
  "inputs": [],
  "name": "renounceOwnership",
  "outputs": [],
  "stateMutability": "nonpayable",
  "type": "function"
}, {
  "inputs": [{
      "internalType": "uint256",
      "name": "tokenId",
      "type": "uint256"
  }],
  "name": "repurchase",
  "outputs": [],
  "stateMutability": "nonpayable",
  "type": "function"
}, {
  "inputs": [{
      "internalType": "uint256[]",
      "name": "newAPR",
      "type": "uint256[]"
  }],
  "name": "setAPR",
  "outputs": [],
  "stateMutability": "nonpayable",
  "type": "function"
}, {
  "inputs": [{
      "internalType": "uint256",
      "name": "_claimTime",
      "type": "uint256"
  }],
  "name": "setClaimTime",
  "outputs": [],
  "stateMutability": "nonpayable",
  "type": "function"
}, {
  "inputs": [{
      "internalType": "address",
      "name": "_newEvcRouterAdress",
      "type": "address"
  }],
  "name": "setEvcRouterAddress",
  "outputs": [],
  "stateMutability": "nonpayable",
  "type": "function"
}, {
  "inputs": [{
      "internalType": "address",
      "name": "_evcTokenAddress",
      "type": "address"
  }],
  "name": "setEvcTokenAddress",
  "outputs": [],
  "stateMutability": "nonpayable",
  "type": "function"
}, {
  "inputs": [{
      "internalType": "address",
      "name": "_nftToken",
      "type": "address"
  }],
  "name": "setNftToken",
  "outputs": [],
  "stateMutability": "nonpayable",
  "type": "function"
}, {
  "inputs": [{
      "internalType": "uint256",
      "name": "_repurchasePercentage",
      "type": "uint256"
  }],
  "name": "setRepurchasePercentage",
  "outputs": [],
  "stateMutability": "nonpayable",
  "type": "function"
}, {
  "inputs": [{
      "internalType": "uint256",
      "name": "tokenId",
      "type": "uint256"
  }, {
      "internalType": "uint256",
      "name": "amount",
      "type": "uint256"
  }],
  "name": "setRepurchaseamount",
  "outputs": [],
  "stateMutability": "nonpayable",
  "type": "function"
}, {
  "inputs": [{
      "internalType": "address",
      "name": "_rewardToken",
      "type": "address"
  }],
  "name": "setRewardToken",
  "outputs": [],
  "stateMutability": "nonpayable",
  "type": "function"
}, {
  "inputs": [{
      "internalType": "address",
      "name": "_usdtTokenAddress",
      "type": "address"
  }],
  "name": "setUsdtTokenAddress",
  "outputs": [],
  "stateMutability": "nonpayable",
  "type": "function"
}, {
  "inputs": [{
      "internalType": "uint256",
      "name": "amount",
      "type": "uint256"
  }],
  "name": "setapproval",
  "outputs": [],
  "stateMutability": "nonpayable",
  "type": "function"
}, {
  "inputs": [{
      "internalType": "uint256[]",
      "name": "_ids",
      "type": "uint256[]"
  }],
  "name": "stakeNFT",
  "outputs": [],
  "stateMutability": "nonpayable",
  "type": "function"
}, {
  "inputs": [{
      "internalType": "uint256",
      "name": "",
      "type": "uint256"
  }],
  "name": "tokenIdRepurchaseLimit",
  "outputs": [{
      "internalType": "uint256",
      "name": "",
      "type": "uint256"
  }],
  "stateMutability": "view",
  "type": "function"
}, {
  "inputs": [{
      "internalType": "uint256",
      "name": "",
      "type": "uint256"
  }],
  "name": "tokenInfo",
  "outputs": [{
      "internalType": "uint256",
      "name": "startTime",
      "type": "uint256"
  }, {
      "internalType": "uint256",
      "name": "endTime",
      "type": "uint256"
  }, {
      "internalType": "uint256",
      "name": "totalClaimed",
      "type": "uint256"
  }],
  "stateMutability": "view",
  "type": "function"
}, {
  "inputs": [{
      "internalType": "address",
      "name": "to",
      "type": "address"
  }, {
      "internalType": "uint256",
      "name": "tokenId",
      "type": "uint256"
  }],
  "name": "transferNFT",
  "outputs": [],
  "stateMutability": "nonpayable",
  "type": "function"
}, {
  "inputs": [{
      "internalType": "address",
      "name": "newOwner",
      "type": "address"
  }],
  "name": "transferOwnership",
  "outputs": [],
  "stateMutability": "nonpayable",
  "type": "function"
}, {
  "inputs": [{
      "internalType": "address",
      "name": "to",
      "type": "address"
  }, {
      "internalType": "uint256",
      "name": "amount",
      "type": "uint256"
  }],
  "name": "transferToken",
  "outputs": [{
      "internalType": "uint256",
      "name": "",
      "type": "uint256"
  }],
  "stateMutability": "nonpayable",
  "type": "function"
}, {
  "inputs": [{
      "internalType": "uint256",
      "name": "_amount",
      "type": "uint256"
  }, {
      "internalType": "address",
      "name": "to",
      "type": "address"
  }],
  "name": "transferToken1",
  "outputs": [{
      "internalType": "uint256",
      "name": "",
      "type": "uint256"
  }],
  "stateMutability": "nonpayable",
  "type": "function"
}, {
  "inputs": [],
  "name": "unpause",
  "outputs": [],
  "stateMutability": "nonpayable",
  "type": "function"
}, {
  "inputs": [{
      "internalType": "uint256[]",
      "name": "_ids",
      "type": "uint256[]"
  }],
  "name": "withdrawNFT",
  "outputs": [],
  "stateMutability": "nonpayable",
  "type": "function"
}, {
  "stateMutability": "payable",
  "type": "receive"
}]