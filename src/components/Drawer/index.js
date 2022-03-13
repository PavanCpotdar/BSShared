import React, {Fragment} from "react";
import {useDrawerStyle} from "./style";
import {List, ListItem, ListItemText, Drawer} from "@material-ui/core";
import clsx from "clsx";

const CustomDrawer = (props) => {
    const {drawerState, drawerToggle} = props;

    const myStyle = useDrawerStyle();

    return (
        <Fragment>

            <Drawer variant="permanent" open={drawerState}
                    className={clsx(myStyle.root, {
                        [myStyle.drawerOpen]: drawerState,
                        [myStyle.drawerClose]: !drawerState,
                    })}>

                <List component="nav" className={myStyle.list}>

                    <ListItem button onClick={drawerToggle}>
                        <ListItemText>Dashboard</ListItemText>
                    </ListItem>

                    <ListItem button onClick={drawerToggle}>
                        <ListItemText>Client</ListItemText>
                    </ListItem>

                    <ListItem button onClick={drawerToggle}>
                        <ListItemText>Devices</ListItemText>
                    </ListItem>

                    <ListItem button onClick={drawerToggle}>
                        <ListItemText>Settings</ListItemText>
                    </ListItem>

                </List>
            </Drawer>
        </Fragment>
    );
};

export default CustomDrawer;