// import React, { useEffect, useState } from 'react';
// import cross from '../Assets/images2/radix-icons_cross-2.svg';
// import tokensData from './ChainAddresses.json';

// import { useContext } from 'react';
// import Context from '../Context/Context';
// import NetworkOverlay from './NetworkOverlay';
// import { getCurrentChainId } from '../ContractAction/NA/EVCFarmingContractAction'

// const chainAddresses = require('./ChainAddresses.json');


// const SelectToken = ({ onSelectToken, }) => {

//     const [searchQuery, setSearchQuery] = useState('');
//     const [selected, setSelected] = useState({});
//     const { selectedNetwork, setSelectedNetwork, tokennetwork } = useContext(Context);
//     const [currentChainId,setCurrentChainId] = useState(null)

//     useEffect(()=>{
//         const myChain =async ()=>{
//             const currentChain = await getCurrentChainId();
//             setCurrentChainId(currentChain)
//         }
//         myChain()
//     },[selected])
//     console.log('selected',selected)
//      console.log('chainAddresses',chainAddresses ,typeof chainAddresses);
//      const chainIndex=tokennetwork.length;
//      for(let i=0;i<chainIndex;i++){
//         console.log('i',i)
//      }
//      const networkid=tokennetwork;

//      console.log('chainIndex',chainIndex)
//     console.log("currentChainId1",currentChainId)
//     const tokens43113 = tokensData[0]['83113']


//     const filteredTokens = tokens43113?tokens43113.tokens.filter(
//         (token) =>
//             token.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
//             token.ticker.toLowerCase().includes(searchQuery.toLowerCase())
//     ):[];
//     console.log(tokennetwork, 'NNNN')

//     const handleSelectNetwork = (network) => {
//         setSelectedNetwork(network);
//         console.log('PPPSSPSP')
//     };


//     const handleTokenSelect = (token) => {
//         setSelected(onSelectToken(token.img, token.ticker));
//         alert(token.ticker);
//     };

//     const handlePopularTokenSelect = (index) => {
//         const popularToken = popularTokens[index];
//         setSelected(onSelectToken(popularToken.imgSrc, popularToken.name));
//         alert(popularToken.name);
//     };

//     const popularTokens = [
//         { imgSrc: './images/sprint.png', name: 'ETH' },
//         { imgSrc: 'https://raw.githubusercontent.com/Uniswap/assets/master/blockchains/ethereum/assets/0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2/logo.png', name: 'WETH' },
//         { imgSrc: 'https://raw.githubusercontent.com/Uniswap/assets/master/blockchains/ethereum/assets/0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48/logo.png', name: 'USDC' },
//         { imgSrc: 'https://raw.githubusercontent.com/Uniswap/assets/master/blockchains/ethereum/assets/0x6B175474E89094C44Da98b954EedeAC495271d0F/logo.png', name: 'DAI' },
//         { imgSrc: 'https://raw.githubusercontent.com/Uniswap/assets/master/blockchains/ethereum/assets/0xdAC17F958D2ee523a2206206994597C13D831ec7/logo.png', name: 'USDT' },
//         { imgSrc: 'https://raw.githubusercontent.com/Uniswap/assets/master/blockchains/ethereum/assets/0x2260FAC5E5542a773Aa44fBCfeDf7C193bc2C599/logo.png', name: 'WBTC' }
//     ];

//     return (
//         <>
//             <div className='gnwYND bFCsHr'>
//                 <div className='hfXcaM kMkmMS'>
//                     <div className='cPCYrp'>
//                         <div style={{ fontSize: '20px', color: '#b1b1b1' }}>Select a token</div>
//                         <img src={cross} style={{ height: '24px', width: '24px' }} alt='' />
//                     </div>
//                     <div className='kdYshZ dKubqp'>
//                         <div className=' hTynGq' style={{ width: '72%', display: 'flex', justifyContent: 'space-between' }}>
//                             <img
//                                 src='/images/search.png'
//                                 className='ms-3'
//                                 style={{ height: '20px', width: '20px' }}
//                                 alt=''
//                             />
//                             <input
//                                 type='text'
//                                 id='token-search-input'
//                                 className='w-100 hTynGqr'
//                                 placeholder='Search name or paste address'
//                                 onChange={(e) => setSearchQuery(e.target.value)}
//                             />
//                         </div>
//                         <NetworkOverlay selectedNetwork={selectedNetwork} id="network-overlay1" onSelectNetwork={handleSelectNetwork} />
//                     </div>
//                     <div style={{ display: 'flex', flexWrap: 'wrap', gap: '15px 20px' }}>
//                         {popularTokens.map((token, index) => (
//                             <div key={index} className='fxVDAj kdYshZ dKubqp' onClick={() => handlePopularTokenSelect(index)}>
//                                 <div className='crYogb'>
//                                     <img src={token.imgSrc} style={{ borderRadius: "50%", height: "23px", width: "23px" }} alt="" />
//                                     <span>{token.name} </span>
//                                 </div>
//                             </div>
//                         ))}
//                     </div>
//                 </div>
//                 <div className='hfXcaM kMkmMS scrollbar '>
//                     <div className='text-light'>
//                         {searchQuery ? 'Searched tokens' : 'Popular tokens'}
//                     </div>
//                     {filteredTokens.length === 0 && (
//                         <div className='text-light'>No tokens found</div>
//                     )}
//                     {filteredTokens.map((token, index) => (
//                         <div className="cPCYrp dKubqp bIFEzi cFvOnL alertdiv" key={index} onClick={() => handleTokenSelect(token)}>
//                             <div className="bFCsHr"><img src={token.img} style={{ height: '24px', width: '24px', borderRadius: '50%' }} alt='' /></div>
//                             <div className="eENUcJ" >
//                                 <div className="dKubqp dKubqptext cPCYrp" >{token.name}</div>
//                                 <div className="css-1m0dqmt  jgbRhf" value={selected}>{token.ticker}</div>
//                             </div>
//                         </div>
//                     ))}
//                 </div>

//             </div>
//         </>
//     );
// };

// export default SelectToken;
import React, { useEffect, useState, useContext } from 'react';
import cross from '../Assets/images2/radix-icons_cross-2.svg';
import tokensData from './ChainAddresses.json';
import Context from '../Context/Context';
import NetworkOverlay from './NetworkOverlay';
import { getCurrentChainId } from '../ContractAction/NA/EVCFarmingContractAction';


const SelectToken = ({ onSelectToken }) => {
    const [searchQuery, setSearchQuery] = useState('');
    const { selectedNetwork, setSelectedNetwork, tokennetwork ,selected, setSelected, setSelectedTokenAddress} = useContext(Context);
    const [currentChainId, setCurrentChainId] = useState(null);
    const [tokens, setTokens] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            const currentChain = await getCurrentChainId();
            setCurrentChainId(currentChain);
            const tokens = tokensData.find(data => data[tokennetwork]);
            if (tokens) {
                setTokens(tokens[tokennetwork].tokens);
            }
        };

        fetchData();
    }, [tokennetwork]);

    const handleSelectNetwork = (network) => {
        setSelectedNetwork(network);
    };
    const filteredTokens = tokens.filter(
                 (token) =>
                     token.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                     token.ticker.toLowerCase().includes(searchQuery.toLowerCase())
             );
    const handleTokenSelect = (token) => {
        const selectedToken = {
            img: token.img,
            ticker: token.ticker,
            address: token.address
        };
       
        setSelected(selectedToken);
        onSelectToken(selectedToken.img, selectedToken.ticker, selectedToken.address); 
        setSelectedTokenAddress(token.address);
        alert(selectedToken.ticker);
        console.log(selectedToken, 'selectedToken');
    };
    

    const handlePopularTokenSelect = (index) => {
        const popularToken = popularTokens[index];
        const alreadySelected = filteredTokens.some(token => token.name === popularToken.name);
        if (!alreadySelected) {
            setSelected(onSelectToken(popularToken.imgSrc, popularToken.name));
            alert(popularToken.name);
        } else {
            console.log("Token already selected from the first section.");
        }
    };
    


    const popularTokens = [
                { imgSrc: './images/sprint.png', name: 'ETH' },
                { imgSrc: 'https://raw.githubusercontent.com/Uniswap/assets/master/blockchains/ethereum/assets/0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2/logo.png', name: 'WETH' },
                { imgSrc: 'https://raw.githubusercontent.com/Uniswap/assets/master/blockchains/ethereum/assets/0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48/logo.png', name: 'USDC' },
                { imgSrc: 'https://raw.githubusercontent.com/Uniswap/assets/master/blockchains/ethereum/assets/0x6B175474E89094C44Da98b954EedeAC495271d0F/logo.png', name: 'DAI' },
                { imgSrc: 'https://raw.githubusercontent.com/Uniswap/assets/master/blockchains/ethereum/assets/0xdAC17F958D2ee523a2206206994597C13D831ec7/logo.png', name: 'USDT' },
                { imgSrc: 'https://raw.githubusercontent.com/Uniswap/assets/master/blockchains/ethereum/assets/0x2260FAC5E5542a773Aa44fBCfeDf7C193bc2C599/logo.png', name: 'WBTC' }
            ];

    return (
        <>
            <div className='gnwYND bFCsHr'>
                <div className='hfXcaM kMkmMS'>
                    <div className='cPCYrp'>
                        <div style={{ fontSize: '20px', color: '#b1b1b1' }}>Select a token</div>
                        <img src={cross} style={{ height: '24px', width: '24px' }} alt='' />
                    </div>
                    <div className='kdYshZ dKubqp'>
                        <div className=' hTynGq' style={{ width: '72%', display: 'flex', justifyContent: 'space-between' }}>
                            <img
                                src='/images/search.png'
                                className='ms-3'
                                style={{ height: '20px', width: '20px' }}
                                alt=''
                            />
                            <input
                                type='text'
                                id='token-search-input'
                                className='w-100 hTynGqr'
                                placeholder='Search name or paste address'
                                onChange={(e) => setSearchQuery(e.target.value)}
                            />
                        </div>
                        <NetworkOverlay selectedNetwork={selectedNetwork} id="network-overlay1" onSelectNetwork={handleSelectNetwork} />
                    </div>
                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '15px 20px' }}>
                        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '15px 20px' }}>
                         {popularTokens.map((token, index) => (
                             <div key={index} className='fxVDAj kdYshZ dKubqp' onClick={() => handlePopularTokenSelect(index)}>
                                 <div className='crYogb'>
                                     <img src={token.imgSrc} style={{ borderRadius: "50%", height: "23px", width: "23px" }} alt="" />
                                     <span>{token.name} </span>
                                 </div>
                             </div>
                         ))}
                     </div>
                    </div>
                </div>
                <div className='hfXcaM kMkmMS scrollbar '>
                    <div className='text-light'>
                        {searchQuery ? 'Searched tokens' : 'Popular tokens'}
                    </div>
                    {filteredTokens.length === 0 && (
                        <div className='text-light'>No tokens found</div>
                    )}
                    {filteredTokens.map((token, index) => (
                        <div className="cPCYrp dKubqp bIFEzi cFvOnL alertdiv" key={index} onClick={() => handleTokenSelect(token)}>
                            <div className="bFCsHr"><img src={token.img} style={{ height: '24px', width: '24px', borderRadius: '50%' }} alt='' /></div>
                            <div className="eENUcJ" >
                                <div className="dKubqp dKubqptext cPCYrp" >{token.name}</div>
                                <div className="css-1m0dqmt  jgbRhf" value={selected}>{token.ticker}</div>
                            </div>
                        </div>
                    ))}
                </div>
            
            </div>
        </>
    );
};

export default SelectToken;
