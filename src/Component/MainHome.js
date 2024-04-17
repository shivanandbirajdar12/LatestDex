import React from 'react';

import '../Assets/CSS/mainHome.css';
import { Link } from 'react-router-dom';
import homeimg from '../Assets/images2/MainHome.png'
import backimg from '../Assets/images2/MainHome1.png'
import twitter from '../Assets/images2/social media logos.png'
import telegram from '../Assets/images2/social media logos-1.png'
import github from '../Assets/images2/social media logos-2.png'
import instagram from '../Assets/images2/social media logos-3.png'
import tiktok from '../Assets/images2/social media logos-4.png'
import vector from '../Assets/images2/Vector.png'
import vector1 from '../Assets/images2/Vector (1).png'
import vector2 from '../Assets/images2/Vector (2).png'
import vector3 from '../Assets/images2/Vector (3).png'
import vector4 from '../Assets/images2/Vector (4).png'
import explorebuttonimg from '../Assets/images2/exlporebuttonimg.png'
import diagonalarrow from '../Assets/images2/ph_arrow-up.png'

const MainHome = () => {

    return (
        <>
            <div>
                <div className='container-fluid d-flex flex-column ' style={{ backgroundImage: `url(${backimg})`, backgroundSize: 'cover', overflowX: 'hidden' }}>
                    <div className='row ' >
                        <div className='col-md-10   offset-md-1 position-fixed d-flex align-items-center justify-content-center '>
                            <div className='col-md-6 mx-auto'>
                                <p className='rectangle-div mt-2'></p>
                            </div>
                            <div className='col-md-6 align-items-center d-flex justify-content-between'>
                                <div className="d-flex" style={{ gap: '0px 50px' }}>
                                    <p className='text-light'>Ecosystem</p>
                                    <p className='text-light'>Community</p>
                                </div>
                                <button className="launch-app-parent">
                                    <Link to='/ main' style={{ color: '#1b1c1e' }}> Launch App</Link></button>
                            </div>
                        </div>
                    </div>
                    <div className='row mt-5'>
                        <div className='col-md-5'>
                            <div className="hero-text">
                                <div className="trendswap-protocol">
                                    <span className="trendswap">TRENDSWAP</span>
                                    <span>{` `}</span>
                                    <b>PROTOCOL</b>
                                </div>
                                <div className="swap-earn-and-container">
                                    <p className="swap-earn-and">Swap, earn and build on the leading decentralized crypto trading</p>
                                    <p className="swap-earn-and">protocol.</p>
                                </div>
                                <div className="social-media-logos-parent mt-3">
                                    <img className="social-media-logos" alt="" src={twitter} />
                                    <img className="social-media-logos" alt="" src={telegram} />
                                    <img className="social-media-logos" alt="" src={github} />
                                    <img className="social-media-logos" alt="" src={instagram} />
                                    <img className="social-media-logos" alt="" src={tiktok} />
                                </div>
                            </div>
                        </div>
                        <div className='col-md-5'>
                            <img src={homeimg} className='img-fluid' alt='' />
                        </div>
                    </div>
                    <div className='row mt-4'>
                        <div className='col-md-12'>
                            <div className="frame-parent5">
                                <div className="t-parent">
                                    <b className="t">$1.7T+</b>
                                    <div className="trade-volume">Trade Volume</div>
                                </div>
                                <div className="t-parent">
                                    <b className="t">220M+</b>
                                    <div className="trade-volume">All Time Trades</div>
                                </div>
                                <div className="t-parent">
                                    <b className="t">300+</b>
                                    <div className="trade-volume">Integrations</div>
                                </div>
                                <div className="t-parent">
                                    <b className="t">4,400+</b>
                                    <div className="trade-volume">Community Delegates</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='container-fluid' style={{ background: 'linear-gradient(237.8deg, #0f171b, #486e81)', overflowX: 'hidden' }}>
                    <div className='row'>
                        <div className='col-md-10 mx-auto d-flex justify-content-between align-item-center pt-5'>
                            <div className="trendswap-ecosystem-parent col-md-6 pt-5">
                                <div className="trendswap-ecosystem">TRENDSWAP ECOSYSTEM</div>
                                <b className="a-growing-network-container">
                                    <p className="a-growing-network">{`A Growing Network of `}</p>
                                    <p className="a-growing-network">DeFi Apps.</p>
                                </b>
                                <div className="developers-traders-and-container">
                                    <p className="a-growing-network">Developers, traders, and liquidity</p>
                                    <p className="a-growing-network">providers participate together in a</p>
                                    <p className="a-growing-network">financial marketplace that is open and</p>
                                    <p className="a-growing-network">accessible to all.</p>
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="explore-overlay">
                                    <button className="explore-button shadow-lg">Explore <img src={diagonalarrow} alt='' style={{ height: '20px', width: '20px' }} /></button>
                                </div>
                                <img src={explorebuttonimg} alt='' className='img-fluid' />
                            </div>
                        </div>
                    </div>
                    <div className='row'>
                        <div className='col-md-10 mx-auto mt-4'>
                            <p>TRENDSWAP COMMUNITY</p>
                            <div className='d-flex justify-content-between flex-wrap'>
                                <div className="medialogo">
                                    <div className="twitter-inner">
                                        <div className="frame-child" />
                                    </div>
                                    <div className="frame-parent2">
                                        <div className="twitter-parent">
                                            <b className="twitter1">Twitter</b>
                                            <b className="uirahman92">@uirahman92</b>
                                        </div>
                                        <img className="social-media-logos2" alt="" src={vector} />
                                    </div>
                                </div>
                                <div className="medialogo">
                                    <div className="twitter-inner">
                                        <div className="frame-child" />
                                    </div>
                                    <div className="frame-parent2">
                                        <div className="twitter-parent">
                                            <b className="twitter1">Telegram</b>
                                            <b className="uirahman92">@uirahman92</b>
                                        </div>
                                        <img className="social-media-logos2" alt="" src={vector1} />
                                    </div>
                                </div>
                                <div className="medialogo">
                                    <div className="twitter-inner">
                                        <div className="frame-child" />
                                    </div>
                                    <div className="frame-parent2">
                                        <div className="twitter-parent">
                                            <b className="twitter1">Github</b>
                                            <b className="uirahman92">@uirahman92</b>
                                        </div>
                                        <img className="social-media-logos2" alt="" src={vector2} />
                                    </div>
                                </div>
                                <div className="medialogo">
                                    <div className="twitter-inner">
                                        <div className="frame-child" />
                                    </div>
                                    <div className="frame-parent2">
                                        <div className="twitter-parent">
                                            <b className="twitter1">Instagram</b>
                                            <b className="uirahman92">@uirahman92</b>
                                        </div>
                                        <img className="social-media-logos2" alt="" src={vector3} />
                                    </div>
                                </div>
                                <div className="medialogo">
                                    <div className="twitter-inner">
                                        <div className="frame-child" />
                                    </div>
                                    <div className="frame-parent2">
                                        <div className="twitter-parent">
                                            <b className="twitter1">Tiktok</b>
                                            <b className="uirahman92">@uirahman92</b>
                                        </div>
                                        <img className="social-media-logos2" alt="" src={vector4} />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='row'>
                        <div className='col-md-10 col-sm-12 mx-auto pb-5'>
                            <div className="frame-parent3 mt-4">
                                <div className="ecosystem-parent">
                                    <div className="ecosystem">Ecosystem</div>
                                    <div className="ecosystem">Community</div>
                                    <div className="ecosystem">{`Privacy policy `}</div>
                                    <div className="ecosystem">Trademark policy</div>
                                    <div className="ecosystem">Security</div>
                                </div>
                                <div className="enquiry-parent">
                                    <div className="ecosystem">{`Enquiry: `}</div>
                                    <div className="ecosystem">enquiry@trendswap.org</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </>
    );
};

export default MainHome;
