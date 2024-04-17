
import React, { useState, useEffect, useContext } from 'react';
import MyNavbar from '../Component/MyNavbar';
import SwapPage from '../Dropdown/SwapPage';
import { useLocation } from 'react-router-dom';
import Context from '../Context/Context';

const DisclaimerModal = ({ onClose }) => {
  const [isChecked1, setIsChecked1] = useState(false);
  const [isChecked2, setIsChecked2] = useState(false);




  const handleCheck1 = () => {
    setIsChecked1(!isChecked1);
  };

  const handleCheck2 = () => {
    setIsChecked2(!isChecked2);
  };

  const handleConfirm = () => {
    if (isChecked1 && isChecked2) {
      onClose();
      localStorage.setItem('disclaimerAccepted', 'true');
    }
  };

  return (
    <div className="modal-overlay">
      <div className="modal-content1">
        <div>
          <p style={{ fontSize: '16px' }}>Disclaimer</p>
          <p style={{ fontSize: '12px' }}>Please check the boxes below to confirm your agreement to the Trendswap <span style={{ color: '#1d64fa' }}> Terms and conditions</span></p>
        </div>
        <div className='mt-4'>
          <div className="check-box-parent">
            <input type='checkbox' className='mt-1' checked={isChecked1} onChange={handleCheck1} />
            <div className="i-have-read ms-2" onClick={handleCheck1}>I have read and understood and do hereby agree to be legally bound as a ‘User’ under, the Terms, including all future amendments thereto. Such agreement is irrevocable and will apply to all of my uses of the Site without me providing confirmation in each specific instance.</div>
          </div>
          <div className="check-box-parent mt-3">
            <input type='checkbox' className='mt-1' checked={isChecked2} onChange={handleCheck2} />
            <div className="i-have-read ms-2" onClick={handleCheck2}>I have read and understood and do hereby agree to be legally bound as a ‘User’ under, the Terms, including all future amendments thereto. Such agreement is irrevocable and will apply to all of my uses of the Site without me providing confirmation in each specific instance.</div>
          </div>
        </div>
        {isChecked1 && isChecked2 && (
          <div className="connect-button mt-4 mb-2" onClick={handleConfirm} style={{ width: "100%" }}>
            <button className="connect-wallet "> <b> Confirm</b></button>
          </div>
        )}
      </div>
    </div>
  );
};

const Swap = () => {
  const [showDisclaimer, setShowDisclaimer] = useState(true);
  const { selectedNetwork, setSelectedNetwork } = useContext(Context)

  const handleSelectNetwork = (network) => {
    setSelectedNetwork(network);
  };
  useEffect(() => {
    const disclaimerAccepted = localStorage.getItem('disclaimerAccepted');
    if (disclaimerAccepted) {
      setShowDisclaimer(false);
    }
  }, []);




  const handleCloseDisclaimer = () => {
    setShowDisclaimer(false);
  };

  return (
    <>
      <MyNavbar selectedNetwork={selectedNetwork} onSelectNetwork={handleSelectNetwork} />


      <div className='jRlUBU'>
        {showDisclaimer && <DisclaimerModal onClose={handleCloseDisclaimer} />}
        <div className="swap-anytime-anywhere-container mt-3 mx-3">
          <p className="swap-anytime">Swap anytime,</p>
          <p className="swap-anytime">anywhere</p>
        </div>
        <div className='khwJOa mb-3 glassmorphism mt-3' style={{ zIndex: 5 }}>
          <SwapPage />
        </div>
      </div>
    </>
  );
};

export default Swap;
