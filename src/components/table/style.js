import {makeStyles} from "@material-ui/core/styles";

export const useTableStyle = makeStyles(() => ({
    tableHead: {
        backgroundColor: "#deebf7"
    },
    tableCell: {
        "& .MuiTableCell-root": {
            minWidth: "30px"
        }
    },
    checkBox: {
        // "& .MuiCheckbox-root ": {
        //     color: "rgba(0, 0, 0, 0.54)",
        // },
        "MuiIconButton-colorSecondary": {
            color: "blue",
        }
    }
}))