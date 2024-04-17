// import React, { useEffect, useState } from 'react'
// import Explore from './Explore';
// import Swap from './Swap';
// import Pool from './Pool';
// import Analytics from './Analytics';
// import Context from '../Context/Context';

// export default function Dropdownstate({children}) {
     
//     const [selectedNetwork, setSelectedNetwork] = useState({ name: 'Ethereum', icon: './images/sprint.png',networkId:'13113' });
//     const [tokennetwork,settokennetwork]=useState(0);
//     const [selected, setSelected] = useState({});
//     const [selectedTokenAddress, setSelectedTokenAddress] = useState(null);
       
//        useEffect(()=>{
//         settokennetwork(selectedNetwork.networkId)
//        },[selectedNetwork]);
//        console.log(tokennetwork,'token')
//   return (
//     <Context.Provider  value={{selectedNetwork,setSelectedNetwork,tokennetwork,selected, setSelected,selectedTokenAddress, setSelectedTokenAddress}}>
//          {children}
//     </Context.Provider>
//   )
// }
import React, { useEffect, useState } from 'react';
import Context from '../Context/Context';
import AddLiquidty from '../PoolContent/AddLiquidty';

export default function Dropdownstate({ children }) {
   
    const lastSelectedNetwork = JSON.parse(localStorage.getItem('lastSelectedNetwork')) || { name: 'Ethereum', icon: './images/sprint.png', networkId: '13113' };
    const [selectedNetwork, setSelectedNetwork] = useState(lastSelectedNetwork);
    const [tokennetwork, setTokenNetwork] = useState(0);
    const [selected, setSelected] = useState({});
    const [selectedTokenAddress, setSelectedTokenAddress] = useState(null);
    useEffect(() => {
        setTokenNetwork(selectedNetwork.networkId);
        localStorage.setItem('lastSelectedNetwork', JSON.stringify(selectedNetwork));
    }, [selectedNetwork]);

    console.log(tokennetwork, 'token');

    return (
        <Context.Provider value={{ selectedNetwork, setSelectedNetwork, tokennetwork, selected, setSelected, selectedTokenAddress, setSelectedTokenAddress }}>
            {children}
        </Context.Provider>
    );
}

// const [selectedTokenAddress, setSelectedTokenAddress] = useState(null);
// selectedTokenAddress, setSelectedTokenAddress

// Selecttoken
// setSelectedTokenAddress
// const handleTokenSelect = (token) => {
//     const selectedToken = {
//         img: token.img,
//         ticker: token.ticker,
//         address: token.address
//     };
//     setSelectedTokenAddress(token.address);
//     setSelected(selectedToken);
//     onSelectToken(selectedToken.img, selectedToken.ticker, selectedToken.address); 
//     console.log('address', selectedToken.address);
//     alert(selectedToken.ticker);
//     console.log(selectedToken, 'selectedToken');
// };

// AddLiquidty
// selectedTokenAddress
