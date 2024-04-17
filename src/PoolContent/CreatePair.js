// import React, { useEffect, useState } from "react";
// import pharrow from "../Assets/images2/ph_arrow-down.png";
// import phquestion from "../Assets/images2/ph_question.png";
// import { Link } from "react-router-dom";
// import MyNavbar from "../Component/MyNavbar";
// import SwapComponent2 from "../Dropdown/SwapComponent2";
// import cross from '../Assets/images2/radix-icons_cross-2.svg';
// import TradePair from "./TradePair";
// import { ToastContainer, toast } from 'react-toastify'
// import 'react-toastify/dist/ReactToastify.css';
// import { useRef } from "react";
// import loadingimg from '../Assets/images2/Ellipse 7.png'

// const CreatePair = () => {
//   const [selectedTokenImage, setselectedTokenImage] = useState(false)
//   const [amountinput, setamountinput] = useState(null);
//   const [tokenapprove1, settokenapprove1] = useState(false);
//   const [tokenapprove2, settokenapprove2] = useState(false);
//   const [approvingtoken, setapprovingtoken] = useState(false);
//   const [tokenApproved, settokenApproved] = useState(false)
//   const Myref = useRef(null);
//   const [showOuterModal, setShowOuterModal] = useState(false);
//   const [showInnerModal, setShowInnerModal] = useState(false);

//   const handleCloseOuterModal = () => setShowOuterModal(false);
//   const handleCloseInnerModal = () => setShowInnerModal(false);
//   const handleShowInnerModal = () => {
//     setShowOuterModal(false);
//     setShowInnerModal(true);
//   };
//   const notify1 = () => toast("Approve Token 1");
//   const notify2 = () => toast('Approved Token 2');


//   const Handeltokenapprovel = () => {
//     setTimeout(() => {
//       settokenapprove1(true)
//     }, 5200)

//   };
//   const Handeltokenapprovel2 = () => {
//     setTimeout(() => {
//       settokenapprove2(true)
//       settokenApproved(true)
//     }, 5290);
//   }

//   const handelapprov = () => {
//     setapprovingtoken(true)
//   }
//   useEffect(() => {
//     if (Myref.current && Myref.current.style) {
//       if (tokenapprove2) {
//         Myref.current.focus();
//         Myref.current.style.display = "none";
//       } else {
//         Myref.current.style.display = "block";
//       }
//     }
//   }, [tokenapprove2])


//   useEffect(()=>{
//     if(amountinput==''){
//      setamountinput(null)
//     }
//  },[amountinput])

//   console.log('ref', Myref);
//   console.log('tokenapprove2', tokenapprove2)
//   console.log('tokenApproved', tokenApproved)
//   console.log('tokenapprove1', tokenapprove1)
//   return (
//     <>
//       <ToastContainer style={{ color: 'red' }} />
//       <MyNavbar />
//       <div className="jRlUBU mt-4">
//         <div className="khwJOa glassmorphism mt-2  p-4 py-3">
//           <div className="swapoption d-flex justify-content-between mt-3 align-items-center">
//             <Link to='/pool'>  <img src={pharrow} style={{ height: "20px", width: "20px" }} alt="" /></Link>
//             <button className="swaptext">Create a Pair</button>
//             <img
//               src={phquestion}
//               style={{ height: "20px", width: "20px" }}
//               alt=""
//             />
//           </div>
//           <SwapComponent2 selectedTokenImage={selectedTokenImage} setselectedTokenImage={setselectedTokenImage} amountinput={amountinput} setamountinput={setamountinput} />


//           {amountinput !== null ? <div className="d-flex mt-3" style={{ gap: '0px 10px' }}>

//             {tokenapprove1 === false ? <><button className="connect-button" style={{ width: '225px' }} value={tokenapprove1} onClick={() => { Handeltokenapprovel(); notify1(); }}>
//               Approve Token 1
//             </button> </>
//               : <div style={{ display: 'none' }}></div>}

//             {tokenapprove1 === false ? <button className="connect-button " style={{ width: '225px' }}>
//               Approve Token 2
//             </button> :
//               <button className="w-100">

//                 {tokenapprove2 === false ? <button className="w-100" onClick={() => { Handeltokenapprovel2(); notify2(); handelapprov(); }}>
//                   {approvingtoken !== false ? <button className="invalid-pair w-100 morphism">Approing Toking 2</button> : <button className="connect-button w-100">Approve Token 2 </button>}
//                 </button> :
//                   <button className=" w-100">
//                     {tokenApproved === true ? <button className="connect-button w-100" type="button" d onClick={() => setShowOuterModal(true)}>Supply</button> : <button className="invalid-pair morphism mt-2 mb-2 w-100">Supply</button>}
//                   </button>
//                 }

//               </button>}

//           </div> : <div></div>}

//           {selectedTokenImage === false ? <button className="invalid-pair morphism mt-2 mb-2 " style={{ width: "100%" }}>
//             Invalid Pair
//           </button> :
//             <button ref={Myref} className="invalid-pair morphism mt-2 mb-2 " style={{ width: "100%" }}>
//               {amountinput !== null ?
//                 'Supply' : 'Enter Amount'
//               }

//             </button>}

//         </div>
//         {selectedTokenImage !== true ? <div></div> : <TradePair />}
//       </div>
//       {/* Outer Modal */}
//       <div className={`modal ${showOuterModal ? 'show' : ''}`} tabIndex="-1" style={{ display: showOuterModal ? 'block' : 'none' }}>
//         <div className="modal-dialog modal-dialog-centered">
//           <div className="modal-content">
//             <div className="modal-body">
//               <div className=" _883856ad">
//                 <div>You are creating a pool</div>
//                 <div><img src={cross} onClick={handleCloseOuterModal} style={{ height: '24px', width: '24px' }} alt='' /></div>
//               </div>
//               <div className="_883856pp mt-2">
//                 <img alt="" src={phquestion} style={{ height: '24px', width: '24px' }} />
//                 <div className="token1">Token1 /</div>
//                 <img alt="" src={phquestion} style={{ height: '24px', width: '24px' }} />
//                 <div className="token1">Token2</div>
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
//               <button className="connect-button mt-5 w-100" onClick={handleShowInnerModal}>
//                 {`Create Pool & Supply`}
//               </button>
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* Inner Modal */}
//       <div className={`modal ${showInnerModal ? 'show' : ''}`} tabIndex="-1" style={{ display: showInnerModal ? 'block' : 'none' }}>
//         <div className="modal-dialog modal-dialog-centered">
//           <div className="modal-content">
//             <div className="modal-body">
//               <div className=" _883856ad">
//                 <div></div>
//                 <div><img src={cross} onClick={handleCloseInnerModal} alt="" /> </div>
//               </div>
//               <div className="text-center mt-4 mb-4" >
//                 <img src={loadingimg} style={{ height: '80px', width: '80px', animation: 'rotate 2s linear 4'}} alt="" />
//               </div>
//               <div className="waiting-for-confirmation-parent">
//                 <b className="waiting-for-confirmation">Waiting For Confirmation</b>
//                 <div className="supplying-100000-token1">{`Supplying 100000 Token1 and 200000 Token2 `}</div>
//                 <div className="confirm-this-transaction">Confirm this transaction in your wallet</div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div >
//     </>
//   );
// };

// export default CreatePair;
import React, { useContext, useEffect, useState } from "react";
import pharrow from "../Assets/images2/ph_arrow-down.png";
import phquestion from "../Assets/images2/ph_question.png";
import { Link } from "react-router-dom";
import MyNavbar from "../Component/MyNavbar";
import SwapComponent2 from "../Dropdown/SwapComponent2";
import cross from '../Assets/images2/radix-icons_cross-2.svg';
import TradePair from "./TradePair";
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';
import { useRef } from "react";
import loadingimg from '../Assets/images2/Ellipse 7.png'
import Context from "../Context/Context";

const CreatePair = () => {
  const {selectedNetwork,setSelectedNetwork,}=useContext(Context);
  const [selectedTokenImage, setselectedTokenImage] = useState(false)
  const [amountinput, setamountinput] = useState(null);
  const [tokenapprove1, settokenapprove1] = useState(false);
  const [tokenapprove2, settokenapprove2] = useState(false);
  const [approvingtoken, setapprovingtoken] = useState(false);
  const [tokenApproved, settokenApproved] = useState(false)
  const Myref = useRef(null);
  const [showOuterModal, setShowOuterModal] = useState(false);
  const [showInnerModal, setShowInnerModal] = useState(false);

  const handleSelectNetwork = (network) => {
    setSelectedNetwork(network);
  };

  const handleCloseOuterModal = () => setShowOuterModal(false);
  const handleCloseInnerModal = () => setShowInnerModal(false);
  const handleShowInnerModal = () => {
    setShowOuterModal(false);
    setShowInnerModal(true);
  };
  const notify1 = () => toast("Approve Token 1");
  const notify2 = () => toast('Approved Token 2');


  const Handeltokenapprovel = () => {
    setTimeout(() => {
      settokenapprove1(true)
    }, 5200)

  };
  const Handeltokenapprovel2 = () => {
    setTimeout(() => {
      settokenapprove2(true)
      settokenApproved(true)
    }, 5290);
  }

  const handelapprov = () => {
    setapprovingtoken(true)
  }
  useEffect(() => {
    if (Myref.current && Myref.current.style) {
      if (tokenapprove2) {
        Myref.current.focus();
        Myref.current.style.display = "none";
      } else {
        Myref.current.style.display = "block";
      }
    }
  }, [tokenapprove2])


  useEffect(()=>{
    if(amountinput==''){
     setamountinput(null)
    }
 },[amountinput])

  console.log('ref', Myref);
  console.log('tokenapprove2', tokenapprove2)
  console.log('tokenApproved', tokenApproved)
  console.log('tokenapprove1', tokenapprove1)
  return (
    <>
      <ToastContainer style={{ color: 'red' }} />
      <MyNavbar  selectedNetwork={selectedNetwork} onSelectNetwork={ handleSelectNetwork}/>
      <div className="jRlUBU mt-4">
        <div className="khwJOa glassmorphism mt-2  p-4 py-3">
          <div className="swapoption d-flex justify-content-between mt-3 align-items-center">
            <Link to='/pool'>  <img src={pharrow} style={{ height: "20px", width: "20px" }} alt="" /></Link>
            <button className="swaptext">Create a Pair</button>
            <img
              src={phquestion}
              style={{ height: "20px", width: "20px" }}
              alt=""
            />
          </div>
          <SwapComponent2 selectedTokenImage={selectedTokenImage} setselectedTokenImage={setselectedTokenImage} amountinput={amountinput} setamountinput={setamountinput} />


          {amountinput !== null ? <div className="d-flex mt-3" style={{ gap: '0px 10px' }}>

            {tokenapprove1 === false ? <><button className="connect-button" style={{ width: '225px' }} value={tokenapprove1} onClick={() => { Handeltokenapprovel(); notify1(); }}>
              Approve Token 1
            </button> </>
              : <div style={{ display: 'none' }}></div>}

            {tokenapprove1 === false ? <button className="connect-button " style={{ width: '225px' }}>
              Approve Token 2
            </button> :
              <button className="w-100">

                {tokenapprove2 === false ? <button className="w-100" onClick={() => { Handeltokenapprovel2(); notify2(); handelapprov(); }}>
                  {approvingtoken !== false ? <button className="invalid-pair w-100 morphism">Approing Toking 2</button> : <button className="connect-button w-100">Approve Token 2 </button>}
                </button> :
                  <button className=" w-100">
                    {tokenApproved === true ? <button className="connect-button w-100" type="button" d onClick={() => setShowOuterModal(true)}>Supply</button> : <button className="invalid-pair morphism mt-2 mb-2 w-100">Supply</button>}
                  </button>
                }

              </button>}

          </div> : <div></div>}

          {selectedTokenImage === false ? <button className="invalid-pair morphism mt-2 mb-2 " style={{ width: "100%" }}>
            Invalid Pair
          </button> :
            <button ref={Myref} className="invalid-pair morphism mt-2 mb-2 " style={{ width: "100%" }}>
              {amountinput !== null ?
                'Supply' : 'Enter Amount'
              }

            </button>}

        </div>
        {selectedTokenImage !== true ? <div></div> : <TradePair />}
      </div>
      {/* Outer Modal */}
      <div className={`modal ${showOuterModal ? 'show' : ''}`} tabIndex="-1" style={{ display: showOuterModal ? 'block' : 'none' }}>
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-body">
              <div className=" _883856ad">
                <div>You are creating a pool</div>
                <div><img src={cross} onClick={handleCloseOuterModal} style={{ height: '24px', width: '24px' }} alt='' /></div>
              </div>
              <div className="_883856pp mt-2">
                <img alt="" src={phquestion} style={{ height: '24px', width: '24px' }} />
                <div className="token1">Token1 /</div>
                <img alt="" src={phquestion} style={{ height: '24px', width: '24px' }} />
                <div className="token1">Token2</div>
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
              <button className="connect-button mt-5 w-100" onClick={handleShowInnerModal}>
                {`Create Pool & Supply`}
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Inner Modal */}
      <div className={`modal ${showInnerModal ? 'show' : ''}`} tabIndex="-1" style={{ display: showInnerModal ? 'block' : 'none' }}>
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-body">
              <div className=" _883856ad">
                <div></div>
                <div><img src={cross} onClick={handleCloseInnerModal} alt="" /> </div>
              </div>
              <div className="text-center mt-4 mb-4" >
                <img src={loadingimg} style={{ height: '80px', width: '80px', animation: 'rotate 2s linear 4'}} alt="" />
              </div>
              <div className="waiting-for-confirmation-parent">
                <b className="waiting-for-confirmation">Waiting For Confirmation</b>
                <div className="supplying-100000-token1">{`Supplying 100000 Token1 and 200000 Token2 `}</div>
                <div className="confirm-this-transaction">Confirm this transaction in your wallet</div>
              </div>
            </div>
          </div>
        </div>
      </div >
    </>
  );
};

export default CreatePair;
