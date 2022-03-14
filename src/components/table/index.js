import React, {Fragment} from "react";
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import {TablePagination} from "@material-ui/core";
import GetAppIcon from '@material-ui/icons/GetApp';
import EditSharpIcon from '@material-ui/icons/EditSharp';
import DeleteIcon from '@material-ui/icons/Delete';
import {useTableStyle} from "./style";
import CheckboxComponent from "../checkbox/checKBox";


const CustomTable = (props) => {
    const {columns, rows, page, rowsPerPage} = props;


    const handleChangePage = () => {
    };
    const handleChangeRowsPerPage = () => {
    };

    const myStyle = useTableStyle();

    return (
        <Fragment>
            <Paper>
                <TableContainer component={Paper}>
                    <Table className="table" aria-label="simple table">
                        <TableHead className={myStyle.tableHead}>
                            <TableRow>
                                {columns.map((column) => (
                                    column.id === "checkBox" ?
                                        <TableCell key={column.id}
                                                   className={myStyle.checkBox}
                                                   padding="checkbox">
                                            <CheckboxComponent/>
                                        </TableCell> :
                                        <TableCell key={column.id}
                                                   className={myStyle.tableCell}
                                                   align={"center"}>
                                            {column.label}
                                        </TableCell>
                                ))}
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {rows.map((row) => (
                                <TableRow hover role="checkbox" tabIndex={-1}
                                          key={row.name}>
                                    {columns.map((column) => {
                                        switch (column.id) {
                                            case "actions" :
                                                return (
                                                    <TableCell key={column.id} align={"center"}
                                                               className={myStyle.icons}>
                                                        <GetAppIcon/>
                                                        <EditSharpIcon/>
                                                        <DeleteIcon/>
                                                    </TableCell>
                                                );

                                            case "checkBox":
                                                return (
                                                    <TableCell key={column.id}
                                                               className={myStyle.checkBox}
                                                               padding="checkbox">
                                                        <CheckboxComponent/>
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
                    rowsPerPage={rowsPerPage}
                    page={page}
                    onPageChange={handleChangePage}
                    onRowsPerPageChange={handleChangeRowsPerPage}
                    className={myStyle.pagination}
                />
            </Paper>
        </Fragment>
    );
}

export default CustomTable;