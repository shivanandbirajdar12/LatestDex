import React, { useState, useEffect } from 'react';
import { useTable } from 'react-table';
import myImage from '../Assets/ph_arrow-down.png';
import { Table } from 'react-bootstrap';

const TokenTable = () => {
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
            {' #'}
          </>
        ),
        accessor: 'rank',
      },
      {
        Header: () => (
          <>
            {' Token Name'}
            <img src={myImage} alt="Arrow Down" style={{ height: '20px', width: '20px' }} />
          </>
        ),
        accessor: 'name',
        Cell: ({ row }) => (
          <div>
            <img src={row.original.image} className="tokenimg" alt="" /> {row.original.name} <span>{row.original.symbol}</span>
          </div>
        )
      },
      {
        Header: () => (
          <>
            {' Price'}
            <img src={myImage} alt="Arrow Down" style={{ height: '20px', width: '20px' }} />
          </>
        ),
        accessor: 'price',
        Cell: ({ value }) => `$${value}`
      },
      {
        Header: () => (
          <>
            {' 1 Hour'}
            <img src={myImage} alt="Arrow Down" style={{ height: '20px', width: '20px' }} />
          </>
        ),
        accessor: 'hourChange',
        Cell: ({ value }) => (
          <div>
            <img src={value > 0 ? "/images/up.png" : "/images/down.png"} className="tokenimg" alt="" /> {value}%
          </div>
        )
      },
      {
        Header: () => (
          <>
            {' 1 Day'}
            <img src={myImage} alt="Arrow Down" style={{ height: '20px', width: '20px' }} />
          </>
        ),
        accessor: 'dayChange',
        Cell: ({ value }) => (
          <div>
            <img src={value > 0 ? "/images/up.png" : "/images/down.png"} className="tokenimg" alt="" /> {value}%
          </div>
        )
      },
      {
        Header: () => (
          <>
            {' FDV'}
            <img src={myImage} alt="Arrow Down" style={{ height: '20px', width: '20px' }} />
          </>
        ),
        accessor: 'marketCap',
        Cell: ({ value }) => `$${value}`
      },
      {
        Header: () => (
          <>
            {' Volume'}
            <img src={myImage} alt="Arrow Down" style={{ height: '20px', width: '20px' }} />
          </>
        ),
        accessor: 'volume',
        Cell: ({ value }) => `$${value}`
      },
      {
        Header: () => (
          <>
            {' Graph'}
            <img src={myImage} alt="Arrow Down" style={{ height: '20px', width: '20px' }} />
          </>
        ),
        accessor: 'graphImage',
        Cell: ({ value }) => <img src={value} style={{ height: '24px', width: '124px' }} alt="Graph" />
      }
    ],
    []
  );

  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } = useTable({ columns, data: tokenData });

  return (
    <div className='container  mt-2'>
      <div className='table-responsive '>
        <Table {...getTableProps()} className='table tablestruct table-striped '>
          <thead style={{color:'rgba(155, 151, 151, 1)',backgroundColor:'rgba(10, 30, 39, 1)'}}>
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

export default TokenTable;
