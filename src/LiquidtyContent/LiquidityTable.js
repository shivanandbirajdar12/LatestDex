import React, { useState, useEffect } from 'react';
import { useTable } from 'react-table';
import myImage from '../Assets/ph_arrow-down.png';


const LiquidityTable = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch('api_url');
                const result = await response.json();
                setData(result);
            } catch (error) {
                // console.error('Error fetching data:', error);
            }
        };

        fetchData();
    }, []);

    const columns = React.useMemo(
        () => [
            {
                Header: 'Tx Hash',
                accessor: 'Tx Hash',
            },
            {
                Header: 'In Amount',
                accessor: 'In Amount',
            },
            {
                Header: 'Token Symbol',
                accessor: 'Token Symbol',
            },
            {
                Header: 'In Value $',
                accessor: 'In Value $',
            },
            {
                Header: 'Out Amount',
                accessor: 'Out Amount',
            },
            {
                Header: 'Out Symbol',
                accessor: 'Out Symbol',
            },
            {
                Header: 'Out Value $',
                accessor: 'Out Value $',
            },
            {
                Header: 'Time',
                accessor: 'Time',
            },
        ],
        []
    );

    const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } = useTable({ columns, data });

    return (
        <div className='container mt-2'>
            <div className='table-responsive  px-3'>
                <table {...getTableProps()} className='table tablestruct'>
                    <thead  style={{color:'rgba(155, 151, 151, 1)',backgroundColor:'rgba(10, 30, 39, 1)'}}>
                        {headerGroups.map(headerGroup => (
                            <tr className='text-center' {...headerGroup.getHeaderGroupProps()}>
                                {headerGroup.headers.map(column => (
                                    <th {...column.getHeaderProps()}>
                                        {column.render('Header')}
                                        {column.image && <img src={myImage} alt="Downward Arrow" />}
                                    </th>
                                ))}
                            </tr>
                        ))}
                    </thead>
                    <tbody {...getTableBodyProps()} >
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
export default LiquidityTable;
