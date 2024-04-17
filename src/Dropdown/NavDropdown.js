import React from 'react'

import github from '../Assets/images2/mdi_github.svg'
import twitter from '../Assets/images2/line-md_twitter-x-alt.svg'
import discord from '../Assets/images2/ic_outline-discord.svg'

const NavDropdown = () => {
    return (
        <>
            <div className="nav-dropdown">
                <div className="nav-parent">
                    <div className="app-parent">
                        <b className="app">App</b>
                        <b className="vote">Vote</b>
                        <div className="analytics">Analytics</div>
                    </div>
                    <div className="company-parent">
                        <b className="company">Company</b>
                        <div className="analytics">Careers</div>
                        <div className="analytics">Blog</div>
                    </div>
                    <div className="company-parent">
                        <b className="company">Need help?</b>
                        <div className="analytics">Contact us</div>
                        <div className="analytics">Help Center</div>
                    </div>
                </div>
                <img className="nav-dropdown-child" alt="" src="" />
                <div className="rectangle-parent">
                    <div className="trendswap-child" />
                    <div className="download-trendswap-parent">
                        <b className="app">Download Trendswap</b>
                        <div className="available-on-ios">Available on IOS and Android</div>
                    </div>
                </div>
                <div className="mdigithub-parent">
                    <img className="mdigithub-icon" alt="" src={github} />
                    <img className="mdigithub-icon" alt="" src={twitter} />
                    <img className="mdigithub-icon" alt="" src={discord} />
                </div>
            </div>
        </>
    )
}

export default NavDropdown
