import React from 'react'
import '../Assets/CSS/liquiditybox.css'
import timeimg from '../Assets/images2/carbon_time.png'
const LiquidityParent = (props) => {
    return (
        <div>
            <div className='liquidity-parent glassmorphism'>
                <div className='d-flex liquiditytext align-items-center justify-content-between'>
                    <p>Volume</p>
                    <p className=' days' >{props.time}</p>
                </div>
                <p className='text-center  fs'>$64,099,370.221</p>
                <div className='d-flex liquiditytext align-items-center justify-content-between'>
                    <p className='m-0'>@orbs</p>
                    <p className='m-0 an-hour-ago' ><span ><img src={timeimg} alt='..'></img></span> an hour ago</p>
                </div>
            </div>
        </div>
    )
}

export default LiquidityParent
