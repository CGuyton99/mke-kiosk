export const COLUMNS = [//this is an array of objects
    //each column is represented by an object in this array
    {
        Header: 'Branch',//we need a way to associate each column with the rows of data, for that we need to specify the accessor property for each column
        accessor: 'BranchId'
    },

    {
        Header: 'COURT OFFICIAL #',//we need a way to associate each column with the rows of data, for that we need to specify the accessor property for each column
        accessor: 'CourtOfficial'
    },

    {
        Header: 'JUDGE',//we need a way to associate each column with the rows of data, for that we need to specify the accessor property for each column
        accessor: 'Judge'
    },

    {
        Header: 'DEPUTY COURT CLERK',
        accessor: 'Deputy_Court_Clerk'

    },

    {
        Header: 'DEPARTMENT',
        accessor: 'Department'
    },

    {
        Header: 'ADDRESS',
        accessor: 'Address'  
    },
    
    {
        Header: 'ROOM',
        accessor: 'Room'
    },

    {
        Header: 'PHONE',
        accessor: 'Phone'
    }
];