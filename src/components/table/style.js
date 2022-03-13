import {makeStyles} from "@material-ui/core/styles";

export const useTableStyle = makeStyles((theme) => ({
    tableHead: {
        backgroundColor: theme.palette.primary.light,
    },
    tableCell: {
        "& .MuiTableCell-root": {
            minWidth: "30px"
        }
    },
    checkBox: {
        "& .MuiFormControlLabel-root": {
            margin: "auto",
        }
    }
}))