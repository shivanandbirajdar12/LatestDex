
// import React, { useContext, useState } from "react";
// import { Link } from "react-router-dom";
// import MyNavbar from "../Component/MyNavbar";
// import NewPosition from "./NewPosition";
// import plus from "../Assets/images2/tdesign_swap.png";
// import pharrow from "../Assets/images2/ph_arrow-down.png";
// import phquestion from "../Assets/images2/ph_question.png";
// import cross from '../Assets/images2/radix-icons_cross-2.svg';
// import PlusComponent from "../Dropdown/PlusComponent";
// import { Modal } from 'react-bootstrap';
// import SelectToken from "../Dropdown/SelectToken";
// import PricesShare from "./PricesShare";
// import Context from "../Context/Context";
// const AddLiquidty = (props) => {

//   const {selectedNetwork,setSelectedNetwork,selectedTokenAddress}=useContext(Context);
//   const [accesscomponents, setAccessComponents] = useState(false);
//   const [showModal, setShowModal] = useState(false);
//   const [showModal1, setShowModal1] = useState(false);
//   const [showModal2, setShowModal2] = useState(false);
//   const [selectedTokenImage1, setSelectedTokenImage1] = useState('');
//   const [selectedTokenTicker1, setSelectedTokenTicker1] = useState('');
//   const [selectedTokenImage2, setSelectedTokenImage2] = useState('');
//   const [selectedTokenTicker2, setSelectedTokenTicker2] = useState('');

    
//  console.log("selectedTokenAddress",selectedTokenAddress);
//   const handleSelectNetwork = (network) => {
//     setSelectedNetwork(network);
//   };
//   const openModal = (buttonId) => {
//     if (buttonId === 1) {
//       setShowModal1(true);
//     } else if (buttonId === 2) {
//       setShowModal2(true);
//     }
//   };

//   const closeModal = (buttonId) => {
//     if (buttonId === 1) {
//       setShowModal1(false);
//     } else if (buttonId === 2) {
//       setShowModal2(false);
//     }
//   };

//   const handleTokenSelect = (image, ticker, buttonId) => {
//     if (buttonId === 1) {
//       if (selectedTokenImage1 === image) {
//         setSelectedTokenImage1('');
//         setSelectedTokenTicker1('');
//       } else {
//         setSelectedTokenImage1(image);
//         setSelectedTokenTicker1(ticker);
//       }
//       closeModal(1);
//     } else if (buttonId === 2) {
//       if (selectedTokenImage2 === image) {
//         setSelectedTokenImage2('');
//         setSelectedTokenTicker2('');
//       } else {
//         setSelectedTokenImage2(image);
//         setSelectedTokenTicker2(ticker);

//       }
//       closeModal(2);
//     }
//   };
//   console.log(props.selectedTokenImage)
//   const isTokenSelectedForButton = (buttonId) => {
//     if (buttonId === 1) {
//       return !!selectedTokenImage1 && !!selectedTokenTicker1;
//     } else if (buttonId === 2) {
//       return !!selectedTokenImage2 && !!selectedTokenTicker2;
//     }
//   };

//   const buttonStyle = {
//     backgroundColor: isTokenSelectedForButton(1) ? '#1f3c4a' : '',
//   };

//   const button2Style = {
//     backgroundColor: isTokenSelectedForButton(2) ? '#1f3c4a' : '',
//   };

//   return (
//     <>
//       <MyNavbar  selectedNetwork={selectedNetwork} onSelectNetwork={ handleSelectNetwork}/>
//       <div className="jRlUBU mt-4">
//         <div className="khwJOa glassmorphism mt-2 ">
//           <div className="swapoption d-flex justify-content-between mt-3 align-items-center">
//             <Link to="/pool">
//               <img
//                 src={pharrow}
//                 style={{ height: "20px", width: "20px" }}
//                 alt=""
//               />
//             </Link>
//             <button className="swaptext">Add Liquidity</button>
//             <img
//               src={phquestion}
//               style={{ height: "20px", width: "20px" }}
//               alt=""
//             />
//           </div>
//           <div id='swap-page' className='mt-3'>
//             <div className='enpFfZ '>
//               <div className='iUsjHb mt-3 hhoFBL1 p-2 morphism'>
//                 <div className='d-flex' style={{ gap: '0 130px' }}>
//                   <div className='hhoFBL p-2'>
//                     <p className="m-0 text-light ms-2">You pay</p>
//                     <input
//                       type="text"
//                       className="currency-input"
//                       placeholder="0"
//                     />
//                   </div>
//                   <div className='text-light d-flex flex-column align-item-center justify-content-center'>
//                     <button className="max-parent max-parent-swap my-0" >
//                       <p className="max my-0">MAX</p>
//                     </button>
//                   </div>
//                 </div>
//                 <div className='me-2 mt-2'>
//                   <button className="we" type="button" onClick={() => openModal(1)} style={buttonStyle}>
//                     {selectedTokenImage1 ? (
//                       <>
//                         <img
//                           src={selectedTokenImage1}
//                           style={{height:'23px', width:'23px', borderRadius:'50%'}}
//                           alt=""
//                         />
//                         <span className="text-light ms-2">{selectedTokenTicker1}</span>
//                       </>
//                     ) : (
//                       <span className="text-light ms-2">
//                         <img
//                           src="./images/sprint.png"
//                           height="23px"
//                           width="23px"
//                           alt=""
//                         />
//                         <span className="text-light ms-2">ETH</span>
//                       </span>
//                     )}
//                     <img
//                       src="/images/dropdown.png"
//                       height="23px"
//                       width="23px"
//                       alt=""
//                     />
//                   </button>
//                   <p className="ms-4 mt-2 mb-0 text-light ">balance: 0</p>
//                 </div>
//               </div>
//               <PlusComponent img={plus} />
//               <div className='iUsjHb morphism hhoFBL1 p-2 ' id='swapbottom' >
//                 <div className='d-flex' style={{ gap: '0 130px' }} >
//                   <div className='hhoFBL p-2'>
//                     <p className="m-0 text-light ms-2">You Recive</p>
//                     <input
//                       type="text"
//                       className="currency-input"
//                       placeholder="0"
//                     />
//                   </div>
//                   <div className='text-light d-flex flex-column align-item-center justify-content-center'>
//                     <button className="max-parent max-parent-swap my-0">
//                       <p className="max my-0">MAX</p>
//                     </button>
//                   </div>
//                 </div>
//                 <div className='me-2 mt-2'>
//                   <button className="ws" type="button" onClick={() => openModal(2)}  style={button2Style}>
//                     {selectedTokenImage2 ? (
//                       <>
//                         <img
//                           src={selectedTokenImage2}
//                           style={{height:'23px', width:'23px', borderRadius:'50%'}}
//                           alt=""
//                         />
//                         <span className="text-light ms-2">{selectedTokenTicker2}</span>
//                       </>
//                     ) : (
//                       <span className="text-light ms-2">Select Token</span>
//                     )}
//                     <img
//                       src="/images/dropdown.png"
//                       height="23px"
//                       width="23px"
//                       alt=""
//                     />
//                   </button>
//                   <p className="ms-4 mt-2 mb-0 text-light">balance: 0</p>
//                 </div>
//               </div>
//             </div>
//           </div>
//           {selectedTokenTicker2 ===''?<div style={{display:'none'}}></div>:<PricesShare/>} 
//           <button className="mt-2 w-100 ">
//             {accesscomponents ? (
//               <button className="connect-button w-100">
//                 Supply
//               </button>
//             ) : (
//               <button className="invalid-pair morphism mt-2 w-100">
//                 Enter Amount
//               </button>
//             )}
//           </button>
//         </div>
//         {accesscomponents ? (
//           <div
//             className="khwJOa glassmorphism mt-2 mb-2"
//             style={{ border: "none" }}
//           >
//             <NewPosition />
//           </div>
//         ) : (
//           <div style={{ display: "none" }}></div>
//         )}
//       </div>
//       <div
//         className={`modal fade ${showModal ? "show" : ""}`}
//         style={{
//           display: showModal ? "block" : "none",
//           zIndex: "99999",
//         }}
//         id="supplyModal"
//         tabIndex="-1"
//         aria-labelledby="supplyModalLabel"
//         aria-hidden="true"
//       >
//         <div className="modal-dialog modal-dialog-centered">
//           <div className="modal-content">

//             <div class="modal-body">
//               <div className=" _883856ad">
//                 <div>You will receive</div>
//                 <div><img src={cross} data-bs-dismiss="modal"
//                   aria-label="Close"
//                   style={{ height: '24px', width: '24px' }} alt='' /></div>
//               </div>

//               <div className="p-2 flex-column">
//                 <div className="_883856tt ">
//                   <div className="div fs-1">141421</div>
//                   <img alt="" src={phquestion} style={{ height: '24px', width: '24px' }} />
//                   <img alt="" src={phquestion} style={{ height: '24px', width: '24px' }} />
//                 </div>
//                 <div className="_883856tt">Token1/Token2 Pool Tokens</div>
//               </div>
//               <div className=" _883856ad">
//                 <div>Token1 Deposited</div>
//                 <div className="d-flex">
//                   <img src={phquestion} style={{ height: "24px", width: "24px" }} alt="" />
//                   <div>141400</div>
//                 </div>
//               </div>
//               <div className=" _883856ad">
//                 <div>Token2 Deposited</div>
//                 <div className="d-flex">
//                   <img src={phquestion} style={{ height: "24px", width: "24px" }} alt="" />
//                   <div>200000</div>
//                 </div>
//               </div>
//               <div className=" _883856ad">
//                 <div >Rates:</div>
//                 <div>1 Token1 = 2 Token2</div>
//               </div>
//               <div className=" _883856ad">
//                 <div ></div>
//                 <div>1 Token2 = 0.5Token1</div>
//               </div>
//               <div className=" _883856ad">
//                 <div >Share of Pool:</div>
//                 <div>100%</div>
//               </div>
//               <button className="connect-button mt-5 w-100" >
//                 {`Create Supply`}
//               </button>
//             </div>
//           </div>
//         </div>
//       </div>
//       <Modal
//         show={showModal1}
//         onHide={() => closeModal(1)}
//         style={{ maxWidth: '400px', marginLeft: '35%', borderRadius: '15px' }}
//         dialogClassName='modal-dialog-centered'>
//         <Modal.Body className='p-0 modal-body'>
//           <SelectToken onSelectToken={(image, ticker) => handleTokenSelect(image, ticker, 1)} />
//         </Modal.Body>
//       </Modal>

//       <Modal
//         show={showModal2}
//         onHide={() => closeModal(2)}
//         style={{ maxWidth: '400px', marginLeft: '35%', borderRadius: '15px' }}
//         dialogClassName='modal-dialog-centered'>
//         <Modal.Body className='p-0 modal-body'>
//           <SelectToken onSelectToken={(image, ticker) => handleTokenSelect(image, ticker, 2)} />
//         </Modal.Body>
//       </Modal>
//     </>
//   );
// };

// export default AddLiquidty;
import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import MyNavbar from "../Component/MyNavbar";
import NewPosition from "./NewPosition";
import plus from "../Assets/images2/tdesign_swap.png";
import pharrow from "../Assets/images2/ph_arrow-down.png";
import phquestion from "../Assets/images2/ph_question.png";
import cross from '../Assets/images2/radix-icons_cross-2.svg';
import PlusComponent from "../Dropdown/PlusComponent";
import { Modal } from 'react-bootstrap';
import SelectToken from "../Dropdown/SelectToken";
import PricesShare from "./PricesShare";
import Context from "../Context/Context";

const AddLiquidty = (props) => {
  const { selectedNetwork, setSelectedNetwork, selectedTokenAddress } = useContext(Context);
  const [accesscomponents, setAccessComponents] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [showModal1, setShowModal1] = useState(false);
  const [showModal2, setShowModal2] = useState(false);
  const [selectedTokenImage1, setSelectedTokenImage1] = useState('');
  const [selectedTokenTicker1, setSelectedTokenTicker1] = useState('');
  const [selectedTokenImage2, setSelectedTokenImage2] = useState('');
  const [selectedTokenTicker2, setSelectedTokenTicker2] = useState('');

  
const [showSupplyModal, setShowSupplyModal] = useState(false);

// Add this function to handle opening the supply modal
const handleOpenSupplyModal = () => {
  setShowSupplyModal(true);
};

  console.log(selectedTokenAddress,"selectedTokenAddress");
  const handleSelectNetwork = (network) => {
    setSelectedNetwork(network);
  };

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
      if (selectedTokenImage2 === image && selectedTokenTicker2 === ticker) {
        console.log("Cannot select the same token as button 2.");
        return;
      }
  
      if (selectedTokenImage1 === image) {
        setSelectedTokenImage1('');
        setSelectedTokenTicker1('');
      } else {
        setSelectedTokenImage1(image);
        setSelectedTokenTicker1(ticker);
      }
      closeModal(1);
    } else if (buttonId === 2) {
      if (selectedTokenImage1 === image && selectedTokenTicker1 === ticker) {
        console.log("Cannot select the same token as button 1.");
        return;
      }
  
      if (selectedTokenImage2 === image) {
        setSelectedTokenImage2('');
        setSelectedTokenTicker2('');
      } else {
        setSelectedTokenImage2(image);
        setSelectedTokenTicker2(ticker);
      }
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

  const button2Style = {
    backgroundColor: isTokenSelectedForButton(2) ? '#1f3c4a' : '',
  };

  return (
    <>
      <MyNavbar selectedNetwork={selectedNetwork} onSelectNetwork={handleSelectNetwork} />
      <div className="jRlUBU mt-4">
        <div className="khwJOa glassmorphism mt-2 ">
          <div className="swapoption d-flex justify-content-between mt-3 align-items-center">
            <Link to="/pool">
              <img
                src={pharrow}
                style={{ height: "20px", width: "20px" }}
                alt=""
              />
            </Link>
            <button className="swaptext">Add Liquidity</button>
            <img
              src={phquestion}
              style={{ height: "20px", width: "20px" }}
              alt=""
            />
          </div>
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
                    />
                  </div>
                  <div className='text-light d-flex flex-column align-item-center justify-content-center'>
                    <button className="max-parent max-parent-swap my-0" >
                      <p className="max my-0">MAX</p>
                    </button>
                  </div>
                </div>
                <div className='me-2 mt-2'>
                  <button className="we" type="button" onClick={() => openModal(1)} style={buttonStyle}>
                    {selectedTokenImage1 ? (
                      <>
                        <img
                          src={selectedTokenImage1}
                          style={{ height: '23px', width: '23px', borderRadius: '50%' }}
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
                  <p className="ms-4 mt-2 mb-0 text-light ">balance: 0</p>
                </div>
              </div>
              <PlusComponent img={plus} />
              <div className='iUsjHb morphism hhoFBL1 p-2 ' id='swapbottom' >
                <div className='d-flex' style={{ gap: '0 130px' }} >
                  <div className='hhoFBL p-2'>
                    <p className="m-0 text-light ms-2">You Receive</p>
                    <input
                      type="text"
                      className="currency-input"
                      placeholder="0"
                    />
                  </div>
                  <div className='text-light d-flex flex-column align-item-center justify-content-center'>
                    <button className="max-parent max-parent-swap my-0">
                      <p className="max my-0">MAX</p>
                    </button>
                  </div>
                </div>
                <div className='me-2 mt-2'>
                  <button className="ws" type="button" onClick={() => openModal(2)} style={button2Style}>
                    {selectedTokenImage2 ? (
                      <>
                        <img
                          src={selectedTokenImage2}
                          style={{ height: '23px', width: '23px', borderRadius: '50%' }}
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
                  <p className="ms-4 mt-2 mb-0 text-light">balance: 0</p>
                </div>
              </div>
            </div>
          </div>
          {selectedTokenTicker2 === '' ? <div style={{ display: 'none' }}></div> : <PricesShare />}
          <button className="mt-2 w-100 ">
            {accesscomponents ? (
              <button className="connect-button w-100" onClick={handleOpenSupplyModal}>
                Supply
              </button>
            ) : (
                <button className="invalid-pair morphism mt-2 w-100">
                  Enter Amount
                </button>
              )}
          </button>
        </div>
        {accesscomponents ? (
          <div
            className="khwJOa glassmorphism mt-2 mb-2"
            style={{ border: "none" }}
          >
            <NewPosition />
          </div>
        ) : (
            <div style={{ display: "none" }}></div>
          )}
      </div>
      <div
      className={`modal fade ${showSupplyModal ? "show" : ""}`}
      style={{
        display: showSupplyModal ? "block" : "none",
        zIndex: "99999",
      }}
      id="supplyModal"
      tabIndex="-1"
      aria-labelledby="supplyModalLabel"
      aria-hidden="true"
    >
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">

            <div className="modal-body">
              <div className=" _883856ad">
                <div>You will receive</div>
                <div><img src={cross} data-bs-dismiss="modal"
                  aria-label="Close"
                  style={{ height: '24px', width: '24px' }} alt='' /></div>
              </div>

              <div className="p-2 flex-column">
                <div className="_883856tt ">
                  <div className="div fs-1">141421</div>
                  <img alt="" src={phquestion} style={{ height: '24px', width: '24px' }} />
                  <img alt="" src={phquestion} style={{ height: '24px', width: '24px' }} />
                </div>
                <div className="_883856tt">Token1/Token2 Pool Tokens</div>
              </div>
              <div className=" _883856ad">
                <div>Token1 Deposited</div>
                <div className="d-flex">
                  <img src={phquestion} style={{ height: "24px", width: "24px" }} alt="" />
                  <div>141400</div>
                </div>
              </div>
              <div className=" _883856ad">
                <div>Token2 Deposited</div>
                <div className="d-flex">
                  <img src={phquestion} style={{ height: "24px", width: "24px" }} alt="" />
                  <div>200000</div>
                </div>
              </div>
              <div className=" _883856ad">
                <div >Rates:</div>
                <div>1 Token1 = 2 Token2</div>
              </div>
              <div className=" _883856ad">
                <div ></div>
                <div>1 Token2 = 0.5Token1</div>
              </div>
              <div className=" _883856ad">
                <div >Share of Pool:</div>
                <div>100%</div>
              </div>
              <button className="connect-button mt-5 w-100" >
                {`Create Supply`}
              </button>
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
    </>
  );
};

export default AddLiquidty;
