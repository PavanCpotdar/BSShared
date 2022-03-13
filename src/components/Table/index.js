import React, {Fragment, useState} from "react";
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import {Checkbox, TablePagination} from "@material-ui/core";
import GetAppIcon from '@material-ui/icons/GetApp';
import EditSharpIcon from '@material-ui/icons/EditSharp';
import DeleteIcon from '@material-ui/icons/Delete';
import {useTableStyle} from "./style";


const CustomTable = (props) => {
    const [check, setCheck] = useState(false);

    const columns = [
        {id: "checkBox"},
        {id: "name", label: "Name"},
        {id: "smartBoard", label: "Smart Board"},
        {id: "smartPad", label: "Smart Pad"},
        {id: "cabinet", label: "Cabinet"},
        {id: "endDateOfLicense", label: "End date of license"},
        {id: "email", label: "Email"},
        {id: "createdBy", label: "Created by"},
        {id: "createdAt", label: "Created At"},
        {id: "actions", label: "Actions"},
    ]

    const rows = [
        {
            name: "Tony", smartBoard: 5, smartPad: 6, cabinet: 1, endDateOfLicense: "10-09-2022",
            email: "xyz@test.com", createdBy: "Roy Walter", createdAt: "02-11-2020", id: "e1"
        },
        {
            name: "Vilim's", smartBoard: 2, smartPad: 4, cabinet: 2, endDateOfLicense: "20-06-2023",
            email: "vilims@test.com", createdBy: "Roy Walter", createdAt: "05-10-2020", id: "e2"
        },
    ]

    const handleChangePage = () => {
    };
    const handleChangeRowsPerPage = () => {
    };

    const checkChange = () => {
        setCheck(!check)
    }

    const myStyle = useTableStyle();

    return (
        <Fragment>
            <Paper>
                <TableContainer component={Paper}>
                    <Table className="table" aria-label="simple table">
                        <TableHead className={myStyle.tableHead}>
                            <TableRow className={myStyle.tableCell}>
                                {columns.map((column) => (
                                    column.id === "checkBox" ?
                                        <TableCell key={column.id}
                                                   padding="checkbox">
                                            <Checkbox checked={check} onClick={checkChange}/>
                                        </TableCell> :
                                        <TableCell key={column.id}
                                                   align={"center"}>
                                            {column.label}
                                        </TableCell>
                                ))}
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {rows.map((row) => (
                                <TableRow hover role="checkbox" tabIndex={-1} className={myStyle.tableCell}
                                          key={row.name}>
                                    {columns.map((column) => {
                                        switch (column.id) {
                                            case "actions" :
                                                return (
                                                    <TableCell key={column.id} align={"center"}>
                                                        <GetAppIcon/>
                                                        <EditSharpIcon/>
                                                        <DeleteIcon/>
                                                    </TableCell>
                                                );

                                            case "checkBox":
                                                return (
                                                    <TableCell key={column.id}
                                                               padding="checkbox">
                                                        <Checkbox checked={check}  className={myStyle.checkBox}/>
                                                    </TableCell>
                                                );

                                            default:
                                                return (
                                                    <TableCell key={column.id} align={"center"}>
                                                        {row[column.id]}
                                                    </TableCell>
                                                );
                                        }
                                    })}
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer>
                <TablePagination
                    rowsPerPageOptions={[5, 10, 25]}
                    component="div"
                    count={rows.length}
                    rowsPerPage={10}
                    page={0}
                    onPageChange={handleChangePage}
                    onRowsPerPageChange={handleChangeRowsPerPage}
                />
            </Paper>
        </Fragment>
    );
}

export default CustomTable;