import {makeStyles} from "@material-ui/core/styles";

export const useDrawerStyle = makeStyles((theme) => ({
    root: {
        backgroundColor: theme.palette.background.paper,
        width: "230px",
        "& .MuiPaper-root": {
            width: "230px",
            marginTop: "65px",
            backgroundColor: "#1e4e79",
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
        "& .MuiListItem-root": {
            width: "94%",
            margin: "8px auto",
            borderRadius: "6px",
            color: "white",

            "&:hover": {
                backgroundColor: "#D9E3EB",
                color: "#1e4e79"
            },
        }
    },
}))
