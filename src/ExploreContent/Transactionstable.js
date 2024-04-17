
// import React, { useState, useEffect } from 'react';
// import { useTable } from 'react-table';
// import { Table } from 'react-bootstrap';
// import "../Assets/CSS/tokens.css"

// const Transactionstable = () => {
  
//   const [tableData, setTableData] = useState([]);

  
//   useEffect(() => {
//     // Replace 'apiurl' with the actual endpoint of your API
//     fetch('apiurl')
//       .then(response => response.json())
//       .then(data => setTableData(data))
//       .catch(error => console.error('Error fetching data:', error));
//   }, []);

  
//   const columns = [
//     {
//       Header: () => (
//         <div>
//           <img src="/images/volumearrow.png" alt="" style={{ height: '20px', width: '20px' }} /> Time
//         </div>
//       ),
//       accessor: 'time',
//     },
//     { Header: 'Type', accessor: 'type' },
//     { Header: 'USD', accessor: 'usd' },
//     {
//       Header: 'Token amount',
//       accessor: 'tokenAmountUp',
//       Cell: ({ value }) => (
//         <div>
//           <img src="/images/up.png" className="tokenimg" alt="" /> {value}
//         </div>
//       ),
//     },
//     {
//       Header: 'Token amount',
//       accessor: 'tokenAmountDown',
//       Cell: ({ value }) => (
//         <div>
//           <img src="/images/down.png" className="tokenimg" alt="" /> {value}
//         </div>
//       ),
//     },
//     { Header: 'Wallet', accessor: 'wallet' },
//     {
//       Header: '',
//       accessor: 'graph',
//       Cell: () => (
//         <img src="/images/downgraph.png" width="124px" height="24px" alt="Graph 1" />
//       ),
//     },
//   ];

//   // Initialize react-table instance
//   const {
//     getTableProps,
//     getTableBodyProps,
//     headerGroups,
//     rows,
//     prepareRow,
//   } = useTable({ columns, data: tableData });

//   return (
//     <div className="container mt-1  p-0 table-responsive table-container" style={{ borderRadius: '15px' }}>
//       <Table className="table  mb-0 p-5 " striped bordered hover {...getTableProps()}>
//         <thead style={{backgroundColor:'rgba(10, 30, 39, 1)'}}> 
//           {headerGroups.map(headerGroup => (
//             <tr {...headerGroup.getHeaderGroupProps()} className="border-bottom thead-background">
//               {headerGroup.headers.map(column => (
//                 <th {...column.getHeaderProps()}>
//                   {column.render('Header')}
//                 </th>
//               ))}
//             </tr>
//           ))}
//         </thead>
//         <tbody className='glassmorphism' {...getTableBodyProps()}>
//           {rows.map(row => {
//             prepareRow(row);
//             return (
//               <tr {...row.getRowProps()}>
//                 {row.cells.map(cell => (
//                   <td {...cell.getCellProps()}>{cell.render('Cell')}</td>
//                 ))}
//               </tr>
//             );
//           })}
//         </tbody>
//       </Table>
//     </div>
//   );
// };

// export default Transactionstable;
import React, { useState, useEffect } from 'react';
import { useTable } from 'react-table';
import myImage from '../Assets/ph_arrow-down.png';
import { Table } from 'react-bootstrap';

const Pooltable = () => {
  const [tokenData, setTokenData] = useState([]);

  useEffect(() => {
    fetch('apiurl')
      .then((response) => response.json())
      .then((data) => setTokenData(data))
      .catch((error) => console.error('Error fetching token data:', error));
  }, []);

  const columns = React.useMemo(
    () => [
      {
        Header: () => (
          <>
            <img src={myImage} alt="Arrow Down" style={{ height: '20px', width: '20px' }} />
            {' time'}
          </>
        ),
        accessor: 'time',
      },
      {
        Header: () => (
          <>
            {' Type'}
            
          </>
        ),
        accessor: 'Type',
        Cell: ({ value }) => `$${value}`
      },
      {
        Header: () => (
          <>
            {' USD'}
           
          </>
        ),
        accessor: 'USD',
        Cell: ({ value }) => (
          <div>
            <img src={value > 0 ? "/images/up.png" : "/images/down.png"} className="tokenimg" alt="" /> {value}%
          </div>
        )
      },
      {
        Header: () => (
          <>
            {' Token amount'}
            
          </>
        ),
        accessor: 'Token amount',
        Cell: ({ value }) => (
          <div>
            <img src={value > 0 ? "/images/up.png" : "/images/down.png"} className="tokenimg" alt="" /> {value}%
          </div>
        )
      },
      {
        Header: () => (
          <>
            {' Wallet'}
          </>
        ),
        accessor: 'Wallet',
        Cell: ({ value }) => `$${value}`
      }
    ],
    []
  );

  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } = useTable({ columns, data: tokenData });

  return (
    <div className='container '>
      <div className='table-responsive mt-2  '>
        <Table {...getTableProps()} className='table tablestruct table-striped '>
          <thead style={{ color: 'rgba(155, 151, 151, 1)', backgroundColor: 'rgba(10, 30, 39, 1)' }}>
            {headerGroups.map(headerGroup => (
              <tr {...headerGroup.getHeaderGroupProps()} >
                {headerGroup.headers.map(column => (
                  <th {...column.getHeaderProps()} className='text-center'>
                    {column.render('Header')}
                  </th>
                ))}
              </tr>
            ))}
          </thead>
          <tbody {...getTableBodyProps()}>
            {rows.map(row => {
              prepareRow(row);
              return (
                <tr {...row.getRowProps()} className='glassmorphism'>
                  {row.cells.map(cell => (
                    <td {...cell.getCellProps()}>{cell.render('Cell')}</td>
                  ))}
                </tr>
              );
            })}
          </tbody>
        </Table>
      </div>
    </div>
  );
};

export default Pooltable;
