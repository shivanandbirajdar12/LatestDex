import React, { useState } from 'react'
import '../Assets/CSS/liquidtyhub.css'
import liquidtyimg1 from '../Assets/images2/liquidty1.png';
import liquidtyimg2 from '../Assets/images2/liquidty2.png';
import LiquidityTable from './LiquidityTable';
import backwardarrow from '../Assets/images2/backwardarrow.png'
import forwardarrow from '../Assets/images2/forwardarrow.png'
import LiquidityParent from '../LiquidtyContent/LiquidityParent';
import BarChart from '../Dropdown/BarChart';



const LiquidityHub = () => {
  const [timeFrameClass, setTimeFrameClass] = useState({
    D: 'd-wrapper',
    W: 'w-wrapper',
    p: 'd-wrapper',
    q: 'w-wrapper',
    r: 'w-wrapper',
    s: 'w-wrapper',
    t: 'w-wrapper',

  });

  const handleTimeFrameClick = (timeFrame) => {
    const updatedClass = Object.fromEntries(
      Object.entries(timeFrameClass).map(([key, value]) => [key, key === timeFrame ? 'd-wrapper' : 'w-wrapper'])
    );

    setTimeFrameClass(updatedClass);
  };
  return (
    <>

      <div className='container mt-3 d-flex p-0 align-items-center justify-content-start ' style={{ gap: '0px 40px' }}>
        <LiquidityParent time="Since 2023-09-18" />
        <LiquidityParent time="Last 30 days"/>
        <LiquidityParent time="Last 24 hours" />
      </div>
      <div className='container  glassmorphism  mt-5' style={{borderRadius:'16px'}} >
        <div className='d-flex align-items-start justify-content-between  px-3 '>
          <div >
            <p className='m-0 p-0' style={{ fontSize: '16px', color: '#C7CAD9' }}>Liquidity hub</p>
          </div>
          <div className="parent-frame ">
            <button className={timeFrameClass.p} onClick={() => handleTimeFrameClick('p')}>
              1M
            </button>
            <button className={timeFrameClass.q} onClick={() => handleTimeFrameClick('q')}>
              3M
            </button>
            <button className={timeFrameClass.r} onClick={() => handleTimeFrameClick('r')}>
              5M
            </button>
            <button className={timeFrameClass.s} onClick={() => handleTimeFrameClick('s')}>
              1Y
            </button>
            <button className={timeFrameClass.t} onClick={() => handleTimeFrameClick('t')}>
              All
            </button>
          </div>
        </div>
        <div className='px-3'>
          {/* <img src={liquidtyimg1} className='img-fluid mt-3' alt='' /> */}
          <BarChart/>
          </div>
      </div>
      <div className='container mt-5   glassmorphism' style={{borderRadius:'16px'}}>
        <div className='d-flex align-items-start justify-content-between px-3 '>
          <p className='m-0 p-0' style={{ fontSize: '16px', color: '#C7CAD9' }}>Value by Coin</p>
          <div className="arrowparent ">
            <img className="arrow me-3" alt="" src={backwardarrow} style={{height:'16px', width:'16px'}} />
            <img className="arrow" alt="" src={forwardarrow} style={{height:'16px', width:'16px'}} />
          </div>
        </div>
        <div className='row mb-4'>
          <div className='px-4'>
            <img src={liquidtyimg2} className='img-fluid' alt='' />
          </div>
          <div className='col-md-2'>

          </div>
        </div>
      </div>
      <div className='container mt-5 px-3  ' style={{backgroundColor:'rgba(10, 30, 39, 1)', borderRadius:'16px'}} >
        <div className='d-flex align-items-start justify-content-between mt-3  mx-4 p-2 px-3 ' >
          <p className='m-0 p-0' style={{ fontSize: '16px',fontWeight:'600', color: '#C7CAD9' }}>LH Swaps</p>
          <div className="arrowparent " >
            <img className="arrow me-3" alt="" src={backwardarrow} style={{height:'16px', width:'16px'}} />
            <img className="arrow" alt="" src={forwardarrow} style={{height:'16px', width:'16px'}} />
          </div>
        </div>
        <LiquidityTable />
      </div>
    </>
  )
}

export default LiquidityHub
