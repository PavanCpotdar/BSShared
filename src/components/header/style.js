import {makeStyles} from "@material-ui/core/styles";


export const useAppBarStyle = makeStyles(() => ({
    appbar: {
        width: "-webkit-fill-available",
        "& .MuiAppBar-positionSticky": {
            position: "sticky",
        },
        "& .MuiToolbar-root": {
            backgroundColor: "white",
            color: "#1e4e79",
            paddingLeft: "0px"
        },
        "& .MuiToolbar-root .MuiSvgIcon-root": {
            margin: "10px",
            cursor: "pointer",
        },
        "& .MuiToolbar-root .MuiDivider-root": {
            width: "1px",
            height: "54px",
            margin: "auto",
        },
        "& .MuiToolbar-root img": {
            width: "230px",
            cursor: "pointer",
        },
        "& .MuiToolbar-root .MuiTypography-root": {
            flexGrow: 1,
            fontWeight: "bold",
            marginLeft: "20px"
        },
        "& .MuiToolbar-root .MuiList-root .MuiButton-root": {
            fontSize: "15px",
            textTransform: "capitalize",
            color: "black",
            "&:hover": {
                backgroundColor: "white",
            }
        },
        "& .MuiToolbar-root .MuiList-root": {
            display: "contents",
        }
    },
    list: {
        width: '100%',
        maxWidth: 360,
        backgroundColor: 'background.paper',
    },
    logo: {
        backgroundColor: "#1e4e79",
        height: "65px",
        display: "flex",
        alignItems: "center",
    }
}));