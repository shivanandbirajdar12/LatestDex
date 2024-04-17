// import React, { useState } from 'react';
// import '../Assets/CSS/analyticstotal.css';
// import Total from '../Analytics/Total';
// import LiquidityHub from '../LiquidtyContent/LiquidityHub';
// import MyNavbar from './MyNavbar';

// const Analytics = () => {

//   const [activeTab, setActiveTab] = useState('total');

//   const handleTabClick = (tab) => {
//     setActiveTab(tab);
//   };

//   return (
//     <>
//       <MyNavbar></MyNavbar>
//       <div className="trendswap-analytics-parent container mt-3">
//         <b className="trendswap-analytics tswap">Trendswap Analytics</b>
//         <div className="parent-frame" style={{ border: '1px solid white', height: '100%', borderRadius:'8px' }}>
//           <div className='liquidity-hub-wrapper ' onClick={() => handleTabClick('liquidityHub')}>
//             <div className={`trendswap-analytics ${activeTab === 'liquidityHub' ? 'active1' : ''}`}>Liquidity Hub</div>
//           </div>
//           <div className='total-wrapper' onClick={() => handleTabClick('total')}>
//             <div className={`trendswap-analytics ${activeTab === 'total' ? 'active1' : ''}`}>Total</div>
//           </div>
//         </div>
//       </div>

//       {activeTab === 'total' && <Total />}
//       {activeTab === 'liquidityHub' && <LiquidityHub />}
//     </>
//   );
// };

// export default Analytics;

import React, { useContext, useState } from 'react';
import '../Assets/CSS/analyticstotal.css';
import Total from '../Analytics/Total';
import LiquidityHub from '../LiquidtyContent/LiquidityHub';
import MyNavbar from './MyNavbar';
import Context from '../Context/Context';

const Analytics = () => {

  const [activeTab, setActiveTab] = useState('total');
  const { selectedNetwork, setSelectedNetwork } = useContext(Context)

  const handleSelectNetwork = (network) => {
    setSelectedNetwork(network);
  };
  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  return (
    <>
      <MyNavbar selectedNetwork={selectedNetwork} onSelectNetwork={handleSelectNetwork} />
      <div className="trendswap-analytics-parent container mt-3">
        <b className="trendswap-analytics tswap">Trendswap Analytics</b>
        <div className="parent-frame" style={{ border: '1px solid white', height: '100%', borderRadius: '8px' }}>
          <div className={`total-wrapper-total ${activeTab === 'liquidityHub' ? 'total-wrapper' : ''}`} onClick={() => handleTabClick('liquidityHub')}>
            <div className={`trendswap-analytics ${activeTab === 'liquidityHub' ? 'active1' : ''}`}>Liquidity Hub</div>
          </div>
          <div className={`total-wrapper-total ${activeTab === 'total' ? 'total-wrapper' : ''}`} onClick={() => handleTabClick('total')}>
            <div className={`trendswap-analytics ${activeTab === 'total' ? 'active1' : ''}`}>Total</div>
          </div>
        </div>
      </div>

      {activeTab === 'total' && <Total />}
      {activeTab === 'liquidityHub' && <LiquidityHub />}
    </>
  );
};

export default Analytics;
