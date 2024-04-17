import React from 'react';
import '../Assets/CSS/swap.css';
import Setting from '../Dropdown/Setting';

const Swap = () => {
    const [isOpen4, setIsOpen4] = React.useState(false);
    const toggleDropdown4 = () => {
        setIsOpen4(!isOpen4);
    };
    return (
        <div className="container d-flex justify-content-center align-items-center ">
            <div className="col-lg-6 col-md-8 col-sm-10 p-5 glassmorphism mt-5 d-flex justify-content-center align-items-center flex-column">

                {/* You Pay */}
                <div className='d-flex justify-content-center align-items-center flex-column'>
                    <div className="swapoption d-flex justify-content-between align-items-center">
                        <button className="swaptext">Swap</button>
                        <img src="/images/settings.png" style={{height:'20px' , width:'20px'}} onClick={toggleDropdown4} alt="" />
                        {isOpen4 && <Setting />}
                    </div>
                    <div className="pqrs d-grid mt-1 mx-auto">
                        <p className="ms-3 text-light">You Pay</p>
                        <div className="currency d-flex justify-content-between px-3">
                            <input type="text" name="" id="" placeholder="0" />
                            <button id="btnGroupDrop1" type="button" className="we px-3">
                                <img src="/images/sprint.png" height="23px" width="23px" alt="" /><span
                                    className="text-light ms-2">ETH</span>
                                <img src="/images/dropdown.png" height="23px" width="23px" alt="" />
                            </button>
                        </div>
                        <p className="ms-3 text-light mb-0 mt-0">$</p>
                    </div>

                    {/* arrow container */}
                    <div className="arrow-container text-center">
                        <button className="px-1 py-1 swap"><img src="/images/swap.png" className="p-1" height="22px" width="22px"
                            alt="" /></button>
                    </div>

                    {/* You receive */}
                    <div className="pqrs d-grid col-lg-4 col-md-6 col-sm-8 mx-auto" id="swapbottom">
                        <p className="ms-3 text-light">You receive</p>
                        <div className="currency d-flex justify-content-between px-3 ">
                            <input type="text" name="" id="" placeholder="0" />
                            <div className="btn-group" role="group">
                                <button className="btn btn-sm btnr px-5" type="button">select token</button>
                            </div>
                        </div>
                        <p className="ms-3 text-light mb-0 mt-0">$</p>
                    </div>

                    {/* Connect Wallet */}
                    <div className="d-grid mt-2 col-12 mx-auto">
                        <button className="connectWallet" type="button">Connect Wallet</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Swap;
