import React, { useEffect, useState } from 'react';
import PlusComponent from './PlusComponent';
import SelectToken from './SelectToken';
import { Modal } from 'react-bootstrap';
import plus from "../Assets/images2/tdesign_swap.png";
import TradePair from '../PoolContent/TradePair';
import PricesShare from '../PoolContent/PricesShare';
import CreatePair from '../PoolContent/CreatePair';

import { addliquidity, getCurrentChainId, getCurrentChainIdRouterAddress, getCurrentChainIdTokenAddress, getTokenBalance, getValueOutTokenAtoTokenB, getTokenContractAddressExists, getTokenSymbol, setTokenApproveRouter, getAllowanceTokentoRouter, getCurrentChainIdNativeTokenAddress, addLiquidityETH } from '../ContractAction/NA/EVCFarmingContractAction';
import Context from '../Context/Context';


const SwapComponent3 = (props) => {
    const [showModal1, setShowModal1] = useState(false);
    const [showModal2, setShowModal2] = useState(false);
    const [selectedTokenImage1, setSelectedTokenImage1] = useState('');
    const [selectedTokenTicker1, setSelectedTokenTicker1] = useState('');
    const [selectedTokenImage2, setSelectedTokenImage2] = useState('');
    const [selectedTokenTicker2, setSelectedTokenTicker2] = useState('');
    const [selectedTokenImage, setselectedTokenImage] = useState(false);
    const [amountinput, setamountinput] = useState()
    const [paydollar, setpaydollar] = useState();
    const { accesscomponents, setaccesscomponenets } = useState(Context);



    ///
    const [amountA, setAmountA] = useState("");
    const [amountB, setAmountB] = useState("");

    const [isAmountAEntered, setIsAmountAEntered] = useState(false);
    const [isAmountBEntered, setIsAmountBEntered] = useState(false);

    const [TokenABalance, setTokenABalance] = useState(0);
    const [TokenBBalance, setTokenBBalance] = useState(0);

    const [tokenAAllowance, setTokenAAllowance] = useState(0);
    const [tokenBAllowance, setTokenBAllowance] = useState(0);

    const [tokenAApprove, setTokenAApprove] = useState(0);
    const [tokenBApprove, setTokenBApprove] = useState(0);

    // const TokenAContractAddr = "0x97779C0b556EF2F33Cb3e8350E36F978eF0f2C53";
    // const TokenBContractAddr = "0xA07566Db17C9608EB019527b1db3245e59dA33e2";


    useEffect(() => {
        // setTokenApproveRouter(123,TokenAContractAddr)
        getCurrentChainId()
        getCurrentChainIdTokenAddress("TokenA")
        getCurrentChainIdTokenAddress("TokenB")
        getCurrentChainIdRouterAddress(80001);
        // getAllowanceTokentoRouter(TokenAContractAddr);
        // getTokenContractAddressExists(TokenAContractAddr, TokenBContractAddr)

        const getBalance = async () => {
            const chainId = await getCurrentChainId();
            let tokenAContractAddr = await getCurrentChainIdTokenAddress("TokenA");
            let tokenBContractAddr = await getCurrentChainIdTokenAddress("TokenB");
            const balanceA = await getTokenBalance(tokenAContractAddr);
            const balanceB = await getTokenBalance(tokenBContractAddr);
            setTokenABalance(balanceA);
            setTokenBBalance(balanceB);
        }
        const getallowanceTokentoRouter = async () => {
            const chainId = await getCurrentChainId();
            const tokenAContractAddr = await getCurrentChainIdTokenAddress("TokenA");
            const tokenBContractAddr = await getCurrentChainIdTokenAddress("TokenB");
            const allowanceTokenA = await getAllowanceTokentoRouter(tokenAContractAddr);
            const allowanceTokenB = await getAllowanceTokentoRouter(tokenBContractAddr);
            setTokenAAllowance(allowanceTokenA);
            setTokenBAllowance(allowanceTokenB);
        }
        // const setApproveTokentoRouter = async () => {
        //   const approveTokenA = await setTokenApproveRouter(TokenAContractAddr);
        //   const approveTokenB = await setTokenApproveRouter(TokenBContractAddr);
        //   setTokenAApprove(approveTokenA);
        //   setTokenBApprove(approveTokenB);
        // }

        getBalance();
        // setApproveTokentoRouter();
        getallowanceTokentoRouter();
    }, []);

    useEffect(() => {
        const calculateAmountB = async () => {
            // Calculate and set amountB based on amountA
            if (amountA && amountA > 0 && isAmountAEntered) {
                try {
                    const chainId = await getCurrentChainId();
                    const tokenAContractAddr = await getCurrentChainIdTokenAddress("TokenA");
                    const tokenBContractAddr = await getCurrentChainIdTokenAddress("TokenB");
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
    // Run this effect whenever amountA or isAmountAEntered changes

    const handleAddLiquidity = async () => {
        const chainId = await getCurrentChainId();
        let tokenAContractAddr = await getCurrentChainIdTokenAddress("TokenA");
        let tokenBContractAddr = await getCurrentChainIdTokenAddress("TokenB");
        // getTokenContractAddressExists(tokenAContractAddr, tokenBContractAddr)
        try {
            const tokenASymbol = await getTokenSymbol(tokenAContractAddr);
            const tokenBSymbol = await getTokenSymbol(tokenBContractAddr);
            if (tokenASymbol && tokenBSymbol) {
                const isTokenANative = getCurrentChainIdNativeTokenAddress(tokenAContractAddr);
                const isTokenBNative = getCurrentChainIdNativeTokenAddress(tokenBContractAddr);
                if (isTokenANative === true || isTokenBNative === true) {
                    alert(true)
                    await addLiquidityETH(amountA, amountB, tokenAContractAddr, tokenBContractAddr);
                } else {
                    // alert(false)
                    await addliquidity(amountA, amountB, tokenAContractAddr, tokenBContractAddr);
                }
            } else {
                alert("No token found");
            }
        } catch (error) {
            console.error("Error:", error);
            // throw error;
        }
    };


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
        } else if (id === "amountB") {
            setAmountB(value);
            setIsAmountBEntered(true);
            // If amountB is being entered, calculate and set amountA
            const chainId = await getCurrentChainId();
            const tokenAContractAddr = await getCurrentChainIdTokenAddress("TokenA");
            const tokenBContractAddr = await getCurrentChainIdTokenAddress("TokenB");
            getValueOutTokenAtoTokenB(value, tokenAContractAddr, tokenBContractAddr)
                .then(result => {
                    setAmountA(result);
                    setIsAmountAEntered(true);
                })
                .catch(error => console.error("Error calculating amountA:", error));
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
    ///



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
            if (selectedTokenImage1 === image) {
                // Deselect the token
                setSelectedTokenImage1('');
                setSelectedTokenTicker1('');
            } else {
                setSelectedTokenImage1(image);
                setSelectedTokenTicker1(ticker);
            }
            closeModal(1);
        } else if (buttonId === 2) {
            if (selectedTokenImage2 === image) {
                // Deselect the token
                setSelectedTokenImage2('');
                setSelectedTokenTicker2('');
            } else {
                setSelectedTokenImage2(image);
                setSelectedTokenTicker2(ticker);
                setselectedTokenImage(true)
            }
            closeModal(2);
        }
    };
    console.log(props.selectedTokenImage)
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

    const button2Style = {
        backgroundColor: isTokenSelectedForButton(2) ? '#1f3c4a' : '',
    };

    const handelpayamountinput = (e) => {
        const inputvalue = e.target.value
        if (/^\d*\.?\d*$/.test(inputvalue)) {
            if (selectedTokenImage === true) {
                { setamountinput(inputvalue) }
                { props.setaccesscomponenets(true) }
                handleInputAmounts(e);
            }
        }
    };
    useEffect(() => {
        if (selectedTokenImage == true) {
            if (amountinput !== '') {
                const dollaramount = parseFloat(amountinput) * 83.17
                setpaydollar(dollaramount.toFixed(2))
            } else {
                setpaydollar('')
            }
        }
    }, [amountinput]);

    useEffect(() => {
        if (amountinput == '') {
            { props.setaccesscomponenets(false) }
        }
    }, [amountinput])
    console.log(amountinput)
    console.log(props.accesscomponents)



    return (
        <div>
            <div id='swap-page' className='mt-3'>
                <div className='enpFfZ '>
                    <div className='iUsjHb mt-3 hhoFBL1 p-2 morphism'>
                        <div className='d-flex' style={{ gap: '0 130px' }}>
                            <div className='hhoFBL p-2'>
                                <p className="m-0 text-light ms-2">You pay</p>
                                <input
                                    type="text"
                                    className="currency-input"
                                    placeholder="0"
                                    value={selectedTokenImage ? amountinput : ''}
                                    onChange={(e) => handelpayamountinput(e)}
                                />
                            </div>
                            <div className='text-light d-flex flex-column align-item-center justify-content-center'>
                                <button className="max-parent max-parent-swap my-0" onClick={() => handleMaxClick('A')}>
                                    <p className="max my-0">MAX</p>
                                </button>
                            </div>
                        </div>
                        <div className='me-2 mt-2'>
                            <button className="we" type="button" onClick={() => openModal(1)} disabled={isTokenSelectedForButton(1)} style={buttonStyle}>
                                {selectedTokenImage1 ? (
                                    <>
                                        <img
                                            src={selectedTokenImage1}
                                            height="23px"
                                            width="23px"
                                            alt=""
                                        />
                                        <span className="text-light ms-2">{selectedTokenTicker1}</span>
                                    </>
                                ) : (
                                    <span className="text-light ms-2">
                                        <img
                                            src="./images/sprint.png"
                                            height="23px"
                                            width="23px"
                                            alt=""
                                        />
                                        <span className="text-light ms-2">ETH</span>
                                    </span>
                                )}
                                <img
                                    src="/images/dropdown.png"
                                    height="23px"
                                    width="23px"
                                    alt=""
                                />
                            </button>
                            <p className="ms-4 mt-2 mb-0 text-light ">balance: {TokenABalance.toFixed(2)}</p>
                        </div>
                    </div>
                    <PlusComponent img={plus} />
                    <div className='iUsjHb morphism hhoFBL1 p-2 ' id='swapbottom' >
                        <div className='d-flex' style={{ gap: '0 130px' }} >
                            <div className='hhoFBL p-2'>
                                <p className="m-0 text-light ms-2">You Pay</p>
                                <input
                                    type="text"
                                    className="currency-input"
                                    placeholder="0"
                                    value={setpaydollar ? paydollar : 0}
                                    onChange={(e) => handelpayamountinput(e)}

                                />
                            </div>
                            <div className='text-light d-flex flex-column align-item-center justify-content-center'>
                                <button className="max-parent max-parent-swap my-0" onClick={() => handleMaxClick('B')}>
                                    <p className="max my-0">MAX</p>
                                </button>
                            </div>
                        </div>
                        <div className='me-2 mt-2'>
                            <button className="ws" type="button" onClick={() => openModal(2)} disabled={isTokenSelectedForButton(2)} style={button2Style}>
                                {selectedTokenImage2 ? (
                                    <>
                                        <img
                                            src={selectedTokenImage2}
                                            height="23px"
                                            width="23px"
                                            alt=""
                                        />
                                        <span className="text-light ms-2">{selectedTokenTicker2}</span>
                                    </>
                                ) : (
                                    <span className="text-light ms-2">Select Token</span>
                                )}
                                <img
                                    src="/images/dropdown.png"
                                    height="23px"
                                    width="23px"
                                    alt=""
                                />
                            </button>
                            <p className="ms-4 mt-2 mb-0 text-light">balance: {TokenBBalance.toFixed(2)}</p>
                        </div>
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


            { }
        </div>
    );
}

export default SwapComponent3;