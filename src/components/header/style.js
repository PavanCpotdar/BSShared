import {makeStyles} from "@material-ui/core/styles";


export const useAppBarStyle = makeStyles((theme) => ({
    appbar: {
        width: "-webkit-fill-available",
        "& .MuiAppBar-positionSticky": {
            position: "sticky",
        },
        "& .MuiToolbar-root": {
            backgroundColor: theme.palette.colors.white,
            color: theme.palette.primary.main,
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
                backgroundColor: theme.palette.colors.white,
            }
        },
        "& .MuiToolbar-root .MuiList-root": {
            display: "contents",
        }
    },
    list: {
        width: '100%',
        maxWidth: 360,
        // backgroundColor: 'background.paper',
    },
    logo: {
        backgroundColor: theme.palette.primary.main,
        height: "65px",
        display: "flex",
        alignItems: "center",
        width: "230px"
    }
}));