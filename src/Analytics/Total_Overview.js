import React, { useState } from 'react';
import '../Assets/CSS/overview.css';
import OverviewTable1 from './OverviewTable1';
import OverviewTable2 from './OverviewTable2';
import forwardarrow from '../Assets/images2/iconamoon_arrow-up-2-thin (3).png'
import AnlyaticsBarchart2 from '../Dropdown/AnlyaticsBarchart2';
import AnalyticsLineChart1 from '../Dropdown/AnalyticsLineChart1';
const Overview = () => {
    const [timeFrameClass, setTimeFrameClass] = useState({
        p: 'jHHQTI',
        q: 'w-wrapper',
        r: 'w-wrapper',
        s: 'w-wrapper',
        t: 'w-wrapper',
        d: 'w-wrapper',
        m: 'w-wrapper'
    });
    const handleTimeFrameClick = (timeFrame) => {
        const updatedClass = Object.fromEntries(
            Object.entries(timeFrameClass).map(([key, value]) => [key, key === timeFrame ? 'jHHQTI' : 'w-wrapper'])
        );
        setTimeFrameClass(updatedClass);
    };

    const [secondclass, setSecondClass] = useState({
        p: 'jHHQTI',
        q: 'w-wrapper',
        r: 'w-wrapper',
        s: 'w-wrapper',
        t: 'w-wrapper',
        d: 'w-wrapper',
        m: 'w-wrapper'
    });
    const handleButton = (timeFrame) => {
        const updatedClass = Object.fromEntries(
            Object.entries(secondclass).map(([key, value]) => [key, key === timeFrame ? 'jHHQTI' : 'w-wrapper'])
        );
        setSecondClass(updatedClass);
    };
    const [firstclass, setFirstClass] = useState({
        p: 'jHHQTI',
        q: 'w-wrapper',

    });
    const handleFirstButton = (timeFrame) => {
        const updatedClass = Object.fromEntries(
            Object.entries(firstclass).map(([key, value]) => [key, key === timeFrame ? 'jHHQTI' : 'w-wrapper'])
        );
        setFirstClass(updatedClass);
    };


    return (
        <div>

            <div className='container d-flex'>
                <div className='bfQFKpc  vwKsb eAjRWn '>
                    <div className='fzzMop '>
                        <div className='xsFBJ indocQ gvVAeR col-md-6 col-sm-12'>
                            <div className='d-flex align-items-start justify-content-between  '>
                                <div >
                                    <p className='m-0 p-0' style={{ fontSize: '16px', color: '#C7CAD9' }}>Liquidity</p>
                                    <div className='d-flex align-items-center'>
                                        <b className="m" >$104.8M</b>
                                        <div className="parent1 ms-2 px-2">
                                            <b className="b">1.313%</b>
                                        </div>
                                    </div>
                                    <p className='m-0 p-0' style={{ fontSize: '16px', color: '#C7CAD9' }}>Feb 28 2024</p>
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
                            <div style={{ height: "100%", width: "100%" }}>
                                <AnalyticsLineChart1 />
                            </div>
                        </div>
                    </div>
                </div>
                <div className='bfQFKpc vwKsb eAjRWn '>
                    <div className='fzzMop '>
                        <div className='xsFBJ indocQ gvVAeR col-md-6 col-sm-12'>
                            <div className='d-flex align-items-center justify-content-between  '>
                                <p className='mb-0 ' style={{ fontSize: '16px', color: '#C7CAD9' }}>Volume(24hr)</p>
                                <div className='d-flex mb-1' style={{ gap: '0px 5px' }}>
                                    <button className={firstclass.p} onClick={() => handleFirstButton('p')}>
                                        1M
                                    </button>
                                    <button className={firstclass.q} onClick={() => handleFirstButton('q')}>
                                        3M
                                    </button>
                                </div>
                            </div>
                            <div className='d-flex align-items-center justify-content-between m-0 '>
                                <div className='d-flex align-items-center m-0 p-0'>
                                    <b className="m ">$104.8M</b>
                                    <div className="parent2 ms-2  px-2">
                                        <b className="b">1.313%</b>
                                    </div>
                                </div>
                                <div className="parent-frame"  >
                                    <button className={secondclass.p} onClick={() => handleButton('p')}>
                                        1M
                                    </button>
                                    <button className={secondclass.q} onClick={() => handleButton('q')}>
                                        3M
                                    </button>
                                    <button className={secondclass.r} onClick={() => handleButton('r')}>
                                        5M
                                    </button>
                                    <button className={secondclass.s} onClick={() => handleButton('s')}>
                                        1Y
                                    </button>
                                    <button className={secondclass.t} onClick={() => handleButton('t')}>
                                        All
                                    </button>
                                </div>
                            </div>
                            <div style={{ height: "100%", width: "100%" }}>
                                <AnlyaticsBarchart2 />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className=' container d-flex  mt-3 align-items-center justify-content-start' style={{ backgroundColor: 'rgba(15, 39, 51, 0.7)', height: '46px', borderRadius: '15px' }}>
                <div className="d-flex ms-3 " style={{ gap: '0px 40px' }}>
                    <div className="d-flex " style={{ gap: '0px 8px' }}>
                        <p className="parent m-0">24H Volume: $118,403,423.497</p>
                        <div className="wrapper">
                            <b className="b">+0.962%</b>
                        </div>
                    </div>
                    <div className="d-flex  " style={{ gap: '0px 8px' }}>
                        <p className="parent m-0">24h Fees: $78,608.634</p>
                        <div className="wrapper ">
                            <b className="b ">-9.894%</b>
                        </div>
                    </div>
                </div>


            </div>
            <div className='container d-flex align-items-center  justify-content-between mt-4' >
                <p className='m-0 top-tokens'>Top Tokens</p>
                <p className='m-0 see-all'>
                    See All
                    <span className='pagination-icon'><img src={forwardarrow} style={{ height: '16px', width: '16px' }} className='ms-2' alt='Pagination' /></span>
                </p>
            </div>
            <OverviewTable1 />
            <div className='container d-flex align-items-center justify-content-between mt-4' >
                <p className='m-0 top-tokens'>Top Pairs</p>
                <p className='m-0 see-all'>
                    See All
                    <span className='pagination-icon'><img src={forwardarrow} style={{ height: '16px', width: '16px' }} className='ms-2' alt='Pagination' /></span>
                </p>
            </div>
            < OverviewTable2 />

        </div>
    )
}

export default Overview
