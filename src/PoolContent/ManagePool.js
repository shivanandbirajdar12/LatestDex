import React, { useContext, useState } from 'react'
import { Link } from 'react-router-dom'
import MyNavbar from '../Component/MyNavbar'
import pharrowimg from '../Assets/images2/diagonalarrow.png'
import phquestion from "../Assets/images2/ph_question.png";
import managearrow from '../Assets/images2/managearrow.png'
import Context from '../Context/Context';
const ManagePool = () => {

    const [accordionOpen, setAccordionOpen] = useState(false);
    const { selectedNetwork, setSelectedNetwork, } = useContext(Context);

    const handleSelectNetwork = (network) => {
        setSelectedNetwork(network);
    };

    const toggleAccordion = () => {
        setAccordionOpen(!accordionOpen);
    };
    return (
        <div>
            <MyNavbar selectedNetwork={selectedNetwork} onSelectNetwork={handleSelectNetwork} />

            <div className='container' style={{ marginTop: '85px' }}>
                <div className='col-md-6 mx-auto  glassmorphism pt-1'>
                    <p className='liquidity-provider-rewards m-0'>Liquidity provider rewards</p>
                    <p className='liquidity-providers-earn'>Liquidity providers earn a 0.25% fee on all trades proportional to their share of the pool. Fees are added to the pool, accrue in real time and can be claimed by withdrawing your liquidity.</p>
                </div>
                <div className='col-md-6 mx-auto mt-4 d-flex justify-content-between px-2'>
                    <div><p className='your-liquidity'>Your Liquidity</p></div>
                    <div className='d-flex' style={{ gap: '0px 20px' }}>
                        <Link to='/pool=create pair'  > <button type='button' className="create-a-pair">Create a Pair</button></Link>
                        <Link to='/pool=add Liquidty' ><button type='button' className="add-liquidity">Add Liquidity</button></Link>
                    </div>
                </div>
                <div className='col-md-6 mx-auto mt-4 '>
                    <div className="account-analytics-and-assured-parent">
                        <div className="account-analytics-and">Account Analytics and assured fees</div>
                        <img className="pharrow-down-icon" alt="" src={pharrowimg} />
                    </div>
                </div>
                <div className='col-md-6 mx-auto mt-4 px-2 p-0  glassmorphism '>
                    <div className='_883856ad ' onClick={toggleAccordion}>
                        <div className='d-flex'>
                            <img alt='' src={phquestion} style={{ height: '24px', width: '24px' }} />
                            <div className='token1'>Token1 /</div>
                            <img alt='' src={phquestion} style={{ height: '24px', width: '24px' }} />
                            <div className='token1'>Token2</div>
                        </div>
                        <div className='d-flex align-items-center'>
                            <div className='add'>Manage</div>
                            <img className={accordionOpen ? ' ms-2 rotatedarrow' : 'ms-2'} alt='' src={managearrow} />
                        </div>
                    </div>

                    {accordionOpen && (
                        <>
                            <div className='_883856ad'>
                                <div>Your pool tokens</div>
                                <div>141400</div>
                            </div>
                            <div className='_883856ad'>
                                <div>Pooled Token1:</div>
                                <div>99999.9</div>
                            </div>
                            <div className='_883856ad'>
                                <div>Pooled Token2:</div>
                                <div>19999.9</div>
                            </div>
                            <div className='_883856ad'>
                                <div>Your pool share</div>
                                <div>100.00%</div>
                            </div>
                            <div className='_883856ad'>
                                <div className='account-analytics-and-assured-parent text-center ' style={{ padding: '4px 0px', justifyContent: 'center', alignItems: 'center' }}>
                                    <div className='account-analytics-and'>Account Analytics and assured fees</div>
                                    <img className='pharrow-down-icon' alt='' src={pharrowimg} style={{ height: '20px', width: '20px', marginLeft: '5px' }} />
                                </div>
                            </div>
                            <div className='_883856ad' style={{ gap: '0px 10px' }}>

                                <Link to='/pool=add Liquidty' className='w-100 connect-button ' >
                                    <button style={{ color: '#424242' }}>Add</button></Link>
                                <Link to='/remove=liquidty' className="connect-button w-100"><button style={{ color: '#424242' }} >
                                    Remove
                                </button></Link>
                            </div>
                        </>
                    )}
                </div>
                <div className='col-md-6 mx-auto mt-3 px-2 d-flex justify-content-center'>
                    <div className="dont-see-a">Don't see a pool you joined?</div>
                    <Link to='/pool=import Pool'> <p className="import-it ms-2">Import it.</p></Link>
                </div>
            </div>
        </div>
    )
}

export default ManagePool
