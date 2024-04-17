
import React, { useState, useEffect } from 'react';
import swapbutton from '../Assets/images2/swapbutton1.png';
import PlusComponent from './PlusComponent';
import { Modal } from 'react-bootstrap';
import SelectToken from './SelectToken';
import { getCurrentChainId, getTokenBalance, getCurrentChainIdTokenAddress, getAllowanceTokentoRouter, getValueOutTokenAtoTokenB, setSwapTokenAForTokenB, getTokenSymbol, setTokenApproveRouter, getCurrentChainIdNativeTokenAddress, setSwapExactETHForTokens, setSwapExactTokensForETH } from '../ContractAction/NA/EVCFarmingContractAction';
const chainAddresses = require('./ChainAddresses.json');


const SwapComponent = (props) => {
    const [showModal1, setShowModal1] = useState(false);
    const [showModal2, setShowModal2] = useState(false);
    const [selectedTokenImage1, setSelectedTokenImage1] = useState('');
    const [selectedTokenTicker1, setSelectedTokenTicker1] = useState('');
    const [selectedTokenImage2, setSelectedTokenImage2] = useState('');
    const [selectedTokenTicker2, setSelectedTokenTicker2] = useState('');
    const [button1Style, setButton1Style] = useState({});
    const [button2Style, setButton2Style] = useState({});
    const [amountinput,setamountinput]=useState(true);


    const [amountA, setAmountA] = useState("");
    const [amountB, setAmountB] = useState("");
    const [isAmountAEntered, setIsAmountAEntered] = useState(false);
    const [isAmountBEntered, setIsAmountBEntered] = useState(false);
    const [TokenABalance, setTokenABalance] = useState(0);
    const [TokenBBalance, setTokenBBalance] = useState(0);
    const [tokenAAllowance, setTokenAAllowance] = useState(0);
    const [tokenBAllowance, setTokenBAllowance] = useState(0);

    const handelAmountInput=()=>{
        setamountinput(!amountinput)
    } 
    
    const openModal = (buttonId) => {
        if (buttonId === 1) {
            setShowModal1(true);
        } else if (buttonId === 2) {
            setShowModal2(true);
        }
    };

    const closeModal = (buttonId) => {
        if (buttonId === 1) {
            setShowModal1(false);
        } else if (buttonId === 2) {
            setShowModal2(false);
        }
    };

    const handleTokenSelect = (image, ticker, buttonId) => {
        if (buttonId === 1) {
            if (ticker === selectedTokenTicker2) {
                return;
            }
            setSelectedTokenTicker1(ticker);
            alert(ticker)
            setSelectedTokenImage1(image);
           

            closeModal(1);
        } else if (buttonId === 2) {
            if (ticker === selectedTokenTicker1) {
                return;
            }
            setSelectedTokenTicker2(ticker);
            alert(ticker)
            setSelectedTokenImage2(image);
           

            closeModal(2);
        }
    };

    const isTokenSelectedForButton = (buttonId) => {
        if (buttonId === 1) {
            return !!selectedTokenImage1 && !!selectedTokenTicker1;
        } else if (buttonId === 2) {
            return !!selectedTokenImage2 && !!selectedTokenTicker2;
        }
    };
    const buttonStyle = {
        backgroundColor: isTokenSelectedForButton(1) ? '#1f3c4a' : '',
      };
    

    useEffect(() => {
        const getBalance = async () => {
            const chainId = await getCurrentChainId();
            let tokenAContractAddr = await getCurrentChainIdTokenAddress(selectedTokenTicker1);
            let tokenBContractAddr = await getCurrentChainIdTokenAddress(selectedTokenTicker2);
            const balanceA = await getTokenBalance(tokenAContractAddr);
            const balanceB = await getTokenBalance(tokenBContractAddr);
        if (chainAddresses[selectedTokenTicker1]) {
            setTokenABalance(balanceA);
        }
        if (chainAddresses[selectedTokenTicker2]) {
            setTokenBBalance(balanceB);
        }
        }

        const getallowanceTokentoRouter = async () => {
            const chainId = await getCurrentChainId();
            const tokenAContractAddr = await getCurrentChainIdTokenAddress(selectedTokenTicker1);
            const tokenBContractAddr = await getCurrentChainIdTokenAddress(selectedTokenTicker2);
            alert(tokenAContractAddr)
            alert(tokenBContractAddr)
            const allowanceTokenA = await getAllowanceTokentoRouter(tokenAContractAddr);
            const allowanceTokenB = await getAllowanceTokentoRouter(tokenBContractAddr);
            setTokenAAllowance(allowanceTokenA);
            setTokenBAllowance(allowanceTokenB);
        }
        getBalance()
        getallowanceTokentoRouter()
    }, [selectedTokenTicker1,selectedTokenTicker2]);
    useEffect(() => {
        const calculateAmountB = async () => {
            // Calculate and set amountB based on amountA
            if (amountA && amountA > 0 && isAmountAEntered) {
                try {
                    const chainId = await getCurrentChainId();
                    const tokenAContractAddr = await getCurrentChainIdTokenAddress(selectedTokenTicker1);
                    const tokenBContractAddr = await getCurrentChainIdTokenAddress(selectedTokenTicker2);
                    const result = await getValueOutTokenAtoTokenB(amountA, tokenAContractAddr, tokenBContractAddr);
                    setAmountB(result);
                    setIsAmountBEntered(true);
                } catch (error) {
                    console.error("Error calculating amountB:", error);
                }
            }
        };
        calculateAmountB();
    }, [amountA, isAmountAEntered]);

    const handleMaxClick = (token) => {
        if (token === 'A') {
            setAmountA(TokenABalance.toString());
            setIsAmountAEntered(true);
        } else if (token === 'B') {
            setAmountB(TokenBBalance.toString());
            setIsAmountBEntered(true);
        }
    };

    const handleInputAmounts = async (event) => {
        const { id, value } = event.target;
        if (id === "amountA") {
            setAmountA(value);
            setIsAmountAEntered(true);
            try {
                const tokenAContractAddr = await getCurrentChainIdTokenAddress(selectedTokenTicker1);
                const tokenBContractAddr = await getCurrentChainIdTokenAddress(selectedTokenTicker2);
                const result = await getValueOutTokenAtoTokenB(value, tokenAContractAddr, tokenBContractAddr);
                setAmountB(result);
                setIsAmountBEntered(true);
            } catch (error) {
                console.error("Error calculating amountB:", error);
            }
        } else if (id === "amountB") {
            setAmountB(value);
            setIsAmountBEntered(true);
            try {
                const tokenAContractAddr = await getCurrentChainIdTokenAddress(selectedTokenTicker1);
                const tokenBContractAddr = await getCurrentChainIdTokenAddress(selectedTokenTicker2);
                const result = await getValueOutTokenAtoTokenB(value, tokenBContractAddr, tokenAContractAddr);
                setAmountA(result);
                setIsAmountAEntered(true);
            } catch (error) {
                console.error("Error calculating amountA:", error);
            }
        }
    };


    const handleApproveToken = async (amount, tokenContractAddr) => {
        try {
            const tokenSymbol = await getTokenSymbol(tokenContractAddr);
            if (tokenSymbol) {
                await setTokenApproveRouter(amount, tokenContractAddr);
            } else {
                alert("No token found");
            }
        } catch (error) {
            console.error("Error:", error);
        }
    };


    const handleSwapTokenAForTokenB = async () => {
        const chainId = await getCurrentChainId();
        let tokenAContractAddr = await getCurrentChainIdTokenAddress(selectedTokenTicker1);
        let tokenBContractAddr = await getCurrentChainIdTokenAddress(selectedTokenTicker2);
        const isTokenANative = getCurrentChainIdNativeTokenAddress(tokenAContractAddr);
        const isTokenBNative = getCurrentChainIdNativeTokenAddress(tokenBContractAddr);
        if (isTokenANative === true) {
            alert(true)
            await setSwapExactETHForTokens(amountA, tokenAContractAddr, tokenBContractAddr);
        } else if (isTokenBNative === true) {
            alert(true)
            await setSwapExactTokensForETH(amountA, tokenAContractAddr, tokenBContractAddr);
        } else {
            await setSwapTokenAForTokenB(amountA, tokenAContractAddr, tokenBContractAddr);
        }
    };
   
   console.log('amount',amountinput)
    return (
        <div>
            <div id='swap-page' className='mt-3'>
                <div className='enpFfZ '>
                    {amountinput ?<div className='iUsjHb mt-3 hhoFBL1 p-2 morphism'>
                        <div className='d-flex' style={{ gap: '0 140px' }}>
                            <div className='hhoFBL p-2'>
                                <p className="m-0 text-light ms-2">You pay</p>
                                <input
                                    type="text"
                                    className="currency-input"
                                    placeholder="0"
                                    id="amountA"
                                    value={amountA}
                                    onChange={handleInputAmounts} />
                            
                            </div>
                            <div className='text-light d-flex flex-column align-item-center justify-content-center'>
                                <button className="max-parent max-parent-swap my-0">
                                    <p className="max my-0">MAX</p>
                                </button>
                            </div>
                        </div>
                        <div className='me-2 mt-2'>
                            <button className='we' type='button' onClick={() => openModal(1)}  style={button1Style}>
                                { selectedTokenImage1 ? (
                                    <>
                                        <img
                                            src={selectedTokenImage1}
                                            style={{ height: '24px', width: '24px', borderRadius: '50%' }}
                                            alt=''
                                        />
                                        <span className='text-light ms-2'>{selectedTokenTicker1}</span>
                                    </>
                                ) : (
                                    <>
                                        <img
                                            src='./images/sprint.png'
                                            style={{ height: '24px', width: '24px', borderRadius: '50%' }}
                                            alt=''
                                        />
                                        <span className='text-light ms-2'>ETH</span>
                                    </>
                                )}
                                <img src='/images/dropdown.png' height='23px' width='23px' alt='' />
                            </button>
                            <p className="ms-4 mt-2 mb-0 text-light ">balance: 0</p>
                        </div>
                    </div>:<div className='iUsjHb morphism hhoFBL1 p-2' id=''>
                        <div className='d-flex' style={{ gap: '0 130px' }}>
                            <div className='hhoFBL p-2'>
                                <p className="m-0 text-light ms-2">You receive</p>
                                <input
                                    type="text"
                                    className="currency-input"
                                    placeholder="0"
                                    id='amountB'
                                    value={amountB}
                                    onChange={handleInputAmounts}
                                  
                                />
                            </div>
                            <div className='text-light d-flex flex-column align-item-center justify-content-center'>
                                <button className="max-parent max-parent-swap my-0">
                                    <p className="max my-0">MAX</p>
                                </button>
                            </div>
                        </div>
                        <div className='me-2 mt-2'>
                            
                            <button className='ws' type='button' onClick={() => openModal(2)} style={button2Style}>
                                {selectedTokenImage2 ? (
                                    <>
                                        <img
                                            src={selectedTokenImage2}
                                            style={{ height: '24px', width: '24px', borderRadius: '50%' }}
                                            alt=''
                                        />
                                        <span className='text-light ms-2'>{selectedTokenTicker2}</span>
                                    </>
                                ) : (
                                    <>
                                       Select Token
                                    </>
                                )}
                                <img
                                    src='/images/dropdown.png'
                                    height='23px'
                                    width='23px'
                                    alt=''
                                    className='image'
                                    id='myImage'
                                />
                            </button>
                            <p className="ms-4 mt-2 mb-0 text-light">balance: 0</p>
                        </div>
                    </div>}
                    <PlusComponent img={swapbutton} handelAmountInput={()=>handelAmountInput()}  />
                     {amountinput?<div className='iUsjHb morphism hhoFBL1 p-2' id='swapbottom'>
                        <div className='d-flex' style={{ gap: '0 130px' }}>
                            <div className='hhoFBL p-2'>
                                <p className="m-0 text-light ms-2">You receive</p>
                                <input
                                    type="text"
                                    className="currency-input"
                                    placeholder="0"
                                    id="amountB"
                                    value={amountB}
                                    onChange={handleInputAmounts} 
                                />
                            </div>
                            <div className='text-light d-flex flex-column align-item-center justify-content-center'>
                                <button className="max-parent max-parent-swap my-0">
                                    <p className="max my-0">MAX</p>
                                </button>
                            </div>
                        </div>
                        <div className='me-2 mt-2'>
                             <button className='ws' type='button' onClick={() => openModal(2)}  style={button2Style}>
                                {selectedTokenImage2 ? (
                                    <>
                                        <img
                                            src={selectedTokenImage2}
                                            style={{ height: '24px', width: '24px', borderRadius: '50%' }}
                                            alt=''
                                        />
                                        <span className='text-light ms-2'>{selectedTokenTicker2}</span>
                                    </>
                                ) : (
                                    <>
                                       Select Token
                                    </>
                                )}
                                <img
                                    src='/images/dropdown.png'
                                    height='23px'
                                    width='23px'
                                    alt=''
                                    className='image'
                                    id='myImage'
                                />
                            </button>
                            <p className="ms-4 mt-2 mb-0 text-light">balance: 0</p>
                        </div>
                    </div>: <div className='iUsjHb  hhoFBL1 p-2 morphism' id='swapbottom'>
                        <div className='d-flex' style={{ gap: '0 140px' }}>
                            <div className='hhoFBL p-2'>
                                <p className="m-0 text-light ms-2">You pay</p>
                                <input
                                    type="text"
                                    className="currency-input"
                                    placeholder="0"
                                    id="amountA"
                                    value={amountA}
                                    onChange={handleInputAmounts}
                                />
                            </div>
                            <div className='text-light d-flex flex-column align-item-center justify-content-center'>
                                <button className="max-parent max-parent-swap my-0">
                                    <p className="max my-0">MAX</p>
                                </button>
                            </div>
                        </div>
                        <div className='me-2 mt-2'>
                             <button className='we' type='button' onClick={() => openModal(1)}  style={button1Style}>
                                {selectedTokenImage1 ? (
                                    <>
                                        <img
                                            src={selectedTokenImage1}
                                            style={{ height: '24px', width: '24px', borderRadius: '50%' }}
                                            alt=''
                                        />
                                        <span className='text-light ms-2'>{selectedTokenTicker1}</span>
                                    </>
                                ) : (
                                    <>
                                        <img
                                            src='./images/sprint.png'
                                            style={{ height: '24px', width: '24px', borderRadius: '50%' }}
                                            alt=''
                                        />
                                        <span className='text-light ms-2'>ETH</span>
                                    </>
                                )}
                                <img src='/images/dropdown.png' height='23px' width='23px' alt='' />
                            </button>
                            <p className="ms-4 mt-2 mb-0 text-light ">balance: 0</p>
                        </div>
                    </div>}
                    <div className="enpFfZ">
                        
                            {!isAmountAEntered || !isAmountBEntered ? (
                                <button className="invalid-pair morphism mt-2 " style={{ width: "100%" }}>
                                   Enter amounts for A and B
                                </button>
                            ) : (
                                <>
                                    {((tokenAAllowance < amountA)) && (
                                        <div style={{ display: 'flex', justifyContent: 'center', width: '100%' }}>
                                            <button className="connect-button mt-2" onClick={() => handleApproveToken(amountA, "0x97779C0b556EF2F33Cb3e8350E36F978eF0f2C53")}>
                                                Approve Token A
                                            </button>
                                        </div>
                                    )}
                                    {((tokenAAllowance >= amountA)) && (
                                        <button className="connect-button mt-2" style={{ width: '100%' }} onClick={handleSwapTokenAForTokenB}>
                                            Swap
                                        </button>
                                    )}
                                </>
                            )}
                        
                    </div>
                </div>
            </div>

            <Modal
                show={showModal1}
                onHide={() => closeModal(1)}
                style={{ maxWidth: '400px', marginLeft: '35%', borderRadius: '15px' }}
                dialogClassName='modal-dialog-centered'>
                <Modal.Body className='p-0 modal-body'>
                    <SelectToken onSelectToken={(image, ticker) => handleTokenSelect(image, ticker, 1)} />
                </Modal.Body>
            </Modal>

            <Modal
                show={showModal2}
                onHide={() => closeModal(2)}
                style={{ maxWidth: '400px', marginLeft: '35%', borderRadius: '15px' }}
                dialogClassName='modal-dialog-centered'>
                <Modal.Body className='p-0 modal-body'>
                    <SelectToken onSelectToken={(image, ticker) => handleTokenSelect(image, ticker, 2)} />
                </Modal.Body>
            </Modal>
        </div>
    );
};

export default SwapComponent;
