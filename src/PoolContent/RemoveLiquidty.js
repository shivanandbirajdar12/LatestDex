// import React, { useState } from 'react'
// import pharrow from "../Assets/images2/ph_arrow-down.png";
// import phquestion from "../Assets/images2/ph_question.png";
// import MyNavbar from '../Component/MyNavbar';
// import { Link } from 'react-router-dom';
// import swapimg from '../Assets/images2/tdesign_swap (1).png'
// import TradePair from './TradePair';
// import NewPosition from './NewPosition';
// import cross from '../Assets/images2/radix-icons_cross-2.svg';
// import downarrow from '../Assets/images2/downarrow.png'
// const RemoveLiquidty = () => {
//     const [inputValue, setInputValue] = useState(0);
//     const [showModal, setShowModal] = useState(false);
//     const [showPool, setShowPool] = useState(false);
//     const handleModalClose = () => setShowModal(false);
//     const handleModalShow = () => setShowModal(true);
//     const handleInputChange = (event) => {
//         const newValue = event.target.value;
//         if ((newValue <= 100) && (newValue >= 0)) {
//             setInputValue(newValue)
//         } else {
//             alert('Ranges between 0 to 100')
//         }
//     };
//     return (
//         <>
//             <MyNavbar />
//             <div className="jRlUBU mt-4">
//                 <div className='khwJOa'>
//                     <div className="swapoption d-flex justify-content-between mt-3 align-items-center">
//                         <Link to='/pool'> <img src={pharrow} style={{ height: "20px", width: "20px" }} alt="" /></Link>
//                         <button className="swaptext">Remove Liquidity</button>
//                         <img
//                             src={phquestion}
//                             style={{ height: "20px", width: "20px" }}
//                             alt=""
//                         />
//                     </div>
//                     <div className=' mt-4  glassmorphism '>
//                         <div className='_883856ad '>
//                             <div>Amount</div>
//                             <div className='add'>Detailed</div>
//                         </div>
//                         <div>
//                             <input
//                                 type="text"
//                                 className='w-100 _883060pi my-1 px-2'
//                                 inputMode="numeric"
//                                 placeholder='0%'
//                                 value={inputValue}
//                                 onChange={handleInputChange}
//                             />
//                             <div
//                                 id="progressBar"
//                                 className='mt-4 px-3'
//                                 style={{
//                                     position: 'relative',
//                                     height: '1px',
//                                     backgroundColor: 'grey'
//                                 }}
//                             >
//                                 <div
//                                     style={{
//                                         width: `${inputValue}%`,
//                                         height: '100%',
//                                         backgroundColor: 'blue',
//                                         position: 'absolute',
//                                         top: 0,
//                                         left: 0,
//                                     }}
//                                 />
//                                 <div
//                                     style={{
//                                         width: '15px',
//                                         height: '15px',
//                                         borderRadius: '50%',
//                                         backgroundColor: 'white',
//                                         position: 'absolute',
//                                         top: '-7px',
//                                         left: `${inputValue}%`,
//                                         transform: 'translateX(-50%)',
//                                         zIndex: 2,
//                                     }}
//                                 />
//                             </div>
//                         </div>
//                         <div className='d-flex mt-4 justify-content-evenly align-items-center'>
//                             <div className="_883060pa">
//                                 <div className="_883060pit">25%</div>
//                             </div>
//                             <div className="_883060pa">
//                                 <div className="_883060pit">50%</div>
//                             </div>
//                             <div className="_883060pa">
//                                 <div className="_883060pit">75%</div>
//                             </div>
//                             <div className="_883060pa">
//                                 <div className="_883060pit">100%</div>
//                             </div>
//                         </div >
//                     </div>

//                     <div className='text-center my-1'>
//                         <img src={swapimg} alt='' />
//                     </div>

//                     <div className=' glassmorphism p-0'>
//                         <div className='_883856ad'>
//                             <div>-</div>
//                             <div className='d-flex align-items-center'>
//                                 <img src={phquestion} style={{ height: "20px", width: "20px" }} alt='' />
//                                 <div> Token1</div>
//                             </div>
//                         </div>
//                         <div className='_883856ad'>
//                             <div>-</div>
//                             <div className='d-flex align-items-center'>
//                                 <img src={phquestion} style={{ height: "20px", width: "20px" }} alt='' />
//                                 <div>Token2</div>
//                             </div>
//                         </div>
//                     </div>

//                     <div className='_883856ad'>
//                         <div>Rates</div>
//                         <div > 1 Token1 = 2 Token2 </div>
//                     </div>
//                     <div className='_883856ad'>
//                         <div />
//                         <div > 1 Token2 = 0.5Token1</div>
//                     </div>
//                     <div className='_883856ad' style={{ gap: '0px 10px' }}>
//                         <button className="invalid-pair morphism w-100 " >
//                             Approve
//                         </button>
//                         <button onClick={handleModalShow} className="invalid-pair morphism w-100 " >
//                             Enter an amount
//                         </button>
//                     </div>
//                 </div>
//                 <div
//                     className="khwJOa glassmorphism mt-2 mb-2"
//                     style={{ border: "none" }}
//                 >
//                     <NewPosition />
//                 </div>
//             </div>


//             <div className="modal" style={{ display: showModal ? 'block' : 'none' }}>
//                 <div className="modal-dialog modal-dialog-centered">
//                     <div className="modal-content" style={{border:'transparent'}} >
//                         <div className="modal-body p-0">
//                             <div className='p-3' >
//                                 <div className=' _883856ad'>
//                                     <div>You will receive</div>
//                                     <img src={cross} onClick={handleModalClose} alt='' />
//                                 </div>
//                                 <div className=''>
//                                     <div className='_883856ad'>
//                                         <div>49999.9</div>
//                                         <div className='d-flex'>
//                                             <img src={phquestion} style={{ height: "24px", width: "24px" }} alt="" />
//                                             <div>Token1</div>
//                                         </div>
//                                     </div>
//                                     <div className='_883856ad'>
//                                         +
//                                     </div>
//                                     <div className='_883856ad'>
//                                         <div>49999.9</div>
//                                         <div className='d-flex'>
//                                             <img src={phquestion} style={{ height: "24px", width: "24px" }} alt="" />
//                                             <div>Token1</div>
//                                         </div>
//                                     </div>
//                                 </div>
//                                 <p  style={{ fontSize: '9px', margin:0,padding:0,color:'white',color:'#a1a1a1' }}>Output is estimated. If the price changes by more than 34% your transaction will revert.</p>
//                             </div>
//                             <div className='p-3'  style={{backgroundColor:'rgba(44, 47, 54, 1)',borderBottomLeftRadius:'16px', borderBottomRightRadius:'16px'}} >
//                                 <div className=' _883856ad'>
//                                     <div>UNI Token1/Token2 Burned</div>
//                                     <div className='d-flex'>
//                                         <img src={phquestion} style={{ height: "24px", width: "24px" }} alt="" />
//                                         <img src={phquestion} style={{ height: "24px", width: "24px" }} alt="" />
//                                         <div>Token1</div>
//                                     </div>
//                                 </div>
//                                 <div className='_883856ad'>
//                                     <div>Price</div>
//                                     <div>1 Token1 = 2 Token2</div>
//                                 </div>
//                                 <div className='_883856ad'>
//                                     <div></div>
//                                     <div>1 Token2 = 0.5Token1</div>
//                                 </div>
//                                 <button className="connect-button mt-2 w-100" >
//                                     {`Confirm`}
//                                 </button>

//                             </div>
//                         </div>
//                     </div>
//                 </div>
//             </div>


//         </>
//     )
// }

// export default RemoveLiquidty


import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import MyNavbar from '../Component/MyNavbar';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import swapimg from '../Assets/images2/tdesign_swap (1).png';
import cross from '../Assets/images2/radix-icons_cross-2.svg';
import NewPosition from './NewPosition';
import phquestion from "../Assets/images2/ph_question.png";
import pharrow from "../Assets/images2/ph_arrow-down.png";
import loadingimg from '../Assets/images2/Ellipse 7.png'

import { getUserPairBalance, getPairTotalSupplyAndPoolSharePerc, setPairApproveRouter, removeliquidity, getPairAllowanceTokentoRouter } from '../ContractAction/NA/EVCFarmingContractAction';
import Context from '../Context/Context';


const RemoveLiquidty = () => {
    const [inputValue, setInputValue] = useState(null);
    const [showModal, setShowModal] = useState(false);
    const [showInnerModal, setShowInnerModal] = useState(false);
    const [isApproved, setIsApproved] = useState(false);
    const [modelstatus, setmodalstatus] = useState(false)
    const handleModalClose = () => setShowModal(false);
    const handleModalShow = () => { setShowModal(true); setmodalstatus(true) }
    const handleInnerModalClose = () => setShowInnerModal(false);

    const [userPairBalance, setUserPairBalance] = useState(0);
    const [userPoolSharePerc, setUserPoolSharePerc] = useState(0);
    const [pairAllowanceRouter, setPairAllowanceRouter] = useState(0);
    const [valueOfInput, setValueOfInput] = useState(0);
    const {selectedNetwork,setSelectedNetwork,}=useContext(Context);

    const handleSelectNetwork = (network) => {
        setSelectedNetwork(network);
      };

    const handleInnerModalShow = () => {
        setShowInnerModal(true);
        toast.success(<div >
            Remove 49900 Token1 and 99900 Token2 <br />
            <Link to="#"> View on Block Explorer</Link>
        </div>, {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
        });
    };

    const handleInputChange = async (event) => {
        const newValue = event.target.value;
        let userPairBalance = await getUserPairBalance()
        let newvaluePerc = (newValue * userPairBalance) / 100
        console.log('newvaluePerc', newvaluePerc)
        if ((newValue <= 100) && (newValue >= 0)) {
            setInputValue(newValue);
            setValueOfInput(newvaluePerc)
        } else {
            alert('Ranges between 0 to 100');
        }
    };

    const handleConfirm = async () => {
        await removeliquidity(valueOfInput, "0x0834557b3787A769c7dCda37581241D4C87AfF1c", "0x9B1980E236980a8015fa447611243760883a2bBB")
        setShowModal(false);
        handleInnerModalShow();
    };
    useEffect(() => {
        if (inputValue === '') {
            setInputValue(null)
            setIsApproved(false)
        }
    }, [inputValue])

    useEffect(() => {
        const getUserpairbalance = async () => {
            const balance = await getUserPairBalance();
            setUserPairBalance(balance / 10 ** 18);
        }
        const getPoolSharePerc = async () => {
            const perc = await getPairTotalSupplyAndPoolSharePerc();
            setUserPoolSharePerc(perc[1]);
        }
        const getPairAllowance = async () => {
            const allowance = await getPairAllowanceTokentoRouter();
            setPairAllowanceRouter(allowance);
        }
        getPairAllowance()
        getPoolSharePerc()
        getUserpairbalance()
    })
    const handleApprove = () => {
        // setIsApproved(true);
        setPairApproveRouter(valueOfInput);
    };
    return (
        <>
            <MyNavbar  selectedNetwork={selectedNetwork} onSelectNetwork={ handleSelectNetwork}/>
            <ToastContainer />
            <div className="jRlUBU mt-4">
                <div className='khwJOa'>
                    <div className="swapoption d-flex justify-content-between mt-3 align-items-center">
                        <Link to='/pool'> <img src={pharrow} style={{ height: "20px", width: "20px" }} alt="" /></Link>
                        <button className="swaptext">Remove Liquidity</button>
                        <img src={phquestion} style={{ height: "20px", width: "20px" }} alt="" />
                    </div>
                    <div className=' mt-4  glassmorphism '>
                        <div className='_883856ad '>
                            <div>Amount</div>
                            <div className='add'>Detailed</div>
                        </div>
                        <div>
                            <input
                                type="text"
                                className='w-100 _883060pi my-1 px-2'
                                inputMode="numeric"
                                placeholder='0%'
                                value={inputValue}
                                onChange={handleInputChange}
                            />
                            <div
                                id="progressBar"
                                className='mt-4 px-3'
                                style={{
                                    position: 'relative',
                                    height: '1px',
                                    backgroundColor: 'grey'
                                }}
                            >
                                <div
                                    style={{
                                        width: `${inputValue}%`,
                                        height: '100%',
                                        backgroundColor: 'blue',
                                        position: 'absolute',
                                        top: 0,
                                        left: 0,
                                    }}
                                />
                                <div
                                    style={{
                                        width: '15px',
                                        height: '15px',
                                        borderRadius: '50%',
                                        backgroundColor: 'white',
                                        position: 'absolute',
                                        top: '-7px',
                                        left: `${inputValue}%`,
                                        transform: 'translateX(-50%)',
                                        zIndex: 2,
                                    }}
                                />
                            </div>
                        </div>
                        <div className='d-flex mt-4 justify-content-evenly align-items-center'>
                            <div className="_883060pa">
                                <div className="_883060pit">25%</div>
                            </div>
                            <div className="_883060pa">
                                <div className="_883060pit">50%</div>
                            </div>
                            <div className="_883060pa">
                                <div className="_883060pit">75%</div>
                            </div>
                            <div className="_883060pa">
                                <div className="_883060pit">100%</div>
                            </div>
                        </div >
                    </div>

                    <div className='text-center my-1'>
                        <img src={swapimg} alt='' />
                    </div>

                    <div className=' glassmorphism p-0'>
                        <div className='_883856ad'>
                            <div>-</div>
                            <div className='d-flex align-items-center'>
                                <img src={phquestion} style={{ height: "20px", width: "20px" }} alt='' />
                                <div> Token1</div>
                            </div>
                        </div>
                        <div className='_883856ad'>
                            <div>-</div>
                            <div className='d-flex align-items-center'>
                                <img src={phquestion} style={{ height: "20px", width: "20px" }} alt='' />
                                <div>Token2</div>
                            </div>
                        </div>
                    </div>

                    <div className='_883856ad'>
                        <div>Rates</div>
                        <div > 1 Token1 = 2 Token2 </div>
                    </div>
                    <div className='_883856ad'>
                        <div></div>
                        <div > 1 Token2 = 0.5Token1</div>
                    </div>
                    <div className='_883856ad' style={{ gap: '0px 10px' }}>

                        {inputValue === null ? <button className="invalid-pair morphism w-100 " > Approve</button> : <button className='w-100'>{valueOfInput > pairAllowanceRouter ? <button className='connect-button w-100' onClick={() => handleApprove()}>Approve</button > : <button class='connect-button-green w-100'>Approve</button>}</button>}

                        <button className='w-100'>
                            {inputValue === null ? <button className="invalid-pair morphism w-100 " >Enter an amount</button> : <button className='w-100'>
                                {valueOfInput <= pairAllowanceRouter ? <button className='w-100' onClick={handleModalShow}>{modelstatus === true ? <button className='connect-button-blue w-100'>Remove</button> : <button className='connect-button w-100'>Remove</button>}</button> : <button className='invalid-pair morphism w-100 '>Remove</button>}
                            </button>}
                        </button>
                    </div>
                </div>
                <div
                    className="khwJOa glassmorphism mt-2 mb-2"
                    style={{ border: "none" }}
                >
                    <div className="px-2">
                        <div className="_883856ad ">Your Position</div>
                        <div className=" _883856ad">
                            <div className="d-flex">
                                <img src={phquestion} style={{ height: "24px", width: "24px" }} alt="" />
                                <img src={phquestion} style={{ height: "24px", width: "24px" }} alt="" />
                                <div>Token1/Token2</div>
                            </div>
                            <div>{userPairBalance.toFixed(2)}</div>
                        </div>
                        <div className=" _883856ad">
                            <div >Your pool share</div>
                            <div>{userPoolSharePerc.toFixed(2)}%</div>
                        </div>
                        <div className=" _883856ad">
                            <div >Token1:</div>
                            <div>99999.9</div>
                        </div>
                        <div className=" _883856ad">
                            <div >Token2:</div>
                            <div>19999.9</div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Outer modal */}
            <div className="modal" style={{ display: showModal ? 'block' : 'none' }}>
                <div className="modal-dialog modal-dialog-centered">
                    <div className="modal-content" style={{ border: 'transparent' }}>
                        <div className="modal-body p-0">
                            <div className='p-3' >
                                <div className=' _883856ad'>
                                    <div>You will receive</div>
                                    <img src={cross} onClick={handleModalClose} alt='' />
                                </div>
                                <div className=''>
                                    <div className='_883856ad'>
                                        <div>49999.9</div>
                                        <div className='d-flex'>
                                            <img src={phquestion} style={{ height: "24px", width: "24px" }} alt="" />
                                            <div>Token1</div>
                                        </div>
                                    </div>
                                    <div className='_883856ad'>
                                        +
                                    </div>
                                    <div className='_883856ad'>
                                        <div>49999.9</div>
                                        <div className='d-flex'>
                                            <img src={phquestion} style={{ height: "24px", width: "24px" }} alt="" />
                                            <div>Token1</div>
                                        </div>
                                    </div>
                                </div>
                                <p style={{ fontSize: '9px', margin: 0, padding: 0, color: 'white', color: '#a1a1a1' }}>Output is estimated. If the price changes by more than 34% your transaction will revert.</p>
                            </div>
                            <div className='p-3' style={{ backgroundColor: 'rgba(44, 47, 54, 1)', borderBottomLeftRadius: '16px', borderBottomRightRadius: '16px' }} >
                                <div className=' _883856ad'>
                                    <div>UNI Token1/Token2 Burned</div>
                                    <div className='d-flex'>
                                        <img src={phquestion} style={{ height: "24px", width: "24px" }} alt="" />
                                        <img src={phquestion} style={{ height: "24px", width: "24px" }} alt="" />
                                        <div>Token1</div>
                                    </div>
                                </div>
                                <div className='_883856ad'>
                                    <div>Price</div>
                                    <div>1 Token1 = 2 Token2</div>
                                </div>
                                <div className='_883856ad'>
                                    <div></div>
                                    <div>1 Token2 = 0.5Token1</div>
                                </div>

                                <button className="connect-button mt-2 w-100" onClick={handleConfirm}>
                                    {`Confirm`}
                                </button>

                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Inner modal */}
            <div className="modal" style={{ display: showInnerModal ? 'block' : 'none' }}>
                <div className="modal-dialog modal-dialog-centered">
                    <div className="modal-content" style={{ border: 'transparent' }}>
                        <div className="modal-body p-0">
                            <div className=" _883856ad">
                                <div></div>
                                <div><img src={cross} onClick={handleInnerModalClose} alt="" /> </div>
                            </div>
                            <div className="text-center mt-4 mb-4" >
                                <img src={loadingimg} style={{ height: '80px', width: '80px', animation: 'rotate 2s linear 3' }} alt="" />
                            </div>
                            <div className="waiting-for-confirmation-parent">
                                <b className="waiting-for-confirmation">Waiting For Confirmation</b>
                                <div className="supplying-100000-token1">{`Removing 24999.9 Token1 and 49999.9 Token2 `}</div>
                                <div className="confirm-this-transaction">Confirm this transaction in your wallet</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default RemoveLiquidty;
