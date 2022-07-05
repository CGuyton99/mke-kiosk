import React, {useMemo} from "react";
import { useTable } from "react-table";
import { COLUMNS } from "../components/judgesColumns";
import styles from '../styles/table.module.css';

export const getServerSideProps = async() => {
    const res = await fetch("http://localhost:3000/api/judgesApi");
    const Judges = await res.json();
    return {
        props: {Judges},
    };
};

export default function Judges({Judges}) {
    //  console.log(Judges)
    const columns = useMemo(() => COLUMNS, []); 
    // console.log(columns);
    const data = useMemo (() => Judges, []);
    // console.log(data);

    //CREATE A TABLE INSTANCE
    const {
        getTableProps,
        getTableBodyProps,
        headerGroups,
        rows,
        prepareRow,
    }    = useTable({//useTable hook.. We pass in an object as argument 
        // columns: COLUMNS,//we specify two properties, columns and rows
        // data: MOCK_DATA

        columns,//shorthand 
        data
    })

    return(
        <div className={styles.table}>
            <table style={{width: "100%"}} {...getTableProps()}>
        <thead>
            {headerGroups.map((headerGroup) => (
                <tr {...headerGroup.getHeaderGroupProps()}>
                    {headerGroup.headers.map((column) => (
                        <th {...column.getHeaderProps()}>{column.render("Header")}</th>
                    ))}
                </tr>    
            ))}
            <tr style={{}}>
                <th style={{}}></th>
            </tr>
        </thead>
        <tbody {...getTableBodyProps()}>
            {rows.map((row) => {
                prepareRow(row)
                return (
                    <tr {...row.getRowProps()}>
                        {row.cells.map((cell) => {
                            return <td {...cell.getCellProps()}>{cell.render("Cell")}</td>
                        })}
                    </tr>
                )
            })}
            <tr>
                <td style={{}}></td>
            </tr>
        </tbody>
    </table>
		</div>
    )
}; 