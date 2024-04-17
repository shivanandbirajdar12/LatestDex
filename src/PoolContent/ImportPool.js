// import React, { useState } from 'react';
// import pharrow from "../Assets/images2/ph_arrow-down.png";
// import phquestion from "../Assets/images2/ph_question.png";
// import plus from "../Assets/images2/tdesign_swap.png";
// import MyNavbar from '../Component/MyNavbar';
// import { Link } from 'react-router-dom';
// import cross from '../Assets/images2/radix-icons_cross-2.svg';
// import downarrow from '../Assets/images2/downarrow.png'
// const ImportPool = () => {
//     const [showModal, setShowModal] = useState(false);
//     const [showPool , setShowPool]= useState(false);
//     const handleModalClose = () => setShowModal(false);
//     const handleModalShow = () => setShowModal(true);

//     const manage = ()=>{
//         setShowPool(true);
//     }
//     console.log(showPool);
//     return (
//         <>
//             <MyNavbar />
//             <div className="d-flex col-md-4 col-sm-4 mx-auto mt-4  py-3 glassmorphism  align-items-center flex-column" style={{ border: " 1px solid #646464", boxShadow: '7px 66px 57.900001525878906px 0px rgba(0, 0, 0, 0.2)' }}>
//                 <div className="swapoption d-flex justify-content-between mt-3 align-items-center">
//                     <Link to='/pool'> <img src={pharrow} style={{ height: "20px", width: "20px" }} alt="" /></Link>
//                     <button className="swaptext">Import Pool</button>
//                     <img
//                         src={phquestion}
//                         style={{ height: "20px", width: "20px" }}
//                         alt=""
//                     />
//                 </div>
//                 <button onClick={handleModalShow} className='swapoption import-pool-parent  morphism d-flex justify-content-between align-items-center px-3 mt-2'>
//                     <div>
//                         <img src="./images/sprint.png" height="23px" width="23px" alt="" />
//                         <span className="text-light ms-2">ETH</span>
//                     </div>
//                     <img
//                         src="/images/dropdown.png"
//                         height="23px"
//                         width="23px"
//                         alt=""
//                     />
//                 </button >
//                 <div className='swapoption d-flex justify-content-center align-items-center'>
//                     <button className="px-1">
//                         <img
//                             src={plus}
//                             className="p-1"
//                             height="36px"
//                             width="36px"
//                             alt=""
//                         />
//                     </button>
//                 </div>
//                 <button onClick={()=>{handleModalShow();manage();}} className='swapoption import-pool-parent morphism d-flex justify-content-between align-items-center px-3 '>
//                     <div>
//                         <span className="text-light ms-2">Select a Token</span>
//                     </div>
//                     <img
//                         src="/images/dropdown.png"
//                         height="23px"
//                         width="23px"
//                         alt=""
//                     />
//                 </button >
//                 {showPool===false?<p></p>:
//                 <div className=' text-center mt-2'>
//                       <div className='pool-found'>Pool Found!</div>
//                       <Link  to='/manage=Pool' className='manage-this-pool'>Manage this pool.</Link>
//                 </div> }
//                 <div className='swapoption mb-4 import-pool-parent d-flex justify-content-center morphism mt-2 p-4 align-items-center'>
//                     <span className='select-a-token'>Select a token to find your liquidity</span>
//                 </div>
//             </div>

//             {/* Bootstrap Modal */}
//             <div className="modal" style={{ display: showModal ? 'block' : 'none' }}>
//                 <div className="modal-dialog modal-dialog-centered">
//                     <div className="modal-content">
//                         <div className="modal-body">
//                             <div className=" _883856ad">
//                                 <div>You will receive</div>
//                                 <div><img src={cross} data-bs-dismiss="modal"
//                                     aria-label="Close"
//                                     style={{ height: '24px', width: '24px' }} onClick={handleModalClose} alt='' /></div>
//                             </div>
//                             <div className="x905656cc48b31b9b6b0d298486901-parent">
//                                 <div className="x905656cc48b31b9b6b0d298486901">0x905656cC48B31B9b6b0D298486901</div>
//                             </div>
//                             <div className='_883856ad'>
//                                 <div className='d-flex align-items-center'>
//                                     <div>Common bases</div>
//                                     <img
//                                         src={phquestion}
//                                         style={{ height: "20px", width: "20px" }}
//                                         alt=""
//                                     />
//                                 </div>
//                             </div>
//                             <div className='d-flex' style={{ gap: '0px 10px' }}>
//                                 <div className='crYogb'>
//                                     <img src='./images/sprint.png' height="23px" width="23px" alt="" />
//                                     <span>ETH</span>
//                                 </div>
//                                 <div className='crYogb'>
//                                     <img src='https://raw.githubusercontent.com/Uniswap/assets/master/blockchains/ethereum/assets/0x6B175474E89094C44Da98b954EedeAC495271d0F/logo.png' height="23px" width="23px" alt="" />
//                                     <span>DAI</span>
//                                 </div>
//                             </div>
//                             <div style={{ borderBottom: '1px solid #515151 ' }}>
//                                 <div className="token-name-parent">
//                                     <div className="token-name">Token Name</div>
//                                     <div className="pharrow-down-wrapper">
//                                         <img className="pharrow-down-icon" alt="" src={downarrow} style={{ height: '20px', width: '20px' }} />
//                                     </div>
//                                 </div>
//                                 <div className='_883856ad mb-5'>
//                                     <div className='d-flex align-items-center' style={{ gap: '0px 10px' }}>
//                                         <img
//                                             src={phquestion}
//                                             style={{ height: "24px", width: "24px" }}
//                                             alt=""
//                                         />
//                                         <div>
//                                             <div>Token1</div>
//                                             <div className="found-by-address-parent">
//                                                 <div className="found-by-address">Found by address</div>
//                                                 <div className="add">(Add)</div>
//                                             </div>
//                                         </div>
//                                     </div>
//                                     <div>
//                                         31000000
//                                     </div>
//                                 </div>
//                             </div>
//                             <div className="select-a-list-parent">
//                                 <div className="select-a-list">Select a list</div>
//                             </div>
//                         </div>

//                     </div>
//                 </div>
//             </div>
//         </>
//     );
// };

// export default ImportPool;
import React, { useContext, useState } from 'react';
import pharrow from "../Assets/images2/ph_arrow-down.png";
import phquestion from "../Assets/images2/ph_question.png";
import plus from "../Assets/images2/tdesign_swap.png";
import MyNavbar from '../Component/MyNavbar';
import { Link } from 'react-router-dom';
import cross from '../Assets/images2/radix-icons_cross-2.svg';
import downarrow from '../Assets/images2/downarrow.png'
import Context from '../Context/Context';
const ImportPool = () => {
    const [showModal, setShowModal] = useState(false);
    const [showPool , setShowPool]= useState(false);
    const {selectedNetwork,setSelectedNetwork,}=useContext(Context);

    const handleSelectNetwork = (network) => {
        setSelectedNetwork(network);
      };
    const handleModalClose = () => setShowModal(false);
    const handleModalShow = () => setShowModal(true);

    const manage = ()=>{
        setShowPool(true);
    }
    console.log(showPool);
    return (
        <>
       <MyNavbar  selectedNetwork={selectedNetwork} onSelectNetwork={ handleSelectNetwork}/>
            <div className="d-flex col-md-4 col-sm-4 mx-auto mt-4  py-3 glassmorphism  align-items-center flex-column" style={{ border: " 1px solid #646464", boxShadow: '7px 66px 57.900001525878906px 0px rgba(0, 0, 0, 0.2)' }}>
                <div className="swapoption d-flex justify-content-between mt-3 align-items-center">
                    <Link to='/pool'> <img src={pharrow} style={{ height: "20px", width: "20px" }} alt="" /></Link>
                    <button className="swaptext">Import Pool</button>
                    <img
                        src={phquestion}
                        style={{ height: "20px", width: "20px" }}
                        alt=""
                    />
                </div>
                <button onClick={handleModalShow} className='swapoption import-pool-parent  morphism d-flex justify-content-between align-items-center px-3 mt-2'>
                    <div>
                        <img src="./images/sprint.png" height="23px" width="23px" alt="" />
                        <span className="text-light ms-2">ETH</span>
                    </div>
                    <img
                        src="/images/dropdown.png"
                        height="23px"
                        width="23px"
                        alt=""
                    />
                </button >
                <div className='swapoption d-flex justify-content-center align-items-center'>
                    <button className="px-1">
                        <img
                            src={plus}
                            className="p-1"
                            height="36px"
                            width="36px"
                            alt=""
                        />
                    </button>
                </div>
                <button onClick={()=>{handleModalShow();manage();}} className='swapoption import-pool-parent morphism d-flex justify-content-between align-items-center px-3 '>
                    <div>
                        <span className="text-light ms-2">Select a Token</span>
                    </div>
                    <img
                        src="/images/dropdown.png"
                        height="23px"
                        width="23px"
                        alt=""
                    />
                </button >
                {showPool===false?<p></p>:
                <div className=' text-center mt-2'>
                      <div className='pool-found'>Pool Found!</div>
                      <Link  to='/manage=Pool' className='manage-this-pool'>Manage this pool.</Link>
                </div> }
                <div className='swapoption mb-4 import-pool-parent d-flex justify-content-center morphism mt-2 p-4 align-items-center'>
                    <span className='select-a-token'>Select a token to find your liquidity</span>
                </div>
            </div>

            {/* Bootstrap Modal */}
            <div className="modal" style={{ display: showModal ? 'block' : 'none' }}>
                <div className="modal-dialog modal-dialog-centered">
                    <div className="modal-content">
                        <div className="modal-body">
                            <div className=" _883856ad">
                                <div>You will receive</div>
                                <div><img src={cross} data-bs-dismiss="modal"
                                    aria-label="Close"
                                    style={{ height: '24px', width: '24px' }} onClick={handleModalClose} alt='' /></div>
                            </div>
                            <div className="x905656cc48b31b9b6b0d298486901-parent">
                                <div className="x905656cc48b31b9b6b0d298486901">0x905656cC48B31B9b6b0D298486901</div>
                            </div>
                            <div className='_883856ad'>
                                <div className='d-flex align-items-center'>
                                    <div>Common bases</div>
                                    <img
                                        src={phquestion}
                                        style={{ height: "20px", width: "20px" }}
                                        alt=""
                                    />
                                </div>
                            </div>
                            <div className='d-flex' style={{ gap: '0px 10px' }}>
                                <div className='crYogb'>
                                    <img src='./images/sprint.png' height="23px" width="23px" alt="" />
                                    <span>ETH</span>
                                </div>
                                <div className='crYogb'>
                                    <img src='https://raw.githubusercontent.com/Uniswap/assets/master/blockchains/ethereum/assets/0x6B175474E89094C44Da98b954EedeAC495271d0F/logo.png' height="23px" width="23px" alt="" />
                                    <span>DAI</span>
                                </div>
                            </div>
                            <div style={{ borderBottom: '1px solid #515151 ' }}>
                                <div className="token-name-parent">
                                    <div className="token-name">Token Name</div>
                                    <div className="pharrow-down-wrapper">
                                        <img className="pharrow-down-icon" alt="" src={downarrow} style={{ height: '20px', width: '20px' }} />
                                    </div>
                                </div>
                                <div className='_883856ad mb-5'>
                                    <div className='d-flex align-items-center' style={{ gap: '0px 10px' }}>
                                        <img
                                            src={phquestion}
                                            style={{ height: "24px", width: "24px" }}
                                            alt=""
                                        />
                                        <div>
                                            <div>Token1</div>
                                            <div className="found-by-address-parent">
                                                <div className="found-by-address">Found by address</div>
                                                <div className="add">(Add)</div>
                                            </div>
                                        </div>
                                    </div>
                                    <div>
                                        31000000
                                    </div>
                                </div>
                            </div>
                            <div className="select-a-list-parent">
                                <div className="select-a-list">Select a list</div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </>
    );
};

export default ImportPool;
