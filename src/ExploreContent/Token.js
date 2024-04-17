// import React from 'react'
// import '../Assets/CSS/tokens.css';

// const Token = () => {
//   return (
//     <div>
//        {/* <!-- ================= Graph section ================= --> */}
//     <div class="container">
//         <div class="row mt-5 g-3">
//             {/* <!-- <div class="col-md-6 p-4">
//                 <p>TrendSwap TVL</p>
//                 <div class="million d-flex align-items-center justify-content-between">
//                     <h2 class="price">$110.42M</h2>
//                     <div class="v3v2">
//                         <p>V2</p>
//                         <p>V3</p>
//                     </div>
//                 </div>
//                 <img src="/images/graph1.png" alt="" class="img-fluid" />
//             </div> --> */}
//             <div class="col-md-12 p-4">
//                 <div class="dwm d-flex align-items-center justify-content-between">
//                     <p>TrendSwap Volume</p>
//                     <div>
//                         <span> D </span>
//                         <span> W </span>
//                         <span> M </span>
//                     </div>
//                 </div>
//                 <div class="million d-flex align-items-center justify-content-between">
//                     <div>
//                         <h2 class="price">$110.42B</h2>
//                         <p>Past Month</p>
//                     </div>
//                     <div class="v3v2">
//                         <p>V2</p>
//                         <p>V3</p>
//                     </div>
//                 </div>
//                 <img src="/images/updatedgrap.png" alt="" class="img-fluid" />
//             </div>
//         </div>
//     </div>

//     {/* <!-- ======================= Tables section=================== --> */}
//     <div class="container">
//         <div class="table-tab d-flex justify-content-between mt-5">
//             <ul class="nav mb-3" id="pills-tab" role="tablist">
//                 <li class="nav-item" role="presentation">
//                     <button class="active" id="pills-home-tab" data-bs-toggle="pill" data-bs-target="#pills-home"
//                         type="button" role="tab" aria-controls="pills-home" aria-selected="true">
//                         Tokens
//                     </button>
//                 </li>
//                 <li class="nav-item" role="presentation">
//                     <button class="" id="pills-profile-tab" data-bs-toggle="pill" data-bs-target="#pills-profile"
//                         type="button" role="tab" aria-controls="pills-profile" aria-selected="false">
//                         Pools
//                     </button>
//                 </li>
//                 <li class="nav-item" role="presentation">
//                     <button class="" id="pills-contact-tab" data-bs-toggle="pill" data-bs-target="#pills-contact"
//                         type="button" role="tab" aria-controls="pills-contact" aria-selected="false">
//                         Transactions
//                     </button>
//                 </li>
//             </ul>
//             <div class="tab-content" id="pills-tabContent">
//                 <div class="tab-pane fade show active" id="pills-home" role="tabpanel" aria-labelledby="pills-home-tab">
//                     <div class="tpt-buttons">
//                         <button  type="button" class="tab-button px-3" data-bs-toggle="dropdown"
//                             aria-expanded="false">
//                             <img src="/images/sprint.png" height="23px" width="23px" alt="" />
//                             <img src="/images/dropdown.png" height="23px" width="23px" alt="" />
//                         </button>
//                         <button  type="button" class="tab-button px-3 text-light" data-bs-toggle="dropdown"
//                             aria-expanded="false">
//                             1D-volume
//                             <img src="/images/dropdown.png" height="23px" width="23px" alt="" />
//                         </button>
//                         <a href=""><img src="/images/search.png" height="24px" width="24px" alt="" /></a>
//                     </div>
//                 </div>
//                 <div class="tab-pane fade" id="pills-profile" role="tabpanel" aria-labelledby="pills-profile-tab">
//                     <div class="tpt-buttons">
//                         <button  type="button" class="tab-button px-3" data-bs-toggle="dropdown"
//                             aria-expanded="false">
//                             <img src="/images/sprint.png" height="23px" width="23px" alt="" />
//                             <img src="/images/dropdown.png" height="23px" width="23px" alt="" />
//                         </button>
//                         <a href=""><img src="/images/search.png" height="24px" width="24px" alt="" /></a>
//                     </div>
//                 </div>
//                 <div class="tab-pane fade" id="pills-contact" role="tabpanel" aria-labelledby="pills-contact-tab">
//                     <button  type="button" class="tab-button px-3" data-bs-toggle="dropdown"
//                         aria-expanded="false">
//                         <img src="/images/sprint.png" height="23px" width="23px" alt="" />
//                         <img src="/images/dropdown.png" height="23px" width="23px" alt="" />
//                     </button>
//                 </div>
//             </div>
//         </div>
//     </div>

//     <div class="container mt-1 mb-5 p-0 table-responsive table-container" style="border-radius: 15px">
//         <table class="table glassmorphism mb-0 p-5 text-light" id="pills-home">
//             <thead>
//                 <tr class="border-bottom">
//                     <th>#</th>
//                     <th>Token Name</th>
//                     <th>Price</th>
//                     <th>1 Hour</th>
//                     <th>1 Day</th>
//                     <th>FDV</th>
//                     <th>
//                         <img src="/images/volumearrow.png" alt=""style={{ height: '20px', width: '20px' }} />Volume
//                     </th>
//                     <th>Graph</th>
//                 </tr>
//             </thead>
//             <tbody>
//                 {/* <!-- Add your data rows here --> */}
//                 <tr>
//                     <td>1</td>
//                     <td>
//                         <img src="/images/tokenimg.png" class="tokenimg" alt="" /> Wrapped
//                         Ether <span>WETH</span>
//                     </td>
//                     <td>$100</td>
//                     <td><img src="/images/up.png" class="tokenimg" alt="" /> 0.00%</td>
//                     <td>
//                         <img src="/images/down.png" class="tokenimg" alt="" /> 0.22%
//                     </td>
//                     <td>$9.7B</td>
//                     <td>$49.1M</td>
//                     <td>
//                         <img src="/images/downgraph.png"style={{height:'24px',width:'124px'}} alt="Graph 1" />
//                     </td>
//                 </tr>

//                 <tr>
//                     <td>2</td>
//                     <td>
//                         <img src="/images/tokenimg.png" class="tokenimg" alt="" /> Wrapped
//                         Ether <span>WETH</span>
//                     </td>
//                     <td>$100</td>
//                     <td><img src="/images/up.png" class="tokenimg" alt="" /> 0.00%</td>
//                     <td>
//                         <img src="/images/down.png" class="tokenimg" alt="" /> 0.22%
//                     </td>
//                     <td>$9.7B</td>
//                     <td>$49.1M</td>
//                     <td>
//                         <img src="/images/downgraph.png" width="124px" height="24px" alt="Graph 1" />
//                     </td>
//                 </tr>
//                 <tr>
//                     <td>3</td>
//                     <td>
//                         <img src="/images/tokenimg.png" class="tokenimg" alt="" /> Wrapped
//                         Ether <span>WETH</span>
//                     </td>
//                     <td>$100</td>
//                     <td><img src="/images/up.png" class="tokenimg" alt="" /> 0.00%</td>
//                     <td>
//                         <img src="/images/down.png" class="tokenimg" alt="" /> 0.22%
//                     </td>
//                     <td>$9.7B</td>
//                     <td>$49.1M</td>
//                     <td>
//                         <img src="/images/downgraph.png" width="124px" height="24px" alt="Graph 1" />
//                     </td>
//                 </tr>
//                 <tr>
//                     <td>4</td>
//                     <td>
//                         <img src="/images/tokenimg.png" class="tokenimg" alt="" /> Wrapped
//                         Ether <span>WETH</span>
//                     </td>
//                     <td>$100</td>
//                     <td><img src="/images/up.png" class="tokenimg" alt="" /> 0.00%</td>
//                     <td>
//                         <img src="/images/down.png" class="tokenimg" alt="" /> 0.22%
//                     </td>
//                     <td>$9.7B</td>
//                     <td>$49.1M</td>
//                     <td>
//                         <img src="/images/downgraph.png" width="124px" height="24px" alt="Graph 1" />
//                     </td>
//                 </tr>
//                 <tr>
//                     <td>5</td>
//                     <td>
//                         <img src="/images/tokenimg.png" class="tokenimg" alt="" /> Wrapped
//                         Ether <span>WETH</span>
//                     </td>
//                     <td>$100</td>
//                     <td><img src="/images/up.png" class="tokenimg" alt="" /> 0.00%</td>
//                     <td>
//                         <img src="/images/down.png" class="tokenimg" alt="" /> 0.22%
//                     </td>
//                     <td>$9.7B</td>
//                     <td>$49.1M</td>
//                     <td>
//                         <img src="/images/downgraph.png" width="124px" height="24px" alt="Graph 1" />
//                     </td>
//                 </tr>
//                 <tr>
//                     <td>6</td>
//                     <td>
//                         <img src="/images/tokenimg.png" class="tokenimg" alt="" /> Wrapped
//                         Ether <span>WETH</span>
//                     </td>
//                     <td>$100</td>
//                     <td><img src="/images/up.png" class="tokenimg" alt="" /> 0.00%</td>
//                     <td>
//                         <img src="/images/down.png" class="tokenimg" alt="" /> 0.22%
//                     </td>
//                     <td>$9.7B</td>
//                     <td>$49.1M</td>
//                     <td>
//                         <img src="/images/downgraph.png" width="124px" height="24px" alt="Graph 1" />
//                     </td>
//                 </tr>
//                 <tr>
//                     <td>7</td>
//                     <td>
//                         <img src="/images/tokenimg.png" class="tokenimg" alt="" /> Wrapped
//                         Ether <span>WETH</span>
//                     </td>
//                     <td>$100</td>
//                     <td><img src="/images/up.png" class="tokenimg" alt="" /> 0.00%</td>
//                     <td>
//                         <img src="/images/down.png" class="tokenimg" alt="" /> 0.22%
//                     </td>
//                     <td>$9.7B</td>
//                     <td>$49.1M</td>
//                     <td>
//                         <img src="/images/downgraph.png" width="124px" height="24px" alt="Graph 1" />
//                     </td>
//                 </tr>
//                 <tr>
//                     <td>8</td>
//                     <td>
//                         <img src="/images/tokenimg.png" class="tokenimg" alt="" /> Wrapped
//                         Ether <span>WETH</span>
//                     </td>
//                     <td>$100</td>
//                     <td><img src="/images/up.png" class="tokenimg" alt="" /> 0.00%</td>
//                     <td>
//                         <img src="/images/down.png" class="tokenimg" alt="" /> 0.22%
//                     </td>
//                     <td>$9.7B</td>
//                     <td>$49.1M</td>
//                     <td>
//                         <img src="/images/downgraph.png" width="124px" height="24px" alt="Graph 1" />
//                     </td>
//                 </tr>
//                 <tr>
//                     <td>9</td>
//                     <td>
//                         <img src="/images/tokenimg.png" class="tokenimg" alt="" /> Wrapped
//                         Ether <span>WETH</span>
//                     </td>
//                     <td>$100</td>
//                     <td><img src="/images/up.png" class="tokenimg" alt="" /> 0.00%</td>
//                     <td>
//                         <img src="/images/down.png" class="tokenimg" alt="" /> 0.22%
//                     </td>
//                     <td>$9.7B</td>
//                     <td>$49.1M</td>
//                     <td>
//                         <img src="/images/downgraph.png" width="124px" height="24px" alt="Graph 1" />
//                     </td>
//                 </tr>
//                 <tr>
//                     <td>10</td>
//                     <td>
//                         <img src="/images/tokenimg.png" class="tokenimg" alt="" /> Wrapped
//                         Ether <span>WETH</span>
//                     </td>
//                     <td>$100</td>
//                     <td><img src="/images/up.png" class="tokenimg" alt="" /> 0.00%</td>
//                     <td>
//                         <img src="/images/down.png" class="tokenimg" alt="" /> 0.22%
//                     </td>
//                     <td>$9.7B</td>
//                     <td>$49.1M</td>
//                     <td>
//                         <img src="/images/downgraph.png" width="124px" height="24px" alt="Graph 1" />
//                     </td>
//                 </tr>
//                 <tr>
//                     <td>11</td>
//                     <td>
//                         <img src="/images/tokenimg.png" class="tokenimg" alt="" /> Wrapped
//                         Ether <span>WETH</span>
//                     </td>
//                     <td>$100</td>
//                     <td><img src="/images/up.png" class="tokenimg" alt="" /> 0.00%</td>
//                     <td>
//                         <img src="/images/down.png" class="tokenimg" alt="" /> 0.22%
//                     </td>
//                     <td>$9.7B</td>
//                     <td>$49.1M</td>
//                     <td>
//                         <img src="/images/downgraph.png" width="124px" height="24px" alt="Graph 1" />
//                     </td>
//                 </tr>
//                 <tr>
//                     <td>12</td>
//                     <td>
//                         <img src="/images/tokenimg.png" class="tokenimg" alt="" /> Wrapped
//                         Ether <span>WETH</span>
//                     </td>
//                     <td>$100</td>
//                     <td><img src="/images/up.png" class="tokenimg" alt="" /> 0.00%</td>
//                     <td>
//                         <img src="/images/down.png" class="tokenimg" alt="" /> 0.22%
//                     </td>
//                     <td>$9.7B</td>
//                     <td>$49.1M</td>
//                     <td>
//                         <img src="/images/downgraph.png" width="124px" height="24px" alt="Graph 1" />
//                     </td>
//                 </tr>
//                 <tr>
//                     <td>13</td>
//                     <td>
//                         <img src="/images/tokenimg.png" class="tokenimg" alt="" /> Wrapped
//                         Ether <span>WETH</span>
//                     </td>
//                     <td>$100</td>
//                     <td><img src="/images/up.png" class="tokenimg" alt="" /> 0.00%</td>
//                     <td>
//                         <img src="/images/down.png" class="tokenimg" alt="" /> 0.22%
//                     </td>
//                     <td>$9.7B</td>
//                     <td>$49.1M</td>
//                     <td>
//                         <img src="/images/downgraph.png" width="124px" height="24px" alt="Graph 1" />
//                     </td>
//                 </tr>
//                 <tr>
//                     <td>14</td>
//                     <td>
//                         <img src="/images/tokenimg.png" class="tokenimg" alt="" /> Wrapped
//                         Ether <span>WETH</span>
//                     </td>
//                     <td>$100</td>
//                     <td><img src="/images/up.png" class="tokenimg" alt="" /> 0.00%</td>
//                     <td>
//                         <img src="/images/down.png" class="tokenimg" alt="" /> 0.22%
//                     </td>
//                     <td>$9.7B</td>
//                     <td>$49.1M</td>
//                     <td>
//                         <img src="/images/downgraph.png" width="124px" height="24px" alt="Graph 1" />
//                     </td>
//                 </tr>
//                 <tr>
//                     <td>15</td>
//                     <td>
//                         <img src="/images/tokenimg.png" class="tokenimg" alt="" /> Wrapped
//                         Ether <span>WETH</span>
//                     </td>
//                     <td>$100</td>
//                     <td><img src="/images/up.png" class="tokenimg" alt="" /> 0.00%</td>
//                     <td>
//                         <img src="/images/down.png" class="tokenimg" alt="" /> 0.22%
//                     </td>
//                     <td>$9.7B</td>
//                     <td>$49.1M</td>
//                     <td>
//                         <img src="/images/downgraph.png" width="124px" height="24px" alt="Graph 1" />
//                     </td>
//                 </tr>
//                 <tr>
//                     <td>16</td>
//                     <td>
//                         <img src="/images/tokenimg.png" class="tokenimg" alt="" /> Wrapped
//                         Ether <span>WETH</span>
//                     </td>
//                     <td>$100</td>
//                     <td><img src="/images/up.png" class="tokenimg" alt="" /> 0.00%</td>
//                     <td>
//                         <img src="/images/down.png" class="tokenimg" alt="" /> 0.22%
//                     </td>
//                     <td>$9.7B</td>
//                     <td>$49.1M</td>
//                     <td>
//                         <img src="/images/downgraph.png" width="124px" height="24px" alt="Graph 1" />
//                     </td>
//                 </tr>
//             </tbody>
//         </table>
//     </div>

//     {/* <!-- ============================= pool table================ --> */}
//     <div class="container mt-1 mb-5 p-0 table-responsive table-container" style={{borderRadius:'15px'}}>
//         <table class="table glassmorphism mb-0 p-5 text-light">
//             <thead>
//                 <tr class="border-bottom">
//                     <th>#</th>
//                     <th>Pool</th>
//                     <th>Transactions</th>
//                     <th>1 Day Volume</th>
//                     <th>7 Day Volume</th>
//                     <th>TurnOver</th>
//                     <th>Graph</th>
//                 </tr>
//             </thead>
//             <tbody>
//                 <tr>
//                     <td>1</td>
//                     <td>
//                         <img src="/images/poolimg.png" class="tokenimg" alt="" />
//                         USDC/WETH<span class="ms-2 badge badges">0.05%</span>
//                     </td>
//                     <td>$100</td>

//                     <td>
//                         <img src="/images/down.png" class="tokenimg" alt="" /> 0.22%
//                     </td>
//                     <td>$9.7B</td>
//                     <td>$49.1M</td>
//                     <td>
//                         <img src="/images/downgraph.png" width="124px" height="24px" alt="Graph 1" />
//                     </td>
//                 </tr>
//                 <tr>
//                     <td>2</td>
//                     <td>
//                         <img src="/images/poolimg.png" class="tokenimg" alt="" />
//                         USDC/WETH<span class="ms-2 badge badges">0.05%</span>
//                     </td>
//                     <td>$100</td>

//                     <td>
//                         <img src="/images/down.png" class="tokenimg" alt="" /> 0.22%
//                     </td>
//                     <td>$9.7B</td>
//                     <td>$49.1M</td>
//                     <td>
//                         <img src="/images/downgraph.png" width="124px" height="24px" alt="Graph 1" />
//                     </td>
//                 </tr>
//                 <tr>
//                     <td>3</td>
//                     <td>
//                         <img src="/images/poolimg.png" class="tokenimg" alt="" />
//                         USDC/WETH<span class="ms-2 badge badges">0.05%</span>
//                     </td>
//                     <td>$100</td>

//                     <td>
//                         <img src="/images/down.png" class="tokenimg" alt="" /> 0.22%
//                     </td>
//                     <td>$9.7B</td>
//                     <td>$49.1M</td>
//                     <td>
//                         <img src="/images/downgraph.png" width="124px" height="24px" alt="Graph 1" />
//                     </td>
//                 </tr>
//                 <tr>
//                     <td>4</td>
//                     <td>
//                         <img src="/images/poolimg.png" class="tokenimg" alt="" />
//                         USDC/WETH<span class="ms-2 badge badges">0.05%</span>
//                     </td>
//                     <td>$100</td>

//                     <td>
//                         <img src="/images/down.png" class="tokenimg" alt="" /> 0.22%
//                     </td>
//                     <td>$9.7B</td>
//                     <td>$49.1M</td>
//                     <td>
//                         <img src="/images/downgraph.png" width="124px" height="24px" alt="Graph 1" />
//                     </td>
//                 </tr>
//                 <tr>
//                     <td>5</td>
//                     <td>
//                         <img src="/images/poolimg.png" class="tokenimg" alt="" />
//                         USDC/WETH<span class="ms-2 badge badges">0.05%</span>
//                     </td>
//                     <td>$100</td>

//                     <td>
//                         <img src="/images/down.png" class="tokenimg" alt="" /> 0.22%
//                     </td>
//                     <td>$9.7B</td>
//                     <td>$49.1M</td>
//                     <td>
//                         <img src="/images/downgraph.png" width="124px" height="24px" alt="Graph 1" />
//                     </td>
//                 </tr>
//                 <tr>
//                     <td>6</td>
//                     <td>
//                         <img src="/images/poolimg.png" class="tokenimg" alt="" />
//                         USDC/WETH<span class="ms-2 badge badges">0.05%</span>
//                     </td>
//                     <td>$100</td>

//                     <td>
//                         <img src="/images/down.png" class="tokenimg" alt="" /> 0.22%
//                     </td>
//                     <td>$9.7B</td>
//                     <td>$49.1M</td>
//                     <td>
//                         <img src="/images/downgraph.png" width="124px" height="24px" alt="Graph 1" />
//                     </td>
//                 </tr>
//                 <tr>
//                     <td>7</td>
//                     <td>
//                         <img src="/images/poolimg.png" class="tokenimg" alt="" />
//                         USDC/WETH<span class="ms-2 badge badges">0.05%</span>
//                     </td>
//                     <td>$100</td>

//                     <td>
//                         <img src="/images/down.png" class="tokenimg" alt="" /> 0.22%
//                     </td>
//                     <td>$9.7B</td>
//                     <td>$49.1M</td>
//                     <td>
//                         <img src="/images/downgraph.png" width="124px" height="24px" alt="Graph 1" />
//                     </td>
//                 </tr>
//                 <tr>
//                     <td>8</td>
//                     <td>
//                         <img src="/images/poolimg.png" class="tokenimg" alt="" />
//                         USDC/WETH<span class="ms-2 badge badges">0.05%</span>
//                     </td>
//                     <td>$100</td>

//                     <td>
//                         <img src="/images/down.png" class="tokenimg" alt="" /> 0.22%
//                     </td>
//                     <td>$9.7B</td>
//                     <td>$49.1M</td>
//                     <td>
//                         <img src="/images/downgraph.png" width="124px" height="24px" alt="Graph 1" />
//                     </td>
//                 </tr>
//                 <tr>
//                     <td>9</td>
//                     <td>
//                         <img src="/images/poolimg.png" class="tokenimg" alt="" />
//                         USDC/WETH<span class="ms-2 badge badges">0.05%</span>
//                     </td>
//                     <td>$100</td>

//                     <td>
//                         <img src="/images/down.png" class="tokenimg" alt="" /> 0.22%
//                     </td>
//                     <td>$9.7B</td>
//                     <td>$49.1M</td>
//                     <td>
//                         <img src="/images/downgraph.png" width="124px" height="24px" alt="Graph 1" />
//                     </td>
//                 </tr>
//                 <tr>
//                     <td>10</td>
//                     <td>
//                         <img src="/images/poolimg.png" class="tokenimg" alt="" />
//                         USDC/WETH<span class="ms-2 badge badges">0.05%</span>
//                     </td>
//                     <td>$100</td>

//                     <td>
//                         <img src="/images/down.png" class="tokenimg" alt="" /> 0.22%
//                     </td>
//                     <td>$9.7B</td>
//                     <td>$49.1M</td>
//                     <td>
//                         <img src="/images/downgraph.png" width="124px" height="24px" alt="Graph 1" />
//                     </td>
//                 </tr>
//                 <tr>
//                     <td>11</td>
//                     <td>
//                         <img src="/images/poolimg.png" class="tokenimg" alt="" />
//                         USDC/WETH<span class="ms-2 badge badges">0.05%</span>
//                     </td>
//                     <td>$100</td>

//                     <td>
//                         <img src="/images/down.png" class="tokenimg" alt="" /> 0.22%
//                     </td>
//                     <td>$9.7B</td>
//                     <td>$49.1M</td>
//                     <td>
//                         <img src="/images/downgraph.png" width="124px" height="24px" alt="Graph 1" />
//                     </td>
//                 </tr>
//                 <tr>
//                     <td>12</td>
//                     <td>
//                         <img src="/images/poolimg.png" class="tokenimg" alt="" />
//                         USDC/WETH<span class="ms-2 badge badges">0.05%</span>
//                     </td>
//                     <td>$100</td>

//                     <td>
//                         <img src="/images/down.png" class="tokenimg" alt="" /> 0.22%
//                     </td>
//                     <td>$9.7B</td>
//                     <td>$49.1M</td>
//                     <td>
//                         <img src="/images/downgraph.png" width="124px" height="24px" alt="Graph 1" />
//                     </td>
//                 </tr>
//                 <tr>
//                     <td>13</td>
//                     <td>
//                         <img src="/images/poolimg.png" class="tokenimg" alt="" />
//                         USDC/WETH<span class="ms-2 badge badges">0.05%</span>
//                     </td>
//                     <td>$100</td>

//                     <td>
//                         <img src="/images/down.png" class="tokenimg" alt="" /> 0.22%
//                     </td>
//                     <td>$9.7B</td>
//                     <td>$49.1M</td>
//                     <td>
//                         <img src="/images/downgraph.png" width="124px" height="24px" alt="Graph 1" />
//                     </td>
//                 </tr>
//                 <tr>
//                     <td>14</td>
//                     <td>
//                         <img src="/images/poolimg.png" class="tokenimg" alt="" />
//                         USDC/WETH<span class="ms-2 badge badges">0.05%</span>
//                     </td>
//                     <td>$100</td>

//                     <td>
//                         <img src="/images/down.png" class="tokenimg" alt="" /> 0.22%
//                     </td>
//                     <td>$9.7B</td>
//                     <td>$49.1M</td>
//                     <td>
//                         <img src="/images/downgraph.png" width="124px" height="24px" alt="Graph 1" />
//                     </td>
//                 </tr>
//                 <tr>
//                     <td>15</td>
//                     <td>
//                         <img src="/images/poolimg.png" class="tokenimg" alt="" />
//                         USDC/WETH<span class="ms-2 badge badges">0.05%</span>
//                     </td>
//                     <td>$100</td>

//                     <td>
//                         <img src="/images/down.png" class="tokenimg" alt="" /> 0.22%
//                     </td>
//                     <td>$9.7B</td>
//                     <td>$49.1M</td>
//                     <td>
//                         <img src="/images/downgraph.png" width="124px" height="24px" alt="Graph 1" />
//                     </td>
//                 </tr>
//                 <tr>
//                     <td>16</td>
//                     <td>
//                         <img src="/images/poolimg.png" class="tokenimg" alt="" />
//                         USDC/WETH<span class="ms-2 badge badges">0.05%</span>
//                     </td>
//                     <td>$100</td>

//                     <td>
//                         <img src="/images/down.png" class="tokenimg" alt="" /> 0.22%
//                     </td>
//                     <td>$9.7B</td>
//                     <td>$49.1M</td>
//                     <td>
//                         <img src="/images/downgraph.png" width="124px" height="24px" alt="Graph 1" />
//                     </td>
//                 </tr>
//             </tbody>
//         </table>
//     </div>

//     {/* <!-- =============== Transactions Table================ --> */}

//     <div class="container mt-1 mb-5 p-0 table-responsive table-container" style={{borderRadius:'15px'}}>
//         <table class="table glassmorphism mb-0 p-5 text-light">
//             <thead>
//                 <tr class="border-bottom">
//                     <th>
//                         <img src="/images/volumearrow.png" alt="" style={{height:'20px',width:'20px'}} />Time
//                     </th>
//                     <th>Type</th>
//                     <th>USD</th>
//                     <th>Token amount</th>
//                     <th>Token amount</th>
//                     <th>Wallet</th>
//                 </tr>
//             </thead>
//             <tbody>
//                 <tr>
//                     <td>1</td>
//                     <td> SWAP <img src="/images/masklogo.png" class="tokenimg ms1" alt=""/> USDC for <img src="/images/masklogo.png" class="tokenimg ms1" alt=""/> axlUC</td>
//                     <td>$100</td>
//                     <td><img src="/images/up.png" class="tokenimg" alt="" /> 0.00%</td>
//                     <td><img src="/images/down.png" class="tokenimg" alt="" /> 0.22%</td>
//                     <td>$49.1M</td>
//                     <td><img src="/images/downgraph.png" width="124px" height="24px" alt="Graph 1"/></td>
//                 </tr>
//                 <tr>
//                     <td>2</td>
//                     <td> SWAP <img src="/images/masklogo.png" class="tokenimg ms1" alt=""/> USDC for <img src="/images/masklogo.png" class="tokenimg ms1" alt=""/> axlUC</td>
//                     <td>$100</td>
//                     <td><img src="/images/up.png" class="tokenimg" alt="" /> 0.00%</td>
//                     <td><img src="/images/down.png" class="tokenimg" alt="" /> 0.22%</td>
//                     <td>$49.1M</td>
//                     <td><img src="/images/downgraph.png" width="124px" height="24px" alt="Graph 1"/></td>
//                 </tr>
//                 <tr>
//                     <td>3</td>
//                     <td> SWAP <img src="/images/masklogo.png" class="tokenimg ms1" alt=""/> USDC for <img src="/images/masklogo.png" class="tokenimg ms1" alt=""/> axlUC</td>
//                     <td>$100</td>
//                     <td><img src="/images/up.png" class="tokenimg" alt="" /> 0.00%</td>
//                     <td><img src="/images/down.png" class="tokenimg" alt="" /> 0.22%</td>
//                     <td>$49.1M</td>
//                     <td><img src="/images/downgraph.png" width="124px" height="24px" alt="Graph 1"/></td>
//                 </tr>
//                 <tr>
//                     <td>4</td>
//                     <td> SWAP <img src="/images/masklogo.png" class="tokenimg ms1" alt=""/> USDC for <img src="/images/masklogo.png" class="tokenimg ms1" alt=""/> axlUC</td>
//                     <td>$100</td>
//                     <td><img src="/images/up.png" class="tokenimg" alt="" /> 0.00%</td>
//                     <td><img src="/images/down.png" class="tokenimg" alt="" /> 0.22%</td>
//                     <td>$49.1M</td>
//                     <td><img src="/images/downgraph.png" width="124px" height="24px" alt="Graph 1"/></td>
//                 </tr>
//                 <tr>
//                     <td>5</td>
//                     <td> SWAP <img src="/images/masklogo.png" class="tokenimg ms1" alt=""/> USDC for <img src="/images/masklogo.png" class="tokenimg ms1" alt=""/> axlUC</td>
//                     <td>$100</td>
//                     <td><img src="/images/up.png" class="tokenimg" alt="" /> 0.00%</td>
//                     <td><img src="/images/down.png" class="tokenimg" alt="" /> 0.22%</td>
//                     <td>$49.1M</td>
//                     <td><img src="/images/downgraph.png" width="124px" height="24px" alt="Graph 1"/></td>
//                 </tr>
//                 <tr>
//                     <td>6</td>
//                     <td> SWAP <img src="/images/masklogo.png" class="tokenimg ms1" alt=""/> USDC for <img src="/images/masklogo.png" class="tokenimg ms1" alt=""/> axlUC</td>
//                     <td>$100</td>
//                     <td><img src="/images/up.png" class="tokenimg" alt="" /> 0.00%</td>
//                     <td><img src="/images/down.png" class="tokenimg" alt="" /> 0.22%</td>
//                     <td>$49.1M</td>
//                     <td><img src="/images/downgraph.png" width="124px" height="24px" alt="Graph 1"/></td>
//                 </tr>
//                 <tr>
//                     <td>7</td>
//                     <td> SWAP <img src="/images/masklogo.png" class="tokenimg ms1" alt=""/> USDC for <img src="/images/masklogo.png" class="tokenimg ms1" alt=""/> axlUC</td>
//                     <td>$100</td>
//                     <td><img src="/images/up.png" class="tokenimg" alt="" /> 0.00%</td>
//                     <td><img src="/images/down.png" class="tokenimg" alt="" /> 0.22%</td>
//                     <td>$49.1M</td>
//                     <td><img src="/images/downgraph.png" width="124px" height="24px" alt="Graph 1"/></td>
//                 </tr>
//                 <tr>
//                     <td>8</td>
//                     <td> SWAP <img src="/images/masklogo.png" class="tokenimg ms1" alt=""/> USDC for <img src="/images/masklogo.png" class="tokenimg ms1" alt=""/> axlUC</td>
//                     <td>$100</td>
//                     <td><img src="/images/up.png" class="tokenimg" alt="" /> 0.00%</td>
//                     <td><img src="/images/down.png" class="tokenimg" alt="" /> 0.22%</td>
//                     <td>$49.1M</td>
//                     <td><img src="/images/downgraph.png" width="124px" height="24px" alt="Graph 1"/></td>
//                 </tr>
//                 <tr>
//                     <td>9</td>
//                     <td> SWAP <img src="/images/masklogo.png" class="tokenimg ms1" alt=""/> USDC for <img src="/images/masklogo.png" class="tokenimg ms1" alt=""/> axlUC</td>
//                     <td>$100</td>
//                     <td><img src="/images/up.png" class="tokenimg" alt="" /> 0.00%</td>
//                     <td><img src="/images/down.png" class="tokenimg" alt="" /> 0.22%</td>
//                     <td>$49.1M</td>
//                     <td><img src="/images/downgraph.png" width="124px" height="24px" alt="Graph 1"/></td>
//                 </tr>
//                 <tr>
//                     <td>10</td>
//                     <td> SWAP <img src="/images/masklogo.png" class="tokenimg ms1" alt=""/> USDC for <img src="/images/masklogo.png" class="tokenimg ms1" alt=""/> axlUC</td>
//                     <td>$100</td>
//                     <td><img src="/images/up.png" class="tokenimg" alt="" /> 0.00%</td>
//                     <td><img src="/images/down.png" class="tokenimg" alt="" /> 0.22%</td>
//                     <td>$49.1M</td>
//                     <td><img src="/images/downgraph.png" width="124px" height="24px" alt="Graph 1"/></td>
//                 </tr>
//                 <tr>
//                     <td>11</td>
//                     <td> SWAP <img src="/images/masklogo.png" class="tokenimg ms1" alt=""/> USDC for <img src="/images/masklogo.png" class="tokenimg ms1" alt=""/> axlUC</td>
//                     <td>$100</td>
//                     <td><img src="/images/up.png" class="tokenimg" alt="" /> 0.00%</td>
//                     <td><img src="/images/down.png" class="tokenimg" alt="" /> 0.22%</td>
//                     <td>$49.1M</td>
//                     <td><img src="/images/downgraph.png" width="124px" height="24px" alt="Graph 1"/></td>
//                 </tr>
//                 <tr>
//                     <td>12</td>
//                     <td> SWAP <img src="/images/masklogo.png" class="tokenimg ms1" alt=""/> USDC for <img src="/images/masklogo.png" class="tokenimg ms1" alt=""/> axlUC</td>
//                     <td>$100</td>
//                     <td><img src="/images/up.png" class="tokenimg" alt="" /> 0.00%</td>
//                     <td><img src="/images/down.png" class="tokenimg" alt="" /> 0.22%</td>
//                     <td>$49.1M</td>
//                     <td><img src="/images/downgraph.png" width="124px" height="24px" alt="Graph 1"/></td>
//                 </tr>
//                 <tr>
//                     <td>13</td>
//                     <td> SWAP <img src="/images/masklogo.png" class="tokenimg ms1" alt=""/> USDC for <img src="/images/masklogo.png" class="tokenimg ms1" alt=""/> axlUC</td>
//                     <td>$100</td>
//                     <td><img src="/images/up.png" class="tokenimg" alt="" /> 0.00%</td>
//                     <td><img src="/images/down.png" class="tokenimg" alt="" /> 0.22%</td>
//                     <td>$49.1M</td>
//                     <td><img src="/images/downgraph.png" width="124px" height="24px" alt="Graph 1"/></td>
//                 </tr>
//                 <tr>
//                     <td>14</td>
//                     <td> SWAP <img src="/images/masklogo.png" class="tokenimg ms1" alt=""/> USDC for <img src="/images/masklogo.png" class="tokenimg ms1" alt=""/> axlUC</td>
//                     <td>$100</td>
//                     <td><img src="/images/up.png" class="tokenimg" alt="" /> 0.00%</td>
//                     <td><img src="/images/down.png" class="tokenimg" alt="" /> 0.22%</td>
//                     <td>$49.1M</td>
//                     <td><img src="/images/downgraph.png" width="124px" height="24px" alt="Graph 1"/></td>
//                 </tr> <tr>
//                     <td>15</td>
//                     <td> SWAP <img src="/images/masklogo.png" class="tokenimg ms1" alt=""/> USDC for <img src="/images/masklogo.png" class="tokenimg ms1" alt=""/> axlUC</td>
//                     <td>$100</td>
//                     <td><img src="/images/up.png" class="tokenimg" alt="" /> 0.00%</td>
//                     <td><img src="/images/down.png" class="tokenimg" alt="" /> 0.22%</td>
//                     <td>$49.1M</td>
//                     <td><img src="/images/downgraph.png" width="124px" height="24px" alt="Graph 1"/></td>
//                 </tr>

//             </tbody>
//         </table>
//     </div>
//     </div>
//   )
// }

// export default Token
