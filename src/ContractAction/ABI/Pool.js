//dev: ABI- abiPool data
export const abiPool = [{
  "inputs": [{
      "internalType": "address",
      "name": "_usdtToken",
      "type": "address"
  }, {
      "internalType": "address",
      "name": "_evcToken",
      "type": "address"
  }],
  "stateMutability": "nonpayable",
  "type": "constructor"
}, {
  "anonymous": false,
  "inputs": [{
      "indexed": true,
      "internalType": "address",
      "name": "account",
      "type": "address"
  }, {
      "indexed": false,
      "internalType": "uint256",
      "name": "amount",
      "type": "uint256"
  }],
  "name": "EVCTokensRBClaimed",
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
  "inputs": [],
  "name": "claimVestRB",
  "outputs": [],
  "stateMutability": "nonpayable",
  "type": "function"
}, {
  "inputs": [{
      "internalType": "address",
      "name": "_user",
      "type": "address"
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
      "internalType": "address",
      "name": "_user",
      "type": "address"
  }],
  "name": "getRemainingEVCAmountRB",
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
  }],
  "name": "getRewardPercentageEVCRB",
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
  "name": "getUserRedeemValuevestSwap",
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
      "name": "_claimBarometerTime",
      "type": "uint256"
  }],
  "name": "setClaimBarometerTime",
  "outputs": [],
  "stateMutability": "nonpayable",
  "type": "function"
}, {
  "inputs": [{
      "internalType": "address",
      "name": "_EVCToken",
      "type": "address"
  }],
  "name": "setEVCToken",
  "outputs": [],
  "stateMutability": "nonpayable",
  "type": "function"
}, {
  "inputs": [{
      "internalType": "address",
      "name": "_evcNFTToken",
      "type": "address"
  }],
  "name": "setEvcNFTToken",
  "outputs": [],
  "stateMutability": "nonpayable",
  "type": "function"
}, {
  "inputs": [{
      "internalType": "address",
      "name": "_evcRouter",
      "type": "address"
  }],
  "name": "setEvcRouterAddress",
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
  "inputs": [],
  "name": "unpause",
  "outputs": [],
  "stateMutability": "nonpayable",
  "type": "function"
}, {
  "inputs": [{
      "internalType": "address",
      "name": "_to",
      "type": "address"
  }, {
      "internalType": "uint256",
      "name": "_amount",
      "type": "uint256"
  }],
  "name": "withdrawEVC",
  "outputs": [],
  "stateMutability": "nonpayable",
  "type": "function"
}, {
  "inputs": [{
      "internalType": "address",
      "name": "_to",
      "type": "address"
  }, {
      "internalType": "uint256",
      "name": "_amount",
      "type": "uint256"
  }],
  "name": "withdrawUSDT",
  "outputs": [],
  "stateMutability": "nonpayable",
  "type": "function"
}, {
  "stateMutability": "payable",
  "type": "receive"
}]