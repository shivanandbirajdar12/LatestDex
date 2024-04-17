import React from 'react'
import { Link } from 'react-router-dom'

const LiquidityReward = () => {
    return (
        <>
            <div className='container' style={{marginTop:'85px'}}>
                <div className='col-md-6 mx-auto  glassmorphism pt-1'>
                    <p className='liquidity-provider-rewards m-0'>Liquidity provider rewards</p>
                    <p className='liquidity-providers-earn'>Liquidity providers earn a 0.25% fee on all trades proportional to their share of the pool. Fees are added to the pool, accrue in real time and can be claimed by withdrawing your liquidity.</p>
                </div>
                <div className='col-md-6 mx-auto mt-4 d-flex justify-content-between px-2'>
                    <div><p className='your-liquidity'>Your Liquidity</p></div>
                    <div className='d-flex' style={{ gap: '0px 20px' }}>
                       <Link to='/pool=create pair'  > <button type='button' className="create-a-pair">Create a Pair</button></Link>
                        <Link to='/pool=add Liquidty' ><button type='button'  className="add-liquidity">Add Liquidity</button></Link>
                    </div>
                </div>
                <div className='col-md-6 mx-auto mt-4 px-2'>
                    <div className="no-liquidity-found-parent">
                        <p className="no-liquidity-found">No liquidity found</p>
                    </div>
                </div>
                <div className='col-md-6 mx-auto mt-3 px-2 d-flex justify-content-center'>
                <div className="dont-see-a">Don't see a pool you joined?</div>
                <Link to='/pool=import Pool'> <p className="import-it ms-2">Import it.</p></Link>
                </div>
            </div>

        </>
    )
}

export default LiquidityReward
