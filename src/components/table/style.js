import {makeStyles} from "@material-ui/core/styles";

export const useTableStyle = makeStyles((theme) => ({
    tableHead: {
        backgroundColor: theme.palette.primary.light,
    },
    tableCell: {
        minWidth: "100px",
        fontWeight: 600,
        padding: "8px 3px",
        color: theme.palette.primary.darkBlue,
    },
    checkBox: {
        "& .MuiFormControlLabel-root": {
            margin: "auto",
        }
    },
    icons: {
        "& .MuiButtonBase-root": {
            padding: "2px"
        },
        "& .MuiSvgIcon-root": {
            width: "20px",
            margin: "0 2px",
            cursor: "pointer",
            color: theme.palette.primary.darkBlue,
        }
    },
    pagination: {
        color: theme.palette.primary.darkBlue,
        "& .MuiToolbar-root .MuiTablePagination-spacer": {
            display: "none"
        },
        "& .MuiToolbar-root p:last-of-type": {
            marginLeft: "auto"
        }
    }
}))