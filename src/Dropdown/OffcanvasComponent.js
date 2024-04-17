
import React, {useState, useEffect, useRef } from 'react';
import Offcanvas from 'react-bootstrap/Offcanvas';
import Setting from './Setting'
const OffcanvasComponent = ({ show, onHide }) => {
    const [isOpen3, setIsOpen3] = useState(false);
    const toggleDropdown3 = () => {
        setIsOpen3(!isOpen3);
      };
    const offcanvasRef = useRef(null);

    useEffect(() => {
        const handleOutsideClick = (event) => {
            if (offcanvasRef.current && !offcanvasRef.current.contains(event.target)) {
                onHide(); 
            }
        };

        if (show) {
            document.addEventListener('mousedown', handleOutsideClick);
        }

        return () => {
            document.removeEventListener('mousedown', handleOutsideClick);
        };
    }, [show, onHide]);

    return (
        <Offcanvas show={show} onHide={onHide} placement="end">
            <Offcanvas.Body ref={offcanvasRef}>
                <div className="d-flex align-items-center justify-content-between">
                    <h5 className="offcanvas-title text-light" id="offcanvasExampleLabel">Connect a wallet</h5>
                    <button type="button" onClick={toggleDropdown3} className="offcanvas-button"><img src="/images/settings.png" className="canvas-setting" alt="" /></button>
                    {isOpen3 && <Setting/>}
                </div>
                <div className="connect-option mt-3 text-light text-center">
                    <div className="option-tab d-flex px-3 align-items-center justify-content-start ">
                        <img src="/images/offcanvasoption2.png" height="40px" width="40px" alt="" />
                        <p className="align-baseline fs-3 p-2" >MetaMask</p>
                    </div>
                    <div className="option-tab d-flex px-3 align-items-center justify-content-start ">
                        <img src="/images/offcanvasoption2.png" height="40px" width="40px" alt="" />
                        <p className="align-baseline fs-3 p-2">MetaMask</p>
                    </div>
                    <div className="option-tab d-flex px-3 align-items-center justify-content-start ">
                        <img src="/images/offcanvasoption3.png" height="40px" width="40px" alt="" />
                        <p className="align-baseline fs-3 p-2">MetaMask</p>
                    </div>
                    <div className="option-tab d-flex px-3 align-items-center justify-content-start ">
                        <img src="/images/offcanvasoption4.png" height="40px" width="40px" alt="" />
                        <p className="align-baseline fs-3 p-2">MetaMask</p>
                    </div>
                </div>
                <p className="text-light mt-5">
                    By connecting a wallet you agree to Trendswap Terms of Service and consent to its Privacy Policy
                </p>
            </Offcanvas.Body>
        </Offcanvas>
    );
};

export default OffcanvasComponent;
