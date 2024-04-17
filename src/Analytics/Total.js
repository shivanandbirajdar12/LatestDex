import React, { useCallback, useState } from 'react';
import '../Assets/CSS/analyticstotal.css';
import Total_Overview from './Total_Overview';
import Total_Tokens from './TotalTokens';
import Total_Pair from './Total_Pair';

const Toatal = () => {
    const [activeSection, setActiveSection] = useState('overview');
    const [activeTab, setActiveTab] = useState('overview');

    const onFrameContainerClick = useCallback((section, tab) => {
        setActiveSection(section);
        setActiveTab(tab);
    }, []);

    const getTabStyle = (tabName) => {
        return {
            backgroundColor: activeTab === tabName ? 'black' : 'transparent ',
            color: activeTab===tabName?'white':'#9b9797'
        };
    };
    return (
        <div>
            <div className="frame-parent1 container px-0">
                <div className="total-group mt-3">
                    <div className={`tokens-wrapper ms-3 ${activeTab === 'overview' ? 'active' : ''}`} 
                     style={getTabStyle('overview')}onClick={() => onFrameContainerClick('overview', 'overview')}>
                        <div className="overview">Overview</div>
                    </div>
                    <div className={`tokens-wrapper ${activeTab === 'token' ? 'active' : ''}`} 
                     style={getTabStyle('token')}onClick={() => onFrameContainerClick('token', 'token')}>
                        <div className="overview">Tokens</div>
                    </div>
                    <div className={`tokens-wrapper ${activeTab === 'pairs' ? 'active' : ''}`}
                    style={getTabStyle('pairs')} onClick={() => onFrameContainerClick('pairs', 'pairs')}>
                        <div className="overview">Pairs</div>
                    </div>
                </div>
            </div>
            {activeSection === 'overview' && <Total_Overview />}
            {activeSection === 'token' && <Total_Tokens />}
            {activeSection === 'pairs' && <Total_Pair />}
        </div>
    );
};

export default Toatal;
