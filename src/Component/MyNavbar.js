
// import React, { useState, useEffect, useRef } from 'react';
// import { Link, NavLink } from 'react-router-dom';
// import Navbar from 'react-bootstrap/Navbar';
// import Nav from 'react-bootstrap/Nav';
// import OffcanvasComponent from '../Dropdown/OffcanvasComponent';
// import Logo from '../Assets/images2/logo ts.png';
// import '../Assets/CSS/nav.css';
// import '../Assets/CSS/offcanvas.css';
// import NetworkOverlay from '../Dropdown/NetworkOverlay';
// import NavDropdown from '../Dropdown/NavDropdown';
// import tokensData from '../Dropdown/ChainAddresses.json';
// import ConnectButton from '../ContractAction/Wallet/ConnectWallet';

// const MyNavbar = () => {
//   const [searchQuery, setSearchQuery] = useState('');
//   const tokens43113 = tokensData[0]['13113'].tokens;
//   const [isOpen, setIsOpen] = useState(false);
//   const [isOpen1, setIsOpen1] = useState(false);
//   const [showOffcanvas, setShowOffcanvas] = useState(false);
//   const [isDropdownOpen, setIsDropdownOpen] = useState(false);
//   const [isInputFocused, setIsInputFocused] = useState(false); 
  
//   const filteredTokens = tokens43113.filter(
//     (token) =>
//       token.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
//       token.ticker.toLowerCase().includes(searchQuery.toLowerCase())
//   );
//   const dropdownRef = useRef(null);
//   const imageRef = useRef(null);
//   const networkOverlayRef = useRef(null);
//   const searchInputRef = useRef(null);
//   const toggleDropdown1 = () => {
//     setIsOpen1(!isOpen1);
//     setIsDropdownOpen(!isDropdownOpen);
//   };

//   const handleConnectWallet = () => {
//     setShowOffcanvas(true);
//   };

//   const handleCloseOffcanvas = () => {
//     setShowOffcanvas(false);
//   };
  
  

//   useEffect(() => {
//     function handleClickOutside(event) {
//       if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
//         setIsOpen1(false);
//         setIsDropdownOpen(false);
//       }
//       if (
//         networkOverlayRef.current &&
//         !networkOverlayRef.current.contains(event.target)
//       ) {
//         setIsOpen(false);
//       }
//     }

//     document.addEventListener('mousedown', handleClickOutside);
//     return () => {
//       document.removeEventListener('mousedown', handleClickOutside);
//     };
//   }, [isOpen, isOpen1, isDropdownOpen]);

 

//   return (
//     <div className='header_wrapper sticky-top'>
//       <Navbar bg=" px-5" expand="lg">
//         <Navbar.Brand as={Link} to="/">
//           <img src={Logo} height="30px" width="30px" alt="" />
//         </Navbar.Brand>
//         <Navbar.Toggle aria-controls="basic-navbar-nav" className="bg-light" />
//         <Navbar.Collapse id="basic-navbar-nav">
//           <Nav className="me-auto">
//             <NavLink to="/swap"  className="nav-link ms-2" activeclassname="active">
//               Swap
//             </NavLink>
//             <NavLink to="/explore" className="nav-link ms-2" activeclassname="active">
//               Explore
//             </NavLink>
//             <NavLink to="/analytics" className="nav-link ms-2" activeclassname="active">
//               Analytics
//             </NavLink>
//             <NavLink to="/pool" className="nav-link ms-2" activeclassname="active">
//               Pool
//             </NavLink>
//             <div ref={dropdownRef}>
//               <Link to="#" className="nav-link ms-2" onClick={toggleDropdown1}>
//                 <img
//                   src="/images/dropdown.png"
//                   ref={imageRef}
//                   className={`icons image ${isDropdownOpen ? 'rotated' : ''}`}
//                   alt=""
//                 />
//               </Link>
//               {isOpen1 && <NavDropdown />}
//             </div>
//           </Nav>

//           <div className='search_input_div'>
//             <img
//               src="/images/search.png"
//               className="color-change-image ms-3"
//               style={{ height: '23px', width: '23px' }}
//               alt=""
//             />
//             <input
//               ref={searchInputRef}
//               type="search"
//               placeholder="Search Tokens and NFTs Collections"
//               aria-label="Search"
//               onChange={(e) => setSearchQuery(e.target.value)}
//               onFocus={() => setIsInputFocused(true)} 
//               onBlur={() => setIsInputFocused(false)} 
//               className='w-100 ms-2'
//               style={{ outline: 'none', border: 'none', backgroundColor: 'transparent', color: '#f1f1f1' }}
//             />
//             {searchQuery && isInputFocused && ( 
//               <div className='search_result'>
//                 <div className='text-light ms-5'>
//                 {filteredTokens.length === 0 && (
//                   <div className='text-light'>No tokens found</div>
//                 )}</div>
//                 {filteredTokens.map((token, index) => (
//                   <div class="cPCYrp dKubqp bIFEzi cFvOnL alertdiv" key={index}>
//                     <div className="bFCsHr"><img src={token.img} style={{ height: '24px', width: '24px', borderRadius: '50%' }} alt='' /></div>
//                     <div className="eENUcJ" >
//                       <div class="dKubqp dKubqptext cPCYrp" ><a href='#' >{token.name}</a></div>
//                       <div class="css-1m0dqmt  jgbRhf" >{token.ticker}</div>
//                     </div>
//                   </div>
//                 ))}
//               </div>
//             )}
//             <img src="/images/forward.png"  style={{ height: '20px', width: '20px' }} className="me-3" alt="" />
//           </div>
//         </Navbar.Collapse>
//         <div className="d-flex align-items-center">
//           <NetworkOverlay  />
//           {/* <button className="connect-button1 px-4 ms-3" onClick={handleConnectWallet}>
//             <b className="connect1">Connect</b>
//           </button> */}
//           <ConnectButton />
//         </div>
//       </Navbar>
//       <OffcanvasComponent show={showOffcanvas} onHide={handleCloseOffcanvas} />
//     </div>
//   );
// };

// export default MyNavbar;

import React, { useState, useEffect, useRef } from 'react';
import { Link, NavLink } from 'react-router-dom';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import OffcanvasComponent from '../Dropdown/OffcanvasComponent';
import Logo from '../Assets/images2/logo ts.png';
import '../Assets/CSS/nav.css';
import '../Assets/CSS/offcanvas.css';
// import NetworkOverlay from '../Dropdown/NetworkOverlay';
import NavDropdown from '../Dropdown/NavDropdown';
import tokensData from '../Dropdown/ChainAddresses.json';
import NetworkOverlay from '../Dropdown/NetworkOverlay';
import ConnectButton from '../ContractAction/Wallet/ConnectWallet';
const MyNavbar = ({ selectedNetwork,onSelectNetwork}) => {
  console.log(' mynavbar selectedNetwork',selectedNetwork)
  const [searchQuery, setSearchQuery] = useState('');
  const tokens43113 = tokensData[0]['13113'].tokens;
  const [isOpen, setIsOpen] = useState(false);
  const [isOpen1, setIsOpen1] = useState(false);
  const [showOffcanvas, setShowOffcanvas] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isInputFocused, setIsInputFocused] = useState(false); 
  
  const filteredTokens = tokens43113.filter(
    (token) =>
      token.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      token.ticker.toLowerCase().includes(searchQuery.toLowerCase())
  );
  const dropdownRef = useRef(null);
  const imageRef = useRef(null);
  const networkOverlayRef = useRef(null);
  const searchInputRef = useRef(null);
  const toggleDropdown1 = () => {
    setIsOpen1(!isOpen1);
    setIsDropdownOpen(!isDropdownOpen);
  };

  const handleConnectWallet = () => {
    setShowOffcanvas(true);
  };

  const handleCloseOffcanvas = () => {
    setShowOffcanvas(false);
  };
  
  

  useEffect(() => {
    function handleClickOutside(event) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen1(false);
        setIsDropdownOpen(false);
      }
      if (
        networkOverlayRef.current &&
        !networkOverlayRef.current.contains(event.target)
      ) {
        setIsOpen(false);
      }
    }

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isOpen, isOpen1, isDropdownOpen]);

 

  return (
    <div className='header_wrapper sticky-top'>
      <Navbar bg=" px-5" expand="lg">
        <Navbar.Brand as={Link} to="/">
          <img src={Logo} height="30px" width="30px" alt="" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" className="bg-light" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <NavLink to="/swap"  className="nav-link ms-2" activeclassname="active">
              Swap
            </NavLink>
            <NavLink to="/explore" className="nav-link ms-2" activeclassname="active">
              Explore
            </NavLink>
            <NavLink to="/analytics" className="nav-link ms-2" activeclassname="active">
              Analytics
            </NavLink>
            <NavLink to="/pool" className="nav-link ms-2" activeclassname="active">
              Pool
            </NavLink>
            <div ref={dropdownRef}>
              <Link to="#" className="nav-link ms-2" onClick={toggleDropdown1}>
                <img
                  src="/images/dropdown.png"
                  ref={imageRef}
                  className={`icons image ${isDropdownOpen ? 'rotated' : ''}`}
                  alt=""
                />
              </Link>
              {isOpen1 && <NavDropdown />}
            </div>
          </Nav>

          <div className='search_input_div'>
            <img
              src="/images/search.png"
              className="color-change-image ms-3"
              style={{ height: '23px', width: '23px' }}
              alt=""
            />
            <input
              ref={searchInputRef}
              type="search"
              placeholder="Search Tokens and NFTs Collections"
              aria-label="Search"
              onChange={(e) => setSearchQuery(e.target.value)}
              onFocus={() => setIsInputFocused(true)} 
              onBlur={() => setIsInputFocused(false)} 
              className='w-100 ms-2'
              style={{ outline: 'none', border: 'none', backgroundColor: 'transparent', color: '#f1f1f1' }}
            />
            {searchQuery && isInputFocused && ( 
              <div className='search_result'>
                <div className='text-light ms-5'>
                {filteredTokens.length === 0 && (
                  <div className='text-light'>No tokens found</div>
                )}</div>
                {filteredTokens.map((token, index) => (
                  <div class="cPCYrp dKubqp bIFEzi cFvOnL alertdiv" key={index}>
                    <div className="bFCsHr"><img src={token.img} style={{ height: '24px', width: '24px', borderRadius: '50%' }} alt='' /></div>
                    <div className="eENUcJ" >
                      <div class="dKubqp dKubqptext cPCYrp" ><a href='#' >{token.name}</a></div>
                      <div class="css-1m0dqmt  jgbRhf" >{token.ticker}</div>
                    </div>
                  </div>
                ))}
              </div>
            )}
            <img src="/images/forward.png"  style={{ height: '20px', width: '20px' }} className="me-3" alt="" />
          </div>
        </Navbar.Collapse>
              
        <div className="d-flex align-items-center">
          <NetworkOverlay selectedNetwork={selectedNetwork} onSelectNetwork={onSelectNetwork}/>
           <ConnectButton />
        </div>
      </Navbar>
      <OffcanvasComponent show={showOffcanvas} onHide={handleCloseOffcanvas} />


    </div>
  );
};

export default MyNavbar;
