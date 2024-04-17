
import React, { useState, useRef, useEffect } from 'react';
import Setting from "./Setting";
import OffcanvasComponent from './OffcanvasComponent';
import SwapComponent from './SwapComponent';


const SwapPage = () => {
    const [isOpen3, setIsOpen3] = useState(false);
    const [showOffcanvas, setShowOffcanvas] = useState(false);
    const settingsRef = useRef(null);

    const toggleDropdown3 = () => {
        setIsOpen3(!isOpen3);
    };

    const handleConnectWallet = () => {
        setShowOffcanvas(true);
    };

    const handleCloseOffcanvas = () => {
        setShowOffcanvas(false);
    };

    useEffect(() => {
        function handleClickOutside(event) {
            if (settingsRef.current && !settingsRef.current.contains(event.target)) {
                setIsOpen3(false);
            }
        }

        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [settingsRef]);

    return (
        <div>
        
            <div className='px-4' style={{display:'flex',justifyContent:'space-between' , alignItems:'center'}}>
                <span className='text-light fs-5'>Swap</span>
                <img src="/images/settings.png" style={{ height: '20px', width: '20px' }}  onClick={toggleDropdown3} alt="" ref={settingsRef} />
                {isOpen3 && <Setting />}
            </div>
            <div id='swap-page' className='mt-3'>
                <div className='enpFfZ p-3 py-0'>
                    <SwapComponent/>
                </div>
            </div>
        </div>
    );
};

export default SwapPage;
