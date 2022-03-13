import React, {Fragment} from "react";
import {useDrawerStyle} from "./style";
import {List, ListItem, ListItemText, Drawer} from "@material-ui/core";
import clsx from "clsx";
import CONSTANTS from "../../common/constants";
import {Link} from "react-router-dom";

const CustomDrawer = (props) => {
    const {drawerState, drawerToggle} = props;

    const myStyle = useDrawerStyle();

    return (
        <Fragment>

            <Drawer variant="permanent"
                    open={drawerState}
                    className={clsx(myStyle.root, {
                        [myStyle.drawerOpen]: drawerState,
                        [myStyle.drawerClose]: !drawerState,
                    })}>

                <List component="nav" className={myStyle.list}>

                    <Link to={CONSTANTS.LINK_DASHBOARD}>
                        <ListItem button onClick={drawerToggle}>
                            <ListItemText>{CONSTANTS.NAME_DASHBOARD}</ListItemText>
                        </ListItem>
                    </Link>

                    <Link to={CONSTANTS.LINK_CLIENT}>
                        <ListItem button onClick={drawerToggle}>
                            <ListItemText>{CONSTANTS.NAME_CLIENT}</ListItemText>
                        </ListItem>
                    </Link>

                    <Link to={CONSTANTS.LINK_DEVICES}>
                        <ListItem button onClick={drawerToggle}>
                            <ListItemText>{CONSTANTS.NAME_DEVICES}</ListItemText>
                        </ListItem>
                    </Link>

                    <Link to={CONSTANTS.LINK_SETTINGS}>
                        <ListItem button onClick={drawerToggle}>
                            <ListItemText>{CONSTANTS.NAME_SETTINGS}</ListItemText>
                        </ListItem>
                    </Link>

                </List>
            </Drawer>
        </Fragment>
    );
};

export default CustomDrawer;