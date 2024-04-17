import React from 'react'
import phstar from '../Assets/images2/ph_star-fill.png'
const TradePair = () => {
    return (
        <div>
            <div className=" _883856cp  mt-2   py-3">
                <div className="_883456cp morphism px-4 p-3">
                    <div className="phstar-fill-parent">
                        <img className="phstar-fill-icon" alt="" src={phstar} />
                        <div className="by-adding-liquidity-container ms-2">
                            <span>{`By adding liquidity `}</span>
                            <b className="youll-earn-025">you'll earn 0.25%</b>
                            <span> of all trades on this pair proportional to your share of the pool. Fees are added to the pool, accrue in real time and can be claimed by withdrawing your liquidity.</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default TradePair
