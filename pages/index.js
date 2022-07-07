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
    // console.log(judges)
    const columns = useMemo(() => COLUMNS, []); 
    console.log(columns);
    const data = useMemo (() => Judges, []);
    console.log(data);

    //CREATE A TABLE INSTANCE
    const {
        getTableProps,
        getTableBodyProps,
        headerGroups,
        rows,
        prepareRow,
    }    = useTable({

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



// import Judges,{ getServerSideProps } from "./directory"
// import { useTable } from "react-table";
// import { COLUMNS } from "../components/judgesColumns";
// import styles from '../styles/table.module.css';

// const b = getServerSideProps;
// export default function a ()  {
// 	return(
// 		<div>
// 			<Judges {b}/>
// 			<>test</>
// 		</div>
// 	)
// };