import React, { useContext, useState } from 'react';
import { Tab, Nav } from 'react-bootstrap';
import TokenTable from '../ExploreContent/Tokentable';
import Pooltable from '../ExploreContent/Pooltable';
import Transactionstable from '../ExploreContent/Transactionstable';
import '../Assets/CSS/tokens.css';
import Volume from '../Dropdown/Volume';
import MyNavbar from './MyNavbar';
import NetworkOverlay from '../Dropdown/NetworkOverlay';
import BarChart from '../Dropdown/BarChart';
import Context from '../Context/Context';

const Explore = () => {
    const [selectedTab, setSelectedTab] = useState('pills-home');
    const [isSearchVisible, setIsSearchVisible] = useState(false);
    const {selectedNetwork, setSelectedNetwork}=useContext(Context)

    const handleSelectNetwork = (network) => {
        setSelectedNetwork(network);
      };
    const handleSearchClick = () => {
        setIsSearchVisible(!isSearchVisible);
    };

    const handleTabSelect = (key) => {
        setSelectedTab(key);
    };

    const [timeFrameClass, setTimeFrameClass] = useState({
        D: 'd-wrapper',
        W: 'w-wrapper',
        M: 'w-wrapper',
        Y: 'w-wrapper',
    });

    const handleTimeFrameClick = (timeFrame) => {
        const updatedClass = Object.fromEntries(
            Object.entries(timeFrameClass).map(([key, value]) => [key, key === timeFrame ? 'd-wrapper' : 'w-wrapper'])
        );

        setTimeFrameClass(updatedClass);
    };


    return (
        <>
               <MyNavbar selectedNetwork={selectedNetwork} onSelectNetwork={handleSelectNetwork}  />

            {/* Graph section */}
            <div className="container glassmorphism  mt-3 " style={{ borderRadius: '16px' }}>
                <div className="row px-3 " >
                    <div className="col-md-12 p-2 text-light " >
                        <div className="d-flex align-items-center justify-content-center">
                            <p className='w-100' style={{ color: '#9b9797' }}>TrendSwap Volume</p>
                            <div className="parent-frame">
                                <button className={timeFrameClass.D} onClick={() => handleTimeFrameClick('D')}>
                                    D
                                </button>
                                <button className={timeFrameClass.W} onClick={() => handleTimeFrameClick('W')}>
                                    W
                                </button>
                                <button className={timeFrameClass.M} onClick={() => handleTimeFrameClick('M')}>
                                    M
                                </button>
                                <button className={timeFrameClass.Y} onClick={() => handleTimeFrameClick('Y')}>
                                    Y
                                </button>
                            </div>
                        </div>
                        <div className="million d-flex align-items-center justify-content-between">
                            <div >
                                <h2>$110.42B</h2>
                                <p style={{ color: '#9b9797' }}>Past Month</p>
                            </div>
                        </div>
                        <div className='mt-2'>  
                            <BarChart/>
                            {/* <img src="/images/updatedgrap.png" alt="" className="img-fluid" /> */}
                        </div>
                    </div>
                </div>
            </div>
            <div className="container">
                <Tab.Container id="pills-tab" defaultActiveKey={selectedTab} onSelect={handleTabSelect} >
                    <div className="table-tab mt-4" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                        <Nav variant="pills" style={{ backgroundColor: 'transparent' }}>
                            <Nav.Item >
                                <Nav.Link eventKey="pills-home" className={selectedTab === 'pills-home' ? 'customtab' : 'navlinks'}>Tokens</Nav.Link>
                            </Nav.Item>
                            <Nav.Item >
                                <Nav.Link eventKey="pills-profile" className={selectedTab === 'pills-profile' ? 'customtab' : 'navlinks'} >Pools</Nav.Link>
                            </Nav.Item>
                            <Nav.Item >
                                <Nav.Link eventKey="pills-contact" className={selectedTab === 'pills-contact' ? 'customtab' : 'navlinks'}>Transactions</Nav.Link>
                            </Nav.Item>
                        </Nav>
                        <Tab.Content className=''>
                            <Tab.Pane eventKey="pills-home">
                                <div className="tpt-buttons d-flex align-items-center justify-content-center">
                                <NetworkOverlay selectedNetwork={selectedNetwork} onSelectNetwork={handleSelectNetwork} />

                                      <Volume/>
                                    <div className='hrxVYA '>
                                        <div className='d-flex align-item-center' style={{ padding: '8px' }} ><img src="/images/search.png" height="20px" width="20px" alt="" onClick={handleSearchClick} /></div>
                                        {isSearchVisible && <input type='search' className=' px-2' autoFocus style={{ color: 'white', background: 'transparent', outline: 'none', border: 'transparent' }} placeholder='Search here' />}
                                    </div>
                                </div>
                            </Tab.Pane>
                            <Tab.Pane eventKey="pills-profile">
                                <div className="tpt-buttons d-flex align-items-center justify-content-center" style={{gap:'0px 4px'}}>
                                <NetworkOverlay selectedNetwork={selectedNetwork} onSelectNetwork={handleSelectNetwork} />

                                    <div className='hrxVYA '>
                                        <div className='d-flex align-item-center' style={{ padding: '8px' }} ><img src="/images/search.png" height="20px" width="20px" alt="" onClick={handleSearchClick} /></div>
                                        {isSearchVisible && <input type='search' className=' px-2' autoFocus style={{ color: 'white', background: 'transparent', outline: 'none', border: 'transparent' }} placeholder='Search here' />}
                                    </div>
                                </div>
                            </Tab.Pane>
                            <Tab.Pane eventKey="pills-contact">
                                <div className="tpt-buttons d-flex align-items-center justify-content-center">
                                <NetworkOverlay selectedNetwork={selectedNetwork} onSelectNetwork={handleSelectNetwork} />

                                </div>
                            </Tab.Pane>
                        </Tab.Content>
                    </div>
                </Tab.Container>
            </div>
            {selectedTab === 'pills-home' && <TokenTable />}
            {selectedTab === 'pills-profile' && <Pooltable />}
            {selectedTab === 'pills-contact' && <Transactionstable />}
        </>
    );
};

export default Explore;