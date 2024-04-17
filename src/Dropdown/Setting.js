import React from 'react'
import Component3 from '../Assets/images2/Component 3.png'
import octicon from '../Assets/images2/octicon_question-24.png'

const Setting = () => {
    return (
        <>
            <div className="setting setting1">
                <div className="setting-parent pb-4">
                    <div className="trendswapx-parent">
                        <div className="trendswapx">TrendswapX</div>
                        <div className="when-available-aggregates-container">
                            <p className="when-available-aggregates">when available, aggregates</p>
                            <p className="when-available-aggregates">liquidity sources for better prices</p>
                            <p className="and-gas-free-swaps-learn-more">
                                <span className="and-gas-free">{`and gas free swaps. `}</span>
                                <b className="learn-more">Learn more</b>
                            </p>
                        </div>
                    </div>
                    <div className="toggle-button">
                        <div className="toggle-button-child" />
                    </div>
                </div>
                <div className="frame-group">
                    <div className="frame-container ">
                        <div className="max-slippage-parent">
                            <div className="max-slippage">Max. slippage</div>
                            <img className="octiconquestion-24" alt="" src={octicon}  />
                        </div>
                        <div className="auto-parent">
                            <b className="auto">Auto</b>
                            <img className="component-3-icon" alt="" src={Component3} />
                        </div>
                    </div>
                    <div className="frame-container">
                        <div className="max-slippage-parent">
                            <div className="max-slippage">Transaction deadline</div>
                            <img className="octiconquestion-24" alt="" src={octicon} />
                        </div>
                        <div className="auto-parent">
                            <b className="auto">10m</b>
                            <img className="component-3-icon" alt="" src={Component3} />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Setting
