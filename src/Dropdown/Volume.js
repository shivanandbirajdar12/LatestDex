// import React from 'react'
// import './volume.css'
// const Volume = () => {

//     return (
//         <>
//             <div className="d-volume">
//                 <div className="d-volume-inner">
//                     <div className="h-volume-wrapper">
//                         <div className="h-volume">1H volume</div>
//                     </div>
//                 </div>
//                 <div className="volume-parent">
//                     <div className="h-volume-wrapper">
//                         <div className="h-volume">1D volume</div>
//                     </div>
//                     <img className="teenyiconstick-solid" alt="" src="teenyicons:tick-solid.svg" />
//                 </div>
//                 <div className="d-volume-child">
//                     <div className="h-volume-wrapper">
//                         <div className="h-volume">1W volume</div>
//                     </div>
//                 </div>
//                 <div className="d-volume-child">
//                     <div className="h-volume-wrapper">
//                         <div className="h-volume">1M volume</div>
//                     </div>
//                 </div>
//                 <div className="d-volume-child">
//                     <div className="h-volume-wrapper">
//                         <div className="h-volume">1Y volume</div>
//                     </div>
//                 </div>
//             </div>

//         </>
//     )
// }

// export default Volume
// import React, { useState, useEffect, useRef } from 'react';
// import './volume.css';
// import tennisicon from '../Assets/images2/teenyicons_tick-solid.png';

// const Volume = () => {
//     const [selectedVolume, setSelectedVolume] = useState('1H');

//     const handleSelectVolume = (volume) => {
//         setSelectedVolume(volume);
//     };

//     const options = [
//         { key: 1, volumeName: '1H' },
//         { key: 2, volumeName: '1D' },
//         { key: 3, volumeName: '1W' },
//         { key: 4, volumeName: '1M' },
//         { key: 5, volumeName: '1Y' }
//     ].map(option => ({
//         ...option,
//         propName: option.volumeName === selectedVolume
//     }));

//     return (
//         <>
//             <button variant="primary" className="px-3 tab-button text-light m-1 ">
//                 1D-volume
//                 <img src="/images/dropdown.png" height="23px" width="23px" alt="" />
//             </button>
//             <div className="d-volume">
//                 {options.map((option, index) => (
//                     <div key={index} className="d-volume-child" onClick={() => handleSelectVolume(option.volumeName)}>
//                         <div className="h-volume-wrapper">
//                             <div className="h-volume">{option.volumeName} volume</div>
//                         </div>
//                         {option.propName && (
//                             <img className="teenyiconstick-solid" alt="" src={tennisicon} />
//                         )}
//                     </div>
//                 ))}
//             </div>
//         </>
//     )
// }

// export default Volume;
import React, { useState } from 'react';

import tennisicon from '../Assets/images2/teenyicons_tick-solid.png';

const Volume = () => {
    const [selectedVolume, setSelectedVolume] = useState('1H');
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);

    const handleSelectVolume = (volume) => {
        setSelectedVolume(volume);
        setIsDropdownOpen(false); // Close the dropdown after selecting
    };

    const toggleDropdown = () => {
        setIsDropdownOpen(!isDropdownOpen);
    };

    const options = [
        { key: 1, volumeName: '1H' },
        { key: 2, volumeName: '1D' },
        { key: 3, volumeName: '1W' },
        { key: 4, volumeName: '1M' },
        { key: 5, volumeName: '1Y' }
    ].map(option => ({
        ...option,
        propName: option.volumeName === selectedVolume
    }));

    return (
        <>
            <button variant="primary" className="px-3 tab-button text-light m-1" onClick={toggleDropdown}>
                {selectedVolume}-volume
                <img src="/images/dropdown.png" height="23px" width="23px" alt="" />
            </button>
            {isDropdownOpen && (
                <div className="d-volume">
                    {options.map((option, index) => (
                        <div key={index} className="d-volume-child" onClick={() => handleSelectVolume(option.volumeName)}>
                            <div className="h-volume-wrapper">
                                <div className="h-volume">{option.volumeName} volume</div>
                            </div>
                            {option.propName && (
                                <img className="teenyiconstick-solid" alt="" src={tennisicon} />
                            )}
                        </div>
                    ))}
                </div>
            )}
        </>
    )
}

export default Volume;
