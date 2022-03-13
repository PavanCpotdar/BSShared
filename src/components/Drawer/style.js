import {makeStyles} from "@material-ui/core/styles";

export const useDrawerStyle = makeStyles((theme) => ({
    root: {
        backgroundColor: theme.palette.primary.main,
        width: "230px",
        "& .MuiPaper-root": {
            width: "230px",
            marginTop: "65px",
            backgroundColor: theme.palette.primary.main,
            flexShrink: 0,
            whiteSpace: 'nowrap',
            boxSizing: 'border-box',
        }
    },
    drawerOpen: {
        "&, & .MuiPaper-root": {
            width: "230px",
            transition: theme.transitions.create('width', {
                easing: theme.transitions.easing.sharp,
                duration: theme.transitions.duration.enteringScreen,
            }),
        }
    },
    drawerClose: {
        "&, & .MuiPaper-root": {
            transition: theme.transitions.create('width', {
                easing: theme.transitions.easing.sharp,
                duration: theme.transitions.duration.leavingScreen,
            }),
            marginLeft: "-1px",
            overflowX: 'hidden',
            width: 0,
        }
    },
    list: {
        "& a": {
            textDecoration: "none",
        },
        "& .MuiListItem-root": {
            width: "94%",
            margin: "8px auto",
            borderRadius: "6px",
            color: theme.palette.colors.white,

            "&:hover": {
                backgroundColor: theme.palette.list.main,
                color: theme.palette.primary.main,
            },
        }
    },
}))
