import React, { useState } from 'react';
import '../Assets/CSS/analytics_total_token.css';
import TotalPair from './Total_Pair';
import TokenTable from '../ExploreContent/Tokentable';
import forwardarrow from '../Assets/images2/iconamoon_arrow-up-2-thin (3).png'
import group from '../Assets/images2/Group.png'
import group1 from '../Assets/images2/Group (1).png'
import OverviewTable from './OverviewTable1';

const TotalTokens = () => {
  const [activeTab, setActiveTab] = useState('allCryptos');

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };
  const getTabStyle = (tabName) => {
    return {
      color: activeTab === tabName ? '#1d64fa' : '#9b9797'
    };
  };

  return (
    <>
       <div className='hide-below-768'>
      <div className='container tokens  mt-4 d-flex justify-content-evenly  glassmorphism  flex-column   ' style={{ height: '120px', borderRadius: '15px', gap: '20px 0', }}>
        <p className="m-0 ms-3" style={{ color: 'rgba(155, 151, 151, 1)', fontWeight: '800' }}>24h MOST VOLUME</p>
        <div className='row mb-4 ms-1  '>
          <div className=" col cryptocurrency-colorusdc-parent">
            <img className="cryptocurrency-colorusdc-icon group-icon" alt="" src={group} />
            <div className="usdce-parent">
              <b className="usdce">USDC.e</b>
              <div className="parent">
                <b className="usdce">$1</b>
                <div className="wrapper">
                  <b className="usdce">+0.962%</b>
                </div>
              </div>
            </div>
          </div>
          <div className=" col cryptocurrency-colorusdc-parent">
            <img className="cryptocurrency-colorusdc-icon group-icon" alt="" src={group1} />
            <div className="usdce-parent">
              <b className="usdce">USDC.e</b>
              <div className="parent">
                <b className="usdce">$1</b>
                <div className="wrapper">
                  <b className="usdce">+0.962%</b>
                </div>
              </div>
            </div>
          </div>
          <div className=" col cryptocurrency-colorusdc-parent">
            <img className="cryptocurrency-colorusdc-icon" alt="" src={group1} />
            <div className="usdce-parent">
              <b className="usdce">USDC.e</b>
              <div className="parent">
                <b className="usdce">$1</b>
                <div className="wrapper">
                  <b className="usdce">+0.962%</b>
                </div>
              </div>
            </div>
          </div>
          <div className=" col cryptocurrency-colorusdc-parent">
            <img className="cryptocurrency-colorusdc-icon" alt="" src={group1} />
            <div className="usdce-parent">
              <b className="usdce">USDC.e</b>
              <div className="parent">
                <b className="usdce">$1</b>
                <div className="wrapper">
                  <b className="usdce">+0.962%</b>
                </div>
              </div>
            </div>
          </div>
          <div className=" col cryptocurrency-colorusdc-parent">
            <img className="cryptocurrency-colorusdc-icon" alt="" src={group1} />
            <div className="usdce-parent">
              <b className="usdce">USDC.e</b>
              <div className="parent">
                <b className="usdce">$1</b>
                <div className="wrapper">
                  <b className="usdce">+0.962%</b>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
      </div>
      <div className='container d-flex align-items-center  justify-content-between mt-5'>
        <div className='d-flex px-0' style={{ gap: '0px 20px' }}>
          <p
            className={`m-0 top-tokens fw-bold ${activeTab === 'allCryptos' ? 'active1' : ''}`}
            style={{ getTabStyle }}
            onClick={() => handleTabClick('allCryptos')}
          >
            All Cryptos
          </p>
          <p
            className={`m-0 top-tokens fw-bold ${activeTab === 'favorites' ? 'active1' : ''}`}
            style={{ getTabStyle }}
            onClick={() => handleTabClick('favorites')}
          >
            Favorites
          </p>
          <p
            className={`m-0 top-tokens fw-bold ${activeTab === 'newListings' ? 'active1' : ''}`}
            style={{ getTabStyle }}
            onClick={() => handleTabClick('newListings')}
          >
            New Listings
          </p>
        </div>
        <p className='m-0 see-all'>
          See All
          <span className='pagination-icon'><img src={forwardarrow} style={{ height: '16px', width: '16px' }} className='ms-2' alt='Pagination' /></span>
        </p>
      </div>

      {/* Conditionally render content based on the active tab */}
      {activeTab === 'allCryptos' && <OverviewTable />}
      {activeTab === 'favorites' && <TotalPair />}
      {activeTab === 'newListings' && <TokenTable />}
    </>
  );
};

export default TotalTokens;

