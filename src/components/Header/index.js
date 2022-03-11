import React, {Fragment} from "react";
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import {Button, Divider, Grid, List, ListItemText} from "@material-ui/core";
import {useAppBarStyle} from "./style";
import NotificationsIcon from '@material-ui/icons/Notifications';

const CustomHeader = (props) => {
    const {drawerToggle} = props;
    const myStyle = useAppBarStyle();

    return (
        <Fragment>
            <Grid container>
                <Grid item xs={12}>
                    <AppBar position="fixed" className={myStyle.appbar}>
                        <Toolbar>
                            <div className={myStyle.logo} onClick={drawerToggle}>
                                <img src="https://dev.bs.spacecode.in/static/media/Picture1.3bfe806c.png"
                                     alt="Blood Space"/>
                            </div>
                            <Typography variant="h6" component="div">
                                Dashboard
                            </Typography>
                            <NotificationsIcon/>
                            <Divider orientation="vertical" flexItem/>
                            <List className={myStyle.list}
                                  component="nav"
                                  aria-labelledby="nested-list-subheader">
                                <Button>
                                    <ListItemText primary={"Spacecode"}/>
                                </Button>
                            </List>

                        </Toolbar>
                    </AppBar>
                </Grid>
            </Grid>
        </Fragment>
    )
};

export default CustomHeader;