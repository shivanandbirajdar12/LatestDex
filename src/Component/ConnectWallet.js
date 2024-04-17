// import { useState } from 'react'; // Import useState hook
// import { WagmiConfig } from "wagmi";
// import { mainnet, arbitrum, polygonMumbai } from "viem/chains";
// import {
//   createWeb3Modal,
//   useWeb3Modal,
// } from "@web3modal/wagmi/react";
// import { getAccount } from '@wagmi/core'

// import { defaultWagmiConfig } from '@web3modal/wagmi/react/config';
// const projectId = "58a22d2bc1c793fc31c117ad9ceba8d9";

// const metadata = {
//   name: "Web3Modal",
//   description: "Web3Modal Example",
//   url: "https://web3modal.com",
//   icons: ["https://avatars.githubusercontent.com/u/37784886"],
// };

// const chains = [polygonMumbai, mainnet, arbitrum];
// const wagmiConfig = defaultWagmiConfig({
//   chains,
//   projectId,
//   metadata,
// });

// createWeb3Modal({
//   wagmiConfig,
//   projectId,
//   chains,
// });


// export default function ConnectWallet() {
//   const modal = useWeb3Modal();
//   console.log("modal", modal);
//   alert("modal");
//   const [connectedAccount, setConnectedAccount] = useState(null); // State to store connected account
//   const accounts = getAccount(wagmiConfig)
//   console.log("accounts", accounts);
//   alert("accounts"+accounts.address);


//   const handleConnect = async () => {
//     await modal.open();
//     const provider = modal.provider; // Access provider directly from modal
//     console.log("provider", provider);
//     alert("provider");
//     const address = getAccount(wagmiConfig)
//     console.log("address", address.address);
//     await setConnectedAccount(address.address);
//     alert("address");
//     alert(address);

//     const modal1 = createWeb3Modal({ wagmiConfig, projectId })
//     const { open, selectedNetworkId } = modal1.getState()
//     console.log("open", open);
//     console.log("selectedNetworkId", selectedNetworkId);
//   };

//   return (
//     <WagmiConfig config={wagmiConfig}>
//       <div>
//         <button className="btn btn-primary" onClick={handleConnect} >
//           {connectedAccount
//             ? `${connectedAccount.substring(0, 4)}...${connectedAccount.substring(38)}`
//             : "Connect Wallet"}
//         </button>
//         {/* <button onClick={handleConnect}>Connect Wallet</button> */}
//         {/* {connectedAccount && <p>Connected account: {connectedAccount}</p>} Display connected account if available */}
//       </div>
//     </WagmiConfig>
//   );
// }







// // import { useState } from 'react'; // Import useState hook
// // import { WagmiConfig } from "wagmi";
// // import { mainnet, arbitrum, polygonMumbai } from "viem/chains";
// // import {
// //   createWeb3Modal,
// //   useWeb3Modal,
// // } from "@web3modal/wagmi/react";
// // import { getAccount } from '@wagmi/core'

// // import { defaultWagmiConfig } from '@web3modal/wagmi/react/config';
// // const projectId = "58a22d2bc1c793fc31c117ad9ceba8d9";

// // const metadata = {
// //   name: "Web3Modal",
// //   description: "Web3Modal Example",
// //   url: "https://web3modal.com",
// //   icons: ["https://avatars.githubusercontent.com/u/37784886"],
// // };

// // const chains = [polygonMumbai, mainnet, arbitrum];
// // const wagmiConfig = defaultWagmiConfig({
// //   chains,
// //   projectId,
// //   metadata,
// // });

// // createWeb3Modal({
// //   wagmiConfig,
// //   projectId,
// //   chains,
// // });

// // export default function ConnectWallet() {
// //   const modal = useWeb3Modal();
// //   console.log("modal", modal);
// //   alert("modal");
// //   const [connectedAccount, setConnectedAccount] = useState(null); // State to store connected account

// //   const handleConnect = async () => {
// //     await modal.open();
// //     const provider = modal.provider; // Access provider directly from modal
// //     console.log("provider", provider);
// //     alert("provider");
// //     const address = getAccount(wagmiConfig)
// //     console.log("address", address.address);
// //     await setConnectedAccount(address.address);
// //     alert("address");
// //     alert(address);

// //     const modal1 = createWeb3Modal({ wagmiConfig, projectId })
// //     const { open, selectedNetworkId } = modal1.getState()
// //     console.log("open", open);
// //     console.log("selectedNetworkId", selectedNetworkId);
// //   };

// //   return (
// //     <WagmiConfig config={wagmiConfig}>
// //       <div>
// //         <button className="btn btn-primary" onClick={handleConnect} >
// //           {connectedAccount
// //             ? `${connectedAccount.substring(0, 4)}...${connectedAccount.substring(38)}`
// //             : "Connect Wallet"}
// //         </button>
// //         {/* <button onClick={handleConnect}>Connect Wallet</button> */}
// //         {/* {connectedAccount && <p>Connected account: {connectedAccount}</p>} Display connected account if available */}
// //       </div>
// //     </WagmiConfig>
// //   );
// // }
