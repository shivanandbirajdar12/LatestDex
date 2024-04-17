import React, { useEffect, useState } from 'react';
import PlusComponent from './PlusComponent';
import SelectToken from './SelectToken';
import { Modal } from 'react-bootstrap';
import plus from "../Assets/images2/tdesign_swap.png";

import PricesShare from '../PoolContent/PricesShare';
import Context from '../Context/Context';



const SwapComponent2 = (props) => {
    const [showModal1, setShowModal1] = useState(false);
    const [showModal2, setShowModal2] = useState(false);
    const [selectedTokenImage1, setSelectedTokenImage1] = useState('');
    const [selectedTokenTicker1, setSelectedTokenTicker1] = useState('');
    const [selectedTokenImage2, setSelectedTokenImage2] = useState('');
    const [selectedTokenTicker2, setSelectedTokenTicker2] = useState('');
    const {selectedTokenImage,setselectedTokenImage,amountinput,setamountinput}=useState(Context);
    const [paydollar,setpaydollar]=useState();




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
                {props.setselectedTokenImage(true)}
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

   const handelpayamountinput=(e)=>{
    const inputvalue=e.target.value
    if(/^\d*\.?\d*$/.test(inputvalue)){
        if(props.selectedTokenImage===true){
      props.setamountinput(inputvalue)
        }
    }
}; 
   useEffect(()=>{
       if(props.selectedTokenImage===true){
       if(props.amountinput !==''){
         const dollaramount=parseFloat(props.amountinput)*83.17
         setpaydollar(dollaramount.toFixed(2))
       }else{
        setpaydollar('')
       }
    }
  },[props.amountinput]);
  console.log(props.amountinput)

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
                                value={props.amountinput}
                                    onChange={(e)=>handelpayamountinput(e)}
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
                            <p className="ms-4 mt-2 mb-0 text-light ">balance: 0</p>
                        </div>
                    </div>
                    <PlusComponent img={plus}/>
                    <div className='iUsjHb morphism hhoFBL1 p-2 ' id='swapbottom' >
                        <div className='d-flex' style={{ gap: '0 130px' }} >
                            <div className='hhoFBL p-2'>
                                <p className="m-0 text-light ms-2">You Recive</p>
                                <input
                                    type="text"
                                    className="currency-input"
                                    placeholder="0"
                                    value={setpaydollar?paydollar:0}
                                    onChange={(e)=>handelpayamountinput(e)}
                                    
                                />
                            </div>
                            <div className='text-light d-flex flex-column align-item-center justify-content-center'>
                                <button className="max-parent max-parent-swap my-0">
                                    <p className="max my-0">MAX</p>
                                </button>
                            </div>
                        </div>
                        <div className='me-2 mt-2'>
                            <button className="ws" type="button" onClick={() => openModal(2)}  style={button2Style}>
                                {selectedTokenImage2 ? (
                                    <>
                                        <img
                                            src={selectedTokenImage2}
                                            height="23px"
                                            width="23px"
                                            alt=""
                                            style={{borderRadius:"50%"}}
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

            
            {props.selectedTokenImage  ===true? <PricesShare/>:<div></div>}
        </div>
    );
}

export default SwapComponent2;