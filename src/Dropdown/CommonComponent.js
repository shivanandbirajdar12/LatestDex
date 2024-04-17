import React, { useState } from 'react';
import Explore from '../Component/Explore';
import MyNavbar from '../Component/MyNavbar';

const CommonComponent = () => {
    const [selectedNetwork, setSelectedNetwork] = useState({ name: 'Ethereum', icon: './images/sprint.png' });

    const handleSelectNetwork = (network) => {
        setSelectedNetwork(network);
    };

    return (
        <>
            <Explore selectedNetwork={selectedNetwork}
                onSelect={handleSelectNetwork}/>
            <MyNavbar  selectedNetwork={selectedNetwork}
                onSelect={handleSelectNetwork}
            ></MyNavbar>

        </>
    );
};

export default CommonComponent;
