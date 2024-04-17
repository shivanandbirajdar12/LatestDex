import React from 'react';

const PopularToken = (props) => {
    const truncatedOption = props.option.length > 15 ? `${props.option.slice(0, 15)}...` : props.option;

    const handleClick = () => {
        window.alert(props.ticker);
    };

    return (
        <div className='cPCYrp dKubqp bIFEzi cFvOnL' onClick={handleClick}>
            <div className='bFCsHr'>
                <img src={props.imageSrc} style={{ height: "34px", width: '34px', borderRadius:'50%' }} alt='' />
            </div>
            <div className='eENUcJ'>
                <div className='dKubqp dKubqptext cPCYrp' style={{ overflowX:'hidden' }}>{truncatedOption}</div>
                <div className='css-1m0dqmt  jgbRhf'>{props.ticker}</div>
            </div>
        </div>
    );
};

export default PopularToken;
