// import React, { useRef, useEffect } from 'react';
// import './network.css';
// import tennisicon from '../Assets/images2/teenyicons_tick-solid.png';
//  import ts2 from '../Assets/images2/ts2.png';
//  import ts3 from '../Assets/images2/ts3.png';
//  import ts4 from '../Assets/images2/ts4.png';
//  import ts5 from '../Assets/images2/ts5.png';
//  import ts6 from '../Assets/images2/ts6.png';
//  import ts7 from '../Assets/images2/ts7.png';
//  const Option = ({ networkName, networkIcon, isSelected, onSelect }) => {
//     return (
//         <div className="network-overlay-inner" onClick={() => onSelect({ name: networkName, icon: networkIcon })}>
//             <div className="networks-parent">
//                 <img className="networks-icon" alt="" src={networkIcon} />
//                 <div className={isSelected ? "ethereum selected" : "ethereum"}>{networkName}</div>
//             </div>
//             {isSelected && (
//                 <img className="teenyiconstick-solid" alt="" src={tennisicon} />
//             )}
//         </div>
//     );
// };


// const NetworkOverlay = ({ selectedNetwork, onSelectNetwork }) => {
//     const [isOpen, setIsOpen] = React.useState(false);
//     const dropdownRef = useRef(null);
//     const networkOverlayRef = useRef(null);

//     const toggleDropdown = () => {
//         setIsOpen(!isOpen);
//     };

//     useEffect(() => {
//         function handleClickOutside(event) {
//             if (
//                 isOpen &&
//                 networkOverlayRef.current &&
//                 !networkOverlayRef.current.contains(event.target)
//             ) {
//                 setIsOpen(false);
//             }
//         }

//         document.addEventListener('mousedown', handleClickOutside);
//         return () => {
//             document.removeEventListener('mousedown', handleClickOutside);
//         };
//     }, [isOpen]);

//     const imageStyles = {
//                 height: '23px',
//                 width: '23px',
//             };

//     const options = [
//         { key: 1, networkName: 'Ethereum', networkIcon: './images/sprint.png' },
//         { key: 2, networkName: 'Arbitrum', networkIcon: ts2 },
//         { key: 3, networkName: 'Optimism', networkIcon: ts3 },
//         { key: 4, networkName: 'Polygon', networkIcon: ts4 },
//         { key: 5, networkName: 'BNB Chain', networkIcon: ts5 },
//         { key: 6, networkName: 'Avalanche', networkIcon: ts6 },
//         { key: 7, networkName: 'Celo', networkIcon: ts7 },
//         { key: 8, networkName: 'Base', networkIcon: 'https://www.baseprotocol.org/files/5f51b71bb4b4537bf94b57fc/5f51b71bb4b453b3364b584f_asset 3_2x.png' }
//     ].map(option => ({
//         ...option,
//         propName: option.networkName === selectedNetwork?.name
//     }));

//     return (
//         <>
//             <button
//                 id="selectedOptionBtn"
//                 ref={networkOverlayRef}
//                 type="button"
//                 className="btnGroupDrop1"
//                 onClick={toggleDropdown}
//             >
//                 {selectedNetwork?.icon && (
//                     <img src={selectedNetwork?.icon} className="ms-2 networks-icon" alt="" style={imageStyles} />
//                 )}
//                 <img
//                     src="/images/dropdown.png"
//                     className={`icons ${isOpen ? 'rotated' : ''}`}
//                     alt=""
//                     style={imageStyles}
//                 />
//                 {isOpen && (
//                     <div className="network-overlay" ref={dropdownRef}>
//                         {options.map((option, index) => (
//                             <Option
//                                 key={index}
//                                 networkName={option.networkName}
//                                 networkIcon={option.networkIcon}
//                                 isSelected={option.propName}
//                                 onSelect={onSelectNetwork}
//                             />
//                         ))}
//                     </div>
//                 )}
//             </button>
//         </>
//     );
// };

// export default NetworkOverlay;

// import React, { useRef, useEffect, useState } from 'react';
// import './network.css';
// import tennisicon from '../Assets/images2/teenyicons_tick-solid.png';
// import ts2 from '../Assets/images2/ts2.png';
// import ts3 from '../Assets/images2/ts3.png';
// import ts4 from '../Assets/images2/ts4.png';
// import ts5 from '../Assets/images2/ts5.png';
// import ts6 from '../Assets/images2/ts6.png';
// import ts7 from '../Assets/images2/ts7.png';
// import Web3 from 'web3';
// const NetworkOverlay = () => {
//     const [isOpen, setIsOpen] = useState(false);
//     const [selectedNetwork, setSelectedNetwork] = useState('');
//     const [walletNetwork, setWalletNetwork] = useState('');

//     const dropdownRef = useRef(null);
//     const networkOverlayRef = useRef(null);

//     const toggleDropdown = () => {
//         setIsOpen(!isOpen);
//     };

//     const handleNetworkSelection = async (chainId) => {
//         setSelectedNetwork(chainId);

//         // Create a Web3 instance
//         const web3 = new Web3(window.ethereum);

//         try {
//             await web3.currentProvider.request({
//                 method: 'wallet_switchEthereumChain',
//                 params: [{ chainId: chainId }],
//             });
//             console.log(`Switched wallet network to ${chainId}`);
//             setWalletNetwork(chainId);
//             window.location.reload();
//         } catch (error) {
//             console.error(error);
//         }
//     };

//     useEffect(() => {
//         function handleClickOutside(event) {
//             if (
//                 isOpen &&
//                 networkOverlayRef.current &&
//                 !networkOverlayRef.current.contains(event.target)
//             ) {
//                 setIsOpen(false);
//             }
//         }

//         document.addEventListener('mousedown', handleClickOutside);
//         return () => {
//             document.removeEventListener('mousedown', handleClickOutside);
//         };
//     }, [isOpen]);

//     const options = [
//         { key: 1, networkName: 'Ethereum', chainId: '0x1', networkIcon: './images/sprint.png' }, // Example chainId for Ethereum
//         { key: 2, networkName: 'Arbitrum', chainId: '0xa4b1', networkIcon: ts2 },
//         { key: 3, networkName: 'Optimism', chainId: '0xa', networkIcon: ts3 },
//         { key: 4, networkName: 'Polygon', chainId: '0x13881', networkIcon: ts4 },
//         { key: 5, networkName: 'BNB Chain', chainId: '0x61', networkIcon: ts5 },
//         { key: 6, networkName: 'Avalanche', chainId: '0xa869', networkIcon: ts6 },
//         { key: 7, networkName: 'Celo', chainId: '0xa4ec', networkIcon: ts7 },
//         { key: 8, networkName: 'Base', chainId: '0x2105', networkIcon: 'https://www.baseprotocol.org/files/5f51b71bb4b4537bf94b57fc/5f51b71bb4b453b3364b584f_asset 3_2x.png' }
//     ];

//     return (
//         <>
//             <button
//                 id="selectedOptionBtn"
//                 ref={networkOverlayRef}
//                 type="button"
//                 className="btnGroupDrop1"
//                 onClick={toggleDropdown}
//             >

//                 <img src="./images/sprint.png" className="ms-2 networks-icon" alt="" />

//                 <img
//                     src="/images/dropdown.png"
//                     className={`icons ${isOpen ? 'rotated' : ''}`}
//                     alt=""
//                 />
//                 {isOpen && (
//                     <div className="network-overlay" ref={dropdownRef}>
//                         {options.map(option => (
//                             <div key={option.key} className="network-overlay-inner" onClick={() => handleNetworkSelection(option.chainId)}>
//                                 <div className="networks-parent">
//                                     <img className="networks-icon" alt="" src={option.networkIcon} />
//                                     <div className="ethereum">{option.networkName}</div>
//                                 </div>
//                             </div>
//                         ))}
//                     </div>
//                 )}
//             </button>
//         </>
//     );
// };

// export default NetworkOverlay;
import React, { useRef, useEffect } from 'react';
import tennisicon from '../Assets/images2/teenyicons_tick-solid.png';
 import ts2 from '../Assets/images2/ts2.png';
 import ts3 from '../Assets/images2/ts3.png';
 import ts4 from '../Assets/images2/ts4.png';
 import ts5 from '../Assets/images2/ts5.png';
 import ts6 from '../Assets/images2/ts6.png';
 import ts7 from '../Assets/images2/ts7.png';
 const Option = ({ networkName, networkIcon, networkId, isSelected, onSelect }) => {
    return (
        <div className="network-overlay-inner" onClick={() => onSelect({ name: networkName, icon: networkIcon, networkId: networkId, })}>
            <div className="networks-parent">
                <img className="networks-icon" alt="" src={networkIcon} />
                <div className={isSelected ? "ethereum selected" : "ethereum"}>{networkName}</div>
            </div>
            {isSelected && (
                <img className="teenyiconstick-solid" alt="" src={tennisicon} />
            )}
        </div>
    );
};


const NetworkOverlay = ({ selectedNetwork, onSelectNetwork }) => {
  
    const [isOpen, setIsOpen] = React.useState(false);
    const dropdownRef = useRef(null);
    const networkOverlayRef = useRef(null);

    const toggleDropdown = () => {
        setIsOpen(!isOpen);
    };

    useEffect(() => {
        function handleClickOutside(event) {
            if (
                isOpen &&
                networkOverlayRef.current &&
                !networkOverlayRef.current.contains(event.target)
            ) {
                setIsOpen(false);
            }
        }

        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [isOpen]);

    const imageStyles = {
                height: '23px',
                width: '23px',
            };

    const options = [
        { key: 1, networkName: 'Ethereum', networkIcon: './images/sprint.png',networkId:"13113" },
        { key: 2, networkName: 'Arbitrum', networkIcon: ts2,networkId:"23113" },
        { key: 3, networkName: 'Optimism', networkIcon: ts3,networkId:"43113" },
        { key: 4, networkName: 'Polygon', networkIcon: ts4 ,networkId:"40001"},
        { key: 5, networkName: 'BNB Chain', networkIcon: ts5 ,networkId:"53113"},
        { key: 6, networkName: 'Avalanche', networkIcon: ts6,networkId:"63113" },
        { key: 7, networkName: 'Celo', networkIcon: ts7,networkId:"73113" },
        { key: 8, networkName: 'Base', networkIcon: 'https://www.baseprotocol.org/files/5f51b71bb4b4537bf94b57fc/5f51b71bb4b453b3364b584f_asset 3_2x.png',networkId:"83113" }
    ].map(option => ({
        ...option,
        propName: option.networkName === selectedNetwork?.name
    }));

    return (
        <>
            <button
                id="selectedOptionBtn"
                ref={networkOverlayRef}
                type="button"
                className="btnGroupDrop1"
                onClick={toggleDropdown}
            >
                {selectedNetwork?.icon && (
                    <img src={selectedNetwork?.icon} className="ms-2 networks-icon" alt="" style={imageStyles} />
                )}
                <img
                    src="/images/dropdown.png"
                    className={`icons ${isOpen ? 'rotated' : ''}`}
                    alt=""
                    style={imageStyles}
                />
                {isOpen && (
                    <div className="network-overlay" ref={dropdownRef}>
                        {options.map((option, index) => (
                            <Option
                                key={index}
                                networkName={option.networkName}
                                networkIcon={option.networkIcon}
                                networkId={option.networkId}
                                isSelected={option.propName}
                                onSelect={onSelectNetwork}
                            />
                        ))}
                    </div>
                )}
            </button>
        </>
    );
};

export default NetworkOverlay;

