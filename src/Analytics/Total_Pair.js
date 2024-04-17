import React, { useState, useEffect } from 'react';
import { useTable } from 'react-table';
import myImage from '../Assets/ph_arrow-down.png';
import liquidityimg from '../Assets/images2/ph_arrow-down (1).png';


const Total_Pair = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('apiurl');
        const result = await response.json();
        setData(result);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  const columns = React.useMemo(
    () => [
      {
        Header: () => (
          <>
            {' #'}
          </>
        ),
        accessor: 'id',
      },
      {
        Header: () => (
          <>
    
            {' Pair'}
            <img src={myImage} alt="Arrow Down" style={{ height: '20px', width: '20px' }} />
          </>
        ),
        accessor: 'pair',
      },
      {
        Header: () => (
          <>
           
           <span style={{ color: 'rgba(29, 100, 250, 1)' }}> {' Liquidity'} </span>
            <img src={liquidityimg} alt="Arrow Down"  style={{ height: '20px', width: '20px' }}/>
          </>
        ),
        accessor: 'liquidity',
      },
      {
        Header: () => (
          <>
           
            {' 24h Volume'}
            <img src={myImage} alt="Arrow Down" style={{ height: '20px', width: '20px' }} />
          </>
        ),
        accessor: '24hVolume',
      },
      {
        Header: () => (
          <>
            {' 7d Volume'}
            <img src={myImage} alt="Arrow Down" style={{ height: '20px', width: '20px' }} />
          </>
        ),
        accessor: '7dVolume',
      },
    ],
    []
  );

  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } = useTable({ columns, data });

  return (
    <div className='container mt-4'>
      <div className='table-responsive '>
        <table {...getTableProps()} className='table tablestruct table-striped '>
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
        </table>
      </div>
    </div>
  );
};

export default Total_Pair;
